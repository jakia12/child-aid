import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventBySlug } from "../data";

export default function SingleEventPage({ params }) {
  const { slug } = params;
  const event = getEventBySlug(slug);

  if (!event) return notFound();

  const progress = Math.min(
    100,
    Math.round((event.donationRaisedUsd / event.donationTargetUsd) * 100)
  );

  return (
    <div className="py-5">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/events">Events</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {event.title}
            </li>
          </ol>
        </nav>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="ratio ratio-16x9">
                {/* hero/cover */}
                {/* Using img for existing assets to avoid layout shift */}
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="card-body p-4">
                <h1 className="h3 mb-2">{event.title}</h1>
                <p className="text-muted mb-3">{event.subtitle}</p>
                <div className="d-flex flex-wrap gap-3 text-secondary small mb-4">
                  <span>
                    <i className="far fa-clock me-2" />
                    {event.dateDisplay.time}
                  </span>
                  <span>
                    <i className="fa-solid fa-location-dot me-2" />
                    {event.location.name}
                  </span>
                  <span>
                    <i className="fa-solid fa-tags me-2" />
                    {event.categories.join(", ")}
                  </span>
                </div>

                <p className="mb-4">{event.summary}</p>

                <h5 className="mb-3">Event Agenda</h5>
                <ul className="list-group list-group-flush mb-4">
                  {event.agenda.map((a, idx) => (
                    <li
                      key={idx}
                      className="list-group-item d-flex justify-content-between"
                    >
                      <span className="fw-medium">{a.item}</span>
                      <span className="text-secondary">{a.time}</span>
                    </li>
                  ))}
                </ul>

                <h5 className="mb-3">Impact</h5>
                <p className="mb-0">{event.impact}</p>
              </div>
            </div>

            {event.gallery?.length > 0 && (
              <div className="mt-4">
                <h5 className="mb-3">Gallery</h5>
                <div className="row g-3">
                  {event.gallery.map((src, idx) => (
                    <div className="col-6 col-md-4" key={idx}>
                      <div className="ratio ratio-4x3 rounded overflow-hidden">
                        <img
                          src={src}
                          alt={`Gallery ${idx + 1}`}
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* {event.faqs?.length > 0 && (
              <div className="mt-4">
                <h5 className="mb-3">FAQs</h5>
                <div className="accordion" id="faqAccordion">
                  {event.faqs.map((f, idx) => (
                    <div className="accordion-item" key={idx}>
                      <h2 className="accordion-header" id={`heading-${idx}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${idx}`}
                          aria-expanded="false"
                          aria-controls={`collapse-${idx}`}
                        >
                          {f.q}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${idx}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading-${idx}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">{f.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h5 className="mb-3">Event Details</h5>
                <div className="d-flex align-items-center mb-2">
                  <div className="display-6 fw-bold me-2">
                    {event.dateDisplay.day}
                  </div>
                  <div className="text-uppercase text-secondary">
                    {event.dateDisplay.month}
                  </div>
                </div>
                <div className="mb-2">
                  <i className="far fa-clock me-2" /> {event.dateDisplay.time}
                </div>
                <div className="mb-2">
                  <i className="fa-solid fa-location-dot me-2" />{" "}
                  {event.location.address}
                </div>
                <div className="mb-3">
                  <a
                    className="link-primary"
                    href={event.location.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on map
                  </a>
                </div>

                <h6 className="mt-3">Organizer</h6>
                <ul className="list-unstyled small mb-3">
                  <li className="mb-1">
                    <i className="fa-regular fa-building me-2" />{" "}
                    {event.organizer.name}
                  </li>
                  <li className="mb-1">
                    <i className="fa-solid fa-phone me-2" />{" "}
                    {event.organizer.phone}
                  </li>
                  <li className="mb-1">
                    <i className="fa-regular fa-envelope me-2" />{" "}
                    {event.organizer.email}
                  </li>
                  <li className="mb-1">
                    <i className="fa-solid fa-globe me-2" />
                    <a
                      href={event.organizer.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </li>
                </ul>

                <div className="mb-2 d-flex justify-content-between align-items-center">
                  <span className="small text-secondary">Raised</span>
                  <span className="fw-semibold">
                    ${event.donationRaisedUsd.toLocaleString()}
                  </span>
                </div>
                <div className="mb-2 d-flex justify-content-between align-items-center">
                  <span className="small text-secondary">Goal</span>
                  <span className="fw-semibold">
                    ${event.donationTargetUsd.toLocaleString()}
                  </span>
                </div>
                <div className="progress mb-3" style={{ height: 8 }}>
                  <div
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <Link href={event.ctaDonateLink} className="tp-btn w-100">
                  Donate Now
                </Link>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h6 className="mb-3">Share</h6>
                <div className="d-flex gap-2">
                  <a className="btn btn-outline-secondary btn-sm" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-secondary btn-sm" href="#">
                    <i className="fab fa-x-twitter" />
                  </a>
                  <a className="btn btn-outline-secondary btn-sm" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
