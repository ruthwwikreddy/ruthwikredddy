
import React, { useEffect, useState } from 'react';
import { ExternalLink, Link2, ArrowUpRight, Bookmark, Code, Gamepad2, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Links = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  
  // Combine all links into a single array
  const allLinks = [
    // Main Projects
    { url: "https://ruthwikreddy.xyz/medilink/", label: "MediLink V1", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    { url: "https://medilinkindia.glide.page/", label: "MediLink V2", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    { url: "https://medilink-india.vercel.app/", label: "MediLink Main", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/emergency-card/", label: "Emergency Card", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    { url: "https://muscleworks.vercel.app/", label: "Muscle Works", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    { url: "https://dolcevita-india.vercel.app/", label: "Dolce Vita", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/innovate-students/", label: "Innovate Students", category: "Project", icon: <Link2 className="h-4 w-4" /> },
    
    // Educational Tools
    { url: "https://ruthwikreddy.xyz/carbon_atom/", label: "Carbon Atom", category: "Educational", icon: <Bookmark className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/periodic_table/", label: "Periodic Table", category: "Educational", icon: <Bookmark className="h-4 w-4" /> },
    { url: "https://ruthwikreddy.xyz/age_calculator/", label: "Age Calculator", category: "Educational", icon: <Bookmark className="h-4 w-4" /> },
    
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
      case 'Project': return 'from-blue-500 to-[#032950]';
      case 'Educational': return 'from-cyan-400 to-blue-400';
      case 'Game': return 'from-emerald-400 to-blue-400';
      case 'UI/UX': return 'from-indigo-400 to-blue-400';
      default: return 'from-slate-400 to-blue-400';
    }
  };

  // Set up auto-rotation every 3 seconds
  useEffect(() => {
    if (!api) return;

    // Create an interval for auto-rotation
    const autoRotateInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Cleanup on unmount
    return () => clearInterval(autoRotateInterval);
  }, [api]);

  // Update current slide index when carousel moves
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="links" className="py-20 bg-black bg-grid">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto mb-10">Explore My Work</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Browse through my portfolio of web development projects, interactive tools, educational resources, 
          and UI/UX showcases. Each link represents a unique solution to specific challenges.
        </p>

        <div className="mx-auto max-w-6xl px-8">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {allLinks.map((link, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      // Fix link opening issue by explicitly opening in new tab
                      e.preventDefault();
                      window.open(link.url, '_blank', 'noopener,noreferrer');
                    }}
                    className={`relative group overflow-hidden backdrop-blur-sm bg-black/40 border border-[#032950]/10 
                              rounded-lg p-5 hover:border-[#032950]/50 transition-all duration-300 
                              hover:shadow-[0_0_15px_rgba(3,41,80,0.3)] hover:border-[#032950]/30 flex flex-col items-center justify-center min-h-[140px]
                              hover:-translate-y-1 block w-full`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColorClass(link.category)} 
                                  opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <span className="mb-3 text-[#032950] group-hover:text-shadow-neon-blue transition-all duration-300">
                        {link.icon}
                      </span>
                      <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                        {link.label}
                      </span>
                      <span className="text-xs text-gray-400 mt-1">{link.category}</span>
                      
                      <div className="absolute -bottom-6 -right-6 transform translate-x-1/2 translate-y-1/2 opacity-0 
                                    group-hover:opacity-100 group-hover:-translate-y-0 group-hover:-translate-x-0 
                                    transition-all duration-300">
                        <ArrowUpRight className="h-5 w-5 text-[#032950]" />
                      </div>
                    </div>
                    
                    <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-3 w-3 text-gray-400" />
                    </span>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static left-auto transform-none h-8 w-8 rounded-full" />
              <div className="flex gap-1">
                {Array.from({ length: Math.ceil(allLinks.length / 4) }).map((_, i) => (
                  <span
                    key={i}
                    className={`block h-2 w-2 rounded-full transition-colors duration-300 ${
                      current === i ? "bg-[#032950]" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static right-auto transform-none h-8 w-8 rounded-full" />
            </div>
          </Carousel>
        </div>

        <div className="absolute particle w-2 h-2 opacity-40 bottom-32 right-20" style={{"--x1": "-50px", "--y1": "30px", "--x2": "20px", "--y2": "-40px"} as React.CSSProperties}></div>
        <div className="absolute particle w-2 h-2 opacity-40 top-40 left-1/3" style={{"--x1": "70px", "--y1": "-20px", "--x2": "-30px", "--y2": "50px"} as React.CSSProperties}></div>
        <div className="absolute particle w-2 h-2 opacity-40 top-20 right-1/4" style={{"--x1": "-30px", "--y1": "50px", "--x2": "40px", "--y2": "20px"} as React.CSSProperties}></div>
      </div>
    </section>
  );
};

export default Links;
