import React from "react";
import PageHero from "@/components/sections/global/PageHero";
import AboutIntroduction from "@/components/sections/pages/about/AboutIntroduction";
import MissionVision from "@/components/sections/pages/about/MissionVision";
import OurValues from "@/components/sections/pages/about/OurValues";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prosperhaven.co.uk";

export const metadata = {
  title: "About Us | Prosper Haven Care & Supported Living",
  description:
    "Learn about Prosper Haven's mission, values, and dedication to delivering empowering, person-centred care and supported living solutions across the UK.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Us | Prosper Haven Care & Supported Living",
    description:
      "Learn about Prosper Haven's mission, values, and dedication to delivering empowering, person-centred care.",
    url: `${siteUrl}/about`,
    images: [{ url: `${siteUrl}/about.jpg`, alt: "About Prosper Haven" }],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Prosper Haven",
  url: `${siteUrl}/about`,
  description:
    "Empowering individuals through compassionate, person-centred healthcare and supported living.",
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
      name: "About Us",
      item: `${siteUrl}/about`,
    },
  ],
};

const AboutPage = () => {
  return (
    <>
      <JsonLd schema={aboutPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />
      <PageHero currentPage="About Us" />
      <AboutIntroduction />
      <MissionVision />
      <OurValues />
      <Footer />
    </>
  );
};

export default AboutPage;
