
import React from "react";

const Banner = () => {
  return (
    <section className="py-10 bg-black relative overflow-hidden">
      <div className="w-full">
        <div className="w-full overflow-hidden">
          <img 
            src="\images\banner.jpg" 
            alt="Banner" 
            className="w-full h-auto object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#032950] to-transparent"></div>
          
          {/* Animated light beams */}
          <div className="absolute inset-0 overflow-hidden opacity-40">
            <div className="absolute h-[2px] w-[60%] bg-gradient-to-r from-transparent via-[#032950] to-transparent top-[30%] left-[20%] animate-[pulse_5s_ease-in-out_infinite]"></div>
            <div className="absolute h-[2px] w-[40%] bg-gradient-to-r from-transparent via-[#032950]/80 to-transparent top-[60%] left-[10%] animate-[pulse_7s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute h-[2px] w-[70%] bg-gradient-to-r from-transparent via-[#032950]/60 to-transparent top-[75%] left-[15%] animate-[pulse_6s_ease-in-out_infinite_1s]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
