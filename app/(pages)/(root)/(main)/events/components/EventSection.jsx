// components/EventSection.jsx
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const EVENTS = [
  {
    id: 1,
    img: "/images/event/event-1-1.jpg",
    date: "17",
    month: "Jan",
    time: "4:30 am - 7:30 pm",
    location: "Watsica 24, USA",
    title: "Charity Forum: Building Stronger Communities",
    link: "/event-details",
  },
  {
    id: 2,
    img: "/images/event/event-1-2.jpg",
    date: "20",
    month: "Jan",
    time: "10:00 am - 2:00 pm",
    location: "Watsica 24, USA",
    title: "End Hunger Now: Community Food Drive",
    link: "/event-details",
  },
  {
    id: 3,
    img: "/images/event/event-1-3.jpg",
    date: "25",
    month: "Jan",
    time: "9:00 am - 1:00 pm",
    location: "Watsica 24, USA",
    title: "Youth Empowerment Workshop & Fundraiser",
    link: "/donation-details",
  },
  {
    id: 4,
    img: "/images/event/event-1-2.jpg",
    date: "30",
    month: "Jan",
    time: "5:00 pm - 8:00 pm",
    location: "Watsica 24, USA",
    title: "Hope for the Homeless: Winter Relief Event",
    link: "/event-details",
  },
  {
    id: 5,
    img: "/images/event/event-1-5.jpg",
    date: "05",
    month: "Feb",
    time: "3:00 pm - 6:00 pm",
    location: "Watsica 24, USA",
    title: "Share Your Blessings: Children’s Support Gala",
    link: "/event-details",
  },
  {
    id: 6,
    img: "/images/event/event-1-6.jpg",
    date: "12",
    month: "Feb",
    time: "11:00 am - 4:00 pm",
    location: "Watsica 24, USA",
    title: "Monthly Charity Drive: Helping Families in Need",
    link: "/event-details",
  },
];

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
            <img src={event.img} alt={event.title} />
            <div className="tp-event__thumb-text">
              <h4 className="tp-event__thumb-date">
                {event.date} <br />
                <span>{event.month}</span>
              </h4>
            </div>
          </div>

          {/* Content */}
          <div className="tp-event__content">
            <div className="tp-event__meta">
              <span style={{ color: "#444" }}>
                <i className="far fa-clock"></i>
                {event.time}
              </span>
              <Link href="#">
                <span style={{ color: "#444" }}>
                  <i class="fa-solid fa-location-dot"></i>
                  {event.location}
                </span>
              </Link>
            </div>
            <Link href={event.link}>
              <h4 className="tp-event__title">{event.title}</h4>
            </Link>
            <div className="tp-event__link">
              <Link
                href={event.link}
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
  return (
    <div className="tp-event__area pt-115 pb-90">
      <div className="container">
        <div className="row">
          {EVENTS.map((event, i) => (
            <EventCard
              key={event.id}
              event={event}
              delay={`${0.3 + i * 0.2}s`} // staggered wow delay
            />
          ))}
        </div>
      </div>
    </div>
  );
}
