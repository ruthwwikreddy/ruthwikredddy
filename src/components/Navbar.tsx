
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

const Navbar = ({ activeSection }: NavbarProps = {}) => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed z-40 bottom-8 right-6 p-3 rounded-full bg-black/80 border border-[#007BFF]/40 transition-all duration-300 hover:bg-black hover:border-[#007BFF]/60 hover:shadow-neon-glow ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={18} className="text-[#007BFF]" />
      </button>
    </>
  );
};

export default Navbar;
