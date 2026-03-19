"use client";
import Tabs from "@/app/components/servi/2/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "Harnessing the Power of the Sun",
    description:
      "Solar technology enables clean and scalable energy generation that supports industrial growth while reducing carbon emissions.",
    listItems: ["Renewable and reliable"],
    imageSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "The Science Behind Solar Energy",
    description:
      "Photovoltaic systems convert sunlight into electricity efficiently and safely for facilities, campuses, and distributed assets.",
    listItems: ["Efficient and affordable", "Smart energy strategy"],
    imageSrc: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Business Benefits of Solar Adoption",
    description:
      "Lower energy cost exposure, improve sustainability KPIs, and strengthen long-term energy resilience with smart solar infrastructure.",
    listItems: ["Cleaner energy portfolio"],
    imageSrc: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=640&q=80",
  },
];

const projects = [
  { title: "Solar Farm Installation", tag: "Installation", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=640&q=80" },
  { title: "Rooftop Solar System", tag: "Commercial", image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=640&q=80" },
  { title: "Industrial Solar Plant", tag: "Industrial", image: "https://images.unsplash.com/photo-1561478186-24fc7e9be0a0?auto=format&fit=crop&w=640&q=80" },
];

export default function SolarPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Solar Energy"
      title="Solar Energy Systems for Future-Ready Infrastructure"
      description="High-performance solar deployment strategies for industrial and commercial environments."
      highlight="From rooftops to large installations, we engineer systems that improve sustainability and operational savings."
      heroImage="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1200&q=80"
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