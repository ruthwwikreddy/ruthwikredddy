
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Hero = () => {
  // Function to handle smooth scrolling for buttons
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,123,255,0.15)_0%,rgba(0,0,0,0)_60%)]"></div>
      
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/50 to-transparent top-[20%] animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent top-[50%] animate-[pulse_5s_ease-in-out_infinite_1s]"></div>
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/20 to-transparent top-[80%] animate-[pulse_4.5s_ease-in-out_infinite_0.5s]"></div>
        
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/50 to-transparent left-[20%] animate-[pulse_4.5s_ease-in-out_infinite]"></div>
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/30 to-transparent left-[50%] animate-[pulse_5s_ease-in-out_infinite_0.7s]"></div>
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/20 to-transparent left-[80%] animate-[pulse_4s_ease-in-out_infinite_1.5s]"></div>
      </div>

      <div className="container mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="neon-text animate-text-flicker">Ruthwik Reddy</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 border-l-2 border-[#007BFF] pl-4">
              Student • Innovator • Tech Enthusiast
            </p>

            <div className="space-y-4 mb-8 backdrop-blur-sm bg-black/30 p-5 rounded-lg border border-[#007BFF]/10 hover:border-[#007BFF]/30 transition-all duration-300">
              <div className="flex items-center group">
                <Mail className="w-5 h-5 text-[#007BFF] mr-3 group-hover:animate-pulse" />
                <a href="mailto:akkenapally.reddy@gmail.com" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  akkenapally.reddy@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="w-5 h-5 text-[#007BFF] mr-3 group-hover:animate-pulse" />
                <a href="tel:+919989306597" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  +91 9989306597
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-5 h-5 text-[#007BFF] mr-3 group-hover:animate-pulse" />
                <span className="text-gray-400">Hyderabad, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 mb-8">
              <a 
                href="#contact" 
                className="btn-primary"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Get In Touch
              </a>
              <a 
                href="#links" 
                className="btn-outline"
                onClick={(e) => handleSmoothScroll(e, '#links')}
              >
                View Projects
              </a>
            </div>

            <div className="flex space-x-5">
              <a href="https://www.linkedin.com/in/ruthwwikreddy/" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#007BFF] transition-all duration-300 hover:scale-110 transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/ruthwikreddy" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#007BFF] transition-all duration-300 hover:scale-110 transform">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ruthwwikreddy/" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#007BFF] transition-all duration-300 hover:scale-110 transform">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://github.com/ruthwwikreddy" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#007BFF] transition-all duration-300 hover:scale-110 transform">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <div className="relative animate-float">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#007BFF] to-black opacity-30 blur-xl"></div>
              <div className="absolute inset-0 rounded-full border border-[#007BFF]/30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-[#007BFF] shadow-[0_0_30px_rgba(0,123,255,0.5)]">
                <img 
                  src="./assets/images/logo.jpg" 
                  alt="Ruthwik Reddy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
