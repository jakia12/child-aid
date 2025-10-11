"use client";

import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineWaterDrop } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";

export default function Mission() {
  const missionData = [
    {
      id: 1,
      icon: <SlBookOpen />,
      title: " Education",
      description:
        "We provide books, school fees, and safe classrooms so every child can learn and dream of a brighter future.",
      link: "/donation-details",
    },
    {
      id: 2,
      icon: <MdOutlineWaterDrop />,
      title: "Pure Water",
      description:
        "Through wells and filters, we deliver clean drinking water to families and schools, keeping children healthy.",
      link: "/donation-details",
    },
    {
      id: 3,
      icon: <IoFastFoodOutline />,
      title: "Healthy Food",
      description:
        "Daily meals and emergency food kits ensure children receive the nutrition they need to grow and thrive.",
      link: "/donation-details",
    },
  ];

  // {
  //   id: 4,
  //   icon: "flaticon-book",
  //   title: "Kids Education",
  //   description:
  //     "Consectetur adipiscing elsed do eiusmod te incididunt ut labore et dolore",
  //   link: "/donation-details",
  // },

  return (
    <section>
      <div className="container" style={{ padding: "90px 0" }}>
        <div className="container-fluid g-0 px-3">
          <div className="row">
            {/* Left Content */}
            <div className="col-xl-5 col-lg-7 col-md-7">
              <div className="tp-mission-2__left-box">
                <div className="tp-mission-2__section-box pb-10">
                  <span className="tp-section-subtitle-2">WHAT WE DO</span>
                  <h4 className="tp-section-title">
                    Our Mission To <br /> Help The People
                  </h4>
                </div>
                <div className="tp-mission-2__left-text">
                  <p>
                    ChildAid delivers practical help that protects childhood—
                    <br />
                    education, clean water, and nutritious food
                  </p>
                  <Link className="tp-btn" href="/donate">
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Slider */}
            <div className="col-xl-7 col-lg-5 col-md-5">
              <div className="tp-mission-2__wrapper row">
                {missionData.map((item) => (
                  <div className="col-lg-4" key={item.id}>
                    <div className="tp-mission-2__item">
                      <div
                        className="tp-mission-2__single-bg"
                        style={{
                          backgroundImage:
                            "url(/assets/img/mission/mission-bg.png)",
                        }}
                      ></div>

                      <div className="tp-mission-2__icon">
                        <span>{item.icon}</span>
                      </div>

                      <div className="tp-mission-2__text">
                        <a href={item.link}>
                          <h4 className="tp-mission-2__title-sm">
                            {item.title}
                          </h4>
                        </a>
                        <p>{item.description}</p>
                      </div>

                      <div className="tp-mission-2__shape-box">
                        <span className="tp-mission-2__arrow">
                          <GoArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </section>
  );
}
