
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import Gallery from './Gallery';

// Enhanced Bento card component for reusability
const BentoCard = ({ 
  title, 
  children, 
  className = "", 
  delay = 0 
}: { 
  title: string; 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <RevealOnScroll direction="up" delay={delay}>
    <motion.div 
      className={`bento-card ${className}`}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 30px rgba(0, 123, 255, 0.4)",
        borderColor: "rgba(0, 123, 255, 0.4)" 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h3 className="text-xl font-semibold text-[#007BFF] mb-3">{title}</h3>
      {children}
    </motion.div>
  </RevealOnScroll>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Enhanced grid background effect */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      {/* Enhanced animated background lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={`h-line-${i}`}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/50 to-transparent"
            style={{ top: `${(i + 1) * 20}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              boxShadow: ['0 0 0px rgba(0,123,255,0)', '0 0 10px rgba(0,123,255,0.5)', '0 0 0px rgba(0,123,255,0)']
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
              opacity: [0.2, 0.8, 0.2],
              boxShadow: ['0 0 0px rgba(0,123,255,0)', '0 0 10px rgba(0,123,255,0.5)', '0 0 0px rgba(0,123,255,0)']
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
      
      <div className="container mx-auto relative z-10">
        <RevealOnScroll>
          <h2 className="section-title text-center mx-auto mb-16" id="about-title">About Me</h2>
        </RevealOnScroll>
        
        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: About Content in Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {/* Main Bio Box */}
            <BentoCard title="Who I Am" className="md:col-span-2" delay={100}>
              <p className="text-white/90 leading-relaxed">
                I'm a 10th-grade student at DDMS (AMS) P. Obul Reddy Public School with a passion for technology and innovation. 
                As an active member of the Robotics Club and NCC Air Wing, I've developed strong leadership skills and technical expertise.
              </p>
            </BentoCard>
            
            {/* Skills Box */}
            <BentoCard title="Skills & Interests" delay={200}>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Innovation', 'Robotics', 'Leadership', 'Programming', 'Problem Solving'].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="px-3 py-1 bg-black/40 text-[#007BFF] rounded-full text-sm border border-[#007BFF]/30 hover:bg-[#007BFF]/10 transition-all duration-300 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.3 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 15px rgba(0, 123, 255, 0.6)",
                      borderColor: "rgba(0, 123, 255, 0.6)" 
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </BentoCard>
            
            {/* Journey Box */}
            <BentoCard title="My Journey" delay={300}>
              <p className="text-white/90 leading-relaxed">
                My journey in technology has led me to participate in various competitions, including the Youth Ideathon, 
                Atal Marathon, and Indian Future Tycoon, where I've consistently demonstrated my problem-solving abilities.
              </p>
            </BentoCard>
            
            {/* Quote Box */}
            <BentoCard title="My Philosophy" delay={400} className="md:col-span-2">
              <div className="flex items-center">
                <div className="text-4xl text-[#007BFF] mr-4">"</div>
                <p className="text-white/90 italic">
                  Innovation is not just about creating something new, but about making a meaningful impact on the world around us.
                </p>
                <div className="text-4xl text-[#007BFF] ml-4">"</div>
              </div>
            </BentoCard>
          </div>
          
          {/* Right Side: Enhanced Gallery */}
          <div className="h-full bento-card backdrop-blur-lg">
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
