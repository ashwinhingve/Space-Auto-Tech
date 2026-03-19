"use client";
import Link from "next/link";

const offerings = [
  {
    title: "Substation Design & Installation",
    desc: "End-to-end design and installation of HT/LT substations — from single-line diagrams to commissioning of transformers, VCBs, and protection relays.",
    tags: ["33kV/11kV", "Protection Relays", "VCB Panels", "Earthing Systems"],
  },
  {
    title: "HT & LT Line Laying",
    desc: "Overhead and underground high-tension and low-tension cable laying for industrial and utility applications, including street lighting infrastructure.",
    tags: ["Overhead Lines", "Underground Cables", "ACSR Conductors", "Cable Jointing"],
  },
  {
    title: "Solar Panel Installation",
    desc: "On-grid, off-grid, and hybrid solar PV installations for industrial, commercial, and agricultural consumers. Complete with net-metering and DISCOM approval support.",
    tags: ["On-Grid", "Off-Grid", "Hybrid", "Net Metering", "DISCOM Approval"],
  },
];

const standards = [
  "CEA Regulations 2010",
  "IS 3043 (Earthing)",
  "IS 732 (Wiring)",
  "IEC 60364",
  "BIS Compliance",
  "DISCOM Guidelines",
];

export default function PowerPage() {
  return (
    <div className="pt-16 bg-cloud">

      {/* Hero — dark */}
      <section className="relative bg-ink overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-to-bl from-cerulean/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-gradient-to-tr from-forest/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest uppercase text-sky/70 bg-sky/10 px-3 py-1.5 rounded-full border border-sky/20">
                  Power Sector
                </div>
                <span className="tag bg-sky/15 text-sky border border-sky/20">Infrastructure</span>
              </div>
              <h1 className="section-heading-modern text-white mb-6 text-balance leading-[1.08]">
                Power Sector Solutions
              </h1>
              <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-xl">
                Complete electrical infrastructure services — from high-voltage substation design to solar installation and HT/LT line laying. Executed to national and international standards.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/components/contect" className="btn-white whitespace-nowrap">Get a Quote</Link>
              <Link href="/services" className="btn-outline-white whitespace-nowrap">All Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">01</span> Services
          </div>
          <h2 className="section-heading-modern mb-12">Our Power Sector Services</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="modern-panel card-hover-lift group card flex flex-col">
                <div className="w-8 h-0.5 bg-cerulean/30 group-hover:bg-cerulean group-hover:w-12 transition-all duration-300 mb-4 rounded-full" />
                <h3 className="font-semibold text-ink text-lg mb-3 group-hover:text-cerulean transition-colors">{o.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed flex-grow mb-4">{o.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {o.tags.map((t) => <span key={t} className="tag-light">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section bg-white">
        <div className="container-xl max-w-3xl text-center">
          <div className="section-label mx-auto mb-6">
            <span className="section-number">02</span> Standards
          </div>
          <h2 className="section-heading-modern mb-5">Compliance & Standards</h2>
          <p className="text-ink/55 leading-relaxed mb-10 text-lg">
            All electrical works are executed in compliance with Central Electricity Authority regulations, Bureau of Indian Standards, and applicable IEC standards — ensuring safety, insurability, and regulatory approval.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {standards.map((s) => (
              <span key={s} className="tag bg-cerulean/8 text-cerulean border border-cerulean/20 text-sm px-4 py-2 rounded-xl">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-cloud">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "33kV", label: "Max HT Voltage" },
              { value: "100+", label: "Installations" },
              { value: "CEA", label: "Regulation Compliant" },
              { value: "24/7", label: "Emergency Support" },
            ].map((s) => (
              <div key={s.label} className="card text-center">
                <p className="font-display text-4xl font-semibold text-cerulean mb-2">{s.value}</p>
                <p className="text-sm text-ink/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="container-xl relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="font-display text-4xl font-semibold mb-4">Power your infrastructure</h2>
            <p className="text-white/70 text-lg">
              From substations to solar farms — our electrical engineers handle the full scope.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/components/contect" className="btn-white whitespace-nowrap">Request a Quote</Link>
            <Link href="/services" className="btn-outline-white whitespace-nowrap">All Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
