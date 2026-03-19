"use client";
import Tabs from "@/app/components/servi/4/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "Industrial Automation Foundations",
    description:
      "Use intelligent control systems and data-driven workflows to reduce manual error and improve production quality.",
    listItems: ["Lower downtime", "Higher repeatability"],
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Smart Factory Capabilities",
    description:
      "Connected machines and analytics provide real-time decision support and higher operational visibility.",
    listItems: ["Real-time monitoring", "Improved efficiency"],
    imageSrc: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Sensor data and diagnostics identify potential failures early, enabling planned intervention before disruption.",
    listItems: ["Lower repair costs", "Improved uptime"],
    imageSrc: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=640&q=80",
  },
];

export default function IndustrialPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Industrial Sector"
      title="Advanced Industrial Automation for High-Performance Operations"
      description="Solutions designed to modernize manufacturing, process control, and plant-wide performance."
      highlight="We focus on sustainable, scalable, and technology-first industrial engineering."
      heroImage="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1200&q=80"
      heroAlt="Industrial automation"
      aboutTitle="About Space Automation Industrial"
      bullets={["Industrial automation", "Sustainable manufacturing", "Operational intelligence"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}