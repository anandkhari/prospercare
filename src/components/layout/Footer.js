import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 md:pt-24 px-6 md:px-12 lg:px-24 pb-12 relative overflow-hidden">

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 md:mb-20">

          {/* BRANDING */}
          <div className="lg:col-span-4 max-w-xs">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logo2.png"
                alt="Prosper Haven Logo"
                width={180}
                height={180}
                className="object-contain w-auto h-auto max-w-[180px] md:max-w-[220px]"
                priority
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Providing structured, compassionate residential support for young
              people with complex emotional and behavioural needs — empowering
              independence through care, stability, and guidance.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#14B8A6] hover:text-[#14B8A6] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="mailto:admin@prospercaresolutions.com"
                className="w-9 h-9 rounded-md border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#14B8A6] hover:text-[#14B8A6] transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-lg md:text-xl font-heading font-semibold mb-6 md:mb-8 text-[#14B8A6] uppercase tracking-widest">
              Quick Links
            </h4>

            <ul className="space-y-3 md:space-y-4 text-gray-400">
              <li>
                <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <span className="w-4 h-px bg-gray-700 group-hover:bg-[#14B8A6] group-hover:w-5 transition-all" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <span className="w-4 h-px bg-gray-700 group-hover:bg-[#14B8A6] group-hover:w-5 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <span className="w-4 h-px bg-gray-700 group-hover:bg-[#14B8A6] group-hover:w-5 transition-all" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/news" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <span className="w-4 h-px bg-gray-700 group-hover:bg-[#14B8A6] group-hover:w-5 transition-all" />
                  News &amp; Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <span className="w-4 h-px bg-gray-700 group-hover:bg-[#14B8A6] group-hover:w-5 transition-all" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <span className="w-4 h-px bg-gray-700 group-hover:bg-[#14B8A6] group-hover:w-5 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div className="lg:col-span-3">
            <h4 className="text-lg md:text-xl font-heading font-semibold mb-6 md:mb-8 text-[#14B8A6] uppercase tracking-widest">
              Service Delivery
            </h4>

            <ul className="space-y-3 md:space-y-4 text-gray-400">
              <li className="flex items-center gap-2 group">
                <span className="w-4 h-px bg-gray-700" />
             Person-Centered Care Planning
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-4 h-px bg-gray-700" />
              Innovative Technologies
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-4 h-px bg-gray-700" />
              Sensory & Wellbeing Activities
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-4 h-px bg-gray-700" />
               Daily Engagement & Life Skills
              </li>
             
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div className="lg:col-span-3">
            <h4 className="text-lg md:text-xl font-heading font-semibold mb-6 md:mb-8 text-[#14B8A6] uppercase tracking-widest">
              Address
            </h4>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-9 h-9 rounded-md border border-gray-700 flex items-center justify-center text-[#14B8A6]">
                  <MapPin size={16} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  58 Park Road East, WV1 4QB,<br />
                  Wolverhampton, United Kingdom
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-9 h-9 rounded-md border border-gray-700 flex items-center justify-center text-[#14B8A6]">
                  <Phone size={16} />
                </div>
                <a
                  href="tel:07976370231"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  07976370231
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-9 h-9 rounded-md border border-gray-700 flex items-center justify-center text-[#14B8A6]">
                  <Mail size={16} />
                </div>
                <a
                  href="mailto:admin@prospercaresolutions.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors break-all"
                >
                  admin@prospercaresolutions.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-gray-800/50 mb-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} Prosper Haven Care Solutions</p>

          <Link href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy &amp; Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
