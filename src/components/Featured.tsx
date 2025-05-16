import React, { useState, useEffect } from 'react';
import { HTMLAttributes } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Link2, Gamepad2, Palette, Search } from 'lucide-react';
import { ContactFormData } from '../types';
import ContactForm from './Contact';

interface Link {
  url: string;
  label: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
}

const Featured: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [filteredLinks, setFilteredLinks] = useState<Link[]>([]);

  // Combine all links into a single array with enhanced metadata
  const allLinks: Link[] = [
    {
      url: "https://youthideathon.in/world-entrepreneur-day-celebrating-those-who-make-big-ideas-happen/",
      label: "World Entrepreneur Day",
      category: "Entrepreneurship",
      icon: <Link2 className="h-4 w-4" />,
      description: "An innovative healthcare platform featured on World Entrepreneur Day for its patient-centric approach",
      tags: ["Healthcare", "Startup", "YouthIdeathon", "Entrepreneurship"]
    },
    {
      url: "https://youthideathon.in/todays-blog-on-webinar-start-your-startup/",
      label: "From Idea to Reality: Insights from the 'Start Your Startup' Webinar",
      category: "Entrepreneurship",
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Learnings from a Youth Ideathon webinar guiding aspiring entrepreneurs through the startup process",
      tags: ["Startup Tips", "Innovation", "Webinar", "YouthIdeathon"]
    },
    {
      url: "https://www.amsporps.org/accolades_2022_2023/28.ATAL_Innovation_Summit.pdf",
      label: "ATAL Innovation Summit: Celebrating Young Innovators",
      category: "Innovation",
      icon: <Palette className="h-4 w-4" />,
      description: "Showcasing exceptional projects by students at the ATAL Innovation Summit",
      tags: ["Innovation", "ATL", "Recognition", "Student Achievements"]
    },
    {
      url: "https://hyperstack.id/credential/85b77067-ee11-4696-8f4e-b4afba8cc898",
      label: "ATL Marathon 2022 - 23 - Top 400 Teams",
      category: "Achievement",
      icon: <Link2 className="h-4 w-4" />,
      description: "Secured a spot in the top 400 teams nationwide in the ATL Marathon challenge",
      tags: ["ATL Marathon", "Top 400", "Innovation Challenge", "Recognition"]
    },
    {
      url: "https://portal.itscredible.com/qr/455692314649",
      label: "Top 1000 at Youth Ideathon 2023",
      category: "Achievement",
      icon: <Link2 className="h-4 w-4" />,
      description: "Earned recognition among the top 1000 changemakers at Youth Ideathon 2023",
      tags: ["YouthIdeathon", "Entrepreneurship", "Achievement"]
    },
    {
      url: "https://hyperstack.id/credential/29f405a3-7368-4320-986a-20b63326193c",
      label: "Top 300 at Tinkerpreneur 2024",
      category: "Achievement",
      icon: <Link2 className="h-4 w-4" />,
      description: "Recognized among top 300 participants in the national-level Tinkerpreneur bootcamp",
      tags: ["Tinkerpreneur", "Entrepreneurship", "Top 300"]
    },
    {
      url: "https://hyperstack.id/credential/3e2777ac-e851-436b-9cd2-ed068e0c13b1",
      label: "Tinkerpreneur 2024",
      category: "Entrepreneurship",
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Participated in the ATL Tinkerpreneur program fostering business innovation in students",
      tags: ["Innovation", "Tinkerpreneur", "ATL", "Startup Bootcamp"]
    },
    {
      url: "https://unstop.com/certificate-preview/292ce27d-1251-4963-9e94-9478607f492d?utm_campaign=",
      label: "Webinar on Future of Semiconductor",
      category: "Technology",
      icon: <Palette className="h-4 w-4" />,
      description: "Explored trends, applications, and innovations in the semiconductor industry",
      tags: ["Semiconductor", "Webinar", "Electronics", "Tech Trends"]
    },
    {
      url: "https://unstop.com/certificate-preview/b1a0bceb-806a-42ff-bf12-601347f504e7?utm_campaign=",
      label: "InnoVision 2024: Igniting Ideas, Shaping the Future",
      category: "Innovation",
      icon: <Palette className="h-4 w-4" />,
      description: "Participation in InnoVision 2024, a platform for sharing groundbreaking ideas",
      tags: ["Innovation", "InnoVision", "FutureTech", "Ideas"]
    },
    {
      url: "http://unstop.com/certificate-preview/24341243-70d2-4c7a-be8a-bbb5ff82fd2d",
      label: "Youth Entrepreneurship Challenge",
      category: "Entrepreneurship",
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Engaged in a challenge to develop entrepreneurial solutions to real-world problems",
      tags: ["Entrepreneurship", "Youth Challenge", "Business Ideas"]
    },
    {
      url: "https://unstop.com/certificate-preview/17785b0d-2049-440d-8491-fb660f9ff070",
      label: "TATA Crucible Campus Quiz 2024",
      category: "Competition",
      icon: <Link2 className="h-4 w-4" />,
      description: "Participated in one of India’s largest campus quiz competitions by TATA",
      tags: ["Quiz", "Knowledge", "TATA Crucible", "Competition"]
    },
    {
      url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/13996561",
      label: "Innovating with Google Cloud Artificial Intelligence",
      category: "Technology",
      icon: <Palette className="h-4 w-4" />,
      description: "Completed Google Cloud badge on building AI solutions using GCP tools",
      tags: ["Google Cloud", "AI", "Certification", "Innovation"]
    },
    {
      url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/12784720",
      label: "Introduction to Security Principles in Cloud Computing",
      category: "Technology",
      icon: <Palette className="h-4 w-4" />,
      description: "Learned key security concepts for protecting cloud-based systems",
      tags: ["Cloud Security", "Google Cloud", "Cybersecurity", "Certification"]
    },
    {
      url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/11605627",
      label: "Introduction to Data Analytics in Google Cloud",
      category: "Technology",
      icon: <Palette className="h-4 w-4" />,
      description: "Gained foundational skills in data analytics using Google Cloud tools",
      tags: ["Data Analytics", "Cloud", "Google Cloud", "Certification"]
    },
    {
      url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/8372913",
      label: "Introduction to Large Language Models",
      category: "Technology",
      icon: <Palette className="h-4 w-4" />,
      description: "Explored how large language models work and their real-world applications",
      tags: ["LLMs", "AI", "NLP", "Google Cloud"]
    },
    {
      url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/7997050",
      label: "Introduction to Responsible AI",
      category: "Technology",
      icon: <Palette className="h-4 w-4" />,
      description: "Studied ethical AI practices and responsible development techniques",
      tags: ["Responsible AI", "Ethics", "Artificial Intelligence", "Certification"]
    },
    {
      url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/6360159",
      label: "Introduction to Generative AI",
      category: "Technology",
      icon: <Palette className="h-4 w-4" />,
      description: "Learned about the fundamentals and use cases of generative AI models",
      tags: ["Generative AI", "Google Cloud", "ML", "AI"]
    },
  ];

  // Get unique categories
  const categories = [...new Set(allLinks.map(link => link.category))];

  // Filter links based on search and category
  useEffect(() => {
    const filtered = allLinks.filter(link => {
      const matchesSearch = link.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         link.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = !selectedCategory || link.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredLinks(filtered);
  }, [searchTerm, selectedCategory]);

  // Handle link click
  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setContactFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Initialize filtered links
  useEffect(() => {
    setFilteredLinks(allLinks);
  }, []);

  return (
    <section id="featured" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced background with animated grid and particles */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
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
        <div className="text-center mb-16">
          <h2 className="section-title text-center mx-auto mb-6 text-4xl font-bold">Featured</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Explore my notable achievements, certifications, and recognition in various fields
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="relative w-full max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search achievements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-[#007BFF]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007BFF] transition-all duration-300"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              !selectedCategory 
                ? 'bg-[#007BFF] text-white' 
                : 'bg-black/50 text-gray-300 border border-[#007BFF]/30 hover:border-[#007BFF]/70'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-[#007BFF] text-white' 
                  : 'bg-black/50 text-gray-300 border border-[#007BFF]/30 hover:border-[#007BFF]/70'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

        {/* Achievement grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredLinks.map((link, index) => (
              <motion.div
                key={link.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group relative overflow-hidden backdrop-blur-sm bg-black/40 border border-[#007BFF]/10 rounded-lg transition-all duration-500 hover:border-[#007BFF]/50 hover:shadow-[0_0_20px_rgba(0,123,255,0.4)] transform hover:-translate-y-1`}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleLinkClick(link.url, e)}
                  className="block p-6"
                >
                {/* Category badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/30`}>
                    {link.icon}
                    <span className="ml-1">{link.category}</span>
                  </span>
                </div>

                {/* Title and description */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#007BFF] transition-colors duration-300">
                  {link.label}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {link.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {link.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded-md text-xs bg-black/30 text-gray-300 border border-[#007BFF]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View link */}
                <div className="flex items-center text-[#007BFF] text-sm">
                  <span className="mr-2">View Details</span>
                  <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                {/* Hover effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Featured;

