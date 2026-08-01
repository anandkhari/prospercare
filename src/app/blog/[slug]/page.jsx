import { supabase } from "@/lib/supabase";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/global/PageHero";
import Link from "next/link";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prospercaresolutions.com";

const categoryNames = {
  activities: "Care Home Activities",
  career: "Healthcare Career Guides",
  life: "Life in a Care Home",
  cqc: "Care Quality Commission",
  lda: "Learning Disability and Autism",
  pbs: "Therapeutical approach and PBS",
};

function estimateReadingTime(htmlOrText = "") {
  const cleanText = htmlOrText.replace(/<[^>]*>/g, " ").trim();
  const words = cleanText.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data: blog } = await supabase
    .from("blog_posts")
    .select("title, excerpt, cover_image")
    .eq("slug", slug)
    .single();

  if (!blog) {
    return {
      title: "Article Not Found | Prosper Care Solutions",
    };
  }

  const postUrl = `${siteUrl}/news/${slug}`;
  const ogImage = blog.cover_image || `${siteUrl}/haven-hero.png`;

  return {
    title: `${blog.title} | Prosper Care Solutions`,
    description: blog.excerpt || `Read ${blog.title} on Prosper Care Solutions`,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title: `${blog.title} | Prosper Care Solutions`,
      description: blog.excerpt || `Read ${blog.title} on Prosper Care Solutions`,
      images: [{ url: ogImage, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Prosper Care Solutions`,
      description: blog.excerpt || `Read ${blog.title} on Prosper Care Solutions`,
      images: [ogImage],
    },
  };
}

export default async function BlogSlugPage({ params }) {
  const { slug } = await params;

  const { data: blog, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !blog) {
    notFound();
  }

  const minutes = estimateReadingTime(blog.content);
  const categoryLabel = categoryNames[blog.category] || blog.category || "General";
  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const sanitizedHTML = DOMPurify.sanitize(blog.content || "");
  const postUrl = `${siteUrl}/news/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt || blog.title,
    image: blog.cover_image ? [blog.cover_image] : [`${siteUrl}/haven-hero.png`],
    datePublished: blog.created_at,
    author: {
      "@type": "Organization",
      name: "Prosper Care Solutions",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Prosper Care Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/news` },
      { "@type": "ListItem", position: 3, name: blog.title, item: postUrl },
    ],
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />
      <PageHero currentPage="Blog & Insights" />

      {/* MAIN CONTAINER */}
      <article className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* BACK LINK */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[#14B8A6] text-sm font-medium mb-12 group hover:gap-3 transition-all"
          >
            <ArrowLeft
              size={15}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            Back to Articles
          </Link>

          {/* ARTICLE HEADER */}
          <header className="mb-10">
            {/* CATEGORY BADGE */}
            {blog.category && (
              <span className="inline-flex items-center gap-1.5 bg-[#14B8A6]/10 text-[#14B8A6] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                <Tag size={13} />
                {categoryLabel}
              </span>
            )}

            {/* TITLE */}
            <h1 className="font-heading text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-8">
              {blog.title}
            </h1>

            {/* META ROW */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-[#14B8A6]" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-[#14B8A6]" />
                {minutes} min read
              </span>
              {blog.category && (
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  {categoryLabel}
                </span>
              )}
            </div>
          </header>

          {/* COVER IMAGE */}
          {blog.cover_image && (
            <div className="rounded-2xl overflow-hidden mb-12 shadow-xl shadow-gray-200/80">
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="w-full h-80 md:h-[450px] object-cover"
              />
            </div>
          )}

          {/* EXCERPT PULL QUOTE */}
          {blog.excerpt && (
            <p className="font-heading text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-[#14B8A6] pl-6 mb-12 italic bg-[#F4FBFB] py-5 pr-6 rounded-r-xl">
              {blog.excerpt}
            </p>
          )}

          {/* RICH TEXT HTML BODY */}
          <div
            className="prose prose-teal max-w-none text-gray-700 text-base md:text-lg leading-relaxed
              prose-headings:font-heading prose-headings:font-semibold prose-headings:text-gray-900
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-a:text-[#14B8A6] prose-a:underline hover:prose-a:text-[#0D9488]
              prose-blockquote:border-[#14B8A6] prose-blockquote:bg-[#F4FBFB] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
          />

          {/* BOTTOM ACTIONS */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link href="/news">
              <button className="inline-flex items-center gap-2 text-[#14B8A6] font-medium text-sm group hover:gap-3 transition-all">
                <ArrowLeft
                  size={15}
                  className="group-hover:-translate-x-1 transition-transform duration-200"
                />
                All articles
              </button>
            </Link>

            <Link href="/contact">
              <button className="bg-[#14B8A6] text-white px-8 py-3 rounded-lg hover:bg-[#0D9488] transition font-medium text-sm shadow-md shadow-teal-100 active:scale-95">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </article>

      {/* CTA SECTION */}
      <section className="bg-[#F4FBFB] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#14B8A6]" />
            <span className="text-[#14B8A6] text-sm font-semibold tracking-widest uppercase">
              Prosper Care Solutions
            </span>
            <span className="w-8 h-px bg-[#14B8A6]" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Interested in Our{" "}
            <span className="text-[#14B8A6]">Care Services?</span>
          </h2>

          <p className="text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Our dedicated team is here to answer your questions and help you find
            the right care and support for your needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="bg-[#14B8A6] text-white px-10 py-4 rounded-lg hover:bg-[#0D9488] transition font-medium shadow-lg shadow-teal-100 active:scale-95">
                Contact Us Today
              </button>
            </Link>
            <Link href="/news">
              <button className="border border-[#14B8A6] text-[#14B8A6] px-10 py-4 rounded-lg hover:bg-[#14B8A6]/5 transition font-medium">
                More Articles
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
