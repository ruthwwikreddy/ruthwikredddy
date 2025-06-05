import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { CaseStudyCarousel } from "@/components/portfolio/CaseStudyCarousel";
import Links from "@/components/Links";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import { Container } from "@/components/Container";


interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);
  const svgFiles = ['GUzTxp01 (1).svg', 'GUzTxp01 (2).svg', 'GUzTxp01.svg'];

  const rotateSvg = useCallback(() => {
    setCurrentSvgIndex((prevIndex) => (prevIndex + 1) % svgFiles.length);
  }, [svgFiles.length]);

  useEffect(() => {
    const interval = setInterval(rotateSvg, 5000);
    return () => clearInterval(interval);
  }, [rotateSvg]);
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate submission
      setSubmitSuccess(true);
      setContactFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="text-4xl font-bold text-[#007BFF]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          >
            R
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen w-full bg-black"
        >
          <CustomCursor />
          <div className="flex flex-col w-full">
            <main className="flex-1 w-full">
              <section id="home" className="w-full py-24">
                <Container>
                  <Hero />
                </Container>
              </section>


              <section id="about" className="w-full py-24 bg-black/5">
                <Container>
                  <About />
                </Container>
              </section>


              <section id="case-studies" className="w-full py-24">
                <Container>
                  <CaseStudyCarousel />
                </Container>
              </section>


              <section id="certifications" className="w-full py-24 bg-black">
                <Container>
                  <Certifications />
                </Container>
              </section>


              <section id="featured" className="w-full py-24 bg-black/5">
                <Container>
                  <Featured />
                </Container>
              </section>

              <section id="links" className="w-full py-24 bg-black">
                <Container>
                  <Links />
                </Container>
              </section>


              <section id="banner" className="w-full relative overflow-hidden py-16 bg-black">
                <Banner />
              </section>


              <section id="contact" className="w-full py-24 bg-black/5">
                <Container>
                  <Contact
                    formData={contactFormData}
                    setFormData={setContactFormData}
                    onSubmit={handleSubmit}
                  />
                </Container>
              </section>
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
