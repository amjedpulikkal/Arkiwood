import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
      {
        protocol: "https",
        hostname: "vagytysnkicbwgavdcyq.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};


export default nextConfig;


