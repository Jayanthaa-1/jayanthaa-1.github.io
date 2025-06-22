import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Penetration Testing',
      skills: [
        { name: 'Metasploit', level: 85 },
        { name: 'Burp Suite', level: 90 },
        { name: 'Nmap', level: 95 },
        { name: 'Wireshark', level: 80 },
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 75 },
        { name: 'Bash/PowerShell', level: 85 },
        { name: 'SQL', level: 80 },
      ]
    },
    {
      title: 'Security Frameworks',
      skills: [
        { name: 'OWASP', level: 85 },
        { name: 'NIST', level: 75 },
        { name: 'ISO 27001', level: 70 },
        { name: 'MITRE ATT&CK', level: 80 },
      ]
    }
  ];

  const tools = [
    'Kali Linux', 'Nessus', 'OpenVAS', 'John the Ripper', 'Hashcat',
    'Aircrack-ng', 'Gobuster', 'SQLmap', 'Nikto', 'OWASP ZAP'
  ];

  return (
    <section className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyber-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl"></div>
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
            Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in cutting-edge cybersecurity tools and frameworks
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-dark-surface/50 p-8 rounded-xl border border-dark-border backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyber-green">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-bg rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-cyber-green to-cyber-blue h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.2 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Security Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="px-4 py-2 bg-dark-surface border border-cyber-green/30 rounded-full text-gray-300 hover:border-cyber-green hover:text-cyber-green transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;