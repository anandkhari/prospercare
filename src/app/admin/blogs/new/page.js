"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function NewBlogPost() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("activities");

  const generateSlug = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    setSlug(generateSlug(val));
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Title and content required");
      return;
    }

    setLoading(true);

    try {
      let imageURL = "";

      /* IMAGE UPLOAD */

      if (imageFile) {
        const filePath = `blog/${Date.now()}-${imageFile.name}`;

        const { error: uploadError } = await supabase.storage
          .from("cms")
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage.from("cms").getPublicUrl(filePath);

        imageURL = data.publicUrl;
      }

      /* INSERT BLOG POST */

      const { error } = await supabase.from("blog_posts").insert([
        {
          title,
          slug,
          excerpt,
          content,
          cover_image: imageURL,
          category,
          published,
        },
      ]);

      if (error) throw error;

      router.push("/admin/blogs");
    } catch (err) {
      console.error(err);
      alert("Failed to publish post");
    } finally {
      setLoading(false);
    }
  };
const blogCategories = [
    { id: "activities", name: "Care Home Activities" },
    { id: "career", name: "Healthcare Career Guides" },
    { id: "life", name: "Life in a Care Home" },
    { id: "cqc", name: "Care Quality Commission" },
    { id: "lda", name: "Learning Disability and Autism" },
    { id: "pbs", name: "Therapeutical approach and PBS" },
  ];

  return (
    <div className="min-h-[calc(100vh-120px)] bg-[#F6FBF8] flex justify-center items-start pt-16 px-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-10 space-y-8 border border-gray-100">
        <div>
          <span className="text-[#2BB673] text-sm font-medium">
            Prosper Haven CMS
          </span>

          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            Create New Blog Article
          </h1>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Title</label>

          <input
            className="w-full border border-gray-200 text-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2BB673]"
            placeholder="Article title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">URL Slug</label>

          <input
            className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-500"
            value={slug}
            disabled
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-200 rounded-lg text-gray-600 px-4 py-3 focus:outline-none focus:border-[#2BB673]"
          >
            {blogCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Short Description
          </label>

          <textarea
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:border-[#2BB673]"
            rows={3}
            placeholder="Brief summary of the article"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Cover Image
          </label>

          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-600 file:bg-[#2BB673] file:text-white file:border-0 file:px-5 file:py-2 file:rounded-md file:cursor-pointer hover:file:bg-[#239a5f]"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Article Content
          </label>

          <textarea
            className="w-full border border-gray-200 rounded-lg px-4 py-4 min-h-[320px] text-gray-600 focus:outline-none focus:border-[#2BB673]"
            placeholder="Write your article..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-5 h-5 accent-[#2BB673]"
          />

          <span className="text-sm text-gray-700">Publish immediately</span>
        </div>

        <div className="flex justify-between items-center pt-6 border-t">
          <span className="text-xs text-gray-400">
            {published ? "Will be visible on website" : "Saved as draft"}
          </span>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#2BB673] text-white px-10 py-3 rounded-lg font-medium hover:bg-[#239a5f] disabled:opacity-60"
          >
            {loading ? "Publishing..." : "Create Article"}
          </button>
        </div>
      </div>
    </div>
  );
}
