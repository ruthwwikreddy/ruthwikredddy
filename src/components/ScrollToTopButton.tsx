
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed flex md:flex bottom-8 right-8 z-40 p-4 rounded-full bg-black/80 border border-[#9b87f5]/50 text-[#9b87f5] shadow-[0_0_15px_rgba(155,135,245,0.5)] hover:bg-[#9b87f5]/20 transition-all duration-300 hover:scale-110"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="animate-[pulse_2s_ease-in-out_infinite]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
