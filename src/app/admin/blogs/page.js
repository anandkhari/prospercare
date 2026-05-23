"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2, ArrowUpRight, Clock, Loader2 } from "lucide-react";

const PAGE_SIZE = 12;

export default function BlogAdmin() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [navigatingId, setNavigatingId] = useState(null);

  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");

  useEffect(() => {

    const fetchPosts = async () => {

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*");

      if (error) {
        console.error(error);
        return;
      }

      setPosts(data);
      setLoading(false);

    };

    fetchPosts();

  }, []);

  const deletePost = async (id) => {

    if (!confirm("Delete this article permanently?")) return;

    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", id);

    if (error) console.error(error);

    setPosts(posts.filter((post) => post.id !== id));

  };


  const categories = [
    { id: "all",        name: "All Categories" },
    { id: "activities", name: "Care Home Activities" },
    { id: "career",     name: "Healthcare Career Guides" },
    { id: "life",       name: "Life in a Care Home" },
    { id: "cqc",        name: "Care Quality Commission" },
    { id: "lda",        name: "Learning Disability and Autism" },
    { id: "pbs",        name: "Therapeutical approach and PBS" },
  ];


  /* FILTER */

  const filteredPosts = posts.filter((post) => {

    if (filter === "published") return post.published === true;
    if (filter === "draft") return post.published === false;

    if (category !== "all" && post.category !== category) return false;

    return true;

  });


  /* SORT */

  const sortedPosts = [...filteredPosts].sort((a, b) => {

    const aDate = new Date(a.created_at || 0);
    const bDate = new Date(b.created_at || 0);

    return sort === "latest" ? bDate - aDate : aDate - bDate;

  });


  /* PAGINATION */

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE;

  const visiblePosts = sortedPosts.slice(start, start + PAGE_SIZE);


  return (
    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex justify-between items-end">

        <div>

          <span className="text-[#2BB673] text-sm font-medium">
            Prosper Haven CMS
          </span>

          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            Blog Articles
          </h1>

          <p className="text-gray-500 text-sm">
            Manage blog content for the website
          </p>

        </div>

        <Link
          href="/admin/blogs/new"
          className="flex items-center gap-2 bg-[#2BB673] text-white px-5 py-3 rounded-lg hover:bg-[#239a5f] transition"
        >
          <Plus size={16} />
          New Article
        </Link>

      </div>


      {/* FILTER BAR */}

      <div className="flex flex-wrap items-center gap-6 bg-white p-4 rounded-xl border shadow-sm">

        <div className="flex items-center gap-3">

          <span className="text-sm text-gray-500">Status</span>

          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setPage(1);
            }}
            className="border px-4 py-2 rounded-lg text-gray-600 text-sm focus:outline-none focus:border-[#2BB673]"
          >
            <option value="all">All</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>

        </div>


        <div className="flex items-center gap-3">

          <span className="text-sm text-gray-500">Category</span>

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="border px-4 py-2 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-[#2BB673]"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

        </div>


        <div className="flex items-center gap-3">

          <span className="text-sm text-gray-500">Sort</span>

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
            className="border px-4 py-2 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-[#2BB673]"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>

        </div>

      </div>


      {/* CONTENT */}

      {loading ? (

        <p className="text-gray-400 text-sm">
          Loading articles...
        </p>

      ) : visiblePosts.length === 0 ? (

        <div className="border border-dashed rounded-xl p-14 text-center text-gray-400 text-sm">
          No matching articles found.
        </div>

      ) : (

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">

          {visiblePosts.map((post) => (

            <Link
              key={post.id}
              href={`/admin/blogs/${post.id}`}
              className="block group"
              onClick={() => setNavigatingId(post.id)}
            >

              <article className={`relative bg-white rounded-xl border border-gray-100 transition-all duration-200 ${navigatingId === post.id ? "opacity-70 scale-[0.98] shadow-inner" : "hover:shadow-lg"}`}>

                {/* DELETE */}

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deletePost(post.id);
                  }}
                  className="absolute top-2 right-2 z-20 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition"
                >
                  <Trash2 size={12} />
                </button>


                {/* IMAGE */}

                <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl bg-gray-200">

                  <img
                    src={post.cover_image || "https://via.placeholder.com/600x400"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />

                  <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 shadow">

                    {post.published ? "Published" : "Draft"}

                  </div>

                </div>


                {/* CONTENT */}

                <div className="p-4 space-y-2">

                  <div className="flex items-center gap-2 text-gray-400 text-xs">

                    <Clock size={12} />

                    {post.created_at
                      ? new Date(post.created_at).toDateString()
                      : "Recent"}

                  </div>


                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-[#2BB673]">

                    {post.title}

                  </h3>


                  <div className="pt-1 flex items-center gap-1 text-[#2BB673] text-xs font-medium">

                    {navigatingId === post.id ? (
                      <>
                        <Loader2 size={13} className="animate-spin" />
                        Opening...
                      </>
                    ) : (
                      <>
                        Edit
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                        />
                      </>
                    )}

                  </div>

                </div>

              </article>

            </Link>

          ))}

        </div>

      )}


      {/* PAGINATION */}

      {totalPages > 1 && (

        <div className="flex justify-center gap-2 pt-8">

          {Array.from({ length: totalPages }).map((_, i) => (

            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
                page === i + 1
                  ? "bg-[#2BB673] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>

          ))}

        </div>

      )}

    </div>
  );

}