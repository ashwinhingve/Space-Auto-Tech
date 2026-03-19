"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9 rounded-xl" aria-hidden />;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 flex items-center justify-center rounded-xl
        hover:bg-ink/8 dark:hover:bg-white/10 border border-transparent
        hover:border-sky/30 text-ink/60 dark:text-sky/70
        hover:text-ink dark:hover:text-sky transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cerulean focus-visible:ring-offset-2"
    >
      {/* Sun — shown in dark mode */}
      <svg
        className={`absolute w-[18px] h-[18px] transition-all duration-300
          ${isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-90"}`}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
      {/* Moon — shown in light mode */}
      <svg
        className={`absolute w-[18px] h-[18px] transition-all duration-300
          ${!isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}`}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>
  );
}
