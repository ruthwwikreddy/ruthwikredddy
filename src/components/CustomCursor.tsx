import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  
  // Check if we're on a touch device
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  // Update cursor position
  const updateCursor = (e: MouseEvent) => {
    if (isTouchDevice()) return;
    
    const { clientX: x, clientY: y } = e;
    
    // Update cursor position with smooth animation
    if (cursorDot.current) {
      cursorDot.current.style.transform = `translate(${x}px, ${y}px) scale(${cursorDot.current.dataset.scale || 1})`;
    }
    
    // Update outline with a slight delay for smooth trailing effect
    if (cursorOutline.current) {
      cursorOutline.current.style.transform = `translate(${x}px, ${y}px) scale(${cursorOutline.current.dataset.scale || 1})`;
    }
    
    requestRef.current = requestAnimationFrame(() => updateCursor(e));
  };

  // Handle click effect
  const handleMouseDown = () => {
    if (cursorDot.current) cursorDot.current.classList.add('cursor-click');
    if (cursorOutline.current) cursorOutline.current.classList.add('cursor-click');
  };

  const handleMouseUp = () => {
    if (cursorDot.current) cursorDot.current.classList.remove('cursor-click');
    if (cursorOutline.current) cursorOutline.current.classList.remove('cursor-click');
  };

  // Handle hover effects
  const handleMouseOver = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive = 
      target.tagName === 'A' || 
      target.tagName === 'BUTTON' || 
      target.hasAttribute('role') ||
      target.closest('a, button, [role="button"], .cursor-hover');
    
    if (isInteractive) {
      cursorDot.current?.setAttribute('data-scale', '1.5');
      cursorOutline.current?.setAttribute('data-scale', '1.5');
    } else {
      cursorDot.current?.setAttribute('data-scale', '1');
      cursorOutline.current?.setAttribute('data-scale', '1');
    }
  };

  useEffect(() => {
    if (isTouchDevice()) return;

    // Create cursor elements if they don't exist
    if (!cursorDot.current) {
      const dot = document.createElement('div');
      dot.className = 'cursor-dot';
      cursorDot.current = dot;
      document.body.appendChild(dot);
    }
    
    if (!cursorOutline.current) {
      const outline = document.createElement('div');
      outline.className = 'cursor-dot-outline';
      cursorOutline.current = outline;
      document.body.appendChild(outline);
    }

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, true); // Use capture phase for better performance

    // Initial position
    const handleMouseMove = (e: MouseEvent) => updateCursor(e);
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      // Clean up cursor elements
      if (cursorDot.current) {
        document.body.removeChild(cursorDot.current);
      }
      if (cursorOutline.current) {
        document.body.removeChild(cursorOutline.current);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CustomCursor;
