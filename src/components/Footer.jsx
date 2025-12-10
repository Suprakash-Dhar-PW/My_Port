import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0715] text-white pt-12 pb-8 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Top Section: 3 Columns --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Suprakash Dhar
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building digital experiences with code and creativity. 
              Always learning, always creating.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#tech" className="hover:text-purple-400 transition-colors">Tech Stack</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Connect</h4>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
                <FaEnvelope className="text-purple-500" />
                <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
                    dharsuprakash02@gmail.com
                </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com/Suprakash-Dhar-PW" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-purple-400 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/suprakash-dhar-504032334/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.instagram.com/encoure05/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-pink-500 transition-all">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="border-t border-white/10 my-8"></div>

        {/* --- Bottom Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Suprakash Dhar. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <span className="text-red-500 mx-1">❤</span>by Suprakash
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;