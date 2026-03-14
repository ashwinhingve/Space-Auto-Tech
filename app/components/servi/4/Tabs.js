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
      title="Industrial Resources"
      tabs={[
        { id: "tab1", label: "Products", content: <Panel items={[{ title: "Controllers", desc: "Industrial-grade automation hardware." }, { title: "Sensors", desc: "High-accuracy process telemetry." }, { title: "Actuators", desc: "Reliable physical control." }]} /> },
        { id: "tab2", label: "Services", content: <Panel items={[{ title: "Process Study", desc: "Understand operational bottlenecks." }, { title: "System Integration", desc: "Unified control architecture." }, { title: "Optimization", desc: "Improve uptime and throughput." }]} /> },
        { id: "tab3", label: "About", content: <Panel items={[{ title: "Safety", desc: "Engineered for risk reduction." }, { title: "Reliability", desc: "Predictable long-cycle performance." }, { title: "Sustainability", desc: "Efficiency-focused implementation." }]} /> },
      ]}
    />
  );
}