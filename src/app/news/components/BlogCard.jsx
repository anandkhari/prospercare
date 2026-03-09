import Link from "next/link";
import { Calendar } from "lucide-react";

export default function BlogCard({ blog }) {

  return (
    <div className="bg-white border border-[#2BB673] flex flex-col">

      <img
        src={blog.cover_image}
        alt={blog.title}
        className="w-full h-[240px] object-cover"
      />

      <div className="p-6 flex flex-col flex-grow">

        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {blog.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Calendar size={14} />
          {new Date(blog.created_at).toLocaleDateString()}
        </div>

        <Link href={`/news/${blog.slug}`}>
          <button className="bg-[#2BB673] text-white px-5 py-2 text-sm hover:bg-[#249e61] transition">
            Read More
          </button>
        </Link>

      </div>

    </div>
  );
}