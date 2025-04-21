"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const imgAnimation2 = {
  animate: {
    y: [0, -30, 0],
  },
  transition: {
    duration: 2,

    repeat: Infinity,
  },
};
const imgAnimation3 = {
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 2,

    repeat: Infinity,
  },
};

export default function CallCpmponent() {
  const sendMessage = () => {
    const phoneNumber = "+971588636991"; // Replace with actual number (with country code)
    const message = "Hello! I'm interested in your service."; // Customize message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:+971588636991`;
  };
  return (
    <div className="fixed right-0 bottom-0 z-10">
      <motion.div {...imgAnimation2} onClick={handleCall} className="-pr-0.5 cursor-pointer  -mt-3 ">
        <Image
          src="/istockphoto-1494579261-1024x1024.jpg"
          alt="review.png"
          width={60}
          height={60}
          className="rounded-full"
        ></Image>
      </motion.div>
      <motion.div onClick={sendMessage} className="cursor-pointer " {...imgAnimation3}>
        <Image
          src="/download-removebg-preview.png"
          alt="review.png"
          width={70}
          height={70}
        ></Image>
      </motion.div>
    </div>
  );
}
