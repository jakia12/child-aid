"use client";

import { useRef } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDES = [
  {
    bg: "/images/slider/sl1.jpg",
    eyebrow: "START DONATE ON OUR CHARITY",
    titleBefore: "Stand up for the",
    highlight: "Deprived",
    desc: "Your support brings essentials like food, education, and healthcare to vulnerable children.",
    cta: { label: "Learn More", href: "/about" },
  },
  {
    bg: "/images/slider/sl2.jpg",
    eyebrow: "TOGETHER WE CAN",
    titleBefore: "Give hope to",
    highlight: "Every Child",
    desc: "From emergency relief to long-term care, your kindness turns hardship into opportunity.",
    cta: { label: "Start Donating", href: "/donate" },
  },
  {
    bg: "/images/slider/sl3.jpg",
    eyebrow: "MAKE A DIFFERENCE",
    titleBefore: "Small acts create",
    highlight: "Big Change",
    desc: "Join our mission to protect, educate, and empower children around the world.",
    cta: { label: "See Programs", href: "/events" },
  },
];

export default function Hero() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="hero-slider position-relative mrt">
      {/* Custom nav buttons */}
      <button
        ref={prevRef}
        className="hero-nav hero-prev"
        aria-label="Previous slide"
      >
        <IoMdArrowDropleft className="icon" />
      </button>
      <button
        ref={nextRef}
        className="hero-nav hero-next"
        aria-label="Next slide"
      >
        <IoMdArrowDropright className="icon" />
      </button>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, A11y, EffectFade]}
        effect="fade"
        speed={900}
        loop
        autoplay={{
          delay: 4200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // bind navigation after refs are set
          // (required when using custom buttons)
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="hero-swiper"
        aria-label="Hero slider"
      >
        {SLIDES.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="slide d-flex align-items-center"
              role="img"
              aria-label={`${s.titleBefore} ${s.highlight}`}
              style={{
                backgroundImage: `linear-gradient(
                  to right,
                  rgba(0,0,0,.55) 0%,
                  rgba(0,0,0,.35) 35%,
                  rgba(0,0,0,.25) 50%,
                  rgba(0,0,0,0) 70%
                ), url(${s.bg})`,
              }}
            >
              <div className="container">
                <div className="content col-12 col-lg-8 col-xl-6">
                  <p className="eyebrow">{s.eyebrow}</p>

                  <h1 className="headline">
                    {s.titleBefore} <span className="hl">{s.highlight}</span>
                  </h1>

                  <p className="lead text-white-75 mb-4">{s.desc}</p>

                  <a href={s.cta.href} className="tp-btn btn-lg px-4">
                    {s.cta.label}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Styles */}
    </section>
  );
}
