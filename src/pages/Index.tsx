
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

const Index = () => {
  // Add scroll restoration on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Links />
      <Banner />
      <Certifications />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
