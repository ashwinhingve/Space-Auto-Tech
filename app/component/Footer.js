"use client";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "PLC Development",     href: "/services/plc" },
    { label: "IoT Development",     href: "/services/iot" },
    { label: "SCADA Systems",       href: "/services/scada" },
    { label: "Consultancy",         href: "/services/consultancy" },
    { label: "Power Sector",        href: "/services/power" },
    { label: "Web Development",     href: "/services/web-development" },
    { label: "All Services",        href: "/services" },
  ],
  Manufacturing: [
    { label: "Panel Manufacturing", href: "/manufacturing/panel" },
    { label: "PCB Design",          href: "/manufacturing/pcb" },
    { label: "Solar Panels",        href: "/manufacturing/solar-panels" },
    { label: "Battery Packs",       href: "/manufacturing/batteries" },
    { label: "All Manufacturing",   href: "/manufacturing" },
  ],
  Company: [
    { label: "About Us",            href: "/components/profile" },
    { label: "Our Products",        href: "/our-products" },
    { label: "Contact",             href: "/components/contect" },
    { label: "Vendor Registration", href: "/vendor-registration" },
    { label: "WebScada Portal",     href: "http://webscada.spaceautotech.com/", external: true },
    { label: "Inventory",           href: "http://inventory.spaceautotech.com/", external: true },
  ],
  Legal: [
    { label: "Privacy Policy",      href: "/privacy-policy" },
    { label: "Terms of Service",    href: "/terms" },
    { label: "Cookie Policy",       href: "#" },
  ],
};

const developerPartners = [
  {
    label: "IoT Portal",
    href: "https://iot.spaceautotech.com/",
    desc: "Live IoT monitoring & device management platform",
    favicon: "/assets/icon.png",
  },
  {
    label: "Deployment Corner",
    href: "https://www.demploymentcorner.com/",
    desc: "DevOps, cloud deployment & infrastructure solutions",
    favicon: "/assets/favicons/demploymentcorner.png",
  },
  {
    label: "Taptifs",
    href: "https://www.taptifs.com/",
    desc: "Creative digital design & web development studio",
    favicon: "/assets/favicons/taptifs.png",
  },
];

function ExternalIcon() {
  return (
    <svg className="w-2.5 h-2.5 opacity-40 group-hover/partner:opacity-70 transition-opacity flex-shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9L9 3M9 3H5M9 3v4"/>
    </svg>
  );
}

function DevelopedBySection() {
  return (
    <div className="py-5 border-t border-white/8">
      <p className="text-center text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-sky/35 mb-4">
        Developed &amp; Maintained by
      </p>
      <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
        {developerPartners.map((partner) => (
          <a
            key={partner.label}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/partner flex items-start gap-3 px-4 py-3 rounded-xl bg-white/4 border border-white/8 hover:bg-white/7 hover:border-sky/20 transition-all duration-200 sm:flex-1 sm:max-w-[220px]"
          >
            <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-sky/10 border border-sky/15 overflow-hidden group-hover/partner:border-cerulean/25 transition-all duration-200">
              <Image
                src={partner.favicon}
                alt={partner.label}
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <p className="text-sm font-semibold text-white/70 group-hover/partner:text-white transition-colors duration-200 truncate">
                  {partner.label}
                </p>
                <ExternalIcon />
              </div>
              <p className="text-[11px] text-white/35 group-hover/partner:text-white/50 transition-colors duration-200 leading-snug">
                {partner.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* Top bar accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky/40 to-transparent" />

      <div className="container-xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-sky/25 group-hover:ring-sky/50 transition-all">
                <Image
                  src="/assets/icon.png"
                  alt="Space Auto Tech"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold text-white">Space Auto Tech</span>
                <span className="text-[10px] font-mono text-sky/50 tracking-[0.15em] uppercase">Industrial Automation</span>
              </div>
            </Link>

            <p className="text-sm text-white/55 leading-relaxed max-w-xs mb-6">
              Engineering intelligent automation solutions for industrial environments — from PLC systems to IoT networks and SCADA platforms.
            </p>

            {/* Contact snippets */}
            <div className="space-y-2 mb-6">
              <a href="mailto:spaceautomation29@gmail.com" className="flex items-center gap-2.5 text-sm text-white/50 hover:text-sky transition-colors group/link">
                <svg className="w-4 h-4 text-sky/50 group-hover/link:text-sky transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                spaceautomation29@gmail.com
              </a>
              <a href="tel:+919938457420" className="flex items-center gap-2.5 text-sm text-white/50 hover:text-sky transition-colors group/link">
                <svg className="w-4 h-4 text-sky/50 group-hover/link:text-sky transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 9938457420
              </a>
              <p className="flex items-start gap-2.5 text-sm text-white/50">
                <svg className="w-4 h-4 text-sky/50 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Deshmukh Farm House, Saikheda Athner Road, Tehsil, Gaula, Multai, Madhya Pradesh 460057
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/space-auto-tech-a24b933b5/", path: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z", viewBox: "0 0 448 512" },
                { label: "Twitter", href: "https://twitter.com", path: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z", viewBox: "0 0 512 512" },
                { label: "Facebook", href: "https://facebook.com", path: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z", viewBox: "0 0 320 512" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/40 hover:bg-sky/20 hover:text-sky transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" viewBox={s.viewBox} fill="currentColor">
                    <path d={s.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] font-mono font-semibold tracking-[0.18em] uppercase text-sky/50 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/45 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                    >
                      {link.label}
                      {link.external && (
                        <svg className="w-2.5 h-2.5 opacity-50" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M3 9L9 3M9 3H5M9 3v4"/>
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 space-y-0">

          {/* Developer Credits */}
          <DevelopedBySection />

          {/* Copyright + Status */}
          <div className="pt-5 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30 font-mono">
              &copy; {new Date().getFullYear()} Space Auto Tech — Team Space Auto Tech. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-forest/60 animate-pulse-ring" />
              <span className="text-xs font-mono text-white/25 tracking-wide">Systems Operational</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
