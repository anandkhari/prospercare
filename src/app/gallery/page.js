import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";
import PageHero from "@/components/sections/global/PageHero";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prospercaresolutions.com";

export const metadata = {
  title: "Care Facilities & Living Gallery | Prosper Care Solutions",
  description:
    "View the facilities at Prosper Care Solutions. Explore our sensory rooms, living spaces, and supported accommodations in Wolverhampton & West Midlands.",
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
  openGraph: {
    title: "Care Facilities & Living Gallery | Prosper Care Solutions",
    description:
      "Explore photo gallery of Prosper Care Solutions accommodations, sensory rooms, living spaces, and community activities.",
    url: `${siteUrl}/gallery`,
  },
};

const galleryPageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Prosper Care Solutions Facilities Gallery",
  url: `${siteUrl}/gallery`,
  description: "Visual tour of complex care facilities, sensory rooms, and living spaces.",
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
      name: "Gallery",
      item: `${siteUrl}/gallery`,
    },
  ],
};

export default async function GalleryPage() {
  const { data: images } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <JsonLd schema={galleryPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />

      <PageHero currentPage="Gallery" />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images?.map((item) => (
              <div key={item.id} className="rounded-xl overflow-hidden shadow-sm">
                <img
                  src={item.url}
                  alt={item.category ? `Prosper Care Solutions - ${item.category}` : "Prosper Care Solutions Facility"}
                  className="w-full h-[280px] sm:h-[260px] md:h-[280px] lg:h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
