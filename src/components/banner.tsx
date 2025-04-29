"use client";

import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Fixed import
import { useEffect, useRef, useState } from "react";

export function Banner() {
  const nextDivRef = useRef<HTMLButtonElement>(null);
  const [textData] = useState([
    {
      headline: "Designing Dreams, Building Realities",
      subheadline:
        "From stunning landscapes to flawless interiors, we craft spaces that inspire and endure.",
    },
    {
      headline: "Complete Solutions for Every Space",
      subheadline:
        "Architecture, Interiors, Engineering & More — tailored expertly to your vision and needs.",
    },
    {
      headline: "Where Innovation Meets Craftsmanship",
      subheadline:
        "Delivering excellence in design, engineering, and construction — with quality you can trust.",
    },
    {
      headline: "Transforming Ideas into Landmarks",
      subheadline:
        "We shape environments that blend creativity, sustainability, and functionality.",
    },
    {
      headline: "Your Vision, Our Commitment",
      subheadline:
        "Partner with us to build spaces that stand out and stand strong for generations.",
    },
  ]);
  const [cIndex, setCIndex] = useState(0);
  const [time, setTime] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  // Character variants
  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        // type: "",
        damping: 10,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const image = [
    "/WhatsApp Image 2025-04-22 at 7.51.47 AM.jpeg",
    "/b194ee73982fd0fa136d5841c73bf907.jpg",
    "/pixlr-image-generator-e83016fe-ee2f-4685-9355-18df006e4190.png",
    "/pixlr-image-generator-73290afe-3db3-4fb4-a78b-fabd467c23ad.png",
  ];

  const nextSlide = () => {
    setTime((prev) => prev + 1);
    nextDivRef.current?.click();
  };

  useEffect(() => {
    // Update cIndex and key when time changes
    setCIndex((prevIndex) => (prevIndex + 1) % textData.length);
  }, [time, textData.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="flex">
          {/* <div className="w-40 h-screen bg-black hidden sm:block">d</div> */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-screen "
          >
            <CarouselContent>
              {image.map((src, index) => (
                <CarouselItem key={index}>
                  <div
                    className="w-full inset-0  h-screen relative z-40 "
                    style={{
                      boxShadow: `
      inset 0 8px 8px -8px rgba(0, 0, 0, 0.5),
      inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)
    `,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="object-cover "
                      fill
                    />
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext className="hidden" ref={nextDivRef} />
          </Carousel>
        </div>

        <div className="w-screen top-0 absolute h-screen flex sm:justify-evenly justify-center  z-0 pointer-events-none">
          

          <div className="sm:w-1/2 px-28 sm:py-0 mt-20    break-words">
          
            <AnimatePresence mode="wait">
              <motion.div
                className="inline-block" // Changed from flex-wrap
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={cIndex}
              >
                {/* Group words instead of characters */}
                {textData[cIndex]?.headline
                  ?.split(" ")
                  .map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      className="whitespace-nowrap inline-block" // Keep words together
                      // variants={characterVariants}
                    >
                      {word.split("").map((char, charIndex) => (
                        <motion.span
                          className="sm:text-8xl text-5xl drop-shadow-cyan-500/50 font-extrabold text-gray-200"
                          key={charIndex}
                          variants={characterVariants}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.span>
                  ))}
              </motion.div>

              <motion.p
                className="text-white text-2xl mt-5 font-light"
                key={`SubText+${cIndex}`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{
                  initial: { y: 50, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: 50, opacity: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {textData[cIndex]?.subheadline}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="h-full mt-36 hidden sm:block">
            <Image
              className=" drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
              src="/logo.png"
              width={350}
              height={400}
              alt="Company Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
