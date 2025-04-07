
import React from 'react';
import { Code, Users, FileText, Stethoscope, Dumbbell, Cake } from 'lucide-react';

export interface Result {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export interface Link {
  text: string;
  url: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  tagline: string;
  category: string;
  period: string;
  description: string;
  tags: string[];
  challenges: string[];
  solutions: string[];
  results: Result[];
  impact: string;
  links: Link[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "MediLink Healthcare Platform",
    tagline: "Revolutionizing healthcare management through innovative MVP development",
    category: "Healthcare",
    period: "Mar 2024 - Present",
    description: "MediLink sought to streamline healthcare access, enhance patient safety, and optimize resource utilization through an innovative healthcare management platform.",
    tags: ['Healthcare', 'Web App', 'Patient Management', 'Medical Records'],
    challenges: [
      "Fragmented healthcare data across multiple systems",
      "Inefficient appointment scheduling processes",
      "Lack of integration across healthcare platforms",
      "Need for rapid validation of core features",
      "Budget constraints while maintaining quality"
    ],
    solutions: [
      "Developed core features: patient registration, appointment scheduling, and doctor availability",
      "Created intuitive interface for both healthcare providers and patients",
      "Integrated cloud-based systems for handling patient records",
      "Implemented secure communication tools for doctor-patient interaction",
      "Launched MVP to a limited group for testing and feedback"
    ],
    results: [
      {
        title: "Validation",
        icon: <FileText className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Successfully validated key platform features"
      },
      {
        title: "Feedback",
        icon: <Users className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Gathered valuable user feedback for optimization"
      },
      {
        title: "Cost",
        icon: <Code className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Achieved significant cost savings through MVP approach"
      },
      {
        title: "Engagement",
        icon: <Stethoscope className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "High engagement rates from both providers and patients"
      }
    ],
    impact: "The collaboration enabled MediLink to transform their innovative healthcare solution from concept to reality. Through the MVP development approach, they validated their idea, optimized their product based on real user feedback, and set a strong foundation for future growth.",
    links: [
      {
        text: "MediLink V1",
        url: "https://ruthwikreddy.xyz/medilink/"
      },
      {
        text: "MediLink V2",
        url: "https://medilinkindia.glide.page/"
      },
      {
        text: "MediLink Main",
        url: "https://medilink-india.vercel.app/"
      },
      {
        text: "Emergency Card",
        url: "https://ruthwikreddy.xyz/emergency-card/"
      }
    ]
  },
  {
    id: 2,
    title: "Muscle Works Fitness Platform",
    tagline: "Digital transformation for a modern fitness experience",
    category: "Fitness",
    period: "Jan 2024 - Mar 2024",
    description: "Muscle Works needed a comprehensive digital platform to streamline member registration, booking systems, and enhance customer engagement while maintaining personalized training services.",
    tags: ['Fitness', 'Web App', 'Member Management', 'Booking System'],
    challenges: [
      "Need for efficient member registration and booking systems",
      "Difficulty in scaling customer engagement while maintaining personalized training services",
      "Enhancing digital presence to reach a broader audience"
    ],
    solutions: [
      "Developed an MVP to streamline membership registration and trial booking processes",
      "Integrated personalized training features, including workout plans, BMI calculators, and nutrition guides",
      "Implemented a scalable platform for managing customer data, memberships, and schedules",
      "Refined the branding and user interface (UI) for better user engagement"
    ],
    results: [
      {
        title: "Launch",
        icon: <FileText className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Successfully launched a digital platform for seamless user experience"
      },
      {
        title: "Streamline",
        icon: <Users className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Streamlined customer registration and trial bookings"
      },
      {
        title: "Presence",
        icon: <Code className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Enhanced digital presence with a user-friendly website"
      },
      {
        title: "Engagement",
        icon: <Dumbbell className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Improved customer interaction and engagement"
      }
    ],
    impact: "The collaboration empowered Muscle Works to expand its services with a robust digital platform, improving customer engagement and increasing efficiency in managing memberships. By leveraging the MVP development process, Muscle Works quickly validated its digital strategy, optimized operations, and enhanced user experience, setting a strong foundation for future growth.",
    links: [
      {
        text: "Muscle Works",
        url: "https://muscleworks.vercel.app/"
      }
    ]
  },
  {
    id: 3,
    title: "Dolce Vita Digital Platform",
    tagline: "Transforming custom cake ordering experience",
    category: "Food & Beverage",
    period: "Nov 2023 - Jan 2024",
    description: "Dolce Vita required a sophisticated online ordering system to handle custom cake requests while maintaining quality and scaling their business effectively.",
    tags: ['Food & Beverage', 'E-commerce', 'Custom Orders', 'Delivery'],
    challenges: [
      "Needed an efficient online ordering system to handle custom cake requests",
      "Difficulty in scaling personalized cake orders while maintaining quality",
      "Required a strong digital presence to attract more customers"
    ],
    solutions: [
      "Developed an MVP with a user-friendly interface for easy custom cake browsing and ordering",
      "Integrated a custom order request system for cake personalization",
      "Streamlined order processing and delivery tracking",
      "Enhanced branding and social media engagement strategies"
    ],
    results: [
      {
        title: "Platform",
        icon: <FileText className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Successfully launched an intuitive platform for custom cake ordering"
      },
      {
        title: "Engagement",
        icon: <Users className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Improved customer engagement and order management"
      },
      {
        title: "Expansion",
        icon: <Code className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Expanded reach across Hyderabad"
      },
      {
        title: "Growth",
        icon: <Cake className="h-5 w-5 text-portfolio-primary mr-2" />,
        description: "Increased orders and brand visibility"
      }
    ],
    impact: "Through the MVP development, Dolce Vita transformed from a small custom cake business into a scalable digital brand. By optimizing operations and integrating smart solutions, they created a seamless ordering experience, increased sales, and strengthened their online presence.",
    links: [
      {
        text: "Dolce Vita",
        url: "https://dolcevita-india.vercel.app/"
      }
    ]
  }
];
