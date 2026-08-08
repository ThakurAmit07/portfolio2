"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ExternalLink } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Journey", href: "#journey" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export default function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Scroll Progress Bar */}
      <div className="w-full h-[2px] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#0A0A12]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#7F5CFF]/20 border border-[#7F5CFF]/30 flex items-center justify-center text-[#7F5CFF] group-hover:border-[#FF5500] group-hover:bg-[#FF5500]/20 transition-all duration-300">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-white group-hover:text-[#4CE0FF] transition-colors">
                Amit Singh
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                AI & SOFTWARE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-[#12121C]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#7F5CFF]/30 border border-[#7F5CFF]/40 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Action Callouts */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenResumeModal && (
              <button
                onClick={onOpenResumeModal}
                className="px-3.5 py-1.5 text-xs font-medium text-[#4CE0FF] bg-[#12121C]/80 hover:bg-[#1A1A2A] border border-[#4CE0FF]/30 hover:border-[#4CE0FF]/60 rounded-full transition-all duration-200"
              >
                Resume
              </button>
            )}
            <a
              href="https://sales-dashboard07.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#7F5CFF] to-[#FF5500] hover:from-[#6A47EB] hover:to-[#E64D00] rounded-full flex items-center gap-1.5 transition-all duration-200 shadow-md shadow-[#FF5500]/20"
            >
              <span>Sales Dashboard</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A12]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-300 hover:text-[#4CE0FF] py-1 transition-colors flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-zinc-600 font-mono">→</span>
                </Link>
              ))}

              <div className="pt-2 flex flex-col gap-2.5">
                {onOpenResumeModal && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResumeModal();
                    }}
                    className="w-full py-2.5 text-xs font-semibold text-center text-[#4CE0FF] bg-[#12121C] border border-[#4CE0FF]/40 rounded-lg"
                  >
                    View Resume
                  </button>
                )}
                <a
                  href="https://sales-dashboard07.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-xs font-semibold text-center text-white bg-[#7F5CFF] rounded-lg flex items-center justify-center gap-1.5"
                >
                  <span>Sales Dashboard Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
