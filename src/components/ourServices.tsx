// "use client";

// import { motion,useInView, MotionValue, useScroll, useTransform } from "motion/react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useRef, useState } from "react";




// function DivComponents({
//   data,
//   index,
// }: {
//   data: { name: string; heading: string; body: string; nav: string[] };
//   index: number;
// }) {

//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.3 });

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };
  
//   const itemVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: { duration: 0.5 }
//     }
//   };
  
//   const imageVariants = {
//     hidden: { x: -500 },
//     visible: { 
//       x: 0,
//       transition: { duration: 0.6, type: "easeInOut" } 
//     }
//   };
  

//   const router = useRouter();
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);
//   if (index % 2 === 1) {
//     return (
//       <div className="flex justify-between items-start sm:items-stretch ">
//         <div className="sm:w-1/2 flex  justify-center flex-col  gap-7  p-10">
//           <motion.p
//             initial={{ x: -500 }}
//             whileInView={{ x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="nasalization  text-center  text-3xl text-[#7F6456]"
//           >
//             {data.heading}
//           </motion.p>
//           <motion.p
//             initial={{ x: -500 }}
//             whileInView={{ x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.25 }}
//           >
//             {data.body}
//           </motion.p>

//           {/* <div className="flex justify-center"> */}
//           <motion.div
//             initial={{ x: -500 }}
//             whileInView={{ x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.35 }}
//             className=""
//           >
//             {data.nav &&
//               data.nav.map((d) => (
//                 <div className="flex items-center gap-1" key={d}>
//                   <svg
//                     className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 5h12m0 0L9 1m4 4L9 9"
//                     />
//                   </svg>
//                   <p className="whitespace-nowrap">{d}</p>
//                 </div>
//               ))}
//           </motion.div>

//           <motion.button
//             onClick={() => router.push(`/ourservices/${data.heading}`)}
//             whileHover={{ scale: 1.2 }}
//             className="border-2 border-[#7F6456] hover:text-white text-[#7F6456] hover:bg-[#7F6456]  transition-colors w-32 p-3 rounded-full"
//           >
//             KNOW MORE
//           </motion.button>

