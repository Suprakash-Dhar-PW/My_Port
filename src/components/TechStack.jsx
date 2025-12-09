import React, { useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, 
  FaGitAlt, FaDatabase, FaBrain, FaTerminal, FaLeaf 
} from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiCplusplus, SiC } from 'react-icons/si';

const innerCircle = [
  { name: "C Language", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
  { name: "Terminal", icon: <FaTerminal className="text-gray-300" /> },
];

const outerCircle = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "MongoDB", icon: <FaLeaf className="text-green-500" /> },
  { name: "Database", icon: <FaDatabase className="text-yellow-600" /> },
  { name: "AI/ML", icon: <FaBrain className="text-purple-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const TechStack = () => {
  const [isInnerHovered, setIsInnerHovered] = useState(false);
  const [isOuterHovered, setIsOuterHovered] = useState(false);

  // Shared CSS for the icons
  const itemClass = "relative w-12 h-12 bg-[#0f0715] border border-purple-500/30 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-purple-900/20 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer pointer-events-auto";

  return (
    <section id='techstack' className="py-24 bg-[#0f0715] overflow-hidden flex flex-col items-center justify-center min-h-[600px] relative">
      
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="absolute top-10 z-10">
        <h2 className="text-3xl font-bold text-white text-center">Tech Universe</h2>
        <p className="text-gray-400 text-sm mt-2 text-center">Hover over a planet to explore</p>
      </div>

      <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[500px] md:h-[500px]">

        {/* --- THE CORE --- */}
        <div className="absolute z-20 w-24 h-24 bg-purple-600/20 backdrop-blur-md rounded-full flex items-center justify-center border border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]">
          <span className="text-white font-bold text-lg">CORE</span>
        </div>

        {/* --- INNER RING --- */}
        <div 
          // 1. ADDED pointer-events-none: Allows mouse to pass through the empty parts of this container
          className={`absolute w-[200px] h-[200px] rounded-full border border-white/5 pointer-events-none ${isInnerHovered ? 'paused' : ''}`}
          style={{ animation: 'orbit 20s linear infinite' }}
        >
          {innerCircle.map((skill, index) => {
            const angle = (index / innerCircle.length) * 360;
            const radius = 100;
            
            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 group"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` 
                }}
              >
                {/* 2. ADDED Events Here: We detect hover on the icon specifically */}
                <div
                  className={`${itemClass} ${isInnerHovered ? 'paused' : ''}`}
                  onMouseEnter={() => setIsInnerHovered(true)}
                  onMouseLeave={() => setIsInnerHovered(false)}
                  style={{ 
                    marginLeft: '-24px', 
                    marginTop: '-24px',
                    animation: 'counter-orbit 20s linear infinite' 
                  }}
                >
                  {skill.icon}

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                     <div className="bg-purple-900/40 backdrop-blur-md border border-purple-500/30 text-purple-100 text-xs font-semibold px-3 py-1.5 rounded-full shadow-xl">
                        {skill.name}
                     </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- OUTER RING --- */}
        <div 
          // 1. ADDED pointer-events-none: Prevents this large box from blocking the inner ring
          className={`absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 pointer-events-none ${isOuterHovered ? 'paused' : ''}`}
          style={{ animation: 'counter-orbit 35s linear infinite' }}
        >
          {outerCircle.map((skill, index) => {
            const angle = (index / outerCircle.length) * 360;
            
            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 group"
                style={{
                    transform: `rotate(${angle}deg) translate(170px) rotate(-${angle}deg)`
                }}
              >
                {/* 2. ADDED Events Here */}
                <div
                   className={`${itemClass} ${isOuterHovered ? 'paused' : ''}`}
                   onMouseEnter={() => setIsOuterHovered(true)}
                   onMouseLeave={() => setIsOuterHovered(false)}
                   style={{ 
                     marginLeft: '-24px', 
                     marginTop: '-24px',
                     animation: 'orbit 35s linear infinite' 
                   }}
                >
                  {skill.icon}

                   {/* Tooltip */}
                   <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                     <div className="bg-purple-900/40 backdrop-blur-md border border-purple-500/30 text-purple-100 text-xs font-semibold px-3 py-1.5 rounded-full shadow-xl">
                        {skill.name}
                     </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-white/10 pointer-events-none"></div>
        <div className="absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] rounded-full border border-dashed border-white/10 pointer-events-none"></div>

      </div>
    </section>
  );
};

export default TechStack; 