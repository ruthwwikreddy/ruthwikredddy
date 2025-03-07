
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-8">
      <div className="container mx-auto">
        <div className="text-center">
          <p>© {currentYear} Ruthwik Reddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
