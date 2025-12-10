import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast'; // Optional: for nice alerts (npm install react-hot-toast)

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_g7xf1an',    
      'template_q4a9lcz',   
      formRef.current,
      'wK9oUw_NEGTGCyhSM'     
    )
    .then(() => {
        setLoading(false);
        
        toast.success("Message sent successfully!", {
          style: {
            background: '#1a1025',
            color: '#fff',
            border: '1px solid rgba(147, 51, 234, 0.3)',
          },
          iconTheme: {
            primary: '#a855f7',
            secondary: '#fff',
          },
        });
        
        e.target.reset(); 
    }, (error) => {
        setLoading(false);
        console.error("EmailJS Error:", error.text); // <--- Good practice to log the specific error
        
        toast.error("Something went wrong. Try again.", {
          style: {
            background: '#1a1025',
            color: '#fff',
            border: '1px solid rgba(239, 68, 68, 0.3)',
          },
        });
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0f0715] relative overflow-hidden">
      
      {/* ADD THIS TOASTER COMPONENT HERE */}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            background: '#0f0715',
            color: '#fff',
            border: '1px solid #333',
            padding: '16px',
          },
        }}
      />

      {/* Background Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Email Me</h3>
                <p className="text-gray-400">dharsuprakash02@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Location</h3>
                <p className="text-gray-400">Bangalore Karnataka </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Phone</h3>
                <p className="text-gray-400">+91 8837088528</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="from_name" // MUST match EmailJS template variable
                  required
                  className="w-full bg-[#0a0510] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="from_email" // MUST match EmailJS template variable
                  required
                  className="w-full bg-[#0a0510] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message" // MUST match EmailJS template variable
                  rows="4"
                  required
                  className="w-full bg-[#0a0510] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>Sending... <Loader2 className="animate-spin" size={20} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;