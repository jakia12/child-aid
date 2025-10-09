// components/ContactFormSection.jsx
"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone must be at least 7 digits")
    .max(20, "Phone number is too long")
    .regex(/^[+\d()\-\s]+$/, "Phone can include numbers and +() -"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export default function ContactFormSection() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors = {};
      parsed.error.errors.forEach((err) => {
        const field = err.path[0];
        if (field && !fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Simulate async submit; integrate API/email later
    toast.promise(new Promise((resolve) => setTimeout(resolve, 600)), {
      loading: "Sending your message...",
      success: "Thanks! Your message has been sent.",
      error: "Something went wrong. Please try again.",
    });

    setValues({ name: "", email: "", phone: "", subject: "", message: "" });
    setErrors({});
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
                CONTACT CHILD AID
              </span>
              <h4 className="tp-section-title pb-20">
                Have a question? <br />
                We’re here to help.
              </h4>
              <p>
                Every message helps us reach more children with education,
                nutrition, and care. Reach out — we’d love to hear from you and
                explore how we can make a difference together.
              </p>

              <div className="tp-contact-form__social-box">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                >
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
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={values.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <div className="text-end text-danger small mt-1">
                          {errors.name}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 mb-30">
                    <div className="tp-contact-form__input-box">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={values.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <div className="text-end text-danger small mt-1">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 mb-30">
                    <div className="tp-contact-form__input-box">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={values.phone}
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <div className="text-end text-danger small mt-1">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 mb-30">
                    <div className="tp-contact-form__input-box">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={values.subject}
                        onChange={handleChange}
                        aria-invalid={!!errors.subject}
                      />
                      {errors.subject && (
                        <div className="text-end text-danger small mt-1">
                          {errors.subject}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-12 mb-30">
                    <div className="tp-contact-form__textarea-box">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Write Your Message"
                        className="bg-white"
                        value={values.message}
                        onChange={handleChange}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <div className="text-end text-danger small mt-1">
                          {errors.message}
                        </div>
                      )}
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
