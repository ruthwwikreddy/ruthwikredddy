
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Replace with actual profile image path
const profileImagePath = "/src/assets/images/logo.jpg"; 

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
      {/* Glowing backdrop with rotating animation */}
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
      
      {/* Decorative circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-[#007BFF]"
          style={{
            top: `${50 + 45 * Math.sin(i * Math.PI / 4)}%`,
            left: `${50 + 45 * Math.cos(i * Math.PI / 4)}%`,
          }}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 2 + i * 0.2, 
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
      
      {/* Profile image container */}
      <motion.div
        className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#007BFF] shadow-[0_0_20px_rgba(0,123,255,0.4)]"
        whileHover={{ scale: 1.05 }}
        animate={{ 
          x: (mousePosition.x - 0.5) * -15,
          y: (mousePosition.y - 0.5) * -15 
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
          className="w-full h-full object-cover"
        />
        
        {/* Overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/70 to-black/80 flex items-center justify-center opacity-0 transition-opacity"
          animate={{ opacity: isHovered ? 0.8 : 0 }}
        >
          <p className="text-white text-xl font-medium">Ruthwik Reddy</p>
        </motion.div>
      </motion.div>
      
      {/* Glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        animate={{ 
          boxShadow: isHovered 
            ? "0 0 30px rgba(0, 123, 255, 0.6), 0 0 60px rgba(0, 123, 255, 0.4)" 
            : "0 0 15px rgba(0, 123, 255, 0.4)"
        }}
        transition={{ duration: 0.4 }}
      ></motion.div>
    </div>
  );
};

export default ProfileAvatar;
