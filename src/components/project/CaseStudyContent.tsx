
import React from 'react';
import { CaseStudy } from './projectData';

interface CaseStudyContentProps {
  study: CaseStudy;
}

const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ study }) => {
  return (
    <>
      <p className="text-gray-300 mb-6">
        {study.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {study.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-[#ea384c]/10 text-[#ea384c] border border-[#ea384c]/20 rounded-full text-xs backdrop-blur-sm animate-pulse-glow">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="backdrop-blur-sm bg-black/40 border border-[#ea384c]/10 rounded-lg p-6 hover:border-[#ea384c]/30 transition-all duration-300 hover:shadow-neon-glow group">
          <h4 className="text-lg font-semibold mb-4 text-[#ea384c] group-hover:text-shadow-neon-red">Challenges</h4>
          <ul className="space-y-3 text-gray-300">
            {study.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start group/item hover:translate-x-2 transition-all duration-300">
                <span className="h-6 w-6 rounded-full bg-[#ea384c]/10 flex items-center justify-center mr-3 mt-0.5 border border-[#ea384c]/30 group-hover/item:shadow-neon-glow">
                  <span className="text-[#ea384c] text-sm font-medium">{index + 1}</span>
                </span>
                <span className="group-hover/item:text-white">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="backdrop-blur-sm bg-black/40 border border-[#ea384c]/10 rounded-lg p-6 hover:border-[#ea384c]/30 transition-all duration-300 hover:shadow-neon-glow group">
          <h4 className="text-lg font-semibold mb-4 text-[#ea384c] group-hover:text-shadow-neon-red">Solution</h4>
          <ul className="space-y-3 text-gray-300">
            {study.solutions.map((solution, index) => (
              <li key={index} className="flex items-start group/item hover:translate-x-2 transition-all duration-300">
                <span className="h-6 w-6 rounded-full bg-[#ea384c]/10 flex items-center justify-center mr-3 mt-0.5 border border-[#ea384c]/30 group-hover/item:shadow-neon-glow">
                  <span className="text-[#ea384c] text-sm font-medium">{index + 1}</span>
                </span>
                <span className="group-hover/item:text-white">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CaseStudyContent;
