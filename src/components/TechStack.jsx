import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTerminal,
  FaRocket,
  FaWind,
  FaLeaf,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiCplusplus, SiC } from "react-icons/si";

const TechStack = () => {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "Java", icon: <FaJava className="text-red-600" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "DBMS", icon: <FaDatabase className="text-yellow-600" /> },
        { name: "Terminal", icon: <FaTerminal className="text-gray-300" /> },
      ],
    },
    {
      title: "Tools & Innovation",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Antigravity", icon: <FaRocket className="text-orange-500" /> },
        { name: "Airia.ai", icon: <FaWind className="text-cyan-400" /> },
      ],
    },
  ];

  return (
    <section
      id="techstack"
      className="py-24 bg-[#0f0715] relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Arsenal
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The powerful tools and technologies that fuel my development.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/5 group/skill"
                  >
                    <div className="text-3xl mb-2 transform group-hover/skill:scale-110 transition-transform duration-300 pointer-events-none">
                      {skill.icon}
                    </div>
                    <span className="text-xs text-gray-400 font-medium group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
