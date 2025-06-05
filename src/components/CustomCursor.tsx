import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasText, setHasText] = useState<string | null>(null);

  useEffect(() => {
    // Only create cursor elements if they don't exist
    let cursorDot = document.querySelector('.cursor-dot');
    let cursorRing = document.querySelector('.cursor-ring');
    
    if (!cursorDot) {
      cursorDot = document.createElement('div');
      cursorDot.classList.add('cursor-dot');
      document.body.appendChild(cursorDot);
    }
    
    if (!cursorRing) {
      cursorRing = document.createElement('div');
      cursorRing.classList.add('cursor-ring');
      document.body.appendChild(cursorRing);
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Update state
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Directly update DOM for smoother performance
      if (cursorDot instanceof HTMLElement) {
        cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      
      if (cursorRing instanceof HTMLElement) {
        cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Handle hover states for interactive elements
    const handleElementMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('interactive') ||
          target.closest('a') || 
          target.closest('button')) {
        setIsHovering(true);
        
        // Check for data-cursor-text attribute
        const cursorText = target.getAttribute('data-cursor-text') || 
                          target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        
        if (cursorText) {
          setHasText(cursorText);
        }
      }
    };

    const handleElementMouseLeave = () => {
      setIsHovering(false);
      setHasText(null);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Add event delegation for interactive elements
    document.addEventListener('mouseover', handleElementMouseEnter);
    document.addEventListener('mouseout', handleElementMouseLeave);

    // Apply classes based on state
    const updateCursorClasses = () => {
      if (cursorRing instanceof HTMLElement) {
        cursorRing.classList.toggle('cursor-hover', isHovering);
        cursorRing.classList.toggle('cursor-active', isActive);
        cursorRing.classList.toggle('cursor-text', !!hasText);
        cursorRing.classList.toggle('cursor-hidden', !isVisible);
        
        if (hasText && cursorRing instanceof HTMLElement) {
          cursorRing.textContent = hasText;
        } else if (cursorRing instanceof HTMLElement) {
          cursorRing.textContent = '';
        }
      }
      
      if (cursorDot instanceof HTMLElement) {
        cursorDot.classList.toggle('cursor-hidden', !isVisible);
      }
    };

    // Use requestAnimationFrame for smoother updates
    let animationFrame: number;
    const animate = () => {
      updateCursorClasses();
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementMouseEnter);
      document.removeEventListener('mouseout', handleElementMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, [isHovering, isActive, isVisible, hasText]);

  return null; // Component doesn't render anything directly
};

export default CustomCursor;
