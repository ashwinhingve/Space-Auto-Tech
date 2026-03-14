"use client";
import Tabs from "@/app/components/servi/4/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "Industrial Automation Foundations",
    description:
      "Use intelligent control systems and data-driven workflows to reduce manual error and improve production quality.",
    listItems: ["Lower downtime", "Higher repeatability"],
    imageSrc: "/images/ind1.jpeg",
  },
  {
    title: "Smart Factory Capabilities",
    description:
      "Connected machines and analytics provide real-time decision support and higher operational visibility.",
    listItems: ["Real-time monitoring", "Improved efficiency"],
    imageSrc: "/images/ind2.jpeg",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Sensor data and diagnostics identify potential failures early, enabling planned intervention before disruption.",
    listItems: ["Lower repair costs", "Improved uptime"],
    imageSrc: "/images/ind3.jpeg",
  },
];

export default function IndustrialPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Industrial Sector"
      title="Advanced Industrial Automation for High-Performance Operations"
      description="Solutions designed to modernize manufacturing, process control, and plant-wide performance."
      highlight="We focus on sustainable, scalable, and technology-first industrial engineering."
      heroImage="/svg/ind3.gif"
      heroAlt="Industrial automation"
      aboutTitle="About Space Automation Industrial"
      bullets={["Industrial automation", "Sustainable manufacturing", "Operational intelligence"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}