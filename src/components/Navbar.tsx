
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Featured', href: '#featured' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[85%] md:max-w-[75%] rounded-xl px-6 py-4 backdrop-blur-xl bg-black/70 border border-[#032950]/20 shadow-lg">
      <div className="flex justify-between items-center">
        <a href="#home" className="font-heading text-xl font-bold text-white mr-4 hover:text-[#032950] transition-colors">
          R
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-white hover:text-[#032950] transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-item ${
                activeSection === item.href.substring(1) ? 'active' : ''
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute bottom-full left-0 right-0 mb-3 bg-black/90 backdrop-blur-xl rounded-lg shadow-md py-4 border border-[#032950]/20 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 transition-colors duration-300 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-[#032950] font-medium' 
                      : 'text-gray-300 hover:text-[#032950]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
