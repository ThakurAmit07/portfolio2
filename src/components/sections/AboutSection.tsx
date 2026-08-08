"use client";

import { motion } from "framer-motion";
import { Sparkles, Code, Cpu, Award, Flame } from "lucide-react";
import OrbitingTechSphere from "../canvas/OrbitingTechSphere";

export default function AboutSection() {
  const stats = [
    { label: "University", value: "GLA Univ", icon: <Award className="w-4 h-4 text-[#FF5500]" /> },
    { label: "Key Skills", value: "8+", icon: <Cpu className="w-4 h-4 text-[#7F5CFF]" /> },
    { label: "Certifications", value: "4", icon: <Sparkles className="w-4 h-4 text-[#4CE0FF]" /> },
    { label: "Core Projects", value: "EduLeap+", icon: <Code className="w-4 h-4 text-[#FF5500]" /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12121C] border border-[#FF5500]/30 shadow-[0_0_10px_rgba(255,85,0,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#9A9AB0]">
                01. ABOUT AMIT SINGH
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#F5F5FA] leading-tight">
              Driven by programming passion &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">
                modern development
              </span>
            </h2>

            <div className="space-y-4 text-[#9A9AB0] leading-relaxed text-base sm:text-lg font-body">
              <p>
                I am <strong className="text-[#F5F5FA]">Amit Singh</strong>, a Software Developer & Full-Stack Engineer currently pursuing my graduation at <strong className="text-[#F5F5FA]">GLA University</strong>.
              </p>
              <p>
                Passionate about building scalable, user-focused solutions and contributing creativity to dynamic organizations. My technical foundation spans full-stack web development (React.js, Flask, RESTful APIs, PostgreSQL), cloud fundamentals (Microsoft Azure Certified), and AI engineering.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-4 rounded-2xl bg-[#12121C]/80 border border-[#7F5CFF]/20 backdrop-blur-md hover:border-[#FF5500]/60 hover:shadow-[0_0_20px_rgba(255,85,0,0.2)] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    {stat.icon}
                    <span className="text-xs font-mono text-[#9A9AB0]">METRIC</span>
                  </div>
                  <div className="text-2xl font-bold font-display text-[#F5F5FA] group-hover:text-[#FF5500] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#9A9AB0] mt-1 font-sans">
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
            viewport={{ once: true, margin: "-100px" }}
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
