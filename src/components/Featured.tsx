
import React, { useState, useEffect } from 'react';
import { ExternalLink, Star } from 'lucide-react';

interface FeaturedLink {
  url: string;
  title: string;
  category?: string;
}

const Featured = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const featuredLinks: FeaturedLink[] = [
    { url: "https://youthideathon.in/world-entrepreneur-day-celebrating-those-who-make-big-ideas-happen/", title: "Turning Big Ideas into Reality: Celebrating World Entrepreneur Day", category: "Entrepreneurship" },
    { url: "https://youthideathon.in/todays-blog-on-webinar-start-your-startup/", title: "From Idea to Reality: Insights from the 'Start Your Startup' Webinar", category: "Entrepreneurship" },
    { url: "https://www.amsporps.org/accolades_2022_2023/28.ATAL_Innovation_Summit.pdf", title: "ATAL Innovation Summit: Celebrating Young Innovators", category: "Innovation" },
    { url: "https://hyperstack.id/credential/85b77067-ee11-4696-8f4e-b4afba8cc898", title: "ATL Marathon 2022 - 23 - Top 400 Teams", category: "Achievement" },
    { url: "https://portal.itscredible.com/qr/455692314649", title: "Top 1000 at Youth Ideathon 2023", category: "Achievement" },
    { url: "https://hyperstack.id/credential/3e2777ac-e851-436b-9cd2-ed068e0c13b1", title: "Tinkerpreneur 2024", category: "Entrepreneurship" },
    { url: "https://unstop.com/certificate-preview/292ce27d-1251-4963-9e94-9478607f492d?utm_campaign=", title: "Webinar on Future of Semiconductor", category: "Technology" },
    { url: "https://unstop.com/certificate-preview/b1a0bceb-806a-42ff-bf12-601347f504e7?utm_campaign=", title: "InnoVision 2024: Igniting Ideas, Shaping the Future", category: "Innovation" },
    { url: "http://unstop.com/certificate-preview/24341243-70d2-4c7a-be8a-bbb5ff82fd2d", title: "Youth Entrepreneurship Challenge", category: "Entrepreneurship" },
    { url: "https://unstop.com/certificate-preview/17785b0d-2049-440d-8491-fb660f9ff070", title: "TATA Crucible Campus Quiz 2024", category: "Competition" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/13996561", title: "Innovating with Google Cloud Artificial Intelligence", category: "Technology" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/12784720", title: "Introduction to Security Principles in Cloud Computing", category: "Technology" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/11605627", title: "Introduction to Data Analytics in Google Cloud", category: "Technology" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/8372913", title: "Introduction to Large Language Models", category: "Technology" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/7997050", title: "Introduction to Responsible AI", category: "Technology" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/6360159", title: "Introduction to Generative AI", category: "Technology" },
  ];

  // Extract unique categories
  const categories = [...new Set(featuredLinks.map(link => link.category))].filter(Boolean) as string[];

  // Filter links based on active category
  const filteredLinks = activeCategory 
    ? featuredLinks.filter(link => link.category === activeCategory)
    : featuredLinks;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('featured');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleLinkClick = (url: string) => {
    // Open the link in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="featured" className="py-16 md:py-20 bg-black text-white relative overflow-hidden w-full max-w-[100vw]">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#007BFF]/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#007BFF]/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-[#007BFF]/5 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center mb-4">
              <Star className="text-[#007BFF] w-5 h-5 mr-2" />
              <h2 className="text-4xl font-bold text-white uppercase tracking-widest">Featured</h2>
              <Star className="text-[#007BFF] w-5 h-5 ml-2" />
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent rounded-full shadow-[0_0_10px_rgba(0,123,255,0.7)]"></div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button 
              onClick={() => setActiveCategory(null)} 
              className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                activeCategory === null
                  ? 'bg-[#007BFF] text-white shadow-[0_0_10px_rgba(0,123,255,0.5)]'
                  : 'bg-black text-gray-400 border border-[#007BFF]/20 hover:border-[#007BFF]/50'
              }`}
            >
              All
            </button>
            
            {categories.map((category) => (
              <button 
                key={category} 
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#007BFF] text-white shadow-[0_0_10px_rgba(0,123,255,0.5)]'
                    : 'bg-black text-gray-400 border border-[#007BFF]/20 hover:border-[#007BFF]/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLinks.map((link, index) => (
              <div
                key={index}
                className={`group bg-black/40 backdrop-blur-md p-6 rounded-lg transition-all duration-500 border border-[#007BFF]/10 hover:border-[#007BFF]/50 hover:shadow-[0_0_15px_rgba(0,123,255,0.3)] relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } cursor-pointer`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleLinkClick(link.url)}
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {link.category && (
                  <span className="inline-block px-2 py-1 text-xs bg-black/60 text-[#007BFF] rounded-full mb-3 border border-[#007BFF]/20">
                    {link.category}
                  </span>
                )}
                
                <div className="text-lg font-semibold text-white group-hover:text-[#007BFF] transition-all duration-300 flex items-start">
                  <span className="flex-1">{link.title}</span>
                  <ExternalLink className="w-4 h-4 mt-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Bottom glow effect */}
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#007BFF]/50 to-[#007BFF] group-hover:w-full absolute bottom-0 left-0 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
