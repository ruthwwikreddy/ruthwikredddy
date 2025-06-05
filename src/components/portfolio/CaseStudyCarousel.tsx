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
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleSlide = (direction: 'next' | 'prev') => {
    if (isHovered) return;
    setCurrentIndex((prev) => {
      const newIndex = direction === 'next' 
        ? (prev + 1) % caseStudies.length 
        : (prev - 1 + caseStudies.length) % caseStudies.length;
      return newIndex;
    });
  };

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return; // Pause auto-slide when hovered
    
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(intervalId); // Clean up on unmount or when hovered
  }, [isHovered]);
  
  // Mobile detection and scroll effect
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setIsDragging(true);
      setStartX(e.touches[0].clientX - (carouselRef.current?.scrollLeft || 0));
      setScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches[0].clientX;
      carouselRef.current?.scrollTo({
        left: x - startX,
        behavior: 'smooth'
      });
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      const currentScroll = carouselRef.current?.scrollLeft || 0;
      const cardWidth = carouselRef.current?.offsetWidth || 0;
      const index = Math.round(currentScroll / (cardWidth / 3));
      
      if (index !== currentIndex) {
        setCurrentIndex(index % caseStudies.length);
        carouselRef.current?.scrollTo({
          left: (index * (cardWidth / 3)),
          behavior: 'smooth'
        });
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('touchstart', handleTouchStart);
      carouselRef.current.addEventListener('touchmove', handleTouchMove);
      carouselRef.current.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('touchstart', handleTouchStart);
        carouselRef.current.removeEventListener('touchmove', handleTouchMove);
        carouselRef.current.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentIndex]);

  // Scroll to current slide when index changes
  useEffect(() => {
    if (carouselRef.current && !isMobile) {
      const container = carouselRef.current;
      const slides = container.querySelectorAll('[data-slide]');
      if (slides[currentIndex]) {
        const slide = slides[currentIndex] as HTMLElement;
        container.scrollTo({
          left: slide.offsetLeft - (container.offsetWidth - slide.offsetWidth) / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex, isMobile]);

  return (
    <section id="case-studies" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black/90 to-black/95">
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-center mx-auto mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">Case Studies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg">
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
              className="flex space-x-4 sm:space-x-6 snap-x snap-mandatory"
              style={{ scrollSnapType: 'x mandatory' }}
            >
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                data-slide
                className={`w-full sm:w-[50%] md:w-[33.33%] flex-shrink-0 relative group cursor-pointer 
                  ${isMobile ? 'snap-start' : ''} 
                  transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,123,255,0.3)]`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setSelectedCaseStudy(study)}
              >
                <div 
                  className="relative h-[280px] sm:h-[320px] md:h-[360px] rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,123,255,0.1)] hover:shadow-[0_0_25px_rgba(0,123,255,0.2)] transition-shadow duration-300"
                >
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 hover:scale-102"
                    loading="lazy"
                    width="800"
                    height="600"
                    style={{
                      filter: 'grayscale(0%)',
                      transition: 'filter 0.3s ease-in-out'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="space-y-3 w-full">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-sm font-semibold rounded-full bg-white/10 text-white">
                          {study.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {study.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-300">{study.description}</p>
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
            className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors
              ${isMobile ? 'hidden' : 'block'}"
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