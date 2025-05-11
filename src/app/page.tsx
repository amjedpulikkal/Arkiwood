// import Image from "next/image";
import Navbar from "@/components/navbar";
import OurServices from "@/components/ourServices";
import ContactCom from "@/components/contact";
import Cursor from "@/components/Cursor";
import OurClients from "@/components/ourClients";
import Footer from "@/components/footer";
import { Example } from "@/components/regulatory";

import type { Metadata } from "next";
import CallCpmponent from "@/components/callCpmponent";
import { Banner } from "@/components/banner";
// import OurCertifications from "@/components/ourCertifications";
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
      <Banner />
      <main className="  w-full  overflow-hidden">
        <div className="pt-10" id="about">
          <div className=" w-full flex  h-[500px]  ">
            <div className="sm:w-[600px] w-full">
              <div className=" relative">
                <div className=" absolute hidden sm:block h-[442px] -top-5 w-[250px] right-44   rounded-t-full rounded-b-full border-2 border-[#d0c5b8] ">  
       
                </div>
                <video
                  className="absolute hidden sm:block  w-[250px] right-48  rounded-t-full rounded-b-full border-2 border-[#d0c5b8] "
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
                {/* <Image
                  className="hidden sm:block -mr-12"
                  src={"/Vector 5.png"}
                  width={500}
                  height={460}
                  alt="My Image"
                /> */}
              </div>
            </div>
            <div className="flex justify-center items-center sm:mt-0 mt-72 sm:w-3/5 pr-10">
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

                <div className="flex flex-wrap justify-evenly mt-4 ">
                  {[
                    {
                      src: "/1746855302712-4fd7fa1e-68d2-4134-b764-a3980b730908_1.jpg",
                      title: "ISO 9001: Quality Management",
                      desc: "Ensures our processes consistently deliver high quality and client satisfaction.",
                      alt: "ISO 9001 Certificate",
                    },
                    {
                      src: "/1746853721271-1d396663-da7f-4260-8c8b-76871714790c_1.jpg",
                      title: "ISO 14001: Environmental Management",
                      desc: "Demonstrates our commitment to sustainable and eco-conscious operations.",
                      alt: "ISO 14001 Certificate",
                    },
                    {
                      src: "/8d1ba13b-e31a-43ee-aab7-f187f704cb60.jpg",
                      title: "Government E-Marketplace (GEV) Certification",
                      desc: "Recognized as a registered vendor on the Government e-Marketplace, ensuring verified business compliance.",
                      alt: "GEV Certificate",
                    },
                  ].map((cert, index) => (
                    <div key={index} className="text-center max-w-[300px]">
                      <p className="mt-4 text-[#704e3c] font-medium">
                        {cert.title}
                      </p>
                      <p className="text-sm text-[#704e3c]">{cert.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <OurServices />
        <Example />
        {/* <OurCertifications/> */}
        <OurClients />
        {/* <Review /> */}
        <ContactCom />
        <Footer />
      </main>
    </>
  );
}
