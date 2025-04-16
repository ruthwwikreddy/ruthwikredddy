
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeSection?: string;
}

const Navbar = ({ activeSection: initialActiveSection }: NavbarProps = {}) => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      <nav 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[85%] md:max-w-[75%] rounded-xl px-6 py-4 backdrop-blur-xl bg-black/70 border border-[#007BFF]/20 transition-all duration-300 ${
          scrolled ? 'shadow-neon-strong' : 'shadow-neon-glow'
        } ${isHovered ? 'border-[#007BFF]/50 shadow-neon-strong scale-[1.02]' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-center items-center">
          <a 
            href="#home" 
            className="font-heading text-xl font-bold text-white hover:text-[#007BFF] transition-colors"
          >
            R
          </a>
        </div>
      </nav>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed z-40 bottom-24 right-6 p-3 rounded-full bg-black/80 border border-[#007BFF]/40 transition-all duration-300 hover:bg-black hover:border-[#007BFF]/60 hover:shadow-neon-glow ${
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
