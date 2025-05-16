import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  status: 'Ongoing' | 'Handovered';
  overview: string;
  challenge: string[];
  solution: string[];
  results: string[];
  impact: string;
  links: Record<string, string | undefined>;
}

const typedCaseStudies = caseStudies as CaseStudy[];
import { CaseStudyModal } from './CaseStudyModal';

export function CaseStudyCarousel() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();
  const [isHovered, setIsHovered] = useState(false);

  const handleSlide = (direction: 'next' | 'prev') => {
    if (isHovered) return;
    setCurrentIndex((prev) => {
      const newIndex = direction === 'next' 
        ? (prev + 1) % caseStudies.length 
        : (prev - 1 + caseStudies.length) % caseStudies.length;
      return newIndex;
    });
  };

  useEffect(() => {
    autoScrollRef.current = setInterval(() => handleSlide('next'), 5000);
    return () => clearInterval(autoScrollRef.current);
  }, [isHovered]);

  return (
    <section id="case-studies" className="py-20">
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-center mx-auto mb-6 text-4xl font-bold">Case Studies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Explore my recent projects and case studies that showcase my expertise and problem-solving approach
          </p>
        </div>
      </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent opacity-20" />
          
          <div className="overflow-hidden relative">
            <div 
              ref={carouselRef} 
              className="flex space-x-6 transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className="w-[33.33%] flex-shrink-0 relative group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setSelectedCaseStudy(study)}
              >
                <div className="relative h-[300px] rounded-2xl overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="space-y-2">
                      <span className="px-3 py-1 text-sm font-semibold rounded-full bg-white/10 text-white">
                        {study.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                      <p className="text-gray-300">{study.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute left-0 top-1/2 -translate-y-1/2 px-4">
          <button
            onClick={() => handleSlide('prev')}
            className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 px-4">
          <button
            onClick={() => handleSlide('next')}
            className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {caseStudies.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50 cursor-pointer'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        </div>

        {selectedCaseStudy && (
          <CaseStudyModal
            isOpen={!!selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
            caseStudy={selectedCaseStudy}
          />
        )}
      </div>
    </section>
  );
}