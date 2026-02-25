"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Why Choose Us", href: "/whychoose" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      {/* NAVBAR */}
      <nav className="mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-12 py-4 bg-transparent">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Prosper Care Logo"
            width={160}
            height={45}
            className="object-contain w-[130px] sm:w-[150px] lg:w-[180px]"
          />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-base font-medium text-gray-800">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative pb-2 hover:text-[#14B8A6] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP CONTACT BUTTON */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-xl bg-[#14B8A6] px-6 py-3 text-white font-medium shadow-sm hover:opacity-90 transition"
          >
            <PhoneCall size={18} />
            Contact Us
          </Link>
        </div>

        {/* MOBILE RIGHT SIDE */}
        <div className="flex items-center gap-3 md:hidden">

          {/* BIG BRIGHT CONTACT BUTTON (MOBILE) */}
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-xl bg-[#14B8A6] text-white px-4 py-3 shadow-md active:scale-95 transition"
          >
            <PhoneCall size={22} />
          </Link>

          {/* MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/80 backdrop-blur-md shadow-md"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg transition-all duration-300 ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-6 text-lg font-medium text-gray-800">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="block border-b border-gray-100 pb-3 hover:text-teal-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}