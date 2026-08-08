"use client";

import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#FF5500]/15 py-12 relative z-10 bg-[#0A0A12]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#12121C] border border-[#FF5500]/40 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-[#FF5500]" />
          </div>
          <span className="text-sm font-bold font-display text-[#F5F5FA]">
            AMIT SINGH &copy; {new Date().getFullYear()}
          </span>
        </div>

        {/* Tech Stack Signature */}
        <p className="text-xs text-[#9A9AB0] font-mono text-center">
          Crafted with Next.js, Three.js, Framer Motion & Volcanic Cosmic Aesthetics
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono text-[#9A9AB0] hover:text-[#FF5500] transition-colors group cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <div className="w-8 h-8 rounded-full bg-[#12121C] border border-[#FF5500]/30 flex items-center justify-center group-hover:border-[#FF5500] group-hover:shadow-[0_0_10px_#FF5500] transition-all">
            <ArrowUp className="w-3.5 h-3.5 text-[#FF5500] group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
}
