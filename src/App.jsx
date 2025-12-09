import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
// OR import HeroAbout from './components/HeroAbout'; // If you are using the merged version we made earlier
import TechStack from './components/TechStack';
import Experience from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <--- 1. Import this

function App() {
  return (
    <div className="bg-[#0f0715] min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />
      
      {/* If you are using the merged Hero+About we made, use <HeroAbout /> here instead of <Hero /> */}
      <Hero />
      
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

      {/* 2. Add the button here at the bottom */}
      <ScrollToTop />
    </div>
  );
}

export default App;