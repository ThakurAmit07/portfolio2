"use client";

import { motion } from "framer-motion";
import { Sparkles, Code, Cpu, Award, Zap } from "lucide-react";
import OrbitingTechSphere from "../canvas/OrbitingTechSphere";

export default function AboutSection() {
  const stats = [
    { label: "B.Tech CSE", value: "GLA Univ", sub: "Education", icon: <Award className="w-5 h-5 text-[#FF5500]" /> },
    { label: "Technical", value: "8+ Domains", sub: "Core Skills", icon: <Cpu className="w-5 h-5 text-[#7F5CFF]" /> },
    { label: "Verified", value: "4 Credentials", sub: "Certifications", icon: <Sparkles className="w-5 h-5 text-[#4CE0FF]" /> },
    { label: "Live System", value: "EduLeap", sub: "Full-Stack App", icon: <Code className="w-5 h-5 text-[#FF5500]" /> },
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6">
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

            {/* Non-Overlapping, Cleanly Sized Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="p-4 rounded-2xl bg-[#12121C]/90 border border-[#7F5CFF]/35 backdrop-blur-md hover:border-[#FF5500] hover:shadow-[0_10px_25px_rgba(255,85,0,0.3)] transition-all group cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <span className="text-[10px] font-mono font-bold text-[#FF5500] uppercase tracking-wider">STATS</span>
                  </div>
                  <div className="text-lg sm:text-xl font-black font-display text-white group-hover:text-[#4CE0FF] transition-colors mt-1 truncate">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-300 mt-1 font-bold font-body truncate">
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
