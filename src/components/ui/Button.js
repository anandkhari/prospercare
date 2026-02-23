import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  onClick,
  href,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-between gap-6 bg-teal-500 hover:bg-teal-600 text-white font-heading text-lg px-8 py-4 rounded-2xl transition-all duration-300";

  const content = (
    <>
      <span>{children}</span>

      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-teal-600">
        <ArrowRight size={20} />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`}>
      {content}
    </button>
  );
}