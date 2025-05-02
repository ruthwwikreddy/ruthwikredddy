
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Links from "@/components/Links";
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import StealthMode from "@/components/StealthMode";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth intro animation
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    window.scrollTo(0, 0);
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offset = 100; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Observer to detect which section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      clearTimeout(timer);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          key="loader"
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Modern loader with animated circles */}
            <div className="w-24 h-24 relative">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`loader-circle-${i}`}
                  className="absolute inset-0 border-4 border-[#007BFF] rounded-full"
                  style={{
                    borderTopColor: "transparent",
                    scale: 1 - i * 0.2,
                  }}
                  animate={{ 
                    rotate: 360,
                    opacity: [0.8, 0.2, 0.8],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                />
              ))}
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#007BFF]"
                animate={{ 
                  opacity: [1, 0.6, 1],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                R
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen w-full bg-background"
        >
          <CustomCursor />
          <StealthMode nameSelector=".hero-name" />
          <div className="flex flex-col w-full">
            <Navbar activeSection={activeSection} />
            <main className="flex-1 w-full">
              <Hero />
              <About />
              <Links />
              <Banner />
              <Certifications />
              <Featured />
              <Blogs />
              <Contact />
            </main>
            <Footer />
          </div>
          <ScrollToTopButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
