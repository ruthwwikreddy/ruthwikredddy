import React from 'react';

const Featured = () => {
  const featuredLinks = [
    { url: "https://youthideathon.in/world-entrepreneur-day-celebrating-those-who-make-big-ideas-happen/", title: "Turning Big Ideas into Reality: Celebrating World Entrepreneur Day" },
    { url: "https://youthideathon.in/todays-blog-on-webinar-start-your-startup/", title: "From Idea to Reality: Insights from the 'Start Your Startup' Webinar" },
    { url: "https://www.amsporps.org/accolades_2022_2023/28.ATAL_Innovation_Summit.pdf", title: "ATAL Innovation Summit: Celebrating Young Innovators" },
    { url: "https://hyperstack.id/credential/85b77067-ee11-4696-8f4e-b4afba8cc898", title: "ATL Marathon 2022 - 23 - Top 400 Teams" },
    { url: "https://portal.itscredible.com/qr/455692314649", title: "Top 1000 at Youth Ideathon 2023" },
    { url: "https://hyperstack.id/credential/3e2777ac-e851-436b-9cd2-ed068e0c13b1", title: "Tinkerpreneur 2024" },
    { url: "https://unstop.com/certificate-preview/292ce27d-1251-4963-9e94-9478607f492d?utm_campaign=", title: "Webinar on Future of Semiconductor" },
    { url: "https://unstop.com/certificate-preview/b1a0bceb-806a-42ff-bf12-601347f504e7?utm_campaign=", title: "Participated in the InnoVision 2024: Igniting Ideas, Shaping the Future" },
    { url: "http://unstop.com/certificate-preview/24341243-70d2-4c7a-be8a-bbb5ff82fd2d", title: "Participated in the Youth Entrepreneurship Challenge" },
    { url: "https://unstop.com/certificate-preview/17785b0d-2049-440d-8491-fb660f9ff070", title: "Participated in the TATA Crucible Campus Quiz 2024" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/13996561", title: "Innovating with Google Cloud Artificial Intelligence" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/12784720", title: "Introduction to Security Principles in Cloud Computing" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/11605627", title: "Introduction to Data Analytics in Google Cloud" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/8372913", title: "Introduction to Large Language Models" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/7997050", title: "Introduction to Responsible AI" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/6360159", title: "Introduction to Generative AI" },
  ];

  return (
    <section id="featured" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-4xl font-bold text-red-500 uppercase tracking-widest mb-12">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredLinks.map((link, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all border border-red-500 hover:shadow-red-500/50"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-red-400 hover:text-red-300 block transition-all text-center"
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;