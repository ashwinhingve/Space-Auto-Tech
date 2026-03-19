"use client";
import Image from "next/image";

export default function ImagePlaceholder({ alt = "Image", variant = "primary", className = "", width, height, src }) {
  const gradients = {
    primary: "from-[#0E7490]/20 via-sky-100/10 to-[#F8FAFC]",
    dark:    "from-[#0F172A]/80 to-[#0F172A]",
    green:   "from-[#166548]/20 via-emerald-100/10 to-[#F8FAFC]",
    neutral: "from-sky-100/20 to-[#F8FAFC]",
  };

  const style = width && height ? { width, height, flexShrink: 0 } : {};

  /* ── Real image mode ── */
  if (src) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={style}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  /* ── Placeholder / fallback ── */
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradients[variant] || gradients.primary} ${className}`}
      style={style}
    >
      {/* Shimmer bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0E7490]/40 via-sky-300/60 to-transparent" />

      {/* Centered icon + label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none select-none">
        <svg
          className={`w-8 h-8 ${variant === "dark" ? "text-white/20" : "text-[#0F172A]/20"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {alt && (
          <span
            className={`font-mono text-[11px] uppercase tracking-widest px-2 text-center line-clamp-2 ${
              variant === "dark" ? "text-white/20" : "text-[#0F172A]/30"
            }`}
          >
            {alt}
          </span>
        )}
      </div>
    </div>
  );
}
