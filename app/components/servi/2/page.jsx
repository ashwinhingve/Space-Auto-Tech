"use client";
import Tabs from "@/app/components/servi/2/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "Harnessing the Power of the Sun",
    description:
      "Solar technology enables clean and scalable energy generation that supports industrial growth while reducing carbon emissions.",
    listItems: ["Renewable and reliable"],
    imageSrc: "/images/solar2.webp",
  },
  {
    title: "The Science Behind Solar Energy",
    description:
      "Photovoltaic systems convert sunlight into electricity efficiently and safely for facilities, campuses, and distributed assets.",
    listItems: ["Efficient and affordable", "Smart energy strategy"],
    imageSrc: "/images/solar1.webp",
  },
  {
    title: "Business Benefits of Solar Adoption",
    description:
      "Lower energy cost exposure, improve sustainability KPIs, and strengthen long-term energy resilience with smart solar infrastructure.",
    listItems: ["Cleaner energy portfolio"],
    imageSrc: "/images/solar3.webp",
  },
];

const projects = [
  { title: "The Solar Panel", tag: "Installation", image: "/images/sw1.jpg" },
  { title: "Fitting Stars", tag: "Work", image: "/images/sw2.jpg" },
  { title: "Solar Roof", tag: "Construction", image: "/images/sw3.jpg" },
];

export default function SolarPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Solar Energy"
      title="Solar Energy Systems for Future-Ready Infrastructure"
      description="High-performance solar deployment strategies for industrial and commercial environments."
      highlight="From rooftops to large installations, we engineer systems that improve sustainability and operational savings."
      heroImage="/svg/solar2.gif"
      heroAlt="Solar energy system overview"
      aboutTitle="About Space Automation Solar"
      bullets={["Renewable and sustainable", "Scalable system design", "Eco-friendly power transition"]}
      cards={cards}
      projectShowcase={projects}
      inquiryHref="/components/feedback"
      TabsComponent={Tabs}
    />
  );
}