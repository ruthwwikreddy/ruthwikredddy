import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Check if element is interactive
    const handleElementMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.getAttribute('role') === 'button' ||
          target.hasAttribute('onclick') ||
          target.closest('a') || 
          target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleElementMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementMouseEnter);
    document.addEventListener('mouseout', handleElementMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementMouseEnter);
      document.removeEventListener('mouseout', handleElementMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`cursor-dot ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease'
      }}
    />
  );
};

export default CustomCursor;
