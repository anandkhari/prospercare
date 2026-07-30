import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";
import PageHero from "@/components/sections/global/PageHero";

export default async function GalleryPage() {
  const { data: images } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <Navbar />

      <PageHero currentPage="Gallery" />

 <section className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {images?.map((item) => (
        <div
          key={item.id}
          className="rounded-xl overflow-hidden shadow-sm"
        >
          <img
            src={item.url}
            alt="Gallery Image"
            className="w-full h-[280px] sm:h-[260px] md:h-[280px] lg:h-[300px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </>
  );
}
