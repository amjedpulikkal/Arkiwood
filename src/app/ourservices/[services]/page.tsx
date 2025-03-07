import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navbar from "@/components/navbar";
import Image from "next/image";

const interiorDesignFitouts = [
    {
      category: "Residential Interior Design & Fit-Out Works",
      applicableSpaces: [
        "Villas",
        "Apartments",
        "Townhouses",
        "Penthouses",
        "Mansions"
      ],
      interiorDesignStyles: [
        { name: "Modern", description: "Clean lines, minimalism, and neutral tones." },
        { name: "Contemporary", description: "A mix of modern and traditional elements." },
        { name: "Classic/Luxury", description: "Ornate detailing, chandeliers, and rich textures." },
        { name: "Islamic/Arabic", description: "Traditional Mashrabiya patterns and intricate woodwork." },
        { name: "Mediterranean", description: "Earthy colors, arches, and rustic aesthetics." },
        { name: "Industrial", description: "Exposed brick, steel elements, and raw finishes." },
        { name: "Sustainable/Eco-friendly", description: "Green materials and energy-efficient designs." }
      ],
      fitOutWorks: [
        "Ceiling & Wall Works – Gypsum, false ceilings, wallpaper, and decorative paneling.",
        "Flooring – Marble, tiles, parquet, vinyl, or carpet installation.",
        "Joinery & Carpentry – Customized wardrobes, kitchen cabinets, and built-in furniture.",
        "MEP (Mechanical, Electrical & Plumbing) Works – HVAC, lighting, and sanitary installations.",
        "Smart Home Integration – Home automation systems, security, and lighting control.",
        "Soft Furnishings & Decor – Curtains, upholstery, and accessories."
      ]
    },
    {
      category: "Commercial Interior Design & Fit-Out Works",
      applicableSpaces: [
        "Offices",
        "Corporate Buildings",
        "Co-working Spaces"
      ],
      interiorDesignStyles: [
        { name: "Corporate Modern", description: "Sleek and professional layouts with ergonomic designs." },
        { name: "Biophilic Design", description: "Natural elements like plants and water features." },
        { name: "Minimalist Office Design", description: "Open layouts with simple, functional furniture." },
        { name: "High-Tech/Smart Offices", description: "Integrated technology for automation and efficiency." }
      ],
      fitOutWorks: [
        "Office Partitioning – Glass, gypsum, or movable partitions.",
        "Reception & Lobby Design – Custom counters, signage, and branding elements.",
        "Workstations & Conference Rooms – Ergonomic furniture and acoustic treatments.",
        "Lighting & Electrical Works – Task lighting, ambient lighting, and energy-efficient setups.",
        "Networking & IT Infrastructure – Structured cabling, server rooms, and smart access systems.",
        "HVAC & Ventilation – Centralized or split-unit air conditioning."
      ]
    },
    {
      category: "Retail Interior Design & Fit-Out Works",
      applicableSpaces: [
        "Shops",
        "Malls",
        "Showrooms",
        "Boutiques",
        "Hospitality Spaces"
      ],
      interiorDesignStyles: [
        { name: "Luxury & High-End Retail", description: "Premium materials, artistic lighting, and bespoke fixtures." },
        { name: "Minimalist & Modern Retail", description: "Clean layouts with a focus on product display." },
        { name: "Industrial Retail", description: "Exposed ceilings, metal structures, and raw textures." },
        { name: "Thematic & Concept Stores", description: "Unique branding with immersive experiences." }
      ],
      fitOutWorks: [
        "Display & Shelving Units – Custom-made racks, mannequins, and digital displays.",
        "Cashier & POS Counters – Functional and visually appealing checkout areas.",
        "Lighting Design – Accent lighting, LED strips, and ambient lighting to enhance the shopping experience.",
        "Signage & Branding – Indoor and outdoor signage, wayfinding systems.",
        "Flooring & Wall Finishes – Custom tiling, vinyl, stone, or polished concrete.",
        "Security & Surveillance Systems – CCTV, RFID tags, and access control."
      ]
    },
    {
      category: "Additional Categories of Interior Fit-Out Works in the UAE",
      subcategories: [
        {
          name: "F&B (Restaurants, Cafés, and Lounges)",
          fitOutWorks: [
            "Kitchen fit-outs",
            "Dining area layouts",
            "Theme-based decor"
          ]
        },
        {
          name: "Healthcare Facilities (Clinics & Hospitals)",
          fitOutWorks: [
            "Medical-grade flooring",
            "Sterile environments",
            "Patient-friendly layouts"
          ]
        },
        {
          name: "Hospitality (Hotels & Resorts)",
          fitOutWorks: [
            "Luxurious lobbies",
            "Guest room designs",
            "Spa interiors"
          ]
        },
        {
          name: "Entertainment & Leisure (Cinemas, Gyms, and Spas)",
          fitOutWorks: [
            "Soundproofing",
            "Customized seating",
            "Specialized lighting"
          ]
        }
      ]
    }
  ];
  
  


type tParams = Promise<{ services: string }>;
export default async function page({ params }: { params: tParams}) {

    const p = decodeURIComponent((await params)?.services || "");

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center ">
        <h1 className="nasalization hover-underline-animation center text-4xl text-[#7F6456]">
          {p}
        </h1>
      </div>

      
      <div className="w-full flex justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-[90%] h-96"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 h-96 lg:basis-1/3 "
              >
                <Image src="https://placehold.co/500" width={500} height={500} alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" border-0  rounded-none outline-none shadow-none " />
          <CarouselNext className="border-0 rounded-none outline-none shadow-none " />
        </Carousel>
      </div>
    </>
  );
}
