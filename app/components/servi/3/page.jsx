"use client";
import Tabs from "@/app/components/servi/3/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "Why Modernization Matters",
    description:
      "The power sector depends on stable, efficient, and intelligent infrastructure to meet growing demand sustainably.",
    listItems: ["Improves grid stability"],
    imageSrc: "/images/power1.jpg",
  },
  {
    title: "Smart Grid Advantages",
    description:
      "Digital grid layers improve distribution visibility, planning quality, and real-time control for better reliability.",
    listItems: ["Optimized distribution", "Demand forecasting"],
    imageSrc: "/images/power2.jpg",
  },
  {
    title: "Role of Energy Storage",
    description:
      "Storage systems absorb surplus generation and support peak loads, improving continuity and renewable integration.",
    listItems: ["EV and peak-load readiness"],
    imageSrc: "/images/power3.jpg",
  },
];

export default function PowerSectorPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Power Sector"
      title="Sustainable Automation for the Power Sector"
      description="Solutions focused on grid reliability, intelligent operations, and future-ready energy management."
      highlight="We integrate digital control, renewable readiness, and advanced monitoring to support resilient power systems."
      heroImage="/svg/power1.gif"
      heroAlt="Power sector automation"
      aboutTitle="About Space Automation Power Solutions"
      bullets={["Decentralized power systems", "Digital transformation", "Sustainability goals"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}