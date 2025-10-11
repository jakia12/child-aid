"use client";

import Image from "next/image";
import Link from "next/link";
import { events } from "../events/data";

export default function EventsSection() {
  return (
    <section className="tp-event-2__area pt-120 pb-120">
      <div className="container px-3">
        <div className="row">
          {/* Left content */}
          <div
            className="col-xl-5 col-lg-5 col-md-12 wow tpfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="tp-event-2__left-side p-relative">
              {/* Optional shape */}
              {/* <div className="tp-event-2__shape d-none d-xl-block">
                <Image
                  src="/images/event/event-shape-2.png"
                  alt="Decorative shape"
                  width={300}
                  height={300}
                />
              </div> */}
              <div className="tp-event-2__section-title pb-20">
                <span className="tp-section-subtitle-2">FUTURE EVENTS</span>
                <h4 className="tp-section-title">
                  Join Our Latest <br />
                  Upcoming Events
                </h4>
              </div>
              <div className="tp-event-2__left-text">
                <p>
                  Charity is love put into action. Every event we host is a
                  chance to come together, share kindness, and create lasting
                  impact for children and families in need.
                </p>
              </div>
              <Link className="tp-btn" href="/events">
                Discover More
              </Link>
            </div>
          </div>

          {/* Right side (Events list) */}
          <div
            className="col-xl-7 col-lg-7 col-md-12 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <div className="tp-event-2__wrapper">
              {events.slice(0, 2).map((event) => (
                <div key={event.id} className="tp-event-2__item-box mb-20">
                  <div className="tp-event-2__item d-flex align-items-center">
                    {/* Thumb */}
                    <div className="tp-event-2__item-thumb p-relative">
                      <Image
                        src={event.coverImage}
                        alt={event.title}
                        width={200}
                        height={140}
                        className="w-full h-auto"
                        priority={event.id === 1}
                      />
                      <div className="tp-event-2__item-thumb-text">
                        <span>{event.date}</span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="tp-event-2__text">
                      <b>{event.category}</b>
                      <Link href={`/events/${event.slug}`}>
                        <h5 className="tp-event-2__title-sm">{event.title}</h5>
                      </Link>
                      <div className="tp-event-2__meta">
                        <span>
                          <i className="fa-regular fa-clock" /> {event.time}
                        </span>
                        <span>
                          <i className="fa-solid fa-location-dot" />{" "}
                          {event.location?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* /events.map */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
