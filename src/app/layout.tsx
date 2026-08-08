import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import StarfieldCanvas from "@/components/canvas/StarfieldCanvas";
import CustomCursor from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amit Singh — Senior Developer & Spatial Web Architect",
  description: "Top 1% developer portfolio featuring photorealistic 3D volcanic cosmic graphics, WebGL spatial architecture, and Next.js performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A12] text-[#F5F5FA] font-body selection:bg-[#FF5500]/30 selection:text-[#4CE0FF] relative overflow-x-hidden">
        
        {/* Photorealistic Volcanic Space Wallpaper Background Layers */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[-10] overflow-hidden">
          {/* Primary Volcanic Nebula Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/volcanic_space_nebula.jpg"
            alt="Volcanic Space Background"
            className="fixed inset-0 w-full h-full object-cover opacity-50 filter brightness-90 contrast-110 scale-105 transition-opacity duration-1000"
          />

          {/* Secondary Volcanic Cosmic Core Overlay for Section Depth */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/volcanic_cosmic_core.jpg"
            alt="Cosmic Core Overlay"
            className="fixed inset-0 w-full h-full object-cover opacity-30 mix-blend-screen filter blur-sm scale-110"
          />

          {/* Subtle Vignette & Gradient Blends */}
          <div className="fixed inset-0 bg-gradient-to-b from-[#0A0A12]/40 via-transparent to-[#0A0A12]/70" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0A0A12_90%)]" />
        </div>

        {/* Dynamic Interactive Parallax Starfield & Rising Volcanic Embers */}
        <StarfieldCanvas />

        {/* Custom Glowing Cursor */}
        <CustomCursor />

        {/* Lenis Inertia Smooth Scroll Container */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
