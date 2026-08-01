import { supabase } from "@/lib/supabase";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCard from "../../components/BlogCard";
import PageHero from "@/components/sections/global/PageHero";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prospercaresolutions.com";

const categoryNames = {
  activities: "Care Home Activities",
  career:     "Healthcare Career Guides",
  life:       "Life in a Care Home",
  cqc:        "Care Quality Commission",
  lda:        "Learning Disability and Autism",
  pbs:        "Therapeutical approach and PBS",
};

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryLabel = categoryNames[category] || (category === "all" ? "All News" : category);
  const title = `${categoryLabel} | Prosper Care Solutions`;
  const description = `Read expert ${categoryLabel} guides and insights from Prosper Care Solutions. Supporting person-centred complex care in Wolverhampton & West Midlands.`;
  const categoryUrl = `${siteUrl}/news/category/${category}`;

  return {
    title,
    description,
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      title,
      description,
      url: categoryUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryLabel = categoryNames[category] || (category === "all" ? "All News" : category);

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

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryLabel} - Prosper Care Solutions`,
    url: `${siteUrl}/news/category/${category}`,
    description: `Browse ${categoryLabel} articles from Prosper Care Solutions.`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "News", item: `${siteUrl}/news` },
      { "@type": "ListItem", position: 3, name: categoryLabel, item: `${siteUrl}/news/category/${category}` },
    ],
  };

  return (
    <>
      <JsonLd schema={collectionSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />

      <PageHero currentPage="All Blogs" />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Page Title */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 capitalize">
              {category === "all" ? "All News" : `${categoryLabel}`}
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