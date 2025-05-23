// "use client";

import * as React from "react";

import BannerCLC from "./bannerCLC";

export function Banner() {
  
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="flex">
          <div className="w-screen h-screen relative overflow-hidden bg-black ">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover   border-[#d0c5b8] "
              muted
              loop
              playsInline
              autoPlay
            >
              {/* <source
                src="/1a0249c7f295d5dae9001bd0c8563e20.mp4"
                type="video/mp4"
              /> */}
              <source
                src="/7578540-Uhd 3840 2160 30Fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>
         
        </div>

        <BannerCLC />
      </div>
    </>
  );
}
