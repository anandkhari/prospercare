import { supabase } from "@/lib/supabase";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCard from "../../components/BlogCard";
import PageHero from "@/components/sections/global/PageHero";

export default async function CategoryPage({ params }) {

  const { category } = await params;   // ✅ FIX

  console.log("Category param:", category);

  let query = supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (category !== "all") {
    query = query.eq("category", category);
  }

  const { data: blogs, error } = await query;

  if (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return (
    <>
      <Navbar />

      <PageHero  currentPage="All Blogs"/>

      <section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-16">

    {/* Page Title */}
    <div className="mb-16">
      <h1 className="text-4xl font-bold text-gray-900 capitalize">
        {category === "all" ? "All News" : `${category} Articles`}
      </h1>
    </div>

    {/* Blog Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500 py-20">
          No articles found for this category.
        </div>
      )}

    </div>

  </div>
</section>

      <Footer />
    </>
  );
}