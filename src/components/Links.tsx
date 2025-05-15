import React, { useEffect, useState, useCallback } from 'react';
import { ExternalLink, Link2, ArrowUpRight, Bookmark, Code, Gamepad2, Palette, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Combine all links into a single array with enhanced metadata
  const allLinks = [
    // Main Projects
    { 
      url: "https://ruthwikreddy.xyz/medilink/", 
      label: "MediLink V1", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Healthcare management system focused on patient care",
      tags: ["Healthcare", "React", "Node.js"]
    },
    { 
      url: "https://medilinkindia.glide.page/", 
      label: "MediLink V2", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Enhanced version with additional features and improved UI",
      tags: ["Healthcare", "Mobile", "PWA"]
    },
    { 
      url: "https://medilink-india.vercel.app/", 
      label: "MediLink Main", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Flagship version of the MediLink platform",
      tags: ["Healthcare", "Full Stack", "Next.js"]
    },
    { 
      url: "https://ruthwikreddy.xyz/emergency-card/", 
      label: "Emergency Card", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Quick access emergency information system",
      tags: ["Safety", "React", "Mobile First"]
    },
    { 
      url: "https://muscleworks.vercel.app/", 
      label: "Muscle Works", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Fitness tracking and workout planning platform",
      tags: ["Fitness", "React", "Health"]
    },
    { 
      url: "https://dolcevita-india.vercel.app/", 
      label: "Dolce Vita", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Luxury lifestyle and fashion platform",
      tags: ["E-commerce", "Next.js", "Fashion"]
    },
    { 
      url: "https://ruthwikreddy.xyz/innovate-students/", 
      label: "Innovate Students", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Platform for student innovation and collaboration",
      tags: ["Education", "React", "Community"]
    },
    
    // Educational Tools
    { 
      url: "https://ruthwikreddy.xyz/carbon_atom/", 
      label: "Carbon Atom", 
      category: "Educational", 
      icon: <Bookmark className="h-4 w-4" />,
      description: "Interactive atomic structure visualization",
      tags: ["Science", "Education", "Interactive"]
    },
    { 
      url: "https://ruthwikreddy.xyz/periodic_table/", 
      label: "Periodic Table", 
      category: "Educational", 
      icon: <Bookmark className="h-4 w-4" />,
      description: "Interactive periodic table with detailed elements",
      tags: ["Chemistry", "Education", "Reference"]
    },
    { 
      url: "https://ruthwikreddy.xyz/age_calculator/", 
      label: "Age Calculator", 
      category: "Educational", 
      icon: <Bookmark className="h-4 w-4" />,
      description: "Precise age calculation tool with additional features",
      tags: ["Utility", "JavaScript", "Tool"]
    },
    
    // Games & Interactive
    { 
      url: "https://ruthwikreddy.xyz/memory_game/", 
      label: "Memory Game", 
      category: "Game", 
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Brain training memory card game",
      tags: ["Game", "JavaScript", "Interactive"]
    },
    { 
      url: "https://ruthwikreddy.xyz/rock_paper/", 
      label: "Rock Paper Scissors", 
      category: "Game", 
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Classic game with modern twist",
      tags: ["Game", "JavaScript", "Fun"]
    },
    { 
      url: "https://ruthwikreddy.xyz/tambola-caller/", 
      label: "Tambola Caller", 
      category: "Game", 
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Digital housie number caller",
      tags: ["Game", "Utility", "Entertainment"]
    },
    { 
      url: "https://ruthwikreddy.xyz/jarvis/", 
      label: "Jarvis Assistant", 
      category: "Game", 
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "AI-powered virtual assistant",
      tags: ["AI", "Assistant", "Interactive"]
    },
    { 
      url: "https://ruthwikreddy.xyz/blinking_clock/", 
      label: "Blinking Clock", 
      category: "Game", 
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Aesthetic digital clock with animations",
      tags: ["UI", "JavaScript", "Design"]
    },
    
    // UI/UX Showcases
    { 
      url: "https://ruthwikreddy.xyz/image_slider/", 
      label: "Image Slider", 
      category: "UI/UX", 
      icon: <Palette className="h-4 w-4" />,
      description: "Smooth and responsive image carousel",
      tags: ["UI", "Animation", "Component"]
    },
    { 
      url: "https://ruthwikreddy.xyz/calendar/", 
      label: "Calendar", 
      category: "UI/UX", 
      icon: <Palette className="h-4 w-4" />,
      description: "Modern calendar component with events",
      tags: ["UI", "Date", "Component"]
    },
    { 
      url: "https://ruthwikreddy.xyz/room/", 
      label: "Room Design", 
      category: "UI/UX", 
      icon: <Palette className="h-4 w-4" />,
      description: "3D room visualization interface",
      tags: ["3D", "Design", "Interactive"]
    },
    { 
      url: "https://ruthwikreddy.xyz/restaurant/", 
      label: "Restaurant UI", 
      category: "UI/UX", 
      icon: <Palette className="h-4 w-4" />,
      description: "Modern restaurant website template",
      tags: ["UI", "Food", "Business"]
    },
    { 
      url: "https://ruthwikreddy.xyz/invitation/", 
      label: "Invitation", 
      category: "UI/UX", 
      icon: <Palette className="h-4 w-4" />,
      description: "Digital invitation card creator",
      tags: ["Design", "Events", "Creative"]
    }
  ];

  // Filter links based on search and category
  const filteredLinks = allLinks.filter(link => {
    const matchesSearch = link.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         link.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || link.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [...new Set(allLinks.map(link => link.category))];

  // Function to safely open links in a new tab
  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Function to get color based on category
  const getCategoryColorClass = (category: string) => {
    switch(category) {
      case 'Project': return 'from-blue-500 to-[#007BFF]';
      case 'Educational': return 'from-cyan-400 to-[#007BFF]';
      case 'Game': return 'from-emerald-400 to-[#007BFF]';
      case 'UI/UX': return 'from-indigo-400 to-[#007BFF]';
      default: return 'from-slate-400 to-[#007BFF]';
    }
  };

  // Set up auto-rotation every 3 seconds
  useEffect(() => {
    if (!api) return;

    const autoRotateInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);

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
    <section id="links" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced background with animated grid and particles */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#007BFF]/30"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [0, Math.random() * 200 - 100, 0],
              x: [0, Math.random() * 200 - 100, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-center mx-auto mb-4">Explore My Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Browse through my portfolio of web development projects, interactive tools, educational resources, 
            and UI/UX showcases. Each project represents a unique solution to specific challenges.
          </p>

          {/* Enhanced search and filter interface */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-[#007BFF]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007BFF] transition-all duration-300"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  !selectedCategory 
                    ? 'bg-[#007BFF] text-white' 
                    : 'bg-black/50 text-gray-300 border border-[#007BFF]/30 hover:border-[#007BFF]/70'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-[#007BFF] text-white' 
                      : 'bg-black/50 text-gray-300 border border-[#007BFF]/30 hover:border-[#007BFF]/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredLinks.map((link, index) => (
              <motion.div
                key={link.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group relative overflow-hidden backdrop-blur-sm bg-black/40 border border-[#007BFF]/10 rounded-lg transition-all duration-500 hover:border-[#007BFF]/50 hover:shadow-[0_0_20px_rgba(0,123,255,0.4)] transform hover:-translate-y-1`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleLinkClick(link.url, e)}
                  className="block p-6"
                >
                  {/* Category badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/30`}>
                      {link.icon}
                      <span className="ml-1">{link.category}</span>
                    </span>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#007BFF] transition-colors duration-300">
                    {link.label}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {link.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {link.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 rounded-md text-xs bg-black/30 text-gray-300 border border-[#007BFF]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Visit link */}
                  <div className="flex items-center text-[#007BFF] text-sm">
                    <span className="mr-2">Visit Project</span>
                    <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>

                  {/* Hover effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Links;