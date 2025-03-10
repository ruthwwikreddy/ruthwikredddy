
import React from 'react';
import { CaseStudy } from './projectData';

interface CaseStudyResultsProps {
  study: CaseStudy;
}

const CaseStudyResults: React.FC<CaseStudyResultsProps> = ({ study }) => {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-8">
      <div className="backdrop-blur-sm bg-black/40 border border-[#ea384c]/10 rounded-lg p-6 hover:border-[#ea384c]/30 transition-all duration-300 hover:shadow-neon-glow">
        <h4 className="text-lg font-semibold mb-4 text-[#ea384c] text-shadow-neon-red">Results</h4>
        <div className="grid grid-cols-2 gap-4">
          {study.results.map((result, index) => (
            <div key={index} className="bg-black/60 p-4 rounded-lg border border-[#ea384c]/20 hover:border-[#ea384c]/50 transition-all duration-300 hover:shadow-neon-glow group">
              <div className="flex items-center mb-2">
                <div className="text-[#ea384c] group-hover:text-shadow-neon-red">
                  {result.icon}
                </div>
                <h5 className="font-medium text-white">{result.title}</h5>
              </div>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="backdrop-blur-sm bg-black/40 border border-[#ea384c]/10 rounded-lg p-6 hover:border-[#ea384c]/30 transition-all duration-300 hover:shadow-neon-glow">
        <h4 className="text-lg font-semibold mb-4 text-[#ea384c] text-shadow-neon-red">Impact</h4>
        <p className="text-gray-300">
          {study.impact}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-6">
          {study.links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#ea384c] hover:text-white border border-[#ea384c]/30 bg-black/60 px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#ea384c]/20 hover:shadow-neon-glow text-sm font-medium button-hover-effect"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyResults;
