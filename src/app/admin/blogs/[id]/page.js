"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import RichTextEditor from "@/components/ui/RichTextEditor";

export default function EditBlogPost() {

  const router = useRouter();
  const params = useParams();
  const postId = useMemo(() => params?.id, [params]);

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [published, setPublished] = useState(false);

  useEffect(() => {

    if (!postId) return;

    const fetchPost = async () => {

      setLoading(true);
      setNotFound(false);

      try {

        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("id", postId)
          .single();

        if (error || !data) {
          setNotFound(true);
          return;
        }

        setTitle(data.title || "");
        setSlug(data.slug || "");
        setExcerpt(data.excerpt || "");
        setContent(data.content || "");
        setCoverImage(data.cover_image || "");
        setPublished(Boolean(data.published));

      } catch (err) {

        console.error("Failed to load post:", err);
        setNotFound(true);

      } finally {

        setLoading(false);

      }

    };

    fetchPost();

  }, [postId]);


  const handleSave = async () => {

    if (!title || !content) {
      alert("Title and content required");
      return;
    }

    setSaving(true);

    try {

      let nextCoverImage = coverImage;

      /* Upload new image if selected */

      if (imageFile) {

        const filePath = `blog/${Date.now()}-${imageFile.name}`;

        const { error: uploadError } = await supabase.storage
          .from("cms")
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("cms")
          .getPublicUrl(filePath);

        nextCoverImage = data.publicUrl;

      }

      /* Update blog post */

      const { error } = await supabase
        .from("blog_posts")
        .update({
          title,
          slug,
          excerpt,
          content,
          cover_image: nextCoverImage,
          published
        })
        .eq("id", postId);

      if (error) throw error;

      router.push("/admin/blogs");

    } catch (err) {

      console.error("Failed to update post:", err);
      alert("Failed to update post");

    } finally {

      setSaving(false);

    }

  };


  if (loading) {

    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center text-gray-500">
        Loading article...
      </div>
    );

  }


  if (notFound) {

    return (
      <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center text-center gap-4">

        <h1 className="text-2xl font-semibold text-gray-800">
          Article not found
        </h1>

        <p className="text-gray-500 text-sm">
          The article you are trying to edit does not exist.
        </p>

        <button
          onClick={() => router.push("/admin/blogs")}
          className="bg-[#2BB673] text-white px-6 py-3 rounded-lg hover:bg-[#239a5f]"
        >
          Back to Articles
        </button>

      </div>
    );

  }


  return (

    <div className="min-h-[calc(100vh-120px)] bg-[#F6FBF8] flex justify-center items-start pt-16 px-6">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-10 space-y-8 border border-gray-100">

        <div>

          <span className="text-[#2BB673] text-sm font-medium">
            Prosper Haven CMS
          </span>

          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            Edit Blog Article
          </h1>

        </div>


        {/* TITLE */}

        <div className="space-y-2">

          <label className="text-sm font-medium text-gray-600">
            Title
          </label>

          <input
            className="w-full border border-gray-200 text-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2BB673]"
            placeholder="Article title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

        </div>


        {/* SLUG */}

        <div className="space-y-2">

          <label className="text-sm font-medium text-gray-600">
            URL Slug
          </label>

          <input
            className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-500"
            value={slug}
            disabled
          />

        </div>


        {/* EXCERPT */}

        <div className="space-y-2">

          <label className="text-sm font-medium text-gray-600">
            Short Description
          </label>

          <textarea
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2BB673]"
            rows={3}
            placeholder="Brief summary of the article"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />

        </div>


        {/* COVER IMAGE */}

        <div className="space-y-2">

          <label className="text-sm font-medium text-gray-600">
            Cover Image
          </label>

          {coverImage && (
            <img
              src={coverImage}
              alt="Cover"
              className="w-full max-h-64 object-cover rounded-lg"
            />
          )}

          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-600 file:bg-[#2BB673] file:text-white file:border-0 file:px-5 file:py-2 file:rounded-md file:cursor-pointer hover:file:bg-[#239a5f]"
            onChange={(e) => setImageFile(e.target.files[0])}
          />

        </div>


        {/* CONTENT */}

        <div className="space-y-2">

          <label className="text-sm font-medium text-gray-600">
            Article Content
          </label>

          <RichTextEditor
            value={content}
            onChange={setContent}
            placeholder="Write your article content..."
          />

        </div>


        {/* PUBLISH */}

        <div className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-5 h-5 accent-[#2BB673]"
          />

          <span className="text-sm text-gray-700">
            Publish article
          </span>

        </div>


        {/* ACTIONS */}

        <div className="flex justify-between items-center pt-6 border-t">

          <span className="text-xs text-gray-400">
            {published ? "Visible on website" : "Saved as draft"}
          </span>

          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-[#2BB673] text-white px-10 py-3 rounded-lg font-medium hover:bg-[#239a5f] disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>

    </div>

  );

}