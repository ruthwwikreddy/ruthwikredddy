
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://www.linkedin.com/in/ruthwikredd/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#032950] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/ruthwikreddy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#032950] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/ruthwwikreddy/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#032950] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://github.com/ruthwikredd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#032950] transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p>© {currentYear} Ruthwik Reddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
