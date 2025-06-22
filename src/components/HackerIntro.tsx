import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Zap } from 'lucide-react';

interface HackerIntroProps {
  onComplete: () => void;
}

const HackerIntro: React.FC<HackerIntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const steps = [
    'Initializing security protocols...',
    'Locating nearest firewall......',
    'Politely asking it to move... [DENIED]',
    'Decrypting confidential files... [DONE]',
    'Pretending to be a hacker... [Welcome]'
  ];

  useEffect(() => {
    if (step < steps.length) {
      const currentText = steps[step];
      let i = 0;
      const timer = setInterval(() => {
        if (i < currentText.length) {
          setText(currentText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            if (step === steps.length - 1) {
              setTimeout(onComplete, 1500);
            } else {
              setStep(step + 1);
              setText('');
            }
          }, 800);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [step, onComplete]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      >
        {/* Matrix Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyber-green opacity-20 text-sm font-mono animate-matrix-rain"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {Array.from({ length: 50 }, () => 
                String.fromCharCode(33 + Math.floor(Math.random() * 94))
              ).join('')}
            </div>
          ))}
        </div>

        {/* Central Console */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 bg-dark-surface/90 border border-cyber-green/30 rounded-lg p-8 backdrop-blur-sm max-w-2xl w-full mx-4"
        >
          <div className="flex items-center mb-6">
            <Terminal className="text-cyber-green mr-3" size={24} />
            <span className="text-cyber-green font-mono text-lg">CYBER_TERMINAL v2.1</span>
          </div>

          <div className="font-mono text-cyber-green text-lg mb-4">
            <span className="text-gray-400">root@kali:~$ </span>
            {text}
            {showCursor && <span className="bg-cyber-green w-2 h-6 inline-block ml-1 animate-blink"></span>}
          </div>

          <div className="flex items-center justify-center mt-8">
            <Zap className="text-cyber-blue animate-pulse" size={32} />
          </div>
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,65,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,65,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HackerIntro;