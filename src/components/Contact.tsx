
import React, { useEffect, useRef } from 'react';
import { Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm("xyzwlbqk");
  const [focusedField, setFocusedField] = React.useState<string | null>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });

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



  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };



  return (
    <section id="contact" className="py-12 md:py-20 bg-black relative overflow-hidden">
      {/* Background effect with a subtle gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-primary/5 via-transparent to-transparent opacity-30 md:opacity-50"></div>
      <div className="absolute inset-0 bg-grid opacity-10 md:opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 px-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Get In Touch</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Have a project idea? Or just want to jam on tech, innovation, or design?
            <br className="hidden md:block" />
            <span className="block md:inline">👋 Let's connect — I usually reply fast.</span>
          </p>
        </div>
        
        <div className="max-w-lg mx-auto mt-8 md:mt-12 relative">
          {state.succeeded ? (
            <div className="card backdrop-blur-sm md:backdrop-blur-lg p-6 md:p-8 text-center animate-fade-up">
              <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4 py-6 md:py-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-portfolio-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4 animate-pulse-scale">
                  <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-portfolio-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-portfolio-primary">Message Sent!</h3>
                <p className="text-gray-300 text-sm md:text-base">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            </div>
          ) : (
            <div 
              className="card backdrop-blur-sm md:backdrop-blur-lg p-5 md:p-8 transition-all duration-500 animate-fade-up"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(3, 41, 80, 0.1) 0%, rgba(0, 0, 0, 0.8) 50%)`,
              }}
            >
              <div className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
                <div className="absolute inset-px rounded-lg border border-portfolio-primary/20 z-0"></div>
                <div className="absolute h-32 w-32 md:h-40 md:w-40 bg-portfolio-primary/20 md:bg-portfolio-primary/30 blur-[60px] md:blur-[100px] -bottom-10 -right-10 md:-bottom-20 md:-right-20 z-0"></div>
                <div className="absolute h-32 w-32 md:h-40 md:w-40 bg-portfolio-primary/10 md:bg-portfolio-primary/20 blur-[60px] md:blur-[100px] -top-10 -left-10 md:-top-20 md:-left-20 z-0"></div>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
                <div className="relative group">
                  <label htmlFor="name" className={`block text-xs md:text-sm font-medium ${focusedField === 'name' ? 'text-portfolio-primary' : 'text-gray-300'} mb-1 transition-colors duration-300`}>
                    Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-md bg-black/40 md:bg-black/60 border border-portfolio-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-all hover:border-portfolio-primary/50"
                      data-cursor-text="Type here"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    <div 
                      className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        boxShadow: 'inset 0 0 15px rgba(3, 41, 80, 0.3)',
                        background: 'radial-gradient(circle at center, rgba(3, 41, 80, 0.05) 0%, transparent 70%)'
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="relative group">
                  <label htmlFor="email" className={`block text-sm font-medium ${focusedField === 'email' ? 'text-portfolio-primary' : 'text-gray-300'} mb-1 transition-colors duration-300`}>
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-md bg-black/60 border border-portfolio-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-all hover:border-portfolio-primary/50"
                      data-cursor-text="Type here"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <div 
                      className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        boxShadow: 'inset 0 0 15px rgba(3, 41, 80, 0.3)',
                        background: 'radial-gradient(circle at center, rgba(3, 41, 80, 0.05) 0%, transparent 70%)'
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="relative group">
                  <label htmlFor="message" className={`block text-sm font-medium ${focusedField === 'message' ? 'text-portfolio-primary' : 'text-gray-300'} mb-1 transition-colors duration-300`}>
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      placeholder="Your message..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-md bg-black/60 border border-portfolio-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-all resize-none hover:border-portfolio-primary/50"
                      data-cursor-text="Type here"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <div 
                      className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 ${focusedField === 'message' ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        boxShadow: 'inset 0 0 15px rgba(3, 41, 80, 0.3)',
                        background: 'radial-gradient(circle at center, rgba(3, 41, 80, 0.05) 0%, transparent 70%)'
                      }}
                    ></div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full btn-primary flex items-center justify-center neo-trail relative overflow-hidden group ${
                    state.submitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  data-cursor-text={state.submitting ? "Sending..." : "Send message"}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {state.submitting ? (
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
                  
                  {/* Button hover effect with animated border */}
                  <span className="absolute inset-0 overflow-hidden">
                    <span className="absolute inset-0 rounded-md group-hover:animate-pulse-glow bg-portfolio-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                </button>
              </form>
            </div>
          )}
          
          {/* Decorative elements */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-40 bg-portfolio-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-10 top-1/3 -translate-y-1/2 w-20 h-40 bg-portfolio-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
