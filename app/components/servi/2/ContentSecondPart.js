// components/ContentSecondPart.js

// import Image from "next/image";

// const ContentSecondPart = () => {
//   const sections = [
//     {
//       id: 1,
//       title: "Schematic Capture",
//       imgSrc: "https://easyeda.com/images/Schematic-Capture.png?id=07d748bd11efb50635e7",
//       description: [
//         "Our powerful schematic editor supports complex designs with over 500 sheets and 100,000 pins.",
//         "With Easy-to-use components selection tool, millions of free libraries that include symbols, footprints, and 3D models, along with real-time inventory and pricing, and flexible module design, our tool streamlines your design process, helping you design faster and easier.",
//       ],
//       isActive: false,
//     },
//     {
//       id: 2,
//       title: "PCB Design",
//       imgSrc: "https://easyeda.com/images/PCB-design.png?id=6cf1c8f8d6332ba28b9a",
//       description: [
//         "Supports complex projects with over 5,000 components or 10,000 pads. Powerful interactive Routing, one-click placement of blind and buried vias, Via Stitching and browser extension support.",
//         "Our intuitive visualization tools and rules-based routing simplify layout tasks, optimize routing and component placement of the PCB to ensure that it operates as intended and can be manufactured efficiently.",
//       ],
//       isActive: false,
//     },
//     {
//       id: 3,
//       title: "3D Visualization",
//       modelSrc: "https://easyeda.com/images/model/test.glb?id=27946b2e2526d882e1f3",
//       description: [
//         "Our unified user interface offers both 2D and 3D PCB visualizations, along with a Gerber file viewer for effortless inspection.",
//         "The native 3D graphics offer a vivid mechanical layout presentation, with instant 3D preview updates after any PCB adjustment.",
//       ],
//       isActive: true,
//     },
//   ];

//   return (
//     <div className="content-second-part p-8">
//       <h1 className="text-center text-2xl font-bold mb-6">One Interface, Endless Creativity</h1>
//       <div className="second-part-top flex justify-center gap-6 mb-8">
//         {sections.map((section) => (
//           <button
//             key={section.id}
//             className={`tab text-lg px-4 py-2 rounded-lg ${
//               section.isActive ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             {section.title}
//           </button>
//         ))}
//       </div>
//       <div className="second-part-bottom space-y-12">
//         {sections.map(
//           (section) =>
//             section.isActive && (
//               <div key={section.id} className="flex flex-col lg:flex-row items-center gap-6">
//                 <div className="left flex-1">
//                   {section.imgSrc ? (
//                     <Image
//                       src={section.imgSrc}
//                       alt={section.title}
//                       className="rounded-lg"
//                       width={600}
//                       height={400}
//                     />
//                   ) : (
//                     <model-viewer
//                       id="model-test"
//                       src={section.modelSrc}
//                       camera-orbit="0deg 0deg 180deg"
//                       camera-controls
//                       className="w-full h-full"
//                     />
//                   )}
//                 </div>
//                 <div className="right flex-1">
//                   <h2 className="text-xl font-bold mb-4">{section.title}</h2>
//                   {section.description.map((text, idx) => (
//                     <p key={idx} className="mb-4 text-gray-700">
//                       {text}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             )
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContentSecondPart;

// components/ContentSecondPart.js
"use client"
import { useState } from "react";
import Image from "next/image";

const ContentSecondPart = () => {
  const [activeTab, setActiveTab] = useState(3); // Default active tab is "3D Preview"

  const sections = [
    {
      id: 1,
      title: "Schematic Capture",
      imgSrc: "https://easyeda.com/images/Schematic-Capture.png?id=07d748bd11efb50635e7",
      description: [
        "Our powerful schematic editor supports complex designs with over 500 sheets and 100,000 pins.",
        "With easy-to-use components selection tools, millions of free libraries that include symbols, footprints, and 3D models, along with real-time inventory and pricing, our tool streamlines your design process, helping you design faster and easier."
      ],
    },
    {
      id: 2,
      title: "PCB Design",
      imgSrc: "https://easyeda.com/images/PCB-design.png?id=6cf1c8f8d6332ba28b9a",
      description: [
        "Supports complex projects with over 5,000 components or 10,000 pads. Powerful interactive Routing, one-click placement of blind and buried vias, Via Stitching, and browser extension support.",
        "Our intuitive visualization tools and rules-based routing simplify layout tasks and optimize routing and component placement of the PCB to ensure it operates as intended and can be manufactured efficiently."
      ],
    },
    {
      id: 3,
      title: "3D Visualization",
      imgSrc: "/images/service4.jpg",
      description: [
        "Our unified user interface offers both 2D and 3D PCB visualizations, along with a Gerber file viewer for effortless inspection.",
        "The native 3D graphics offer a vivid mechanical layout presentation, with instant 3D preview updates after any PCB adjustment."
      ],
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
        <main className="container mx-auto  content-second-part p-8 pr-40 pl-40 ">
      <h1 className="text-center text-3xl font-bold mb-6">One Interface, Endless Creativity</h1>
      
      {/* Tabs */}
      <div className="second-part-top flex justify-center gap-6 mb-8">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleTabClick(section.id)}
            className={`tab text-lg px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-500 ${
              activeTab === section.id ? "bg-blue-500 text-black" : "bg-gray-200"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>
      
      {/* Content Sections */}
      <div className="second-part-bottom">
        {sections.map(
          (section) =>
            activeTab === section.id && (
              <div key={section.id} className="second-part-bottom-content mb-12">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="left flex-1">
                    {section.modelSrc ? (
                      <model-viewer
                        id="model-test"
                        src={section.modelSrc}
                        camera-orbit="0deg 0deg 180deg"
                        camera-controls
                        ar-status="not-presenting"
                        className="w-full h-full"
                      ></model-viewer>
                    ) : (
                      <Image
                        src={section.imgSrc}
                        alt={section.title}
                        className="rounded-lg"
                        width={600}
                        height={400}
                      />
                    )}
                  </div>
                  <div className="right flex-1">
                    <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                    {section.description.map((text, idx) => (
                      <p key={idx} className="text-gray-700 mb-4">{text}</p>
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </main>
  );
};

export default ContentSecondPart;
