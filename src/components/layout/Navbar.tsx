"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Menu, X, Flame } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A12]/85 backdrop-blur-xl border-b border-[#FF5500]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-lg font-bold font-display text-[#F5F5FA] tracking-tight"
        >
          <div className="w-9 h-9 rounded-xl bg-[#12121C] border border-[#FF5500]/40 flex items-center justify-center group-hover:border-[#FF5500] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.5)] transition-all">
            <Terminal className="w-5 h-5 text-[#FF5500] group-hover:text-[#4CE0FF] transition-colors" />
          </div>
          <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F5F5FA] group-hover:to-[#FF5500] transition-all">
            AMIT SINGH
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#12121C]/70 border border-[#7F5CFF]/20 backdrop-blur-md px-4 py-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-[#9A9AB0] hover:text-[#F5F5FA] hover:bg-[#FF5500]/15 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF5500] to-[#7F5CFF] text-[#F5F5FA] text-sm font-medium hover:shadow-[0_0_20px_rgba(255,85,0,0.6)] active:scale-95 transition-all duration-200"
          >
            <Flame className="w-4 h-4" />
            <span>Hire Amit</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-[#12121C] border border-[#7F5CFF]/30 flex items-center justify-center text-[#F5F5FA]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0A0A12]/95 border-b border-[#FF5500]/20 px-6 py-4 space-y-3 backdrop-blur-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#9A9AB0] hover:text-[#FF5500] transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#7F5CFF] text-[#F5F5FA] text-sm font-medium shadow-[0_0_15px_rgba(255,85,0,0.5)]"
          >
            <Send className="w-4 h-4" />
            <span>Let&apos;s Connect</span>
          </a>
        </motion.div>
      )}
    </header>
  );
}
