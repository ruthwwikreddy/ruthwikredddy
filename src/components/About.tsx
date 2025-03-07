
import ProgressBar from './ProgressBar';

const About = () => {
  const skills = [
    { label: 'Leadership & Innovation', percentage: 85 },
    { label: 'Technical Skills', percentage: 75 },
    { label: 'Python', percentage: 50 },
    { label: 'Web Development', percentage: 30 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I'm a 10th-grade student at DDMS (AMS) P. Obul Reddy Public School with a passion for technology and innovation. 
              As an active member of the Robotics Club and NCC Air Wing, I've developed strong leadership skills and technical expertise.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My journey in technology has led me to participate in various competitions, including the Youth Ideathon, 
              Atal Marathon, and Indian Future Tycoon, where I've consistently demonstrated my problem-solving abilities and innovative thinking.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-blue-100 text-portfolio-secondary rounded-full text-sm">Innovation</span>
              <span className="px-4 py-2 bg-blue-100 text-portfolio-secondary rounded-full text-sm">Robotics</span>
              <span className="px-4 py-2 bg-blue-100 text-portfolio-secondary rounded-full text-sm">Leadership</span>
              <span className="px-4 py-2 bg-blue-100 text-portfolio-secondary rounded-full text-sm">Programming</span>
              <span className="px-4 py-2 bg-blue-100 text-portfolio-secondary rounded-full text-sm">Problem Solving</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Skills</h3>
            <div>
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
