import Image from "next/image";
import Navbar from "@/components/navbar";
import OurServices from "@/components/ourServices";
import ContactCom from "@/components/contact";
import Cursor from "@/components/Cursor";
import OurClients from "@/components/ourClients";
import Footer from "@/components/footer";
import { Example } from "@/components/regulatory";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Arkiwood",
  description: "Discover top-quality services and solutions tailored to your needs. Stay ahead with our innovative platform and expert insights."
}
 
export default function Home() {
  return (
    // <div className="">
    //   {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes in real time.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer> */}
    // </div>

    <>
          
      <Cursor />
      <Navbar />
      <main className="h-[1999px]">
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
            className="absolute right-0 flex justify-center items-center sm:w-4/5 w-full h-full"
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
        </div>
        {/* <div className="h-36 bg-black/80 flex justify-center items-center">
          <div className="flex justify-between items-center text-2xl text-primary gap-1">
            <Image
              src={"/logo-instagram.png"}
              width={23}
              height={23}
              alt={"logo-instagram.png"}
            />
            <p>@arkiwood.uae</p>
          </div>
        </div> */}

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
        <ContactCom />
        <Footer />
      </main>
    </>
  );
}
