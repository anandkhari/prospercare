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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prosperhaven.co.uk";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prosper Haven | Premier Care & Supported Living Services",
    template: "%s | Prosper Haven",
  },
  description:
    "Prosper Haven delivers exceptional, compassionate care home and supported living services in the UK, specializing in Positive Behaviour Support (PBS), learning disability care, and dedicated healthcare assistance.",
  keywords: [
    "Care Home UK",
    "Supported Living",
    "Prosper Haven",
    "Healthcare Career Guides",
    "Learning Disability Support",
    "Positive Behaviour Support",
    "Care Quality Commission",
  ],
  authors: [{ name: "Prosper Haven Team" }],
  creator: "Prosper Haven",
  publisher: "Prosper Haven Care Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
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
    title: "Prosper Haven | Premier Care & Supported Living Services",
    description:
      "Compassionate, high-quality care home and supported living solutions across the UK.",
    siteName: "Prosper Haven",
    images: [
      {
        url: `${siteUrl}/haven-hero.png`,
        width: 1200,
        height: 630,
        alt: "Prosper Haven Care Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosper Haven | Premier Care & Supported Living Services",
    description:
      "Compassionate, high-quality care home and supported living solutions across the UK.",
    images: [`${siteUrl}/haven-hero.png`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Prosper Haven",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/haven-hero.png`,
  description:
    "Prosper Haven provides specialized care home, supported living, and PBS healthcare solutions.",
  telephone: "+44 20 1234 5678",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prosper Haven Care Headquarters",
    addressLocality: "London",
    addressCountry: "UK",
  },
  sameAs: [
    "https://facebook.com/prosperhaven",
    "https://linkedin.com/company/prosperhaven",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prosper Haven",
  url: siteUrl,
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