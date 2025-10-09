// components/DonateSection.jsx
import Link from "next/link";
import { DONATIONS, formatCurrency } from "../data";

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
                <Link href={`/donation/${item.id}`}>
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
                <Link href={`/donation/${item.id}`}>
                  <h5 className="tp-donate-2__title tp-donate-2__title">
                    {item.title}
                  </h5>
                </Link>
                <p>{item.shortDescription}</p>
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
                      Raised <b>{formatCurrency(item.raised)}</b>
                    </span>
                    <span>
                      Goal <b>{formatCurrency(item.goal)}</b>
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="tp-donate-2__button">
                <Link className="tp-grey-btn" href={`/donation/${item.id}`}>
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
