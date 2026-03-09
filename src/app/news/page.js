"use client";

import { useEffect, useRef, useState } from "react";
import PageHero from "@/components/sections/global/PageHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Activity,
  HeartHandshake,
  Users,
  Newspaper,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { supabase } from "@/lib/supabase";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categoryCards = [
  { id: "all", name: "All News", icon: Newspaper },
  { id: "activities", name: "Care Home Activities", icon: Activity },
  { id: "career", name: "Healthcare Career Guides", icon: HeartHandshake },
  { id: "life", name: "Life in a Care Home", icon: Users },
];

export default function News() {
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  /* Fetch latest 4 blogs */
  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(4);

      if (error) {
        console.error("Failed to load blogs:", error);
        return;
      }

      setBlogs(data || []);
      setLoadingBlogs(false);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHero currentPage="Latest News" />

      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          {/* CATEGORY CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {categoryCards.map((cat) => {
              const Icon = cat.icon;

              return (
                <Link key={cat.id} href={`/news/category/${cat.id}`}>
                  <div className="group p-8 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-4 bg-white text-[#2BB673] border-gray-200 hover:border-[#2BB673] hover:text-[#2BB673] cursor-pointer">
                    <Icon size={48} strokeWidth={2} />
                    <span className="text-sm font-semibold text-center">
                      {cat.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured News <span className="text-[#2BB673]">From Select</span>
              </h2>

              <p className="text-gray-500 text-lg">
                Stay updated with the latest stories, guides, and updates from our healthcare community.
              </p>
            </div>

            {/* Carousel Navigation */}
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

          {/* Loading */}
          {loadingBlogs && (
            <div className="text-center py-20 text-gray-500">
              Loading latest articles...
            </div>
          )}

          {/* BLOG CAROUSEL */}
          {!loadingBlogs && (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16 !overflow-visible"
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <div className="bg-white border border-[#2BB673] flex flex-col h-full">

                    {/* Image */}
                    <img
                      src={blog.cover_image}
                      alt={blog.title}
                      className="w-full h-[240px] object-cover"
                    />

                    {/* Content */}
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
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}