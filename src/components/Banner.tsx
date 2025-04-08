
import React from "react";

const Banner = () => {
  return (
    <section className="py-10 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.7)_100%)]"></div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-none overflow-hidden">
            <img 
              src=".\assets\images\Banner.jpg" 
              alt="Banner" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
