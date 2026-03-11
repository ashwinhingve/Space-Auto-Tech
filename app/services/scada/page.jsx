"use client";
import Link from 'next/link';

const features = [
  { title: "Custom HMI Design",         desc: "Intuitive operator interfaces designed for clarity under pressure. P&IDs, mimic diagrams, and process schematics." },
  { title: "Real-Time Data Acquisition",desc: "Sub-second polling of PLCs, RTUs, and sensors via OPC-UA, Modbus, DNP3, and other protocols." },
  { title: "Alarm Management",          desc: "Structured alarm systems with prioritisation, shelving, suppression, and IEC 62682-compliant design." },
  { title: "Historian & Reporting",     desc: "Long-term data storage with trend charts, production reports, and regulatory compliance logs." },
  { title: "Remote Access",             desc: "Secure VPN-based remote access for operators and engineers — without exposing the control system to the open internet." },
  { title: "Redundancy & Failover",     desc: "Hot-standby SCADA servers, redundant communication paths, and UPS-backed infrastructure for maximum uptime." },
  { title: "User Access Control",       desc: "Role-based access — operators, supervisors, and admins — with full audit trail logging." },
  { title: "Integration & APIs",        desc: "REST APIs, OPC-UA servers, and database connectors for ERP, MES, and business intelligence integration." },
];

const platforms = [
  { name: "Siemens WinCC",    type: "SCADA/HMI",     desc: "Deployed on Windows-based SCADA servers with SIMATIC connectivity." },
  { name: "Inductive Automation Ignition", type: "Web SCADA", desc: "HTML5-based cross-platform SCADA with unlimited client licencing." },
  { name: "GE iFix / CIMPLICITY", type: "Process SCADA", desc: "For complex continuous process and manufacturing environments." },
  { name: "Custom Web SCADA", type: "Bespoke",        desc: "Our own web-based SCADA built on React + Node-RED + InfluxDB + Grafana." },
  { name: "OPC-UA Server",    type: "Protocol",       desc: "Vendor-agnostic connectivity for any SCADA or historian platform." },
];

const sectors = [
  { title: "Water & Wastewater",  items: ["Pump station monitoring", "WWTP process control", "Reservoir level management"] },
  { title: "Energy & Utilities",  items: ["Substation automation", "Power quality monitoring", "Load management"] },
  { title: "Manufacturing",       items: ["Production line monitoring", "OEE dashboards", "Batch process control"] },
  { title: "Agriculture",         items: ["Irrigation network control", "Reservoir management", "Fertigation monitoring"] },
];

const stats = [
  { value: "99.9%",  label: "Uptime Guarantee" },
  { value: "<1s",    label: "Data Refresh Rate" },
  { value: "IEC 62443", label: "Security Standard" },
  { value: "24/7",   label: "Remote Monitoring" },
];

export default function SCADAPage() {
  return (
    <div className="pt-16 bg-cloud">

      {/* Hero */}
      <section className="relative bg-ink overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-to-bl from-cerulean/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-gradient-to-tr from-forest/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest uppercase text-sky/70 bg-sky/10 px-3 py-1.5 rounded-full border border-sky/20">
                  SCADA Solutions
                </div>
                <span className="tag bg-sky/15 text-sky border border-sky/20">Real-Time Control</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mb-6 text-balance leading-[1.08]">
                Supervisory Control & Data Acquisition Systems
              </h1>
              <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                Give your operators the visibility and control they need. Our SCADA platforms are built for industrial-grade reliability, security, and long operational life.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/components/contect" className="btn-white whitespace-nowrap">Request a Demo</Link>
              <Link href="/services"           className="btn-outline-white whitespace-nowrap">All Services</Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-sky mb-1">{s.value}</p>
                <p className="text-sm text-white/45">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">01</span> Features
          </div>
          <h2 className="font-display text-4xl font-semibold text-ink mb-12">What&apos;s Included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-hover group">
                <div className="w-8 h-0.5 bg-cerulean/30 group-hover:bg-cerulean group-hover:w-12 transition-all duration-300 mb-4 rounded-full" />
                <h3 className="font-semibold text-ink text-sm mb-2 group-hover:text-cerulean transition-colors">{f.title}</h3>
                <p className="text-xs text-ink/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section bg-cloud">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label mb-6">
                <span className="section-number">02</span> Platforms
              </div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-5">
                SCADA Platforms We Deploy
              </h2>
              <p className="text-ink/55 leading-relaxed mb-4">
                We evaluate and recommend the right platform based on your process complexity, connectivity, licencing model, and long-term support requirements.
              </p>
              <p className="text-ink/55 leading-relaxed">
                Where standard platforms don&apos;t fit, we build custom web-based SCADA using modern open-source components with full source code ownership for the client.
              </p>
            </div>
            <div className="space-y-3">
              {platforms.map((p) => (
                <div key={p.name} className="card flex items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-ink text-sm">{p.name}</h4>
                      <span className="tag-blue">{p.type}</span>
                    </div>
                    <p className="text-sm text-ink/50">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sector use cases */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">03</span> Applications
          </div>
          <h2 className="font-display text-4xl font-semibold text-ink mb-12">Industry Applications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((sector) => (
              <div key={sector.title} className="card-hover">
                <h3 className="font-semibold text-ink text-sm mb-4 pb-3 border-b border-sky/20">{sector.title}</h3>
                <ul className="space-y-2">
                  {sector.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-ink/55">
                      <div className="w-1 h-1 rounded-full bg-cerulean/50 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security note */}
      <section className="section bg-cloud">
        <div className="container-xl max-w-3xl text-center">
          <div className="section-label mx-auto mb-6">
            <span className="section-number">04</span> Security
          </div>
          <h2 className="font-display text-4xl font-semibold text-ink mb-5">
            Security is Non-Negotiable
          </h2>
          <p className="text-ink/55 leading-relaxed mb-10 text-lg">
            Industrial control systems are critical infrastructure. Our SCADA implementations follow IEC 62443 security standards — network segmentation, encrypted communications, strict access control, and patch management.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["IEC 62443", "Network Segmentation", "Encrypted Comms", "VPN Access Only", "Role-Based Access", "Audit Logging"].map((tag) => (
              <span key={tag} className="tag bg-cerulean/8 text-cerulean border border-cerulean/20 text-sm px-4 py-2 rounded-xl">{tag}</span>
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
              Bring clarity to your operations
            </h2>
            <p className="text-white/70 text-lg">
              Talk to our SCADA engineers about your monitoring and control requirements. We&apos;ll design a system that fits your process and budget.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/components/contect" className="btn-white whitespace-nowrap">Schedule a Call</Link>
            <Link href="/services/iot"       className="btn-outline-white whitespace-nowrap">IoT Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
