import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 px-22 pb-12 relative overflow-hidden">
      
      {/* Background Watermark */}
      {/* <div className="absolute inset-x-0 bottom-24 flex justify-center pointer-events-none select-none opacity-[0.03]">
        <span className="text-[10rem] font-bold whitespace-nowrap leading-none tracking-tighter">
          prosper haven
        </span>
      </div> */}

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* BRANDING */}
          <div className="lg:col-span-4 max-w-xs">
            <div className="flex items-center gap-4 mb-6">

              {/* LOGO IMAGE */}
              <Image
                src="/logo.png"
                alt="Prosper Haven Logo"
                width={220}
                height={220}
                className="object-contain"
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
            <h4 className="text-xl font-heading font-semibold mb-8">
              Navigation
            </h4>

            <ul className="space-y-4 text-gray-400">
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
            <h4 className="text-xl font-heading font-semibold mb-8">
              Email
            </h4>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              info@prosperhaven.co.uk
            </p>
          </div>

          {/* ADDRESS */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-heading font-semibold mb-8">
              Contact Us
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              58 Park Road East, WV1 4QB, Wolverhampton,
              <br />
              United Kingdom
            </p>
          </div>

        </div>

        <div className="w-full h-px bg-gray-800/50 mb-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
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