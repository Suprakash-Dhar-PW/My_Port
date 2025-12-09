import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A dark-themed analytics dashboard for online stores.",
    tech: ["React", "Tailwind", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    title: "Neon Portfolio",
    description: "Personal website with high-performance animations.",
    tech: ["Framer Motion", "React"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
  },
  {
    title: "AI Chat Interface",
    description: "Modern chat UI with real-time response streaming.",
    tech: ["OpenAI API", "React"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0f0715]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0715] to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-purple-900/30 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;