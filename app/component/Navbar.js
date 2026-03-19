"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

/* ─── Menu Data ────────────────────────────────────────────────── */

const servicesMenu = [
  {
    label: "PLC Development",
    href: "/services/plc",
    desc: "Industrial PLC programming & automation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M7 9h2m2 0h2M7 13h1m3 0h3" strokeLinecap="round"/>
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
        <path d="M6 8l3 3 3-3 3 3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Consultancy",
    href: "/services/consultancy",
    desc: "Expert engineering advisory services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <path d="M12 12v4M10 14h4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Power Sector",
    href: "/services/power",
    desc: "Substation, HT/LT lines & solar installation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M13 2L4.09 12.26a1 1 0 0 0 .8 1.74H11l-1 8 8.92-10.26a1 1 0 0 0-.8-1.74H13l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Web Development",
    href: "/services/web-development",
    desc: "Industrial web platforms & dashboards",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 4l-4 16" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "All Services",
    href: "/services",
    desc: "View complete service portfolio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const manufacturingMenu = [
  {
    label: "Panel Manufacturing",
    href: "/manufacturing/panel",
    desc: "PLC, Battery, RTU & switchgear panels",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="18" rx="2"/>
        <rect x="6" y="7" width="4" height="4" rx="0.5"/>
        <rect x="14" y="7" width="4" height="4" rx="0.5"/>
        <rect x="6" y="14" width="12" height="3" rx="0.5"/>
      </svg>
    ),
  },
  {
    label: "PCB Design & Assembly",
    href: "/manufacturing/pcb",
    desc: "Schematic to finished board, in-house",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="2"/>
        <path d="M8 2v4M16 2v4M8 18v4M16 18v4M2 8h4M2 16h4M18 8h4M18 16h4" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    label: "Solar Panels",
    href: "/manufacturing/solar-panels",
    desc: "Mono, poly & thin-film supply & install",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Battery Packs",
    href: "/manufacturing/batteries",
    desc: "Custom Li-ion & LiPo packs with BMS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="7" width="18" height="10" rx="2"/>
        <path d="M22 11v2" strokeLinecap="round"/>
        <path d="M7 11h4M11 9v4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "All Manufacturing",
    href: "/manufacturing",
    desc: "View full manufacturing capabilities",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const mainLinks = [
  { name: "Home",     href: "/" },
  { name: "Products", href: "/our-products" },
  { name: "Profile",  href: "/components/profile" },
  { name: "Contact",  href: "/components/contect" },
  { name: "IoT",      href: "https://iot.spaceautotech.com/", external: true },
];

/* ─── Dropdown Panel ────────────────────────────────────────────── */

function DropdownPanel({ open, label, items }) {
  return (
    <div
      role="menu"
      aria-label={label}
      className={`
        absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2
        w-[340px] bg-white dark:bg-[#131E35] rounded-2xl p-2
        border border-slate-200 dark:border-slate-700
        shadow-[0_8px_30px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.08)]
        dark:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]
        transition-all duration-200 ease-out origin-top
        ${open
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }
      `}
    >
      {/* Top accent */}
      <div className="h-0.5 bg-gradient-to-r from-cerulean via-sky-400 to-transparent rounded-full mb-2 mx-1" />

      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          role="menuitem"
          className={`
            flex items-start gap-3 px-3 py-2.5 rounded-xl
            hover:bg-slate-50 dark:hover:bg-slate-800/60 active:bg-slate-100 dark:active:bg-slate-800
            transition-colors duration-150 group/item
            ${i === items.length - 1 ? "mt-1 border-t border-slate-100 dark:border-slate-700/60 pt-2.5" : ""}
          `}
        >
          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cerulean/8 flex items-center justify-center text-cerulean group-hover/item:bg-cerulean group-hover/item:text-white transition-all duration-200 mt-0.5">
            {item.icon}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-cerulean transition-colors leading-tight">
              {item.label}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
          </div>
          <svg
            className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover/item:text-cerulean/60 transition-colors ml-auto flex-shrink-0 mt-1"
            viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      ))}
    </div>
  );
}

