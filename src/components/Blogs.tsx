
import { useState } from 'react';

const Blogs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const blogs = [
    {
      title: "AI in Healthcare: Transforming Patient Care and Medical Research",
      description: "Exploring how artificial intelligence is revolutionizing healthcare delivery and medical research.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/ai-in-healthcare-transforming-patient.html"
    },
    {
      title: "Introduction to Machine Learning: A Beginner's Guide",
      description: "A comprehensive guide to understanding the basics of machine learning and its applications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/introduction-to-machine-learning.html"
    },
    {
      title: "Cybersecurity in the Age of AI: Challenges and Solutions",
      description: "Analyzing the intersection of AI and cybersecurity in today's digital landscape.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/cybersecurity-in-age-of-ai-challenges.html"
    },
    {
      title: "Why Python is the Best Language for Beginners",
      description: "Understanding why Python has become the go-to programming language for beginners.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/why-python-is-best-language-for.html"
    },
    {
      title: "5G Technology: How It Will Transform Industries",
      description: "Exploring the impact of 5G technology across various sectors and industries.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/5g-technology-how-it-will-transform.html"
    },
    {
      title: "Exploring the World of Artificial Intelligence",
      description: "A deep dive into the fundamentals of AI and its growing influence.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/exploring-world-of-artificial.html"
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-black relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Animated particles - limit the number for performance */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
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
      
      <div className="container mx-auto relative z-10 px-4">
        <h2 className="section-title text-center mx-auto mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">Blog Posts</h2>
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="card backdrop-blur-lg p-0 hover:shadow-neon-glow transition-all duration-500 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-48 relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                
                {/* Scan line effect */}
                <div className={`absolute inset-0 scan-line-effect ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
              </div>
              <div className="p-6 bg-black/80 backdrop-blur-sm border-t border-[#007BFF]/20">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#007BFF] transition-colors duration-300">{blog.title}</h3>
                <p className="text-gray-300 mb-4">{blog.description}</p>
                <a 
                  href={blog.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#007BFF] font-medium neo-trail relative overflow-hidden after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007BFF] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left group-hover:after:shadow-[0_0_10px_rgba(0,123,255,0.7)]"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
