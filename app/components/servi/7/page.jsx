"use client";
import Tabs from "@/app/components/servi/7/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "What Is Home Automation?",
    description:
      "Control lighting, climate, security, and appliances through connected systems, schedules, and remote access.",
    listItems: ["Improved daily convenience"],
    imageSrc: "/images/home4.jpg",
  },
  {
    title: "How Smart Homes Work",
    description:
      "Devices communicate through secure hubs and apps to automate routines and support real-time control.",
    listItems: ["Energy efficiency", "Time savings"],
    imageSrc: "/images/home11.jpg",
  },
  {
    title: "Security and Reliability",
    description:
      "Proper authentication, updates, and secure integration practices help keep systems safe and dependable.",
    listItems: ["Enhanced security", "Reliable connectivity"],
    imageSrc: "/images/home1.jpg",
  },
];

export default function SmartHomePage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Smart Home"
      title="Intelligent Home Automation for Comfort, Security, and Control"
      description="Future-ready home systems that simplify daily life while improving safety and energy efficiency."
      highlight="Step into the future with advanced automation designed for seamless, secure living environments."
      heroImage="/svg/home1.gif"
      heroAlt="Smart home automation"
      aboutTitle="About Space Automation Home Solutions"
      bullets={["IoT integration", "Automation scheduling", "Remote access and control"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}