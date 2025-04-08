
import { useState } from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black bg-grid relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#ea384c]/5 rounded-full filter blur-3xl animate-pulse-scale"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-[#ea384c]/5 rounded-full filter blur-3xl animate-pulse-scale" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-center mx-auto mb-12">Projects Portfolio</h2>
        
        <div className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
          <p>Explore my portfolio of web development projects through the interactive links section below.</p>
        </div>
        
        <div className="absolute particle w-2 h-2 opacity-40 bottom-32 right-20" style={{"--x1": "-50px", "--y1": "30px", "--x2": "20px", "--y2": "-40px"} as React.CSSProperties}></div>
        <div className="absolute particle w-2 h-2 opacity-40 top-40 left-1/3" style={{"--x1": "70px", "--y1": "-20px", "--x2": "-30px", "--y2": "50px"} as React.CSSProperties}></div>
        <div className="absolute particle w-2 h-2 opacity-40 top-20 right-1/4" style={{"--x1": "-30px", "--y1": "50px", "--x2": "40px", "--y2": "20px"} as React.CSSProperties}></div>
        <div className="absolute particle w-3 h-3 opacity-30 bottom-40 left-20" style={{"--x1": "60px", "--y1": "-40px", "--x2": "-20px", "--y2": "30px"} as React.CSSProperties}></div>
        <div className="absolute particle w-3 h-3 opacity-30 top-60 right-40" style={{"--x1": "-20px", "--y1": "60px", "--x2": "50px", "--y2": "-20px"} as React.CSSProperties}></div>
      </div>
    </section>
  );
};

export default Projects;
