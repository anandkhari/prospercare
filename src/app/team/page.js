import React from "react";
import PageHero from "@/components/sections/global/PageHero";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prosperhaven.co.uk";

export const metadata = {
  title: "Our Care Leadership Team | Prosper Haven",
  description:
    "Meet Prosper Haven's leadership team of experienced healthcare professionals dedicated to empowering individuals with complex needs.",
  alternates: {
    canonical: `${siteUrl}/team`,
  },
  openGraph: {
    title: "Our Care Leadership Team | Prosper Haven",
    description:
      "Meet Prosper Haven's leadership team of experienced healthcare professionals.",
    url: `${siteUrl}/team`,
    images: [{ url: `${siteUrl}/vinu.png`, alt: "Vinu Joseph - Prosper Haven" }],
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Prosper Haven Leadership Team",
  url: `${siteUrl}/team`,
  mainEntity: [
    {
      "@type": "Person",
      name: "Vinu Joseph",
      jobTitle: "Founder & Healthcare Director",
      worksFor: {
        "@type": "Organization",
        name: "Prosper Haven",
      },
    },
    {
      "@type": "Person",
      name: "John Carew",
      jobTitle: "Operations Manager",
      worksFor: {
        "@type": "Organization",
        name: "Prosper Haven",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Our Team",
      item: `${siteUrl}/team`,
    },
  ],
};

const OurTeam = () => {
  return (
    <div>
      <JsonLd schema={teamSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />
      <PageHero currentPage="Our Team" />

      {/* ===== HERO SECTION ===== */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-[#f7faf9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 md:gap-12 lg:gap-20">
            {/* Left Heading */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <div className="h-[2px] w-10 sm:w-12 md:w-16 bg-teal-600 shrink-0" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                Meet The <span className="text-teal-600">Team</span>
              </h2>
            </div>

            {/* Right Mission Text */}
            <div className="w-full lg:max-w-xl xl:max-w-2xl">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Our mission is to empower young people with learning
                disabilities and mental health challenges to build meaningful,
                independent lives, with the support and care that prioritizes
                their well-being, development, and happiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Vinu Joseph Section ===== */}
      <section className="pb-16 sm:pb-20 md:pb-24 bg-[#f7faf9]">
        <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[420px_1fr] gap-8 sm:gap-10 md:gap-14 lg:gap-20 items-start">
            {/* Image Column */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-[420px] mx-auto md:mx-0">
              <Image
                src="/vinu.png"
                alt="Vinu Joseph"
                width={420}
                height={420}
                className="rounded-3xl w-full h-auto object-cover aspect-square"
                priority
              />
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl border border-teal-100 shadow-sm p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                With over 17 years of experience in health and social care, Vinu
                Joseph has dedicated his career to improving the lives of
                individuals with complex needs. His passion for empowering
                people and promoting independence defines his approach to
                delivering compassionate, high-quality care. Vinu brings strong
                expertise in managing both operational and regulatory aspects of
                care services, consistently leading facilities to meet and
                exceed CQC standards. He believes care should go beyond meeting
                basic needs by creating environments that foster dignity,
                autonomy, and personal growth. Under his leadership, Prosper
                Care Solutions is committed to setting new benchmarks in
                client-centered care through innovation, strategic development,
                and sustainable solutions that benefit both residents and staff.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Vinu Joseph
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Founder & Director, Prosper Care Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Shoby Vinu Section (Inverted Layout) ===== */}
      <section className="pb-16 sm:pb-20 md:pb-24 bg-[#f7faf9]">
        <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] gap-8 sm:gap-10 md:gap-14 lg:gap-20 items-start">
            {/* Content Card */}
            <div className="bg-white rounded-3xl border border-teal-100 shadow-sm p-6 sm:p-8 md:p-10 lg:p-12 order-2 md:order-1">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Shoby Vinu brings a unique blend of psychological expertise,
                educational knowledge, and extensive experience in health and
                social care. With a strong foundation in psychological
                principles and technical skills, she enables evidence-based,
                compassionate care that supports individuals holistically. Her
                background includes teaching counselling skills and conducting
                therapeutic sessions, as well as working across NHS hospitals
                and independent care settings. Currently pursuing a Master’s
                degree in Adult Nursing, Shoby continues to integrate the latest
                research into care practices. She is committed to building a
                culture of excellence where residents are empowered, valued, and
                consistently supported in achieving their highest level of
                well-being.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Shoby Vinu
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Director and Nominated Individual
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-[420px] mx-auto md:mx-0 order-1 md:order-2">
              <Image
                src="/shoby.png"
                alt="Shoby Vinu"
                width={420}
                height={420}
                className="rounded-3xl w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Athul Gopakumar Section (Abhijith image) ===== */}
      <section className="pb-16 sm:pb-20 md:pb-24 bg-[#f7faf9]">
        <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[420px_1fr] gap-8 sm:gap-10 md:gap-14 lg:gap-20 items-start">
            {/* Image Column */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-[420px] mx-auto md:mx-0">
              <Image
                src="/abhijith2.jpeg"
                alt="Athul Gopakumar Pillai"
                width={420}
                height={420}
                className="rounded-3xl w-full h-auto object-fit aspect-square"
              />
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl border border-teal-100 shadow-sm p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Athul Gopakumar Pillai is a dedicated health and social care
                professional currently serving as Deputy Manager at Prosper Care
                Solutions. With over four years of experience in adult social
                care, Athul has developed strong expertise in supporting
                individuals with mental health needs, autism, learning
                disabilities, and behaviours that may challenge services. Known
                for his calm leadership approach and commitment to
                person-centred care, Athul plays an active role in overseeing
                daily operations, staff management, safeguarding practices,
                compliance, and the delivery of high-quality support services.
                He is passionate about creating safe, structured, and empowering
                environments where individuals can achieve greater independence
                and improved wellbeing.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Athul Gopakumar Pillai
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Deputy Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== John Brien Section ===== */}


      <Footer />
    </div>
  );
};

export default OurTeam;