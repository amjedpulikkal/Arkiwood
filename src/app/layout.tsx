import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arkiwood",
  description:
    "Discover top-quality services and solutions tailored to your needs. Stay ahead with our innovative platform and expert insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <Analytics />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        
            {children}
            <Toaster richColors theme="dark" position="top-center" />
          
        </body>
      </ReactLenis>
    </html>
  );
}
