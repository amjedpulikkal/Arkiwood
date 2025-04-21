"use client";

import React from "react";
import { Data, ServiceArray } from "./types";
import Image from "next/image";

type Props = {
  data: ServiceArray;
};

const SubCat: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const handleTap = (index: number) => {
    console.log(index)
    setActiveIndex(index);
    // your logic here
  };

  return (
    <div className="px-10 py-10 flex justify-evenly flex-wrap text-[#7F6456]">
      {Object.entries(data[0]).map(
        ([category, topics]: [string, string[] | undefined], index: number) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col"
          >
            <div className="text-5xl font-border  font-extrabold text-center">
              <p>{index + 1} </p>
            </div>
            <p className="py-4 text-center nasalization text-xl">{category}</p>

            <div
              
              className="w-60 h-60 group  relative  rounded-3xl overflow-clip "
            >
              <div onClick={() => handleTap(-1)} className="w-60 h-60 flex justify-center items-center p-4 text-center">
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {topics?.map((topic: string, i: number) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
                {/* <p className="text-lg absolute bottom-0"> tap to know more</p> */}
              </div>

              <Image
                onClick={() => handleTap(index)}
                width={250}
                height={250}
                className={`absolute top-0 transition-opacity duration-500  group-hover:opacity-0 ${
                  activeIndex == index ? "opacity-0" : "opacity-100"
                }`}
                src={`/${data[1].image[index]}`}
                alt="pixlr-image-generator-f4f6ebb2-fab9-4458-bd2a-6c9aa7001e36.png"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SubCat;
