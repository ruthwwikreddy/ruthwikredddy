
import React from 'react';
import { ExternalLink, Link2, ArrowUpRight, Bookmark, Code, Gamepad2, Palette } from 'lucide-react';

const Links = () => {
  // Combine all links into a single array
  const allLinks = [
    // Main Projects
    { url: "https://ruthwikreddy.xyz/medilink/", label: "MediLink", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/emergency-card/", label: "Emergency Card", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/muscleworks/", label: "Muscle Works", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/dolcevita-india/", label: "Dolce Vita", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/innovate-students/", label: "Innovate Students", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    
    // Educational Tools
    { url: "https://ruthwikreddy.xyz/carbon_atom/", label: "Carbon Atom", category: "Educational", icon: <Bookmark className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/periodic_table/", label: "Periodic Table", category: "Educational", icon: <Bookmark className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/age_calculator/", label: "Age Calculator", category: "Educational", icon: <Bookmark className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/Binary/", label: "Binary Calculator", category: "Educational", icon: <Bookmark className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/word-counter/", label: "Word Counter", category: "Educational", icon: <Bookmark className="h-4 w-4" /> },
    
    // Games & Interactive
    { url: "https://ruthwikreddy.xyz/memory_game/", label: "Memory Game", category: "Game", icon: <Gamepad2 className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/rock_paper/", label: "Rock Paper Scissors", category: "Game", icon: <Gamepad2 className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/tambola-caller/", label: "Tambola Caller", category: "Game", icon: <Gamepad2 className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/jarvis/", label: "Jarvis Assistant", category: "Game", icon: <Gamepad2 className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/blinking_clock/", label: "Blinking Clock", category: "Game", icon: <Gamepad2 className="h-4 w-4" /> },
    
    // UI/UX Showcases
    { url: "https://ruthwikreddy.xyz/image_slider/", label: "Image Slider", category: "UI/UX", icon: <Palette className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/calendar/", label: "Calendar", category: "UI/UX", icon: <Palette className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/room/", label: "Room Design", category: "UI/UX", icon: <Palette className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/restaurant/", label: "Restaurant UI", category: "UI/UX", icon: <Palette className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/invitation/", label: "Invitation", category: "UI/UX", icon: <Palette className="h-4 w-4" /> }
  ];

  // Function to get color based on category
  const getCategoryColorClass = (category) => {
    switch(category) {
      case 'Project': return 'from-pink-500 to-rose-500';
      case 'Educational': return 'from-blue-400 to-cyan-400';
      case 'Game': return 'from-green-400 to-emerald-400';
      case 'UI/UX': return 'from-purple-400 to-indigo-400';
      default: return 'from-gray-400 to-slate-400';
    }
  };

  return (
    <section id="links" className="py-20 bg-black bg-grid relative overflow-hidden">
      {/* Fixed width container to prevent overflow */}
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-10">Explore My Work</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Browse through my portfolio of web development projects, interactive tools, educational resources, 
          and UI/UX showcases. Each link represents a unique solution to specific challenges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {allLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden backdrop-blur-sm bg-black/40 border border-[#ea384c]/10 
                       rounded-lg p-5 hover:border-[#ea384c]/50 transition-all duration-300 
                       hover:shadow-neon-glow flex flex-col items-center justify-center min-h-[140px]
                       hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColorClass(link.category)} 
                            opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="mb-3 text-[#ea384c] group-hover:text-shadow-neon-red transition-all duration-300">
                  {link.icon}
                </span>
                <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
                <span className="text-xs text-gray-400 mt-1">{link.category}</span>
                
                <div className="absolute -bottom-6 -right-6 transform translate-x-1/2 translate-y-1/2 opacity-0 
                              group-hover:opacity-100 group-hover:-translate-y-0 group-hover:-translate-x-0 
                              transition-all duration-300">
                  <ArrowUpRight className="h-5 w-5 text-[#ea384c]" />
                </div>
              </div>
              
              <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="h-3 w-3 text-gray-400" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
