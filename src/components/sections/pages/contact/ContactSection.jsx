"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending your message...");

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mbdnejeg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      toast.success(
        "We have received your message. We'll get back to you soon.",
        {
          id: toastId,
        }
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "Something went wrong. Please try again.",
        {
          id: toastId,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-15 lg:py-20 bg-white overflow-hidden">
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
            Prosper Care Solutions is dedicated to delivering exceptional,
            person-centred care to individuals with complex needs. Our team is
            passionate about fostering independence, dignity, and a higher
            quality of life for all our residents.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT */}
          <div className="space-y-6 mt-10">
            {/* Phone */}
            <div className="bg-[#ebe9d7] border border-gray-200 rounded-xl p-10 hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-5">
                <div className="text-teal-600">
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 fill-none"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <p className="font-semibold text-gray-800">07976370231</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#ebe9d7] border border-gray-200 rounded-xl p-10 hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-5">
                <div className="text-teal-600">
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 fill-none"
                  >
                    <path d="M4 4h16v16H4z" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email us</p>
                  <p className="font-semibold text-gray-800">
                    admin@prospercaresolutions.com
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-[#ebe9d7] border border-gray-200 rounded-xl p-10 hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-5">
                <div className="text-teal-600">
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 fill-none"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Head office</p>
                  <p className="font-semibold text-gray-800">
                    58 Park Road East, WV1 4QB, Wolverhampton, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#dfe4c8] p-10 rounded-lg shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-800 font-medium">
                  Full Name :
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#f3f3f3] rounded-lg px-4 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-800 font-medium">
                  Email Address :
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#f3f3f3] text-gray-900 rounded-lg px-4 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-800 font-medium">
                  Enter Your Message :
                </label>

                <textarea
                  rows={4}
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-[#f3f3f3] rounded-lg px-4 py-3 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Your Message"}

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