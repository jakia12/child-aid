"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="tp-header-height">
      {/* NOTE: no sticky/fixed/id here */}
      <div className="tp-header-2__area tp-header-2__transparent">
        <div className="container container-large">
          <div className="tp-header-2__plr">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-2 col-lg-6 col-md-4 col-7">
                <div className="tp-header-2__logo">
                  <Link href="/" aria-label="Home">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={140}
                      height={40}
                      priority
                    />
                  </Link>
                </div>
              </div>

              {/* Main Menu (Desktop) */}
              <div className="col-xl-7 d-none d-xl-block">
                <div className="tp-header-2__main-menu">
                  <nav className="tp-main-menu-content" aria-label="Main">
                    <ul>
                      <li className="has-dropdown">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/about">About</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/donation">Donation</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/events">Events</Link>
                      </li>

                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Right Box */}
              <div className="col-xl-3 col-lg-6 col-md-8 col-5">
                <div className="tp-header-2__right-box">
                  <div className="tp-header-2__right-action">
                    <ul>
                      {/* Search + User */}
                      <li>
                        <div className="tp-header-2__icon-box d-none d-md-block">
                          <button
                            className="search-open-btn"
                            aria-label="Open search"
                          >
                            <i className="flaticon-loupe" />
                          </button>
                          <Link href="/login" aria-label="Login">
                            <i className="flaticon-user" />
                          </Link>
                        </div>
                      </li>

                      {/* Donate Button */}
                      <li>
                        <div className="tp-header-2__btn d-none d-md-block">
                          <Link className="tp-btn" href="/donation-sidebar">
                            Donate Now
                          </Link>
                        </div>
                      </li>

                      {/* Mobile Menu Bar */}
                      <li>
                        <div className="tp-header-2__bar d-xl-none">
                          <button
                            className="tp-menu-bar"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-nav"
                            onClick={() => setIsMenuOpen((v) => !v)}
                          >
                            <i className="fa-solid fa-bars-staggered" />
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu (simple reveal, not sticky) */}
            {isMenuOpen && (
              <nav
                id="mobile-nav"
                className="tp-mobile-menu d-xl-none mt-4"
                aria-label="Mobile"
              >
                <ul className="space-y-3 text-lg">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/donation">Donation</Link>
                  </li>
                  <li>
                    <Link href="/events">Events</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/" className="tp-btn">
                      Donate Now
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
