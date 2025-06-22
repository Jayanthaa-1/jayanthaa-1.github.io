import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="text-cyber-green mr-3" size={24} />
            <span className="text-white font-bold text-lg">Jayanthaa </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 Jayanthaa. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Securing the digital world, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;