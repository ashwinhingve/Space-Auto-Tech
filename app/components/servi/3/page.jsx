"use client";
import Tabs from "@/app/components/servi/3/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "Why Modernization Matters",
    description:
      "The power sector depends on stable, efficient, and intelligent infrastructure to meet growing demand sustainably.",
    listItems: ["Improves grid stability"],
    imageSrc: "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Smart Grid Advantages",
    description:
      "Digital grid layers improve distribution visibility, planning quality, and real-time control for better reliability.",
    listItems: ["Optimized distribution", "Demand forecasting"],
    imageSrc: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Role of Energy Storage",
    description:
      "Storage systems absorb surplus generation and support peak loads, improving continuity and renewable integration.",
    listItems: ["EV and peak-load readiness"],
    imageSrc: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=640&q=80",
  },
];

export default function PowerSectorPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Power Sector"
      title="Sustainable Automation for the Power Sector"
      description="Solutions focused on grid reliability, intelligent operations, and future-ready energy management."
      highlight="We integrate digital control, renewable readiness, and advanced monitoring to support resilient power systems."
      heroImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80"
      heroAlt="Power sector automation"
      aboutTitle="About Space Automation Power Solutions"
      bullets={["Decentralized power systems", "Digital transformation", "Sustainability goals"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}