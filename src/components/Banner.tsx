
import React from "react";

const Banner = () => {
  return (
    <section className="py-10 bg-black relative w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-6xl overflow-hidden rounded-lg shadow-neon-glow">
            <img 
              src="./assets/images/Banner.jpg" 
              alt="Banner" 
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
