
import React from 'react';
import { caseStudies } from './projectData';

interface CaseStudyTabsProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const CaseStudyTabs: React.FC<CaseStudyTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-12 px-4">
      <div className="flex flex-wrap justify-center gap-2 p-2 bg-black/50 rounded-lg border border-[#ea384c]/20 backdrop-blur-sm shadow-neon-glow max-w-full overflow-x-auto">
        {caseStudies.map((study, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md whitespace-nowrap transition-all duration-300 ${
              activeTab === index 
              ? 'bg-[#ea384c] text-white shadow-neon-glow border border-[#ea384c]/50' 
              : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
            } relative group overflow-hidden`}
          >
            <span className="relative z-10">{study.title.split(' ')[0]}</span>
            {activeTab === index && (
              <span className="absolute inset-0 bg-gradient-to-r from-[#ea384c]/80 to-[#ea384c] animate-pulse-glow -z-0"></span>
            )}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea384c]/50 group-hover:w-full transition-all duration-300"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyTabs;
