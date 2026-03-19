"use client";
import Link from 'next/link';
import ImagePlaceholder from "@/app/component/ImagePlaceholder";

const capabilities = [
  {
    title: "Ladder Logic Programming",
    desc: "Traditional PLC programming for sequential control, motor starters, and relay replacement logic.",
  },
  {
    title: "Structured Text (ST)",
    desc: "High-level, Pascal-like language for complex algorithms, PID loops, and mathematical calculations.",
  },
  {
    title: "Function Block Diagrams",
    desc: "Graphical, reusable blocks ideal for process control and standardised automation libraries.",
  },
  {
    title: "Sequential Function Charts",
    desc: "Step-and-transition programming for multi-stage batch processes and recipe management.",
  },
  {
    title: "Safety PLC Integration",
    desc: "SIL-rated safety system programming for emergency stops, light curtains, and safety PLCs.",
  },
  {
    title: "Communication Setup",
    desc: "PROFIBUS, PROFINET, EtherNet/IP, Modbus TCP — configuring all major industrial networks.",
  },
];

const platforms = [
  {
    brand: "Siemens",
    models: ["S7-1500", "S7-1200", "S7-400", "S7-300"],
    tools:  "TIA Portal, STEP 7",
  },
  {
    brand: "Rockwell / Allen-Bradley",
    models: ["ControlLogix", "CompactLogix", "MicroLogix"],
    tools:  "Studio 5000, RSLogix",
  },
  {
    brand: "Mitsubishi Electric",
    models: ["MELSEC iQ-R", "MELSEC-Q", "FX Series"],
    tools:  "GX Works3, GX Developer",
  },
  {
    brand: "Schneider Electric",
    models: ["Modicon M580", "M340", "Premium"],
    tools:  "Unity Pro, EcoStruxure",
  },
  {
    brand: "Omron",
    models: ["NX-Series", "NJ-Series", "CJ-Series"],
    tools:  "Sysmac Studio",
  },
  {
    brand: "Beckhoff",
    models: ["CX-Series", "EK-Series"],
    tools:  "TwinCAT 3",
  },
  {
    brand: "Renu Electronics",
    models: ["RE Series", "E3 Series", "ViewOn", "WebAccess"],
    tools: "ViewOn Studio, WebAccess",
  },
];

const process = [
  { step: "01", title: "Requirements Analysis",  desc: "We review your process, I/O requirements, safety needs, and existing infrastructure." },
  { step: "02", title: "System Architecture",    desc: "Define hardware selection, network topology, and program structure before any code is written." },
  { step: "03", title: "Programming & Simulation",desc: "Develop and simulate the PLC program in offline mode — catching issues before site deployment." },
  { step: "04", title: "FAT & Commissioning",    desc: "Factory Acceptance Testing with client, then supervised on-site commissioning and startup." },
  { step: "05", title: "Documentation & Training",desc: "Full as-built drawings, functional descriptions, and operator training for your team." },
];

const sectors = [
  "Water & Wastewater",
  "Food & Beverage",
  "Pharmaceutical",
  "Oil & Gas",
  "Automotive Manufacturing",
  "Agriculture & Irrigation",
  "Power Generation",
  "Railway & Transport",
];

export default function PLCPage() {
  return (
    <div className="pt-16 bg-cloud">

      {/* Hero */}
      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-bl from-sky/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="section-label">PLC Development</div>
                <span className="tag-blue">Industrial Control</span>
                <span className="tag-light">Renu Electronics</span>
              </div>
              <h1 className="section-heading-modern mb-6 text-balance">
                Programmable Logic Controller Engineering
              </h1>
              <p className="section-copy-muted text-base sm:text-lg max-w-xl mb-8">
                From single-station control to plant-wide automation — we program, commission, and document PLC systems that run reliably for decades.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/components/contect" className="btn-primary">Request a Quote</Link>
                <Link href="/services" className="btn-secondary">All Services</Link>
              </div>
            </div>
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden ring-1 ring-slate-300/40 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.4)]">
              <ImagePlaceholder
                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=900&q=80"
                alt="Industrial PLC control panel with wiring"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="badge-sky">PLC Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">01</span> Capabilities
          </div>
          <h2 className="section-heading-modern mb-12">What We Program</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => (
              <div key={c.title} className="modern-panel card-hover-lift group card">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-2xl font-light text-sky/35 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink text-base mb-2 group-hover:text-cerulean transition-colors">{c.title}</h3>
                    <p className="text-sm text-ink/55 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported platforms */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label mb-6">
                <span className="section-number">02</span> Platforms
              </div>
              <h2 className="section-heading-modern mb-5">
                Supported PLC Brands
              </h2>
              <p className="section-copy-muted mb-8">
                We are vendor-agnostic — we select or work with whatever platform best fits your requirements and existing infrastructure.
              </p>
              <Link href="/components/contect" className="btn-primary">
                Discuss Your System
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="space-y-3">
              {platforms.map((p) => (
                <div key={p.brand} className="modern-panel card-hover-lift group card flex flex-col sm:flex-row sm:items-center gap-4 hover:border-cerulean/35">
                  <div className="sm:w-44 flex-shrink-0">
                    <p className="font-semibold text-ink text-sm">{p.brand}</p>
                    <p className="text-xs text-cerulean/70 font-mono mt-0.5">{p.tools}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.models.map(m => <span key={m} className="tag-light">{m}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-cloud">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">03</span> Process
          </div>
          <h2 className="section-heading-modern mb-12">How We Deliver</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-cerulean/50 via-sky/30 to-transparent" />
            <div className="space-y-6">
              {process.map((p) => (
                <div key={p.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cerulean text-white flex items-center justify-center font-mono text-sm font-semibold shadow-button relative z-10">
                    {p.step}
                  </div>
                  <div className="modern-panel card-hover-lift card flex-grow">
                    <h3 className="font-semibold text-ink mb-2">{p.title}</h3>
                    <p className="text-sm text-ink/55 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">04</span> Industries
          </div>
          <h2 className="section-heading-modern mb-8">Sectors We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span key={s} className="tag bg-cloud text-ink/70 text-sm px-4 py-2 rounded-xl border border-sky/20">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="container-xl relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="font-display text-4xl font-semibold mb-4">
              Ready to automate your process?
            </h2>
            <p className="text-white/70 text-lg">
              Share your project details and our PLC engineers will design the right solution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/components/contect" className="btn-white whitespace-nowrap">Get a Quote</Link>
            <Link href="/services"           className="btn-outline-white whitespace-nowrap">All Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
