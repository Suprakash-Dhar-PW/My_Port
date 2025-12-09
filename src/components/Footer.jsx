import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0715] text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-xl">Portfolio.</span>
        </div>
        
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors"><FaGithub size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors"><FaLinkedin size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors"><FaTwitter size={24} /></a>
        </div>

        <div className="text-gray-500 text-sm">
          &copy; 2025 Alex Dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;