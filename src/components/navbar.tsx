
"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DrawerNav } from "./navDrawer";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className=" h-16 w-full md:h-20 fixed top-0 left-0 right-0 bg-white  p-4   z-50 shadow-md flex justify-between items-center px-8  "
          >
            <div className=" p-5 ">
              <Link href={"/"}>
                <Image
                  className="w-28    dark:invert"
                  src="/logo.png"
                  alt="logo"
                  width={240}
                  height={100}
                  priority
                />
              </Link>
            </div>

            <div className="sm:hidden">
              <DrawerNav />
            </div>
            <div className="w-1/2 text-xl nasalization hidden sm:block text-[#7f6456d7]">
              <ul className="flex justify-end  gap-x-6">
                <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">
                  <Link href={"/#about"}>About</Link>
                </li>
                <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">
                  <Link href={"/#our-services"}>Services</Link>
                </li>
                <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">
                  <Link href={"/#blogs"}>Blogs</Link>
                </li>
                <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">
                  <Link href={"/#projects"}>Projects</Link>
                </li>
                <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">
                  <Link href={"/#contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
