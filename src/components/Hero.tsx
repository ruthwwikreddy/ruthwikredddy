
import { Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-portfolio-secondary mb-2">
              Ruthwik Reddy
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-6">
              Akkenapally Ruthwik Reddy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Student • Innovator • Tech Enthusiast
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-portfolio-primary mr-3" />
                <a href="mailto:akkenapally.reddy@gmail.com" className="text-gray-700 hover:text-portfolio-primary transition-colors">
                  akkenapally.reddy@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-portfolio-primary mr-3" />
                <a href="tel:+919989306597" className="text-gray-700 hover:text-portfolio-primary transition-colors">
                  +91 9989306597
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-portfolio-primary mr-3" />
                <span className="text-gray-700">Hyderabad, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Get In Touch</a>
              <a href="#projects" className="btn-outline">View Projects</a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-portfolio-primary rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 bg-portfolio-secondary rounded-full opacity-20"></div>
              <div className="absolute inset-8 bg-white rounded-full shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500" 
                  alt="Ruthwik Reddy"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