//           {/* </div> */}
//         </div>
//         <motion.div
//           initial={{ x: 500 }}
//           whileInView={{ x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, type: "easeInOut" }}
//           className="group relative hidden sm:block"
//         >
//           <motion.p
//             className={`absolute  hidden left-16 font-border text-[#7F6456] font-extrabold  ${
//               index === 1 ? "top-28" : ""
//             }   text-9xl p-4 inline-block group-hover:bg-clip-text group-hover:bg-[#7F6456] `}
//             initial={{ visibility: "hidden" }}
//             animate={{ visibility: "visible" }}
//             style={{ y }}
//           >{`#0${index}`}</motion.p>
//           <Image
//             src={data.name}
//             className="sm:-mt-20 "
//             width="600"
//             height="460"
//             alt={data.heading}
//           />
//         </motion.div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="flex justify-between items-end sm:items-stretch">
//         <motion.div
//           initial={{ x: -500 }}
//           whileInView={{ x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, type: "easeInOut" }}
//           className="group relative  w-1/2 hidden sm:block"
//         >
//           <motion.p
//             className="absolute   right-40 top-10 font-border text-[#7F6456] font-extrabold   text-9xl p-4 inline-block group-hover:bg-clip-text group-hover:bg-[#7F6456] "
//             initial={{ visibility: "hidden" }}
//             animate={{ visibility: "visible" }}
//             style={{ y }}
//           >{`#0${index}`}</motion.p>
//           <Image
//             src={data.name}
//             className="-mt-20  "
//             width="600"
//             height="460"
//             alt={data.name}
//           />
//         </motion.div>
//         <div className="sm:w-1/2 flex justify-center items-center -mt-5">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className=" flex  flex-col  gap-7 p-10 "
//           >
//             <motion.p
//               initial={{ x: 500 }}
//               whileInView={{ x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="nasalization  text-center  text-3xl text-[#7F6456]"
//             >
//               {data.heading}
//             </motion.p>
//             <motion.p
//               initial={{ x: 500 }}
//               whileInView={{ x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.25 }}
//             >
//               {data.body}
//             </motion.p>
//             <motion.div
//               initial={{ x: 500 }}
//               whileInView={{ x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.35 }}
//               className=""
//             >
//               {data.nav &&
//                 data.nav.map((d) => (
//                   <div className="flex items-center gap-1" key={d}>
//                     <svg
//                       className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 14 10"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M1 5h12m0 0L9 1m4 4L9 9"
//                       />
//                     </svg>
//                     <p className="whitespace-nowrap">{d}</p>
//                   </div>
//                 ))}
//             </motion.div>
//             <motion.button
//               onClick={() => router.push(`/ourservices/${data.heading}`)}
//               whileHover={{ scale: 1.2 }}
//               className="border-2 border-[#7F6456] hover:text-white text-[#7F6456] hover:bg-[#7F6456]  transition-colors w-32 p-3 rounded-full"
//             >
//               KNOW MORE
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     );
//   }
// }

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// export default function OurServices() {
//   const [data] = useState([
//     {
//       name: "/Group 2249.png",
//       heading: "Landscaping",
//       body: `Transform outdoor spaces into stunning, functional environments.
//   From lush gardens to modern hardscapes, we design landscapes
//   that harmonize with architecture and nature.`,
//       nav: [
//         "Garden Design",
//         "Landscape Architecture",
//         "Landscaping for Climate",
//         "Sustainable Landscaping",
//       ],
//     },
//     {
//       name: "/Group 2250.png",
//       heading: "Architectural Design",
//       body: `Innovative and practical architectural solutions tailored to your vision. From concept to construction, we ensure designs that inspire and perform.`,
//       nav: [
//         "Architectural Design Projects",
//         "3D Rendering and Visualization",
//         "Project Management",
//         "Sustainable and Green Building Practices",
//       ],
//     },
//     {
//       name: "/Group 2251 (1).png",
//       heading: "MEP Engineering",
//       body: `Integrated mechanical, electrical, and plumbing systems for optimized performance. We ensure safety, functionality, and compliance in every build.`,
//       nav: [
//         "HVAC and Ducting Systems",
//         "Electrical & Power Layouts",
//         "Plumbing & Drainage Design",
//         "Fire Protection & Coordination Drawings",
//       ],
//     },
//     {
//       name: "/Group 2252.png",
//       heading: "Interior Design",
//       body: `Bring life and function into your spaces with creative and client-centric interiors. We blend style with comfort to create environments that speak to you.`,
//       nav: [
//         "Space Planning & Concepts",
//         "Material and Finish Selection",
//         "Lighting & Furniture Design",
//         "Kitchen and Bathroom Design",
//       ],
//     },
//     {
//       name: "/Group 2253.png",
//       heading: "Civil & Fit-Out Works",
//       body: `End-to-end civil and fit-out solutions that ensure quality and detail in execution.
//   From partitions to finishes, we build with precision.`,
//       nav: [
//         "Partitioning & False Ceilings",
//         "Flooring & Wall Finishes",
//         "Electrical & HVAC Installations",
//         "Plumbing & Sanitary Works",
//       ],
//     },
//     {
//       name: "/Group 2254.png",
//       heading: "Carpentry & Woodworks",
//       body: `Custom woodwork crafted with detail, elegance, and function. We design and fabricate furniture and fixtures that elevate your space.`,
//       nav: [
//         "Custom Furniture Fabrication",
//         "Doors, Frames & Cladding",
//         "Shelving & Storage Units",
//         "Finishing & Polishing Works",
//       ],
//     },
//   ]);
//   // const [data] = useState([
//   //   {
//   //     name: "/Group 2249.png",
//   //     handing: "Landscaping",
//   //     body: `Transform outdoor spaces into stunning, functional environments.
//   //         From lush gardens to modern hardscapes, we design landscapes
//   //         that harmonize with architecture and nature
//   //         .`,
//   //     nav: [
//   //       "Garden Design",
//   //       "Landscape Architecture",
//   //       "Landscaping for Climate",
//   //       "Sustainable Landscaping",
//   //     ],
//   //   },
//   //   {
//   //     name: "/Group 2250.png",
//   //     handing: "3D Visualisation",
//   //     body: `Experience your project before it’s built. Our advanced 3D
//   //         visualisation services provide realistic renderings, allowing
//   //         you to explore and refine design concepts with clarity and
//   //         precision.`,
//   //   },
//   //   {
//   //     name: "/Group 2251 (1).png",
//   //     handing: "Interior Designing",
//   //     body: `   Transform your interiors into inspirational spaces. Our interior
//   //               design team blends aesthetics with functionality to create
//   //               environments that reflect your style and meet your practical
//   //               needs.`,
//   //   },
//   //   {
//   //     name: "/Group 2252 (1).png",
//   //     handing: "Interior Fit Out",
//   //     body: `Seamlessly transition from design to reality. Our interior fit
//   //     out services ensure every detail is executed with precision,
//   //     delivering high-quality finishes and a flawless final look.`,
//   //   },
//   //   {
//   //     name: "/Group 2253.png",
//   //     handing: "Authority Approvals",
//   //     body: `     Navigate the complexities of regulatory compliance with ease. We
//   //                 manage all aspects of authority approvals, ensuring your project
//   //                 meets every legal and safety standard.`,
//   //   },
//   //   {
//   //     name: "/Group 2254.png",
//   //     handing: "MEP & Architectural Drawing",
//   //     body: `Rely on our technical expertise for your project’s backbone.
//   // Our comprehensive MEP (Mechanical, Electrical, and Plumbing)
//   // solutions and detailed architectural drawings ensure that
//   // every component of your design is meticulously planned and
//   // executed.`,
//   //   },
//   // ]);

