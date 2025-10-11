"use client";

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
    cta: { label: "View More", href: "/about" },
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
    cta: { label: "See Programs", href: "/campaigns" },
  },
];

export default function Hero() {
  return (
    <section className="hero-slider position-relative">
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
        navigation
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

                  <a
                    href={s.cta.href}
                    className="btn btn-ghost-light btn-lg px-4"
                  >
                    {s.cta.label}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
