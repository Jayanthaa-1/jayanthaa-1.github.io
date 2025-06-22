import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jayanthst@outlook.com',
      link: 'mailto:jayanthst@outlook.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9688008808',
      link: 'tel:+919688008808'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Erode, TN-India',
      link: 'https://www.google.com/maps/place/Erode,+Tamil+Nadu/@11.3467074,77.6741971,13755m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba96f46762f4671:0xd97da6e3d9c7f75e!8m2!3d11.3410364!4d77.7171642!16zL20vMDQ3N2hk?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Jayanthaa-1', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/jayanthaast/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl"></div>
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I’m geared up to secure, scan, and safeguard. Let’s chat before your firewall starts crying
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always interested in discussing cybersecurity opportunities, 
                collaborating on projects, or simply connecting with fellow security enthusiasts.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center p-4 bg-dark-surface/50 border border-dark-border rounded-lg hover:border-cyber-green/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-cyber-green/10 rounded-lg mr-4 group-hover:bg-cyber-green/20 transition-colors">
                    <info.icon className="text-cyber-green" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-surface border border-dark-border rounded-lg hover:border-cyber-green/50 hover:bg-cyber-green/10 transition-all duration-300 group"
                  >
                    <social.icon className="text-gray-400 group-hover:text-cyber-green transition-colors" size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-surface/50 border border-dark-border rounded-xl p-8 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-cyber-green focus:outline-none text-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-cyber-green focus:outline-none text-white transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-cyber-green focus:outline-none text-white transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-cyber-green focus:outline-none text-white transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyber-green to-cyber-blue text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-green/25 transition-all duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;