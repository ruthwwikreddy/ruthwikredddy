
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, ZoomIn, ZoomOut, X } from 'lucide-react';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('microsoft');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [modalType, setModalType] = useState<'certificate' | 'offer' | null>(null);
  
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

  const certificates = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    url: `/assets/images/Certificate Portfolio/Certificate Portfolio-${String(i + 1).padStart(2, '0')}.png`
  }));

  const openModal = (index: number, type: 'certificate' | 'offer') => {
    setSelectedImageIndex(index);
    setZoomLevel(1); // Reset zoom level when opening a new image
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    setModalType(type); // Set the type of modal to open
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    setModalType(null);
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 3)); // Max zoom level 3x
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5)); // Min zoom level 0.5x

  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % certificates.length);
    }
  };

  const showPreviousImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + certificates.length) % certificates.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "ArrowLeft") {
        showPreviousImage();
      } else if (e.key === "+" || e.key === "=") {
        zoomIn();
      } else if (e.key === "-") {
        zoomOut();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {certificates.map((cert, index) => (
                  <div key={cert.id} className="certificate-item bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <button 
                      onClick={() => openModal(index, 'certificate')}
                      className="block relative aspect-[4/3] overflow-hidden w-full"
                    >
                      <img
                        src={cert.url}
                        alt={`Certificate ${cert.id}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                        <span className="bg-white text-portfolio-primary px-4 py-2 rounded-full text-sm font-medium">
                          View Certificate
                        </span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedImageIndex !== null && modalType === 'certificate' && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={closeModal}></div>
          
          <div className="relative z-10 max-w-7xl w-full h-full flex flex-col">
            <div className="flex justify-between items-center p-4">
              <div className="text-white text-lg">
                Certificate {selectedImageIndex + 1} of {certificates.length}
              </div>
              <div className="flex space-x-4">
                <button onClick={zoomIn} className="text-white hover:text-portfolio-primary">
                  <ZoomIn className="h-6 w-6" />
                </button>
                <button onClick={zoomOut} className="text-white hover:text-portfolio-primary">
                  <ZoomOut className="h-6 w-6" />
                </button>
                <button onClick={closeModal} className="text-white hover:text-portfolio-primary">
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto flex items-center justify-center">
              <div
                className="cursor-move relative"
                style={{ 
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                {selectedImageIndex !== null && (
                  <img
                    src={certificates[selectedImageIndex].url}
                    alt={`Certificate ${certificates[selectedImageIndex].id}`}
                    className="max-h-[80vh]"
                    style={{ maxWidth: '90vw' }}
                  />
                )}
              </div>
            </div>
            
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={showPreviousImage}
                className="bg-white rounded-full p-2 text-portfolio-dark hover:bg-portfolio-primary hover:text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={showNextImage}
                className="bg-white rounded-full p-2 text-portfolio-dark hover:bg-portfolio-primary hover:text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
