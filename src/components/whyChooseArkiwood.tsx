"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhyChooseArkiwood() {
  const logos = [
    {
      image: "/quality-badge.png",
      title: "Premium Quality",
      description:
        "We use only the finest materials to ensure long-lasting durability and beauty.",
    },
    // {
    //   image: "/web-design.png",
    //   title: "Modern Design",
    //   description:
    //     "Our creations blend timeless woodcraft with contemporary aesthetics to suit any space.",
    // },
    // {
    //   image: "/trust.png",
    //   title: "Trusted Brand",
    //   description:
    //     "Renowned for reliability, we’ve earned the trust of architects, designers, and homeowners alike.",
    // },
    {
      image: "/route.png",
      title: "Streamlined Process",
      description:
        "From concept to installation, we ensure a smooth and transparent customer experience.",
    },
    {
      image: "/abilities.png",
      title: "Skilled Craftsmanship",
      description:
        "Our team of seasoned artisans brings precision and passion to every project.",
    },
    // {
    //   image: "/handcraft.png",
    //   title: "Handcrafted with Care",
    //   description:
    //     "Each piece is meticulously crafted by hand, reflecting attention to every detail.",
    // },
  ];

  return (
    <div className=" px-6 pt-20">
      <div className="flex justify-center"></div>
      <div className="sm:flex ">
        <div className=" sm:w-1/2 flex-wrap gap-4 text-[#7F6456]">
          <div className="flex justify-center ">
            <h1 className=" hover-underline-animation center nasalization text-3xl text-[#7F6456]">
              Why Choose Arkiwood
            </h1>
          </div>
          <p className="pt-10">
            At <samp className="nasalization">Arkiwood</samp> , we believe that
            exceptional interiors begin with thoughtful craftsmanship, quality
            materials, and a commitment to customer satisfaction. Here’s what
            sets us apart
          </p>
          <div className="flex justify-evenly pt-7">
            {logos.map((data, index) => (
              <div key={`${index+"24"}`} className=" flex justify-center flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={`${index + data.image}`}
                  className="w-[70px] h-[70px] relative"
                >
                  <Image
                    src={data.image}
                    fill
                    alt={`Client logo ${index + 1}`}
                    className="object-contain rounded-lg"
                  />
                </motion.div>
                <p>{data.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:w-1/2 text-[#7F6456] sm:mt-0 mt-10">
          <div className="flex justify-center ">
            <h1 className=" hover-underline-animation center nasalization text-3xl text-[#7F6456]">
              Our Authorizations
            </h1>
          </div>
          <p className="pt-10">
            Our certifications distinguish us within the interior design and
            fit-out industry, highlighting our unwavering commitment to quality,
            excellence, and best practices. They serve as a testament to our
            dedication to delivering exceptional results, maintaining full
            compliance, and promoting sustainability in every project we
            undertake.
          </p>
          <div className=" flex justify-evenly flex-wrap pt-7">
            <Link href={"/AE59602A_ARKIWOOD_TECHNICAL%20...pdf"}>
              <Image
                src={"/9001.webp"}
                width={100}
                height={100}
                alt={"9001.webp"}
              />
            </Link>

            <Link href={"/AE59602C-1_ARKIWOOD_TECHNICA...pdf"}>
              <Image
                src={"/45001.webp"}
                width={100}
                height={100}
                alt={"45001.webp"}
              />
            </Link>
            <Link href={"/AE59602B_ARKIWOOD_TECHNICAL.pdf"}>
              <Image
                src={"/download.webp"}
                width={100}
                height={100}
                alt={"14001.webp"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