//   // const { scrollYProgress } = useScroll();
//   // const scaleX = useSpring(scrollYProgress, {
//   //   stiffness: 100,
//   //   damping: 30,
//   //   restDelta: 0.001,
//   // });

//   return (
//     <div id="our-services" className="pb-14 ">
//       <div className="py-24 flex justify-center ">
//         <p className="nasalization hover-underline-animation   text-4xl text-[#7F6456] text-center">
//           Our Services
//         </p>
//       </div>
//       {data.map((data, index) => (
//         <DivComponents key={index} data={data} index={index + 1} />
//       ))}
//       {/* <motion.div className="progress" style={{ scaleX }} /> */}
//     </div>
//   );
// }



"use client";

import { motion, useInView, } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function DivComponents({
  data,
  index,
}: {
  data: { name: string; heading: string; body: string; nav: string[] };
  index: number;
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const router = useRouter();
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 300);

  // Define variants for parent-child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const leftItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const rightItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const leftImageVariants = {
    hidden: { x: -500 },
    visible: { 
      x: 0,
      transition: { duration: 0.6, type: "easeInOut" } 
    }
  };
  
  const rightImageVariants = {
    hidden: { x: 500 },
    visible: { 
      x: 0,
      transition: { duration: 0.6, type: "easeInOut" } 
    }
  };

  if (index % 2 === 1) {
    // Odd index layout
    return (
      <div ref={containerRef} className="flex justify-between items-start sm:items-stretch">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="sm:w-1/2 flex justify-center flex-col gap-7 p-10"
        >
          <motion.p
            variants={leftItemVariants}
            className="nasalization text-center text-3xl text-[#7F6456]"
          >
            {data.heading}
          </motion.p>
          
          <motion.p variants={leftItemVariants}>
            {data.body}
          </motion.p>

          <motion.div variants={leftItemVariants} className="">
            {data.nav &&
              data.nav.map((d) => (
                <div className="flex items-center gap-1" key={d}>
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  <p className="whitespace-nowrap">{d}</p>
                </div>
              ))}
          </motion.div>

          <motion.button
            variants={leftItemVariants}
            whileHover={{ scale: 1.2 }}
            onClick={() => router.push(`/ourservices/${data.heading}`)}
            className="border-2 border-[#7F6456] hover:text-white text-[#7F6456] hover:bg-[#7F6456] transition-colors w-32 p-3 rounded-full"
          >
            KNOW MORE
          </motion.button>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={rightImageVariants}
          className="group relative hidden sm:block"
        >
          {/* <motion.p
            className={`absolute hidden left-16 font-border text-[#7F6456] font-extrabold ${
              index === 1 ? "top-28" : ""
            } text-9xl p-4 inline-block group-hover:bg-clip-text group-hover:bg-[#7F6456]`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
            style={{ y }}
          >{`#0${index}`}</motion.p> */}
          <Image
            src={data.name}
            className="sm:-mt-20"
            width="600"
            height="460"
            alt={data.heading}
          />
        </motion.div>
      </div>
    );
  } else {
   
    return (
      <div ref={containerRef} className="flex justify-between items-end sm:items-stretch">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={leftImageVariants}
          className="group relative w-1/2 hidden sm:block"
        >
          {/* <motion.p
            className="absolute right-40 top-10 font-border text-[#7F6456] font-extrabold text-9xl p-4 inline-block group-hover:bg-clip-text group-hover:bg-[#7F6456]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
            style={{ y }}
          >{`#0${index}`}</motion.p> */}
          <Image
            src={data.name}
            className="-mt-20"
            width="600"
            height="460"
            alt={data.name}
          />
        </motion.div>
        
        <div className="sm:w-1/2 flex justify-center items-center -mt-5">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col gap-7 p-10"
          >
            <motion.p
              variants={rightItemVariants}
              className="nasalization text-center text-3xl text-[#7F6456]"
            >
              {data.heading}
            </motion.p>
            
            <motion.p variants={rightItemVariants}>
              {data.body}
            </motion.p>
            
            <motion.div variants={rightItemVariants} className="">
              {data.nav &&
                data.nav.map((d) => (
                  <div className="flex items-center gap-1" key={d}>
                    <svg
                      className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                    <p className="whitespace-nowrap">{d}</p>
                  </div>
                ))}
            </motion.div>
            
            <motion.button
              variants={rightItemVariants}
              onClick={() => router.push(`/ourservices/${data.heading}`)}
              whileHover={{ scale: 1.2 }}
              className="border-2 border-[#7F6456] hover:text-white text-[#7F6456] hover:bg-[#7F6456] transition-colors w-32 p-3 rounded-full"
            >
              KNOW MORE
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }
}


