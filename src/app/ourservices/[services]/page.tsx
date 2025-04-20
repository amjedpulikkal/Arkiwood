import * as React from "react";
// import Autoplay from "embla-carousel-autoplay"
interface Review {
  name: string;
  text: string;
}

interface ServiceCategory {
  [key: string]: string[] | undefined; // For sub-categories like "Garden Design"
}

interface ImageData {
  image: string[];
}

interface BodyText {
  body: string;
}

interface Gnarig {
  gnarig?: Review[]; // Made 'gnarig' optional
}

type ServiceArray = [
  ServiceCategory,
  ImageData,
  BodyText,
  Gnarig
];

interface Data {
  [key: string]: ServiceArray;
}
// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navbar from "@/components/navbar";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import data from "./data.json";
import Footer from "@/components/footer";
import Cursor from "@/components/Cursor";

type tParams = Promise<{ services: string }>;
export default async function page({ params }: { params: tParams }) {
  const p = decodeURIComponent((await params)?.services || "");

  return (
    <>
      <Navbar />
      <Cursor />

      <div className=" text-[#7F6456] ml-4 mt-4">
        <Breadcrumb className="">
          <BreadcrumbList className="text-xl">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {/* <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem> */}
            {/* <BreadcrumbSeparator /> */}
            <BreadcrumbItem>
              <BreadcrumbPage>{p}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-center items-center py-10 ">
        <h1 className="nasalization hover-underline-animation center text-4xl text-[#7F6456]">
          {p}
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          // plugins={[
          //   Autoplay({}),
          // ]}
          className="w-[90%] h-96"
        >
          <CarouselContent>
            {(data as unknown as Data)[p][1]?.image?.map(
              (data: string, index: React.Key | null | undefined) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/3 h-96 lg:basis-1/3 "
                >
                  <Image src={`/${data}`} width={500} height={500} alt="" />
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className=" border-0  rounded-none outline-none shadow-none " />
          <CarouselNext className="border-0 rounded-none outline-none shadow-none " />
        </Carousel>
      </div>
      <div className="px-4 text-xl text-center sm:mt-10 text-[#7F6456]">
        <p>{(data as unknown as Data)[p][2]?.body}</p>
      </div>

      <div className="px-10 py-10 flex justify-evenly text-[#7F6456]">
        {Object.entries((data as unknown as Data)[p][0]).map(
          ([category, topics]: [string, string[] | undefined], index: number) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col"
            >
              <div className="text-5xl font-border  font-extrabold text-center">
                <p >{index + 1} </p>
              </div>
              <p className="py-4 text-center nasalization text-xl">
                {category}
              </p>
              <div className="w-60 h-60 group  relative  rounded-3xl overflow-clip">
                <div className="w-60 h-60 flex justify-center items-center p-4 text-center">
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {topics?.map((topic: string, i: number) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                  <p className="text-lg absolute bottom-0"> tap to know more</p>
                </div>
                <Image
                  width={250}
                  height={250}
                  className="absolute top-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                  src={`/${(data as unknown as Data)[p][1]?.image[index]}`}
                  alt="pixlr-image-generator-f4f6ebb2-fab9-4458-bd2a-6c9aa7001e36.png"
                />
              </div>
            </div>
          )
        )}
      </div>
      <div className="p-10">
        <p className="flex text-xl pb-10 text-[#7F6456] items-center">
          <span className="text-4xl nasalization ">ProjectNest</span> – A
          collective showcase of our completed works.
        </p>

        <div className="flex justify-evenly  gap-2">
          {(data as unknown as Data)[p][1]?.image?.map((image: string, index: number) => (
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
                <div className=" absolute flex  justify-center items-center w-full h-[90%] ">
                  <div className="">
                    <div className="flex gap-2 justify-center w-full">
                      <div className=" rounded-4xl h-10 w-10 relative">
                        <Image
                          src={"https://avatar.iran.liara.run/public"}
                          fill
                          alt={(data as unknown as Data)[p]?.[3]?.gnarig?.[index]?.name || "Avatar"}
                        />
                      </div>
                      <div>
                      <p>{(data as unknown as Data)[p]?.[3]?.gnarig?.[index]?.name}</p>
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
                          {/* <svg
                className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg> */}
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                    <p>{(data as unknown as Data)[p]?.[3]?.gnarig?.[index]?.text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                className="absolute top-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                src={`/${image}`}
                width={500}
                height={500}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
