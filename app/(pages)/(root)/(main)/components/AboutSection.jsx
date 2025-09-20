"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="tp-about-2__area fix p-relative pt-120 pb-120">
      {/* Big background text */}
      <div className="tp-about-2__text-box d-none d-xl-block">
        <h5 className="tp-about-2__big-text">CHILDAID</h5>
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left: Images + video */}
          <div
            className="col-xl-5 col-lg-5 wow tpfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="tp-about-2__main-thumb p-relative text-center text-lg-end">
              <Image
                src="/images/about/about-2.png"
                alt="About main"
                width={520}
                height={560}
                priority
              />

              <div className="tp-about-2__thumb-sm">
                <Image
                  src="/images/about/about-2-2.png"
                  alt="About small"
                  width={220}
                  height={220}
                />
                <div className="tp-about-2__icon">
                  <a
                    className="popup-video"
                    href="https://www.youtube.com/watch?v=PO_fBTkoznc"
                    aria-label="Play video"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>

              <div className="tp-about-2__thumb-border" />
            </div>
          </div>

          {/* Right: Content */}
          <div
            className="col-xl-7 col-lg-7 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <div className="tp-about-2__right-box">
              <div className="tp-about-2__section-title pb-25">
                <span className="tp-section-subtitle-2">
                  ABOUT OUR CHILDAID
                </span>
                <h4 className="tp-section-title">
                  Why we exist <br />
                </h4>
              </div>

              <div className="tp-about-2__text">
                <p>
                  Millions of children grow up without stable food, school, or
                  medical care. C <br />
                  hildAid focuses on the most vulnerable—children living in
                  poverty, <br />
                  in street situations, or with disabilities—so they can thrive
                  with dignity.
                </p>
              </div>

              <div className="tp-about-2__wraper pb-40 d-flex justify-content-between">
                <div className="tp-about-2__list-item d-flex align-items-start">
                  <div className="tp-about-2__list-icon">
                    <i className="flaticon-check-mark-black-outline" />
                  </div>
                  <div className="tp-about-2__list-content">
                    <h4 className="tp-about-2__title-sm">Mission</h4>
                    <p>
                      To remove barriers that keep vulnerable children from
                      safety,
                      <br /> learning, and health.
                    </p>
                  </div>
                </div>

                <div className="tp-about-2__list-item d-flex align-items-start">
                  <div className="tp-about-2__list-icon">
                    <i className="flaticon-check-mark-black-outline" />
                  </div>
                  <div className="tp-about-2__list-content">
                    <h4 className="tp-about-2__title-sm">Vision</h4>
                    <p>
                      A world where every child grows up protected, educated,
                      and hopeful.
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="tp-about-2__bottom d-flex">
                <div className="tp-about-2__btn">
                  <Link className="tp-btn" href="/about">
                    Discover More
                  </Link>
                </div>

                <div className="tp-about-2__fact d-flex align-items-center">
                  <h5 className="tp-about-2__fact-number">45K</h5>
                  <span>
                    Homeless <br /> Child
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>
    </section>
  );
}
