"use client";

import React from "react";
import { Home } from "lucide-react";

export default function PageHero({
  title = "About us",
  bgImage = "/images/hero.jpg",
}) {
  return (
    <section className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Soft Overlay (Healthcare Style) */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

      {/* Content Container */}
      <div className="container relative mx-auto h-full flex items-end pr-4 sm:pr-6 lg:pr-8">
        
        {/* White Angled Card */}
        <div 
          className="bg-white pt-10 pb-5 px- sm:px-20 shadow-sm"
          style={{ 
            clipPath: 'polygon(0 0, 88% 0, 100% 100%, 0 100%)',
            marginBottom: '-1px' // Ensures no gap at the very bottom
          }}
        >
          {/* Breadcrumb & Title Group with Teal Underline */}
          <div className="flex items-center gap-5 border-b-[3px] border-teal-500 pb-2 pr-16 sm:pr-24">
            
            {/* Teal Home Icon */}
            <Home className="w-5 h-5 text-teal-600 fill-teal-600" />
            
            {/* Separator */}
            <span className="text-gray-400 text-2xl font-light">›</span>
            
            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl font-medium text-gray-800 tracking-tight whitespace-nowrap">
              {title}
            </h1>
          </div>
        </div>

      </div>
    </section>
  );
}