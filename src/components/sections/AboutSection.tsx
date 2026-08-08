"use client";

import { motion } from "framer-motion";
import { Sparkles, Code, Cpu, Award, Zap } from "lucide-react";
import OrbitingTechSphere from "../canvas/OrbitingTechSphere";

export default function AboutSection() {
  const stats = [
    { label: "B.Tech CSE (AI & ML)", value: "GLA University", sub: "Education", icon: <Award className="w-5 h-5 text-[#FF5500]" /> },
    { label: "Engineering Capabilities", value: "8+ Core Skills", sub: "Technical Stack", icon: <Cpu className="w-5 h-5 text-[#7F5CFF]" /> },
    { label: "Industry Credentials", value: "4 Certifications", sub: "Verified", icon: <Sparkles className="w-5 h-5 text-[#4CE0FF]" /> },
    { label: "Production Web App", value: "EduLeap+", sub: "Full-Stack System", icon: <Code className="w-5 h-5 text-[#FF5500]" /> },
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#12121C] border border-[#FF5500]/40 shadow-[0_0_15px_rgba(255,85,0,0.2)]">
              <Zap className="w-4 h-4 text-[#FF5500] animate-pulse" />
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#F5F5FA]">
                ABOUT AMIT SINGH
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-[#F5F5FA] leading-tight">
              Driven by programming passion &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF] glow-text-magma">
                modern development
              </span>
            </h2>

            <div className="space-y-4 text-zinc-200 leading-relaxed text-base sm:text-lg font-body">
              <p>
                I am <strong className="text-white font-bold">Amit Singh</strong>, a Software Developer & Full-Stack Engineer currently pursuing B.Tech in CSE (AI & ML) at <strong className="text-white font-bold">GLA University</strong>.
              </p>
              <p className="text-zinc-300">
                Passionate about building scalable, user-focused solutions and contributing engineering creativity. My technical foundation spans full-stack web development (React.js, Flask, RESTful APIs, PostgreSQL), cloud architectures (Microsoft Azure Certified), and AI data engineering.
              </p>
            </div>

            {/* FULL TEXT Stat Cards Grid (GLA University & 4 Certifications 100% Fully Visible) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="p-5 rounded-2xl bg-[#12121C]/95 border border-[#7F5CFF]/40 backdrop-blur-md hover:border-[#FF5500] hover:shadow-[0_10px_30px_rgba(255,85,0,0.3)] transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <span className="text-xs font-mono font-black text-[#FF5500] uppercase tracking-wider">METRIC STAT</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-display text-white group-hover:text-[#4CE0FF] transition-colors mt-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-300 mt-1 font-bold font-body">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Orbiting 3D Tech Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5500]/15 to-[#7F5CFF]/15 rounded-full blur-3xl -z-10" />
            <OrbitingTechSphere />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
