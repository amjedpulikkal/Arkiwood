"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
export default function ContactCom() {
  return (
    <div
      id="contact"
      className="flex justify-between flex-wrap gradientC gap-2  sm:gap-0 sm:p-10 p-5 sm:pt-20 text-white"
    >
      <div className="sm:w-2/5 w-full mt-14 flex flex-col gap-6  sm:pr-5">
        <div className="flex gap-3">
          <Image
            className="size-6"
            src="/images-removebg-preview.png"
            width={28}
            height={14}
            alt="images-removebg-preview"
          />
          <p> info@arkiwooduae.com</p>
        </div>
        <div className="flex gap-3">
          <Image
            className="size-6"
            width={14}
            height={14}
            src="/images-removebg-preview (1).png"
            alt="images-removebg-preview"
          />
          <p> +971 457 599 06</p>
        </div>
        <div className="flex gap-1.5">
          <Image
            className="size-6"
            width={14}
            height={14}
            src="/images-removebg-preview (2).png"
            // className="h-10 w-10"
            alt="images-removebg-preview"
          />
          <p>
            {" "}
            Office 204, Dar Al Nahda Building, Hor Al Anz East- Dubai, UAE, PO
            Box: 17736
          </p>
        </div>
        <iframe
          className="rounded-2xl h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28863.266637976303!2d55.33414840390514!3d25.27366900801435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d9eb53dae23%3A0xb67c5e75a9851be1!2sDar%20Al%20Nahda%20Building%20%23%2041!5e0!3m2!1sen!2sin!4v1741098838758!5m2!1sen!2sin"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      <div className=" h-full sm:w-3/5 w-full bg-[#543d32]/40 rounded-4xl ">
        <div className="p-10 pt-10">
          <p className="sm:text-6xl text-3xl  sm:pr-20 font-extrabold ">
            Let’s Build Your Dream Together
          </p>
          <p className=" text-xl font-extralight mt-5">
            Your perfect space is just a call away.
          </p>
          <div className="mt-10  sm:text-xl">
            <form className="flex flex-col gap-5 ">
              <label htmlFor="">Full name</label>
              <input
                type="text"
                className="border-b-2 placeholder:text-white/60 focus:outline-none"
                placeholder="Enter youer full name"
                name="fullname"
                id=""
              />
              <label htmlFor="">Email</label>
              <input
                type="Email"
                className="border-b-2 placeholder:text-white/60 focus:outline-none"
                placeholder="Enter youer Email"
                name="email"
                id=""
              />
              <label htmlFor="">Phone number</label>
              <input
                type="Email"
                className="border-b-2 placeholder:text-white/60 focus:outline-none"
                placeholder="Enter youer phone number"
                name="email"
                id=""
              />
              <label htmlFor="">Message</label>
              <textarea
                className="border  p-3 rounded-3xl placeholder:text-white/60 focus:outline-none"
                placeholder="Enter message"
                name="email"
                id=""
              />
              <motion.input
                whileHover={{ scale: 1.05 }}
                type="submit"
                value={"Send message"}
                className="w-[%80] rounded-4xl h-15 border hover:bg-[#4e392e]"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
