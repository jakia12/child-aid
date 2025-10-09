// components/EventSection.jsx
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { getAllEvents } from "../data";

function EventCard({ event, delay }) {
  return (
    <div
      className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
      data-wow-duration=".9s"
      data-wow-delay={delay}
    >
      <div className="tp-event__wrapper">
        <div className="tp-event__item">
          {/* Thumbnail */}
          <div className="tp-event__thumb p-relative">
            <img src={event.coverImage} alt={event.title} />
            <div className="tp-event__thumb-text">
              <h4 className="tp-event__thumb-date">
                {event.dateDisplay.day} <br />
                <span>{event.dateDisplay.month}</span>
              </h4>
            </div>
          </div>

          {/* Content */}
          <div className="tp-event__content">
            <div className="tp-event__meta">
              <span style={{ color: "#444" }}>
                <i className="far fa-clock"></i>
                {event.dateDisplay.time}
              </span>
              <Link href={`/events/${event.slug}`}>
                <span style={{ color: "#444" }}>
                  <i className="fa-solid fa-location-dot"></i>
                  {event.location?.name}
                </span>
              </Link>
            </div>
            <Link href={`/events/${event.slug}`}>
              <h4 className="tp-event__title">{event.title}</h4>
            </Link>
            <div className="tp-event__link">
              <Link
                href={`/events/${event.slug}`}
                className="flex items-center gap-3 text-[#444]"
                style={{ color: "#555" }}
              >
                Read More
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventSection() {
  const EVENTS = getAllEvents();
  return (
    <div className="tp-event__area pt-115 pb-90">
      <div className="container">
        <div className="row">
          {EVENTS.map((event, i) => (
            <EventCard
              key={event.id}
              event={event}
              delay={`${0.3 + i * 0.2}s`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
