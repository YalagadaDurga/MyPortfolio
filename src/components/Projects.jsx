import React from 'react';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import EduBot from '../assets/EduBot.jpg';
import FR from '../assets/FR.jpg';
import EcoEyes from '../assets/EcoEyes.png';

const projects = [
  {
    title: "EduBot",
    description: "AI-powered College Enquiry chatbot to answer student queries instantly.",
    image: EduBot,
    demoLink: "#",
    detailsLink: "https://github.com/YalagadaDurga/EduBot",
    tech: ["Python", "Rasa", "Flask" , "HTML5" , "CSS","Javascript"]
  },
  {
    title: "FaceTrack | Smart Attendance System",
    description: "Real-time facial recognition-based attendance system using React, Flask.",
    image: FR,
    demoLink: "#",
    detailsLink: "https://github.com/YalagadaDurga/Attendance-Management-System-using-FR",
    tech: ["React", "Flask", "Face Recognition","TailwindCSS","SQLite"]
  },
  {
    title: "EcoEyes",
    description: "Report SDG issues with location and images; platform for civic awareness.",
    image: EcoEyes,
    demoLink: "#",
    detailsLink: "https://github.com/YalagadaDurga/EchoEyes",
    tech: ["React", "Springboot", "MySQL"]
  }
];

const Projects = () => {
  return (
    <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 shadow-md hover:shadow-pink-500/30 hover:scale-[1.03] transition-all"
        >
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex justify-between items-center">
          {/* Live Demo */}
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-1 text-pink-400 hover:text-white transition hover:underline"
          >
          Live Demo <FaExternalLinkAlt size={12} />
          </a>

          {/* Transparent Details Button */}
          <a
            href={project.detailsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-2 border border-pink-500 text-pink-400 px-4 py-1 rounded-full text-sm hover:bg-pink-500 hover:text-white transition"
          >
          Details <FaArrowRight size={12} />
          </a>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Projects;
