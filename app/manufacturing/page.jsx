"use client";
import Link from "next/link";
import ImagePlaceholder from "@/app/component/ImagePlaceholder";

const divisions = [
  {
    title: "Panel Manufacturing",
    desc: "PLC, Battery, RTU, and Switchgear panels built to IEC standards with full IP rating compliance.",
    href: "/manufacturing/panel",
    tags: ["PLC Panels", "Battery Panels", "RTU Panels", "VCB/ACB"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="18" rx="2"/>
        <path d="M8 7h8M8 11h5M8 15h3"/>
        <circle cx="17" cy="15" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: "PCB Design & Assembly",
    desc: "Schematic to finished board — in-house PCB layout, prototyping, SMT assembly, and quality testing.",
    href: "/manufacturing/pcb",
    tags: ["Schematic Design", "SMT Assembly", "Prototyping", "QA Testing"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="1"/>
        <path d="M9 9h6M9 12h6M9 15h4"/>
        <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none"/>
        <circle cx="17" cy="17" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: "Solar Panel Supply",
    desc: "Monocrystalline, polycrystalline, and thin-film panels with full specifications and warranty.",
    href: "/manufacturing/solar-panels",
    tags: ["Mono", "Poly", "Thin-Film", "BOS Supply"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    ),
  },
  {
    title: "Battery Pack Manufacturing",
    desc: "Li-ion and LiPo battery packs with custom BMS design for IoT, solar storage, and portable devices.",
    href: "/manufacturing/batteries",
    tags: ["Li-ion", "LiPo", "Custom BMS", "IoT Packs"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="7" width="16" height="11" rx="2"/>
        <path d="M7 7V5M17 7V5"/>
        <path d="M9 12h2m2 0h2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "ISO", label: "Quality Standards" },
  { value: "IP65+", label: "Enclosure Ratings" },
  { value: "In-House", label: "Full Production" },
  { value: "IEC", label: "Compliance" },
];

export default function ManufacturingPage() {
  return (
    <div className="pt-16 bg-cloud">

      {/* Hero */}
      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-sky/25 via-cerulean/12 to-transparent blur-3xl pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-5">Manufacturing</div>
              <h1 className="section-heading-modern mb-6 text-balance">
                In-House Manufacturing Capabilities
              </h1>
              <p className="section-copy-muted text-base sm:text-lg mb-8">
                From PCB fabrication to panel assembly to battery pack production — Space Auto Tech controls the full manufacturing chain to ensure quality and lead-time reliability.
              </p>
              <div className="flex gap-3">
                <Link href="/components/contect" className="btn-primary">Request a Quote</Link>
                <Link href="/services" className="btn-secondary">Our Services</Link>
              </div>
            </div>
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden ring-1 ring-slate-300/40 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.4)]">
              <ImagePlaceholder
                src="https://images.unsplash.com/photo-1581092918056-0c4c3aebb8e9?auto=format&fit=crop&w=900&q=80"
                alt="In-house manufacturing facility"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="badge-sky">In-House Production</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-cerulean">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-semibold text-white mb-1">{s.value}</p>
                <p className="text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="section">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">01</span> Divisions
          </div>
          <h2 className="section-heading-modern mb-12">Manufacturing Divisions</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {divisions.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group modern-panel card-hover-lift card flex flex-col gap-5 hover:border-cerulean/40 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cerulean/8 flex items-center justify-center text-cerulean group-hover:bg-cerulean group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink group-hover:text-cerulean transition-colors mb-2">{d.title}</h3>
                    <p className="text-sm text-ink/55 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((t) => <span key={t} className="tag-light">{t}</span>)}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-cerulean/70 group-hover:text-cerulean transition-colors">
                  View division
                  <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="container-xl relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="font-display text-4xl font-semibold mb-4">Custom manufacturing enquiries</h2>
            <p className="text-white/70 text-lg">
              Need a custom panel, PCB, or battery pack? Share your specifications and we&apos;ll provide a detailed quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/components/contect" className="btn-white whitespace-nowrap">Request a Quote</Link>
            <Link href="/services" className="btn-outline-white whitespace-nowrap">Our Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
