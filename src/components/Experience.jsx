import React from 'react';
import { motion } from 'framer-motion';
import company1Logo from '../assets/TechIn IT Company.png'; // TechIN logo
import company2Logo from '../assets/ExcelR Company.png';
import company3Logo from '../assets/SmartBridge.png';

const experiences = [
  {
    company: "TechIN IT Private Limited",
    role: "Industrial Trainee - Web Development",
    duration: "Dec 2022 - Jun 2023",
    logo: company1Logo,
    description:
      "Successfully completed 6-month industrial training focusing on responsive web development. Gained practical experience in HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    certificateLink: "https://drive.google.com/file/d/1grEMmbbRvhUy8Q4fl1TqQdU5EYhHlb88/view?usp=sharing" // Change to your actual file path
  },
  {
    company: "ExcelR Private Limited",
    role: "Full Stack Java Intern",
    duration: "Jun 2024 - Jul 2024",
    logo: company2Logo,
    description:
      "Completed a 6-week short-term internship in Full Stack Java. Developed applications using Java, Spring Boot, and MongoDB while improving front-end UI with React.",
    tech: ["Java", "Spring Boot", "MongoDB", "React js", "Node js"],
    certificateLink: "https://drive.google.com/file/d/1lJpnxhQ3eAT7xva1FAuOTJtj5FDGelPh/view?usp=sharing" // Change to your actual file path
  },
  {
    company: "SmartBridge Educational Service Private Limited",
    role: "Full Stack Development(MERN) Intern",
    duration: "May 2025 - Jul 2025",
    logo: company3Logo,
    description:
      "Completed Short-term Internship of 2 months on Full Stack Development(MERN)",
    tech: ["MongoDB","Express","React js", "Node js"],
    certificateLink: "https://drive.google.com/file/d/1rThFHXQEjMYPAByqg7rh3EkpQhfA9WL6/view?usp=sharing" 
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="min-h-screen bg-[#0a192f] text-white px-6 py-20 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Experience
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
  {experiences.map((exp, index) => (
    <motion.div
      key={index}
      custom={index}
      variants={cardVariants}
      className="flex flex-col justify-between bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-pink-500/30 hover:scale-[1.03] transition-all"
    >
      <div>
        {/* Logo + Info */}
        <div className="flex items-center gap-4 mb-4">
          <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-20 h-20 rounded-full object-cover hover:scale-110 transition-transform"
            />
          </a>
          <div>
            <h3 className="text-xl font-semibold text-pink-400">{exp.role}</h3>
            <p className="text-gray-300">{exp.company}</p>
            <p className="text-gray-400 text-sm">{exp.duration}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4">{exp.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 text-sm text-pink-300 mb-6">
          {exp.tech.map((tech, i) => (
            <span key={i} className="bg-pink-600/20 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* View Certificate Button */}
      <a
        href={exp.certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline border border-pink-400 text-pink-400 px-4 py-2 rounded-full text-sm hover:bg-pink-400/10 transition self-start"
      >
        View Certificate
      </a>
    </motion.div>
  ))}
</div>

    </motion.section>
  );
};

export default Experience;
