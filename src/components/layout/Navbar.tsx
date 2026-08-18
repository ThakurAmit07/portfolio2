"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
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
  onOpenContactModal?: () => void;
}

export default function Navbar({ onOpenResumeModal, onOpenContactModal }: NavbarProps) {
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
            ? "py-3 bg-[#0A0A12]/95 backdrop-blur-2xl border-b border-white/15 shadow-2xl shadow-black/90"
            : "py-4.5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* BRAND LOGO: AS Box height perfectly aligned with Amit Singh + AI & ML */}
          <Link href="#" className="flex items-center gap-3.5 group">
            <div className="relative shrink-0">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF] p-[2px] shadow-lg shadow-[#7F5CFF]/30 group-hover:shadow-[#FF5500]/40"
              >
                <div className="w-full h-full bg-[#0A0A12] rounded-[14px] flex items-center justify-center font-display font-black text-lg text-white group-hover:bg-transparent transition-all duration-300">
                  AS
                </div>
              </motion.div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0A0A12] shadow-sm animate-pulse" />
            </div>

            {/* Vertically Centered Name & Subtitle Stack */}
            <div className="flex flex-col justify-center my-auto">
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#4CE0FF] group-hover:to-[#FF5500] transition-all leading-tight">
                Amit Singh
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-xs font-mono font-black tracking-widest uppercase text-[#FF5500] glow-text-magma">
                  AI & ML
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4CE0FF] inline-block animate-ping" />
              </div>
            </div>
          </Link>

          {/* Animated Desktop Nav Items Container */}
          <div className="hidden lg:flex items-center gap-1 bg-[#12121C]/90 backdrop-blur-2xl px-4 py-2 rounded-full border border-white/20 shadow-2xl shadow-black/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-xs sm:text-sm font-extrabold rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-white glow-text-cyan"
                      : "text-zinc-300 hover:text-[#4CE0FF]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#FF5500]/30 via-[#7F5CFF]/40 to-[#4CE0FF]/30 border border-[#7F5CFF]/70 rounded-full shadow-[0_0_20px_rgba(127,92,255,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* TOP RIGHT PURE MAIL SYMBOL LOGO BUTTON */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenContactModal}
              className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#12121C] via-[#1A1028] to-[#12121C] border border-[#7F5CFF]/60 hover:border-[#FF5500] flex items-center justify-center text-[#4CE0FF] hover:text-[#FF5500] shadow-lg shadow-[#7F5CFF]/20 hover:shadow-[#FF5500]/40 transition-all duration-300 cursor-pointer"
              title="Open Contact Form"
              aria-label="Open Contact Form"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
            </motion.button>
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
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenContactModal) onOpenContactModal();
                  }}
                  className="w-full py-3 text-sm font-extrabold text-center text-[#4CE0FF] bg-[#12121C] border border-[#4CE0FF]/50 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-[#4CE0FF]" />
                  <span>Get In Touch (Send Email)</span>
                </button>

                {onOpenResumeModal && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResumeModal();
                    }}
                    className="w-full py-3 text-sm font-extrabold text-center text-white bg-[#7F5CFF] rounded-xl flex items-center justify-center gap-2"
                  >
                    <span>Download Resume</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
