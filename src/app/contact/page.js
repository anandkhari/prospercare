import PageHero from "@/components/sections/global/PageHero";
import ContactSection from "@/components/sections/pages/contact/ContactSection";
import ContactMap from "@/components/sections/pages/contact/ContactMap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prospercaresolutions.com";

export const metadata = {
  title: "Contact Specialist Care Team | Prosper Care Solutions",
  description:
    "Contact Prosper Care Solutions in Wolverhampton. Inquire about person-centred complex care, supported living, and PBS services in the West Midlands.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Specialist Care Team | Prosper Care Solutions",
    description:
      "Get in touch with Prosper Care Solutions team for complex care admissions, supported living, and care consultations.",
    url: `${siteUrl}/contact`,
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Prosper Care Solutions",
  url: `${siteUrl}/contact`,
  description: "Contact details and inquiry form for Prosper Care Solutions complex care services in Wolverhampton.",
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
