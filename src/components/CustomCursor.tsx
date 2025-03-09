
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    // Create cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    const cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    document.body.appendChild(cursorRing);

    // Track mouse movement with physics
    let cursorPosition = { x: 0, y: 0 };
    let dotPosition = { x: 0, y: 0 };
    let ringPosition = { x: 0, y: 0 };
    
    const handleMouseMove = (e: MouseEvent) => {
      // Update the state position
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update target position for physics calculation
      cursorPosition.x = e.clientX;
      cursorPosition.y = e.clientY;

      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      
      // Check for clickable elements
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.tagName.toLowerCase() === 'select' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.closest('[role="button"]') !== null ||
        target.closest('input') !== null ||
        target.closest('textarea') !== null ||
        target.closest('select') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
      
      // Check for custom cursor text
      const dataText = target.getAttribute('data-cursor-text') || 
                      (target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text') || '');
      setCursorText(dataText);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    // Physics animation
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animateCursor = () => {
      // Calculate physics-based movement with lag effect
      dotPosition.x = lerp(dotPosition.x, cursorPosition.x, 0.5);
      dotPosition.y = lerp(dotPosition.y, cursorPosition.y, 0.5);
      
      ringPosition.x = lerp(ringPosition.x, cursorPosition.x, 0.2);
      ringPosition.y = lerp(ringPosition.y, cursorPosition.y, 0.2);
      
      // Apply the calculated positions
      cursorDot.style.transform = `translate(${dotPosition.x}px, ${dotPosition.y}px)`;
      cursorRing.style.transform = `translate(${ringPosition.x}px, ${ringPosition.y}px)`;
      
      // Apply visual effects based on state
      cursorDot.style.opacity = isHidden ? '0' : '1';
      cursorRing.style.opacity = isHidden ? '0' : '1';
      
      if (isPointer) {
        cursorRing.classList.add('cursor-hover');
      } else {
        cursorRing.classList.remove('cursor-hover');
      }
      
      if (isClicking) {
        cursorRing.classList.add('cursor-active');
        cursorDot.style.transform = `translate(${dotPosition.x}px, ${dotPosition.y}px) scale(0.5)`;
      } else {
        cursorRing.classList.remove('cursor-active');
      }
      
      if (cursorText) {
        cursorRing.classList.add('cursor-text');
        cursorRing.textContent = cursorText;
      } else {
        cursorRing.classList.remove('cursor-text');
        cursorRing.textContent = '';
      }
      
      requestAnimationFrame(animateCursor);
    };

    // Start the animation
    animateCursor();

    // Register event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      document.body.removeChild(cursorDot);
      document.body.removeChild(cursorRing);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default CustomCursor;
