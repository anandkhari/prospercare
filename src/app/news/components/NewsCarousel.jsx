"use client";

import { useRef } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NewsCarousel({ blogs }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400 text-sm">
        No articles published yet.
      </div>
    );
  }

  return (
    <>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured News <span className="text-[#2BB673]">From Select</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Stay updated with the latest stories, guides, and updates from our
            healthcare community.
          </p>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex gap-3">
          <button
            ref={prevRef}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#2BB673] hover:text-white hover:border-[#2BB673] transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#2BB673] hover:text-white hover:border-[#2BB673] transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16 overflow-visible!"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="bg-white border border-[#2BB673] flex flex-col h-full">
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="w-full h-[240px] object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-gray-900 leading-snug mb-4">
                  {blog.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <Calendar size={14} />
                  {new Date(blog.created_at).toLocaleDateString()}
                </div>
                <Link href={`/news/${blog.slug}`}>
                  <button className="bg-[#2BB673] text-white px-5 py-2 text-sm hover:bg-[#249e61] transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
