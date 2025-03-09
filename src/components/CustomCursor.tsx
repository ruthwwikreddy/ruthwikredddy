
import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const [hideNativeCursor, setHideNativeCursor] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trailsCount] = useState(5); // Number of trail elements
  const [hasText, setHasText] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const springRef = useRef<{ stiffness: number, damping: number }>({
    stiffness: 0.1,
    damping: 0.25
  });
  const frameRef = useRef<number | null>(null);

  // Physics-based animation loop
  const animate = () => {
    if (dotRef.current && ringRef.current) {
      // Physics-based cursor movement
      const dx = targetPosition.x - position.x;
      const dy = targetPosition.y - position.y;
      
      const newX = position.x + dx * springRef.current.stiffness;
      const newY = position.y + dy * springRef.current.stiffness;
      
      setPosition({ 
        x: newX, 
        y: newY 
      });
      
      // Apply the position to cursor elements
      dotRef.current.style.left = `${newX}px`;
      dotRef.current.style.top = `${newY}px`;
      
      // Ring follows with a slight delay
      ringRef.current.style.left = `${newX}px`;
      ringRef.current.style.top = `${newY}px`;
      
      // Handle trails with staggered delay
      trailsRef.current.forEach((trail, index) => {
        if (trail) {
          const delay = (index + 1) * 0.08;
          const trailX = position.x + (targetPosition.x - position.x) * delay;
          const trailY = position.y + (targetPosition.y - position.y) * delay;
          
          trail.style.left = `${trailX}px`;
          trail.style.top = `${trailY}px`;
          
          // Decreasing opacity for trailing elements
          trail.style.opacity = `${1 - (index / trailsCount) * 0.8}`;
          // Decreasing size for trailing elements
          trail.style.transform = `translate(-50%, -50%) scale(${1 - (index / trailsCount) * 0.3})`;
        }
      });
    }
    
    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start the animation loop
    frameRef.current = requestAnimationFrame(animate);
    
    // Create the cursor elements
    const dot = dotRef.current;
    const ring = ringRef.current;
    const trails = trailsRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                            target.tagName === 'A' || 
                            target.tagName === 'INPUT' ||
                            target.tagName === 'TEXTAREA' ||
                            target.closest('button') ||
                            target.closest('a') ||
                            target.getAttribute('role') === 'button';
                            
      if (isInteractive) {
        setIsHovering(true);
        
        // Check for data-cursor-text attribute
        const cursorText = target.getAttribute('data-cursor-text') || 
                           target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        
        if (cursorText) {
          setHasText(cursorText);
        } else {
          setHasText(null);
        }
      } else {
        setIsHovering(false);
        setHasText(null);
      }
    };
    
    const handleMouseDown = () => {
      setIsClicking(true);
      // Add physics impulse on click
      springRef.current = { stiffness: 0.15, damping: 0.2 };
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
      // Return to normal physics values
      springRef.current = { stiffness: 0.1, damping: 0.25 };
    };
    
    // Hide cursor when it leaves the window
    const handleMouseLeave = () => {
      if (dot) dot.style.opacity = '0';
      if (ring) ring.style.opacity = '0';
      trails.forEach(trail => {
        if (trail) trail.style.opacity = '0';
      });
    };
    
    // Show cursor when it enters the window
    const handleMouseEnter = () => {
      if (dot) dot.style.opacity = '1';
      if (ring) ring.style.opacity = '1';
      trails.forEach((trail, index) => {
        if (trail) trail.style.opacity = `${1 - (index / trailsCount) * 0.8}`;
      });
    };
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Hide the native cursor
    setHideNativeCursor(true);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [trailsCount]);
  
  useEffect(() => {
    // Hide the native cursor
    if (hideNativeCursor) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hideNativeCursor]);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        ref={dotRef}
        className={`cursor-dot ${isClicking ? 'scale-50' : ''}`}
        style={{ 
          transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.5)' : ''}`,
          mixBlendMode: isHovering ? 'difference' : 'normal',
        }}
      />
      
      {/* Cursor ring */}
      <div 
        ref={ringRef} 
        className={`cursor-ring ${isHovering ? 'cursor-hover' : ''} ${isClicking ? 'cursor-active' : ''} ${hasText ? 'cursor-text' : ''}`}
        style={{ mixBlendMode: isHovering ? 'difference' : 'normal' }}
      >
        {hasText && <span className="text-xs">{hasText}</span>}
      </div>
      
      {/* Cursor trails */}
      {Array.from({ length: trailsCount }).map((_, index) => (
        <div
          key={index}
          ref={(el) => el && (trailsRef.current[index] = el)}
          className="cursor-trail absolute w-2 h-2 rounded-full bg-[#ea384c]/30 pointer-events-none z-[999998]"
          style={{
            boxShadow: '0 0 5px rgba(234, 56, 76, 0.3)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      
      {/* Add global styles for cursor effects */}
      <style jsx global>{`
        .interactive-element {
          cursor: none !important;
        }
        
        /* Add physics-based ripple effect on click */
        @keyframes cursor-ripple {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
        
        /* Cursor trail effect */
        @keyframes cursor-trail-fade {
          0% { opacity: 0.6; }
          100% { opacity: 0; }
        }
        
        .cursor-trail {
          animation: cursor-trail-fade 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
