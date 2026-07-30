import PageHero from "@/components/sections/global/PageHero";
import ContactSection from "@/components/sections/pages/contact/ContactSection";
import ContactMap from "@/components/sections/pages/contact/ContactMap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prosperhaven.co.uk";

export const metadata = {
  title: "Contact Us | Prosper Haven",
  description:
    "Get in touch with Prosper Haven care team. Inquire about care home admissions, supported living options, or general care consultations.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | Prosper Haven",
    description:
      "Get in touch with Prosper Haven care team for admissions, supported living, and care inquiries.",
    url: `${siteUrl}/contact`,
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Prosper Haven",
  url: `${siteUrl}/contact`,
  description: "Contact details and inquiry form for Prosper Haven care services.",
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
      name: "Contact Us",
      item: `${siteUrl}/contact`,
    },
  ],
};

const ContactPage = () => {
  return (
    <>
      <JsonLd schema={contactPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />
      <PageHero currentPage="Contact Us" />
      <ContactSection />
      <ContactMap />
      <Footer />
    </>
  );
};

export default ContactPage;
