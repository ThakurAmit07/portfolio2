"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ExternalLink, Download } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Journey", href: "#journey" },
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
      <div className="w-full h-[3px] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "py-3.5 bg-[#0A0A12]/92 backdrop-blur-2xl border-b border-white/15 shadow-2xl shadow-black/90"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Glowing AI & ML Badge */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-[#7F5CFF]/20 border border-[#7F5CFF]/40 flex items-center justify-center text-[#7F5CFF] group-hover:border-[#FF5500] group-hover:bg-[#FF5500]/20 transition-all duration-300 shadow-md group-hover:scale-105">
              <Terminal className="w-5 h-5 text-[#4CE0FF] group-hover:text-[#FF5500] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-[#4CE0FF] transition-colors">
                Amit Singh
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping inline-block" />
                <span className="text-xs font-mono font-black tracking-wider uppercase bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF] bg-clip-text text-transparent">
                  AI & ML • FULL STACK
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-[#12121C]/90 backdrop-blur-xl px-4 py-2 rounded-full border border-white/15 shadow-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-white"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#7F5CFF]/35 border border-[#7F5CFF]/60 rounded-full shadow-[0_0_15px_rgba(127,92,255,0.3)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Action Callouts: Download Resume & Sales Dashboard */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenResumeModal && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenResumeModal}
                className="px-4.5 py-2 text-xs sm:text-sm font-extrabold text-[#4CE0FF] bg-[#12121C] hover:bg-[#1A1A2A] border border-[#4CE0FF]/50 hover:border-[#4CE0FF] rounded-full transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#4CE0FF]" />
                <span>Download Resume</span>
              </motion.button>
            )}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://sales-dashboard07.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4.5 py-2 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#7F5CFF] to-[#FF5500] hover:from-[#6A47EB] hover:to-[#E64D00] rounded-full flex items-center gap-2 transition-all duration-200 shadow-md shadow-[#FF5500]/30"
            >
              <span>Sales Dashboard</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/10 border border-white/15 text-zinc-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-[#0A0A12]/98 backdrop-blur-2xl border-b border-white/15 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-zinc-200 hover:text-[#4CE0FF] py-2 transition-colors flex items-center justify-between border-b border-white/10"
                >
                  <span>{link.name}</span>
                  <span className="text-sm text-zinc-500 font-mono">→</span>
                </Link>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                {onOpenResumeModal && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResumeModal();
                    }}
                    className="w-full py-3 text-sm font-extrabold text-center text-[#4CE0FF] bg-[#12121C] border border-[#4CE0FF]/50 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4 text-[#4CE0FF]" />
                    <span>Download Resume</span>
                  </button>
                )}
                <a
                  href="https://sales-dashboard07.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-sm font-extrabold text-center text-white bg-[#7F5CFF] rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Sales Dashboard Live</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
