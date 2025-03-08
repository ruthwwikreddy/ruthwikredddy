
import { useState, useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ x: number, y: number, size: number, speed: number, opacity: number }>>([]);

  useEffect(() => {
    // Generate particles for background effect
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);

    // Mouse movement tracker for the form
    const handleMouseMove = (e: MouseEvent) => {
      if (!formRef.current) return;
      const rect = formRef.current.getBoundingClientRect();
      
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const x = ((e.clientX - rect.left) / formRef.current.offsetWidth) * 100;
        const y = ((e.clientY - rect.top) / formRef.current.offsetHeight) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div 
            key={i}
            className="particle absolute"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              background: `rgba(234, 56, 76, ${particle.opacity})`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(234, 56, 76, ${particle.opacity})`,
              animation: `float ${10 + i % 10}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-center mx-auto">Contact</h2>
        
        <div className="max-w-lg mx-auto mt-12">
          <div 
            className="card backdrop-blur-lg p-8 hover:shadow-neon-glow transition-all duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 56, 76, 0.1) 0%, rgba(0, 0, 0, 0.8) 50%)`,
              borderImage: 'linear-gradient(to right, transparent, rgba(234, 56, 76, 0.5), transparent) 1',
              borderImageSlice: '1',
            }}
          >
            <div className="absolute inset-[1px] pointer-events-none animated-border"></div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="relative group">
                <label htmlFor="name" className={`block text-sm font-medium ${focusedField === 'name' ? 'text-[#ea384c]' : 'text-foreground'} mb-1 neon-text transition-colors duration-300`}>
                  Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-md bg-black/60 border border-[#ea384c]/20 text-foreground focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:border-transparent transition-all hover:border-[#ea384c]/50"
                  />
                  <div 
                    className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      boxShadow: 'inset 0 0 15px rgba(234, 56, 76, 0.3)',
                      background: 'radial-gradient(circle at center, rgba(234, 56, 76, 0.05) 0%, transparent 70%)'
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="relative group">
                <label htmlFor="email" className={`block text-sm font-medium ${focusedField === 'email' ? 'text-[#ea384c]' : 'text-foreground'} mb-1 neon-text transition-colors duration-300`}>
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-md bg-black/60 border border-[#ea384c]/20 text-foreground focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:border-transparent transition-all hover:border-[#ea384c]/50"
                  />
                  <div 
                    className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      boxShadow: 'inset 0 0 15px rgba(234, 56, 76, 0.3)',
                      background: 'radial-gradient(circle at center, rgba(234, 56, 76, 0.05) 0%, transparent 70%)'
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="relative group">
                <label htmlFor="message" className={`block text-sm font-medium ${focusedField === 'message' ? 'text-[#ea384c]' : 'text-foreground'} mb-1 neon-text transition-colors duration-300`}>
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-black/60 border border-[#ea384c]/20 text-foreground focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:border-transparent transition-all resize-none hover:border-[#ea384c]/50"
                  />
                  <div 
                    className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 ${focusedField === 'message' ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      boxShadow: 'inset 0 0 15px rgba(234, 56, 76, 0.3)',
                      background: 'radial-gradient(circle at center, rgba(234, 56, 76, 0.05) 0%, transparent 70%)'
                    }}
                  ></div>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center neo-trail relative overflow-hidden group ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={(e) => {
                  if (isHovered) {
                    const button = e.currentTarget;
                    const rect = button.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / button.offsetWidth) * 100;
                    const y = ((e.clientY - rect.top) / button.offsetHeight) * 100;
                    button.style.setProperty('--x', `${x}%`);
                    button.style.setProperty('--y', `${y}%`);
                  }
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="relative">Send Message</span>
                    </>
                  )}
                </span>
                
                {/* Button hover effect */}
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute inset-0 group-hover:animate-pulse-glow" style={{ 
                    background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(234, 56, 76, 0.4) 0%, transparent 70%)`,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}></span>
                </span>
                
                {/* Particles that appear on hover */}
                {isHovered && !isSubmitting && [...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className="absolute w-1 h-1 rounded-full bg-[#ea384c]/80"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      boxShadow: '0 0 5px rgba(234, 56, 76, 0.8)',
                      animation: `float ${3 + Math.random() * 3}s infinite linear`,
                      opacity: Math.random() * 0.7 + 0.3,
                    }}
                  ></span>
                ))}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
