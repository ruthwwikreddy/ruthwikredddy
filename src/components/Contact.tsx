
import { useState, useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Mail, MousePointerClick, Sparkles } from "lucide-react";
import MotionParallax from './MotionParallax';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [fieldAnimations, setFieldAnimations] = useState({
    name: false,
    email: false,
    message: false
  });

  useEffect(() => {
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
    
    // Trigger field animation when typing
    if (value && !fieldAnimations[name as keyof typeof fieldAnimations]) {
      setFieldAnimations(prev => ({
        ...prev,
        [name]: true
      }));
      
      // Reset animation after it completes
      setTimeout(() => {
        setFieldAnimations(prev => ({
          ...prev,
          [name]: false
        }));
      }, 700);
    }
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
      setIsSubmitted(true);
      
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-primary/5 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
              boxShadow: '0 0 8px rgba(234, 56, 76, 0.3)'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <MotionParallax speed={0.03}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center mb-2">
              <div className="h-[1px] w-8 bg-portfolio-primary/60"></div>
              <span className="mx-2 text-portfolio-primary flex items-center text-sm">
                <Mail className="w-4 h-4 mr-1" /> GET IN TOUCH
              </span>
              <div className="h-[1px] w-8 bg-portfolio-primary/60"></div>
            </div>
            <h2 className="section-title">Let's Connect</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out and I'll get back to you as soon as possible.
            </p>
          </div>
        </MotionParallax>
        
        <div className="max-w-lg mx-auto mt-12 relative">
          {isSubmitted ? (
            <div className="card backdrop-blur-lg p-8 text-center animate-fade-up scan-line-effect">
              <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <div className="w-20 h-20 bg-portfolio-primary/10 rounded-full flex items-center justify-center mb-4 animate-pulse-scale relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,56,76,0.3)_0%,rgba(0,0,0,0)_70%)]"></div>
                  <CheckCircle className="w-10 h-10 text-portfolio-primary relative z-10" />
                </div>
                <div>
                  <Sparkles className="w-5 h-5 inline-block text-portfolio-primary mr-2" />
                  <h3 className="text-2xl font-bold neon-text inline-block">Message Sent!</h3>
                </div>
                <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 btn-outline force-field physics-float"
                  data-cursor-text="Try Again"
                >
                  Send Another Message
                </button>
              </div>
              
              {/* Success animation */}
              <div className="absolute -inset-px rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-portfolio-primary to-transparent animate-[shimmer_2s_linear_infinite]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-portfolio-primary to-transparent animate-[shimmer_2s_linear_infinite]"></div>
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-portfolio-primary to-transparent animate-[shimmer_2s_linear_infinite]"></div>
                <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-portfolio-primary to-transparent animate-[shimmer_2s_linear_infinite]"></div>
              </div>
            </div>
          ) : (
            <div 
              className="card backdrop-blur-lg p-8 hover:shadow-neon-glow transition-all duration-500 animate-fade-up"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 56, 76, 0.1) 0%, rgba(0, 0, 0, 0.8) 50%)`,
              }}
            >
              <div className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
                <div className="absolute inset-px rounded-lg border border-portfolio-primary/20 z-0"></div>
                <div className="absolute h-40 w-40 bg-portfolio-primary/30 blur-[100px] -bottom-20 -right-20 z-0"></div>
                <div className="absolute h-40 w-40 bg-portfolio-primary/20 blur-[100px] -top-20 -left-20 z-0"></div>
                
                {/* Scan line effect */}
                <div className="absolute inset-0 pointer-events-none scan-line-effect"></div>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="relative group">
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium flex items-center gap-1 ${focusedField === 'name' ? 'text-portfolio-primary' : 'text-gray-300'} mb-1 transition-colors duration-300`}
                  >
                    {fieldAnimations.name && <Sparkles className="w-3.5 h-3.5 text-portfolio-primary" />}
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
                      className={`w-full px-4 py-3 rounded-md bg-black/60 border border-portfolio-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-all hover:border-portfolio-primary/50 ${fieldAnimations.name ? 'animate-pulse-scale' : ''}`}
                      data-cursor-text="Type here"
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
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium flex items-center gap-1 ${focusedField === 'email' ? 'text-portfolio-primary' : 'text-gray-300'} mb-1 transition-colors duration-300`}
                  >
                    {fieldAnimations.email && <Sparkles className="w-3.5 h-3.5 text-portfolio-primary" />}
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
                      className={`w-full px-4 py-3 rounded-md bg-black/60 border border-portfolio-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-all hover:border-portfolio-primary/50 ${fieldAnimations.email ? 'animate-pulse-scale' : ''}`}
                      data-cursor-text="Type here"
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
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium flex items-center gap-1 ${focusedField === 'message' ? 'text-portfolio-primary' : 'text-gray-300'} mb-1 transition-colors duration-300`}
                  >
                    {fieldAnimations.message && <Sparkles className="w-3.5 h-3.5 text-portfolio-primary" />}
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
                      className={`w-full px-4 py-3 rounded-md bg-black/60 border border-portfolio-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-all resize-none hover:border-portfolio-primary/50 ${fieldAnimations.message ? 'animate-pulse-scale' : ''}`}
                      data-cursor-text="Type here"
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
                  data-cursor-text={isSubmitting ? "Sending..." : "Send message"}
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
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </span>
                  
                  {/* Enhanced button hover effect */}
                  <span className="absolute inset-0 overflow-hidden">
                    <span className="absolute inset-0 rounded-md group-hover:animate-pulse-glow bg-portfolio-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                  <MousePointerClick className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/70" />
                </button>
              </form>
            </div>
          )}
          
          {/* Enhanced decorative elements */}
          <MotionParallax speed={0.02} direction="horizontal" className="absolute -left-10 top-1/2 -translate-y-1/2">
            <div className="w-20 h-40 bg-portfolio-primary/10 rounded-full blur-3xl"></div>
          </MotionParallax>
          <MotionParallax speed={0.03} direction="horizontal" className="absolute -right-10 top-1/3 -translate-y-1/2">
            <div className="w-20 h-40 bg-portfolio-primary/10 rounded-full blur-3xl"></div>
          </MotionParallax>
          
          {/* Floating icons */}
          <div className="absolute -left-4 top-1/4 w-8 h-8 text-portfolio-primary/30 physics-float">
            <Mail className="w-full h-full" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute -right-4 bottom-1/4 w-8 h-8 text-portfolio-primary/30 physics-float">
            <Sparkles className="w-full h-full" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
