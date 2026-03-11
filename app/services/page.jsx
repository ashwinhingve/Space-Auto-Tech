"use client";
import Link from 'next/link';

const primaryServices = [
  {
    num: "01",
    title: "PLC Development",
    subtitle: "Industrial Control Systems",
    desc: "Custom PLC programming for all major platforms. From single-machine control to full plant-wide automation — reliable, tested, and documented.",
    href: "/services/plc",
    tags: ["Siemens", "Allen-Bradley", "Mitsubishi", "Schneider"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M7 9h2m2 0h2M7 13h1m3 0h3" strokeLinecap="round"/>
        <circle cx="17" cy="9" r="1" fill="currentColor" stroke="none"/>
        <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "IoT Development",
    subtitle: "Connected Industrial Ecosystems",
    desc: "End-to-end IoT solutions — embedded firmware, sensor networks, edge computing, and cloud dashboards. Real-time visibility for every process.",
    href: "/services/iot",
    tags: ["MQTT", "Modbus", "OPC-UA", "Edge AI"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4"/>
        <path d="M3.5 3.5a13 13 0 0 0 0 17M20.5 3.5a13 13 0 0 1 0 17"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "SCADA Solutions",
    subtitle: "Industrial Monitoring & Control",
    desc: "Robust SCADA platforms engineered for uptime, security, and operator clarity. Full historian, alarm management, and remote access capabilities.",
    href: "/services/scada",
    tags: ["WinCC", "Ignition", "Web SCADA", "Historian"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M7 21h10M12 17v4"/>
        <path d="M6 8l3 3 3-3 3 3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const moreServices = [
  { title: "Solar Energy Systems",       href: "/components/servi/2", desc: "Grid-tied, off-grid, and hybrid solar solutions for industrial and commercial facilities." },
  { title: "Irrigation Automation",      href: "/components/servi/1", desc: "Smart water management systems for agriculture — precision drip, sprinkler, and fertigation." },
  { title: "Smart Home Automation",      href: "/components/servi/7", desc: "Intelligent control of lighting, HVAC, security, and appliances for residential and commercial spaces." },
  { title: "Power Sector Solutions",     href: "/components/servi/3", desc: "RTUs and controllers for substation automation, energy metering, and grid monitoring." },
  { title: "Railway Technology",         href: "/components/servi/5", desc: "Signalling, level crossing control, and real-time monitoring for modern rail operations." },
  { title: "Web Development",            href: "/components/servi/6", desc: "Custom web platforms, dashboards, and digital tools for industrial operations teams." },
  { title: "Industrial Automation",      href: "/components/servi/4", desc: "Bespoke automation for manufacturing lines, assembly systems, and process control." },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 bg-cloud">

      {/* Hero */}
      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Services & Solutions</div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink mb-6 text-balance">
              Complete Industrial Automation Portfolio
            </h1>
            <p className="text-xl text-ink/55 leading-relaxed">
              From embedded PLCs on the factory floor to cloud SCADA dashboards in your office — Space Auto Tech engineers the full automation stack.
            </p>
          </div>
        </div>
      </section>

      {/* Primary services */}
      <section className="section">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">01</span> Core Capabilities
          </div>
          <div className="space-y-4">
            {primaryServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group card flex flex-col md:flex-row md:items-center gap-6 hover:border-cerulean/40 hover:shadow-card-hover transition-all duration-300"
              >
                {/* Number */}
                <span className="font-mono text-4xl font-light text-sky/30 flex-shrink-0 hidden md:block w-12">{svc.num}</span>

                {/* Icon */}
                <div className="icon-wrap-primary flex-shrink-0 group-hover:bg-cerulean/20 transition-colors">
                  {svc.icon}
                </div>

                {/* Text */}
                <div className="flex-grow">
                  <p className="font-mono text-[10px] text-ink/35 uppercase tracking-widest mb-1">{svc.subtitle}</p>
                  <h2 className="font-display text-2xl font-semibold text-ink group-hover:text-cerulean transition-colors mb-2">{svc.title}</h2>
                  <p className="text-sm text-ink/55 leading-relaxed max-w-xl">{svc.desc}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 md:min-w-[180px] md:justify-end">
                  {svc.tags.map(t => <span key={t} className="tag-light">{t}</span>)}
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cerulean/8 flex items-center justify-center group-hover:bg-cerulean group-hover:text-white transition-all duration-300 text-cerulean">
                  <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More services */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">02</span> Additional Solutions
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {moreServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group card-outlined flex flex-col gap-3 h-full hover:shadow-card"
              >
                <h3 className="font-semibold text-ink text-sm group-hover:text-cerulean transition-colors">{svc.title}</h3>
                <p className="text-xs text-ink/50 leading-relaxed flex-grow">{svc.desc}</p>
                <span className="flex items-center gap-1 text-xs text-cerulean/60 group-hover:text-cerulean transition-colors">
                  Learn more
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="container-xl relative text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-5">
            Not sure which solution fits?
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto mb-8">
            Our engineers are happy to discuss your process requirements and recommend the right approach.
          </p>
          <Link href="/components/contect" className="btn-white">
            Talk to an Engineer
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
