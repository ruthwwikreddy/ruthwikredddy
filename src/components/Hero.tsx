
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-black overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,56,76,0.2)_0%,rgba(0,0,0,0)_70%)]"></div>
      
      {/* More dynamic animated background lines */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#ea384c]/50 to-transparent top-[20%] animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#ea384c]/30 to-transparent top-[40%] animate-[pulse_5s_ease-in-out_infinite_1s]"></div>
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#ea384c]/20 to-transparent top-[60%] animate-[pulse_4.5s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#ea384c]/40 to-transparent top-[80%] animate-[pulse_3.5s_ease-in-out_infinite_1.5s]"></div>
        
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#ea384c]/50 to-transparent left-[20%] animate-[pulse_4.5s_ease-in-out_infinite]"></div>
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#ea384c]/30 to-transparent left-[40%] animate-[pulse_5s_ease-in-out_infinite_0.7s]"></div>
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#ea384c]/40 to-transparent left-[60%] animate-[pulse_4s_ease-in-out_infinite_1.2s]"></div>
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#ea384c]/20 to-transparent left-[80%] animate-[pulse_4s_ease-in-out_infinite_1.5s]"></div>
      </div>

      <div className="container mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="neon-text animate-text-flicker">Ruthwik Reddy</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8 border-l-2 border-[#ea384c] pl-4">
              Student • Innovator • Tech Enthusiast
            </p>

            <div className="space-y-4 mb-8 backdrop-blur-sm bg-black/40 p-6 rounded-lg border border-[#ea384c]/20 hover:border-[#ea384c]/40 transition-all duration-500 shadow-neon-glow">
              <div className="flex items-center group">
                <Mail className="w-5 h-5 text-[#ea384c] mr-3 group-hover:animate-pulse" />
                <a href="mailto:akkenapally.reddy@gmail.com" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  akkenapally.reddy@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="w-5 h-5 text-[#ea384c] mr-3 group-hover:animate-pulse" />
                <a href="tel:+919989306597" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  +91 9989306597
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-5 h-5 text-[#ea384c] mr-3 group-hover:animate-pulse" />
                <span className="text-gray-300">Hyderabad, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 mb-12">
              <a href="#contact" className="btn-primary">Get In Touch</a>
              <a href="#projects" className="btn-outline">View Projects</a>
            </div>

            <div className="flex space-x-5">
              <a href="https://www.linkedin.com/in/ruthwikredd/" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#ea384c] transition-all duration-300 hover:scale-125 transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/ruthwikreddy" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#ea384c] transition-all duration-300 hover:scale-125 transform">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ruthwwikreddy/" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#ea384c] transition-all duration-300 hover:scale-125 transform">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://github.com/ruthwikredd" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#ea384c] transition-all duration-300 hover:scale-125 transform">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <div className="relative animate-float">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#ea384c] to-black opacity-40 blur-xl"></div>
              <div className="absolute inset-0 rounded-full border border-[#ea384c]/30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-[#ea384c] shadow-[0_0_30px_rgba(234,56,76,0.5)]">
                <img 
                  src=".\assets\images\logo.jpg" 
                  alt="Ruthwik Reddy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-all">
                  <span className="text-sm mb-1">Scroll Down</span>
                  <ChevronDown className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Particle effects */}
      <div className="absolute bottom-10 left-10 particle w-3 h-3 opacity-30" style={{"--x1": "70px", "--y1": "-40px", "--x2": "-50px", "--y2": "60px"} as React.CSSProperties}></div>
      <div className="absolute top-1/4 right-1/4 particle w-2 h-2 opacity-40" style={{"--x1": "-30px", "--y1": "50px", "--x2": "40px", "--y2": "-30px"} as React.CSSProperties}></div>
    </section>
  );
};

export default Hero;
