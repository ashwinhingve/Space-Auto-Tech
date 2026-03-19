"use client";
import Link from "next/link";
import ImagePlaceholder from "@/app/component/ImagePlaceholder";

const panelTypes = [
  {
    title: "PLC Panels",
    desc: "Custom-built PLC control panels housing Siemens, Rockwell, Mitsubishi, and other brand PLCs. Designed to your I/O list with proper cable management and marshalling.",
    tags: ["Siemens", "Allen-Bradley", "Mitsubishi", "Schneider"],
  },
  {
    title: "Battery Panels",
    desc: "DC battery distribution panels for solar storage systems, UPS installations, and off-grid power setups. Includes MCBs, fuses, and monitoring shunts.",
    tags: ["Solar Storage", "UPS", "48V / 96V DC", "Protection"],
  },
  {
    title: "RTU Panels",
    desc: "Remote Terminal Unit enclosures for SCADA and telemetry systems. Weather-rated for outdoor installation with comms modems and solar charging.",
    tags: ["SCADA", "Telemetry", "Outdoor-Rated", "Solar Powered"],
  },
  {
    title: "VCB & ACB Panels",
    desc: "High-voltage switchgear panels with Vacuum Circuit Breakers and Air Circuit Breakers for industrial power distribution up to 33kV.",
    tags: ["VCB", "ACB", "HT Distribution", "33kV"],
  },
];

const processSteps = [
  { step: "01", title: "Design & SLD",      desc: "Single-line diagram, schematic, and BOM prepared and reviewed with the client." },
  { step: "02", title: "Fabrication",        desc: "Enclosure fabrication and powder coating to specified RAL colour and IP rating." },
  { step: "03", title: "Wiring",             desc: "Professional cable laying, ferrule labelling, and terminal wiring per schematic." },
  { step: "04", title: "Component Fitting",  desc: "DIN rail mounting of PLCs, relays, MCBs, and other components." },
  { step: "05", title: "Testing & FAT",      desc: "Full functional test including insulation resistance and continuity checks before dispatch." },
];

const standards = ["IP54 / IP65 / IP66", "IEC 60439", "IS 8623", "RAL Powder Coating", "Proper Cable Ferrules", "Third-Party Inspection Ready"];

export default function PanelManufacturingPage() {
  return (
    <div className="pt-16 bg-cloud">

      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="section-label">Manufacturing</div>
                <span className="tag-blue">Panel Division</span>
              </div>
              <h1 className="section-heading-modern mb-6 text-balance">Panel Manufacturing</h1>
              <p className="section-copy-muted text-base sm:text-lg max-w-xl mb-8">
                Custom electrical and control panels built in-house — from initial design to final Factory Acceptance Testing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/components/contect" className="btn-primary">Request a Quote</Link>
                <Link href="/manufacturing" className="btn-secondary">All Manufacturing</Link>
              </div>
            </div>
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden ring-1 ring-slate-300/40 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.4)]">
              <ImagePlaceholder
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdffd8?auto=format&fit=crop&w=900&q=80"
                alt="Electrical control panel manufacturing"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="badge-sky">IEC Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="section-label mb-8"><span className="section-number">01</span> Panel Types</div>
          <h2 className="section-heading-modern mb-12">Panels We Build</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {panelTypes.map((p) => (
              <div key={p.title} className="modern-panel card-hover-lift group card">
                <div className="w-8 h-0.5 bg-cerulean/30 group-hover:bg-cerulean group-hover:w-12 transition-all duration-300 mb-4 rounded-full" />
                <h3 className="font-semibold text-ink text-lg mb-3 group-hover:text-cerulean transition-colors">{p.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">{p.tags.map((t) => <span key={t} className="tag-light">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-xl">
          <div className="section-label mb-8"><span className="section-number">02</span> Process</div>
          <h2 className="section-heading-modern mb-12">Manufacturing Process</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-cerulean/50 via-sky/30 to-transparent" />
            <div className="space-y-6">
              {processSteps.map((p) => (
                <div key={p.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cerulean text-white flex items-center justify-center font-mono text-sm font-semibold shadow-button relative z-10">{p.step}</div>
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

      <section className="section bg-cloud">
        <div className="container-xl max-w-3xl text-center">
          <div className="section-label mx-auto mb-6"><span className="section-number">03</span> Standards</div>
          <h2 className="section-heading-modern mb-5">Quality & Compliance</h2>
          <p className="text-ink/55 leading-relaxed mb-10 text-lg">All panels are built to IEC standards with proper IP ratings, cable management, and full functional testing before leaving the facility.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {standards.map((s) => <span key={s} className="tag bg-cerulean/8 text-cerulean border border-cerulean/20 text-sm px-4 py-2 rounded-xl">{s}</span>)}
          </div>
        </div>
      </section>

      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="container-xl relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="font-display text-4xl font-semibold mb-4">Need a custom panel?</h2>
            <p className="text-white/70 text-lg">Send us your I/O list or SLD and we&apos;ll provide a quotation within 48 hours.</p>
          </div>
          <Link href="/components/contect" className="btn-white whitespace-nowrap">Get a Quote</Link>
        </div>
      </section>

    </div>
  );
}
