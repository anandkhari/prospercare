import PageHero from "@/components/sections/global/PageHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsCarousel from "./components/NewsCarousel";
import CategoryCards from "./components/CategoryCards";
import { supabase } from "@/lib/supabase";

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
      <Navbar />
      <PageHero currentPage="Latest News" />

      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          {/* CATEGORY CARDS — client component with click loading state */}
          <CategoryCards />

          {/* CAROUSEL — client component receives pre-fetched blogs as props */}
          <NewsCarousel blogs={blogs || []} />

        </div>
      </section>

      <Footer />
    </div>
  );
}
