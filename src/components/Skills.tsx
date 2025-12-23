import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCert, setActiveCert] = useState<string | null>(null);

  const certifications = [
    {
      name: 'letsDefend',
      logo: '/certifications/logos/letsdefend.webp',
      certificate: '/certifications/certificates/letsdefend.jpeg',
    },
    {
      name: 'Splunk',
      logo: '/certifications/logos/splunk.png',
      certificate: '/certifications/certificates/splunk.jpeg',
    },
    {
      name: 'Google Cybersecurity',
      logo: '/certifications/logos/google.logo.png',
      certificate: '/certifications/certificates/google.jpeg',
    },
  ];

  return (
    <section className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyber-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Click a certification to view the full credential
          </p>
        </motion.div>

        {/* FIXED Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveCert(cert.certificate)}
              className="
                w-72 h-56
                bg-dark-surface/60
                border border-dark-border
                rounded-2xl
                flex flex-col items-center justify-center
                cursor-pointer
                hover:border-cyber-green
                hover:scale-105
                transition-all duration-300
              "
            >
              {/* Logo Container */}
              <div className="h-24 flex items-center justify-center mb-4">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="max-h-20 max-w-[160px] object-contain"
                />
              </div>

              {/* Label */}
              <p className="text-gray-300 text-sm font-medium text-center px-4">
                {cert.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setActiveCert(null)}
          >
            <motion.img
              src={activeCert}
              alt="Certificate"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="max-w-full max-h-[90vh] rounded-lg border border-cyber-green shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
