"use client";

import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: 1,
    date: "30, MAY",
    category: "SHELTER",
    title: "Your mission is the same as ours inspiration for poor",
    time: "08:00 am - 05:00 pm",
    location: "New Hyde park, NY 5684",
    image: "/images/event/event-2-1.jpg",
  },
  {
    id: 2,
    date: "28, JUNE",
    category: "CHARITY",
    title: "Trustee Leadership spring in 2023 on Charity",
    time: "08:00 am - 05:00 pm",
    location: "New Hyde park, NY 5684",
    image: "/images/event/event-2-2.jpg",
  },
];

export default function EventsSection() {
  return (
    <section className="tp-event-2__area pt-120 pb-120">
      <div className="container">
        <div className="row">
          {/* Left content */}
          <div
            className="col-xl-5 col-lg-5 col-md-12 wow tpfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="tp-event-2__left-side p-relative">
              {/* <div className="tp-event-2__shape d-none d-xl-block">
                <Image
                  src="/images/event/event-shape-2.png"
                  alt="Shape"
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
                  Charity is the act of extending love and kindness to others
                  <br />
                  unconditional which is a conscious act but the decision is
                  <br />
                  made by the heart, without expecting
                </p>
              </div>
              <Link className="tp-btn" href="/event-details">
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
              {events.map((event) => (
                <div key={event.id} className="tp-event-2__item-box mb-20">
                  <div className="tp-event-2__item d-flex align-items-center">
                    {/* Thumb */}
                    <div className="tp-event-2__item-thumb p-relative">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={200}
                        height={140}
                        className="w-full h-auto"
                      />
                      <div className="tp-event-2__item-thumb-text">
                        <span>{event.date}</span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="tp-event-2__text">
                      <b>{event.category}</b>
                      <Link href="/event-details">
                        <h5 className="tp-event-2__title-sm">{event.title}</h5>
                      </Link>
                      <div className="tp-event-2__meta">
                        <span>
                          <i className="fa-regular fa-clock"></i> {event.time}
                        </span>
                        <span>
                          <i class="fa-solid fa-location-dot"></i>{" "}
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
