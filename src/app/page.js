import Hero from "@/components/sections/global/Hero";
import AboutHome from "@/components/sections/pages/home/AboutHome";
import ServiceDelivery from "@/components/sections/pages/home/ServiceDelivery";
import WhyChooseUs from "@/components/sections/global/WhyChooseUs";
import FAQ from "@/components/sections/global/FAQ";
import ContactForm from "@/components/sections/global/ContactForm";
import SystemsCarousel from "@/components/sections/global/SystemsCarousel";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prosperhaven.co.uk";

export const metadata = {
  title: "Prosper Haven | Premier Care & Supported Living Services",
  description:
    "Discover compassionate, person-centred care home services and supported living solutions with Prosper Haven. Dedicated support across the UK.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Prosper Haven | Premier Care & Supported Living Services",
    description:
      "Compassionate, person-centred care home services and supported living solutions across the UK.",
    url: siteUrl,
    images: [{ url: `${siteUrl}/haven-hero.png`, alt: "Prosper Haven Hero" }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prosper Haven Care Solutions",
  image: `${siteUrl}/haven-hero.png`,
  url: siteUrl,
  telephone: "+44 20 1234 5678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prosper Haven Headquarters",
    addressLocality: "London",
    addressCountry: "UK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What care services does Prosper Haven provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prosper Haven provides residential care home placement, supported living, learning disability care, Positive Behaviour Support (PBS), and specialized healthcare staffing.",
      },
    },
    {
      "@type": "Question",
      name: "Are Prosper Haven services CQC regulated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our care practices align fully with Care Quality Commission (CQC) standards and best practice guidelines.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={faqSchema} />
      <Navbar />
      <Hero />
      <AboutHome />
      <ServiceDelivery />
      <WhyChooseUs />
      <FAQ />
      <ContactForm />
      <SystemsCarousel />
      <Footer />
    </main>
  );
}
