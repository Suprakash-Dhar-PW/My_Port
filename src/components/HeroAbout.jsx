import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Resume from "../assets/Resume1.0.pdf";

// --- CONFIGURATION ---
const roles = [
  "Full Stack Dev Aspirant",
  "Freelancer",
  "AI Enthusiast",
  "Problem Solver",
  "Tech Enthusiast",
];

const HeroAbout = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0f0715] text-white flex items-center justify-center overflow-hidden py-20 px-4 md:px-8"
    >
      {/* Background Gradients (Atmosphere) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-block px-3 py-1 border border-purple-500/30 bg-purple-500/10 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
            Available for Freelance & Hires
          </div>

          {/* Name & Dynamic Role */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Suprakash
              </span>
            </h1>

            <div className="h-10 md:h-12 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[roleIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-semibold text-gray-300"
                >
                  I am a <span className="text-white">{roles[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* About Me Text (Merged) */}
          <p className="text-gray-400 leading-relaxed text-lg max-w-lg">
            I craft responsive, high-performance web applications with modern
            technologies. Passionate about transforming complex problems into
            elegant, user-centric solutions. When I'm not coding, I'm exploring
            new tech trends and contributing to open source.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* CHANGED: Used <a> tag to link to #contact */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/25 text-white cursor-pointer"
            >
              Contact Me <IoIosSend />
            </a>

            <a
              href={Resume}
              download="Suprakash_Dhar_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Download CV <FaDownload size={14} />
            </a>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: IMAGE & VISUALS --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Glowing Circle Background behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 blur-[60px] opacity-40 rounded-full" />

          {/* Image Container with Floating Animation */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            {/* The Image Itself */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl relative z-10 bg-[#1a1025]">
              <img
                src="Profile_Pic_Supra.jpeg"
                alt="Profile"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Floating 'Stats' Card (Glassmorphism) */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-xs text-gray-300 font-medium leading-tight">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
            </motion.div>

            {/* Floating 'Tech' Card (Glassmorphism) */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute top-10 -right-6 md:-right-8 bg-white/10 backdrop-blur-lg border border-white/20 p-3 rounded-xl shadow-xl z-20"
            >
              <div className="text-xs font-bold text-purple-300 mb-1">
                Current Focus
              </div>
              <div className="flex gap-2 text-xl text-white">
                <span title="React">⚛️</span>
                <span title="NextJS">▲</span>
                <span title="Tailwind">🎨</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAbout;
