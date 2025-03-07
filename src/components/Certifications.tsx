
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('microsoft');
  
  const certifications = {
    microsoft: [
      { name: "Fundamentals of Azure AI Services" },
      { name: "Microsoft Azure AI Fundamentals: AI Overview" },
      { name: "Fundamental AI Concepts" },
      { name: "Fundamentals of Machine Learning" },
    ],
    google: [
      { name: "Introduction to Security Principles in Cloud Computing", date: "Earned Nov 12, 2024" },
      { name: "Introduction to Data Analytics in Google Cloud", date: "Earned Sep 22, 2024" },
      { name: "Introduction to Large Language Models", date: "Earned Mar 19, 2024" },
      { name: "Introduction to Responsible AI", date: "Earned Feb 9, 2024" },
      { name: "Introduction to Generative AI", date: "Earned Nov 26, 2023" },
    ]
  };
  
  const activities = [
    "Successfully led teams for Youth Ideathon competitions: Top 100 (2022, 2023), Top 1500 (2024)",
    "Participated in Atal Marathon 2023, achieving Top 400 ranking.",
    "Finalist in Indian Future Tycoon, focusing on innovative entrepreneurship.",
    "Represented school in the National Space Innovation Challenge 2023.",
    "Registered and participated in the 40-day ATL Tinkerpreneur Program 2024.",
    "Participated in ATL campaigns promoting STEM and innovation.",
    "Represented School at CBSE Regional Science Exhibition.",
    "Participated in Yugen 4.0 MUN and CBSE National Youth Parliament.",
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">Certifications</h2>
        
        <div className="mt-12">
          <div className="flex border-b border-gray-200 mb-8">
            <button
              className={`py-3 px-6 font-medium transition-colors ${
                activeTab === 'microsoft'
                  ? 'text-portfolio-primary border-b-2 border-portfolio-primary'
                  : 'text-gray-500 hover:text-portfolio-primary'
              }`}
              onClick={() => setActiveTab('microsoft')}
            >
              Microsoft Badges
            </button>
            <button
              className={`py-3 px-6 font-medium transition-colors ${
                activeTab === 'google'
                  ? 'text-portfolio-primary border-b-2 border-portfolio-primary'
                  : 'text-gray-500 hover:text-portfolio-primary'
              }`}
              onClick={() => setActiveTab('google')}
            >
              Google Badges
            </button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {activeTab === 'microsoft' 
              ? certifications.microsoft.map((cert, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4 flex items-center justify-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Award className="h-6 w-6 text-portfolio-primary" />
                    </span>
                  </div>
                  <h4 className="text-center font-medium text-portfolio-dark">{cert.name}</h4>
                  <div className="mt-4 text-center">
                    <button className="text-sm text-portfolio-primary hover:text-portfolio-secondary transition-colors">
                      View Certificate
                    </button>
                  </div>
                </div>
              ))
              : certifications.google.map((cert, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4 flex items-center justify-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Award className="h-6 w-6 text-portfolio-primary" />
                    </span>
                  </div>
                  <h4 className="text-center font-medium text-portfolio-dark">{cert.name}</h4>
                  <p className="text-center text-xs text-gray-500 mt-2">{cert.date}</p>
                  <div className="mt-4 text-center">
                    <button className="text-sm text-portfolio-primary hover:text-portfolio-secondary transition-colors">
                      View Certificate
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Co-Curricular Activities (CCA)</h3>
            <div className="bg-blue-50 rounded-lg p-6">
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-portfolio-primary text-sm font-medium">{index + 1}</span>
                    </span>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">All Certificates</h3>
            <div className="relative">
              <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                {Array.from({ length: 24 }, (_, i) => (
                  <div key={i} className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Certificate {i + 1}</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-portfolio-dark">Certificate {i + 1}</h4>
                      <div className="mt-2">
                        <a href="#" className="text-sm text-portfolio-primary hover:text-portfolio-secondary transition-colors">
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
                <ChevronLeft className="h-5 w-5 text-portfolio-dark" />
              </button>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
                <ChevronRight className="h-5 w-5 text-portfolio-dark" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
