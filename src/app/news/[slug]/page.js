import { supabase } from "@/lib/supabase";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function BlogPost({ params }) {

  const { data: blog } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!blog) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <Navbar />

      <article className="max-w-4xl mx-auto py-20 px-6">

        <h1 className="text-4xl font-bold mb-6">
          {blog.title}
        </h1>

        <p className="text-gray-500 mb-10">
          {new Date(blog.created_at).toLocaleDateString()}
        </p>

        <img
          src={blog.cover_image}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-xl mb-12"
        />

        <div className="prose max-w-none">
          {blog.content}
        </div>

      </article>

      <Footer />
    </>
  );
}