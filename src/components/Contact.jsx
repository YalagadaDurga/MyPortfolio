import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0a192f] text-white px-4 py-20 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Get In Touch
      </h2>

      <p className="text-gray-400 text-center max-w-xl mb-10 text-sm sm:text-base">
        Feel free to reach out for collaborations, questions, or opportunities.
        I’m always open to connect!
      </p>

      {/* Smaller Glass Box */}
      <div className="w-full max-w-sm bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 space-y-4 shadow-md">
        {/* Email */}
        <a
          href="mailto:yalagadadurga357@gmail.com"
          className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition"
        >
          <FaEnvelope className="text-pink-400 text-xl" />
          <p className="font-medium text-white text-base">Email</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/durgayalagada/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition"
        >
          <FaLinkedin className="text-blue-400 text-xl" />
          <p className="font-medium text-white text-base">LinkedIn</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/YalagadaDurga"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition"
        >
          <FaGithub className="text-gray-300 text-xl" />
          <p className="font-medium text-white text-base">GitHub</p>
        </a>
      </div>
        <br></br>
        <br></br>
      <p className="text-xs text-gray-500 mt-8">Made by DurgaYalagada © 2025 - All Rights Reserved.</p>
    </section>
  );
};

export default Contact;
