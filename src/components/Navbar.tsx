
import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, Home, User, Briefcase, Award, Star, BookOpen, Mail } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#links', icon: Briefcase },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Featured', href: '#featured', icon: Star },
    { name: 'Blogs', href: '#blogs', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Custom styles for NavigationMenuLink
  const navLinkStyles = (isActive: boolean) => 
    cn(
      "flex items-center gap-2 px-3 py-2 transition-all duration-300 text-sm font-medium relative",
      isActive 
        ? "text-[#032950] after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#032950] after:left-0 after:bottom-0 after:shadow-[0_0_10px_rgba(3,41,80,0.7)]" 
        : "text-gray-300 hover:text-[#032950] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#032950] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_10px_rgba(3,41,80,0.7)]"
    );

  return (
    <>
      <nav 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[85%] md:max-w-[75%] rounded-xl px-6 py-4 backdrop-blur-xl bg-black/70 border border-[#032950]/20 transition-all duration-300 ${
          scrolled ? 'shadow-neon-strong' : 'shadow-neon-glow'
        } ${isHovered ? 'border-[#032950]/50 shadow-neon-strong scale-[1.02]' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-between items-center">
          <a href="#home" className="font-heading text-xl font-bold text-white mr-4 hover:text-[#032950] transition-colors">
            R
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white hover:text-[#032950] transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink 
                      href={item.href}
                      className={navLinkStyles(activeSection === item.href.substring(1))}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon size={16} />
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden absolute bottom-full left-0 right-0 mb-3 bg-black/90 backdrop-blur-xl rounded-lg shadow-neon-glow py-4 border border-[#032950]/20 animate-fade-in">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 transition-colors duration-300 ${
                      activeSection === item.href.substring(1) 
                        ? 'text-[#032950] font-medium' 
                        : 'text-gray-300 hover:text-[#032950]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={16} />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed z-40 bottom-24 right-6 p-3 rounded-full bg-black/80 border border-[#032950]/40 transition-all duration-300 hover:bg-black hover:border-[#032950]/60 hover:shadow-neon-glow ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={18} className="text-[#032950]" />
      </button>
    </>
  );
};

export default Navbar;
