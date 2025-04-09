
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
  
  const certificates = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    url: `\\assets\\images\\Certificate Portfolio\\Certificate Portfolio-${String(i + 1).padStart(2, '0')}.png`
  }));

  const openModal = (index: number, type: 'certificate' | 'offer') => {
    setSelectedImageIndex(index);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
    setModalType(null);
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 3));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));

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
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">Certifications</h2>
        
        <div className="mt-12">
          <div className="flex border-b border-[#032950]/30 mb-8">
            <button
              className={`py-3 px-6 font-medium transition-colors ${
                activeTab === 'microsoft'
                  ? 'text-[#032950] border-b-2 border-[#032950] shadow-[0_4px_8px_-4px_rgba(3,41,80,0.7)]'
                  : 'text-gray-400 hover:text-[#032950]'
              }`}
              onClick={() => setActiveTab('microsoft')}
            >
              Microsoft
            </button>
            <button
              className={`py-3 px-6 font-medium transition-colors ${
                activeTab === 'google'
                  ? 'text-[#032950] border-b-2 border-[#032950] shadow-[0_4px_8px_-4px_rgba(3,41,80,0.7)]'
                  : 'text-gray-400 hover:text-[#032950]'
              }`}
              onClick={() => setActiveTab('google')}
            >
              Google
            </button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {activeTab === 'microsoft' 
              ? certifications.microsoft.map((cert, index) => (
                <div key={index} className="badge-item">
                  <div className="mb-4 flex items-center justify-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-black/50 border border-[#032950]/30 shadow-[0_0_15px_rgba(3,41,80,0.3)]">
                      <Award className="h-7 w-7 text-[#032950]" />
                    </span>
                  </div>
                  <h4 className="text-center font-medium text-white">{cert.name}</h4>
                </div>
              ))
              : certifications.google.map((cert, index) => (
                <div key={index} className="badge-item">
                  <div className="mb-4 flex items-center justify-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-black/50 border border-[#032950]/30 shadow-[0_0_15px_rgba(3,41,80,0.3)]">
                      <Award className="h-7 w-7 text-[#032950]" />
                    </span>
                  </div>
                  <h4 className="text-center font-medium text-white">{cert.name}</h4>
                  <p className="text-center text-xs text-gray-400 mt-2">{cert.date}</p>
                </div>
              ))
            }
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 neon-text">All Certificates</h3>
            <div className="relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {certificates.map((cert, index) => (
                  <div key={cert.id} className="bg-black border border-[#032950]/20 rounded-lg overflow-hidden hover:border-[#032950]/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(3,41,80,0.4)] group">
                    <button 
                      onClick={() => openModal(index, 'certificate')}
                      className="block relative aspect-[4/3] overflow-hidden w-full"
                    >
                      <img
                        src={cert.url}
                        alt={`Certificate ${cert.id}`}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter saturate-0 group-hover:saturate-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Award className="w-8 h-8 text-[#032950] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0" />
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
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={closeModal}></div>
          
          <div className="relative z-10 max-w-7xl w-full h-full flex flex-col">
            <div className="flex justify-between items-center p-4">
              <div className="text-[#032950] text-lg">
                Certificate {selectedImageIndex + 1} of {certificates.length}
              </div>
              <div className="flex space-x-4">
                <button onClick={zoomIn} className="text-white hover:text-[#032950] transition-colors">
                  <ZoomIn className="h-6 w-6" />
                </button>
                <button onClick={zoomOut} className="text-white hover:text-[#032950] transition-colors">
                  <ZoomOut className="h-6 w-6" />
                </button>
                <button onClick={closeModal} className="text-white hover:text-[#032950] transition-colors">
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
                    className="max-h-[80vh] border border-[#032950]/30 shadow-[0_0_30px_rgba(3,41,80,0.3)]"
                    style={{ maxWidth: '90vw' }}
                  />
                )}
              </div>
            </div>
            
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={showPreviousImage}
                className="bg-[#032950] rounded-full p-2 text-white hover:bg-[#021c33] hover:shadow-[0_0_15px_rgba(3,41,80,0.7)] transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={showNextImage}
                className="bg-[#032950] rounded-full p-2 text-white hover:bg-[#021c33] hover:shadow-[0_0_15px_rgba(3,41,80,0.7)] transition-all duration-300"
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
