
import { Code, Users, FileText, Stethoscope } from 'lucide-react';

const Projects = () => {
  const tags = ['Healthcare', 'Web App', 'Patient Management', 'Medical Records'];
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">Projects</h2>
        
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-portfolio-dark">MediLink</h3>
                  <p className="text-gray-600">MediLink: Simplifying Healthcare Access and Management</p>
                </div>
                <div className="text-sm text-gray-500">Mar 2024 - Present</div>
              </div>
              
              <p className="text-gray-700 mb-6">
                MediLink is a revolutionary healthcare management platform aimed at making healthcare more accessible and efficient. 
                This project focuses on streamlining patient information, enhancing communication between doctors and patients, 
                and ensuring smoother healthcare operations. It offers a centralized system for storing medical records, 
                scheduling appointments, and monitoring patient progress, all within a secure environment.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-portfolio-secondary rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-portfolio-secondary">Challenges</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-portfolio-primary text-sm font-medium">1</span>
                      </span>
                      <span>Fragmented healthcare data across multiple systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-portfolio-primary text-sm font-medium">2</span>
                      </span>
                      <span>Inefficient appointment scheduling processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-portfolio-primary text-sm font-medium">3</span>
                      </span>
                      <span>Lack of integration across healthcare platforms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-portfolio-primary text-sm font-medium">4</span>
                      </span>
                      <span>Need for rapid validation of core features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-portfolio-primary text-sm font-medium">5</span>
                      </span>
                      <span>Budget constraints while maintaining quality</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-portfolio-secondary">Solution</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-portfolio-primary text-sm font-medium">1</span>
                      </span>
                      <span>Developed core features: patient registration, appointment scheduling, and doctor availability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-portfolio-primary text-sm font-medium">2</span>
                      </span>
                      <span>Created intuitive interface for both healthcare providers and patients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-portfolio-primary text-sm font-medium">3</span>
                      </span>
                      <span>Integrated cloud-based systems for handling patient records</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-portfolio-primary text-sm font-medium">4</span>
                      </span>
                      <span>Implemented secure communication tools for doctor-patient interaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-portfolio-primary text-sm font-medium">5</span>
                      </span>
                      <span>Launched MVP to a limited group for testing and feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-portfolio-secondary">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-portfolio-primary mr-2" />
                        <h5 className="font-medium">Validation</h5>
                      </div>
                      <p className="text-sm text-gray-600">Successfully validated key platform features</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-portfolio-primary mr-2" />
                        <h5 className="font-medium">Feedback</h5>
                      </div>
                      <p className="text-sm text-gray-600">Gathered valuable user feedback for optimization</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Code className="h-5 w-5 text-portfolio-primary mr-2" />
                        <h5 className="font-medium">Cost</h5>
                      </div>
                      <p className="text-sm text-gray-600">Achieved significant cost savings through MVP approach</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Stethoscope className="h-5 w-5 text-portfolio-primary mr-2" />
                        <h5 className="font-medium">Engagement</h5>
                      </div>
                      <p className="text-sm text-gray-600">High engagement rates from both providers and patients</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-portfolio-secondary">Impact</h4>
                  <p className="text-gray-700">
                    The collaboration with VentureX enabled MediLink to transform their innovative healthcare solution 
                    from concept to reality. Through our MVP development approach, they validated their idea, 
                    optimized their product based on real user feedback, and set a strong foundation for future growth.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <a href="#" className="text-portfolio-primary hover:text-portfolio-secondary transition-colors font-medium text-sm">
                      MediLink India
                    </a>
                    <span className="text-gray-300">•</span>
                    <a href="#" className="text-portfolio-primary hover:text-portfolio-secondary transition-colors font-medium text-sm">
                      MediLink Portal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
