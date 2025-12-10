import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// --- 1. IMPORT YOUR IMAGES ---
import oracleCert from '../assets/Oracle_Cloud_Infrastructure_2025_Certified_AI_Foundations_Associate.jpg';
import accentureCert from '../assets/Developer_and_Technology_Job_Simulation.jpg';
import dataCert from '../assets/Data_Analytics_Job_Simulation.jpg';
import cyberCert from '../assets/Cyber_Job_SImulation.jpg';
import techCert from '../assets/Technology_Job_Simulation.jpg';
import solutionsCert from '../assets/Solutions_Architecture_Job_Simulation.jpg'; 
import accentureCert2 from '../assets/Introduction_to_Technology_Apprenticeship_Job_Simulation.jpg';
import electronicCert from '../assets/Electronic_Arts.png';

// --- 2. DATA ---
const achievements = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure AI",
    issuer: "Oracle",
    date: "2025",
    image: oracleCert,
    description: "Certified AI Foundations Associate. Validated understanding of AI, Machine Learning, and Deep Learning concepts on OCI.",
    link: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC6898666&trackId=OCI25AICFA&key=b90b47ab2e9ce22eedfb07dadc2d04ccf191d9f7" 
  },
  {
    id: 2,
    title: "Developer Job Simulation",
    issuer: "Accenture",
    date: "2025",
    image: accentureCert,
    description: "Completed practical tasks in software architecture, debugging, and testing within a simulated enterprise environment.",
    link: "https://www.theforage.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_DeMADGwQmn7xhjxhp_1753966496247_completion_certificate.pdf"
  },
  {
    id: 3,
    title: "Solutions Architecture",
    issuer: "AWS",
    date: "2025",
    image: solutionsCert,
    description: "Designed scalable, reliable, and cost-efficient cloud solutions. Learned best practices for cloud infrastructure.",
    link: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_DeMADGwQmn7xhjxhp_1753967039456_completion_certificate.pdf"
  },
  {
    id: 4,
    title: "Data Analytics Simulation",
    issuer: "Deloitte",
    date: "2025",
    image: dataCert,
    description: "Analyzed client data sets to uncover actionable insights and visualized findings for stakeholder presentations.",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_DeMADGwQmn7xhjxhp_1753859396311_completion_certificate.pdf"
  },
  {
    id: 5,
    title: "Cybersecurity Simulation",
    issuer: "Clifford Chance",
    date: "2025",
    image: cyberCert,
    description: "Identified security vulnerabilities and recommended protocols to protect sensitive client data.",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_Bd5mbE7DxMJTQc68J_1753365165429_completion_certificate.pdf"
  },
  {
    id: 6,
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    date: "2025",
    image: techCert,
    description: "Gained practical experience in technology consulting and software development lifecycles.",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_DeMADGwQmn7xhjxhp_1753972945983_completion_certificate.pdf"
  },
  {
    id: 7,
    title: "Intro to Tech Apprenticeship",
    issuer: "Accenture",
    date: "2025",
    image: accentureCert2,
    description: "Explored fundamental technology concepts and the role of a technology apprentice in a corporate setting.",
    link: "https://www.theforage.com/completion-certificates/ovyvuqqNRQKBjNxbj/EzKFRQ2oEA87PPjsL_ovyvuqqNRQKBjNxbj_DeMADGwQmn7xhjxhp_1753971104732_completion_certificate.pdf"
  },
  {
    id: 8,
    title: "Software Engineering Job Simulation",
    issuer: "Electronic Arts",
    date: "2025",
    image: electronicCert,
    description: "This program involved hands-on experience in feature proposal writing, game object creation, inventory system improvement, and live bug fixing.",
    link: "https://www.theforage.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_DeMADGwQmn7xhjxhp_1753863516972_completion_certificate.pdf"
  }
];

const Achievements = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      // Scroll by 300px on mobile, 400px on desktop
      const scrollAmount = direction === 'left' ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="achievements" className="py-20 bg-[#0f0715] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- CENTERED HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-2 mb-2">
            <Award className="text-purple-500" size={24} />
            <span className="text-purple-500 font-bold tracking-widest text-sm uppercase">Verified Credentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Certifications</span>
          </h2>
        </motion.div>

        {/* --- CAROUSEL CONTAINER --- */}
        <div className="relative group px-2 md:px-12">
          
          {/* Left Button (Visible ALWAYS now) */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-black/60 hover:bg-purple-600 text-white rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 shadow-lg"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Button (Visible ALWAYS now) */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-black/60 hover:bg-purple-600 text-white rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 shadow-lg"
             aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Area */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-12 px-2 snap-x snap-mandatory hide-scrollbar touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
          >
            {achievements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                // RESPONSIVE WIDTHS:
                className="shrink-0 w-[85vw] sm:w-[350px] md:w-[380px] bg-[#1a1025] rounded-2xl overflow-hidden border border-white/10 shadow-lg flex flex-col group/card snap-center hover:border-purple-500/50 transition-colors duration-300"
              >
                {/* Image */}
                <div className="h-48 sm:h-56 overflow-hidden relative border-b border-white/5">
                  <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-all z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute top-3 right-3 z-20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-white border border-white/10">
                     {item.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <div className="text-xs text-purple-400 font-bold mb-1 uppercase tracking-wide">{item.issuer}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover/card:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Verify Link */}
                  <div className="mt-auto">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold text-sm transition-all border border-white/10"
                    >
                       <ExternalLink size={16} /> Verify Credential
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;