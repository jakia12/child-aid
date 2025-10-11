// app/api/create-checkout-session/route.js
import Stripe from "stripe";

// Ensure this runs on Node, not Edge
export const runtime = "nodejs";
// Avoid static optimization so env + headers are always available
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing STRIPE_SECRET_KEY" }),
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const {
      amount,
      frequency,
      name,
      email,
      phone,
      country,
      anonymous,
      message,
    } = body || {};

    const cents = Math.round(Number(amount) * 100);
    if (!cents || cents <= 0) {
      return new Response(
        JSON.stringify({ error: "Invalid amount (> 0 required)" }),
        { status: 400 }
      );
    }
    if (!["once", "monthly"].includes(frequency || "")) {
      return new Response(JSON.stringify({ error: "Invalid frequency" }), {
        status: 400,
      });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
    });

    // Build absolute URLs. Prefer BASE_URL if you set it, else use request origin, else localhost.
    const headers = req.headers;
    const origin =
      process.env.BASE_URL ||
      headers.get("origin") ||
      headers.get("referer")?.replace(/\/$/, "") ||
      "http://localhost:3000";

    const productName =
      frequency === "monthly" ? "Monthly Donation" : "One-time Donation";

    const common = {
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate?canceled=true`,
      customer_email: email || undefined,
      metadata: {
        name: name || "",
        email: email || "",
        phone: phone || "",
        country: country || "",
        anonymous: String(Boolean(anonymous)),
        message: message || "",
        frequency,
      },
    };

    let session;
    if (frequency === "monthly") {
      session = await stripe.checkout.sessions.create({
        ...common,
        mode: "subscription",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: productName },
              recurring: { interval: "month" },
              unit_amount: cents,
            },
            quantity: 1,
          },
        ],
      });
    } else {
      session = await stripe.checkout.sessions.create({
        ...common,
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: productName },
              unit_amount: cents,
            },
            quantity: 1,
          },
        ],
      });
    }

    // Return the URL so the client can window.location to it.
    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err) {
    const msg =
      err?.raw?.message || err?.message || "Server error creating session.";
    console.error("Stripe error:", msg);
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
}
