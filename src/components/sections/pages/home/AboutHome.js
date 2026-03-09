"use client";
import React from "react";
import Container from "@/components/ui/Container";
import usePremiumReveal from "@/hooks/usePremiumReveal";

const AboutHome = () => {
  usePremiumReveal();

  return (
    <section className="py-16 md:py-24 lg:py-30 px-2 md:px-12 lg:px-20 bg-[#F4FBFB]">
      <Container>
        <div className="grid grid-cols-1 mt-6 md:mt-10 lg:grid-cols-12 gap-10 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 space-y-5 md:space-y-6 reveal reveal-left">
            <div className="flex items-center gap-2 reveal reveal-up" data-delay="1">
              <span className="w-6 md:w-8 h-px bg-[#14B8A6]"></span>
              <p className="text-[#14B8A6] font-semibold text-xs md:text-sm">
                <span className="text-[#14B8A6]">17</span> Years of Experience
              </p>
            </div>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-gray-800 leading-tight reveal reveal-up"
              data-delay="2"
            >
              Creating Safe Spaces for Better Living
            </h2>

            <p
              className="text-sm md:text-base text-gray-600 leading-relaxed reveal reveal-up"
              data-delay="3"
            >
              Prosper Haven is a specialist residential support home offering a safe and structured environment for individuals with complex mental health and behavioural needs.
            </p>

            <button
              className="flex items-center gap-2 bg-[#14B8A6] hover:bg-[#0D9488] text-white px-6 md:px-8 py-3 rounded-lg font-medium shadow-lg shadow-teal-100 transition reveal reveal-up"
              data-delay="4"
            >
              Read More
            </button>
          </div>

          {/* CENTER IMAGE */}
          <div className="lg:col-span-4 relative flex justify-center reveal reveal-up" data-delay="2">
            <div className="relative w-full max-w-[340px] md:max-w-[400px] cursor-pointer group">

              <div
                className="absolute inset-0 z-0 border-2 border-[#D4E157] rounded-[40px]
                transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1
                [clip-path:polygon(0%_0%,100%_0%,100%_100%,30%_100%,0%_70%)]"
              ></div>

              <div
                className="relative z-10 overflow-hidden border-4 border-white shadow-2xl rounded-[35px]
                transition-transform duration-300 group-hover:-translate-y-2
                [clip-path:polygon(0%_0%,100%_0%,100%_100%,18%_100%,0%_82%)]"
              >
                <img
                  src="https://images.pexels.com/photos/4100663/pexels-photo-4100663.jpeg"
                  alt=""
                  className="w-full h-[280px] sm:h-[360px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="lg:col-span-3 space-y-6 md:space-y-8 lg:space-y-12">
            {[
              { id: "01", title: "Experienced Care Team" },
              { id: "02", title: "24-Hour Personalised Support" },
              { id: "03", title: "Meaningful Daily Activities" },
              { id: "04", title: "Inclusive Community Living" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group cursor-pointer reveal reveal-right"
                data-delay={idx + 1}
              >
                <div className="flex items-center gap-3 md:gap-4 transition-transform duration-300 group-hover:translate-x-2">
                  <span className="text-3xl md:text-4xl font-heading font-medium text-[#14B8A6]">
                    {feature.id}
                  </span>
                  <p className="text-base md:text-lg font-heading font-semibold text-gray-900">
                    {feature.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutHome;