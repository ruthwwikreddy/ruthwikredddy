
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, Sparkles } from 'lucide-react';
import MotionParallax from './MotionParallax';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    // Create animated particles for the background
    const createParticles = () => {
      const particleContainer = document.createElement('div');
      particleContainer.className = 'absolute inset-0 overflow-hidden z-0 pointer-events-none';
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 1;
        particle.className = 'absolute rounded-full bg-portfolio-primary/20';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.2}`;
        particle.style.boxShadow = '0 0 10px rgba(234, 56, 76, 0.3)';
        particle.style.animation = `float-random ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.setProperty('--x1', `${Math.random() * 100 - 50}px`);
        particle.style.setProperty('--y1', `${Math.random() * 100 - 50}px`);
        particle.style.setProperty('--x2', `${Math.random() * 100 - 50}px`);
        particle.style.setProperty('--y2', `${Math.random() * 100 - 50}px`);
        
        particleContainer.appendChild(particle);
      }
      
      heroRef.current?.appendChild(particleContainer);
    };
    
    createParticles();
    
    return () => {
      const particles = heroRef.current?.querySelector('.absolute.inset-0.overflow-hidden');
      if (particles) {
        heroRef.current?.removeChild(particles);
      }
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-16 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,56,76,0.15)_0%,rgba(0,0,0,0)_60%)]"></div>
      
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#ea384c]/50 to-transparent top-[20%] animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#ea384c]/30 to-transparent top-[50%] animate-[pulse_5s_ease-in-out_infinite_1s]"></div>
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#ea384c]/20 to-transparent top-[80%] animate-[pulse_4.5s_ease-in-out_infinite_0.5s]"></div>
        
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#ea384c]/50 to-transparent left-[20%] animate-[pulse_4.5s_ease-in-out_infinite]"></div>
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#ea384c]/30 to-transparent left-[50%] animate-[pulse_5s_ease-in-out_infinite_0.7s]"></div>
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#ea384c]/20 to-transparent left-[80%] animate-[pulse_4s_ease-in-out_infinite_1.5s]"></div>
      </div>

      {/* Animated noise overlay */}
      <div className="absolute inset-0 opacity-5 noise-animation"></div>

      <div className="container mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="mb-4 flex items-center">
              <span className="text-sm text-[#ea384c] mr-2 animate-pulse-soft">
                <Sparkles className="inline-block w-4 h-4 mr-1" />
                Tech Enthusiast & Innovator
              </span>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#ea384c]/80 to-transparent"></div>
            </div>
            
            <MotionParallax speed={0.03} className="mb-4">
              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                Ruthwik <span className="neon-text animate-text-flicker">Reddy</span>
              </h1>
            </MotionParallax>
            
            <p className="text-xl text-gray-400 mb-8 border-l-2 border-[#ea384c] pl-4 glitch-effect">
              Student • Innovator • Tech Enthusiast
            </p>

            <div className="space-y-4 mb-8 backdrop-blur-sm bg-black/30 p-5 rounded-lg border border-[#ea384c]/10 hover:border-[#ea384c]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,56,76,0.2)] force-field">
              <div className="flex items-center group">
                <Mail className="w-5 h-5 text-[#ea384c] mr-3 group-hover:animate-pulse" />
                <a href="mailto:akkenapally.reddy@gmail.com" 
                   className="text-gray-400 hover:text-white hover:underline transition-colors neo-trail" 
                   data-cursor-text="Email Me">
                  akkenapally.reddy@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="w-5 h-5 text-[#ea384c] mr-3 group-hover:animate-pulse" />
                <a href="tel:+919989306597" 
                   className="text-gray-400 hover:text-white hover:underline transition-colors neo-trail"
                   data-cursor-text="Call Me">
                  +91 9989306597
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-5 h-5 text-[#ea384c] mr-3 group-hover:animate-pulse" />
                <span className="text-gray-400">Hyderabad, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 mb-8">
              <a href="#contact" 
                 className="btn-primary magnetic-effect" 
                 data-cursor-text="Let's Talk">
                Get In Touch
              </a>
              <a href="#projects" 
                 className="btn-outline magnetic-effect" 
                 data-cursor-text="See Work">
                View Projects
              </a>
            </div>

            <div className="flex space-x-5">
              <a href="https://www.linkedin.com/in/ruthwikredd/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white opacity-70 hover:opacity-100 hover:text-[#ea384c] transition-all duration-300 hover:scale-110 transform lightning-effect"
                 data-cursor-text="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/ruthwikreddy" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white opacity-70 hover:opacity-100 hover:text-[#ea384c] transition-all duration-300 hover:scale-110 transform lightning-effect"
                 data-cursor-text="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ruthwwikreddy/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white opacity-70 hover:opacity-100 hover:text-[#ea384c] transition-all duration-300 hover:scale-110 transform lightning-effect"
                 data-cursor-text="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://github.com/ruthwikredd" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white opacity-70 hover:opacity-100 hover:text-[#ea384c] transition-all duration-300 hover:scale-110 transform lightning-effect"
                 data-cursor-text="GitHub">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <MotionParallax speed={0.05} className="relative animate-float">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#ea384c] to-black opacity-30 blur-xl animate-pulse-soft"></div>
              <div className="absolute inset-0 rounded-full border border-[#ea384c]/30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-[#ea384c] shadow-[0_0_30px_rgba(234,56,76,0.5)] circle-shine">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500" 
                  alt="Ruthwik Reddy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-cursor-text="That's Me!"
                />
                
                {/* Profile image glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/70 opacity-60"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,56,76,0.3)_0%,rgba(0,0,0,0)_70%)] animate-pulse-soft"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#ea384c]/20 blur-lg animate-pulse-scale"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-[#ea384c]/20 blur-lg animate-pulse-scale" style={{animationDelay: '1s'}}></div>
            </MotionParallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
