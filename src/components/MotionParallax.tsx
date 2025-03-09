
import { useState, useEffect, ReactNode } from 'react';

interface MotionParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

const MotionParallax = ({ 
  children, 
  speed = 0.05,
  direction = 'vertical',
  className = ''
}: MotionParallaxProps) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) * speed;
      const y = (window.innerHeight / 2 - e.clientY) * speed;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [speed]);

  const transform = direction === 'horizontal' 
    ? `translateX(${offset.x}px)` 
    : direction === 'vertical' 
      ? `translateY(${offset.y}px)` 
      : `translate(${offset.x}px, ${offset.y}px)`;

  return (
    <div 
      className={className}
      style={{ 
        transform,
        transition: 'transform 0.1s ease-out',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

export default MotionParallax;
