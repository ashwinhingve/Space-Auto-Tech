"use client";
import Tabs from "@/app/components/servi/5/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "What Is Railway Automation?",
    description:
      "Advanced control, signaling, and monitoring technologies that improve reliability and throughput in rail operations.",
    listItems: ["Automated train control", "Maintenance automation"],
    imageSrc: "https://images.unsplash.com/photo-1474487548417-781cb6d646df?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "How Automation Improves Safety",
    description:
      "Reducing manual dependencies with deterministic control and diagnostics helps lower incident risk.",
    listItems: ["Collision prevention", "Failure reduction"],
    imageSrc: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Signaling System Benefits",
    description:
      "Modern signaling improves scheduling accuracy, traffic flow, and uptime across both passenger and freight routes.",
    listItems: ["Real-time performance control"],
    imageSrc: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=640&q=80",
  },
];

export default function RailwayPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Railway Sector"
      title="Smart Railway Solutions for Safer, Faster Operations"
      description="Digital rail technologies to improve safety, scheduling quality, and infrastructure resilience."
      highlight="We deliver modernized systems tailored for both passenger and cargo rail networks."
      heroImage="https://images.unsplash.com/photo-1474487548417-781cb6d646df?auto=format&fit=crop&w=1200&q=80"
      heroAlt="Railway automation"
      aboutTitle="About Space Automation Railway"
      bullets={["Passenger-centric control", "Sustainability and efficiency", "Industry-specific engineering"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}