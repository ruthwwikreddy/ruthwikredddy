
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Links from "@/components/Links";
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { useEffect } from "react";
import Banner from "@/components/Banner";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  // Add scroll restoration on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fix for any lingering scroll issues
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Links />
        <Banner />
        <Certifications />
        <Blogs />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
