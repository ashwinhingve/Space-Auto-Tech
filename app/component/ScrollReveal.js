// app/component/ScrollReveal.js
"use client";
import { useEffect, useRef } from "react";

/**
 * ScrollReveal — wraps children and adds "revealed" class via IntersectionObserver.
 * Pair with CSS: .reveal { opacity:0; transform:translateY(28px); transition:... }
 *                .reveal.revealed { opacity:1; transform:translateY(0); }
 *
 * @param {string}  className    - Additional CSS classes on the wrapper div
 * @param {number}  threshold    - Intersection threshold (default 0.15)
 * @param {number}  delay        - Optional inline animation-delay in ms
 * @param {string}  as           - HTML tag to use (default "div")
 */
export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.15,
  delay = 0,
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
