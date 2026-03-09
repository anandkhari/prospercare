"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { FiUploadCloud, FiTrash2, FiX, FiPlus } from "react-icons/fi";

export default function AdminDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);
  const [category, setCategory] = useState("activities");
  const [activeCategory, setActiveCategory] = useState("all");

  const fileInputRef = useRef(null);

  /* LOAD GALLERY */

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setGalleryItems(data);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const categories = [
    "all",
    ...Array.from(new Set(galleryItems.map((i) => i.category).filter(Boolean))),
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  /* FILE SELECT */

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const mapped = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
    }));

    setSelectedFiles((prev) => [...prev, ...mapped]);
  };

  const removeSelectedFile = (id) => {
    setSelectedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  /* UPLOAD */

  const handleUpload = async () => {
    if (!selectedFiles.length || isUploading) return;

    setIsUploading(true);

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const { file } = selectedFiles[i];

        const ext = file.name.split(".").pop();

        const safeName = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}.${ext}`;

        const filePath = `gallery/${safeName}`;

        /* Upload to storage */

        const { error: uploadError } = await supabase.storage
          .from("gallery")
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        /* Get public URL */

        const { data } = supabase.storage
          .from("gallery")
          .getPublicUrl(filePath);

        const url = data.publicUrl;

        /* Save to DB */

        await supabase.from("gallery").insert({
          url,
          path: filePath,
          category,
          created_at: new Date(),
        });
      }

      setSelectedFiles([]);
      setIsModalOpen(false);

      fetchGallery();
    } finally {
      setIsUploading(false);
    }
  };

  /* DELETE IMAGE */

  const handleDelete = async (item) => {
    if (!confirm("Delete this image from the gallery?")) return;

    await supabase.storage.from("gallery").remove([item.path]);

    await supabase.from("gallery").delete().eq("id", item.id);

    fetchGallery();
  };

  return (
    <div className="min-h-screen bg-[#F6FBF8] p-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Gallery Management
            </h1>

            <p className="text-gray-500 mt-2">
              Manage images used across the Prosper Haven website
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#2BB673] text-white px-6 py-3 rounded-lg hover:bg-[#239a5f] transition"
          >
            <FiPlus />
            Upload Images
          </button>
        </div>

        {/* FILTERS */}

        <div className="flex gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-[#2BB673] text-white"
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-xl overflow-hidden shadow-sm"
            >
              <img src={item.url} className="w-full h-56 object-cover" />

              <button
                onClick={() => handleDelete(item)}
                className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* UPLOAD MODAL */}

      {/* UPLOAD MODAL */}

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* BACKDROP */}
            <div
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40"
            />

            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white p-10 rounded-2xl w-full max-w-lg shadow-xl"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Upload Images
                </h2>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* DROP ZONE */}

              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 p-10 rounded-xl text-center cursor-pointer hover:border-[#2BB673] transition"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <FiUploadCloud className="text-4xl text-[#2BB673] mx-auto mb-4" />

                <p className="text-gray-600 font-medium">
                  Click to select images
                </p>
              </div>

              {/* IMAGE PREVIEW GRID */}

              {selectedFiles.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {selectedFiles.map((item) => (
                    <div
                      key={item.id}
                      className="relative rounded-lg overflow-hidden"
                    >
                      <img
                        src={item.preview}
                        alt={item.name}
                        className="w-full h-24 object-cover"
                      />

                      <button
                        onClick={() => removeSelectedFile(item.id)}
                        className="absolute top-1 right-1 bg-black/70 text-white p-1 rounded"
                      >
                        <FiX size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* UPLOAD BUTTON */}

              <button
                onClick={handleUpload}
                disabled={selectedFiles.length === 0 || isUploading}
                className="mt-6 w-full bg-[#2BB673] text-white py-3 rounded-lg hover:bg-[#239a5f] disabled:opacity-50"
              >
                {isUploading ? "Uploading..." : "Upload to Gallery"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
