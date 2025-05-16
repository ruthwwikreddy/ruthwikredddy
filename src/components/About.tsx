
import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black relative overflow-hidden px-4 sm:px-5">
      {/* Background grid effect - reduced opacity on mobile */}
      <div className="absolute inset-0 bg-grid opacity-0 sm:opacity-5 md:opacity-10 lg:opacity-20 pointer-events-none"></div>
      
      {/* Enhanced animated background lines - reduced on mobile */}
      <div className="absolute inset-0 opacity-0 sm:opacity-5 md:opacity-10 lg:opacity-20 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={`h-line-${i}`}
            className="absolute h-[0.5px] md:h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/50 to-transparent"
            initial={{ y: `${(i + 1) * 25}%` }}
            animate={{
              y: `${(i + 1) * 25}%`,
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={`v-line-${i}`}
            className="absolute w-[0.5px] md:w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/50 to-transparent"
            initial={{ x: `${(i + 1) * 25}%` }}
            animate={{
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7
            }}
          />
        ))}
      </div>
      
      {/* Reduced particles on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(1)].map((_, i) => (
          <motion.div 
            key={i}
            className="particle absolute hidden md:block"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              position: 'absolute',
              borderRadius: '50%',
              backgroundColor: 'white'
            } as React.CSSProperties}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10 px-0 sm:px-3 md:px-4">
        <RevealOnScroll>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8" id="about-title">
            About Me
          </h2>
        </RevealOnScroll>
        
        <div className="mt-6 sm:mt-8 md:mt-10 max-w-6xl mx-auto">
          <RevealOnScroll direction="left" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-4 md:space-y-6">
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#007BFF] mb-2 xs:mb-3 sm:mb-4 leading-tight">
                  About Me
                </p>
                
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <p className="text-foreground leading-relaxed group">
                    <span className="text-sm sm:text-base md:text-lg font-medium group-hover:text-[#007BFF] transition-colors duration-200 leading-relaxed">
                      🏆 Recognized at Youth Ideathon, Atal Marathon & Indian Future Tycoon — but for me, it's not about awards.
                    </span>
                  </p>
                  <p className="text-foreground leading-relaxed group">
                    <span className="text-sm sm:text-base md:text-lg font-medium group-hover:text-[#007BFF] transition-colors duration-200 leading-relaxed">
                      It's about bringing ideas to life.
                    </span>
                  </p>
                  
                  <div className="space-y-1.5 sm:space-y-2 -ml-0.5">
                    <p className="flex items-center text-foreground">
                      <span className="mr-2">⚙️</span>
                      <span>been building since class 6</span>
                    </p>
                    <p className="flex items-center text-foreground">
                      <span className="mr-2">🤖</span>
                      <span>love solving real problems</span>
                    </p>
                    <p className="flex items-start text-foreground">
                      <span className="mr-2 mt-1">🏆</span>
                      <span>won Youth Ideathon, Atal Marathon, IFT. but not about prizes. i just like shipping things.</span>
                    </p>
                  </div>
                  
                  <p className="text-foreground italic text-xs sm:text-sm mt-4 sm:mt-6 opacity-80 max-w-[95%] sm:max-w-full">
                    "most things i built started with: 'what if...'"
                  </p>
                  
                  <div className="mt-4 sm:mt-6">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 -mx-0.5">
                      {['💡 Innovation', '🤖 Robotics', '🧠 Problem Solving', '👥 Leadership', '🧑‍💻 Programming'].map((skill, index) => (
                        <motion.span 
                          key={index}
                          className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-black/80 text-foreground/90 rounded-full text-[11px] xs:text-xs sm:text-sm border border-[#007BFF]/30 hover:bg-[#007BFF]/10 hover:text-white transition-all duration-200 active:scale-95 shadow-[0_0_6px_rgba(0,123,255,0.1)] m-0.5 transform hover:scale-105 active:scale-95"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: 0.5 + (index * 0.1),
                            duration: 0.5
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            style: {
                              boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)"
                            }
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4 text-[11px] xs:text-xs sm:text-sm text-foreground/70 -ml-0.5">
                      <span className="flex items-center">
                        <span className="mr-1">⚒️</span> 40+ builds
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">🧠</span> 20+ certs
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">🧪</span> fav tech: python, firebase, figma
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="hidden md:flex items-center justify-center mt-6 md:mt-0">
                <div className="relative w-full max-w-xs lg:max-w-md aspect-square rounded-xl md:rounded-2xl border border-[#007BFF]/20 overflow-hidden">
                  <img 
                    src="/images/Gallery/1.png" 
                    alt="Ruthwik" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-2 border-[#007BFF]/20 rounded-2xl m-2 pointer-events-none"></div>
                </div>
              </div>
            </div>
            
            {/* Signature */}
            <div className="mt-6 sm:mt-8 md:mt-10 text-right">
              <div className="inline-block text-foreground/90 text-sm sm:text-base md:text-lg font-medium border-t-2 border-[#007BFF]/50 pt-1.5 sm:pt-2 px-3 sm:px-4">
                – ruthwik 🛠️
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
