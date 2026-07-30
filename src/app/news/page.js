import PageHero from "@/components/sections/global/PageHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsCarousel from "./components/NewsCarousel";
import CategoryCards from "./components/CategoryCards";
import { supabase } from "@/lib/supabase";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prosperhaven.co.uk";

export const metadata = {
  title: "Care News, Articles & Healthcare Guides | Prosper Haven",
  description:
    "Explore latest healthcare news, Positive Behaviour Support (PBS) guides, care home activities, and CQC compliance advice from Prosper Haven.",
  alternates: {
    canonical: `${siteUrl}/news`,
  },
  openGraph: {
    title: "Care News, Articles & Healthcare Guides | Prosper Haven",
    description:
      "Explore latest healthcare news, PBS guides, care home activities, and CQC advice.",
    url: `${siteUrl}/news`,
  },
};

const blogCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Prosper Haven Care News & Insights",
  url: `${siteUrl}/news`,
  description:
    "News, guides, and healthcare advice on care homes, PBS, learning disability care, and supported living.",
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
      name: "News",
      item: `${siteUrl}/news`,
    },
  ],
};

export default async function News() {
  const { data: blogs, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) console.error("Failed to load blogs:", error);

  return (
    <div className="bg-white min-h-screen">
      <JsonLd schema={blogCollectionSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />
      <PageHero currentPage="Latest News" />

      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <CategoryCards />
          <NewsCarousel blogs={blogs || []} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
