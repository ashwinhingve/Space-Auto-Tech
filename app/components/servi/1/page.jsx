"use client";
import Tabs from "@/app/components/servi/1/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "What Is Smart Irrigation?",
    description:
      "A sustainable approach that delivers water and nutrients in precise doses at the right time and location for healthier crop growth.",
    listItems: ["Precision moisture management"],
    imageSrc: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Benefits of Our Irrigation Systems",
    description:
      "Improve yield consistency with better water utilization, healthier soil structure, and lower operating waste across seasons.",
    listItems: ["Better water management", "Efficient soil protection"],
    imageSrc: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Methods and Operational Control",
    description:
      "Automated irrigation controls combine flow logic and fertigation scheduling to deliver nutrients and water with consistent accuracy.",
    listItems: ["Precision irrigation workflows"],
    imageSrc: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=640&q=80",
  },
];

export default function IrrigationPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Irrigation Automation"
      title="Precision Irrigation Systems for Sustainable Farming"
      description="Design, deployment, and control systems for modern irrigation networks that improve output while reducing water waste."
      highlight="These systems help conserve water, optimize agricultural productivity, and maintain healthy landscapes."
      heroImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
      heroAlt="Irrigation automation overview"
      aboutTitle="About Space Automation Irrigation"
      bullets={["Grow more with less water", "Uniform water coverage", "Eco-friendly operations"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}