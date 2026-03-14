"use client";
import Tabs from "@/app/components/servi/5/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "What Is Railway Automation?",
    description:
      "Advanced control, signaling, and monitoring technologies that improve reliability and throughput in rail operations.",
    listItems: ["Automated train control", "Maintenance automation"],
    imageSrc: "/images/rail6.jpg",
  },
  {
    title: "How Automation Improves Safety",
    description:
      "Reducing manual dependencies with deterministic control and diagnostics helps lower incident risk.",
    listItems: ["Collision prevention", "Failure reduction"],
    imageSrc: "/images/rail4.jpeg",
  },
  {
    title: "Signaling System Benefits",
    description:
      "Modern signaling improves scheduling accuracy, traffic flow, and uptime across both passenger and freight routes.",
    listItems: ["Real-time performance control"],
    imageSrc: "/images/rail5.jpeg",
  },
];

export default function RailwayPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Railway Sector"
      title="Smart Railway Solutions for Safer, Faster Operations"
      description="Digital rail technologies to improve safety, scheduling quality, and infrastructure resilience."
      highlight="We deliver modernized systems tailored for both passenger and cargo rail networks."
      heroImage="/svg/rail2.gif"
      heroAlt="Railway automation"
      aboutTitle="About Space Automation Railway"
      bullets={["Passenger-centric control", "Sustainability and efficiency", "Industry-specific engineering"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}