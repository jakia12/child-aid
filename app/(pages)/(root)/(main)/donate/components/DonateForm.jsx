"use client";

import { useMemo, useState } from "react";
import { z } from "zod";

export default function DonateForm({
  amounts = [10, 25, 50, 100, 250],
  defaultAmount = 50,
}) {
  const [frequency, setFrequency] = useState("once"); // once | monthly (required)
  const [amount, setAmount] = useState(defaultAmount); // quick amount
  const [custom, setCustom] = useState(""); // custom amount
  const [name, setName] = useState(""); // required
  const [email, setEmail] = useState(""); // required
  const [country, setCountry] = useState(""); // required
  const [anonymous, setAnonymous] = useState(false); // user choice (not forced to true)
  const [message, setMessage] = useState(""); // OPTIONAL
  const [agree, setAgree] = useState(false); // required (must be checked)
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

  // Zod: only message optional; everything else required
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
    country: z.string().min(1, "Please select a country."),
    anonymous: z.boolean(), // required field present, but value can be true/false
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
      // TODO: replace with your real API route
      await new Promise((r) => setTimeout(r, 900));
      setErrors({
        success: `Thanks${name ? `, ${name}` : ""}! You donated ${currency(
          finalAmount
        )} ${frequency === "monthly" ? "monthly" : "one-time"}.`,
      });

      // Reset some fields
      setCustom("");
      setAmount(defaultAmount);
      setMessage("");
      setAgree(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} noValidate>
      {errors.success && (
        <div className="alert alert-success py-2 small">{errors.success}</div>
      )}

      {/* Frequency (required) */}
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

      {/* Amounts (required via finalAmount) */}
      <div className="d-flex flex-wrap gap-2 mb-1">
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
          style={{ minWidth: 180 }}
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

      {/* Contact (all required except message) */}
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
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
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

        <div className="col-12">
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
            {/* add more as needed */}
          </select>
          {errors.country && (
            <div className="invalid-feedback">{errors.country}</div>
          )}
        </div>
      </div>

      {/* Anonymous (required field presence, value can be true/false) */}
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="anonymous"
          checked={anonymous}
          onChange={(e) => {
            setAnonymous(e.target.checked);
            clearError("anonymous");
          }}
        />
        <label className="form-check-label" htmlFor="anonymous">
          Give anonymously
        </label>
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

      {/* Consent (must be checked) */}
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
      <button
        type="submit"
        className="btn btn-primary w-100 mt-3"
        disabled={loading}
      >
        {loading ? "Processing…" : "Donate securely"}
      </button>

      {/* Payment badges */}
      <div className="text-center mt-3">
        <img
          src="/img/checkout/cards.png"
          alt="Payment methods"
          style={{ height: 22 }}
        />
      </div>
    </form>
  );
}
