// components/CtaSection.jsx
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="tp-cta-2__area tp-cta-2__pt">
      <div
        className="tp-cta-2__bg p-relative fix"
        style={{ backgroundImage: "url(/images/about/cta-bg-1.png)" }}
      >
        {/* Shapes */}
        <div className="tp-cta-2__shape-1 d-none d-xl-block">
          <img src="/assets/img/cta/cta-shape-1-1.png" alt="shape1" />
        </div>
        <div className="tp-cta-2__shape-2 d-none d-xl-block">
          <img src="/assets/img/cta/cta-shape-1-2.png" alt="shape2" />
        </div>

        {/* Content */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-cta-2__content text-center">
                <span className="tp-cta-2__subtitle">
                  let&apos;s start something for them
                </span>
                <h4 className="tp-cta-2__title">
                  No One Has Ever Become <br /> Poor From Giving
                </h4>
                <Link href="/donation-sidebar" className="tp-btn big">
                  Start Donating Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
