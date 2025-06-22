import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Shield, Bug, Network, Lock } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Network Vulnerability Scanner',
      description: 'Automated network scanning tool built with Python that identifies open ports, services, and potential vulnerabilities across network ranges.',
      technologies: ['Python', 'Nmap', 'Socket Programming', 'JSON'],
      icon: Network,
      gradient: 'from-cyber-green to-green-400',
      features: ['Port scanning', 'Service detection', 'Vulnerability assessment', 'Report generation']
    },
    {
      title: 'Web Application Security Tester',
      description: 'Comprehensive web app security testing framework that checks for common vulnerabilities like XSS, SQL injection, and authentication flaws.',
      technologies: ['Python', 'Selenium', 'Requests', 'BeautifulSoup'],
      icon: Bug,
      gradient: 'from-cyber-blue to-blue-400',
      features: ['XSS detection', 'SQL injection testing', 'Authentication bypass', 'CSRF testing']
    },
    {
      title: 'Encrypted Communication System',
      description: 'Secure messaging application with end-to-end encryption, perfect forward secrecy, and secure key exchange protocols.',
      technologies: ['Python', 'Cryptography', 'Socket.io', 'React'],
      icon: Lock,
      gradient: 'from-purple-500 to-pink-500',
      features: ['AES encryption', 'RSA key exchange', 'Perfect forward secrecy', 'Secure deletion']
    },
    {
      title: 'Penetration Testing Toolkit',
      description: 'Custom collection of penetration testing scripts and tools for reconnaissance, enumeration, and exploitation phases.',
      technologies: ['Bash', 'Python', 'PowerShell', 'Metasploit'],
      icon: Shield,
      gradient: 'from-red-500 to-orange-500',
      features: ['Automated recon', 'Payload generation', 'Post-exploitation', 'Report automation']
    }
  ];

  return (
    <section className="py-20 bg-dark-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, #00ff41 49%, #00ff41 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, #0099ff 49%, #0099ff 51%, transparent 51%)
          `,
          backgroundSize: '20px 20px'
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
            Security Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing practical cybersecurity solutions and defensive tools
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-dark-bg/50 backdrop-blur-sm border border-dark-border rounded-xl p-6 hover:border-cyber-green/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Project Header */}
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} mr-4`}>
                  <project.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-green transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-dark-surface border border-cyber-green/30 rounded-lg hover:border-cyber-green hover:bg-cyber-green/10 transition-all">
                    <Github size={16} className="text-cyber-green" />
                  </button>
                  <button className="p-2 bg-dark-surface border border-cyber-blue/30 rounded-lg hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all">
                    <ExternalLink size={16} className="text-cyber-blue" />
                  </button>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1 h-1 bg-cyber-green rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-dark-surface border border-cyber-green/20 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyber-green to-cyber-blue text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-green/25 transition-all duration-300 transform hover:scale-105">
            View All Projects on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;