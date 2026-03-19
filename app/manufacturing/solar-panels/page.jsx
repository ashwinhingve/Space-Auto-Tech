"use client";
import Link from "next/link";
import ImagePlaceholder from "@/app/component/ImagePlaceholder";

const panelTypes = [
  {
    title: "Monocrystalline",
    badge: "Highest Efficiency",
    badgeColor: "bg-cerulean/10 text-cerulean border border-cerulean/20",
    specs: [
      { label: "Efficiency",     value: "18–22%" },
      { label: "Power Range",    value: "300–600 W" },
      { label: "Lifespan",       value: "25+ years" },
      { label: "Performance",    value: "Best in low-light" },
    ],
    desc: "Single-crystal silicon cells offer the highest conversion efficiency and perform best in limited roof space. Ideal for residential rooftops and commercial installations.",
  },
  {
    title: "Polycrystalline",
    badge: "Cost Effective",
    badgeColor: "bg-forest/10 text-forest border border-forest/20",
    specs: [
      { label: "Efficiency",     value: "15–18%" },
      { label: "Power Range",    value: "250–400 W" },
      { label: "Lifespan",       value: "25 years" },
      { label: "Performance",    value: "Good in open areas" },
    ],
    desc: "Multi-crystal silicon cells provide a cost-effective balance of efficiency and price. Suitable for large ground-mounted arrays and agricultural installations.",
  },
  {
    title: "Thin-Film",
    badge: "Flexible Use",
    badgeColor: "bg-steel/10 text-steel border border-steel/20",
    specs: [
      { label: "Efficiency",     value: "10–13%" },
      { label: "Power Range",    value: "100–300 W" },
      { label: "Lifespan",       value: "20+ years" },
      { label: "Performance",    value: "High-temp tolerant" },
    ],
    desc: "Thin-film technology excels in high-temperature environments and partial shading conditions. Used in BIPV and specialised commercial applications.",
  },
];

export default function SolarPanelsPage() {
  return (
    <div className="pt-16 bg-cloud">

      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="section-label">Manufacturing</div>
                <span className="tag-blue">Solar Division</span>
              </div>
              <h1 className="section-heading-modern mb-6 text-balance">Solar Panel Supply</h1>
              <p className="section-copy-muted text-base sm:text-lg max-w-xl mb-8">
                We supply and install monocrystalline, polycrystalline, and thin-film solar panels — with full system integration support including inverters, mounting, and monitoring.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/components/feedback" className="btn-primary">Get Requirements Form</Link>
                <Link href="/manufacturing" className="btn-secondary">All Manufacturing</Link>
              </div>
            </div>
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden ring-1 ring-slate-300/40 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.4)]">
              <ImagePlaceholder
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80"
                alt="Solar panel installation and supply"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="badge-sky">25-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="section-label mb-8"><span className="section-number">01</span> Panel Types</div>
          <h2 className="section-heading-modern mb-12">Solar Panel Technologies</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {panelTypes.map((p) => (
              <div key={p.title} className="modern-panel card-hover-lift group card flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold text-ink group-hover:text-cerulean transition-colors">{p.title}</h3>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                </div>
                <p className="text-sm text-ink/55 leading-relaxed mb-5 flex-grow">{p.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {p.specs.map((spec) => (
                    <div key={spec.label} className="bg-cloud rounded-xl p-3">
                      <p className="text-[10px] font-mono text-ink/40 uppercase tracking-widest mb-1">{spec.label}</p>
                      <p className="text-sm font-semibold text-ink">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-xl max-w-3xl text-center">
          <div className="section-label mx-auto mb-6"><span className="section-number">02</span> System Integration</div>
          <h2 className="section-heading-modern mb-5">Complete System Supply</h2>
          <p className="text-ink/55 leading-relaxed mb-10 text-lg">
            Beyond panels, we supply and install the complete balance-of-system (BOS) — inverters, mounting structures, combiner boxes, cables, and remote monitoring systems.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "On-Grid",  desc: "Net-metered systems with grid export and DISCOM approval support" },
              { label: "Off-Grid", desc: "Battery-backed standalone systems for remote and agricultural sites" },
              { label: "Hybrid",   desc: "Combined grid-tied and battery systems for maximum self-sufficiency" },
            ].map((item) => (
              <div key={item.label} className="card text-center">
                <h4 className="font-semibold text-cerulean mb-2">{item.label}</h4>
                <p className="text-sm text-ink/55">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="container-xl relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="font-display text-4xl font-semibold mb-4">Interested in solar?</h2>
            <p className="text-white/70 text-lg">Fill in our solar requirements form and we&apos;ll design the right system for your energy needs.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/components/feedback" className="btn-white whitespace-nowrap">Requirements Form</Link>
            <Link href="/components/contect" className="btn-outline-white whitespace-nowrap">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
