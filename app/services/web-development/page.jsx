"use client";
import Link from "next/link";

const capabilities = [
  { title: "Industrial Dashboards", desc: "Real-time monitoring dashboards with live data, trend charts, and alarm feeds for SCADA and IoT systems." },
  { title: "IoT Web Portals", desc: "Browser-based portals to visualise and control IoT device fleets with user authentication and role management." },
  { title: "ERP Systems", desc: "Custom enterprise resource planning modules for inventory, purchase orders, sales, production, and HR workflows." },
  { title: "E-commerce Platforms", desc: "Full-featured online stores with product catalogs, order management, payment gateways, and vendor panels." },
  { title: "CMS & Web Apps", desc: "Content-managed websites and progressive web apps designed for performance and long-term maintainability." },
  { title: "REST & GraphQL APIs", desc: "Secure, documented backend APIs to integrate your systems with third-party services and mobile applications." },
  { title: "Progressive Web Apps", desc: "Offline-capable PWAs that provide native app-like experiences across all devices without app store deployment." },
  { title: "Database Design", desc: "Schema design, migration planning, and optimisation for relational (PostgreSQL) and NoSQL (MongoDB) databases." },
];

const techStack = [
  { layer: "Frontend",    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { layer: "Backend",     items: ["Node.js", "Express", "REST APIs", "GraphQL"] },
  { layer: "Database",    items: ["MongoDB", "PostgreSQL", "InfluxDB", "Redis"] },
  { layer: "DevOps",      items: ["AWS", "Vercel", "Docker", "GitHub Actions"] },
  { layer: "Protocols",   items: ["MQTT", "WebSocket", "OPC-UA", "HTTPS/TLS"] },
];

export default function WebDevelopmentPage() {
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
                <div className="section-label">Web Development</div>
                <span className="tag-blue">Digital Solutions</span>
              </div>
              <h1 className="section-heading-modern mb-6 text-balance">
                Industrial-Grade Web Development
              </h1>
              <p className="section-copy-muted text-base sm:text-lg max-w-xl">
                Custom web platforms, dashboards, and digital tools engineered for industrial operations teams — built on modern stacks with performance and maintainability as first principles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/components/contect" className="btn-primary whitespace-nowrap">Start Your Project</Link>
              <Link href="/services" className="btn-secondary whitespace-nowrap">All Services</Link>
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
          <h2 className="section-heading-modern mb-12">What We Build</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((c, i) => (
              <div key={c.title} className="modern-panel card-hover-lift card group">
                <div className="w-8 h-8 rounded-lg bg-steel/10 flex items-center justify-center mb-4">
                  <span className="font-mono text-xs text-steel/60">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-semibold text-ink text-sm mb-2 group-hover:text-cerulean transition-colors">{c.title}</h3>
                <p className="text-xs text-ink/50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label mb-6">
                <span className="section-number">02</span> Technology
              </div>
              <h2 className="section-heading-modern mb-5">Technology Stack</h2>
              <p className="section-copy-muted mb-4">
                We use proven, well-supported open-source technologies. No proprietary lock-in — you own your code and can onboard any developer to maintain it.
              </p>
              <p className="section-copy-muted">
                Industrial deployments get additional protocol support (MQTT, OPC-UA, WebSocket) for live data integration.
              </p>
            </div>
            <div className="space-y-3">
              {techStack.map((row) => (
                <div key={row.layer} className="modern-panel card-hover-lift group card flex flex-col sm:flex-row sm:items-start gap-4 hover:border-cerulean/35">
                  <div className="sm:w-28 flex-shrink-0">
                    <p className="font-mono text-[10px] text-sky/55 uppercase tracking-widest">{row.layer}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {row.items.map((item) => <span key={item} className="tag-light">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-cloud">
        <div className="container-xl max-w-3xl">
          <div className="section-label mb-8">
            <span className="section-number">03</span> Process
          </div>
          <h2 className="section-heading-modern mb-10">How We Deliver</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Discovery & Scoping",      desc: "Map your workflows, user roles, and integration requirements before writing a line of code." },
              { step: "02", title: "Design & Prototyping",     desc: "Interactive mockups for your approval — so you see the product before development begins." },
              { step: "03", title: "Agile Development",        desc: "Iterative sprints with frequent demos. You stay informed at every stage." },
              { step: "04", title: "Testing & QA",             desc: "Automated and manual testing across devices, browsers, and load scenarios." },
              { step: "05", title: "Deployment & Handover",    desc: "Deployment to your infrastructure with documentation, training, and 30-day post-launch support." },
            ].map((p) => (
              <div key={p.step} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cerulean text-white flex items-center justify-center font-mono text-xs font-semibold">
                  {p.step}
                </div>
                <div className="card flex-grow">
                  <h4 className="font-semibold text-ink mb-1">{p.title}</h4>
                  <p className="text-sm text-ink/55">{p.desc}</p>
                </div>
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
            <h2 className="font-display text-4xl font-semibold mb-4">Build your industrial web platform</h2>
            <p className="text-white/70 text-lg">
              From concept to deployment — our team handles design, development, and ongoing support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/components/contect" className="btn-white whitespace-nowrap">Get a Quote</Link>
            <Link href="/services" className="btn-outline-white whitespace-nowrap">All Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
