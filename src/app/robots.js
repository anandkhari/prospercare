export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prosperhaven.co.uk";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/admin/*", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
