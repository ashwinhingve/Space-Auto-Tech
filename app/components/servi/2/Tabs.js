"use client"
import '@/app/components/styles/Tabs.css';

import { useState } from 'react';
import  SCard from '@/app/components/servi/2/SCard';
import ACard from '@/app/components/servi/2/ACard';
import PCard from '@/app/components/servi/2/PCard';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("PCard");
  const [ setIsHovered] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return <PCard />;
      case "tab2":
        return <SCard />;
      case "tab3":
        return <ACard />;
      default:
        return <PCard />;
    }
  };

  return (
    <>
      <section>
        <div className="p-6">
          <h1 className="text-center text-4xl font-extrabold pt-5 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out">
          Discover, Connect, and Transform
          </h1>

          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {[
              { id: "tab1", label: "Product" },
              { id: "tab2", label: "Services" },
              { id: "tab3", label: "About" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative group px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 ease-in-out
      ${activeTab === id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl transform scale-110"
                    : "bg-gray-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white shadow-md"
                  }`}
              >
                {/* Border Effect */}
                <span
                  className={`absolute inset-0 rounded-full border-2 ${activeTab === id
                      ? "border-blue-400 animate-pulse"
                      : "border-transparent group-hover:border-blue-400"
                    }`}
                ></span>

                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-2">
                  {/* Optional Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5 10a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {label}
                </span>
              </button>
            ))}

          </div>
          <div className="p-6 text-center text-gray-700 bg-gray-50 rounded-lg shadow-md">
            {renderTabContent()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
