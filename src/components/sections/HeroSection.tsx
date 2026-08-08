"use client";

import { motion } from "framer-motion";
import { Flame, Rocket, FileText } from "lucide-react";
import Hero3DCanvas from "../canvas/Hero3DCanvas";
import { GithubIcon, LinkedInIcon, XIcon } from "../ui/SocialIcons";

interface HeroSectionProps {
  onOpenResumeModal?: () => void;
}

export default function HeroSection({ onOpenResumeModal }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Volcanic Constellation Core Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-90 pointer-events-none">
        <Hero3DCanvas />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-9 space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#12121C]/90 border border-[#FF5500]/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,85,0,0.25)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5500] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5500]"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#F5F5FA] font-mono uppercase">
              SOFTWARE DEVELOPER • AI & ML
            </span>
          </motion.div>

          {/* PROMINENT LARGE NAME & HEADLINE */}
          <motion.div variants={itemVariants} className="space-y-3">
            {/* Big Prominent Name */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-display tracking-tight text-[#F5F5FA] leading-[1.05]">
              Amit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF] glow-text-magma">Singh</span>
            </h1>

            {/* Confident Subheadline */}
            <p className="text-2xl sm:text-4xl font-extrabold text-[#F5F5FA] font-display pt-1">
              Software Developer & Full-Stack Engineer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-[#9A9AB0] max-w-3xl leading-relaxed mx-auto lg:mx-0 font-body"
          >
            Building modern Web Applications, RESTful APIs, Flask backends, AI Integration, and Azure Cloud Solutions with precision.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5500] to-[#7F5CFF] text-[#F5F5FA] font-extrabold text-base shadow-[0_0_35px_rgba(255,85,0,0.5)] hover:shadow-[0_0_45px_rgba(255,85,0,0.8)] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Rocket className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Explore Projects</span>
            </a>

            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-7 py-4 rounded-full bg-[#12121C] border border-[#7F5CFF]/40 text-[#F5F5FA] font-semibold text-base hover:border-[#FF5500] hover:bg-[#FF5500]/10 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <FileText className="w-5 h-5 text-[#4CE0FF]" />
              <span>Resume</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pl-3 border-l border-[#7F5CFF]/30">
              <a
                href="https://github.com/ThakurAmit07"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#12121C] border border-[#7F5CFF]/30 flex items-center justify-center text-[#9A9AB0] hover:text-[#F5F5FA] hover:border-[#7F5CFF] hover:shadow-[0_0_18px_rgba(127,92,255,0.5)] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-singh-435b46380"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#12121C] border border-[#7F5CFF]/30 flex items-center justify-center text-[#9A9AB0] hover:text-[#4CE0FF] hover:border-[#4CE0FF] hover:shadow-[0_0_18px_rgba(76,224,255,0.6)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Thakur_Amit07"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#12121C] border border-[#7F5CFF]/30 flex items-center justify-center text-[#9A9AB0] hover:text-[#FF5500] hover:border-[#FF5500] hover:shadow-[0_0_18px_rgba(255,85,0,0.6)] transition-all"
                aria-label="X Profile"
              >
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-xs text-[#9A9AB0] hover:text-[#FF5500] transition-colors group cursor-pointer"
        >
          <span className="uppercase tracking-widest font-mono text-[10px]">SCROLL DOWN</span>
          <div className="w-6 h-10 rounded-full border border-[#FF5500]/40 flex justify-center p-1 group-hover:border-[#FF5500] transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-2.5 bg-[#FF5500] rounded-full shadow-[0_0_8px_#FF5500]"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
