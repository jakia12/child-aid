import PageBanner from "@/components/shared/PageBanner";
import Link from "next/link";
import { DONATIONS, formatCurrency, getDonationById } from "../data";
import DonationForm from "./DonationForm";

export function generateStaticParams() {
  return DONATIONS.map((d) => ({ id: String(d.id) }));
}

export const dynamicParams = false;

export default function DonationDetailsPage({ params }) {
  const donation = getDonationById(params.id);

  if (!donation) {
    return (
      <div className="container py-120">
        <div className="alert alert-warning">Donation not found.</div>
        <Link href="/donation" className="btn btn-outline-secondary mt-2">
          Back to Donations
        </Link>
      </div>
    );
  }

  const progress = Math.min(100, Math.max(0, donation.percent));
  const remaining = Math.max(0, donation.goal - donation.raised);

  return (
    <div>
      <PageBanner title={donation.title} />
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="card shadow-sm border-0">
                <img
                  src={donation.img}
                  className="card-img-top"
                  alt={donation.title}
                />
                <div className="card-body p-4">
                  <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                    <span className="badge bg-primary-subtle text-primary px-3 py-2">
                      <i className="fi-rr-tag me-2"></i>
                      {donation.category}
                    </span>
                    <span className="text-muted small">
                      <i className="fa-regular fa-clock me-1"></i>Updated{" "}
                      {donation.lastUpdated}
                    </span>
                    <span className="text-muted small">
                      <i className="fa-solid fa-location-dot me-1"></i>
                      {donation.location}
                    </span>
                  </div>

                  <h2 className="h4 mb-3">{donation.title}</h2>
                  <p className="lead text-secondary mb-4">
                    {donation.shortDescription}
                  </p>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-semibold">{progress}% funded</span>
                      <span className="text-muted small">
                        {donation.donors} supporters
                      </span>
                    </div>
                    <div className="progress" style={{ height: 10 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${progress}%` }}
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2 small text-muted">
                      <span>
                        Raised{" "}
                        <strong>{formatCurrency(donation.raised)}</strong>
                      </span>
                      <span>
                        Goal <strong>{formatCurrency(donation.goal)}</strong>
                      </span>
                      <span>
                        Remaining <strong>{formatCurrency(remaining)}</strong>
                      </span>
                    </div>
                  </div>

                  <h3 className="h5 mb-3">How your gift helps</h3>
                  <ul className="list-group list-group-flush mb-4">
                    {donation.impactBullets.map((b, idx) => (
                      <li key={idx} className="list-group-item px-0">
                        <i className="fa-solid fa-circle-check text-success me-2"></i>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <h3 className="h5 mb-3">Project story</h3>
                  <p className="mb-0 text-secondary">{donation.story}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="card border-0 shadow-sm sticky-top"
                style={{ top: 24 }}
              >
                <div className="card-body p-4">
                  <DonationForm />
                </div>
              </div>

              <div className="card border-0 shadow-sm mt-4">
                <div className="card-body p-4">
                  <h6 className="text-uppercase text-muted mb-2">Share</h6>
                  <div className="d-flex gap-2">
                    <a className="btn btn-outline-secondary btn-sm" href="#">
                      <i className="fa-brands fa-x-twitter me-2"></i>Twitter
                    </a>
                    <a className="btn btn-outline-secondary btn-sm" href="#">
                      <i className="fa-brands fa-facebook-f me-2"></i>Facebook
                    </a>
                    <a className="btn btn-outline-secondary btn-sm" href="#">
                      <i className="fa-brands fa-linkedin-in me-2"></i>LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <h3 className="h5 mb-3">You may also like</h3>
            </div>
            {DONATIONS.filter((d) => d.id !== donation.id)
              .slice(0, 3)
              .map((d) => (
                <div key={d.id} className="col-md-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <img src={d.img} className="card-img-top" alt={d.title} />
                    <div className="card-body">
                      <span className="badge bg-light text-secondary mb-2">
                        {d.category}
                      </span>
                      <h6 className="card-title">{d.title}</h6>
                      <p className="card-text small text-muted">
                        {d.shortDescription}
                      </p>
                      <Link
                        href={`/donation/${d.id}`}
                        className="stretched-link"
                      >
                        View project
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
