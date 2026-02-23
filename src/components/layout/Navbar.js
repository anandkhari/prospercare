"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Why Choose Us", href: "/#whychoose" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      {/* Glass Container */}
     <nav className="mx-auto flex items-center justify-between px-22 py-4 bg-transparent rounded-b-2xl">
        {/* LEFT — LOGO */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Prosper Care Logo"
            width={180}
            height={50}
            className="object-contain"
          />
        </a>

        {/* CENTER — NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-base font-medium font-heading text-gray-800">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`relative pb-2 transition-all ${
                index === 0 ? "text-[#14B8A6]" : "hover:text-[#14B8A6]"
              }`}
            >
              {link.label}

              {/* ACTIVE UNDERLINE */}
              {index === 0 && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#14B8A6] rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* RIGHT — CONTACT BUTTON */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-xl bg-[#14B8A6] px-6 py-2.5 text-white font-medium shadow-sm hover:opacity-90 transition"
          >
            <PhoneCall size={18} strokeWidth={2} />
            Contact Us
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-6 py-6 space-y-4">
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} className="block text-gray-800">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
