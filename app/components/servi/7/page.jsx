"use client";
import Tabs from "@/app/components/servi/7/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "What Is Home Automation?",
    description:
      "Control lighting, climate, security, and appliances through connected systems, schedules, and remote access.",
    listItems: ["Improved daily convenience"],
    imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "How Smart Homes Work",
    description:
      "Devices communicate through secure hubs and apps to automate routines and support real-time control.",
    listItems: ["Energy efficiency", "Time savings"],
    imageSrc: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Security and Reliability",
    description:
      "Proper authentication, updates, and secure integration practices help keep systems safe and dependable.",
    listItems: ["Enhanced security", "Reliable connectivity"],
    imageSrc: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=640&q=80",
  },
];

export default function SmartHomePage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Smart Home"
      title="Intelligent Home Automation for Comfort, Security, and Control"
      description="Future-ready home systems that simplify daily life while improving safety and energy efficiency."
      highlight="Step into the future with advanced automation designed for seamless, secure living environments."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
      heroAlt="Smart home automation"
      aboutTitle="About Space Automation Home Solutions"
      bullets={["IoT integration", "Automation scheduling", "Remote access and control"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}