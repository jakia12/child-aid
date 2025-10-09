"use client";

import { useMemo, useState } from "react";

export default function DonateForm({
  amounts = [10, 25, 50, 100, 250],
  defaultAmount = 50,
}) {
  const [frequency, setFrequency] = useState("once"); // once | monthly
  const [amount, setAmount] = useState(defaultAmount);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(true);
  const [loading, setLoading] = useState(false);

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

  const submit = async (e) => {
    e.preventDefault();
    if (!finalAmount || finalAmount <= 0)
      return toast("Please enter a valid amount.");
    if (!email) return toast("Please enter a valid email.");
    if (!agree) return toast("Please accept the terms to continue.");

    setLoading(true);
    try {
      // TODO: replace with a real API route
      await new Promise((r) => setTimeout(r, 900));
      toast(
        `Thanks${name ? `, ${name}` : ""}! You donated ${currency(
          finalAmount
        )} ${frequency === "monthly" ? "monthly" : "one-time"}.`
      );
      // reset a bit
      setCustom("");
      setAmount(defaultAmount);
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  // tiny toast helper using Bootstrap alerts
  const [toastMsg, setToastMsg] = useState("");
  const toast = (m) => {
    setToastMsg(m);
    setTimeout(() => setToastMsg(""), 2200);
  };

  return (
    <form onSubmit={submit} noValidate>
      {toastMsg && (
        <div className="alert alert-warning py-2 small">{toastMsg}</div>
      )}

      {/* Frequency */}
      <div
        className="btn-group w-100 mb-3"
        role="group"
        aria-label="Donation frequency"
      >
        <input
          type="radio"
          className="btn-check"
          name="freq"
          id="freq-once"
          checked={frequency === "once"}
          onChange={() => setFrequency("once")}
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
          onChange={() => setFrequency("monthly")}
        />
        <label className="btn btn-outline-primary" htmlFor="freq-monthly">
          Monthly
        </label>
      </div>

      {/* Amounts */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        {amounts.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => {
              setAmount(v);
              setCustom("");
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
            className="form-control border"
            placeholder="Custom amount"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
          />
        </div>
      </div>

      {/* Contact */}
      <div className="row g-2">
        <div className="col-12 col-md-6">
          <label className="form-label">Full name</label>
          <input
            className="form-control"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label">
            Email <span className="text-danger">*</span>
          </label>

          <input
            className="form-control"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Country</label>
          <select
            className="form-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select country</option>
            <option value="US">United States</option>
            <option value="BD">Bangladesh</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            {/* add as needed */}
          </select>
        </div>
      </div>

      {/* Options */}
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="anonymous"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="anonymous">
          Give anonymously
        </label>
      </div>

      <div className="mt-3">
        <label className="form-label">Message (optional)</label>
        <textarea
          rows={3}
          className="form-control"
          placeholder="A short note with your gift…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
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
          className="form-check-input"
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="agree">
          I agree to the terms and understand this payment will be processed
          securely.
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary w-100 mt-3"
        disabled={loading}
      >
        {loading ? "Processing…" : "Donate securely"}
      </button>

      {/* Payment badges (visual trust) */}
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
