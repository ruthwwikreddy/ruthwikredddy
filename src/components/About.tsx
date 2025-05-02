
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
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
          <h2 className="section-title text-center mx-auto mb-12" id="about-title">About Me</h2>
        </RevealOnScroll>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: About Content in Bento Style */}
          <div className="space-y-6">
            {/* Main Bio Box */}
            <RevealOnScroll direction="left" delay={100}>
              <motion.div 
                className="glass-card p-6 h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 123, 255, 0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-[#007BFF] mb-3">Who I Am</h3>
                <p className="text-foreground leading-relaxed">
                  I'm a 10th-grade student at DDMS (AMS) P. Obul Reddy Public School with a passion for technology and innovation. 
                  As an active member of the Robotics Club and NCC Air Wing, I've developed strong leadership skills and technical expertise.
                </p>
              </motion.div>
            </RevealOnScroll>
            
            {/* Skills Box */}
            <RevealOnScroll direction="left" delay={200}>
              <motion.div 
                className="glass-card p-6 h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 123, 255, 0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-[#007BFF] mb-3">Skills & Interests</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Innovation', 'Robotics', 'Leadership', 'Programming', 'Problem Solving'].map((skill, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-1 bg-black text-[#007BFF] rounded-full text-sm border border-[#007BFF]/30 hover:bg-[#007BFF]/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,123,255,0.2)]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.3 }}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 123, 255, 0.6)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </RevealOnScroll>
            
            {/* Journey Box */}
            <RevealOnScroll direction="left" delay={300}>
              <motion.div 
                className="glass-card p-6 h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 123, 255, 0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-[#007BFF] mb-3">My Journey</h3>
                <p className="text-foreground leading-relaxed">
                  My journey in technology has led me to participate in various competitions, including the Youth Ideathon, 
                  Atal Marathon, and Indian Future Tycoon, where I've consistently demonstrated my problem-solving abilities and innovative thinking.
                </p>
              </motion.div>
            </RevealOnScroll>
          </div>
          
          {/* Right Side: Gallery */}
          <div className="h-full">
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
