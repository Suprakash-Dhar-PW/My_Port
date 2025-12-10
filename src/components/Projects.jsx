import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Sparkles } from 'lucide-react';
import LegalEase from '../assets/LegalEase_AI.png';
import StudentPortal from '../assets/Student_Portal.png';
import TravelWebsite from '../assets/Travel_Website.png';

const projects = [
  {
    title: "LegalEase AI",
    description: "LegalEase AI is an intelligent contract analysis tool that compares legal clauses, highlights key differences, detects potential risks or imbalances, and even identifies signs of fake or tampered documents — helping users draft fair, reliable, and transparent agreements with ease.",
    tags: [ "Airia.ai","HTML/CSS", "JavaScript"],
    links: {
      demo: "https://suprakash-dhar-pw.github.io/contract-ai/", 
      github: "https://github.com/Suprakash-Dhar-PW/contract-ai/"
    },
    image: LegalEase 
  },
  {
    title: "Student Portal",
    description: "A comprehensive portal for students to manage their academic information, built with core web technologies.",
    tags: ["HTML/CSS", "JavaScript"],
    links: {
      demo: "https://suprakash-dhar-pw.github.io/PW_End_Sem_Project/", 
      github: "https://github.com/Suprakash-Dhar-PW/PW_End_Sem_Project"
    },
    image: StudentPortal
  },
  {
    title: "Xperio_Demo",
    description: "An immersive travel platform connecting explorers with indigenous tribes and local communities worldwide. Go beyond sightseeing to experience authentic traditions, rituals, and daily life through ethical homestays and cultural exchange.",
    tags: ["HTML/CSS", "JavaScript"],
    links: {
      demo: "https://suprakash-dhar-pw.github.io/Xperio/", 
      github: "https://github.com/Suprakash-Dhar-PW/Xperio"
    },
    image: TravelWebsite
  }
];

// --- COMPONENT: Single Project Card ---
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }} // The 3D Lift Effect
      className="group relative bg-[#1a1025] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
    >
      {/* 3D Glow Effect behind the card on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

      {/* Card Content Container */}
      <div className="relative h-full flex flex-col bg-[#1a1025] rounded-2xl overflow-hidden">
        
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10"></div>
          
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Floating Tech Badges (Visible on Image) */}
          <div className="absolute bottom-2 left-2 z-20 flex gap-2 flex-wrap">
             {project.tags.slice(0, 4).map((tag, i) => (
                <span key={i} className="text-[10px] bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded-full border border-white/10">
                    {tag}
                </span>
             ))}
          </div>
        </div>

        {/* Text Content Section */}
        <div className="p-6 flex flex-col flex-grow relative z-20">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            {/* Folder Icon decoration */}
            <Code size={20} className="text-gray-500 group-hover:text-pink-500 transition-colors" />
          </div>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Bottom Action Bar */}
          <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
             <div className="flex gap-4">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-xs">
                    <Github size={16} /> Code
                </a>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1 text-xs">
                    <ExternalLink size={16} /> Live Demo
                </a>
             </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0f0715] relative overflow-hidden">
      
      {/* Background Decor items */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-2">
            <Sparkles className="text-purple-500" size={20} />
            <span className="text-purple-500 font-medium tracking-wider text-sm uppercase">My Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent technical milestones, ranging from full-stack web applications to complex system architectures.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
            <a href="https://github.com/Suprakash-Dhar-PW?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all text-white font-medium">
                View All Projects <Github size={18} />
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;