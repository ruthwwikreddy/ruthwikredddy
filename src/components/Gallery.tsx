
import { useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const galleryImages = [
  '/src/assets/images/Certificate Portfolio/Certificate Portfolio-01.png',
  '/src/assets/images/Certificate Portfolio/Certificate Portfolio-02.png',
  '/src/assets/images/Certificate Portfolio/Certificate Portfolio-03.png',
  '/src/assets/images/Certificate Portfolio/Certificate Portfolio-04.png',
  '/src/assets/images/Certificate Portfolio/Certificate Portfolio-05.png',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full h-full">
      <RevealOnScroll>
        <div className="mb-8">
          <h2 className="section-title text-[#007BFF] text-center">Gallery</h2>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <RevealOnScroll key={index} delay={index * 100}>
            <motion.div 
              className="aspect-square overflow-hidden rounded-lg border border-[#007BFF]/20 hover:border-[#007BFF]/60 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)" }}
              onClick={() => handleImageClick(image)}
            >
              <img 
                src={image} 
                alt={`Gallery item ${index + 1}`} 
                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity duration-300"
              />
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Modal for viewing full-size images */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Full size preview" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-neon-glow border border-[#007BFF]/30"
            />
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#007BFF] transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
