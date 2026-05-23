"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const systems = [
  { src: "/systems/rotacloud.webp", alt: "RotaCloud" },
  { src: "/systems/soldo.webp",     alt: "Soldo" },
  { src: "/systems/qcs.png",        alt: "QCS" },
  { src: "/systems/paycircle.png",  alt: "PayCircle" },
];

export default function SystemsCarousel() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          {/* <span className="font-heading inline-block text-[#14B8A6] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Systems
          </span> */}
          <h2 className="font-heading text-4xl lg:text-5xl font-medium text-gray-900">
            Powered by{" "}
            <span className="text-[#14B8A6]">Industry-Leading</span> Platforms
          </h2>
          <p className="font-heading text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We use trusted, best-in-class systems to deliver seamless care
            management, compliance, and operations.
          </p>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-[#F6FBF8]">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12!"
          >
            {systems.map((system) => (
              <SwiperSlide key={system.alt}>
                <div className="flex items-center justify-center px-10 py-14">
                  <Image
                    src={system.src}
                    alt={system.alt}
                    width={180}
                    height={80}
                    className="object-contain w-auto max-h-16  transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
