
import { useState, useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    id: number,
    x: number,
    y: number,
    size: number,
    speed: number,
    opacity: number,
    color: string
  }>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Initialize particles
  useEffect(() => {
    const colors = ['#ea384c', '#ff6b81', '#fb3640'];
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(newParticles);
    
    // Check if form is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Track mouse movement for interactive effects
  useEffect(() => {
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

  // Update particles position
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: (particle.y + particle.speed) % 100,
          x: particle.x + Math.sin(particle.y / 10) * 0.2,
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create a success effect
    const createSuccessParticles = () => {
      const successParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i + 100, // To avoid ID conflicts
        x: 50, // Start from center
        y: 50, // Start from center
        size: Math.random() * 5 + 2,
        speed: Math.random() * 2 + 1,
        opacity: 1,
        color: '#ea384c'
      }));
      
      setParticles(prev => [...prev, ...successParticles]);
      
      // Remove the success particles after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id < 100));
      }, 3000);
    };
    
    // Simulate form submission with success effect
    setTimeout(() => {
      createSuccessParticles();
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const inputClassName = (fieldName: string) => `
    w-full px-5 py-4 rounded-md 
    bg-black/40 backdrop-blur-sm
    border ${activeField === fieldName ? 'border-[#ea384c]' : 'border-[#ea384c]/30'} 
    text-white placeholder-gray-400
    focus:outline-none focus:ring-1 focus:ring-[#ea384c]
    transition-all duration-300
    hover:border-[#ea384c]/60
    relative z-10
  `;

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              opacity: particle.opacity,
              transform: `scale(${activeField ? 1.2 : 1})`,
              transition: 'transform 0.5s ease',
            }}
          />
        ))}
      </div>
      
      {/* Content container */}
      <div className="container mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-3 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-shadow-neon-red">Contact</span> <span className="text-[#ea384c]">Me</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's collaborate on your next project and bring your ideas to life.
        </motion.p>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Glowing effect based on active field */}
            <div 
              className="absolute -inset-0.5 rounded-xl blur-lg opacity-30 transition-all duration-500"
              style={{ 
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #ea384c 0%, transparent 70%)`,
                opacity: activeField ? 0.4 : 0.1,
              }}
            />
            
            {/* Card for the form */}
            <div 
              className="relative p-6 sm:p-10 rounded-xl overflow-hidden border border-[#ea384c]/20"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(25, 25, 25, 0.8) 0%, rgba(10, 10, 10, 0.95) 70%)`,
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Animated border */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                  className="absolute inset-[1px] rounded-xl pointer-events-none opacity-20"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(234, 56, 76, 0.6), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'border-flow 3s linear infinite',
                  }}
                />
              </div>
              
              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="relative group">
                    <label 
                      htmlFor="name" 
                      className={`block text-sm font-medium mb-2 transition-colors duration-300 
                      ${activeField === 'name' ? 'text-[#ea384c]' : 'text-gray-300'}`}
                    >
                      Your Name
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
                        placeholder="John Doe"
                        className={inputClassName('name')}
                      />
                      <div 
                        className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 
                        ${activeField === 'name' ? 'opacity-100' : 'opacity-0'}`}
                        style={{ 
                          boxShadow: 'inset 0 0 15px rgba(234, 56, 76, 0.3)',
                          background: 'radial-gradient(circle at center, rgba(234, 56, 76, 0.05) 0%, transparent 70%)'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Email field */}
                  <div className="relative group">
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-medium mb-2 transition-colors duration-300 
                      ${activeField === 'email' ? 'text-[#ea384c]' : 'text-gray-300'}`}
                    >
                      Email Address
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
                        placeholder="email@example.com"
                        className={inputClassName('email')}
                      />
                      <div 
                        className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 
                        ${activeField === 'email' ? 'opacity-100' : 'opacity-0'}`}
                        style={{ 
                          boxShadow: 'inset 0 0 15px rgba(234, 56, 76, 0.3)',
                          background: 'radial-gradient(circle at center, rgba(234, 56, 76, 0.05) 0%, transparent 70%)'
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Subject field */}
                <div className="relative group">
                  <label 
                    htmlFor="subject" 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 
                    ${activeField === 'subject' ? 'text-[#ea384c]' : 'text-gray-300'}`}
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      placeholder="How can I help you?"
                      className={inputClassName('subject')}
                    />
                    <div 
                      className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 
                      ${activeField === 'subject' ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        boxShadow: 'inset 0 0 15px rgba(234, 56, 76, 0.3)',
                        background: 'radial-gradient(circle at center, rgba(234, 56, 76, 0.05) 0%, transparent 70%)'
                      }}
                    />
                  </div>
                </div>
                
                {/* Message field */}
                <div className="relative group">
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 
                    ${activeField === 'message' ? 'text-[#ea384c]' : 'text-gray-300'}`}
                  >
                    Your Message
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
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      className={inputClassName('message')}
                    />
                    <div 
                      className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 
                      ${activeField === 'message' ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        boxShadow: 'inset 0 0 15px rgba(234, 56, 76, 0.3)',
                        background: 'radial-gradient(circle at center, rgba(234, 56, 76, 0.05) 0%, transparent 70%)'
                      }}
                    />
                  </div>
                </div>
                
                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full group overflow-hidden"
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
                    {/* Button inner container with special effects */}
                    <div 
                      className={`
                        px-8 py-4 rounded-md font-medium text-white text-lg
                        bg-gradient-to-r from-[#c2152a] to-[#ea384c] 
                        transform transition-all duration-300
                        ${isSubmitting ? 'brightness-75' : 'hover:brightness-110'}
                        relative z-10 overflow-hidden group-hover:shadow-neon-glow
                      `}
                    >
                      {/* Button content */}
                      <div className="relative flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </>
                        )}
                      </div>
                      
                      {/* Button hover effect */}
                      <div 
                        className="absolute inset-0 w-full h-full"
                        style={{ 
                          background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.2) 0%, transparent 60%)`,
                          opacity: isHovered ? 1 : 0,
                          transition: 'opacity 0.3s ease'
                        }}
                      ></div>
                    </div>
                    
                    {/* Subtle glow effect behind button */}
                    <div 
                      className="absolute inset-0 rounded-md blur-md transition-opacity duration-300"
                      style={{ 
                        background: 'linear-gradient(90deg, #c2152a, #ea384c)',
                        opacity: isHovered ? 0.5 : 0,
                        transform: 'translateY(4px) scale(0.99)',
                      }}
                    ></div>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
