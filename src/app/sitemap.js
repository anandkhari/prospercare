import { supabase } from "@/lib/supabase";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prospercaresolutions.com";

  // Static site routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/news",
    "/prosperhaven",
    "/team",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Fetch dynamic blog posts from Supabase
  let blogRoutes = [];
  try {
    const { data: posts } = await supabase
      .from("blog_posts")
      .select("slug, created_at")
      .eq("published", true);

    if (posts && posts.length > 0) {
      posts.forEach((post) => {
        const lastMod = post.created_at
          ? new Date(post.created_at).toISOString()
          : new Date().toISOString();

        blogRoutes.push({
          url: `${baseUrl}/news/${post.slug}`,
          lastModified: lastMod,
          changeFrequency: "weekly",
          priority: 0.7,
        });
      });
    }
  } catch (error) {
    console.error("Error generating sitemap dynamic routes:", error);
  }

  return [...staticRoutes, ...blogRoutes];
}
