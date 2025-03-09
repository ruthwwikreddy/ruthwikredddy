
import { useEffect, useState } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 2000) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[300px] bg-black">
      {/* Banner image */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
        style={{
          backgroundImage: "url('/lovable-uploads/66a4aa4e-770e-4478-9e3d-91d3a776e4ec.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-white z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-shadow-neon-red">Let's Create</span> Something <span className="text-[#ea384c]">Amazing</span>
        </h2>
        <p className={`text-xl max-w-2xl text-center mx-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Ready to transform your ideas into reality? Reach out below and let's start building your next digital experience.
        </p>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-[#ea384c] rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(234, 56, 76, 0.8)',
              animation: `float ${10 + Math.random() * 20}s linear infinite`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
