export default function NewsLoading() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO SKELETON */}
      <div className="h-52 bg-gray-200 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">

        {/* CATEGORY CARDS SKELETON */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="h-36 bg-gray-100 rounded-xl animate-pulse"
              style={{ animationDelay: `${i * 60}ms` }}
            />
          ))}
        </div>

        {/* SECTION HEADER SKELETON */}
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-3">
            <div className="h-9 w-72 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-96 bg-gray-100 rounded animate-pulse" />
          </div>
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-100 animate-pulse" />
            <div className="w-12 h-12 rounded-full bg-gray-100 animate-pulse" />
          </div>
        </div>

        {/* BLOG CARDS SKELETON */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border border-gray-100 rounded" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="h-60 bg-gray-200 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
                <div className="h-4 bg-gray-100 rounded animate-pulse w-1/2" />
                <div className="h-8 bg-gray-100 rounded animate-pulse w-28 mt-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
