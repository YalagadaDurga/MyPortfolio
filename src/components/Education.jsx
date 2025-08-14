import React from 'react';
import { motion } from 'framer-motion';
import vishnuLogo from '../assets/image.png';
import polytechnicLogo from '../assets/image.png';

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Education = () => {
  return (
    <motion.section
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="snap-start min-h-screen bg-[#0a192f] text-white px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Education
        </h2>

        <motion.div
          className="space-y-10 text-left"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* B.Tech Card */}
          <motion.div
            variants={cardVariant}
            className="flex flex-col md:flex-row items-center bg-white/5 p-6 rounded-xl border border-white/10 shadow-md gap-6 hover:shadow-pink-500/20 transition duration-300"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <img src={vishnuLogo} alt="Vishnu Logo" className="w-full h-full object-cover" />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-pink-400">Bachelor of Technology</h3>
              <p className="text-gray-300">Computer Science and Engineering</p>
              <p className="text-gray-300">Shri Vishnu Engineering College for Women, Bhimavaram</p>
              <p className="text-gray-400">2023 - 2026</p>
              <p className="text-gray-400 mt-1">CGPA: <span className="text-white font-medium">9.51</span></p>
            </div>
          </motion.div>

          {/* Diploma Card */}
          <motion.div
            variants={cardVariant}
            className="flex flex-col md:flex-row items-center bg-white/5 p-6 rounded-xl border border-white/10 shadow-md gap-6 hover:shadow-pink-500/20 transition duration-300"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <img src={polytechnicLogo} alt="Polytechnic Logo" className="w-full h-full object-cover" />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-pink-400">Diploma - CME</h3>
              <p className="text-gray-300">Computer Engineering</p>
              <p className="text-gray-300">Smt. B. Seetha Polytechnic College</p>
              <p className="text-gray-400">2020 - 2023</p>
              <p className="text-gray-400 mt-1">Percentage: <span className="text-white font-medium">94.25%</span></p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
