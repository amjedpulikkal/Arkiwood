
import React from "react";
import ImageComparisonSlider from "./ImageComparisonSlider";

export default function AflterAndBeforImage() {
  const images = [
    {
      fImage: "/kyliefitts_havenly_shelby-rocklan.jpg",
      bImage: "/kitchen-before.jpg",
    },
    {
      fImage:
        "/kyliefitts_havenly_viviansapartment_01-800x1200-cb6eae5-700x1050.jpg",
      bImage: "/Screen-Shot.png",
    },
    { fImage: "/havenly_k.jpg", bImage: "/f9544380-5.jpg" },
    { fImage: "/kyliefitts_havenl.jpg", bImage: "/sunroom-before.jpg" },
    { fImage: "/fImag1.jpeg", bImage: "/bImg2.jpeg" },
  ];
  return (
  <div className=" px-6 pt-20">
      <div className="flex justify-center text-center ">
        <h1 className=" hover-underline-animation  nasalization text-4xl text-[#7F6456]">
          Projects We’re Excited About
        </h1>
      </div>
      <p className="text-center text-[#7F6456] ">
        Just like our work ethic, our designs and creative ideas are totally
        clear and open from the very start.
      </p>
      <div className="flex justify-evenly gap-6 flex-wrap pt-10">
        {images.map((src, index) => (
          <ImageComparisonSlider key={`${index+src.bImage+src.fImage}`} bImage={src.bImage} fImage={src.fImage} />
        ))}
      </div>
    </div>
  );
}
