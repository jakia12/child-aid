// components/CtaSection.jsx
import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      className="tp-cta-2__area tp-cta-2__pt"
      aria-labelledby="cta-title"
    >
      <div
        className="tp-cta-2__bg p-relative fix"
        style={{ backgroundImage: "url(/images/about/cta-bg-1.png)" }}
      >
        {/* Shapes (optional decorative) */}
        <div className="tp-cta-2__shape-1 d-none d-xl-block" aria-hidden="true">
          <img src="/assets/img/cta/cta-shape-1-1.png" alt="" />
        </div>
        <div className="tp-cta-2__shape-2 d-none d-xl-block" aria-hidden="true">
          <img src="/assets/img/cta/cta-shape-1-2.png" alt="" />
        </div>

        {/* Content */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-cta-2__content text-center">
                <span className="tp-cta-2__subtitle">
                  Let’s start something life-changing
                </span>

                <h2
                  id="cta-title"
                  className="tp-cta-2__title"
                  style={{ color: "#ffffff" }}
                >
                  Your Gift Today Can Change a Child’s Future
                </h2>

                <p className="tp-cta-2__desc" style={{ color: "#fff" }}>
                  Help provide school supplies, clean water, and daily meals.
                  Together, we turn kindness into real results.
                </p>

                <div className="tp-cta-2__actions gap-3 d-inline-flex flex-wrap justify-content-center">
                  <Link href="/donation" className="tp-btn big">
                    Start Donating Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
