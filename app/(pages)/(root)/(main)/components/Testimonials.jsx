"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { LiaQuoteLeftSolid } from "react-icons/lia";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Slider from "react-slick";

export const testimonials = [
  {
    id: 1,
    name: "Monica Ragan",
    role: "ChildAid Donor",
    text: "I saw exactly where my gift went—books and meals for a local school. It felt personal and transparent.",
    image: "/images/testi/author-2-1.png",
    shape: "/images/testi/testi-shape-2-1.png",
  },
  {
    id: 2,
    name: "David Roko",
    role: "Monthly Supporter",
    text: "Becoming a monthly donor was easy. The updates show real progress—clean water changed an entire village.",
    image: "/images/testi/author-2-1.png",
    shape: "/images/testi/testi-shape-2-1.png",
  },
  {
    id: 3,
    name: "Rima Akter",
    role: "Volunteer Teacher",
    text: "The school kits arrived right before term. Seeing the kids open their bags with smiles—that’s impact.",
    image: "/images/testi/author-2-1.png",
    shape: "/images/testi/testi-shape-2-1.png",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false, // external arrows
    dots: false,
    speed: 500,
    autoplay: false,
    adaptiveHeight: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="tp-testimonial-2__area tp-testimonial-2__space fix p-relative z-index grey-bg">
      <div className="tp-testimonial-2__shape">
        <Image
          src="/images/testi/testi-bg-2.png"
          alt="Background Shape"
          width={400}
          height={300}
        />
      </div>

      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-testimonial-2__left-side">
              <div className="tp-testimonial-2__section-title pb-20">
                <span className="tp-section-subtitle-2">OUR TESTIMONIALS</span>
                <h4 className="tp-section-title">
                  What Our Client Say <br /> About Charity
                </h4>
              </div>
              <div className="tp-testimonial-2__left-text">
                <p>
                  Charity is the act of extending love and kindness without
                  condition. It begins
                  <br />
                  with a conscious choice, guided by the heart, expecting
                  nothing in return.
                </p>
              </div>
              <Link className="tp-btn" href="/team-details">
                All Testimonials
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-testimonial-2__wrapper p-relative">
              {/* External Arrows */}
              <div className="tp-testimonial-2__section-arrow d-flex justify-content-center justify-content-md-end">
                <div className="test-next">
                  <button
                    aria-label="Previous"
                    onClick={() => sliderRef.current?.slickPrev()}
                  >
                    <MdOutlineKeyboardDoubleArrowLeft />
                  </button>
                </div>
                <div className="test-prev">
                  <button
                    aria-label="Next"
                    onClick={() => sliderRef.current?.slickNext()}
                  >
                    <MdKeyboardDoubleArrowRight />
                  </button>
                </div>
              </div>

              {/* React Slick Slider */}
              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((item) => (
                  <div key={item.id}>
                    <div className="tp-testimonial-2__item-box p-relative">
                      {/* Testimonial content */}
                      <div className="tp-testimonial-2__item">
                        <div className="tp-testimonial-2__top pb-15 d-flex align-items-center justify-content-between">
                          <div className="tp-testimonial-2__icon">
                            <span>
                              <LiaQuoteLeftSolid size={40} />
                            </span>
                          </div>
                          <div className="tp-testimonial-2__star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <div className="tp-testimonial-2__text">
                          <p>{item.text}</p>
                        </div>
                      </div>

                      {/* Author */}
                      <div className="tp-testimonial-2__author-box d-flex align-items-center">
                        <div className="tp-testimonial-2__img pr-25">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={60}
                            height={60}
                          />
                        </div>
                        <div className="tp-testimonial-2__author-info">
                          <h5 className="tp-testimonial-2__author-name">
                            {item.name}
                          </h5>
                          <span>{item.role}</span>
                        </div>
                      </div>

                      {/* Shape */}
                      {/* <div className="tp-testimonial-2__item-shape">
                        <Image
                          src={item.shape}
                          alt="Shape"
                          width={120}
                          height={120}
                        />
                      </div> */}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
