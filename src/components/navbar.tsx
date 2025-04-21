import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DrawerNav } from "./navDrawer";
export default function Navbar() {
  return (
    <nav className=" h-16 md:h-20 flex justify-between items-center px-8  ">
      <div className=" ">
        <Link href={"/"}>
          <Image
            className="w-28 md:w-16 lg:w-28 dark:invert"
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
            <Link href={"/#our-services"}>Services</Link>
          </li>
          <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">
            <Link href={"/#blogs"}>Blogs</Link>
          </li>
          <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">
            <Link href={"/#projects"}>Projects</Link>
          </li>
          <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">
            <Link href={"/#about"}>About</Link>
          </li>
          <li className="hover-underline-animation center hover:text-[#7F6456] transition-colors">
            <Link href={"/#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
