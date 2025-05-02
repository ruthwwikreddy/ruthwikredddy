
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Path to profile image 
const profileImagePath = "./assets/images/logo.jpg";

const ProfileAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      {/* Dynamic animated backdrop */}
      <motion.div
        className="absolute inset-0 -m-6 rounded-full bg-gradient-to-r from-[#007BFF]/30 via-[#0062cc]/20 to-[#007BFF]/30"
        animate={{ 
          rotate: 360,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ 
          rotate: { 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          },
          scale: { 
            duration: 0.4, 
            ease: "easeOut" 
          } 
        }}
      ></motion.div>
      
      {/* Decorative particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#007BFF]"
          style={{
            top: `${50 + 45 * Math.sin(i * Math.PI / 6)}%`,
            left: `${50 + 45 * Math.cos(i * Math.PI / 6)}%`,
          }}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
            x: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10],
            y: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10],
          }}
          transition={{ 
            duration: 2 + i * 0.2, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1
          }}
        />
      ))}
      
      {/* Profile image container */}
      <motion.div
        className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-[#007BFF] shadow-[0_0_25px_rgba(0,123,255,0.5)]"
        whileHover={{ scale: 1.05 }}
        animate={{ 
          x: (mousePosition.x - 0.5) * -20,
          y: (mousePosition.y - 0.5) * -20,
          boxShadow: isHovered 
            ? "0 0 30px rgba(0, 123, 255, 0.7), 0 0 60px rgba(0, 123, 255, 0.4)" 
            : "0 0 25px rgba(0, 123, 255, 0.5)"
        }}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 15 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Profile image */}
        <img 
          src={profileImagePath} 
          alt="Ruthwik Reddy" 
          className="w-full h-full object-cover transition-all duration-300"
        />
        
        {/* Interactive overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/70 to-black/80 flex items-center justify-center opacity-0 transition-opacity"
          animate={{ opacity: isHovered ? 0.8 : 0 }}
        >
          <p className="text-white text-xl font-medium font-poppins">Ruthwik Reddy</p>
        </motion.div>
      </motion.div>
      
      {/* Pulsing edge glow */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        animate={{ 
          boxShadow: isHovered 
            ? "0 0 40px rgba(0, 123, 255, 0.7), 0 0 80px rgba(0, 123, 255, 0.4)" 
            : "0 0 15px rgba(0, 123, 255, 0.4)"
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default ProfileAvatar;
