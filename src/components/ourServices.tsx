"use client";

import {
  motion,
  MotionValue,
  useScroll,

  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function DivComponents({
  data,
  index,
}: {
  data: { name: string; handing: string; body: string };
  index: number;
}) {

  const router = useRouter();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  if (index % 2 === 1) {
    return (
      <div className="flex justify-between items-start sm:items-stretch">
        <div className="sm:w-1/2 flex  flex-col  gap-7 p-10">
          <p className="nasalization  text-center  text-3xl text-[#7F6456]">
            {data.handing}
          </p>
          <p>{data.body}</p>

          {/* <div className="flex justify-center"> */}

            <motion.button onClick={()=>router.push(`/ourservices/${data.handing}`)}
              whileHover={{ scale: 1.2 }}
              className="border-2 border-[#7F6456] hover:text-white text-[#7F6456] hover:bg-[#7F6456]  transition-colors w-32 p-3 rounded-full"
            >
              KNOW MORE
            </motion.button>
          
          {/* </div> */}
        </div>
        <div className="group relative hidden sm:block">
          <motion.p
            className={`absolute  hidden left-16 font-border text-[#7F6456] font-extrabold  ${
              index === 1 ? "top-28" : ""
            }   text-9xl p-4 inline-block group-hover:bg-clip-text group-hover:bg-[#7F6456] `}
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            style={{ y }}
          >{`#0${index}`}</motion.p>
          <Image
            src={data.name}
            className="sm:-mt-20 "
            width="600"
            height="460"
            alt={data.handing}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between items-end sm:items-stretch">
        <div className="group relative  w-1/2 hidden sm:block">
          <motion.p
            className="absolute   right-40 top-10 font-border text-[#7F6456] font-extrabold   text-9xl p-4 inline-block group-hover:bg-clip-text group-hover:bg-[#7F6456] "
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            style={{ y }}
          >{`#0${index}`}</motion.p>
          <img
            src={data.name}
            className="-mt-20  "
            width="600"
            height="460"
            alt={data.name}
          />
        </div>
        <div className="sm:w-1/2 flex justify-center items-center -mt-5">
          <div className=" flex  flex-col  gap-7 p-10 ">
            <p className="nasalization  text-center  text-3xl text-[#7F6456]">
              {data.handing}
            </p>
            <p>{data.body}</p>
            <motion.button onClick={()=>router.push(`/ourservices/${data.handing}`)}
              whileHover={{ scale: 1.2 }}
              className="border-2 border-[#7F6456] hover:text-white text-[#7F6456] hover:bg-[#7F6456]  transition-colors w-32 p-3 rounded-full"
            >
              KNOW MORE
            </motion.button>
          </div>
        </div>
      </div>
    );
  }
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function OurServices() {
  const [data] = useState([
    {
      name: "/Group 2249.png",
      handing: "Landscaping",
      body: `Transform outdoor spaces into stunning, functional environments.
          From lush gardens to modern hardscapes, we design landscapes
          that harmonize with architecture and nature
          .`,
    },
    {
      name: "/Group 2250.png",
      handing: "3D Visualisation",
      body: `Experience your project before it’s built. Our advanced 3D
          visualisation services provide realistic renderings, allowing
          you to explore and refine design concepts with clarity and
          precision.`,
    },
    {
      name: "/Group 2251 (1).png",
      handing: "Interior Designing",
      body: `   Transform your interiors into inspirational spaces. Our interior
                design team blends aesthetics with functionality to create
                environments that reflect your style and meet your practical
                needs.`,
    },
    {
      name: "/Group 2252 (1).png",
      handing: "Interior Fit Out",
      body: `Seamlessly transition from design to reality. Our interior fit
      out services ensure every detail is executed with precision,
      delivering high-quality finishes and a flawless final look.`,
    },
    {
      name: "/Group 2253.png",
      handing: "Authority Approvals",
      body: `     Navigate the complexities of regulatory compliance with ease. We
                  manage all aspects of authority approvals, ensuring your project
                  meets every legal and safety standard.`,
    },
    {
      name: "/Group 2254.png",
      handing: "MEP & Architectural Drawing",
      body: `Rely on our technical expertise for your project’s backbone.
  Our comprehensive MEP (Mechanical, Electrical, and Plumbing)
  solutions and detailed architectural drawings ensure that
  every component of your design is meticulously planned and
  executed.`,
    },
  ]);

  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  return (
    <div id="our-services" className="pb-14">
      <p className="nasalization pt-24   text-4xl text-[#7F6456] text-center">
        Our Services
      </p>
      {data.map((data, index) => (
        <DivComponents key={index} data={data} index={index + 1} />
      ))}
      {/* <motion.div className="progress" style={{ scaleX }} /> */}
    </div>
  );
}
