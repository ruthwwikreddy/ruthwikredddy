import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Links from "@/components/Links";
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { useEffect } from "react";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offset = 100;
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          setTimeout(() => {
            window.scrollBy(0, -offset);
          }, 10);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden">
      <CustomCursor />
      <div className="flex flex-col w-full">
        <Navbar />
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
    </div>
  );
};

export default Index;
