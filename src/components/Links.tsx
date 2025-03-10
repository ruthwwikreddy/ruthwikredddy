
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Links = () => {
  const linkCategories = [
    {
      title: "Main Projects",
      links: [
        { url: "https://ruthwikreddy.xyz/medilink/", label: "MediLink" },
        { url: "https://ruthwikreddy.xyz/emergency-card/", label: "Emergency Card" },
        { url: "https://ruthwikreddy.xyz/muscleworks/", label: "Muscle Works" },
        { url: "https://ruthwikreddy.xyz/dolcevita-india/", label: "Dolce Vita" },
        { url: "https://ruthwikreddy.xyz/innovate-students/", label: "Innovate Students" }
      ]
    },
    {
      title: "Educational Tools",
      links: [
        { url: "https://ruthwikreddy.xyz/carbon_atom/", label: "Carbon Atom" },
        { url: "https://ruthwikreddy.xyz/periodic_table/", label: "Periodic Table" },
        { url: "https://ruthwikreddy.xyz/age_calculator/", label: "Age Calculator" },
        { url: "https://ruthwikreddy.xyz/Binary/", label: "Binary Calculator" },
        { url: "https://ruthwikreddy.xyz/word-counter/", label: "Word Counter" }
      ]
    },
    {
      title: "Games & Interactive",
      links: [
        { url: "https://ruthwikreddy.xyz/memory_game/", label: "Memory Game" },
        { url: "https://ruthwikreddy.xyz/rock_paper/", label: "Rock Paper Scissors" },
        { url: "https://ruthwikreddy.xyz/tambola-caller/", label: "Tambola Caller" },
        { url: "https://ruthwikreddy.xyz/jarvis/", label: "Jarvis Assistant" },
        { url: "https://ruthwikreddy.xyz/blinking_clock/", label: "Blinking Clock" }
      ]
    },
    {
      title: "UI/UX Showcases",
      links: [
        { url: "https://ruthwikreddy.xyz/image_slider/", label: "Image Slider" },
        { url: "https://ruthwikreddy.xyz/calendar/", label: "Calendar" },
        { url: "https://ruthwikreddy.xyz/room/", label: "Room Design" },
        { url: "https://ruthwikreddy.xyz/restaurant/", label: "Restaurant UI" },
        { url: "https://ruthwikreddy.xyz/invitation/", label: "Invitation" }
      ]
    }
  ];

  return (
    <section id="links" className="py-20 bg-black bg-grid">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto mb-10">Explore My Work</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Browse through my portfolio of web development projects, interactive tools, educational resources, 
          and UI/UX showcases. Each link represents a unique solution to specific challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {linkCategories.map((category, index) => (
            <div 
              key={index} 
              className="backdrop-blur-sm bg-black/40 border border-[#ea384c]/10 rounded-lg p-6 
                       hover:border-[#ea384c]/30 transition-all duration-300 hover:shadow-neon-glow"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#ea384c] text-shadow-neon-red">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li 
                    key={linkIndex} 
                    className="hover:translate-x-1 transition-all duration-300"
                  >
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white group"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 text-[#ea384c] group-hover:text-white transition-colors" />
                      <span className="group-hover:underline underline-offset-4 decoration-[#ea384c]/50">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://ruthwikreddy.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#ea384c] hover:text-white border-2 border-[#ea384c] 
                   bg-black/60 px-6 py-3 rounded-md transition-all duration-300 hover:bg-[#ea384c]/20 
                   hover:shadow-neon-glow text-lg font-medium button-hover-effect group"
          >
            <span>Visit Main Portfolio</span>
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-all" />
          </a>
        </div>
        
        <div className="absolute particle w-2 h-2 opacity-40 bottom-32 right-20" style={{"--x1": "-50px", "--y1": "30px", "--x2": "20px", "--y2": "-40px"} as React.CSSProperties}></div>
        <div className="absolute particle w-2 h-2 opacity-40 top-40 left-1/3" style={{"--x1": "70px", "--y1": "-20px", "--x2": "-30px", "--y2": "50px"} as React.CSSProperties}></div>
        <div className="absolute particle w-2 h-2 opacity-40 top-20 right-1/4" style={{"--x1": "-30px", "--y1": "50px", "--x2": "40px", "--y2": "20px"} as React.CSSProperties}></div>
      </div>
    </section>
  );
};

export default Links;
