
import React from 'react';
import { CaseStudy } from './projectData';

interface CaseStudyHeaderProps {
  study: CaseStudy;
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ study }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <span className="text-xs uppercase tracking-wider text-[#ea384c] mb-1 inline-block">
          {study.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 neon-text">{study.title}</h3>
        <p className="text-gray-400">{study.tagline}</p>
      </div>
      <div className="text-sm text-gray-500 border border-[#ea384c]/20 px-3 py-1 rounded-full">
        {study.period}
      </div>
    </div>
  );
};

export default CaseStudyHeader;
