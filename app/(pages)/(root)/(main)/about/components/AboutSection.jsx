// components/AboutSection.jsx
"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

export default function AboutSection() {
  const donationPercent = 82; // static value, you can make it dynamic

  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left images */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <Image
                src="/assets/img/about/about-1-1.png"
                alt="About main"
                width={560}
                height={640}
                className="rounded-xl w-full h-auto object-cover"
                priority
              />
              {/* Small thumb */}
              <div className="absolute -bottom-8 -right-8 hidden md:block">
                <Image
                  src="/assets/img/about/about-1-2.png"
                  alt="About small"
                  width={220}
                  height={220}
                  className="rounded-xl shadow-lg"
                />
              </div>
              {/* Decorative border box */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-emerald-400 rounded-xl -z-10" />
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <div className="pb-6">
                <span className="inline-block text-xs tracking-widest font-semibold uppercase text-emerald-500">
                  OUR CHILDAID CHARITY CENTER
                </span>
                <h3 className="mt-2 text-3xl md:text-4xl font-bold leading-tight text-slate-900 whitespace-pre-line">
                  Contribute for the Poor{"\n"}Differently Abled
                </h3>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Charity is the act of extending love and kindness to others
                unconditional which is a conscious act but the decision is made
                by the heart, without expecting a reward. When Charity is
                carried out selflessly
              </p>

              {/* Two feature items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pb-6">
                <div className="flex gap-3">
                  <div className="mt-1">
                    <FiCheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Quick Fundraising
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Charity Navigator&apos;s Giving you support multiple
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1">
                    <FiCheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Join Our Team
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Charity Navigator&apos;s Giving you support multiple
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900">Donation</h4>
                  <span className="text-emerald-600 font-semibold">
                    {donationPercent}%
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-emerald-500 rounded-full transition-[width] duration-700 ease-out"
                    style={{ width: `${donationPercent}%` }}
                  />
                </div>
              </div>

              {/* Bottom: phone + author */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6">
                <div>
                  <span className="block text-xs uppercase tracking-wide text-slate-500">
                    Call Us Anytime
                  </span>
                  <a
                    href="tel:+99956786431435"
                    className="text-lg font-semibold text-slate-900 hover:text-emerald-600"
                  >
                    +999 5678 6431 435
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/img/about/author-1.png"
                    alt="Author"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold text-slate-900">
                      Charlotte Ava
                    </h5>
                    <span className="text-sm text-slate-500">Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>
    </section>
  );
}
