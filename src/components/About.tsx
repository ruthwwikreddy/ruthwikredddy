
import ProgressBar from './ProgressBar';
import RevealOnScroll from './RevealOnScroll';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { label: 'Leadership & Innovation', percentage: 85 },
    { label: 'Technical Skills', percentage: 75 },
    { label: 'Python', percentage: 50 },
    { label: 'Web Development', percentage: 30 },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Enhanced animated background lines for futuristic feel */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={`h-line-${i}`}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#9b87f5]/50 to-transparent"
            style={{ top: `${(i + 1) * 20}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              boxShadow: ['0 0 0px rgba(155,135,245,0)', '0 0 10px rgba(155,135,245,0.5)', '0 0 0px rgba(155,135,245,0)']
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
            className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#9b87f5]/50 to-transparent"
            style={{ left: `${(i + 1) * 20}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              boxShadow: ['0 0 0px rgba(155,135,245,0)', '0 0 10px rgba(155,135,245,0.5)', '0 0 0px rgba(155,135,245,0)']
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
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <RevealOnScroll direction="left" delay={200}>
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed hover:text-[#9b87f5] transition-colors duration-500">
                I'm a 10th-grade student at DDMS (AMS) P. Obul Reddy Public School with a passion for technology and innovation. 
                As an active member of the Robotics Club and NCC Air Wing, I've developed strong leadership skills and technical expertise.
              </p>
              <p className="text-foreground leading-relaxed hover:text-[#9b87f5] transition-colors duration-500">
                My journey in technology has led me to participate in various competitions, including the Youth Ideathon, 
                Atal Marathon, and Indian Future Tycoon, where I've consistently demonstrated my problem-solving abilities and innovative thinking.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {['Innovation', 'Robotics', 'Leadership', 'Programming', 'Problem Solving'].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-black text-[#9b87f5] rounded-full text-sm border border-[#9b87f5]/30 hover:bg-[#9b87f5]/10 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(155,135,245,0.2)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.5 + (index * 0.1),
                      duration: 0.5
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 0 15px rgba(155, 135, 245, 0.6)" 
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll direction="right" delay={400}>
            <div className="glass-card p-8 rounded-xl backdrop-blur-md bg-black/40 border border-[#9b87f5]/20 hover:border-[#9b87f5]/50 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-8 neon-text relative">
                Skills
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#9b87f5] shadow-[0_0_10px_rgba(155,135,245,0.7)]"></span>
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <RevealOnScroll key={index} delay={600 + (index * 200)}>
                    <ProgressBar 
                      label={skill.label} 
                      percentage={skill.percentage}
                    />
                  </RevealOnScroll>
                ))}
              </div>
              
              {/* Data visualizer decorative element */}
              <div className="mt-8 flex justify-end">
                <motion.div 
                  className="w-16 h-10 relative"
                  animate={{
                    boxShadow: ['0 0 0px rgba(155,135,245,0)', '0 0 10px rgba(155,135,245,0.4)', '0 0 0px rgba(155,135,245,0)']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute bottom-0 bg-[#9b87f5] w-1.5 rounded-t-sm"
                      style={{
                        left: `${i * 3}px`,
                        height: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        height: [`${Math.random() * 30 + 10}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 30 + 10}%`]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
