"use client"

import Image from 'next/image';
import React, { useState } from 'react';

type Project = {
  id: number;
  title: string;
  location: string;
  category: string;
  status: string;
  duration: string;
  budget: string;
  area: string;
  rooms: string;
  year: string;
  mainImage: string;
  gallery: string[];
  description: string;
  features: string[];
  materials: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
};

// const ProjectCard = ({ project, index, isActive, onClick }) => {
//   return (
//     <div 
//       className={`group cursor-pointer transition-all duration-500 ${
//         isActive ? 'scale-105' : 'hover:scale-102'
//       }`}
//       onClick={() => onClick(index)}
//     >
//       <div className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ${
//         isActive ? 'shadow-2xl border-2 border-[#7F6456]' : 'shadow-lg hover:shadow-xl'
//       }`}>
//         {/* Main Project Image */}
//         <div className="relative h-80 overflow-hidden">
//           <img
//             src={project.mainImage}
//             alt={project.title}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />
          
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
//           {/* Project Category Badge */}
//           <div className="absolute top-4 left-4 z-10">
//             <span className="px-3 py-1 bg-[#7F6456] text-white text-sm font-semibold rounded-full backdrop-blur-sm">
//               {project.category}
//             </span>
//           </div>
          
//           {/* Project Status */}
//           <div className="absolute top-4 right-4 z-10">
//             <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full backdrop-blur-sm ${
//               project.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
//             }`}>
//               {project.status}
//             </span>
//           </div>
          
//           {/* Project Title & Quick Info */}
//           <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//             <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//             <p className="text-sm opacity-90 mb-2">{project.location}</p>
//             <div className="flex items-center gap-4 text-sm">
//               <span className="flex items-center gap-1">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
//                 </svg>
//                 {project.duration}
//               </span>
//               <span className="flex items-center gap-1">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-8a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd"/>
//                 </svg>
//                 {project.budget}
//               </span>
//             </div>
//           </div>
//         </div>
        
//         {/* Active Indicator */}
//         {isActive && (
//           <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#7F6456] rotate-45 border-2 border-white"></div>
//         )}
//       </div>
//     </div>
//   );
// };

