import React, { useState } from 'react';
import { FaCode, FaAward, FaTools } from 'react-icons/fa';
import Projects from './Projects';
import Certificates from './Certificates';
import TechStack from './TechStack';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Projects");
  const tabs = ["Projects", "Certificates", "Tech Stack"];

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 min-h-screen text-white px-6 py-20 flex flex-col items-center bg-gradient-to-r from-[#0a192f] via-[#131c31] to-[#0a192f] bg-[length:400%_400%] animate-[gradient_10s_ease_infinite]"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-purple-600 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-pink-600 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Portfolio Showcase
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-10">
        Explore my journey through projects, certifications, and technical expertise.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl transition-all font-medium ${
              activeTab === tab
                ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                : "bg-[#131c31] text-gray-300 hover:text-white"
            }`}
          >
            {tab === "Projects" && <FaCode />}
            {tab === "Certificates" && <FaAward />}
            {tab === "Tech Stack" && <FaTools />}
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Projects" && <Projects />}
      {activeTab === "Certificates" && <Certificates />}
      {activeTab === "Tech Stack" && <TechStack />}
    </section>
  );
};

export default Portfolio;
