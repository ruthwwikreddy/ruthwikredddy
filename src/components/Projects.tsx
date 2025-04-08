
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const featuredProjects = [
    {
      title: "MediLink",
      description: "A comprehensive healthcare platform connecting patients with medical services and information.",
      image: "./assets/images/Internship/int-1.png",
      tags: ["React", "Healthcare", "Web App"],
      liveUrl: "https://medilink-india.vercel.app/",
      githubUrl: "https://github.com/ruthwikredd"
    },
    {
      title: "Muscle Works",
      description: "Fitness tracking and workout planning application with personalized routines.",
      image: "./assets/images/Internship/int-2.png",
      tags: ["React", "Fitness", "Mobile-first"],
      liveUrl: "https://muscleworks.vercel.app/",
      githubUrl: "https://github.com/ruthwikredd"
    },
    {
      title: "Dolce Vita",
      description: "Premium restaurant and food ordering platform with elegant UI/UX design.",
      image: "./assets/images/Internship/int-3.png",
      tags: ["React", "Restaurant", "E-commerce"],
      liveUrl: "https://dolcevita-india.vercel.app/",
      githubUrl: "https://github.com/ruthwikredd"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,56,76,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-center mx-auto mb-6">Featured Projects</h2>
        
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Showcasing my most impactful work. Each project represents my commitment to creating elegant, 
          functional, and user-centered digital experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-black/80 backdrop-blur-sm border border-[#ea384c]/10 overflow-hidden group hover:border-[#ea384c]/30 transition-all duration-500 hover:shadow-neon-glow">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold group-hover:text-[#ea384c] transition-colors duration-300">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-[#ea384c]/10 text-[#ea384c] px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-0">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" /> Source Code
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#links" className="btn-outline">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
