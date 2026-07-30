import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prosperhaven.co.uk";

export const metadata = {
  title: "Prosper Haven Supported Living & Residential Care Services",
  description:
    "Explore Prosper Haven's specialized residential care home in Wolverhampton, providing PBS, autism, and complex care support.",
  alternates: {
    canonical: `${siteUrl}/prosperhaven`,
  },
  openGraph: {
    title: "Prosper Haven Supported Living & Residential Care Services",
    description:
      "Specialized residential care home in Wolverhampton offering 24/7 supported living and PBS care.",
    url: `${siteUrl}/prosperhaven`,
    images: [{ url: `${siteUrl}/prosperhaven2.jpeg`, alt: "Prosper Haven Facility" }],
  },
};

const careFacilitySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Prosper Haven Residential Care",
  url: `${siteUrl}/prosperhaven`,
  description:
    "Spacious, modern single-occupancy residential care home in Wolverhampton specializing in complex care and Positive Behaviour Support.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wolverhampton",
    addressCountry: "UK",
  },
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
      name: "Prosper Haven",
      item: `${siteUrl}/prosperhaven`,
    },
  ],
};

export default function ProsperHavenLayout({ children }) {
  return (
    <>
      <JsonLd schema={careFacilitySchema} />
      <JsonLd schema={breadcrumbSchema} />
      {children}
    </>
  );
}
