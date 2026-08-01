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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prospercaresolutions.com";

export const metadata = {
  title: "Specialist Complex Care Wolverhampton | Prosper Care Solutions",
  description:
    "Prosper Care Solutions provides specialist holistic complex care, supported living and person-centred care services in Wolverhampton & West Midlands.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Specialist Complex Care Wolverhampton | Prosper Care Solutions",
    description:
      "Providing specialist holistic complex care, supported living and person-centred care services across Wolverhampton and the West Midlands.",
    url: siteUrl,
    images: [{ url: `${siteUrl}/haven-hero.png`, alt: "Prosper Care Solutions Hero" }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Prosper Care Solutions",
  image: `${siteUrl}/haven-hero.png`,
  url: siteUrl,
  telephone: "07976370231",
  email: "admin@prospercaresolutions.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "58 Park Road East",
    addressLocality: "Wolverhampton",
    addressRegion: "West Midlands",
    postalCode: "WV1 4QB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.5862,
    longitude: -2.1287,
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
      name: "What care services does Prosper Care Solutions provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prosper Care Solutions provides specialist holistic complex care, supported living, learning disability support, Positive Behaviour Support (PBS), autism support, and adult social care across Wolverhampton and the West Midlands.",
      },
    },
    {
      "@type": "Question",
      name: "Are Prosper Care Solutions services CQC regulated?",
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
