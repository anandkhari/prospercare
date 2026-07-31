import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import JsonLd from "@/components/seo/JsonLd";

import FloatingButtons from "@/components/ui/FloatingButtons";
import NavigationProgress from "@/components/ui/NavigationProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://prospercaresolutions.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Prosper Care Solutions | Specialist Holistic Complex Care in Wolverhampton & West Midlands",
    template: "%s | Prosper Care Solutions",
  },

  description:
    "Prosper Care Solutions provides specialist holistic complex care, supported living and person-centred care services across Wolverhampton and the West Midlands. We empower every individual through personalised care plans designed around their needs, aspirations, independence and quality of life.",

  keywords: [
    "Specialist Complex Care",
    "Complex Care Wolverhampton",
    "Complex Care West Midlands",
    "Holistic Care",
    "Supported Living",
    "Supported Living Wolverhampton",
    "Residential Care",
    "Adult Social Care",
    "Learning Disabilities",
    "Autism Support",
    "Positive Behaviour Support",
    "PBS Care",
    "Mental Health Support",
    "Person Centred Care",
    "Care Provider Wolverhampton",
    "Care Services West Midlands",
    "Specialist Care Services",
    "Prosper Care Solutions",
  ],

  authors: [
    {
      name: "Prosper Care Solutions",
    },
  ],

  creator: "Prosper Care Solutions",

  publisher: "Prosper Care Solutions",

  category: "Healthcare",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,

    siteName: "Prosper Care Solutions",

    title:
      "Prosper Care Solutions | Specialist Holistic Complex Care in Wolverhampton & West Midlands",

    description:
      "Providing specialist holistic complex care, supported living and person-centred services across Wolverhampton and the West Midlands.",

    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Prosper Care Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Prosper Care Solutions | Specialist Holistic Complex Care",

    description:
      "Specialist holistic complex care, supported living and person-centred care in Wolverhampton & the West Midlands.",

    images: [`${siteUrl}/og-image.jpg`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "MedicalBusiness",

  name: "Prosper Care Solutions",

  url: siteUrl,

  logo: `${siteUrl}/logo.png`,

  image: `${siteUrl}/og-image.jpg`,

  slogan: "Beyond Complex Care. Every Person. Every Possibility.",

  description:
    "Prosper Care Solutions delivers specialist holistic complex care and supported living services across Wolverhampton and the West Midlands. Our person-centred approach is designed around every individual's needs, aspirations, independence and quality of life.",

  areaServed: [
    {
      "@type": "City",
      name: "Wolverhampton",
    },
    {
      "@type": "AdministrativeArea",
      name: "West Midlands",
    },
  ],

  address: {
    "@type": "PostalAddress",
    addressLocality: "Wolverhampton",
    addressRegion: "West Midlands",
    addressCountry: "GB",
  },

  priceRange: "$$",

  sameAs: [
    "https://www.facebook.com/",
    "https://www.linkedin.com/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "Prosper Care Solutions",

  url: siteUrl,

  description:
    "Specialist holistic complex care and supported living in Wolverhampton and the West Midlands.",

  publisher: {
    "@type": "Organization",
    name: "Prosper Care Solutions",
  },

  inLanguage: "en-GB",

  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/news?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <NavigationProgress />

        {children}

        <FloatingButtons />

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: "#ffffff",
              color: "#1f2937",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            },
            success: {
              iconTheme: {
                primary: "#14B8A6",
                secondary: "#ffffff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}