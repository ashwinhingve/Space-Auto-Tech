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
      title="Web Technology Resources"
      tabs={[
        { id: "tab1", label: "Products", content: <Panel items={[{ title: "Web Apps", desc: "Custom business web platforms." }, { title: "Dashboards", desc: "Data-first monitoring UIs." }, { title: "Portals", desc: "Secure user workflow tools." }]} /> },
        { id: "tab2", label: "Services", content: <Panel items={[{ title: "Architecture", desc: "Scalable technical design." }, { title: "Implementation", desc: "Production-grade coding standards." }, { title: "Support", desc: "Continuous improvement cycles." }]} /> },
        { id: "tab3", label: "About", content: <Panel items={[{ title: "Performance", desc: "Fast and responsive experience." }, { title: "Maintainability", desc: "Clean and extensible codebase." }, { title: "UX Clarity", desc: "Purposeful interface design." }]} /> },
      ]}
    />
  );
}