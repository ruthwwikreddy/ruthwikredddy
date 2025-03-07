
const Blogs = () => {
  const blogs = [
    {
      title: "AI in Healthcare: Transforming Patient Care and Medical Research",
      description: "Exploring how artificial intelligence is revolutionizing healthcare delivery and medical research.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/ai-in-healthcare-transforming-patient.html"
    },
    {
      title: "Introduction to Machine Learning: A Beginner's Guide",
      description: "A comprehensive guide to understanding the basics of machine learning and its applications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/introduction-to-machine-learning.html"
    },
    {
      title: "Cybersecurity in the Age of AI: Challenges and Solutions",
      description: "Analyzing the intersection of AI and cybersecurity in today's digital landscape.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/cybersecurity-in-age-of-ai-challenges.html"
    },
    {
      title: "Why Python is the Best Language for Beginners",
      description: "Understanding why Python has become the go-to programming language for beginners.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/why-python-is-best-language-for.html"
    },
    {
      title: "5G Technology: How It Will Transform Industries",
      description: "Exploring the impact of 5G technology across various sectors and industries.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/5g-technology-how-it-will-transform.html"
    },
    {
      title: "Exploring the World of Artificial Intelligence",
      description: "A deep dive into the fundamentals of AI and its growing influence.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      url: "https://ruthwikredd.blogspot.com/2024/08/exploring-world-of-artificial.html"
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">Blog Posts</h2>
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-dark mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a 
                  href={blog.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-portfolio-primary font-medium hover:text-portfolio-secondary transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
