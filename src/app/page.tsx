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
import {Banner} from "@/components/banner";
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
      <CallCpmponent />
      <Navbar />
      <Banner/>
      <main className="  w-full  overflow-hidden">
        

        <div className="pt-10" id="about">
          <div className=" w-full flex  h-[500px]  ">
            <div className="sm:w-[600px] w-full">
              <div className=" relative">
                <video
                  className="absolute hidden sm:block  w-[250px] right-48  rounded-t-full rounded-b-full border-2 border-white "
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source
                    src="/1a0249c7f295d5dae9001bd0c8563e20.mp4"
                    type="video/mp4"
                  />
                </video>
                <Image
                  className="hidden sm:block -mr-12"
                  src={"/Vector 5.png"}
                  width={500}
                  height={460}
                  alt="My Image"
                />
              </div>
            </div>
            <div className="flex justify-center items-center sm:w-3/5 pr-10">
              <div>
                <p className=" nasalization hover-underline-animation center text-4xl  text-[#7F6456]">
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
