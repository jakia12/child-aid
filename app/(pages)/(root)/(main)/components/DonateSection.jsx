"use client";

import Image from "next/image";
import Link from "next/link";

const causes = [
  {
    id: 1,
    title: "Care charity names its new chief",
    category: "EDUCATION",
    description: "Under his leadership, we believe strengthen our position",
    image: "/images/donate/donate-2-1.png",
    raised: "$4,407",
    goal: "$10,000",
    progress: 42,
  },
  {
    id: 2,
    title: "People we support genuinely have",
    category: "SHELTER",
    description: "Under his leadership, we believe strengthen our position",
    image: "/images/donate/donate-2-2.png",
    raised: "$4,407",
    goal: "$10,000",
    progress: 92,
  },
  {
    id: 3,
    title: "Your mission is the same as ours",
    category: "HEALTH",
    description: "Under his leadership, we believe strengthen our position",
    image: "/images/donate/donate-2-3.png",
    raised: "$4,407",
    goal: "$10,000",
    progress: 58,
  },
  {
    id: 4,
    title: "Fundraising results have reached",
    category: "CHARITY",
    description: "Under his leadership, we believe strengthen our position",
    image: "/images/donate/donate-2-4.png",
    raised: "$4,407",
    goal: "$10,000",
    progress: 78,
  },
];

export default function DonateSection() {
  return (
    <section className="tp-donate-2__area pt-115 pb-75">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-donate-2__section-title">
              <span className="tp-section-subtitle-2">Help the people</span>
              <h4 className="tp-section-title">Our Popular Causes</h4>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-donate-2__right-text">
              <p>
                What if we could dissect the molecular mechanisms behind Rdriven
                gene regulation. Could this answer our questions
              </p>
            </div>
          </div>
        </div>

        {/* Causes List */}
        <div className="row gx-50">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-40 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-donate-2__item">
                <div className="row">
                  {/* Left: Image */}
                  <div className="col-lg-6">
                    <div className="tp-donate-2__thumb">
                      <Image
                        src={cause.image}
                        alt={cause.title}
                        width={300}
                        height={200}
                        className="w-full h-auto"
                      />
                      <div className="tp-donate-2__thumb-text">
                        <Link href="/donation-details">
                          <i className="flaticon-tag"></i>
                          {cause.category}
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="col-lg-6">
                    <div className="tp-donate-2__content">
                      <div className="tp-donate-2__text">
                        <Link href="/donation-details">
                          <h5 className="tp-donate-2__title">{cause.title}</h5>
                        </Link>
                        <p>{cause.description}</p>
                      </div>

                      {/* Progress Bar */}
                      <div className="tp-donate-2-progress">
                        <div className="tp-donate-2-progress-item fix">
                          <span className="progress-count">
                            {cause.progress}%
                          </span>
                          <div className="progress">
                            <div
                              className="progress-bar wow slideInLeft"
                              data-wow-duration="1s"
                              data-wow-delay=".3s"
                              role="progressbar"
                              style={{ width: `${cause.progress}%` }}
                              aria-valuenow={cause.progress}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                          <div className="progress-goals">
                            <span>
                              Raised <b>{cause.raised}</b>
                            </span>
                            <span>
                              Goal <b>{cause.goal}</b>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Button */}
                      <div className="tp-donate-2__button">
                        <Link className="tp-grey-btn" href="/donation-sidebar">
                          Donate Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
