"use client";
import { useMemo, useState } from "react";

export default function ServiceTabsShell({ title = "Discover, Connect, Transform", tabs = [] }) {
  const firstTabId = tabs[0]?.id || "tab1";
  const [activeTab, setActiveTab] = useState(firstTabId);

  const activeContent = useMemo(() => {
    const current = tabs.find((tab) => tab.id === activeTab);
    return current ? current.content : tabs[0]?.content;
  }, [activeTab, tabs]);

  return (
    <section className="card border border-slate-200/85">
      <h2 className="section-heading-modern text-center text-2xl sm:text-3xl mb-6">{title}</h2>

      <div className="flex flex-wrap justify-center gap-2.5 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
              activeTab === tab.id
                ? "bg-cerulean text-white border-cerulean shadow-button"
                : "bg-white text-ink/70 border-slate-300/80 hover:bg-ink/5 hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-cloud/60 p-4 sm:p-5">{activeContent}</div>
    </section>
  );
}
