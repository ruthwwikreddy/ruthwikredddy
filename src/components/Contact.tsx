
import React, { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  formData: ContactFormData;
  setFormData: (data: ContactFormData) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Contact = ({ formData, setFormData, onSubmit }: ContactProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm("xyzwlbqk");
  const [focusedField, setFocusedField] = React.useState<string | null>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(e);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black/80 to-black/95 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
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
          <h2 className="section-title text-center mx-auto mb-4">Get in Touch</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Ready to start something amazing? I'm here to help you bring your ideas to life. Let's create something extraordinary together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8 md:mt-12">
          {/* Maps Section */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-portfolio-primary">Where to Find Me</h3>
            <p className="text-gray-400 mb-4">Based in Hyderabad, India</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5659984752456!2d78.41845781096144!3d17.43260348339333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918accfe05cb%3A0x83122c6ae78bd743!2sRam%20Reddy%20Apartment!5e0!3m2!1sen!2sin!4v1747371557884!5m2!1sen!2sin" 
                  width="100%" 
                  height="250" 
                  style={{ 
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'transform 0.3s ease'
                  }} 
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="touch-manipulation md:hover:scale-105 transform transition-transform duration-300"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0667082323203!2d78.34581241096195!3d17.456520983373476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9300247d04f1%3A0x34676c10843100d8!2sRam%20Reddy%20Apartments!5e0!3m2!1sen!2sin!4v1747371616988!5m2!1sen!2sin" 
                  width="100%" 
                  height="250" 
                  style={{ 
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'transform 0.3s ease'
                  }} 
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="hover:scale-105 transform transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-lg mx-auto">
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
                
                <form 
                  ref={formRef}
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  <div className="space-y-2 relative">
                    <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-300">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 md:py-2 bg-black/50 border border-[#007BFF]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007BFF] transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/5 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 bg-black/50 border border-[#007BFF]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007BFF] transition-all duration-300"
                        placeholder="Your email"
                        required
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/5 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2 bg-black/50 border border-[#007BFF]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007BFF] transition-all duration-300"
                        placeholder="Subject"
                        required
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/5 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2 bg-black/50 border border-[#007BFF]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007BFF] transition-all duration-300 resize-none"
                        placeholder="Your message"
                        required
                        rows={4}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/5 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ 
                          boxShadow: 'inset 0 0 15px rgba(3, 41, 80, 0.3)',
                          background: 'radial-gradient(circle at center, rgba(3, 41, 80, 0.05) 0%, transparent 70%)'
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 md:py-3.5 px-6 md:px-8 rounded-md bg-portfolio-primary hover:bg-portfolio-primary/90 text-white font-medium text-sm md:text-base transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-portfolio-primary active:scale-95"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
