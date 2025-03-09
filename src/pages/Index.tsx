
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  // Add smooth scrolling for section navigation
  useEffect(() => {
    // Add data-cursor-text attributes to interactive elements
    const addCursorAttributes = () => {
      const buttons = document.querySelectorAll('button');
      const links = document.querySelectorAll('a');
      
      buttons.forEach(button => {
        if (!button.hasAttribute('data-cursor-text')) {
          button.setAttribute('data-cursor-text', 'Click');
        }
      });
      
      links.forEach(link => {
        if (!link.hasAttribute('data-cursor-text')) {
          link.setAttribute('data-cursor-text', 'View');
        }
      });
    };

    // Enhanced scroll behavior for navigation
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Add a small delay for visual feedback
          setTimeout(() => {
            window.scrollTo({
              top: targetElement.offsetTop - 100, // Offset for fixed navbar
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Add scroll-based animations to sections
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, { threshold: 0.1 });
      
      // Observe all sections
      document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
        // Add initial invisible state
        section.classList.add('opacity-0');
      });
    };

    // Initialize all UI enhancements
    addCursorAttributes();
    document.addEventListener('click', handleNavClick);
    observeElements();
    
    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Blogs />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
