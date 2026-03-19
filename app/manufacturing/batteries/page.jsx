"use client";
import Link from "next/link";
import ImagePlaceholder from "@/app/component/ImagePlaceholder";

const packTypes = [
  {
    title: "Li-ion Packs",
    subtitle: "18650 / 21700 Cylindrical Cells",
    desc: "High-capacity lithium-ion packs using quality cylindrical cells. Suitable for solar storage, industrial UPS, and heavy-duty IoT gateway applications.",
    specs: [
      { label: "Cell Format",    value: "18650 / 21700" },
      { label: "Voltage Range",  value: "12V – 96V" },
      { label: "Capacity",       value: "10 – 200 Ah" },
      { label: "Chemistry",      value: "LiFePO4 / NMC" },
    ],
    tags: ["Solar Storage", "Industrial UPS", "EV Packs", "Long Cycle Life"],
  },
  {
    title: "LiPo Packs",
    subtitle: "Pouch Cell — Lightweight & Flexible",
    desc: "Lightweight lithium polymer packs for weight-critical applications. Commonly used in drones, portable IoT devices, and wearable industrial sensors.",
    specs: [
      { label: "Form Factor",    value: "Slim Pouch" },
      { label: "Voltage Range",  value: "3.7V – 22.2V" },
      { label: "Capacity",       value: "500 mAh – 30 Ah" },
      { label: "Chemistry",      value: "LiPo" },
    ],
    tags: ["Drones", "Portable IoT", "Wearables", "Lightweight"],
  },
];

const bmsFeatures = [
  "Over-voltage and under-voltage protection",
  "Over-current and short-circuit protection",
  "Cell balancing (passive and active)",
  "Temperature monitoring and cutoff",
  "State-of-charge (SOC) estimation",
  "CAN / UART / RS-485 communication interface",
  "IP-rated enclosure options",
];

const applications = [
  { title: "Solar Energy Storage",      desc: "Off-grid and hybrid solar storage banks for residential, commercial, and agricultural systems." },
  { title: "Industrial UPS",            desc: "Uninterruptible power for critical automation equipment, SCADA servers, and communication hardware." },
  { title: "IoT Gateway Backup",        desc: "Compact battery packs ensuring continuous operation of remote IoT gateways during grid outages." },
  { title: "Drone & UAV Power",         desc: "High-discharge LiPo packs for agricultural drones, inspection UAVs, and delivery systems." },
];

export default function BatteriesPage() {
  return (
    <div className="pt-16 bg-cloud">

      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="section-label">Manufacturing</div>
                <span className="tag-blue">Battery Division</span>
              </div>
              <h1 className="section-heading-modern mb-6 text-balance">Battery Pack Manufacturing</h1>
              <p className="section-copy-muted text-base sm:text-lg max-w-xl mb-8">
                Custom Li-ion and LiPo battery packs with integrated BMS — designed and assembled in-house for industrial, solar, and IoT applications.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/components/contect" className="btn-primary">Enquire Now</Link>
                <Link href="/manufacturing" className="btn-secondary">All Manufacturing</Link>
              </div>
            </div>
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden ring-1 ring-slate-300/40 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.4)]">
              <ImagePlaceholder
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=80"
                alt="Custom battery pack manufacturing"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="badge-sky">Custom BMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="section-label mb-8"><span className="section-number">01</span> Pack Types</div>
          <h2 className="section-heading-modern mb-12">Battery Pack Types</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {packTypes.map((p) => (
              <div key={p.title} className="modern-panel card-hover-lift group card flex flex-col gap-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink group-hover:text-cerulean transition-colors mb-1">{p.title}</h3>
                  <p className="text-xs font-mono text-cerulean/70 uppercase tracking-widest">{p.subtitle}</p>
                </div>
                <p className="text-sm text-ink/55 leading-relaxed">{p.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {p.specs.map((spec) => (
                    <div key={spec.label} className="bg-cloud rounded-xl p-3">
                      <p className="text-[10px] font-mono text-ink/40 uppercase tracking-widest mb-1">{spec.label}</p>
                      <p className="text-sm font-semibold text-ink">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">{p.tags.map((t) => <span key={t} className="tag-light">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-xl grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-label mb-6"><span className="section-number">02</span> BMS</div>
            <h2 className="section-heading-modern mb-5">Battery Management System</h2>
            <p className="section-copy-muted mb-6">Every pack we manufacture includes a purpose-designed BMS for safe, reliable operation across its full lifecycle.</p>
            <ul className="space-y-3">
              {bmsFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-cerulean/60 mt-1.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="section-label mb-6"><span className="section-number">03</span> Applications</div>
            <h2 className="section-heading-modern mb-5">Where We Deploy</h2>
            <div className="space-y-4">
              {applications.map((a) => (
                <div key={a.title} className="modern-panel card-hover-lift card border-l-4 border-sky hover:border-cerulean transition-colors">
                  <h4 className="font-semibold text-ink mb-2">{a.title}</h4>
                  <p className="text-sm text-ink/55">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="container-xl relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="font-display text-4xl font-semibold mb-4">Custom battery pack?</h2>
            <p className="text-white/70 text-lg">Share your voltage, capacity, and form factor requirements and we&apos;ll design a pack that fits.</p>
          </div>
          <Link href="/components/contect" className="btn-white whitespace-nowrap">Request a Design</Link>
        </div>
      </section>

    </div>
  );
}
