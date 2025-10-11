"use client";

import "swiper/css";
import { A11y, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/**
 * Stable logo sources (Wikimedia) + official target URLs
 */
const PARTNERS = [
  {
    name: "UNICEF",
    href: "https://www.unicef.org/",
    img: "/images/partners/1.png",
  },
  {
    name: "Save the Children",
    href: "https://www.savethechildren.org/",
    img: "/images/partners/2.svg",
  },
  {
    name: "World Vision",
    href: "https://www.worldvision.org/",
    img: "/images/partners/3.svg",
  },
  {
    name: "Red Cross",
    href: "https://www.icrc.org/",
    img: "/images/partners/4.svg",
  },
  {
    name: "charity: water",
    href: "https://www.charitywater.org/",
    img: "/images/partners/5.svg",
  },

  //   {
  //     name: "WHO",
  //     href: "https://www.who.int/",
  //     img: "https://upload.wikimedia.org/wikipedia/commons/0/08/WHO_logo.svg",
  //   },
  {
    name: "UNHCR",
    href: "https://www.unhcr.org/",
    img: "/images/partners/6.svg",
  },

  {
    name: "Doctors Without Borders",
    href: "https://www.doctorswithoutborders.org/",
    img: "/images/partners/7.svg",
  },
];

export default function PartnersSlider() {
  return (
    <section className=" bg-body-tertiary" style={{ padding: "90px 0" }}>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-donate-2__section-title">
              {/* <span className="tp-section-subtitle-2">Help the people</span> */}
              <h4 className="tp-section-title">Our Partners</h4>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-donate-2__right-text">
              <p>We’re grateful to work with these organizations.</p>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode, A11y]}
          aria-label="Partner logos"
          loop
          freeMode={{ enabled: true, momentum: false }}
          speed={4500} // smooth drift
          autoplay={{
            delay: 0, // continuous
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={24}
          slidesPerView={2}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 5 },
          }}
          className="partner-swiper"
        >
          {PARTNERS.map((p) => (
            <SwiperSlide key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center bg-white rounded-3 border partner-card"
                title={p.name}
              >
                {/* Using <img> to avoid next/image domain config */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="img-fluid partner-logo"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
