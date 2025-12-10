import React from 'react';
import Navbar from './components/Navbar';

// --- CHANGE 1: Use the new HeroAbout component if you created it ---
import HeroAbout from './components/HeroAbout'; 
// If you overwrote Hero.jsx instead, keep: import Hero from './components/Hero';

import Achievements from './components/Achievements'; 
import TechStack from './components/TechStack';
import Education from './components/Education'; // --- CHANGE 2: Renamed for clarity
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-[#0f0715] min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />
      
      {/* Use the new Hero section */}
      <HeroAbout /> 
      {/* Or <Hero /> if you kept the old name */}
      
      <TechStack />
      
      {/* This matches your file 'Education.jsx' and Navbar link '#education' */}
      <Education />
      
      <Projects />
      
      <Achievements />
      
      <Contact />
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;