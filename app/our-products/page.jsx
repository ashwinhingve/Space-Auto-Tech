"use client";
import Link from "next/link";

const products = [
  {
    title: "IoT Web SCADA Platform",
    subtitle: "Browser-Based Industrial Monitoring",
    desc: "A fully browser-based SCADA and monitoring platform built on React, Node-RED, InfluxDB, and Grafana. Monitor any sensor or PLC in real time from anywhere — no client software required.",
    features: [
      "Live dashboards with <1s data refresh",
      "Node-RED flow-based data processing",
      "InfluxDB time-series historian",
      "Grafana-powered reporting and analytics",
      "Role-based user access control",
      "Alert & notification engine (email, SMS)",
      "REST API for third-party integration",
      "Mobile-responsive interface",
    ],
    cta: "Request Demo",
    ctaHref: "/components/contect",
    color: "cerulean",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M7 21h10M12 17v4"/>
        <path d="M6 8l3 3 3-3 3 3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "ERP System",
    subtitle: "Enterprise Resource Planning",
    desc: "A modular, web-based ERP system designed for manufacturing and trading businesses. Manage your full operation from procurement to production to dispatch — in a single platform.",
    features: [
      "Inventory management with stock alerts",
      "Purchase order and vendor management",
      "Sales order and invoice generation",
      "Production planning and BOMs",
      "HR and payroll module",
      "Financial reports and ledgers",
      "Multi-location warehouse support",
      "Custom report builder",
    ],
    cta: "Learn More",
    ctaHref: "/components/contect",
    color: "forest",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Space E-commerce Platform",
    subtitle: "Online Sales & Vendor Management",
    desc: "A fully featured B2B/B2C e-commerce platform with integrated vendor management panel. Built specifically for industrial and agricultural product distribution.",
    features: [
      "Product catalog with variants and pricing",
      "Shopping cart and checkout flow",
      "Multiple payment gateway support",
      "Vendor panel for multi-seller management",
      "Order tracking and fulfilment",
      "Customer account and order history",
      "Admin dashboard with analytics",
      "SEO-optimised product pages",
    ],
    cta: "Get Access",
    ctaHref: "/components/contect",
    color: "cerulean",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
];

const colorMap = {
  cerulean: { bg: "bg-cerulean/8", text: "text-cerulean", border: "border-cerulean/20", btn: "btn-primary" },
  forest: { bg: "bg-forest/8", text: "text-forest", border: "border-forest/20", btn: "btn-primary" },
};

export default function OurProductsPage() {
  return (
    <div className="pt-16 bg-cloud">

      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-sky/25 via-cerulean/12 to-transparent blur-3xl pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Our Products</div>
            <h1 className="section-heading-modern mb-6 text-balance">
              Proprietary Software Products
            </h1>
            <p className="section-copy-muted text-base sm:text-lg">
              Space Auto Tech develops and maintains its own software platforms — built on proven open-source foundations and tailored for industrial and commercial operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl space-y-10">
          {products.map((product) => {
            const c = colorMap[product.color] || colorMap.cerulean;
            return (
              <div key={product.title} className="modern-panel card-hover-lift card overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center ${c.text} mb-5`}>
                      {product.icon}
                    </div>
                    <p className="font-mono text-[10px] text-ink/40 uppercase tracking-widest mb-2">{product.subtitle}</p>
                    <h2 className="font-display text-3xl font-semibold text-ink mb-4">{product.title}</h2>
                    <p className="text-ink/55 leading-relaxed mb-6">{product.desc}</p>
                    <Link href={product.ctaHref} className="btn-primary">
                      {product.cta}
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-ink/40 uppercase tracking-widest mb-4">Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-ink/65">
                          <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${c.bg} ${c.text}`}>
                            <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="container-xl relative text-center">
          <h2 className="font-display text-4xl font-semibold text-white mb-5">Interested in a demo?</h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto mb-8">
            We can walk you through any of our platforms in a live session — tailored to your specific use case.
          </p>
          <Link href="/components/contect" className="btn-white">
            Schedule a Demo
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
