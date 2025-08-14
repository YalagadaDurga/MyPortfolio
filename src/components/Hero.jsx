import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink, FiMail } from "react-icons/fi";
import heroImg from "../assets/profile.png"; 
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#0a192f] text-white px-6 py-20"
    >
      {/* Glowing background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-purple-600 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-pink-600 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              I'm Durga Yalagada
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            A passionate{" "}
            <span className="text-pink-400">Web Developer</span> crafting
            modern UIs & smooth user experiences.
          </p>

          {/* Social Icons shifted right */}
          <div className="flex justify-center md:justify-start mt-8">
            <div className="flex gap-6 text-3xl items-center md:ml-48">
              <a
                href="https://github.com/YalagadaDurga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/durgayalagada/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-start mt-6">
  <div className="flex gap-6 md:ml-28">
    <Link
  to="projects"
  smooth={true}
  duration={100}
  offset={-96} // adjust if your navbar is fixed
  className="cursor-pointer no-underline bg-[#0b0f1e] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition duration-300 group"
>
  Projects
  <FiExternalLink className="group-hover:translate-x-1 transition-transform duration-300" />
</Link>
    <a
      href="#contact"
      className="no-underline bg-[#0b0f1e] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition duration-300 group"
    >
      Contact
      <FiMail className="group-hover:-translate-y-1 transition-transform duration-300" />
    </a>
  </div>
</div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Durga coding illustration"
            className="w-72 sm:w-80 md:w-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Add in Hero.jsx inside <section> */}
<div className="absolute w-full h-full overflow-hidden z-0">
  {[...Array(10)].map((_, i) => (
    <div
      key={i}
      className="absolute w-4 h-4 bg-white/20 rounded-full animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${5 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 5}s`
      }}
    ></div>
  ))}
</div>

    </section>
  );
};

export default Hero;