type ProjectDetailsProps = {
  project: Project;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7F6456] to-[#A68B7A] text-white p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg opacity-90">{project.location}</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{project.area}</div>
              <div className="text-sm opacity-80">Area</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{project.rooms}</div>
              <div className="text-sm opacity-80">Rooms</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className="p-8">
        <div className="mb-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image fill 
              src={project.gallery[selectedImageIndex]}
              alt={`${project.title} - Image ${selectedImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Thumbnail Gallery */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {project.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                selectedImageIndex === index 
                  ? 'ring-3 ring-[#7F6456] shadow-lg' 
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <Image fill
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        
        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Description & Features */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#7F6456] mb-4">Project Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-[#7F6456] mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7F6456] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-[#7F6456] mb-3">Materials Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((material, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F5F1ED] text-[#7F6456] rounded-full text-sm font-medium"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Stats & Info */}
          <div className="space-y-6">
            <div className="bg-[#F5F1ED] rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-[#7F6456] mb-4">Project Details</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-semibold text-[#7F6456]">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-[#7F6456]">{project.duration}</span>
                </div>
                {/* <div className="flex justify-between">
                  <span className="text-gray-600">Budget Range</span>
                  <span className="font-semibold text-[#7F6456]">{project.budget}</span>
                </div> */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className={`font-semibold ${
                    project.status === 'Completed' ? 'text-green-600' : 'text-blue-600'
                  }`}>{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year</span>
                  <span className="font-semibold text-[#7F6456]">{project.year}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-[#7F6456] mb-3">Client Testimonial</h4>
              <div className="bg-white border-l-4 border-[#7F6456] pl-6 py-4">
                <p className="text-gray-700 italic mb-3">&quot{project.testimonial.quote}&quot</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#7F6456] rounded-full flex items-center justify-center text-white font-bold">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#7F6456]">{project.testimonial.author}</div>
                    <div className="text-sm text-gray-500">{project.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-[#7F6456] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#6B5447] transition-colors duration-300">
                Start Similar Project
              </button>
              <button className="px-6 py-3 border-2 border-[#7F6456] text-[#7F6456] rounded-xl font-semibold hover:bg-[#7F6456] hover:text-white transition-all duration-300">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedProjectsSection = () => {
  const [selectedProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Modern Villa Transformation",
      location: "Dubai Hills Estate, UAE",
      category: "Residential",
      status: "Completed",
      duration: "6 months",
      budget: "$250K - $300K",
      area: "4,500 sq ft",
      rooms: "5 BR + 6 BA",
      year: "2024",
      mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "A complete transformation of a traditional villa into a contemporary masterpiece. This project showcases our expertise in blending modern design principles with functional living spaces. Every corner was redesigned to maximize natural light, create seamless flow between indoor and outdoor spaces, and incorporate sustainable materials throughout.",
      features: [
        "Open-concept living with 20-foot ceilings",
        "Smart home automation system",
        "Sustainable materials and energy-efficient design",
        "Custom-built wardrobes and storage solutions",
        "Landscaped garden with outdoor entertainment area",
        "Premium Italian marble and hardwood flooring",
        "Designer lighting fixtures throughout"
      ],
      materials: ["Italian Marble", "Teak Wood", "Steel", "Glass", "Natural Stone"],
      testimonial: {
        quote: "ArchiWood transformed our house into a dream home. Their attention to detail and commitment to quality is unmatched.",
        author: "Sarah Al-Mansouri",
        role: "Homeowner"
      }
    },
    {
      id: 2,
      title: "Corporate Office Redesign",
      location: "Business Bay, Dubai",
      category: "Commercial",
      status: "Completed",
      duration: "4 months",
      budget: "$150K - $200K",
      area: "3,200 sq ft",
      rooms: "8 Offices + Meeting Rooms",
      year: "2024",
      mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "A comprehensive office redesign focused on creating a collaborative and inspiring work environment. The project involved transforming a traditional office layout into a modern, flexible workspace that promotes productivity and employee well-being.",
      features: [
        "Flexible workstations with ergonomic furniture",
        "Collaborative meeting spaces with AV integration",
        "Wellness room and quiet zones",
        "Modern kitchen and break areas",
        "Branded elements and company culture integration",
        "Acoustic solutions for noise reduction"
      ],
      materials: ["Laminated Wood", "Acoustic Panels", "Glass Partitions", "Metal Fixtures"],
      testimonial: {
        quote: "The new office design has significantly improved our team's productivity and created a more positive work environment.",
        author: "Ahmed Hassan",
        role: "CEO, Tech Solutions Inc."
      }
    },
    {
      id: 3,
      title: "Luxury Restaurant Interior",
      location: "JBR, Dubai",
      category: "Hospitality",
      status: "In Progress",
      duration: "5 months",
      budget: "$300K - $400K",
      area: "2,800 sq ft",
      rooms: "Dining + Kitchen + Bar",
      year: "2024",
      mainImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "An upscale dining experience featuring contemporary design with Middle Eastern influences. This project combines luxury materials with cultural elements to create an unforgettable ambiance for guests.",
      features: [
        "Custom-designed seating and dining furniture",
        "Ambient lighting with dimming controls",
        "Premium kitchen equipment and layout",
        "Private dining areas with acoustic privacy",
        "Outdoor terrace with sea views"
      ],
      materials: ["Brass Accents", "Velvet Upholstery", "Marble", "Walnut Wood"],
      testimonial: {
        quote: "The design perfectly captures our vision of modern luxury dining with cultural authenticity.",
        author: "Omar Al-Rashid",
        role: "Restaurant Owner"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#7F6456] via-[#A68B7A] to-[#7F6456] bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#7F6456] to-[#A68B7A] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of exceptional projects that showcase our commitment to quality, innovation, and design excellence.
          </p>
        </div> */}

        {/* Project Cards */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={selectedProject === index}
              onClick={setSelectedProject}
            />
          ))}
        </div> */}

        {/* Selected Project Details */}
        <ProjectDetails project={projects[selectedProject]} />
      </div>
    </section>
  );
};

export default EnhancedProjectsSection;