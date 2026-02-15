import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Sparkles,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import LegalEase from "../assets/LegalEase_AI.png";
import StudentPortal from "../assets/Student_Portal.png";
import TravelWebsite from "../assets/Travel_Website.png";

const projects = [
  {
    title: "Life Admin AI dApp",
    description:
      "An intelligent decentralized application designed to streamline personal administrative tasks using AI, automating scheduling, reminders, and document organization.",
    tags: ["JavaScript", "Web3", "AI Integration"],
    links: {
      demo: "https://life-admin-ai-five.vercel.app",
      github: "https://github.com/Suprakash-Dhar-PW/Life_Admin_AI_dApp",
    },
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    award: "3rd Prize - Denova Hackathon (Solo)",
  },
  {
    title: "LegalEase AI",
    description:
      "LegalEase AI is an intelligent contract analysis tool that compares legal clauses, highlights key differences, detects potential risks or imbalances, and even identifies signs of fake or tampered documents — helping users draft fair, reliable, and transparent agreements with ease.",
    tags: ["Airia.ai", "HTML/CSS", "JavaScript"],
    links: {
      demo: "https://suprakash-dhar-pw.github.io/contract-ai/",
      github: "https://github.com/Suprakash-Dhar-PW/contract-ai/",
    },
    image: LegalEase,
    award: "3rd Prize - Deep Innovation Hackathon (Team)",
  },
  {
    title: "CodeMix Global",
    description:
      "CodeMix Global goes beyond translation — it interprets emotion, tone, slang, and cultural context to enable smarter cross-language communication.",
    tags: ["TypeScript", "AI", "NLP"],
    links: {
      demo: "https://suprakash-dhar-pw.github.io/CodeMix-Global/",
      github: "https://github.com/Suprakash-Dhar-PW/CodeMix-Global",
    },
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Student Portal",
    description:
      "A comprehensive portal for students to manage their academic information, built with core web technologies.",
    tags: ["HTML/CSS", "JavaScript"],
    links: {
      demo: "https://suprakash-dhar-pw.github.io/PW_End_Sem_Project/",
      github: "https://github.com/Suprakash-Dhar-PW/PW_End_Sem_Project",
    },
    image: StudentPortal,
  },
  {
    title: "Xperio",
    description:
      "An immersive travel platform connecting explorers with indigenous tribes and local communities worldwide. Go beyond sightseeing to experience authentic traditions, rituals, and daily life through ethical homestays and cultural exchange.",
    tags: ["HTML/CSS", "JavaScript"],
    links: {
      demo: "https://suprakash-dhar-pw.github.io/Xperio/",
      github: "https://github.com/Suprakash-Dhar-PW/Xperio",
    },
    image: TravelWebsite,
  },
];

// --- COMPONENT: Hackathon Winner Card ---
const HackathonWinnerCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group bg-gradient-to-br from-[#1a1025] to-[#2d1b4e] rounded-2xl border border-yellow-500/30 overflow-hidden shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold text-xs px-4 py-2 rounded-bl-xl z-30 flex items-center gap-2 shadow-lg">
        <Trophy size={14} fill="currentColor" /> {project.award}
      </div>

      <div className="relative h-64 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 z-20 flex gap-2 flex-wrap">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] uppercase font-bold tracking-wider bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-20">
        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-3">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/50 text-white text-sm flex justify-center items-center gap-2 transition-all"
          >
            <Github size={16} /> Code
          </a>
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-lg bg-yellow-500/20 border border-yellow-500/30 hover:bg-yellow-500/30 text-yellow-200 text-sm flex justify-center items-center gap-2 transition-all font-medium"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPONENT: Standard Project Card ---
const CarouselProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1a1025] rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col h-[500px] w-full overflow-hidden group">
      {/* Image Section - Fixed Height */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 z-20 flex gap-1 flex-wrap">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded-md border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section - Flex Grow to fill height */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          {project.award && (
            <Trophy size={16} className="text-yellow-500 shrink-0" />
          )}
        </div>

        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-5 flex-grow">
          {project.description}
        </p>

        <div className="pt-4 border-t border-white/5 flex gap-4 mt-auto">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
          >
            <Github size={14} /> Source
          </a>
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1.5 text-xs font-medium ml-auto"
          >
            Live Demo <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PROJECT SECTION ---
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Only show non-winners in the carousel specifically, OR all projects?
  // User asked for "all featured projects within one row", usually implies all projects.
  const allProjects = projects;

  const itemsPerPage = 1; // Mobile default
  // In a real responsive app we'd detect window width, but for simplicity we'll just slide one-by-one or use grid logic.
  // To make a proper carousel we slide by index.

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= allProjects.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? allProjects.length - 1 : prev - 1,
    );
  };

  const winners = projects.filter((p) => p.award);

  return (
    <section
      id="projects"
      className="py-20 bg-[#0f0715] relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-2">
            <Sparkles className="text-purple-500" size={20} />
            <span className="text-purple-500 font-medium tracking-wider text-sm uppercase">
              My Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Award-winning innovations and technical milestones.
          </p>
        </motion.div>

        {/* --- SECTION 1: HACKATHON WINNERS --- */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 pl-2 border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Hackathon Hall of Fame
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {winners.map((project, index) => (
              <HackathonWinnerCard
                key={index}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* --- SECTION 2: CAROUSEL --- */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Code className="text-purple-500" size={24} />
              Project Gallery
            </h3>

            {/* Carousel Controls */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {allProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <CarouselProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {allProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-purple-500 w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/Suprakash-Dhar-PW?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all text-white font-medium"
          >
            View Full Archive <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
