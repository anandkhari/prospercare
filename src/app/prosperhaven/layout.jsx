import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prospercaresolutions.com";

export const metadata = {
  title: "Prosper Haven | Specialist Care Home | Prosper Care Solutions",
  description:
    "Prosper Haven by Prosper Care Solutions is a specialized single-occupancy residential care home in Wolverhampton providing PBS, autism, and complex care.",
  alternates: {
    canonical: `${siteUrl}/prosperhaven`,
  },
  openGraph: {
    title: "Prosper Haven | Specialist Care Home | Prosper Care Solutions",
    description:
      "Specialized residential care home in Wolverhampton offering 24/7 supported living and PBS care by Prosper Care Solutions.",
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
  parentOrganization: {
    "@type": "Organization",
    name: "Prosper Care Solutions",
    url: siteUrl,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "58 Park Road East",
    addressLocality: "Wolverhampton",
    addressRegion: "West Midlands",
    postalCode: "WV1 4QB",
    addressCountry: "GB",
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
