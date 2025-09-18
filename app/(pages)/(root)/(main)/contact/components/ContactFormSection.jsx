// components/ContactFormSection.jsx
"use client";

export default function ContactFormSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up to your API / email service
    // console.log("Form submitted");
  };

  return (
    <div className="tp-contact-form__area tp-contact-form__space">
      <div className="container">
        <div className="row">
          {/* Left */}
          <div
            className="col-xl-5 col-lg-5 wow tpfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="tp-contact-form__left-box">
              <span className="tp-contact-form__subtitle">
                CONTACT WITH POOREX
              </span>
              <h4 className="tp-section-title pb-20">
                Just have a quick <br />
                any questions?
              </h4>
              <p>
                Charity is the act of extending love and kindness to others{" "}
                <br />
                unconditionalwhich is a conscious act but the decision is <br />
                made by the heart, without expecting
              </p>

              <div className="tp-contact-form__social-box">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className="col-xl-7 col-lg-7 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="tp-contact-form__form-box">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-6 mb-30">
                    <div className="tp-contact-form__input-box">
                      <input type="text" name="name" placeholder="Your Name" />
                    </div>
                  </div>

                  <div className="col-xl-6 mb-30">
                    <div className="tp-contact-form__input-box">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 mb-30">
                    <div className="tp-contact-form__input-box">
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                  </div>

                  <div className="col-xl-6 mb-30">
                    <div className="tp-contact-form__input-box">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>

                  <div className="col-xl-12 mb-30">
                    <div className="tp-contact-form__textarea-box">
                      <textarea
                        name="message"
                        placeholder="Write Your Message"
                      />
                    </div>
                  </div>
                </div>

                <div className="tp-contact-form__button">
                  <button type="submit" className="tp-btn">
                    Send Your Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>
    </div>
  );
}
