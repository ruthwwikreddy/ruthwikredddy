
import { Code, Users, FileText, Stethoscope, Dumbbell, Cake } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  const caseStudies = [
    {
      id: 1,
      title: "MediLink Healthcare Platform",
      tagline: "Revolutionizing healthcare management through innovative MVP development",
      category: "Healthcare",
      period: "Mar 2024 - Present",
      description: "MediLink sought to streamline healthcare access, enhance patient safety, and optimize resource utilization through an innovative healthcare management platform.",
      tags: ['Healthcare', 'Web App', 'Patient Management', 'Medical Records'],
      challenges: [
        "Fragmented healthcare data across multiple systems",
        "Inefficient appointment scheduling processes",
        "Lack of integration across healthcare platforms",
        "Need for rapid validation of core features",
        "Budget constraints while maintaining quality"
      ],
      solutions: [
        "Developed core features: patient registration, appointment scheduling, and doctor availability",
        "Created intuitive interface for both healthcare providers and patients",
        "Integrated cloud-based systems for handling patient records",
        "Implemented secure communication tools for doctor-patient interaction",
        "Launched MVP to a limited group for testing and feedback"
      ],
      results: [
        {
          title: "Validation",
          icon: <FileText className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Successfully validated key platform features"
        },
        {
          title: "Feedback",
          icon: <Users className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Gathered valuable user feedback for optimization"
        },
        {
          title: "Cost",
          icon: <Code className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Achieved significant cost savings through MVP approach"
        },
        {
          title: "Engagement",
          icon: <Stethoscope className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "High engagement rates from both providers and patients"
        }
      ],
      impact: "The collaboration enabled MediLink to transform their innovative healthcare solution from concept to reality. Through the MVP development approach, they validated their idea, optimized their product based on real user feedback, and set a strong foundation for future growth.",
      links: [
        {
          text: "MediLink India",
          url: "https://medilinkindia.glide.page"
        },
        {
          text: "MediLink Portal",
          url: "https://ruthwwikreddy.github.io/medilink/"
        },
        {
          text: "Emergency Card",
          url: "https://ruthwwikreddy.github.io/emergency-card/"
        }
      ]
    },
    {
      id: 2,
      title: "Muscle Works Fitness Platform",
      tagline: "Digital transformation for a modern fitness experience",
      category: "Fitness",
      period: "Jan 2024 - Mar 2024",
      description: "Muscle Works needed a comprehensive digital platform to streamline member registration, booking systems, and enhance customer engagement while maintaining personalized training services.",
      tags: ['Fitness', 'Web App', 'Member Management', 'Booking System'],
      challenges: [
        "Need for efficient member registration and booking systems",
        "Difficulty in scaling customer engagement while maintaining personalized training services",
        "Enhancing digital presence to reach a broader audience"
      ],
      solutions: [
        "Developed an MVP to streamline membership registration and trial booking processes",
        "Integrated personalized training features, including workout plans, BMI calculators, and nutrition guides",
        "Implemented a scalable platform for managing customer data, memberships, and schedules",
        "Refined the branding and user interface (UI) for better user engagement"
      ],
      results: [
        {
          title: "Launch",
          icon: <FileText className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Successfully launched a digital platform for seamless user experience"
        },
        {
          title: "Streamline",
          icon: <Users className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Streamlined customer registration and trial bookings"
        },
        {
          title: "Presence",
          icon: <Code className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Enhanced digital presence with a user-friendly website"
        },
        {
          title: "Engagement",
          icon: <Dumbbell className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Improved customer interaction and engagement"
        }
      ],
      impact: "The collaboration empowered Muscle Works to expand its services with a robust digital platform, improving customer engagement and increasing efficiency in managing memberships. By leveraging the MVP development process, Muscle Works quickly validated its digital strategy, optimized operations, and enhanced user experience, setting a strong foundation for future growth.",
      links: [
        {
          text: "Muscle Works",
          url: "https://muscleworks.vercel.app/"
        }
      ]
    },
    {
      id: 3,
      title: "Dolce Vita Digital Platform",
      tagline: "Transforming custom cake ordering experience",
      category: "Food & Beverage",
      period: "Nov 2023 - Jan 2024",
      description: "Dolce Vita required a sophisticated online ordering system to handle custom cake requests while maintaining quality and scaling their business effectively.",
      tags: ['Food & Beverage', 'E-commerce', 'Custom Orders', 'Delivery'],
      challenges: [
        "Needed an efficient online ordering system to handle custom cake requests",
        "Difficulty in scaling personalized cake orders while maintaining quality",
        "Required a strong digital presence to attract more customers"
      ],
      solutions: [
        "Developed an MVP with a user-friendly interface for easy custom cake browsing and ordering",
        "Integrated a custom order request system for cake personalization",
        "Streamlined order processing and delivery tracking",
        "Enhanced branding and social media engagement strategies"
      ],
      results: [
        {
          title: "Platform",
          icon: <FileText className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Successfully launched an intuitive platform for custom cake ordering"
        },
        {
          title: "Engagement",
          icon: <Users className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Improved customer engagement and order management"
        },
        {
          title: "Expansion",
          icon: <Code className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Expanded reach across Hyderabad"
        },
        {
          title: "Growth",
          icon: <Cake className="h-5 w-5 text-portfolio-primary mr-2" />,
          description: "Increased orders and brand visibility"
        }
      ],
      impact: "Through the MVP development, Dolce Vita transformed from a small custom cake business into a scalable digital brand. By optimizing operations and integrating smart solutions, they created a seamless ordering experience, increased sales, and strengthened their online presence.",
      links: [
        {
          text: "Dolce Vita",
          url: "https://dolcevita-india.vercel.app/"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black bg-grid">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto mb-12">Case Studies: Transforming Ideas into Websites</h2>
        
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 p-1 bg-black/50 rounded-lg border border-[#ea384c]/20 backdrop-blur-sm">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === index 
                  ? 'bg-[#ea384c] text-white shadow-neon-glow' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {study.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          <div className="futuristic-card overflow-hidden transition-all duration-500 animate-fade-in">
            <div className="p-6 md:p-8 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#ea384c]/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#ea384c] mb-1 inline-block">
                    {caseStudies[activeTab].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 neon-text">{caseStudies[activeTab].title}</h3>
                  <p className="text-gray-400">{caseStudies[activeTab].tagline}</p>
                </div>
                <div className="text-sm text-gray-500 border border-[#ea384c]/20 px-3 py-1 rounded-full">
                  {caseStudies[activeTab].period}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                {caseStudies[activeTab].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudies[activeTab].tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-[#ea384c]/10 text-[#ea384c] border border-[#ea384c]/20 rounded-full text-xs backdrop-blur-sm animate-pulse-glow">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="backdrop-blur-sm bg-black/40 border border-[#ea384c]/10 rounded-lg p-6 hover:border-[#ea384c]/30 transition-all duration-300 hover:shadow-neon-glow group">
                  <h4 className="text-lg font-semibold mb-4 text-[#ea384c] group-hover:text-shadow-neon-red">Challenges</h4>
                  <ul className="space-y-3 text-gray-300">
                    {caseStudies[activeTab].challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start group/item hover:translate-x-2 transition-all duration-300">
                        <span className="h-6 w-6 rounded-full bg-[#ea384c]/10 flex items-center justify-center mr-3 mt-0.5 border border-[#ea384c]/30 group-hover/item:shadow-neon-glow">
                          <span className="text-[#ea384c] text-sm font-medium">{index + 1}</span>
                        </span>
                        <span className="group-hover/item:text-white">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="backdrop-blur-sm bg-black/40 border border-[#ea384c]/10 rounded-lg p-6 hover:border-[#ea384c]/30 transition-all duration-300 hover:shadow-neon-glow group">
                  <h4 className="text-lg font-semibold mb-4 text-[#ea384c] group-hover:text-shadow-neon-red">Solution</h4>
                  <ul className="space-y-3 text-gray-300">
                    {caseStudies[activeTab].solutions.map((solution, index) => (
                      <li key={index} className="flex items-start group/item hover:translate-x-2 transition-all duration-300">
                        <span className="h-6 w-6 rounded-full bg-[#ea384c]/10 flex items-center justify-center mr-3 mt-0.5 border border-[#ea384c]/30 group-hover/item:shadow-neon-glow">
                          <span className="text-[#ea384c] text-sm font-medium">{index + 1}</span>
                        </span>
                        <span className="group-hover/item:text-white">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div className="backdrop-blur-sm bg-black/40 border border-[#ea384c]/10 rounded-lg p-6 hover:border-[#ea384c]/30 transition-all duration-300 hover:shadow-neon-glow">
                  <h4 className="text-lg font-semibold mb-4 text-[#ea384c] text-shadow-neon-red">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudies[activeTab].results.map((result, index) => (
                      <div key={index} className="bg-black/60 p-4 rounded-lg border border-[#ea384c]/20 hover:border-[#ea384c]/50 transition-all duration-300 hover:shadow-neon-glow group">
                        <div className="flex items-center mb-2">
                          <div className="text-[#ea384c] group-hover:text-shadow-neon-red">
                            {result.icon}
                          </div>
                          <h5 className="font-medium text-white">{result.title}</h5>
                        </div>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-black/40 border border-[#ea384c]/10 rounded-lg p-6 hover:border-[#ea384c]/30 transition-all duration-300 hover:shadow-neon-glow">
                  <h4 className="text-lg font-semibold mb-4 text-[#ea384c] text-shadow-neon-red">Impact</h4>
                  <p className="text-gray-300">
                    {caseStudies[activeTab].impact}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    {caseStudies[activeTab].links.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#ea384c] hover:text-white border border-[#ea384c]/30 bg-black/60 px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#ea384c]/20 hover:shadow-neon-glow text-sm font-medium button-hover-effect"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute particle w-2 h-2 opacity-40 bottom-32 right-20" style={{"--x1": "-50px", "--y1": "30px", "--x2": "20px", "--y2": "-40px"} as React.CSSProperties}></div>
              <div className="absolute particle w-2 h-2 opacity-40 top-40 left-1/3" style={{"--x1": "70px", "--y1": "-20px", "--x2": "-30px", "--y2": "50px"} as React.CSSProperties}></div>
              <div className="absolute particle w-2 h-2 opacity-40 top-20 right-1/4" style={{"--x1": "-30px", "--y1": "50px", "--x2": "40px", "--y2": "20px"} as React.CSSProperties}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
