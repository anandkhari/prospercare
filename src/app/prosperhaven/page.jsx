"use client";

import PageHero from "@/components/sections/global/PageHero";
import usePremiumReveal from "@/hooks/usePremiumReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProsperHavenPage() {
  usePremiumReveal();

  const specialistItems = [
    "Complex and enduring mental health conditions",
    "Forensic histories and/or step-down from secure services",
    "Autism Spectrum Disorders",
    "Learning disabilities and dual diagnosis",
    "Emotional dysregulation, self-injurious behaviour, and trauma histories",
    "Challenging behaviour including verbal and physical aggression",
    "Complex medication needs and structured care routines",
  ];

  const galleryImages = ["/haven2.jpeg", "/haven3.jpeg", "/haven5.jpeg"];

  const supportImages = ["/haven6.jpeg"];

  return (
    <>
      <Navbar />

      <PageHero currentPage="Prosper Haven " />

      {/* ================= INTRODUCING SECTION ================= */}
      <section className="w-full bg-[#F3F4F4] py-14 sm:py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          <div className="w-full reveal reveal-left contain-paint">
            <img
              src="/prosperhaven2.jpeg"
              className="w-full h-[240px] sm:h-[320px] md:h-full object-cover rounded-sm"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center reveal reveal-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-gray-900 leading-[1.25]">
              Introducing Our{" "}
              <span className="text-[#03a696]">New Residential Service</span>
            </h2>

            <div className="mt-4 h-[2px] w-20 sm:w-24 bg-[#03a696]" />

            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              We are excited to introduce Prosper Haven, a spacious, modern, and
              purpose-adapted single-occupancy Residential home located in
              Wolverhampton.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SPECIALIST SUPPORT ================= */}
      <section className="w-full bg-[#F3F4F4] py-14 sm:py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
          <div className="reveal reveal-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-heading font-medium text-gray-900 leading-[1.25]">
              Our Areas of{" "}
              <span className="text-[#03a696]">Specialist Support</span>
            </h2>

            {specialistItems.map((item, i) => (
              <div
                key={i}
                data-delay={i}
                className="py-4 sm:py-5 border-b border-[#03a696]/60 flex items-start gap-4 sm:gap-6 reveal reveal-up"
              >
                <div className="text-[#03a696] text-xl sm:text-2xl">→</div>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 contain-paint reveal reveal-right">
            {galleryImages.map((src, i) => (
              <img
                key={i}
                src={src}
                className={`w-full object-cover ${
                  i === 0
                    ? "sm:col-span-2 h-[250px] sm:h-[220px] md:h-full"
                    : "h-[320px] sm:h-[160px] md:h-full"
                }`}
                alt=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= HIGH SUPPORT ================= */}
      <section className="w-full bg-[#F3F4F4] py-14 sm:py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 contain-paint reveal reveal-left">
            {supportImages.map((src, i) => (
              <img
                key={i}
                src={src}
                className={`w-full object-cover ${
                  i === 0
                    ? "col-span-2 h-[38vh] sm:h-[320px] md:h-full"
                    : "h-[24vh] sm:h-[160px] md:h-full"
                }`}
                alt=""
              />
            ))}
          </div>

          <div className="reveal reveal-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-heading font-medium text-gray-900 leading-[1.25]">
              This low-stimulation,{" "}
              <span className="text-[#03a696]">high-support home offers:</span>
            </h2>

            {[
              "A dedicated, highly trained team experienced in trauma-informed care and Positive Behaviour Support (PBS).",
              "A low-stimulation, therapeutic environment designed to reduce stress and promote emotional regulation.",
              "Collaborative working with multidisciplinary teams, families, and external professionals.",
              "Individualised support plans focused on recovery, independence, and long-term wellbeing.",
              "Flexible and adaptable living spaces tailored to meet each resident’s needs.",
            ].map((item, i) => (
              <div
                key={i}
                data-delay={i}
                className="py-4 sm:py-5 border-b border-[#03a696]/60 flex items-start gap-4 sm:gap-6 reveal reveal-up"
              >
                <div className="text-[#03a696] text-xl sm:text-2xl">→</div>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL FEATURE ================= */}
      <section className="w-full bg-[#F3F4F4] py-14 sm:py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          <div className="reveal reveal-left">
            <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-[#03a696]">
                Prosper Haven
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-lg leading-relaxed">
              We understand that no two individuals are the same, and we are
              happy to bespoke environmental or care plan adjustments based on
              referral needs.
            </p>
          </div>

          <div className="w-full reveal reveal-right contain-paint">
            <img
              src="haven7.jpeg"
              className="w-full h-[290px] sm:h-[320px] md:h-[480px] object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
