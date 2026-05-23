export default function CategoryLoading() {
  return (
    <>
      {/* HERO SKELETON */}
      <div className="h-52 bg-gray-200 animate-pulse" />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          {/* PAGE TITLE */}
          <div className="mb-16">
            <div className="h-10 w-64 bg-gray-200 rounded-lg animate-pulse" />
          </div>

          {/* BLOG GRID SKELETON */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border border-gray-100"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="h-[240px] bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
                  <div className="h-5 bg-gray-100 rounded animate-pulse w-1/2" />
                  <div className="h-4 bg-gray-100 rounded animate-pulse w-1/3 mt-2" />
                  <div className="h-8 bg-gray-100 rounded animate-pulse w-28 mt-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
