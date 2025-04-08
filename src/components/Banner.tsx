
import React from "react";

const Banner = () => {
  return (
    <section className="py-10 bg-black relative overflow-hidden">
      <div className="w-full">
        <div className="w-full overflow-hidden">
          <img 
            src=".\assets\images\Banner.jpg" 
            alt="Banner" 
            className="w-full h-auto object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#032950] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
