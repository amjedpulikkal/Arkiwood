// "use client";
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function Service() {
//   const [cindex, setcIndex] = useState(0);
//   const [time, setTime] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [dragDistance, setDragDistance] = useState(0);
//   const [hasDragged, setHasDragged] = useState(false); // Track if user actually dragged
//   const carouselRef = useRef(null);
//   const router = useRouter();
//   const [textData] = useState([
//     {
//       name: "/todd-kent-178j8tJrNlc-unsplash.jpg",
//       heading: "Architectural Design",
//       body: `Innovative and practical architectural solutions tailored to your vision. From concept to construction, we ensure designs that inspire and perform.`,
//       nav: [
//         "Architectural Design Projects",
//         "3D Rendering and Visualization",
//         "Project Management",
//         "Sustainable and Green Building Practices",
//       ],
//       route: "/architectural-design", // Add route for navigation
//     },
//     {
//       name: "/francesca-tosolini-6japTIjUQoI-unsplash.jpg",
//       heading: "MEP Engineering",
//       body: `Integrated mechanical, electrical, and plumbing systems for optimized performance. We ensure safety, functionality, and compliance in every build.`,
//       nav: [
//         "HVAC and Ducting Systems",
//         "Electrical & Power Layouts",
//         "Plumbing & Drainage Design",
//         "Fire Protection & Coordination Drawings",
//       ],
//       route: "/mep-engineering",
//     },
//     {
//       name: "/photo-1600607687939-ce8a6c25118c.jpg",
//       heading: "Interior Design",
//       body: `Bring life and function into your spaces with creative and client-centric interiors. We blend style with comfort to create environments that speak to you.`,
//       nav: [
//         "Space Planning & Concepts",
//         "Material and Finish Selection",
//         "Lighting & Furniture Design",
//       ],
//       route: "/interior-design",
//     },
//     {
//       name: "/home-2486092_1280.jpg",
//       heading: "Civil & Interior Fit out",
//       body: `End-to-end civil and fit-out solutions that ensure quality and detail in execution.
//     From partitions to finishes, we build with precision.`,
//       nav: [
//         "Partitioning & False Ceilings",
//         "Flooring & Wall Finishes",
//         "Electrical & HVAC Installations",
//         "Plumbing & Sanitary Works",
//       ],
//       route: "/civil-fitout",
//     },
//     {
//       name: "/e10c68fd076d4591ad9389d155d29555.jpg",
//       heading: "Landscaping",
//       body: `Transform outdoor spaces into stunning, functional environments.
//     From lush gardens to modern hardscapes, we design landscapes
//     that harmonize with architecture and nature.`,
//       nav: [
//         "Garden Design",
//         "Landscape Architecture",
//         "Landscaping for Climate",
//         "Sustainable Landscaping",
//       ],
//       route: "/landscaping",
//     },
//     {
//       name: "/0-1--5-.1587627053.6613.webp",
//       heading: "Joinery",
//       body: `Custom woodwork crafted with detail, elegance, and function. We design and fabricate furniture and fixtures that elevate your space.`,
//       nav: [
//         "Custom Furniture Fabrication",
//         "Doors, Frames & Cladding",
//         "Shelving & Storage Units",
//         "Finishing & Polishing Works",
//       ],
//       route: "/carpentry-woodworks",
//     },
//     {
//       name: "/photo-1600566753190-17f0baa2a6c3.jpg",
//       heading: "Authorities",
//       body: `Navigating approval processes is a crucial part of any interior or fit-out project. We assist clients in securing all necessary approvals from relevant authorities and building managements, ensuring designs and installations meet regulatory and landlord standards. From food sector permits to NOCs from mall and building managements, we handle the paperwork so you can focus on your business.`,
//       nav: [
//         "Civil Defense Authorities",
//         "Electricity & Water Authorities",
//         "Environmental & Sustainability Authorities",
//         "Free Zones & Special Authorities",
//       ],
//     },
//     {
//       name: "/33-1100x733.jpg",
//       heading: "Approvals",
//       body: `We specialize in delivering carpentry and joinery works that fully comply with local authority regulations and building management standards across the UAE. Our team is experienced in handling documentation and technical requirements for approvals from entities such as Dubai Municipality, Civil Defense, DEWA, and major Free Zone authorities, ensuring smooth project execution without delays.`,
//       nav: [
//         "Food & Beverage Sector Approvals",
//         "Building Management & Developer Approvals",
//         "Building Owner/Landlord NOC",
//         "Mall Management Approval (For retail spaces)",
//       ],
//     },
//   ]);

//   const nextSlide = () => {
//     if (isDragging) return;
//     setTime((prev) => prev + 1);
//     goNext();
//     // setCurrentSlide((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     if (isDragging) return;
//     goPrev();
//     // setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goToSlide = (index: number) => {
//     if (isDragging) return;
//     // setCurrentSlide(index);
//     setcIndex(index);
//   };
//   const goNext = () => {
//     setcIndex((prevIndex) => {
//       if (prevIndex + 1 === textData.length) {
//         return 0;
//       } else {
//         return prevIndex + 1;
//       }
//     });
//   };
//   const goPrev = () => {
//     setcIndex((prevIndex) => {
//       if (prevIndex === 0) {
//         return textData.length;
//       } else {
//         return prevIndex - 1;
//       }
//     });
//   };
//   // Handle image click for navigation
//   const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     // Only navigate if user didn't drag
//     if (!hasDragged) {
//       e.stopPropagation();
//       const route = textData[cindex].route;
//       console.log(`Navigating to: ${route}`);
//       // Replace with your actual navigation logic
//       router.push(`/ourservices/${textData[cindex].heading}`);
//     }
//   };

//   const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
//     setIsDragging(true);
//     setHasDragged(false);

//     const clientX =
//       e.type === "mousedown"
//         ? (e as React.MouseEvent).clientX
//         : (e as React.TouchEvent).touches[0].clientX;

//     setStartX(clientX);
//     setDragDistance(0);
//   };

//   const handleMove = useCallback(
//     (e: MouseEvent | React.MouseEvent | TouchEvent | React.TouchEvent) => {
//       if (!isDragging) return;

//       let clientX: number;
//       if ("touches" in e) {
//         clientX = (e as TouchEvent).touches[0].clientX;
//       } else {
//         clientX = (e as MouseEvent).clientX;
//       }

//       const distance = clientX - startX;
//       setDragDistance(distance);
//       if (Math.abs(distance) > 5) {
//         setHasDragged(true);
//       }
//     },
//     [isDragging, startX]
//   );

//   const handleEnd = useCallback(() => {
//     if (!isDragging) return;

//     const threshold = 50;
//     if (Math.abs(dragDistance) > threshold && hasDragged) {
//       if (dragDistance > 0) {
//         goPrev();
//         setTime((prev) => prev + 1);
//       } else {
//         goNext();
//         setTime((prev) => prev + 1);
//       }
//     }

//     setIsDragging(false);
//     setHasDragged(false);
//     setDragDistance(0);
//   }, [isDragging, dragDistance, hasDragged, goNext, goPrev, setTime]);

//   // Prevent context menu on long press
//   const handleContextMenu = (e: React.MouseEvent) => {
//     if (isDragging || hasDragged) {
//       e.preventDefault();
//     }
//   };

//   useEffect(() => {
//     const handleGlobalMouseMove = (e: MouseEvent) => {
//       if (isDragging) {
//         handleMove(e as unknown as React.MouseEvent);
//       }
//     };

//     const handleGlobalMouseUp = () => {
//       if (isDragging) {
//         handleEnd();
//       }
//     };

//     if (isDragging) {
//       document.addEventListener("mousemove", handleGlobalMouseMove);
//       document.addEventListener("mouseup", handleGlobalMouseUp);
//     }

//     return () => {
//       document.removeEventListener("mousemove", handleGlobalMouseMove);
//       document.removeEventListener("mouseup", handleGlobalMouseUp);
//     };
//   }, [isDragging, startX, dragDistance, hasDragged]);

//   useEffect(() => {
//     if (!isDragging) {
//       goNext();
//     }
//   }, [time, textData.length, isDragging]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isDragging) {
//         nextSlide();
//       }
//     }, 8000);

//     return () => clearInterval(interval);
//   }, [isDragging]);
//   console.log(cindex);
//   return (
//     <div className="sm:px-20 relative">
//       <div
//         ref={carouselRef}
//         className="relative overflow-hidden rounded-xl h-screen cursor-grab active:cursor-grabbing select-none"
//         onMouseDown={handleStart}
//         onTouchStart={handleStart}
//         onTouchMove={handleMove}
//         onTouchEnd={handleEnd}
//         onContextMenu={handleContextMenu}
//         style={{ touchAction: "pan-y pinch-zoom" }}
//       >
//         {/* Main Carousel Container */}
//         <div className="relative w-full h-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`slid-${cindex}`}
//               className="absolute inset-0"
//               initial={{
//                 opacity: 0,
//                 scale: 1.1,
//                 rotateY: 15,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 rotateY: 0,
//                 x: isDragging ? dragDistance * 0.1 : 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 scale: 0.95,
//                 rotateY: -15,
//               }}
//               transition={{
//                 duration: isDragging ? 0 : 0.8,
//                 ease: [0.4, 0, 0.2, 1],
//               }}
//             >
//               <div
//                 className="w-full h-full relative cursor-pointer"
//                 onClick={handleImageClick}
//                 style={{
//                   boxShadow: `
//                     inset 0 8px 8px -8px rgba(0, 0, 0, 0.5),
//                     inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)
//                   `,
//                 }}
//               >
//                 <motion.div
//                   className="w-full h-full "
//                   initial={{ scale: 1.2 }}
//                   animate={{ scale: 1 }}
//                   transition={{
//                     duration: 1.2,
//                     ease: "easeOut",
//                   }}
//                   draggable={false}
//                 >
//                   <Image
//                     src={textData[cindex].name}
//                     fill
//                     className="object-cover pointer-events-none"
//                     alt={textData[cindex].name}
//                   />
//                 </motion.div>
//                 <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

//                 {/* Click indicator overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                   <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
//                     <svg
//                       className="w-8 h-8 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Drag Indicator */}
//           {isDragging && hasDragged && (
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white/20 backdrop-blur-sm rounded-full p-4 pointer-events-none">
//               <div className="sm:block hidden">
//                 <div className="flex items-center gap-2 text-white">
//                   {dragDistance > 0 ? (
//                     <>
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M15 19l-7-7 7-7"
//                         />
//                       </svg>
//                       <span className="text-sm font-medium">Previous</span>
//                     </>
//                   ) : (
//                     <>
//                       <span className="text-sm font-medium">Next</span>
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
//         >
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
//         >
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
//           {textData.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === cindex ? "bg-white" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Text Overlay Panel */}
//         <AnimatePresence>
//           <motion.div
//             key={cindex}
//             className="absolute bg-gray-200 w-80 h-52 top-0 right-0 z-20 rounded-bl-xl shadow-lg"
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//           >
//             <motion.div
//               className="flex justify-center items-start flex-col h-full p-6"
//               key={`text-${cindex}`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.3 }}
//             >
//               <h3 className="text-xl font-extrabold text-amber-800 mb-3">
//                 {textData[cindex].heading}
//               </h3>

//               <div className="space-y-1">
//                 {textData[cindex].nav &&
//                   textData[cindex].nav.map((item, idx) => (
//                     <div key={idx} className="flex items-center gap-2 text-sm">
//                       <svg
//                         className="w-3 h-3 text-amber-700 flex-shrink-0"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                       <p className="text-gray-700">{item}</p>
//                     </div>
//                   ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Service() {
  const [cindex, setcIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [hasDragged, setHasDragged] = useState(false); // Track if user actually dragged
  const carouselRef = useRef(null);
  const router = useRouter();
  const [textData] = useState([
    {
      name: "/todd-kent-178j8tJrNlc-unsplash.jpg",
      heading: "Architectural Design",
      body: `Innovative and practical architectural solutions tailored to your vision. From concept to construction, we ensure designs that inspire and perform.`,
      nav: [
        "Architectural Design Projects",
        "3D Rendering and Visualization",
        "Project Management",
        "Sustainable and Green Building Practices",
      ],
      route: "/architectural-design", // Add route for navigation
    },
    {
      name: "/francesca-tosolini-6japTIjUQoI-unsplash.jpg",
      heading: "MEP Engineering",
      body: `Integrated mechanical, electrical, and plumbing systems for optimized performance. We ensure safety, functionality, and compliance in every build.`,
      nav: [
        "HVAC and Ducting Systems",
        "Electrical & Power Layouts",
        "Plumbing & Drainage Design",
        "Fire Protection & Coordination Drawings",
      ],
      route: "/mep-engineering",
    },
    {
      name: "/photo-1600607687939-ce8a6c25118c.jpg",
      heading: "Interior Design",
      body: `Bring life and function into your spaces with creative and client-centric interiors. We blend style with comfort to create environments that speak to you.`,
      nav: [
        "Space Planning & Concepts",
        "Material and Finish Selection",
        "Lighting & Furniture Design",
      ],
      route: "/interior-design",
    },
    {
      name: "/home-2486092_1280.jpg",
      heading: "Civil & Interior Fit out",
      body: `End-to-end civil and fit-out solutions that ensure quality and detail in execution.
    From partitions to finishes, we build with precision.`,
      nav: [
        "Partitioning & False Ceilings",
        "Flooring & Wall Finishes",
        "Electrical & HVAC Installations",
        "Plumbing & Sanitary Works",
      ],
      route: "/civil-fitout",
    },
    {
      name: "/e10c68fd076d4591ad9389d155d29555.jpg",
      heading: "Landscaping",
      body: `Transform outdoor spaces into stunning, functional environments.
    From lush gardens to modern hardscapes, we design landscapes
    that harmonize with architecture and nature.`,
      nav: [
        "Garden Design",
        "Landscape Architecture",
        "Landscaping for Climate",
        "Sustainable Landscaping",
      ],
      route: "/landscaping",
    },
    {
      name: "/0-1--5-.1587627053.6613.webp",
      heading: "Joinery",
      body: `Custom woodwork crafted with detail, elegance, and function. We design and fabricate furniture and fixtures that elevate your space.`,
      nav: [
        "Custom Furniture Fabrication",
        "Doors, Frames & Cladding",
        "Shelving & Storage Units",
        "Finishing & Polishing Works",
      ],
      route: "/carpentry-woodworks",
    },
    {
      name: "/photo-1600566753190-17f0baa2a6c3.jpg",
      heading: "Authorities",
      body: `Navigating approval processes is a crucial part of any interior or fit-out project. We assist clients in securing all necessary approvals from relevant authorities and building managements, ensuring designs and installations meet regulatory and landlord standards. From food sector permits to NOCs from mall and building managements, we handle the paperwork so you can focus on your business.`,
      nav: [
        "Civil Defense Authorities",
        "Electricity & Water Authorities",
        "Environmental & Sustainability Authorities",
        "Free Zones & Special Authorities",
      ],
    },
    {
      name: "/33-1100x733.jpg",
      heading: "Approvals",
      body: `We specialize in delivering carpentry and joinery works that fully comply with local authority regulations and building management standards across the UAE. Our team is experienced in handling documentation and technical requirements for approvals from entities such as Dubai Municipality, Civil Defense, DEWA, and major Free Zone authorities, ensuring smooth project execution without delays.`,
      nav: [
        "Food & Beverage Sector Approvals",
        "Building Management & Developer Approvals",
        "Building Owner/Landlord NOC",
        "Mall Management Approval (For retail spaces)",
      ],
    },
  ]);

  // Wrap goNext and goPrev in useCallback to prevent recreation on every render
  const goNext = useCallback(() => {
    setcIndex((prevIndex) => {
      if (prevIndex + 1 === textData.length) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  }, [textData.length]);

  const goPrev = useCallback(() => {
    setcIndex((prevIndex) => {
      if (prevIndex === 0) {
        return textData.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  }, [textData.length]);

  const nextSlide = useCallback(() => {
    if (isDragging) return;
    setTime((prev) => prev + 1);
    goNext();
  }, [isDragging, goNext]);

  const prevSlide = useCallback(() => {
    if (isDragging) return;
    goPrev();
  }, [isDragging, goPrev]);

  const goToSlide = useCallback((index: number) => {
    if (isDragging) return;
    setcIndex(index);
  }, [isDragging]);

  // Handle image click for navigation
  const handleImageClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Only navigate if user didn't drag
    if (!hasDragged) {
      e.stopPropagation();
      const route = textData[cindex].route;
      console.log(`Navigating to: ${route}`);
      // Replace with your actual navigation logic
      router.push(`/ourservices/${textData[cindex].heading}`);
    }
  }, [hasDragged, textData, cindex, router]);

  const handleStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setHasDragged(false);

    const clientX =
      e.type === "mousedown"
        ? (e as React.MouseEvent).clientX
        : (e as React.TouchEvent).touches[0].clientX;

    setStartX(clientX);
    setDragDistance(0);
  }, []);

  const handleMove = useCallback(
    (e: MouseEvent | React.MouseEvent | TouchEvent | React.TouchEvent) => {
      if (!isDragging) return;

      let clientX: number;
      if ("touches" in e) {
        clientX = (e as TouchEvent).touches[0].clientX;
      } else {
        clientX = (e as MouseEvent).clientX;
      }

      const distance = clientX - startX;
      setDragDistance(distance);
      if (Math.abs(distance) > 5) {
        setHasDragged(true);
      }
    },
    [isDragging, startX]
  );

  const handleEnd = useCallback(() => {
    if (!isDragging) return;

    const threshold = 50;
    if (Math.abs(dragDistance) > threshold && hasDragged) {
      if (dragDistance > 0) {
        goPrev();
        setTime((prev) => prev + 1);
      } else {
        goNext();
        setTime((prev) => prev + 1);
      }
    }

    setIsDragging(false);
    setHasDragged(false);
    setDragDistance(0);
  }, [isDragging, dragDistance, hasDragged, goNext, goPrev]);

  // Prevent context menu on long press
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    if (isDragging || hasDragged) {
      e.preventDefault();
    }
  }, [isDragging, hasDragged]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e as unknown as React.MouseEvent);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleEnd();
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, handleMove, handleEnd]);

  useEffect(() => {
    if (!isDragging) {
      goNext();
    }
  }, [time, isDragging, goNext]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isDragging, nextSlide]);

  console.log(cindex);
  return (
    <div className="sm:px-20 relative">
      <div
        ref={carouselRef}
        className="relative overflow-hidden sm:rounded-xl h-screen cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onContextMenu={handleContextMenu}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        {/* Main Carousel Container */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`slid-${cindex}`}
              className="absolute inset-0"
              initial={{
                opacity: 0,
                scale: 1.1,
                rotateY: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                x: isDragging ? dragDistance * 0.1 : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                rotateY: -15,
              }}
              transition={{
                duration: isDragging ? 0 : 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div
                className="w-full h-full relative cursor-pointer"
                onClick={handleImageClick}
                style={{
                  boxShadow: `
                    inset 0 8px 8px -8px rgba(0, 0, 0, 0.5),
                    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)
                  `,
                }}
              >
                <motion.div
                  className="w-full h-full "
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  draggable={false}
                >
                  <Image
                    src={textData[cindex].name}
                    fill
                    className="object-cover pointer-events-none"
                    alt={textData[cindex].name}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

                {/* Click indicator overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Drag Indicator */}
          {isDragging && hasDragged && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white/20 backdrop-blur-sm rounded-full p-4 pointer-events-none">
              <div className="sm:block hidden">
                <div className="flex items-center gap-2 text-white">
                  {dragDistance > 0 ? (
                    <>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      <span className="text-sm font-medium">Previous</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm font-medium">Next</span>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {textData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === cindex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Text Overlay Panel */}
        <AnimatePresence>
          <motion.div
            key={cindex}
            className="absolute bg-gray-200 w-80 h-52 top-0 right-0 z-20 rounded-bl-xl shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <motion.div
              className="flex justify-center items-start flex-col h-full p-6"
              key={`text-${cindex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h3 className="text-xl font-extrabold text-amber-800 mb-3">
                {textData[cindex].heading}
              </h3>

              <div className="space-y-1">
                {textData[cindex].nav &&
                  textData[cindex].nav.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <svg
                        className="w-3 h-3 text-amber-700 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}