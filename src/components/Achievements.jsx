import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, ExternalLink } from 'lucide-react';

// --- 1. IMPORT YOUR IMAGES ---
import oracleCert from '../assets/Oracle_Cloud_Infrastructure_2025_Certified_AI_Foundations_Associate.jpg';
import accentureCert from '../assets/Developer_and_Technology_Job_Simulation.jpg';
import dataCert from '../assets/Data_Analytics_Job_Simulation.jpg';
import cyberCert from '../assets/Cyber_Job_SImulation.jpg';
import techCert from '../assets/Technology_Job_Simulation.jpg';
import solutionsCert from '../assets/Solutions_Architecture_Job_Simulation.jpg'; 
import accentureCert2 from '../assets/Introduction_to_Technology_Apprenticeship_Job_Simulation.jpg';

// --- 2. DATA ---
const achievements = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure AI",
    issuer: "Oracle",
    date: "2025",
    image: oracleCert,
    description: "Certified AI Foundations Associate. Validated understanding of AI, Machine Learning, and Deep Learning concepts on OCI.",
  },
  {
    id: 2,
    title: "Developer Job Simulation",
    issuer: "Accenture",
    date: "2024",
    image: accentureCert,
    description: "Completed practical tasks in software architecture, debugging, and testing within a simulated enterprise environment.",
  },
  {
    id: 3,
    title: "Solutions Architecture",
    issuer: "AWS",
    date: "2024",
    image: solutionsCert,
    description: "Designed scalable, reliable, and cost-efficient cloud solutions. Learned best practices for cloud infrastructure.",
  },
  {
    id: 4,
    title: "Data Analytics Simulation",
    issuer: "Deloitte",
    date: "2024",
    image: dataCert,
    description: "Analyzed client data sets to uncover actionable insights and visualized findings for stakeholder presentations.",
  },
  {
    id: 5,
    title: "Cybersecurity Simulation",
    issuer: "Clifford Chance",
    date: "2024",
    image: cyberCert,
    description: "Identified security vulnerabilities and recommended protocols to protect sensitive client data.",
  },
  {
    id: 6,
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    date: "2024",
    image: techCert,
    description: "Gained practical experience in technology consulting and software development lifecycles.",
  },
  {
    id: 7,
    title: "Intro to Tech Apprenticeship",
    issuer: "Accenture",
    date: "2024",
    image: accentureCert2,
    description: "Explored fundamental technology concepts and the role of a technology apprentice in a corporate setting.",
  }
];

const Achievements = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    // Calculate how far the user can scroll
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="achievements" className="py-20 bg-[#0f0715] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-2 mb-2">
            <Award className="text-purple-500" size={20} />
            <span className="text-purple-500 font-medium tracking-wider text-sm uppercase">Certifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Credentials</span>
          </h2>
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
             <ArrowRight size={16} className="text-purple-500" />
             Swipe to explore
          </p>
        </motion.div>

        {/* --- CAROUSEL SLIDER --- */}
        <motion.div ref={carouselRef} className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-6 pb-10" // This 'flex' makes them horizontal
          >
            {achievements.map((item) => (
              <motion.div
                key={item.id}
                className="min-w-[320px] md:min-w-[380px] bg-[#1a1025] rounded-2xl overflow-hidden border border-white/10 shadow-lg relative flex flex-col group hover:border-purple-500/50 transition-colors duration-300"
              >
                {/* Image Area */}
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                    {item.date}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-purple-400 font-bold mb-1 uppercase tracking-wide">{item.issuer}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Verify Button (Optional Visual) */}
                  <div className="mt-auto pt-4 flex items-center text-gray-500 text-xs font-medium group-hover:text-white transition-colors">
                    <ExternalLink size={14} className="mr-1" /> Credential
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;