export default function OurServices() {
  const [data] = useState([
    {
      name: "/Group 2251 (1).png",
      heading: "Architectural Design",
      body: `Innovative and practical architectural solutions tailored to your vision. From concept to construction, we ensure designs that inspire and perform.`,
      nav: [
        "Architectural Design Projects",
        "3D Rendering and Visualization",
        "Project Management",
        "Sustainable and Green Building Practices",
      ],
    },
    {

      name: "/Group 2250.png",
      heading: "MEP Engineering",
      body: `Integrated mechanical, electrical, and plumbing systems for optimized performance. We ensure safety, functionality, and compliance in every build.`,
      nav: [
        "HVAC and Ducting Systems",
        "Electrical & Power Layouts",
        "Plumbing & Drainage Design",
        "Fire Protection & Coordination Drawings",
      ],
    },
    {
      name: "/Group 2253.png",
      heading: "Interior Design",
      body: `Bring life and function into your spaces with creative and client-centric interiors. We blend style with comfort to create environments that speak to you.`,
      nav: [
        "Space Planning & Concepts",
        "Material and Finish Selection",
        "Lighting & Furniture Design",
      ],
    },
    {

      name: "/Group 2252.png",
      heading: "Civil & Interior Fit out",
      body: `End-to-end civil and fit-out solutions that ensure quality and detail in execution.
  From partitions to finishes, we build with precision.`,
      nav: [
        "Partitioning & False Ceilings",
        "Flooring & Wall Finishes",
        "Electrical & HVAC Installations",
        "Plumbing & Sanitary Works",
      ],
    },
    {
      name: "/Group 2251.png",
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
    },
    {
      name: "/Group 2254.png",
      heading: "Carpentry & Woodworks",
      body: `Custom woodwork crafted with detail, elegance, and function. We design and fabricate furniture and fixtures that elevate your space.`,
      nav: [
        "Custom Furniture Fabrication",
        "Doors, Frames & Cladding",
        "Shelving & Storage Units",
        "Finishing & Polishing Works",
      ],
    },
  ]);

  return (
    <div id="our-services" className="pb-14">
      <div className="py-24 flex justify-center">
        <p className="nasalization hover-underline-animation text-4xl text-[#7F6456] text-center">
          Our Services
        </p>
      </div>
      {data.map((data, index) => (
        <DivComponents key={index} data={data} index={index + 1} />
      ))}
    </div>
  );
}