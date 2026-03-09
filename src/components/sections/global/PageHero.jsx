"use client";

import React from "react";
import Image from "next/image";
import { Home, ChevronRight } from "lucide-react";

export default function PageHero({ currentPage = "Our Team" }) {
  return (
    <section className="relative w-full bg-white">
      {/* Hero frame */}
      <div className="relative w-full h-[200px] md:h-[260px] overflow-hidden">
        {/* Background image - fills the parent */}
        <Image
          src="/pagehero.png"
          alt="Prosper Haven decorative hero background"
          fill
          priority
          className="object-cover object-center"
        />

      

        {/* Breadcrumb / title (above overlay) */}
        <nav
          aria-label="Breadcrumb"
          className="absolute bottom-4 md:bottom-6 left-4 md:left-8 z-20"
        >
          <ol className="flex items-center gap-3 ml-10 mt-10 text-gray-900">
            <li className="flex items-center gap-2 text-gray-900">
              <Home className="w-5 h-5 text-[#2BB673]" />
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </li>

            <li>
              <h1
                className="text-2xl  md:text-4xl font-medium text-gray-900"
                aria-current="page"
              >
                {currentPage}
              </h1>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}