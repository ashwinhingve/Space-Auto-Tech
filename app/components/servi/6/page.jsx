"use client";
import Tabs from "@/app/components/servi/6/Tabs";
import ServiceVerticalTemplate from "@/app/components/servi/ServiceVerticalTemplate";

const cards = [
  {
    title: "Build the Future of the Web",
    description:
      "Create robust web experiences with responsive architecture, strong UX, and performance-first engineering.",
    listItems: ["Design, code, innovate"],
    imageSrc: "/images/dev1.jpg",
  },
  {
    title: "Explore Modern Web Technologies",
    description:
      "Leverage modern frameworks, APIs, and deployment pipelines to deliver reliable digital products faster.",
    listItems: ["Scalable web solutions", "Reliable delivery"],
    imageSrc: "/images/dev2.jpg",
  },
  {
    title: "From Idea to Production",
    description:
      "Design, build, and launch production-grade apps using maintainable architecture and best practices.",
    listItems: ["Pixels to perfection"],
    imageSrc: "/images/dev3.jpg",
  },
];

export default function WebDevPage() {
  return (
    <ServiceVerticalTemplate
      sectionLabel="Web Development"
      title="Modern Web Engineering for Industrial and Business Platforms"
      description="From dashboards to workflow platforms, we build digital products that are fast, clear, and maintainable."
      highlight="Transforming ideas into digital reality with usability, performance, and long-term scalability in focus."
      heroImage="/svg/dev4.gif"
      heroAlt="Web development"
      aboutTitle="About Space Automation Web"
      bullets={["Responsive interfaces", "Performance-first implementation", "Reliable deployment workflows"]}
      cards={cards}
      inquiryHref="/components/inquiry"
      TabsComponent={Tabs}
    />
  );
}