"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },

  {
    label: "About",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
    ],
  },

  {
    label: "News & Events",
    dropdown: [
      { label: "News", href: "/news" },
      { label: "Gallery", href: "/gallery" },
    ],
  },

  { label: "Prosper Haven", href: "/prosperhaven" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "fixed" : "absolute"
      }`}
    >

      <div className="absolute inset-0 md:hidden bg-gradient-to-r from-[#c5dedc] to-[#25baa9] z-0" />

      {/* NAVBAR */}

      <nav
        className={`max-w-7xl mx-auto relative flex items-center justify-between px-5 sm:px-6 lg:px-12 py-2 transition-all duration-300
        ${scrolled ? "mt-2" : "mt-6"}
        md:rounded-2xl
        md:backdrop-blur-sm
        ${
          isHomePage && !scrolled
            ? "md:bg-transparent md:shadow-none"
            : "md:bg-white/80 md:shadow-lg"
        }`}
      >

        {/* LOGO */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo2.png"
            alt="Prosper Care Logo"
            width={180}
            height={50}
            className="object-contain w-[160px] sm:w-[180px] lg:w-[220px]"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}

        <div className="hidden md:flex items-center justify-center flex-1 gap-12">

          {navLinks.map((link, index) => {

            if (link.dropdown) {

              return (

                <div key={index} className="relative group">

                  <div className="flex items-center gap-1 text-base lg:text-lg font-medium text-gray-700 hover:text-[#14B8A6] cursor-pointer">

                    {link.label}

                    <ChevronDown size={16} />

                  </div>

                  {/* DROPDOWN */}

                  <div className="absolute left-0 mt-4 w-52 bg-white rounded-xl shadow-lg opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">

                    {link.dropdown.map((item, i) => (

                      <Link
                        key={i}
                        href={item.href}
                        className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#14B8A6]"
                      >
                        {item.label}
                      </Link>

                    ))}

                  </div>

                </div>

              );

            }

            return (

              <Link
                key={index}
                href={link.href}
                className="text-base lg:text-lg font-medium text-gray-700 hover:text-[#14B8A6]"
              >
                {link.label}
              </Link>

            );

          })}

        </div>

        {/* CONTACT BUTTON */}

        <div className="hidden md:flex">

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-xl bg-[#14B8A6] px-6 py-3 text-white font-medium shadow-sm hover:bg-[#0D9488] transition"
          >
            <PhoneCall size={18} />
            Contact Us
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}

        <div className="flex items-center gap-3 md:hidden">

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-15 h-15 flex items-center justify-center rounded-xl backdrop-blur-md"
            aria-label="Toggle Menu"
          >

            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}

          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}

      <div
        className={`md:hidden absolute top-full left-0 w-full
        bg-white/95 backdrop-blur-xl shadow-xl
        transform-gpu origin-top
        transition-[opacity,transform]
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-6 scale-95 pointer-events-none"
        }`}
      >

        <div className="px-6 py-8 space-y-6 text-lg font-medium text-gray-800">

          {navLinks.map((link, i) => (

            <div key={i}>

              {link.dropdown ? (

                <div className="space-y-3">

                  <div className="font-semibold text-gray-900">
                    {link.label}
                  </div>

                  {link.dropdown.map((item, j) => (

                    <Link
                      key={j}
                      href={item.href}
                      className="block pl-4 border-l border-gray-200 hover:text-[#14B8A6]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>

                  ))}

                </div>

              ) : (

                <Link
                  href={link.href}
                  className="block border-b border-gray-100 pb-3 hover:text-[#14B8A6]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>

              )}

            </div>

          ))}

        </div>

      </div>

    </header>
  );
}