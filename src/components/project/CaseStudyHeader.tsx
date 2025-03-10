
import React from 'react';
import { CaseStudy } from './projectData';

interface CaseStudyHeaderProps {
  study: CaseStudy;
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ study }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div className="animate-fade-in">
        <div className="flex items-center mb-2">
          <span className="text-xs uppercase tracking-wider bg-[#ea384c]/10 text-[#ea384c] px-3 py-1 rounded-full mb-1 inline-block border border-[#ea384c]/20 animate-pulse-glow">
            {study.category}
          </span>
          <span className="text-sm text-gray-500 border border-[#ea384c]/20 px-3 py-1 rounded-full ml-3">
            {study.period}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 neon-text tracking-tight">{study.title}</h3>
        <p className="text-gray-400 text-lg italic">{study.tagline}</p>
      </div>
      
      <div className="hidden md:block relative w-24 h-24 md:w-32 md:h-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ea384c]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 border-2 border-[#ea384c]/30 rounded-full animate-pulse-scale"></div>
        <div className="absolute inset-2 border border-[#ea384c]/20 rounded-full animate-pulse-scale" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute inset-4 border border-[#ea384c]/10 rounded-full animate-pulse-scale" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default CaseStudyHeader;
