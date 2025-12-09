import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0f0715] relative">
      {/* Decorative Blur Effect */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-gray-400">Have a project in mind? Let's build something together.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 bg-purple-900/20 md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="text-purple-400" size={20} />
                  <span>alex@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="text-purple-400" size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="text-purple-400" size={20} />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0">
               <p className="text-gray-400 text-sm">© 2025 Alex Dev.</p>
            </div>
          </div>
            
          <form className="p-8 md:w-1/2">
            <div className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-[#0f0715] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-colors" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-[#0f0715] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-colors" />
              <textarea rows="4" placeholder="Message" className="w-full px-4 py-3 bg-[#0f0715] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-colors"></textarea>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/40 transition-all transform hover:-translate-y-0.5">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;