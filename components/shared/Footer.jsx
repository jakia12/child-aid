"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* footer-area-start */}
      <div className="tp-footer__area">
        <div
          className="tp-footer__bg"
          style={{ backgroundImage: "url(/assets/img/footer/ft-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row">
              {/* Logo + Contact */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 mb-45 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-footer__widget footer-2-col-1">
                  <div className="tp-footer__logo">
                    <Link href="/">
                      <Image
                        src="/flogo.png"
                        alt="Footer Logo"
                        width={150}
                        height={40}
                      />
                    </Link>
                  </div>
                  <div className="tp-footer__text">
                    <p>
                      Suspendisse posuere egeteldapibus. <br /> Aliquam cong
                      egeteldapib Aliquam <br /> congue posuere
                    </p>
                  </div>
                  <div className="tp-footer__contact-list">
                    <div className="tp-footer__contact-item pb-20 d-flex about-items-center">
                      <div className="tp-footer__icon">
                        <i class="fa-solid fa-envelope"></i>
                      </div>
                      <div className="tp-footer__text">
                        <a href="mailto:poorexcharity@gmail.com">
                          poorexcharity@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="tp-footer__contact-item d-flex about-items-center">
                      <div className="tp-footer__icon">
                        <i class="fa-solid fa-phone-volume"></i>
                      </div>
                      <div className="tp-footer__text">
                        <a href="tel:+990988764578">+99 (098) 876 4578</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div
                className="col-xl-2 col-lg-2 col-md-6 mb-45 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="tp-footer__widget footer-2-col-2">
                  <h4 className="tp-footer__widget-title-2">Navigation</h4>
                  <div className="tp-footer__list">
                    <ul>
                      <li>
                        <Link href="#">Recent Courses</Link>
                      </li>
                      <li>
                        <Link href="#">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Donation</Link>
                      </li>
                      <li>
                        <Link href="#">Latest News</Link>
                      </li>
                      <li>
                        <Link href="#">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Campaigns */}
              <div
                className="col-xl-2 col-lg-2 col-md-6 mb-45 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="tp-footer__widget footer-2-col-3">
                  <h4 className="tp-footer__widget-title-2">Campaigns</h4>
                  <div className="tp-footer__list">
                    <ul>
                      <li>
                        <Link href="#">Child Cancer</Link>
                      </li>
                      <li>
                        <Link href="#">Differently Abled</Link>
                      </li>
                      <li>
                        <Link href="#">Clean Water</Link>
                      </li>
                      <li>
                        <Link href="#">Start Fundraising</Link>
                      </li>
                      <li>
                        <Link href="#">Give Education</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Donate Box */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 mb-45 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="tp-footer__widget footer-2-col-4">
                  <div className="tp-footer__donate-box">
                    <h4 className="tp-footer__donate-title-sm">
                      We Work Together For <br /> a Beautiful World, Come Join
                      Us Today!
                    </h4>
                    <Link
                      className="tp-btn theme-2-bg"
                      href="/donation-sidebar"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer-area-end */}

      {/* copyright-area-start */}
      <div className="tp-copyright__area tp-copyright__bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="tp-copyright__text text-center text-sm-start">
                <span>© Copyright 2023 by Poorex.com</span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="tp-copyright__social text-center text-sm-end">
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-pinterest-p"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright-area-end */}
    </footer>
  );
}
