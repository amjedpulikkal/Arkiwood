"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";

export function DrawerNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger aria-label="Open navigation menu" asChild>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <svg
            className="block size-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </motion.button>
      </DrawerTrigger>
      <DrawerContent className="bg-white h-full w-full inset-0 flex flex-col">
        <DrawerTitle className="hidden"> navbar</DrawerTitle>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full flex flex-col"
        >
          <DrawerHeader className="">
            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close navigation menu"
            >
              <svg
                className="size-10"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </DrawerHeader>

          <nav className="flex-1 w-screen flex items-center justify-center px-6">
            <ul className="flex w-full flex-col gap-8 items-center text-center">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/ourservices" },
                { name: "Blogs", href: "/#blogs" },
                { name: "Projects", href: "/projects" },
                { name: "About", href: "/#about" },
                { name: "Contact", href: "/contact" },
              ].map(({ name, href }, index) => (
                <motion.li
                  key={name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <Link
                    href={href}
                    className="block text-2xl font-medium text-gray-700 hover:text-[#7F6456] transition-colors py-2 relative"
                    onClick={handleLinkClick}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      {name}
                    </motion.span>
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#7F6456]"
                      whileHover={{
                        width: "100%",
                        x: "-50%",
                        transition: { duration: 0.3 },
                      }}
                    />
                  </Link>
                </motion.li>
              ))}
              <div className="flex justify-between items-center gap-4 ">
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
                   
                  <motion.div
                    key={`social-icon-${index}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={`social-${index}`}
                      width={30}
                      height={30}
                    />
                  </motion.div>
                  </Link>
                ))}
              </div>
            </ul>
          </nav>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}
