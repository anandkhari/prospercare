"use client";

import Link from "next/link";
import { Calendar, Loader2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function BlogCard({ blog }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="group bg-white border border-[#2BB673] flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={blog.cover_image}
          alt={blog.title}
          className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">

        <h3 className="text-lg font-medium text-gray-900 mb-4 group-hover:text-[#2BB673] transition-colors duration-200">
          {blog.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Calendar size={14} />
          {new Date(blog.created_at).toLocaleDateString()}
        </div>

        <div className="mt-auto">
          <Link href={`/news/${blog.slug}`} onClick={() => setLoading(true)}>
            <button
              disabled={loading}
              className="flex items-center gap-2 bg-[#2BB673] text-white px-5 py-2 text-sm hover:bg-[#249e61] active:scale-95 transition-all duration-150 disabled:opacity-80"
            >
              {loading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Read More
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
