import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 md:pt-24 px-6 md:px-12 lg:px-24 pb-12 relative overflow-hidden">
      
      {/* Background Watermark - Hidden on mobile for performance/readability */}
      <div className="absolute inset-x-0 bottom-24 hidden md:flex justify-center pointer-events-none select-none opacity-[0.03]">
        <span className="text-[10rem] font-bold whitespace-nowrap leading-none tracking-tighter">
          prosper haven
        </span>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 md:mb-20">
          
          {/* BRANDING */}
          <div className="lg:col-span-4 max-w-xs">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logo.png"
                alt="Prosper Haven Logo"
                width={180} // Slightly smaller for mobile scaling
                height={180}
                className="object-contain w-auto h-auto max-w-[180px] md:max-w-[220px]"
                priority
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Providing structured, compassionate residential support for young
              people with complex emotional and behavioural needs — empowering
              independence through care, stability, and guidance.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-3">
            <h4 className="text-lg md:text-xl font-heading font-semibold mb-6 md:mb-8 text-[#14B8A6]">
              Navigation
            </h4>

            <ul className="space-y-3 md:space-y-4 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#whychoose" className="hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT EMAIL */}
          <div className="lg:col-span-2">
            <h4 className="text-lg md:text-xl font-heading font-semibold mb-6 md:mb-8 text-[#14B8A6]">
              Email
            </h4>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer break-all md:break-normal">
              info@prosperhaven.co.uk
            </p>
          </div>

          {/* ADDRESS */}
          <div className="lg:col-span-3">
            <h4 className="text-lg md:text-xl font-heading font-semibold mb-6 md:mb-8 text-[#14B8A6]">
              Contact Us
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              58 Park Road East, WV1 4QB, 
              <br className="hidden md:block" /> Wolverhampton, United Kingdom
            </p>
          </div>

        </div>

        <div className="w-full h-px bg-gray-800/50 mb-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} Prosper Haven Care Solutions</p>

          <Link href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy & Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;