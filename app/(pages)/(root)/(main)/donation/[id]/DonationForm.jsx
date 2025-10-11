"use client";

import { useMemo, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { z } from "zod";

// Zod schema (runs on submit)
const donationSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .regex(/^[+()\-.\s0-9]+$/, "Use digits and phone characters only"),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1, "Minimum donation is $1"),
  frequency: z.enum(["one-time", "monthly"]),
});

export default function DonationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: 50,
    frequency: "one-time",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({}); // { fieldName: "message" }

  const setField = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const amountOptions = useMemo(() => [25, 50, 100, 250], []);

  function validate(data) {
    const res = donationSchema.safeParse(data);
    if (res.success) {
      setErrors({});
      return { ok: true, data: res.data };
    }
    const fieldErrors = {};
    res.error.issues.forEach((i) => {
      const k = i.path[0];
      if (!fieldErrors[k]) fieldErrors[k] = i.message;
    });
    setErrors(fieldErrors);
    return { ok: false };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    // Ensure number type for amount
    const payload = {
      ...form,
      amount: Number(form.amount),
    };

    const result = validate(payload);
    if (!result.ok) {
      const first = Object.values(errors)[0];
      if (first) toast.error(String(first));
      return;
    }

    // Map frequency to API's expected values: "one-time" -> "once"
    const apiFrequency = form.frequency === "one-time" ? "once" : "monthly";

    const loadingId = toast.loading("Creating secure checkout…");
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number(form.amount),
          frequency: apiFrequency,
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          country: "", // optional; not in this form
          anonymous: false, // optional; not in this form
          message: "", // optional; not in this form
        }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        toast.error(`Checkout error (HTTP ${res.status}).`);
        return;
      }

      if (!res.ok) {
        toast.error(data?.error || "Unable to start checkout.");
        return;
      }

      if (!data?.url) {
        toast.error("Checkout session not created (no url).");
        return;
      }

      toast.success("Donation details received. Redirecting to Stripe…");
      window.location.href = data.url; // direct redirect (no stripe-js needed)
    } catch (err) {
      toast.error("Unexpected error. Please try again.");
    } finally {
      toast.dismiss(loadingId);
    }
  }

  return (
    <>
      <Toaster position="top-right" />

      <form onSubmit={handleSubmit} className="card shadow-sm border-0">
        <div className="card-body ">
          <h5 className="mb-3">Donate to this project</h5>

          <div className="row g-2">
            <div className="col-md-6">
              <label htmlFor="fullName" className="form-label">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                className={`form_dsn  ${
                  submitted && errors.fullName ? "is-invalid" : ""
                }`}
                value={form.fullName}
                onChange={(e) => setField("fullName", e.target.value)}
                placeholder="Jane Doe"
                autoComplete="name"
              />
              {submitted && errors.fullName && (
                <div className="invalid-feedback">{errors.fullName}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`form_dsn ${
                  submitted && errors.email ? "is-invalid" : ""
                }`}
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="jane@example.com"
                autoComplete="email"
              />
              {submitted && errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="col-12">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className={`form_dsn ${
                  submitted && errors.phone ? "is-invalid" : ""
                }`}
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                autoComplete="tel"
              />
              {submitted && errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="amount" className="form-label">
              Donation amount
            </label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                id="amount"
                type="number"
                min={1}
                step={1}
                className={`form-control ${
                  submitted && errors.amount ? "is-invalid" : "border"
                }`}
                value={form.amount}
                onChange={(e) =>
                  setField("amount", Number(e.target.value || 0))
                }
              />
            </div>
            {submitted && errors.amount && (
              <div className="invalid-feedback d-block">{errors.amount}</div>
            )}

            <div className="d-flex gap-2 mt-3 flex-wrap">
              {amountOptions.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`btn btn-sm ${
                    form.amount === amt
                      ? "btn-secondary"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setField("amount", amt)}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="form-label">Frequency</label>
            <div className="d-flex gap-2">
              <button
                type="button"
                className={` ${
                  form.frequency === "one-time"
                    ? "btn_orange"
                    : "btn_out_orange"
                }`}
                onClick={() => setField("frequency", "one-time")}
                aria-pressed={form.frequency === "one-time"}
              >
                One-time
              </button>
              <button
                type="button"
                className={` ${
                  form.frequency === "monthly" ? "btn_orange" : "btn_out_orange"
                }`}
                onClick={() => setField("frequency", "monthly")}
                aria-pressed={form.frequency === "monthly"}
              >
                Monthly
              </button>
            </div>
          </div>

          <button type="submit" className="tp-btn w-100 mt-4">
            <i className="fa-solid fa-heart me-2" aria-hidden="true" />
            Donate now
          </button>

          <p className="small text-muted mt-3 mb-0">
            Your donation is secure and tax-deductible where applicable.
          </p>
        </div>
      </form>
    </>
  );
}
