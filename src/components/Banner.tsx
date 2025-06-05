import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full">
        <div className="w-full overflow-hidden relative aspect-[4/3] md:aspect-auto">
          <motion.img 
            src="/images/banner.jpg" 
            alt="Project Banner" 
            className="w-full h-full object-cover object-center"
            loading="eager"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Gradient overlay with improved opacity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pointer-events-none"></div>
          
          {/* Enhanced bottom border */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#032950]/60 to-transparent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Animated light beams */}
          <div className="absolute inset-0 overflow-hidden opacity-20 md:opacity-40">
            <motion.div 
              className="absolute h-[1px] md:h-[2px] w-[80%] bg-gradient-to-r from-transparent via-[#032950]/60 to-transparent top-[30%] left-[10%] md:left-[20%]"
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            
            <motion.div 
              className="absolute h-[1px] md:h-[2px] w-[60%] bg-gradient-to-r from-transparent via-[#032950]/40 to-transparent top-[60%] left-[20%] md:left-[10%]"
              initial={{ width: "0%" }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            />
            
            <motion.div 
              className="absolute h-[1px] md:h-[2px] w-[90%] bg-gradient-to-r from-transparent via-[#032950]/30 to-transparent top-[75%] left-[5%] md:left-[15%]"
              initial={{ width: "0%" }}
              animate={{ width: "90%" }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
          </div>
          
          {/* Floating particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full bg-[#032950]/30"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 20 - 10, 0],
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
