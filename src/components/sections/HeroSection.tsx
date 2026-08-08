"use client";

import { motion } from "framer-motion";
import { Sparkles, Flame, Rocket } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Hero3DCanvas from "../canvas/Hero3DCanvas";

export default function HeroSection() {
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
      {/* 3D Particle Constellation Background / Side Canvas */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-90 pointer-events-none">
        <Hero3DCanvas />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12121C]/90 border border-[#FF5500]/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,85,0,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5500] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5500]"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-[#F5F5FA] font-mono">
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </motion.div>

          {/* Confident Hero Headings for Amit Singh */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-[#F5F5FA] leading-[1.08]">
              Building Scalable & User-Focused{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF] glow-text-magma">
                Software Solutions
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-[#9A9AB0] font-display">
              Hi, I&apos;m <span className="text-[#F5F5FA] underline decoration-[#FF5500]/70 decoration-2 underline-offset-8">Amit Singh</span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#9A9AB0] max-w-2xl leading-relaxed mx-auto lg:mx-0 font-body"
          >
            Aspiring Software Developer & Full-Stack Engineer. Passionate about building modern Web Applications, RESTful APIs, Flask backends, and Azure Cloud Solutions.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF5500] to-[#7F5CFF] text-[#F5F5FA] font-bold text-sm shadow-[0_0_30px_rgba(255,85,0,0.5)] hover:shadow-[0_0_40px_rgba(255,85,0,0.8)] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Rocket className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Explore My Work</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#12121C] border border-[#7F5CFF]/40 text-[#F5F5FA] font-medium text-sm hover:border-[#FF5500] hover:bg-[#FF5500]/10 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Flame className="w-4 h-4 text-[#FF5500]" />
              <span>Get In Touch</span>
            </a>

            {/* Social Icons including Amit's LinkedIn */}
            <div className="flex items-center gap-2 pl-2 border-l border-[#7F5CFF]/20">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#12121C] border border-[#7F5CFF]/20 flex items-center justify-center text-[#9A9AB0] hover:text-[#F5F5FA] hover:border-[#7F5CFF] hover:shadow-[0_0_15px_rgba(127,92,255,0.4)] transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-singh-435b46380"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#12121C] border border-[#7F5CFF]/20 flex items-center justify-center text-[#9A9AB0] hover:text-[#4CE0FF] hover:border-[#4CE0FF] hover:shadow-[0_0_15px_rgba(76,224,255,0.5)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
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
