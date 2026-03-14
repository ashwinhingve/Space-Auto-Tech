"use client";
import ServiceTabsShell from "@/app/components/servi/ServiceTabsShell";

function Panel({ items }) {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {items.map((item) => (
        <article key={item.title} className="modern-panel card-hover-lift bg-white rounded-xl border border-slate-200/80 p-4 shadow-card">
          <h3 className="text-sm font-semibold text-ink mb-1">{item.title}</h3>
          <p className="text-xs text-ink/55 leading-relaxed">{item.desc}</p>
        </article>
      ))}
    </div>
  );
}

export default function Tabs() {
  return (
    <ServiceTabsShell
      title="Railway Resources"
      tabs={[
        { id: "tab1", label: "Products", content: <Panel items={[{ title: "Signal Units", desc: "Smart signaling and status logic." }, { title: "Track Monitoring", desc: "Continuous condition visibility." }, { title: "Control Panels", desc: "Safe centralized operation." }]} /> },
        { id: "tab2", label: "Services", content: <Panel items={[{ title: "Safety Audit", desc: "Operational risk mapping." }, { title: "Scheduling Logic", desc: "Traffic flow optimization." }, { title: "Maintenance Ops", desc: "Planned and predictive workflows." }]} /> },
        { id: "tab3", label: "About", content: <Panel items={[{ title: "Reliability", desc: "Minimize delays and failures." }, { title: "Passenger Focus", desc: "Safer and smoother travel." }, { title: "Future Ready", desc: "Designed for expansion." }]} /> },
      ]}
    />
  );
}