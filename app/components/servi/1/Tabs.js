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
      title="Irrigation Resources"
      tabs={[
        { id: "tab1", label: "Products", content: <Panel items={[{ title: "Drip Network", desc: "Precision flow control for farms." }, { title: "Sprinkler Systems", desc: "Uniform water coverage at scale." }, { title: "Automation Panels", desc: "Controller-ready irrigation logic." }]} /> },
        { id: "tab2", label: "Services", content: <Panel items={[{ title: "Site Survey", desc: "Assess terrain and water demand." }, { title: "Commissioning", desc: "Deploy and tune full systems." }, { title: "Maintenance", desc: "Seasonal optimization support." }]} /> },
        { id: "tab3", label: "About", content: <Panel items={[{ title: "Water Efficiency", desc: "Deliver more crop per drop." }, { title: "Reliable Automation", desc: "Stable operation in field conditions." }, { title: "Scalable Design", desc: "Built for future expansion." }]} /> },
      ]}
    />
  );
}