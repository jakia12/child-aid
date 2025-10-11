"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { slide as Menu } from "react-burger-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Clean, high z-index, no black bar, proper spacing, non-blue links
  const menuStyles = useMemo(
    () => ({
      bmOverlay: {
        background: "rgba(0,0,0,0.45)",
        zIndex: 9999999, // above sliders
      },
      bmMenuWrap: {
        zIndex: 3001,
        top: 0,
        left: 0,
        height: "100vh",
      },
      bmMenu: {
        background: "#000", // remove the black header band
        padding: "72px 22px 24px", // space so close icon doesn't overlap content
        boxShadow: "0 8px 30px rgba(0,0,0,.08)",
      },
      bmItemList: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        color: "#fff",
      },
      bmItem: {
        display: "block",
        textDecoration: "none",
        color: "#fff",
      },
      bmBurgerButton: { display: "none" }, // we use your button
      bmCrossButton: {
        top: 18,
        right: 18,
        height: 28,
        width: 28,
        background: "transparent",
      },
      bmCross: {
        background: "#000", // visible on white
        height: "22px",
      },
    }),
    []
  );

  return (
    <header className="tp-header-height">
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
                      className="w-full h-full"
                      priority
                      width={140}
                      height={40}
                    />
                  </Link>
                </div>
              </div>

              {/* Desktop Menu (unchanged) */}
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

              {/* Right Box (unchanged) */}
              <div className="col-xl-3 col-lg-6 col-md-8 col-5">
                <div className="tp-header-2__right-box">
                  <div className="tp-header-2__right-action">
                    <ul>
                      <li>
                        <div className="tp-header-2__icon-box d-none d-md-block">
                          <button
                            className="search-open-btn"
                            aria-label="Open search"
                          >
                            <i className="flaticon-loupe" aria-hidden="true" />
                          </button>
                          <Link href="/login" aria-label="Login">
                            <i className="flaticon-user" aria-hidden="true" />
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="tp-header-2__btn d-none d-md-block">
                          <Link className="tp-btn" href="/donate">
                            Donate Now
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="tp-header-2__bar d-xl-none">
                          <button
                            className="tp-menu-bar"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-nav"
                            onClick={() => setIsMenuOpen((v) => !v)}
                          >
                            <i
                              className="fa-solid fa-bars-staggered"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE DRAWER ONLY */}
            <Menu
              right={false}
              isOpen={isMenuOpen}
              onStateChange={(s) => setIsMenuOpen(s.isOpen)}
              styles={menuStyles}
              customBurgerIcon={false}
              customCrossIcon={
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              }
              id="mobile-nav"
              width={"82%"}
              disableAutoFocus
            >
              <ul className="list-unstyled m-0 p-0">
                <li className="mb-2">
                  <Link
                    href="/"
                    className="d-block  fw-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ color: "#fff" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/about"
                    className="d-block  fw-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ color: "#fff" }}
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/donation"
                    className="d-block  fw-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ color: "#fff" }}
                  >
                    Donation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/events"
                    className="d-block  fw-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ color: "#fff" }}
                  >
                    Events
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/contact"
                    className="d-block  fw-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ color: "#fff" }}
                  >
                    Contact
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/donate"
                    className="tp-btn w-100 text-center d-inline-block"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ color: "#fff" }}
                  >
                    Donate Now
                  </Link>
                </li>
              </ul>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}
