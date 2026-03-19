"use client";
import Link from 'next/link';
import ImagePlaceholder from "@/app/component/ImagePlaceholder";

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
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60"
            alt="SCADA control room monitoring"
            className="w-full h-full opacity-20"
          />
        </div>
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
              <h1 className="section-heading-modern text-white mb-6 text-balance leading-[1.08]">
                Supervisory Control & Data Acquisition Systems
              </h1>
              <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-xl">
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
          <h2 className="section-heading-modern mb-12">What&apos;s Included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="modern-panel card-hover-lift card group">
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
          <div className="section-label mb-8">
            <span className="section-number">02</span> Platforms
          </div>
          <h2 className="section-heading-modern mb-4">SCADA Platforms We Deploy</h2>
          <p className="section-copy-muted mb-10 max-w-2xl">
            We categorise our SCADA deployments into three types — matching the platform to your operational requirements and connectivity constraints.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">

            {/* HMI SCADA */}
            <div className="card space-y-4">
              <div>
                <span className="tag-blue mb-3 inline-block">HMI SCADA</span>
                <h3 className="font-semibold text-ink mb-1">Operator Workstations</h3>
                <p className="text-sm text-ink/50 leading-relaxed">Windows-based systems for local operator control rooms with direct hardware connectivity.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-sky/15">
                {[
                  { name: "Siemens WinCC",             desc: "SIMATIC-connected SCADA for Siemens PLC environments" },
                  { name: "GE iFix / CIMPLICITY",      desc: "For complex continuous process environments" },
                  { name: "Inductive Automation Ignition", desc: "Hybrid local+web SCADA with unlimited clients" },
                ].map((p) => (
                  <div key={p.name} className="rounded-xl bg-cloud p-3">
                    <p className="font-medium text-sm text-ink">{p.name}</p>
                    <p className="text-xs text-ink/45 mt-0.5">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local SCADA */}
            <div className="card space-y-4">
              <div>
                <span className="inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-full bg-forest/10 text-forest border border-forest/20 mb-3">Local SCADA</span>
                <h3 className="font-semibold text-ink mb-1">On-Premises Server</h3>
                <p className="text-sm text-ink/50 leading-relaxed">LAN-accessible SCADA server for facilities needing air-gapped or private-network operation.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-sky/15">
                {[
                  { name: "OPC-UA Server",          desc: "Vendor-agnostic connectivity for any SCADA or historian platform" },
                  { name: "Ignition (On-Prem)",     desc: "Self-hosted Ignition gateway with local historian and client access" },
                  { name: "Custom Node-RED Stack",  desc: "Open-source MQTT + Node-RED + InfluxDB on your own hardware" },
                ].map((p) => (
                  <div key={p.name} className="rounded-xl bg-cloud p-3">
                    <p className="font-medium text-sm text-ink">{p.name}</p>
                    <p className="text-xs text-ink/45 mt-0.5">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Web SCADA */}
            <div className="card space-y-4 border-cerulean/25 bg-cerulean/3">
              <div>
                <span className="inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-full bg-cerulean/10 text-cerulean border border-cerulean/20 mb-3">Web SCADA</span>
                <h3 className="font-semibold text-ink mb-1">Browser-Based, Anywhere</h3>
                <p className="text-sm text-ink/50 leading-relaxed">Fully browser-accessible monitoring and control — no client software, works on any device worldwide.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-sky/15">
                {[
                  { name: "React + Node-RED",      desc: "Our in-house Web SCADA — custom UI with real-time data flows" },
                  { name: "InfluxDB + Grafana",    desc: "Time-series historian with powerful analytics dashboards" },
                  { name: "Ignition Perspective",  desc: "HTML5 Web SCADA with mobile support and responsive layouts" },
                ].map((p) => (
                  <div key={p.name} className="rounded-xl bg-white p-3">
                    <p className="font-medium text-sm text-ink">{p.name}</p>
                    <p className="text-xs text-ink/45 mt-0.5">{p.desc}</p>
                  </div>
                ))}
              </div>
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
          <h2 className="section-heading-modern mb-12">Industry Applications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((sector) => (
              <div key={sector.title} className="modern-panel card-hover-lift card-hover">
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
          <h2 className="section-heading-modern mb-5">
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
