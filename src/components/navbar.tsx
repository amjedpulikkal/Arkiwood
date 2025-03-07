

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DrawerNav } from "./navDrawer";
export default function Navbar() {
  return (
    <nav className=" h-16 md:h-20 flex justify-between items-center px-4  " >
      <div className="sm;p-0 p-8"  >
        <Link href={"/"}>
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="logo"
          width={140}
          height={100}
          priority
        />
        </Link>
      </div>

      <div className="sm:hidden">
      <DrawerNav/>
      
      </div>
      <div className="w-1/2 text-xl nasalization hidden sm:block text-[#7f6456d7]">
        <ul className="flex justify-around ">
          <Link href={"#our-services"}>
          <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">Services</li>
          </Link>
          <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">Blogs</li>
          <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">Projects</li>
          <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">About</li>
          <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
