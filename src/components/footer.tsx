import Image from "next/image";
import React from "react";

export default function FooterFooter() {
  return (
    <footer className="bg-black">
      <div className="p-4">
        <Image src="/logo.png" width={150} height={150} alt="" />
      </div>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://www.instagram.com/arkiwood.uae?igsh=eXN1aW1ubDMybnow" className="hover:underline">
                 Instagram
                </a>
              </li>
              <li className="mb-4">
                <a href="https://www.linkedin.com/company/arkiwooduae/" className="hover:underline">
                  LInkdin
                </a>
              </li>
              <li className="mb-4">
                <a href="https://x.com/arkiwoodua4518" className="hover:underline">
                 X(Twitter)
                </a>
              </li>
              <li className="mb-4">
                <a href="https://www.facebook.com/profile.php?id=61573591764228" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
              QUICK LINKS
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Projects
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
              SERVICES
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Landscaping
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Interior Design
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Swimming Pool
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Villa Extension
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Carpentry
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full text-center text-gray-500 dark:text-gray-400  p-5 -pt-5">
          <p>© {new Date().getFullYear()} Arkiwood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
