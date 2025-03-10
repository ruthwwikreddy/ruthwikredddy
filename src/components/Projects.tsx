
import { useState } from 'react';
import { caseStudies } from './project/projectData';
import CaseStudyTabs from './project/CaseStudyTabs';
import CaseStudyHeader from './project/CaseStudyHeader';
import CaseStudyContent from './project/CaseStudyContent';
import CaseStudyResults from './project/CaseStudyResults';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="projects" className="py-20 bg-black bg-grid relative overflow-hidden w-full">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#ea384c]/5 rounded-full filter blur-3xl animate-pulse-scale"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-[#ea384c]/5 rounded-full filter blur-3xl animate-pulse-scale" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4">
        <h2 className="section-title text-center mx-auto mb-12">Case Studies: Transforming Ideas into Websites</h2>
        
        <CaseStudyTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-6">
          <div className="futuristic-card overflow-hidden transition-all duration-500 animate-fade-in">
            <div className="p-4 md:p-8 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#ea384c]/20 to-transparent rounded-full blur-3xl"></div>
              
              <CaseStudyHeader study={caseStudies[activeTab]} />
              <CaseStudyContent study={caseStudies[activeTab]} />
              <CaseStudyResults study={caseStudies[activeTab]} />
              
              {/* Enhanced animated particles */}
              <div className="absolute particle w-2 h-2 opacity-40 bottom-32 right-20" style={{"--x1": "-50px", "--y1": "30px", "--x2": "20px", "--y2": "-40px"} as React.CSSProperties}></div>
              <div className="absolute particle w-2 h-2 opacity-40 top-40 left-1/3" style={{"--x1": "70px", "--y1": "-20px", "--x2": "-30px", "--y2": "50px"} as React.CSSProperties}></div>
              <div className="absolute particle w-2 h-2 opacity-40 top-20 right-1/4" style={{"--x1": "-30px", "--y1": "50px", "--x2": "40px", "--y2": "20px"} as React.CSSProperties}></div>
              <div className="absolute particle w-3 h-3 opacity-30 bottom-40 left-20" style={{"--x1": "60px", "--y1": "-40px", "--x2": "-20px", "--y2": "30px"} as React.CSSProperties}></div>
              <div className="absolute particle w-3 h-3 opacity-30 top-60 right-40" style={{"--x1": "-20px", "--y1": "60px", "--x2": "50px", "--y2": "-20px"} as React.CSSProperties}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
