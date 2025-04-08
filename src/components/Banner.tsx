
import React from "react";

const Banner = () => {
  return (
    <section className="py-10 bg-black relative overflow-hidden">
      <div className="container-fluid px-0 mx-0 w-full">
        <div className="w-full overflow-hidden">
          <img 
            src=".\assets\images\Banner.jpg" 
            alt="Banner" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
