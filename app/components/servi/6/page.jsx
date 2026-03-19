"use client";
import Tabs from "@/app/components/servi/6/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "Build the Future of the Web",
    description:
      "Create robust web experiences with responsive architecture, strong UX, and performance-first engineering.",
    listItems: ["Design, code, innovate"],
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Explore Modern Web Technologies",
    description:
      "Leverage modern frameworks, APIs, and deployment pipelines to deliver reliable digital products faster.",
    listItems: ["Scalable web solutions", "Reliable delivery"],
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "From Idea to Production",
    description:
      "Design, build, and launch production-grade apps using maintainable architecture and best practices.",
    listItems: ["Pixels to perfection"],
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&q=80",
  },
];

export default function WebDevPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Web Development"
      title="Modern Web Engineering for Industrial and Business Platforms"
      description="From dashboards to workflow platforms, we build digital products that are fast, clear, and maintainable."
      highlight="Transforming ideas into digital reality with usability, performance, and long-term scalability in focus."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
      heroAlt="Web development"
      aboutTitle="About Space Automation Web"
      bullets={["Responsive interfaces", "Performance-first implementation", "Reliable deployment workflows"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}