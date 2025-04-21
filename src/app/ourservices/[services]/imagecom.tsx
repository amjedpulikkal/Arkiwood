"use client";

import React, { useEffect } from "react";
import { ServiceArray } from "./types";
import Image from "next/image";

type Props = {
  data: ServiceArray;
};

const Imagecom: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const [isMobile, setMobile] = React.useState<boolean>(false);
  const handleTap = (index: number) => {
    console.log(index);
    if (isMobile) {
      setActiveIndex(index);
    }
  };
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <div className="sm:flex justify-evenly flex-wrap gap-2">
      {data[1]?.image?.map((image: string, index: number) => (
        <div
          key={index}
          className="md:basis-1/3 h-96 relative overflow-clip group lg:basis-1/3 "
        >
          <div className=" w-full h-full absolute ">
            <Image
              className="blur-xl absolute"
              src={`/${image}`}
              width={500}
              height={500}
              alt=""
            />
            <div className=" absolute flex   justify-center items-center w-full h-[90%] ">
              <div
                className=""
                onMouseLeave={() => handleTap(-1)}
                onClick={() => handleTap(-1)}
              >
                <div className={`${activeIndex == index ? "block" : "hidden"} group-hover:block`}>
                  <div className="flex gap-2 justify-center w-full">
                    <div className=" rounded-4xl h-10 w-10 relative">
                      <Image
                        src={"https://avatar.iran.liara.run/public"}
                        fill
                        alt={data?.[3]?.gnarig?.[index]?.name || "Avatar"}
                      />
                    </div>
                    <div>
                      <p>{data?.[3]?.gnarig?.[index]?.name}</p>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p>{data?.[3]?.gnarig?.[index]?.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Image
            onClick={() => handleTap(index)}
            className={`absolute top-0 transition-opacity duration-500  group-hover:opacity-0 ${
              activeIndex == index ? "opacity-0" : "opacity-100"
            }`}
            src={`/${image}`}
            width={500}
            height={500}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Imagecom;
