import ProgressBar from './ProgressBar';

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
          <div 
            key={i}
            className="particle absolute animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed hover:text-[#ea384c] transition-colors duration-500">
              I'm a 10th-grade student at DDMS (AMS) P. Obul Reddy Public School with a passion for technology and innovation. 
              As an active member of the Robotics Club and NCC Air Wing, I've developed strong leadership skills and technical expertise.
            </p>
            <p className="text-foreground leading-relaxed hover:text-[#ea384c] transition-colors duration-500">
              My journey in technology has led me to participate in various competitions, including the Youth Ideathon, 
              Atal Marathon, and Indian Future Tycoon, where I've consistently demonstrated my problem-solving abilities and innovative thinking.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm hover:bg-[#ea384c]/80 hover:text-white transition-all duration-300 transform hover:scale-105 animate-pulse-scale">Innovation</span>
              <span className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm hover:bg-[#ea384c]/80 hover:text-white transition-all duration-300 transform hover:scale-105 animate-pulse-scale" style={{animationDelay: "0.1s"}}>Robotics</span>
              <span className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm hover:bg-[#ea384c]/80 hover:text-white transition-all duration-300 transform hover:scale-105 animate-pulse-scale" style={{animationDelay: "0.2s"}}>Leadership</span>
              <span className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm hover:bg-[#ea384c]/80 hover:text-white transition-all duration-300 transform hover:scale-105 animate-pulse-scale" style={{animationDelay: "0.3s"}}>Programming</span>
              <span className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm hover:bg-[#ea384c]/80 hover:text-white transition-all duration-300 transform hover:scale-105 animate-pulse-scale" style={{animationDelay: "0.4s"}}>Problem Solving</span>
            </div>
          </div>
          
          <div className="card backdrop-blur-lg p-6 hover:shadow-neon-glow transition-all duration-500">
            <h3 className="text-xl font-semibold mb-6 neon-text">Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <ProgressBar 
                  key={index} 
                  label={skill.label} 
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
