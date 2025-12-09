import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define links in an array for easy management
  const navLinks = ['Home', 'Education', 'TechStack', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-[#0f0715]/80 backdrop-blur-md z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* --- Logo --- */}
          <div className="flex-shrink-0 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer">
            Suprakash Dhar
          </div>
          
          {/* --- Desktop Menu --- */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-baseline space-x-6">
              {navLinks.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5 relative group"
                >
                  {item}
                  {/* Optional: Subtle underline animation */}
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full opacity-50"></span>
                </a>
              ))}
            </div>
          </div>

          {/* --- Social Icons (Top Right) --- */}
          <div className="hidden md:flex items-center space-x-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
                <FaGithub className="text-gray-400 group-hover:text-white transition-colors transform group-hover:scale-110" size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
                <FaLinkedin className="text-gray-400 group-hover:text-blue-400 transition-colors transform group-hover:scale-110" size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
                <FaInstagram className="text-gray-400 group-hover:text-pink-500 transition-colors transform group-hover:scale-110" size={20} />
            </a>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f0715] border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-3 rounded-md text-base font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              
              {/* Mobile Social Links Row */}
              <div className="flex gap-6 px-3 py-4 border-t border-white/10 mt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={22} className="text-gray-400" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} className="text-gray-400" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={22} className="text-gray-400" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;