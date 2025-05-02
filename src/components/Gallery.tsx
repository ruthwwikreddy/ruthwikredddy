
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // On mount, load all images from the Certificate Portfolio folder
  useEffect(() => {
    // In a real dynamic scenario, this would be an API call or dynamic import
    // For now, we'll use the known certificate images
    const imageFiles = [
      '/src/assets/images/Certificate Portfolio/Certificate Portfolio-01.png',
      '/src/assets/images/Certificate Portfolio/Certificate Portfolio-02.png',
      '/src/assets/images/Certificate Portfolio/Certificate Portfolio-03.png',
      '/src/assets/images/Certificate Portfolio/Certificate Portfolio-04.png',
      '/src/assets/images/Certificate Portfolio/Certificate Portfolio-05.png',
      '/src/assets/images/Certificate Portfolio/Certificate Portfolio-06.png',
      '/src/assets/images/Certificate Portfolio/Certificate Portfolio-07.png',
      '/src/assets/images/Certificate Portfolio/Certificate Portfolio-08.png',
    ];
    
    const images = imageFiles.map((src, index) => ({
      src,
      alt: `Certificate ${index + 1}`
    }));
    
    setGalleryImages(images);
    setIsLoading(false);
  }, []);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full h-full" ref={galleryRef}>
      <RevealOnScroll>
        <div className="mb-8">
          <h2 className="section-title text-[#007BFF] text-center md:text-left">Gallery</h2>
        </div>
      </RevealOnScroll>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <motion.div
            className="w-12 h-12 border-4 border-[#007BFF] border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {galleryImages.map((image, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <motion.div 
                className="aspect-square overflow-hidden rounded-lg glass-card border border-[#007BFF]/20 cursor-pointer relative group"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 20px rgba(0, 123, 255, 0.4)",
                  borderColor: "rgba(0, 123, 255, 0.6)"
                }}
                onClick={() => handleImageClick(image.src)}
                layoutId={`gallery-image-${index}`}
              >
                <motion.img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                />
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.div 
                    className="text-white text-sm p-2 bg-[#007BFF]/80 rounded-md backdrop-blur-sm"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    View Certificate
                  </motion.div>
                </motion.div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      )}

      {/* Modal for viewing full-size images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-4xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
              layoutId={`gallery-modal-${selectedImage}`}
            >
              <img 
                src={selectedImage} 
                alt="Full size preview" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-neon-glow border border-[#007BFF]/30"
              />
              <motion.button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-[#007BFF] transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Close</span>
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 hover:border-[#007BFF]">✕</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
