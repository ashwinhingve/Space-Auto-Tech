"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const servicesMenu = [
  {
    label: "PLC Development",
    href: "/services/plc",
    desc: "Industrial PLC programming & automation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M7 9h2m2 0h2M7 13h1m3 0h3"/>
        <circle cx="17" cy="9" r="1" fill="currentColor" stroke="none"/>
        <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "IoT Development",
    href: "/services/iot",
    desc: "Embedded systems & sensor integration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4"/>
        <path d="M3.5 3.5a13 13 0 0 0 0 17M20.5 3.5a13 13 0 0 1 0 17"/>
      </svg>
    ),
  },
  {
    label: "SCADA Solutions",
    href: "/services/scada",
    desc: "Industrial monitoring & control systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M7 21h10M12 17v4"/>
        <path d="M6 8l3 3 3-3 3 3"/>
      </svg>
    ),
  },
  {
    label: "All Services",
    href: "/services",
    desc: "View complete service portfolio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 6h16M4 12h16M4 18h10"/>
      </svg>
    ),
  },
];

const mainLinks = [
  { name: "Home",     href: "/" },
  { name: "Profile",  href: "/components/profile" },
  { name: "Contact",  href: "/components/contect" },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [servicesOpen,  setServicesOpen]  = useState(false);
  const [mobileServOpen,setMobileServOpen]= useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-[0_1px_0_0_rgba(92,92,153,0.15),0_4px_24px_rgba(41,41,102,0.07)] border-b border-sky/25"
          : "bg-white/80 backdrop-blur-sm border-b border-sky/10"
      }`}
    >
      <nav className="container-xl">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group" aria-label="Space Auto Tech — Home">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-sky/30 group-hover:ring-cerulean/60 group-hover:shadow-[0_0_12px_rgba(92,92,153,0.3)] transition-all duration-300">
              <Image src="/assets/icon.png" alt="Space Auto Tech" fill className="object-cover" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-semibold text-ink tracking-tight">Space Auto Tech</span>
              <span className="text-[10px] font-mono text-forest/70 tracking-[0.15em] uppercase">Industrial Automation</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {/* Home */}
            <li>
              <Link href="/" className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}>
                Home
              </Link>
            </li>

            {/* Services dropdown */}
            <li ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`nav-link flex items-center gap-1.5 ${
                  pathname.startsWith("/services") ? "nav-link-active" : ""
                }`}
                aria-expanded={servicesOpen}
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"
                >
                  <path d="M2 4l4 4 4-4"/>
                </svg>
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-white/98 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(41,41,102,0.14)] border border-sky/20 p-2 transition-all duration-200 origin-top ${
                  servicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="px-3 py-2 mb-1">
                  <p className="text-[10px] font-mono font-medium text-sky/60 tracking-widest uppercase">Solutions</p>
                </div>
                {servicesMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-cloud transition-colors group/item"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-cerulean/8 flex items-center justify-center text-cerulean group-hover/item:bg-cerulean/15 transition-colors">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink group-hover/item:text-cerulean transition-colors">{item.label}</p>
                      <p className="text-xs text-ink/50 mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </li>

            {mainLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            <Link href="/components/contect" className="hidden lg:inline-flex btn-primary text-sm py-2 px-5">
              Get in Touch
            </Link>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-cloud transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <>
                    <path d="M18 6L6 18" strokeLinecap="round"/>
                    <path d="M6 6L18 18" strokeLinecap="round"/>
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" strokeLinecap="round"/>
                    <path d="M4 12h16" strokeLinecap="round"/>
                    <path d="M4 18h10" strokeLinecap="round"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-sky/15 ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md px-4 py-4 space-y-1">
          <Link href="/" className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive("/") ? "text-cerulean bg-cerulean/8" : "text-ink hover:bg-cloud"}`}>
            Home
          </Link>

          {/* Mobile services accordion */}
          <div>
            <button
              onClick={() => setMobileServOpen(!mobileServOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-ink hover:bg-cloud transition-colors"
            >
              <span>Services</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 4l4 4 4-4"/>
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileServOpen ? "max-h-96" : "max-h-0"}`}>
              <div className="pl-3 mt-1 space-y-0.5">
                {servicesMenu.map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-ink/70 hover:text-cerulean hover:bg-cloud transition-colors">
                    <span className="text-cerulean/70">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive(link.href) ? "text-cerulean bg-cerulean/8" : "text-ink hover:bg-cloud"}`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2 pb-1">
            <Link href="/components/contect" className="btn-primary w-full justify-center py-3">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
