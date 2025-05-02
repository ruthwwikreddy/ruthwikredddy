
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import ProfileAvatar from "./ProfileAvatar";

const Hero = () => {
  const [hoverStates, setHoverStates] = useState({
    name: false,
    title: false,
    button: false,
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>

        {/* Animated overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        {/* Background animated elements - dots & lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={`dot-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#007BFF]/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(0.5px)",
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Animated grid lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={`h-line-${i}`}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/20 to-transparent"
              style={{ 
                top: `${20 + i * 15}%`,
                translateX: `${(mousePosition.x - 0.5) * -20}px`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
          
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={`v-line-${i}`}
              className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/20 to-transparent"
              style={{ 
                left: `${20 + i * 15}%`,
                translateY: `${(mousePosition.y - 0.5) * -20}px`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left column - Text content */}
          <div className="text-left order-2 md:order-1">
            <RevealOnScroll>
              <motion.div 
                className="mb-2"
                whileHover={{ scale: 1.02 }}
              >
                <h2 
                  className="text-xl md:text-2xl text-[#007BFF]"
                  onMouseEnter={() => setHoverStates({ ...hoverStates, title: true })}
                  onMouseLeave={() => setHoverStates({ ...hoverStates, title: false })}
                >
                  Welcome, I'm
                </h2>
              </motion.div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <motion.div 
                className="mb-5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <h1 
                  className="hero-name text-4xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#007BFF] transition-all duration-500"
                  onMouseEnter={() => setHoverStates({ ...hoverStates, name: true })}
                  onMouseLeave={() => setHoverStates({ ...hoverStates, name: false })}
                >
                  Ruthwik Reddy
                </h1>
              </motion.div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <motion.div 
                className="max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-xl md:text-2xl text-white opacity-90">
                  <span className="text-[#007BFF]">Student, </span> 
                  <span className="text-[#007BFF]">Innovator </span> & 
                  <span className="text-[#007BFF]"> Tech Enthusiast</span>
                </h2>
              </motion.div>
            </RevealOnScroll>

            <RevealOnScroll delay={600}>
              <div className="mt-12">
                <motion.a
                  href="#about"
                  className="btn-primary inline-block"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0, 123, 255, 0.7)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setHoverStates({ ...hoverStates, button: true })}
                  onMouseLeave={() => setHoverStates({ ...hoverStates, button: false })}
                >
                  Explore My Work
                </motion.a>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Right column - Profile Avatar */}
          <div className="flex justify-center order-1 md:order-2">
            <RevealOnScroll direction="right">
              <ProfileAvatar />
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.2,
          duration: 0.6 
        }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut" 
          }}
          className="w-6 h-10 rounded-full border-2 border-[#007BFF] flex items-center justify-center p-1"
        >
          <motion.div 
            animate={{ height: ["20%", "80%", "20%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-1 bg-[#007BFF] rounded-full"
          />
        </motion.div>
        <p className="text-sm text-[#007BFF] mt-2">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;
