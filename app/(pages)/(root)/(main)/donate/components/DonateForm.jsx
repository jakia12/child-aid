"use client";

import { useMemo, useState } from "react";
import { z } from "zod";

export default function DonateForm({
  amounts = [10, 25, 50, 100, 250],
  defaultAmount = 50,
}) {
  const [frequency, setFrequency] = useState("once");
  const [amount, setAmount] = useState(defaultAmount);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // NEW: phone
  const [country, setCountry] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const finalAmount = useMemo(() => {
    const n = Number(String(custom).replace(/[^\d.]/g, ""));
    return Number.isFinite(n) && n > 0 ? Math.round(n * 100) / 100 : amount;
  }, [custom, amount]);

  const currency = (n) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  // ---- Validation ----
  const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

  const donationSchema = z.object({
    frequency: z.enum(["once", "monthly"], {
      errorMap: () => ({ message: "Please select a frequency." }),
    }),
    finalAmount: z
      .number({ invalid_type_error: "Please enter a donation amount." })
      .positive("Amount must be greater than 0."),
    name: z
      .string()
      .trim()
      .min(1, "Full name is required.")
      .max(80, "Name is too long."),
    email: z
      .string()
      .trim()
      .min(1, "Email is required.")
      .email("Please enter a valid email."),
    phone: z
      .string()
      .trim()
      .min(1, "Phone number is required.")
      .regex(phoneRegex, "Please enter a valid phone number."),
    country: z.string().min(1, "Please select a country."),
    anonymous: z.boolean(),
    message: z
      .string()
      .max(500, "Message must be 500 characters or less.")
      .optional(),
    agree: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms to continue." }),
    }),
  });

  const clearError = (key) =>
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));

  const submit = async (e) => {
    e.preventDefault();
    setErrors({});

    const payload = {
      frequency,
      finalAmount: Number(finalAmount),
      name,
      email,
      phone, // include phone
      country,
      anonymous,
      message,
      agree,
    };

    const result = donationSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] || "form";
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: payload.finalAmount,
          frequency: payload.frequency,
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          country: payload.country,
          anonymous: payload.anonymous,
          message: payload.message,
        }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        setErrors({ form: `Checkout error (HTTP ${res.status}).` });
        return;
      }

      if (!res.ok) {
        setErrors({ form: data?.error || "Unable to start checkout." });
        return;
      }

      const { url } = data || {};
      if (!url) {
        setErrors({ form: "Checkout session not created (no url)." });
        return;
      }

      // Optional success note before redirect
      setErrors({ success: "Donation successful — redirecting to Stripe…" });

      // Redirect directly using the URL from Stripe (no publishable key needed)
      window.location.href = url;
    } catch (_err) {
      setErrors({ form: "Unexpected error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Scoped theme overrides for Bootstrap buttons (kept as in your file) */}
      <style jsx global>{`
        /* Scope to this component only */
        .donate-theme .btn-primary {
          --bs-btn-bg: #fe7f4c;
          --bs-btn-border-color: #fe7f4c;
          --bs-btn-hover-bg: #e87041;
          --bs-btn-hover-border-color: #e87041;
          --bs-btn-active-bg: #d9653a;
          --bs-btn-active-border-color: #d9653a;
          --bs-btn-focus-shadow-rgb: 254, 127, 76;
        }
        .donate-theme .btn-outline-primary {
          --bs-btn-color: #fe7f4c;
          --bs-btn-border-color: #fe7f4c;
          --bs-btn-hover-bg: #fe7f4c;
          --bs-btn-hover-border-color: #fe7f4c;
          --bs-btn-active-bg: #e87041;
          --bs-btn-active-border-color: #e87041;
          --bs-btn-disabled-color: #fe7f4c;
          --bs-btn-disabled-border-color: #fe7f4c;
        }
      `}</style>

      <form onSubmit={submit} noValidate className="donate-theme">
        {errors.form && (
          <div className="alert alert-danger py-2 small">{errors.form}</div>
        )}
        {errors.success && (
          <div className="alert alert-success py-2 small">{errors.success}</div>
        )}

        {/* Frequency */}
        <div
          className="btn-group w-100 mb-1"
          role="group"
          aria-label="Donation frequency"
        >
          <input
            type="radio"
            className="btn-check"
            name="freq"
            id="freq-once"
            checked={frequency === "once"}
            onChange={() => {
              setFrequency("once");
              clearError("frequency");
            }}
          />
          <label className="btn btn-outline-primary" htmlFor="freq-once">
            One-time
          </label>

          <input
            type="radio"
            className="btn-check"
            name="freq"
            id="freq-monthly"
            checked={frequency === "monthly"}
            onChange={() => {
              setFrequency("monthly");
              clearError("frequency");
            }}
          />
          <label className="btn btn-outline-primary" htmlFor="freq-monthly">
            Monthly
          </label>
        </div>
        {errors.frequency && (
          <div className="invalid-feedback d-block">{errors.frequency}</div>
        )}

        {/* Amounts */}
        <div
          className="d-flex flex-wrap gap-2"
          style={{ marginTop: 15, marginBottom: 30 }}
        >
          {amounts.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => {
                setAmount(v);
                setCustom("");
                clearError("finalAmount");
              }}
              className={`btn btn-sm ${
                finalAmount === v && !custom
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
            >
              {currency(v)}
            </button>
          ))}
          <div
            className="input-group input-group-sm flex-grow-1"
            style={{ minWidth: 180, marginTop: 15 }}
          >
            <span className="input-group-text">$</span>
            <input
              type="number"
              min="1"
              step="1"
              inputMode="numeric"
              className={`form-control border ${
                errors.finalAmount ? "is-invalid" : ""
              }`}
              placeholder="Custom amount"
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                clearError("finalAmount");
              }}
            />
          </div>
        </div>
        {errors.finalAmount && (
          <div className="invalid-feedback d-block">{errors.finalAmount}</div>
        )}

        {/* Contact */}
        <div className="row g-2 mt-2">
          <div className="col-12 col-md-6">
            <label className="form-label">Full name</label>
            <input
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearError("name");
              }}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="john@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Phone */}
          <div className="col-12 col-md-6">
            <label className="form-label">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              placeholder="+1 (555) 123-4567"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                clearError("phone");
              }}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone}</div>
            )}
          </div>

          {/* Country beside Phone to keep balance on desktop */}
          <div className="col-12 col-md-6">
            <label className="form-label">Country</label>
            <select
              className={`form-select ${errors.country ? "is-invalid" : ""}`}
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                clearError("country");
              }}
            >
              <option value="">Select country</option>
              <option value="US">United States</option>
              <option value="BD">Bangladesh</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
            </select>
            {errors.country && (
              <div className="invalid-feedback">{errors.country}</div>
            )}
          </div>
        </div>

        {/* Message (optional) */}
        <div className="mt-3">
          <label className="form-label">Message (optional)</label>
          <textarea
            rows={3}
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            placeholder="A short note with your gift…"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              clearError("message");
            }}
          />
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        {/* Summary */}
        <div className="d-flex justify-content-between align-items-center mt-4 p-3 rounded border bg-light">
          <div className="small text-muted">
            You’re donating{" "}
            <strong>{frequency === "monthly" ? "monthly" : "one-time"}</strong>
          </div>
          <div className="fs-5 fw-semibold">${finalAmount || 0}</div>
        </div>

        {/* Consent */}
        <div className="form-check mt-3">
          <input
            className={`form-check-input ${errors.agree ? "is-invalid" : ""}`}
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={(e) => {
              setAgree(e.target.checked);
              clearError("agree");
            }}
          />
          <label className="form-check-label" htmlFor="agree">
            I agree to the terms and understand this payment will be processed
            securely.
          </label>
          {errors.agree && (
            <div className="invalid-feedback d-block">{errors.agree}</div>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className=" tp-btn w-100 mt-3" disabled={loading}>
          {loading ? "Processing…" : "Donate securely"}
        </button>

        {/* Payment badges */}
        <div className="text-center ">
          <img
            src="/images/payment/2.png"
            alt="Payment methods"
            className="img-fluid"
            style={{ height: "100px" }}
          />
        </div>
      </form>
    </>
  );
}
