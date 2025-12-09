import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    role: "Residential Programme (2nd Year)",
    school: "Physics Wallah Institute of Innovation (IOI)",
    location: "Bangalore, Karnataka",
    period: "Present",
    description: "Currently upskilling in deep tech and computer science as a 2nd-year student. Focusing on Full Stack Development and Innovation."
  },
  {
    role: "BSC Degree",
    school: "BITS Pilani",
    location: "Remote / Parallel Degree",
    period: "Present",
    description: "Pursuing a Bachelor of Science degree alongside my residential programme to strengthen theoretical foundations."
  },
  {
    role: "Higher Secondary (Class 11-12 | CBSE)",
    school: "Sri Sri Ravishankar Vidya Mandir",
    location: "Agartala, Tripura",
    period: "Completed",
    description: "Achieved 80% in 12th Boards. Cracked JEE Mains with 90 Percentile in the first attempt."
  },
  {
    role: "Secondary Education (Nursery - Class 10 | ICSE)",
    school: "Holy Cross School",
    location: "Agartala, Tripura",
    period: "Completed",
    description: "Built my academic foundation here from Nursery to Class 10. Graduated with 90% in 10th Boards."
  }
];

const Education = () => {
  return (
    <section id="experience" className="py-20 bg-[#0f0715] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16 text-white"
        >
          Education & <span className="text-purple-500">Milestones</span>
        </motion.h2>

        <div className="space-y-12 relative border-l border-purple-500/20 ml-4 md:ml-0">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 md:left-1/2 md:-ml-[5px] w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              
              <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full`}>
                <div className="md:w-5/12"></div> {/* Spacer for alignment */}
                
                <div className="md:w-5/12 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:border-purple-500/30 transition-all hover:bg-white/10 group">
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <GraduationCap size={20} />
                    <span className="font-bold">{edu.role}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">{edu.school}</h3>
                  
                  <div className="flex flex-col gap-1 text-gray-400 text-xs mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={12} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;