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
      title="Smart Home Resources"
      tabs={[
        { id: "tab1", label: "Products", content: <Panel items={[{ title: "Smart Lighting", desc: "Automated scenes and schedules." }, { title: "Security Devices", desc: "Connected monitoring and alerts." }, { title: "Climate Control", desc: "Efficient comfort management." }]} /> },
        { id: "tab2", label: "Services", content: <Panel items={[{ title: "Home Assessment", desc: "Map automation opportunities." }, { title: "Installation", desc: "Integrated setup and testing." }, { title: "Support", desc: "Reliable post-install care." }]} /> },
        { id: "tab3", label: "About", content: <Panel items={[{ title: "Convenience", desc: "Less manual effort every day." }, { title: "Security", desc: "Higher control and awareness." }, { title: "Efficiency", desc: "Lower energy waste." }]} /> },
      ]}
    />
  );
}