/* ─── Navbar ────────────────────────────────────────────────────── */

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [servicesOpen,   setServicesOpen]   = useState(false);
  const [mobileServOpen, setMobileServOpen] = useState(false);
  const [mfgOpen,        setMfgOpen]        = useState(false);
  const [mfgMobileOpen,  setMfgMobileOpen]  = useState(false);

  const pathname      = usePathname();
  const dropdownRef   = useRef(null);
  const mfgRef        = useRef(null);
  const svcTimer      = useRef(null);
  const mfgTimer      = useRef(null);

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close everything on route change */
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMfgOpen(false);
    setMobileServOpen(false);
    setMfgMobileOpen(false);
  }, [pathname]);

  /* click-outside for desktop dropdowns */
  useEffect(() => {
    const handle = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
      if (mfgRef.current     && !mfgRef.current.contains(e.target))      setMfgOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  /* hover helpers with small delay to prevent flicker */
  const openSvc  = useCallback(() => { clearTimeout(svcTimer.current); setServicesOpen(true);  }, []);
  const closeSvc = useCallback(() => { svcTimer.current = setTimeout(() => setServicesOpen(false), 120); }, []);
  const openMfg  = useCallback(() => { clearTimeout(mfgTimer.current); setMfgOpen(true);       }, []);
  const closeMfg = useCallback(() => { mfgTimer.current = setTimeout(() => setMfgOpen(false),  120); }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.08),0_4px_20px_rgba(15,23,42,0.07)] dark:shadow-[0_1px_0_rgba(0,0,0,0.4),0_4px_20px_rgba(0,0,0,0.35)]"
          : "bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-lg border-b border-slate-200/70 dark:border-slate-700/50"
      }`}
    >
      <nav className="container-xl">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group" aria-label="Space Auto Tech — Home">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-2 ring-slate-200 dark:ring-slate-700 group-hover:ring-cerulean/40 shadow-sm group-hover:shadow-md transition-all duration-300">
              <Image src="/assets/icon.png" alt="Space Auto Tech" fill className="object-cover" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-bold text-slate-900 dark:text-slate-100 tracking-tight">Space Auto Tech</span>
              <span className="text-[9.5px] font-mono text-slate-400 dark:text-slate-500 tracking-[0.18em] uppercase mt-0.5">Industrial Automation</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden lg:flex items-center gap-0.5">

            <li>
              <Link href="/" className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}>Home</Link>
            </li>

            {/* Services */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openSvc}
              onMouseLeave={closeSvc}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`nav-link flex items-center gap-1.5 select-none ${
                  pathname.startsWith("/services") ? "nav-link-active" : ""
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
              >
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <DropdownPanel open={servicesOpen} label="Services" items={servicesMenu} />
            </li>

            {/* Manufacturing */}
            <li
              ref={mfgRef}
              className="relative"
              onMouseEnter={openMfg}
              onMouseLeave={closeMfg}
            >
              <button
                onClick={() => setMfgOpen(!mfgOpen)}
                className={`nav-link flex items-center gap-1.5 select-none ${
                  pathname.startsWith("/manufacturing") ? "nav-link-active" : ""
                }`}
                aria-expanded={mfgOpen}
                aria-haspopup="menu"
              >
                Manufacturing
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${mfgOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <DropdownPanel open={mfgOpen} label="Manufacturing" items={manufacturingMenu} />
            </li>

            {/* Rest of main links */}
            {mainLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}
                >
                  {link.name}
                  {link.external && (
                    <svg className="w-2.5 h-2.5 opacity-40 ml-0.5 inline" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9L9 3M9 3H5M9 3v4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/components/contect"
              className="hidden lg:inline-flex btn-primary text-sm py-2 px-5"
            >
              Get in Touch
            </Link>

            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-200 dark:border-slate-700 ${
          mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-[#0F172A] px-4 py-3 space-y-0.5 overflow-y-auto max-h-[80vh]">

          <Link
            href="/"
            className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive("/") ? "text-cerulean bg-cerulean/8" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            Home
          </Link>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setMobileServOpen(!mobileServOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${mobileServOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-250 ${mobileServOpen ? "max-h-[500px]" : "max-h-0"}`}>
              <div className="ml-3 mt-1 pl-3 border-l-2 border-cerulean/20 space-y-0.5 pb-1">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:text-cerulean hover:bg-cerulean/5 transition-colors"
                  >
                    <span className="text-cerulean/60 flex-shrink-0">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Manufacturing */}
          <div>
            <button
              onClick={() => setMfgMobileOpen(!mfgMobileOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <span>Manufacturing</span>
              <svg
                className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${mfgMobileOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-250 ${mfgMobileOpen ? "max-h-[400px]" : "max-h-0"}`}>
              <div className="ml-3 mt-1 pl-3 border-l-2 border-cerulean/20 space-y-0.5 pb-1">
                {manufacturingMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:text-cerulean hover:bg-cerulean/5 transition-colors"
                  >
                    <span className="text-cerulean/60 flex-shrink-0">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Rest of links */}
          {mainLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-cerulean bg-cerulean/8" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              {link.name}
              {link.external && (
                <svg className="w-2.5 h-2.5 opacity-40" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9L9 3M9 3H5M9 3v4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </Link>
          ))}

          <div className="pt-3 pb-2">
            <Link href="/components/contect" className="btn-primary w-full justify-center py-3">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
