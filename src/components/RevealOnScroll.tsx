
import { useEffect, useRef, ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

const RevealOnScroll = ({ 
  children, 
  className = "", 
  threshold = 0.1,
  delay = 0,
  direction = 'up'
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Determine which reveal class to use based on direction
  const getRevealClass = () => {
    switch(direction) {
      case 'up': return 'reveal-up';
      case 'down': return 'reveal-down';
      case 'left': return 'reveal-left';
      case 'right': return 'reveal-right';
      case 'scale': return 'reveal-scale';
      default: return 'reveal-up';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before revealing if specified
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add('reveal-active');
            }
          }, delay);
          
          // Unobserve after revealing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);
  
  return (
    <div 
      ref={ref} 
      className={`${getRevealClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
