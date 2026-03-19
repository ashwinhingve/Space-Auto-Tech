"use client";
import Link from "next/link";

const services = [
  {
    title: "Web Consultation",
    desc: "Strategy and architecture for custom web platforms, portals, and digital tools — from initial brief to technical specification.",
    icon: "🌐",
  },
  {
    title: "IoT Consultancy",
    desc: "Evaluate sensor selection, communication protocols, gateway hardware, and cloud platforms for your IoT deployment.",
    icon: "📡",
  },
  {
    title: "SCADA & Web SCADA Consultancy",
    desc: "Assess your monitoring requirements and recommend the right SCADA platform — from local HMI to fully browser-based Web SCADA.",
    icon: "🖥️",
  },
  {
    title: "Irrigation Project Consultancy",
    desc: "System design for precision irrigation projects — pump sizing, pipe layout, automation zoning, and water usage optimisation.",
    icon: "💧",
  },
  {
    title: "Third-Party Inspection (TPI)",
    desc: "Independent inspection and verification of electrical panels, control systems, and automation installations against specifications.",
    icon: "🔍",
  },
];

const process = [
  { step: "01", title: "Brief & Discovery",       desc: "We learn your objectives, constraints, existing systems, and stakeholder expectations." },
  { step: "02", title: "Assessment",               desc: "On-site or remote evaluation of current systems, infrastructure, and processes." },
  { step: "03", title: "Feasibility Report",       desc: "Detailed technical and commercial feasibility document with risk analysis." },
  { step: "04", title: "Recommendations",          desc: "Specific, prioritised recommendations with vendor options, cost ranges, and timelines." },
  { step: "05", title: "Implementation Support",   desc: "Optional ongoing support during procurement, project execution, and commissioning." },
];

export default function ConsultancyPage() {
  return (
    <div className="pt-16 bg-cloud">

      {/* Hero */}
      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-bl from-sky/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="section-label">Consultancy</div>
                <span className="tag-blue">Engineering Services</span>
              </div>
              <h1 className="section-heading-modern mb-6 text-balance">
                Expert Engineering Consultancy
              </h1>
              <p className="section-copy-muted text-base sm:text-lg max-w-xl">
                Get independent, vendor-neutral technical guidance before you invest. Our consultants bring deep field experience across automation, IoT, SCADA, and industrial systems.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/components/contect" className="btn-primary whitespace-nowrap">Book a Consultation</Link>
              <Link href="/services" className="btn-secondary whitespace-nowrap">All Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">01</span> What We Offer
          </div>
          <h2 className="section-heading-modern mb-12">Consultancy Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="modern-panel card-hover-lift group card">
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <h3 className="font-semibold text-ink text-base mb-2 group-hover:text-cerulean transition-colors">{s.title}</h3>
                    <p className="text-sm text-ink/55 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">02</span> How It Works
          </div>
          <h2 className="section-heading-modern mb-12">Consultation Process</h2>
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

      {/* Why us */}
      <section className="section bg-cloud">
        <div className="container-xl max-w-3xl text-center">
          <div className="section-label mx-auto mb-6">
            <span className="section-number">03</span> Why Choose Us
          </div>
          <h2 className="section-heading-modern mb-5">Vendor-Neutral, Experience-Backed</h2>
          <p className="text-ink/55 leading-relaxed mb-10 text-lg">
            We have no financial incentive to recommend any specific product or vendor. Our recommendations are based solely on technical merit, your budget, and long-term operational considerations.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Independent", desc: "No vendor affiliations or commission-based recommendations" },
              { label: "Practical", desc: "Field-tested engineers with real deployment experience" },
              { label: "Documented", desc: "Every engagement produces written, shareable deliverables" },
            ].map((item) => (
              <div key={item.label} className="card text-center">
                <h4 className="font-semibold text-cerulean mb-2">{item.label}</h4>
                <p className="text-sm text-ink/55">{item.desc}</p>
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
            <h2 className="font-display text-4xl font-semibold mb-4">Need expert guidance?</h2>
            <p className="text-white/70 text-lg">
              Tell us about your project and we&apos;ll match you with the right consultant from our team.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/components/contect" className="btn-white whitespace-nowrap">Start Consultation</Link>
            <Link href="/services" className="btn-outline-white whitespace-nowrap">All Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
