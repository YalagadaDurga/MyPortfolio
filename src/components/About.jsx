import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          About Me
        </h2>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-purple-600 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-pink-600 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
        I'm a passionate <span className="text-pink-400 font-medium">Java Developer</span>, 
        <span className="text-pink-400 font-medium"> AI Enthusiast</span>, and 
        <span className="text-pink-400 font-medium"> Full Stack Developer</span>  
        who thrives on building clean, elegant, and responsive applications.  
        I enjoy transforming complex problems into intuitive, user-friendly solutions that leave a lasting impact.
        A lifelong learner who loves exploring new technologies and pushing creative boundaries.
        Always excited to collaborate on meaningful projects that blend innovation with real-world impact.
      </p>



        {/* Resume Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* View Resume Button */}
          <a
            href="https://drive.google.com/file/d/159mh--4Q5jRrMGFoCROut2mnLUX9hx4Z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            <FaEye /> View Resume
          </a>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/159mh--4Q5jRrMGFoCROut2mnLUX9hx4Z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
