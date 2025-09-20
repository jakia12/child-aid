// components/DonateSection.jsx
import Link from "next/link";

const DONATIONS = [
  {
    id: 1,
    img: "/images/donate/donate-2-1.png",
    category: "EDUCATION",
    title: "Education for Every Child",
    desc: "Provide books, tuition, and safe classrooms so children can learn and build brighter futures.",
    percent: 42,
    raised: "$4,407",
    goal: "$10,000",
  },
  {
    id: 2,
    img: "/images/donate/donate-2-2.png",
    category: "SHELTER",
    title: "Safe Homes for Families",
    desc: "Help displaced families find secure housing and the support they need during crises.",
    percent: 92,
    raised: "$4,407",
    goal: "$10,000",
  },
  {
    id: 3,
    img: "/images/donate/donate-2-3.png",
    category: "HEALTH",
    title: "Healthcare for Children",
    desc: "Fund medical checkups, vaccines, and essential medicines for vulnerable children.",
    percent: 58,
    raised: "$4,407",
    goal: "$10,000",
  },
  {
    id: 4,
    img: "/images/donate/donate-2-4.png",
    category: "FOOD",
    title: "Meals for Hungry Communities",
    desc: "Deliver daily meals and emergency food kits to children and families facing hunger.",
    percent: 78,
    raised: "$4,407",
    goal: "$10,000",
  },
  {
    id: 5,
    img: "/images/donate/donate-2-1.png",
    category: "WATER",
    title: "Clean Water Access",
    desc: "Build wells and provide filtration systems to give families safe, life-saving drinking water.",
    percent: 65,
    raised: "$3,250",
    goal: "$5,000",
  },
  {
    id: 6,
    img: "/images/donate/donate-1-3.png",
    category: "CHARITY",
    title: "Emergency Relief Fund",
    desc: "Support urgent responses to natural disasters and humanitarian crises worldwide.",
    percent: 78,
    raised: "$4,407",
    goal: "$10,000",
  },
];

function DonateCard({ item }) {
  return (
    <div
      className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-40 wow tpfadeUp"
      data-wow-duration=".9s"
      data-wow-delay=".3s"
    >
      <div className="tp-donate-2__item">
        <div className="row">
          {/* Left image */}
          <div className="col-lg-6">
            <div className="tp-donate-2__thumb">
              <img src={item.img} alt={item.title} />
              <div className="tp-donate-2__thumb-text">
                <Link href="/donation">
                  <i className="flaticon-tag"></i>
                  {item.category}
                </Link>
              </div>
            </div>
          </div>
          {/* Right content */}
          <div className="col-lg-6">
            <div className="tp-donate-2__content">
              <div className="tp-donate-2__text">
                <Link href="/donation">
                  <h5 className="tp-donate-2__title tp-donate-2__title">
                    {item.title}
                  </h5>
                </Link>
                <p>{item.desc}</p>
              </div>

              {/* Progress */}
              <div className="tp-donate-2-progress">
                <div className="tp-donate-2-progress-item fix">
                  <span className="progress-count">{item.percent}%</span>
                  <div className="progress">
                    <div
                      className="progress-bar wow slideInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                      role="progressbar"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                  <div className="progress-goals">
                    <span>
                      Raised <b>{item.raised}</b>
                    </span>
                    <span>
                      Goal <b>{item.goal}</b>
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
  );
}

export default function DonateCards() {
  return (
    <div className="tp-donate-2__area pt-115 pb-75">
      <div className="container">
        <div className="row gx-50">
          {DONATIONS.map((item) => (
            <DonateCard key={item.id} item={item} />
          ))}
        </div>

        {/* Pagination */}
        {/* <div className="row">
          <div className="col-xl-12">
            <div className="basic-pagination text-center pt-30">
              <nav>
                <ul>
                  <li>
                    <Link href="/donation-details">1</Link>
                  </li>
                  <li>
                    <Link href="/donation-details">2</Link>
                  </li>
                  <li>
                    <Link href="/donation-details">3</Link>
                  </li>
                  <li>
                    <Link href="/donation-details">
                      <span className="current">
                        <i className="flaticon-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
