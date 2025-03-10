
import { useState } from 'react';
import { caseStudies } from './project/projectData';
import CaseStudyTabs from './project/CaseStudyTabs';
import CaseStudyHeader from './project/CaseStudyHeader';
import CaseStudyContent from './project/CaseStudyContent';
import CaseStudyResults from './project/CaseStudyResults';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="projects" className="py-20 bg-black bg-grid">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto mb-12">Case Studies: Transforming Ideas into Websites</h2>
        
        <CaseStudyTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-6">
          <div className="futuristic-card overflow-hidden transition-all duration-500 animate-fade-in">
            <div className="p-6 md:p-8 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#ea384c]/20 to-transparent rounded-full blur-3xl"></div>
              
              <CaseStudyHeader study={caseStudies[activeTab]} />
              <CaseStudyContent study={caseStudies[activeTab]} />
              <CaseStudyResults study={caseStudies[activeTab]} />
              
              <div className="absolute particle w-2 h-2 opacity-40 bottom-32 right-20" style={{"--x1": "-50px", "--y1": "30px", "--x2": "20px", "--y2": "-40px"} as React.CSSProperties}></div>
              <div className="absolute particle w-2 h-2 opacity-40 top-40 left-1/3" style={{"--x1": "70px", "--y1": "-20px", "--x2": "-30px", "--y2": "50px"} as React.CSSProperties}></div>
              <div className="absolute particle w-2 h-2 opacity-40 top-20 right-1/4" style={{"--x1": "-30px", "--y1": "50px", "--x2": "40px", "--y2": "20px"} as React.CSSProperties}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
