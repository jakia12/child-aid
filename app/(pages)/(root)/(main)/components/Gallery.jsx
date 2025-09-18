"use client";

const galleryItems = [
  {
    id: 1,
    img: "/images/gallery/gal-2-1.jpg",
    delay: ".3s",
  },
  {
    id: 2,
    img: "/images/gallery/gal-2-2.jpg",
    delay: ".5s",
  },
  {
    id: 3,
    img: "/images/gallery/gal-2-3.jpg",
    delay: ".7s",
  },
  {
    id: 4,
    img: "/images/gallery/gal-2-4.jpg",
    delay: ".9s",
  },
];

function PlusSvg() {
  return (
    <svg
      aria-hidden="true"
      width="103"
      height="100"
      viewBox="0 0 103 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="101"
        height="98"
        rx="10"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  );
}

export default function Gallery() {
  return (
    <div className="tp-gallery-2__area">
      <div className="container-fluid g-0">
        <div className="row g-0">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="col-xl-3 col-lg-6 col-md-6 col-sm-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay={item.delay}
            >
              <div className="tp-gallery-2__item">
                <img src={item.img} alt="" />
                <a className="popup-image" href={item.img}>
                  <div className="tp-gallery-2__icon-box">
                    <PlusSvg />
                    <div className="tp-gallery-2__icon">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
