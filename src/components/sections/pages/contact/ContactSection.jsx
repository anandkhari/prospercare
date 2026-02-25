"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section className="relative py-15 lg:py-20 bg-white  overflow-hidden">

      {/* LARGE SOFT BACKGROUND PANEL */}
      <div className="hidden lg:block absolute left-0 top-10 w-[85%] h-[85%] bg-[#e6f1ec] rounded-2xl -z-10" />

      <div className="container mx-auto px-6 lg:px-24 max-w-8xl">

        {/* HEADER */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-[2px] bg-teal-600" />
            <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
              Get In Touch With us
            </h2>
          </div>

          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
            prosper care solutions, we are dedicated to delivering exceptional, person-
            centred care to individuals with complex needs. our team is passionate about
            fostering independence, dignity, and a higher quality of life for all our residents.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT SIDE INFO CARDS */}
          <div className="space-y-6 mt-10">

            {/* CARD */}
            <div className="bg-[#ebe9d7] border border-gray-200 rounded-xl p-10 flex items-center justify-between hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-5">
                <div className="text-teal-600">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-8 h-8 fill-none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <p className="font-semibold text-gray-800">+971 58 513 3445</p>
                </div>
              </div>

            </div>

            {/* CARD */}
            <div className="bg-[#ebe9d7] border border-gray-200 rounded-xl p-10 flex items-center justify-between hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-5">
                <div className="text-teal-600">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-8 h-8 fill-none">
                    <path d="M4 4h16v16H4z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email us</p>
                  <p className="font-semibold text-gray-800">Info@prospercare.com</p>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-teal-200 flex items-center justify-center text-teal-600">
                →
              </div>
            </div>

            {/* CARD */}
            <div className="bg-[#ebe9d7] border border-gray-200 rounded-xl p-10 flex items-center justify-between hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-5">
                <div className="text-teal-600">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-8 h-8 fill-none">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Head office</p>
                  <p className="font-semibold text-gray-800">
                    58 Park Road East, WV1 4QB, Wolverhampton, United Kingdom
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-teal-200 flex items-center justify-center text-teal-600">
                →
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM CARD */}
          <div className="bg-[#dfe4c8] p-10 lg:p-10 rounded-lg shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-gray-800 font-medium">
                  full Name :
                </label>
                <input
                  type="text"
                  className="w-full h-12 bg-[#f3f3f3] rounded-lg px-4 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-800 font-medium">
                  Email Address :
                </label>
                <input
                  type="email"
                  className="w-full h-12 bg-[#f3f3f3] rounded-lg px-4 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-800 font-medium">
                  Enter Your Message :
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-[#f3f3f3] rounded-lg px-4 py-3 outline-none resize-none"
                />
              </div>

              <button className="bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center gap-3">
                Send Your Message
                <span className="w-7 h-7 bg-white text-teal-600 rounded-full flex items-center justify-center">
                  →
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;