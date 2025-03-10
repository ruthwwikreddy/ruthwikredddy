
import React from 'react';
import { caseStudies } from './projectData';

interface CaseStudyTabsProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const CaseStudyTabs: React.FC<CaseStudyTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex space-x-2 p-1 bg-black/50 rounded-lg border border-[#ea384c]/20 backdrop-blur-sm">
        {caseStudies.map((study, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeTab === index 
              ? 'bg-[#ea384c] text-white shadow-neon-glow' 
              : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            {study.title.split(' ')[0]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyTabs;
