import React from 'react';
import Navbar from './components/Navbar';
import HeroAbout from './components/HeroAbout'; 
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
      <HeroAbout /> 
      <TechStack />
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
