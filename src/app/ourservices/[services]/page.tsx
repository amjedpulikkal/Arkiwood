import * as React from "react";

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
type tParams = Promise<{ services: string }>;
export default async function page({ params }: { params: tParams}) {

    const p = decodeURIComponent((await params)?.services || "");

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center ">
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
          className="w-[90%] h-96"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 h-96 lg:basis-1/3 "
              >
                <Image src="https://placehold.co/500" width={500} height={500} alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" border-0  rounded-none outline-none shadow-none " />
          <CarouselNext className="border-0 rounded-none outline-none shadow-none " />
        </Carousel>
      </div>
    </>
  );
}
