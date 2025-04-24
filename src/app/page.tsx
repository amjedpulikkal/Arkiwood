import Image from "next/image";
import Navbar from "@/components/navbar";
import OurServices from "@/components/ourServices";
import ContactCom from "@/components/contact";
import Cursor from "@/components/Cursor";
import OurClients from "@/components/ourClients";
import Footer from "@/components/footer";
import { Example } from "@/components/regulatory";

import type { Metadata } from "next";
import CallCpmponent from "@/components/callCpmponent";
// import Review from "@/components/review";

export const metadata: Metadata = {
  title: "Arkiwood",
  description:
    "Discover top-quality services and solutions tailored to your needs. Stay ahead with our innovative platform and expert insights.",
};

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <CallCpmponent/>
      <main className="  w-full  overflow-hidden">
        <div className="flex h-[580px] w-full relative overflow-hidden">
          <div className="w-4/5 hidden sm:block">
            <Image
              src="/DALL·E 2025-02-27.png"
              fill
              className="w-[817px] "
              priority
              alt=""
            />
          </div>
          <div
            className="absolute right-0 flex opacity-0 sm:opacity-100 justify-center items-center sm:w-4/5 w-full h-full"
            style={{
              backgroundImage: "url('/Group 2233.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <img src="/Group 2233.png" className="h-[580px] w-[1000px]" alt="" /> */}
            <Image
              className=" sm:ml-[260px] sm:-mt-52"
              src="/logo.png"
              width={350}
              height={400}
              alt=""
            />
          </div>
          <div
            className="absolute right-0 flex opacity-100 sm:opacity-0 justify-center items-center sm:w-4/5 w-full h-full"
            style={{
              backgroundImage: "url('/Vector 3.png')",
              // backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundSize: "170%",
            }}
          >
            {/* <img src="/Group 2233.png" className="h-[580px] w-[1000px]" alt="" /> */}
            <Image
              className=" sm:ml-[260px] sm:-mt-52"
              src="/logo.png"
              width={350}
              height={400}
              alt=""
            />
          </div>
        </div>

        <div className="pt-10" id="about">
          <div className=" w-full flex  h-[500px]  ">
            <div className="sm:w-[600px] w-full">
              <Image
                className="hidden sm:block"
                src={"/Group 2248 (3).png"}
                width={600}
                height={460}
                alt="My Image"
              />
            </div>
            <div className="flex justify-center items-center sm:w-3/5 pr-10">
              <div>
                <p className=" nasalization hover-underline-animation center text-4xl text-[#7F6456]">
                  About Us
                </p>
                <p className="text-[#704e3c]">
                  At ARKIWOOD, we specialize in end-to-end solutions for
                  transforming spaces across the UAE. From innovative interior
                  design concepts to precise architectural drawings, MEP plans,
                  and everything in between, we ensure every detail is
                  meticulously covered. Our expert team navigates all regulatory
                  approvals, ensuring smooth, hassle-free project execution from
                  start to finish. Whether it’s residential, commercial, or
                  industrial, we bring your vision to life with unmatched
                  precision, creativity, and professionalism. From securing
                  authority approvals to handing over the keys, we oversee every
                  step of your interior journey, crafting spaces that are not
                  only functional but also ready to inspire—whether for work or
                  living.
                </p>
              </div>
            </div>
          </div>
        </div>

       

        <OurServices />
        <Example />
        <OurClients />
        {/* <Review /> */}
        <ContactCom />
        <Footer />
      </main>
    </>
  );
}
