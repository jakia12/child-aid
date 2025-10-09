"use client";

import { useState } from "react";

export default function DonationForm() {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState("one-time");

  function handleSubmit(e) {
    e.preventDefault();
    // In a real app, integrate payment/checkout here
    // eslint-disable-next-line no-alert
    alert(`Thanks for your ${frequency} gift of $${amount}!`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Donation amount
        </label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input
            type="number"
            min="1"
            step="1"
            className="form-control border"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
          />
        </div>
      </div>
      <div className="d-flex gap-2 mb-3 flex-wrap">
        {[25, 50, 100, 250].map((amt) => (
          <button
            key={amt}
            type="button"
            className={`btn btn-sm ${
              amount === amt ? "btn-secondary" : "btn-outline-secondary"
            }`}
            onClick={() => setAmount(amt)}
          >
            ${amt}
          </button>
        ))}
      </div>
      <div className="mb-3">
        <label className="form-label">Frequency</label>
        <div className="d-flex gap-2">
          <button
            type="button"
            className={`btn ${
              frequency === "one-time" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setFrequency("one-time")}
          >
            One-time
          </button>
          <button
            type="button"
            className={`btn ${
              frequency === "monthly" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setFrequency("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>
      <button type="submit" className="tp-btn w-100">
        <i className="fa-solid fa-heart me-2" aria-hidden="true"></i>
        Donate now
      </button>
      <p className="small text-muted mt-2 mb-0">
        Your donation is secure and tax-deductible where applicable.
      </p>
    </form>
  );
}
