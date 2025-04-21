import * as React from "react";
// import Autoplay from "embla-carousel-autoplay"
import { Data } from "./types";
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
import { Metadata } from "next/types";
import Imagecom from "./imagecom";
import SubCat from "./SubCat";

export const metadata: Metadata = {
  title: "Arkiwood",
  description:
    "Discover top-quality services and solutions tailored to your needs. Stay ahead with our innovative platform and expert insights.",
};

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
        <h1 className="nasalization hover-underline-animation text-center text-4xl text-[#7F6456]">
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
      <SubCat data={(data as unknown as Data)[p]}/>
     
      <div className="p-10">
        <p className="sm:flex text-xl pb-10 text-[#7F6456] items-center">
          <span className="text-4xl nasalization ">ProjectNest – </span>A
          collective showcase of our completed works.
        </p>
        <Imagecom data={(data as unknown as Data)[p]} p={p} />


      </div>
      <Footer />
    </>
  );
}
