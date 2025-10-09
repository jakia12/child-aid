// app/donate/page.jsx

import PageBanner from "@/components/shared/PageBanner";
import DonateForm from "./components/DonateForm";

export const metadata = {
  title: "Donate — ChildAid",
  description: "Make a secure one-time or monthly gift.",
};

export default function DonatePage() {
  return (
    <>
      <PageBanner
        title="Make a Donation"
        subtitle="Your gift provides education, healthcare, food, and safe shelter."
        bgImage="/img/hero/donate-hero.jpg" // fallback; replace with your CDN image
      />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* FORM */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h2 className="h4 mb-1">Donate now</h2>
                  <p className="text-secondary mb-4">
                    Choose an amount and frequency. Every gift makes a real
                    impact.
                  </p>
                  <DonateForm
                    amounts={[10, 25, 50, 100, 250]}
                    defaultAmount={50}
                  />
                  <p className="small text-muted mt-3 mb-0">
                    By donating, you agree to our Terms & Privacy. Recurring
                    gifts can be changed or canceled anytime from your receipt
                    link.
                  </p>
                </div>
              </div>
            </div>

            {/* SIDE INFO */}
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h6 className="text-uppercase text-muted mb-2">
                    Where your gift goes
                  </h6>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item px-0 d-flex align-items-start gap-3">
                      <span className="badge bg-primary-subtle text-primary rounded-pill">
                        Education
                      </span>
                      <span className="text-secondary small">
                        Books, tuition, safe classrooms, teacher training.
                      </span>
                    </li>
                    <li className="list-group-item px-0 d-flex align-items-start gap-3">
                      <span className="badge bg-success-subtle text-success rounded-pill">
                        Healthcare
                      </span>
                      <span className="text-secondary small">
                        Checkups, vaccines, and essential medicines.
                      </span>
                    </li>
                    <li className="list-group-item px-0 d-flex align-items-start gap-3">
                      <span className="badge bg-info-subtle text-info rounded-pill">
                        Water & Food
                      </span>
                      <span className="text-secondary small">
                        Clean water systems and daily meals for children.
                      </span>
                    </li>
                    <li className="list-group-item px-0 d-flex align-items-start gap-3">
                      <span className="badge bg-warning-subtle text-warning rounded-pill">
                        Shelter
                      </span>
                      <span className="text-secondary small">
                        Safe housing and family support during crises.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h6 className="text-uppercase text-muted mb-2">
                    Trust & Security
                  </h6>
                  <div className="d-flex flex-column gap-2 small text-secondary">
                    <div>
                      <i className="fa-solid fa-lock me-2 text-success"></i>
                      256-bit SSL encrypted checkout
                    </div>
                    <div>
                      <i className="fa-regular fa-file-lines me-2 text-primary"></i>
                      Tax-deductible receipts by email
                    </div>
                    <div>
                      <i className="fa-regular fa-circle-check me-2 text-info"></i>
                      We never sell or trade your data
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h6 className="text-uppercase text-muted mb-2">FAQs</h6>
                  <div className="accordion" id="donateFaq">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#f1"
                        >
                          Can I make this monthly?
                        </button>
                      </h2>
                      <div
                        id="f1"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#donateFaq"
                      >
                        <div className="accordion-body small text-secondary">
                          Yes—choose <strong>Monthly</strong> in the form. You
                          can update or cancel anytime.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#f2"
                        >
                          Will I get a receipt?
                        </button>
                      </h2>
                      <div
                        id="f2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#donateFaq"
                      >
                        <div className="accordion-body small text-secondary">
                          A receipt is emailed immediately after your donation
                          is processed.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#f3"
                        >
                          How are funds used?
                        </button>
                      </h2>
                      <div
                        id="f3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#donateFaq"
                      >
                        <div className="accordion-body small text-secondary">
                          We direct funds to the highest impact programs
                          (education, healthcare, water & food, and shelter)
                          unless you specify otherwise at checkout.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* small global touch-ups */}
    </>
  );
}
