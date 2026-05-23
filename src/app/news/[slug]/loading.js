export default function BlogPostLoading() {
  return (
    <>
      {/* NAVBAR PLACEHOLDER */}
      <div className="h-20 bg-white border-b border-gray-100" />

      <article className="max-w-4xl mx-auto py-20 px-6">

        {/* TITLE */}
        <div className="space-y-3 mb-6">
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-full" />
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-2/3" />
        </div>

        {/* DATE */}
        <div className="h-4 bg-gray-100 rounded animate-pulse w-32 mb-10" />

        {/* COVER IMAGE */}
        <div className="w-full h-[400px] bg-gray-200 rounded-xl animate-pulse mb-12" />

        {/* CONTENT LINES */}
        <div className="space-y-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-gray-100 rounded animate-pulse"
              style={{
                width:          i % 4 === 3 ? "60%" : "100%",
                animationDelay: `${i * 40}ms`,
              }}
            />
          ))}
        </div>

      </article>
    </>
  );
}
