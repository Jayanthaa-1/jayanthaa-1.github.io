import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HackerIntro from './components/HackerIntro';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-cyber-green text-xl font-mono">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <HackerIntro key="intro" onComplete={handleIntroComplete} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;