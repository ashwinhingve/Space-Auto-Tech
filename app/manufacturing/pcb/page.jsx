"use client";
import Link from "next/link";
import ImagePlaceholder from "@/app/component/ImagePlaceholder";

const capabilities = [
  { title: "Schematic Design",   desc: "Full circuit schematic capture using industry-standard EDA tools with design review and BOM generation." },
  { title: "PCB Layout",         desc: "Multi-layer PCB layout with DFM rules, impedance control, and EMC-conscious routing." },
  { title: "Rapid Prototyping",  desc: "Quick-turn prototype boards for validation and iteration before production commitment." },
  { title: "SMT Assembly",       desc: "Surface-mount technology assembly with reflow soldering for compact, high-reliability boards." },
  { title: "Through-Hole",       desc: "Through-hole component placement and wave soldering for power components and connectors." },
  { title: "Testing & QA",       desc: "Functional test jigs, in-circuit testing, and visual inspection before shipment." },
];

const applications = [
  { title: "IoT Sensor Boards",        desc: "Custom sensing nodes with wireless connectivity for industrial and agricultural monitoring." },
  { title: "Motor Driver Boards",      desc: "High-current PWM motor drivers for conveyor, pump, and valve control applications." },
  { title: "Power Management",         desc: "DC-DC converters, battery chargers, and power distribution modules." },
  { title: "Communication Modules",    desc: "RS-485, CAN, LoRa, and GSM/4G communication interface boards." },
  { title: "HMI Interface Boards",     desc: "Display driver boards and keypad interface circuits for industrial HMI panels." },
];

export default function PCBManufacturingPage() {
  return (
    <div className="pt-16 bg-cloud">

      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="section-label">Manufacturing</div>
                <span className="tag-blue">PCB Division</span>
              </div>
              <h1 className="section-heading-modern mb-6 text-balance">PCB Design & Assembly</h1>
              <p className="section-copy-muted text-base sm:text-lg max-w-xl mb-8">
                From schematic to finished board — in-house PCB design, prototyping, and assembly for custom industrial electronics.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/components/contect" className="btn-primary">Discuss Your Design</Link>
                <Link href="/manufacturing" className="btn-secondary">All Manufacturing</Link>
              </div>
            </div>
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden ring-1 ring-slate-300/40 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.4)]">
              <ImagePlaceholder
                src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=900&q=80"
                alt="PCB circuit board design and assembly"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="badge-sky">In-House Assembly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="section-label mb-8"><span className="section-number">01</span> Capabilities</div>
          <h2 className="section-heading-modern mb-12">PCB Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => (
              <div key={c.title} className="modern-panel card-hover-lift group card">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-2xl font-light text-sky/35 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
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

      <section className="section bg-white">
        <div className="container-xl">
          <div className="section-label mb-8"><span className="section-number">02</span> Applications</div>
          <h2 className="section-heading-modern mb-12">What We Build</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((a) => (
              <div key={a.title} className="modern-panel card-hover-lift card border-l-4 border-sky hover:border-cerulean transition-colors">
                <h3 className="font-semibold text-ink mb-3">{a.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="container-xl relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="font-display text-4xl font-semibold mb-4">Custom PCB project?</h2>
            <p className="text-white/70 text-lg">Share your requirements — circuit function, form factor, and quantity — and we&apos;ll scope the project for you.</p>
          </div>
          <Link href="/components/contect" className="btn-white whitespace-nowrap">Start Your Design</Link>
        </div>
      </section>

    </div>
  );
}
