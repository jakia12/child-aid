"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <section className="tp-slider-2__area tp-slider-2__mb p-relative">
      {/* Shapes */}
      <div className="tp-slider-2__shape-1 d-none d-xl-block">
        <img
          src="/images/banner/shape2.png"
          alt="Shape 1"
          className="w-full"
          wi
        />
      </div>

      <div className="tp-slider-2__shape-2 d-none d-xxl-block">
        {/* <img
          src="/assets/img/slider/slider-shape-2-3.png"
          alt="Shape 2"
          className="w-full"
        />
        <div className="tp-slider-2__circle-text">
          <img
            src="/assets/img/slider/slider-shape-2-2.png"
            alt="Circle Text"
            className="w-full"
          />
        </div> */}
      </div>

      <div className="tp-slider-2__grey-bg" />

      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-xl-7 col-lg-6">
            <div className="tp-slider-2__content">
              <div className="tp-slider-2__section-box pb-10">
                <span
                  className="tp-slider-2-subtitle wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  START donate on our charity
                </span>
                <h4
                  className="tp-slider-2-title wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  Help a Child. <br /> Change a Life.
                  <br />
                  {/* We <b>Give it.</b> */}
                </h4>
              </div>
              <div className="tp-slider-2__content-text">
                <p
                  className="wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  From emergency relief to everyday school supplies, your
                  kindness turns <br /> hardship into opportunity.
                </p>
                <Link
                  href="/about"
                  className="tp-btn wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-xl-5 col-lg-6">
            <div className="tp-slider-2__main-thumb">
              <Image
                src="/images/banner/sl.png"
                alt="Hero Main"
                width={550}
                height={550}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
