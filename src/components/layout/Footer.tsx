"use client";

import Link from "next/link";
import { Terminal, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedInIcon, XIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0A0A12]/90 border-t border-white/10 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          <div className="flex flex-col gap-2 max-w-md">
            <Link href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#FF5500]/20 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Amit Singh
              </span>
            </Link>

            <p className="text-xs text-zinc-400 font-mono">
              Software Developer & AI / ML Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/amit-singh-435b46380"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-violet-600/20 border border-white/10 hover:border-violet-400/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/ThakurAmit07"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-violet-600/20 border border-white/10 hover:border-violet-400/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://x.com/Thakur_Amit07"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-violet-600/20 border border-white/10 hover:border-violet-400/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              aria-label="X Profile"
            >
              <XIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 Amit Singh. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
