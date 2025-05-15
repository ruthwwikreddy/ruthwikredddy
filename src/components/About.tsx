
import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Enhanced animated background lines for futuristic feel */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={`h-line-${i}`}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/50 to-transparent"
            style={{ top: `${(i + 1) * 20}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={`v-line-${i}`}
            className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/50 to-transparent"
            style={{ left: `${(i + 1) * 20}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2]
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
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className="particle absolute"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <RevealOnScroll>
          <h2 className="section-title text-center mx-auto" id="about-title">About Me</h2>
        </RevealOnScroll>
        
        <div className="mt-12 max-w-6xl mx-auto">
          <RevealOnScroll direction="left" delay={200}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <p className="text-2xl font-bold text-[#007BFF] mb-6">
                  💡 i don't just study. i build.
                </p>
                
                <div className="space-y-6">
                  <p className="text-foreground leading-relaxed group">
                    <span className="text-lg font-medium group-hover:text-[#007BFF] transition-colors duration-300">
                      👋 i'm a 10th grader at obul reddy (hyderabad).
                    </span>
                  </p>
                  
                  <div className="space-y-2">
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
                  
                  <p className="text-foreground italic text-sm mt-8 opacity-80">
                    "most things i built started with: 'what if...'"
                  </p>
                  
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['💡 Innovation', '🤖 Robotics', '🧠 Problem Solving', '👥 Leadership', '🧑‍💻 Programming'].map((skill, index) => (
                        <motion.span 
                          key={index}
                          className="px-4 py-2 bg-black/80 text-foreground/90 rounded-full text-sm border border-[#007BFF]/30 hover:bg-[#007BFF]/10 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(0,123,255,0.1)]"
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
                    
                    <div className="flex flex-wrap gap-4 mt-6 text-sm text-foreground/70">
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
              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-2xl border border-[#007BFF]/20 overflow-hidden">
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
            <div className="mt-12 text-right">
              <div className="inline-block text-foreground/90 text-lg font-medium border-t-2 border-[#007BFF]/50 pt-2 px-6">
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
