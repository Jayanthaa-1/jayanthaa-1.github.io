import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Code, Shield, Target } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Shield, label: 'Security Tools', value: '20+' },
    { icon: Target, label: 'Vulnerabilities Found', value: '50+' },
    { icon: User, label: 'Certifications', value: '5+' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00ff41 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Defending the Digital Frontier
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate cybersecurity professional with a strong foundation in ethical hacking, 
              network security, and threat analysis. My journey began with a fascination for understanding 
              how systems work and how to protect them from malicious actors.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With hands-on experience in penetration testing, vulnerability assessment, and security 
              automation, I'm committed to staying ahead of emerging threats and contributing to a safer 
              digital world.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-dark-bg/50 p-4 rounded-lg border border-dark-border">
                <h4 className="text-cyber-green font-semibold mb-2">Education</h4>
                <p className="text-gray-300 text-sm">Electrical Engineering <br /> Cybersecurity Focus practice </p>
              </div>
              <div className="bg-dark-bg/50 p-4 rounded-lg border border-dark-border">
                <h4 className="text-cyber-blue font-semibold mb-2">Location</h4>
                <p className="text-gray-300 text-sm">Erode , TN<br />Open to Work</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-dark-bg to-dark-surface p-6 rounded-xl border border-dark-border hover:border-cyber-green/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-cyber-green/10 rounded-lg mb-4 group-hover:bg-cyber-green/20 transition-colors">
                  <stat.icon className="text-cyber-green" size={24} />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;