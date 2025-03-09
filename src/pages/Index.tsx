
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Add scroll restoration and page initialization logic
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Fix any potential horizontal overflow issues
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Simulate loading state to allow for page transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => {
      clearTimeout(timer);
      // Reset styles on unmount
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  return (
    <>
      {isLoading ? (
        // Loading screen
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-center">
            <div className="inline-block w-16 h-16 relative mb-6">
              <div className="absolute top-0 w-full h-full border-4 border-portfolio-primary/20 rounded-full"></div>
              <div className="absolute top-0 w-full h-full border-4 border-transparent border-t-portfolio-primary rounded-full animate-spin"></div>
            </div>
            <h2 className="text-xl neon-text animate-pulse-soft">Loading Experience...</h2>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-background w-full overflow-x-hidden">
          <CustomCursor />
          <Navbar />
          <main className="overflow-hidden">
            <Hero />
            <About />
            <Projects />
            <Certifications />
            <Blogs />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
