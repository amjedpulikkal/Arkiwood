import * as React from "react";

import { Data } from "./types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
// import Cursor from "@/components/Cursor";

import Imagecom from "./imagecom";
import SubCat from "./SubCat";
import { notFound } from "next/navigation";

type tParams = Promise<{ services: string }>;
export default async function page({ params }: { params: tParams }) {
  const p = decodeURIComponent((await params)?.services || "");
  if (!(data as unknown as Data)[p]) {
    notFound();
  }
  return (
    <>
      <div className=" text-[#7F6456] ml-4 mt-4">
        <Breadcrumb className="">
          <BreadcrumbList className="text-xl">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
           <BreadcrumbItem>
              <BreadcrumbLink href="/ourservices">Our services</BreadcrumbLink>
            </BreadcrumbItem> 
            <BreadcrumbSeparator /> 
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
                  className="md:basis-1/3 h-96 lg:basis-1/3 relative"
                >
                  <Image src={`/${data}`}  fill className="object-cover" alt="" />
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className=" border-0  rounded-none outline-none shadow-none hidden sm:block " />
          <CarouselNext className="border-0 rounded-none outline-none shadow-none   hidden sm:block" />
        </Carousel>
      </div>
      <div className="px-4 text-xl text-center sm:mt-10 text-[#7F6456]">
        <p>{(data as unknown as Data)[p][2]?.body}</p>
      </div>
      <SubCat data={(data as unknown as Data)[p]} />

      {!!(data as unknown as Data)[p][3]?.gnarig?.length && (
        <div className="p-10">
          <div className="sm:flex gap-1  w-full pb-15 text-[#7F6456]  items-center">
            <div className=" text-4xl gsp-1 flex items-center  nasalization ">
              <p>ProjectNest</p>
              <p className=" hidden sm:block"> – </p>
            </div>
            <p className="hod">A collective showcase of our completed works.</p>
          </div>
          <Imagecom data={(data as unknown as Data)[p]} />
        </div>
      )}
      <Footer />
    </>
  );
}
