"use client";

import * as React from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerNav() {
  return (
    <Drawer direction="right">
      <DrawerTrigger aria-label="Open navigation menu">
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
      </DrawerTrigger>
      <DrawerContent className="bg-amber-50 p-6">
        <DrawerHeader>
          <DrawerTitle className="text-lg font-semibold">Navigation</DrawerTitle>
        </DrawerHeader>
        <nav>
          <ul className="flex flex-col gap-4">
            {[
              { name: "Services", href: "#our-services" },
              { name: "Blogs", href: "#blogs" },
              { name: "Projects", href: "#projects" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" },
            ].map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="block text-lg font-medium text-gray-700 hover:text-[#7F6456] transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
