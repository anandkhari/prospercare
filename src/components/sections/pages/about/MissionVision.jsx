"use client";

import React from "react";
import Image from "next/image";

const MissionVision = () => {
  return (
    <section className="relative bg-[#f9fbf9] py-16 sm:py-20 lg:py-28 overflow-hidden">

      {/* Background Watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <Image
          src="/about/background.png"
          alt="decorative background"
          fill
          className="object-cover scale-[1.4] lg:scale-[1.5]"
        />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-20 relative z-10">

        {/* HEADER */}
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <div className="flex items-start gap-4 mb-4">
            <span className="w-10 sm:w-12 h-[2px] bg-teal-500 mt-3 rounded-full" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              <span className="text-teal-600">Our Promise</span> to Those We
              <br className="hidden sm:block" />
              Support of Experience
            </h2>
          </div>

          <div className="w-32 sm:w-[180px] h-[3px] bg-teal-500 mt-4 sm:mt-6 rounded-full" />
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-14">

          {/* MISSION CARD */}
          <div className="bg-white rounded-2xl sm:rounded-[30px] border border-gray-100 p-6 sm:p-8 lg:p-14 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">

            <div className="absolute left-0 top-1/4 bottom-1/4 w-[4px] sm:w-[6px] bg-teal-500 rounded-r-full" />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

              <div className="flex-1">
                <h4 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-1">
                  Our
                </h4>
                <h4 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-teal-600 mb-4 sm:mb-8 lowercase">
                  mission
                </h4>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
                  Our mission is to deliver exceptional, person-centred care
                  that promotes independence, wellbeing, and personal growth.
                  Through experienced leadership, continuous improvement, and a
                  commitment to inclusive support, we strive to make a positive
                  difference in the lives of those we serve every day.
                </p>
              </div>

              {/* ICON */}
              <div className="w-20 sm:w-24 lg:w-40 h-20 sm:h-24 lg:h-40 flex-shrink-0 mx-auto sm:mx-0 text-teal-600/20 group-hover:scale-110 transition-transform duration-500">
                <img
                  src="/about/mission.png"
                  alt="Mission Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* VISION CARD */}
          <div className="bg-white rounded-2xl sm:rounded-[30px] border border-gray-100 p-6 sm:p-8 lg:p-14 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">

            <div className="absolute left-0 top-1/4 bottom-1/4 w-[4px] sm:w-[6px] bg-teal-500 rounded-r-full" />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

              <div className="flex-1">
                <h4 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-1">
                  Our
                </h4>
                <h4 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-teal-600 mb-4 sm:mb-8 capitalize">
                  Vision
                </h4>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
                  To build a future where every individual feels valued,
                  supported, and empowered to live independently with dignity.
                  We envision safe, inclusive environments where compassionate
                  care, innovation, and respect come together to enhance
                  quality of life and create meaningful, lasting impact.
                </p>
              </div>

              {/* ICON */}
              <div className="w-20 sm:w-24 lg:w-40 h-20 sm:h-24 lg:h-40 flex-shrink-0 mx-auto sm:mx-0 text-teal-600/20 group-hover:scale-110 transition-transform duration-500">
                <img
                  src="/about/vision.png"
                  alt="Vision Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;