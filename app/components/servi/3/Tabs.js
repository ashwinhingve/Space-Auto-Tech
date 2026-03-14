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
      title="Power Sector Resources"
      tabs={[
        { id: "tab1", label: "Products", content: <Panel items={[{ title: "Control Units", desc: "Reliable energy control hardware." }, { title: "Metering", desc: "Precise usage and flow data." }, { title: "Protection Modules", desc: "Grid-safe operation layers." }]} /> },
        { id: "tab2", label: "Services", content: <Panel items={[{ title: "Grid Assessment", desc: "Analyze current infrastructure." }, { title: "Modernization", desc: "Upgrade legacy control stacks." }, { title: "Monitoring", desc: "Real-time diagnostics and alerts." }]} /> },
        { id: "tab3", label: "About", content: <Panel items={[{ title: "Resilience", desc: "Build stability into operations." }, { title: "Efficiency", desc: "Reduce technical losses." }, { title: "Scalability", desc: "Ready for future demand." }]} /> },
      ]}
    />
  );
}