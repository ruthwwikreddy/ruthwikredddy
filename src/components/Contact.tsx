
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="particle absolute animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-center mx-auto">Contact</h2>
        
        <div className="max-w-lg mx-auto mt-12">
          <div className="card backdrop-blur-lg p-8 hover:shadow-neon-glow transition-all duration-500 animated-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1 neon-text">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md bg-black/60 border border-[#ea384c]/20 text-foreground focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:border-transparent transition-all hover:border-[#ea384c]/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1 neon-text">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-md bg-black/60 border border-[#ea384c]/20 text-foreground focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:border-transparent transition-all hover:border-[#ea384c]/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1 neon-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-black/60 border border-[#ea384c]/20 text-foreground focus:outline-none focus:ring-2 focus:ring-[#ea384c] focus:border-transparent transition-all resize-none hover:border-[#ea384c]/50"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center neo-trail ${
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
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
