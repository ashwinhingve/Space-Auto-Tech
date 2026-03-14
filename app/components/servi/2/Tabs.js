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
      title="Solar Resources"
      tabs={[
        { id: "tab1", label: "Products", content: <Panel items={[{ title: "PV Modules", desc: "High-efficiency panel options." }, { title: "Inverters", desc: "Grid and hybrid-ready conversion." }, { title: "Monitoring Kits", desc: "Track energy performance live." }]} /> },
        { id: "tab2", label: "Services", content: <Panel items={[{ title: "Load Analysis", desc: "Correct sizing for your demand." }, { title: "System Design", desc: "Electrical and structural planning." }, { title: "O&M Support", desc: "Long-term uptime optimization." }]} /> },
        { id: "tab3", label: "About", content: <Panel items={[{ title: "Cleaner Energy", desc: "Lower emissions, lower footprint." }, { title: "Cost Control", desc: "Improve long-term energy economics." }, { title: "Scalable", desc: "Expand by phase or by site." }]} /> },
      ]}
    />
  );
}