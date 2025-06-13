"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DrawerNav } from "./navDrawer";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();
  const isPath = pathname === "/";

  const paths = [
    { title: "Home", href: "/" },
    // { title: "About", href: "/#about" },
    { title: "Services", href: "/ourservices" },
    { title: "Blogs", href: "/#blogs" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

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
        {(isPath ? showNavbar : true) && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={` h-16 w-full md:h-20  ${
              isPath ? " fixed top-0 left-0 right-0" : ""
            } bg-white  p-4   z-50 shadow-md flex justify-between items-center px-8  `}
          >
            <div className=" p-5 ">
              <Link href={"/"}>
                <Image
                  className="w-28    "
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
            <div className=" text-xl nasalization hidden sm:block text-[#7f6456d7]">
              <ul className="flex justify-center  gap-x-6">
                {paths.map((data, index) => (
                  <li
                    key={`${index + "nav"}`}
                    className={` ${
                      pathname === data.href
                        ? "text-[#7F6456] relative font-bold inline-block after:content-[''] after:block after:w-full after:h-[2px] after:bg-current after:mt-1"
                        : "hover-underline-animation  hover:text-[#7F6456] transition-colors"
                    }`}
                  >
                    <Link href={data.href}>{data.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="sm:block hidden">
              <div className="flex justify-between  items-center gap-4">
                {[
                  {
                    url: "https://www.facebook.com/profile.php?id=61573591764228",
                    icon: "/icons8-facebook-48.svg",
                  },
                  {
                    url: "https://www.instagram.com/arkiwood.uae?igsh=eXN1aW1ubDMybnow",
                    icon: "/icons8-instagram-logo.svg",
                  },
                  {
                    url: "https://www.linkedin.com/company/arkiwooduae/",
                    icon: "/icons8-linkedin-logo.svg",
                  },
                ].map((item, index) => (
                      <Link
                        key={`social-link-${index}`}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={item.icon}
                          alt={`social-icon-${index}`}
                          width={30}
                          height={30}
                        />
                      </Link>
                    ))}
                
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
