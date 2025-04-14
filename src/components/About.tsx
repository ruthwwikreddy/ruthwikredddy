
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
              <p className="text-foreground leading-relaxed hover:text-[#007BFF] transition-colors duration-500">
                I'm a 10th-grade student at DDMS (AMS) P. Obul Reddy Public School with a passion for technology and innovation. 
                As an active member of the Robotics Club and NCC Air Wing, I've developed strong leadership skills and technical expertise.
              </p>
              <p className="text-foreground leading-relaxed hover:text-[#007BFF] transition-colors duration-500">
                My journey in technology has led me to participate in various competitions, including the Youth Ideathon, 
                Atal Marathon, and Indian Future Tycoon, where I've consistently demonstrated my problem-solving abilities and innovative thinking.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {['Innovation', 'Robotics', 'Leadership', 'Programming', 'Problem Solving'].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm hover:bg-[#007BFF]/80 hover:text-white transition-all duration-300 transform"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.5 + (index * 0.1),
                      duration: 0.5
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 0 10px rgba(0, 123, 255, 0.5)" 
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll direction="right" delay={400}>
            <div className="glass-card p-6 hover:shadow-neon-glow transition-all duration-500">
              <h3 className="text-xl font-semibold mb-6 neon-text">Skills</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + (index * 0.2) }}
                  >
                    <ProgressBar 
                      label={skill.label} 
                      percentage={skill.percentage}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
