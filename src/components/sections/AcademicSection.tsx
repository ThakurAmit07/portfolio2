"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles, Award } from "lucide-react";

const courseworkList = [
  { name: "Artificial Intelligence", color: "text-[#FF5500]", border: "border-[#FF5500]/60 hover:border-[#FF5500]", bg: "bg-[#FF5500]/15", shadow: "hover:shadow-[0_10px_30px_rgba(255,85,0,0.35)]" },
  { name: "Machine Learning Models", color: "text-[#7F5CFF]", border: "border-[#7F5CFF]/60 hover:border-[#7F5CFF]", bg: "bg-[#7F5CFF]/15", shadow: "hover:shadow-[0_10px_30px_rgba(127,92,255,0.35)]" },
  { name: "Data Structures & Algorithms", color: "text-[#4CE0FF]", border: "border-[#4CE0FF]/60 hover:border-[#4CE0FF]", bg: "bg-[#4CE0FF]/15", shadow: "hover:shadow-[0_10px_30px_rgba(76,224,255,0.35)]" },
  { name: "Database Management Systems", color: "text-emerald-400", border: "border-emerald-500/60 hover:border-emerald-400", bg: "bg-emerald-500/15", shadow: "hover:shadow-[0_10px_30px_rgba(16,185,129,0.35)]" },
  { name: "Object-Oriented Programming", color: "text-amber-400", border: "border-amber-500/60 hover:border-amber-400", bg: "bg-amber-500/15", shadow: "hover:shadow-[0_10px_30px_rgba(245,158,11,0.35)]" },
  { name: "Software Engineering Principles", color: "text-purple-400", border: "border-purple-500/60 hover:border-purple-400", bg: "bg-purple-500/15", shadow: "hover:shadow-[0_10px_30px_rgba(168,85,247,0.35)]" },
];

export default function AcademicSection() {
  return (
    <section id="academics" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12121C] border border-[#7F5CFF]/40 text-[#4CE0FF] text-xs sm:text-sm font-mono mb-3 shadow-[0_0_15px_rgba(127,92,255,0.2)] font-bold">
            <GraduationCap className="w-4 h-4 text-[#FF5500]" />
            <span className="uppercase tracking-widest">HIGHER ACADEMIC QUALIFICATIONS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Academic History</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed font-body">
            Computer Science & Engineering specialization in Artificial Intelligence & Machine Learning at GLA University.
          </p>
        </motion.div>

        {/* Centered, Prominent GLA University Card (Class XII/X Cards Removed from Academic Section) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.01 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto glass-panel-volcanic rounded-3xl p-8 sm:p-12 border border-[#7F5CFF]/60 relative overflow-hidden shadow-[0_0_60px_rgba(127,92,255,0.25)] hover:border-[#7F5CFF] hover:shadow-[0_20px_60px_rgba(127,92,255,0.35)] transition-all duration-300 mb-12"
        >
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7F5CFF]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/15">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full bg-[#7F5CFF]/20 text-[#4CE0FF] border border-[#7F5CFF]/40">
                  Pursuing Degree
                </span>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-200 font-mono font-bold">
                  <Calendar className="w-4 h-4 text-[#FF5500]" />
                  <span>2025 — Present</span>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
                GLA University
              </h3>
              <p className="text-lg sm:text-xl font-extrabold text-[#7F5CFF] mt-2 font-display">
                Bachelor of Technology — Computer Science & Engineering (AI & ML)
              </p>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 mt-3 font-mono font-bold">
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span>Mathura, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="w-20 h-20 rounded-2xl bg-[#0A0A12] border border-[#7F5CFF]/50 flex items-center justify-center text-[#4CE0FF] shrink-0 shadow-xl group-hover:scale-110 transition-transform">
              <GraduationCap className="w-10 h-10" />
            </div>
          </div>

          {/* Realistic SGPA Summary Breakdown */}
          <div className="pt-8">
            <span className="text-xs sm:text-sm font-mono text-zinc-300 uppercase tracking-widest block mb-5 font-black">
              Semester Performance Breakdown:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-6 rounded-2xl bg-[#0A0A12]/95 border border-white/15 flex flex-col items-center justify-center text-center shadow-md hover:border-[#FF5500]/60 transition-all cursor-pointer"
              >
                <span className="text-3xl sm:text-4xl font-black font-display text-white">
                  8.25
                </span>
                <span className="text-xs sm:text-sm text-zinc-300 font-mono mt-2 font-bold">
                  1st Semester SGPA
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-6 rounded-2xl bg-[#12121C] border border-[#7F5CFF]/70 flex flex-col items-center justify-center text-center shadow-lg ring-1 ring-[#7F5CFF]/50 hover:border-[#4CE0FF] transition-all cursor-pointer"
              >
                <span className="text-3xl sm:text-4xl font-black font-display text-[#4CE0FF] glow-text-cyan">
                  9.00
                </span>
                <span className="text-xs sm:text-sm text-[#4CE0FF] font-mono mt-2 font-black">
                  2nd Semester SGPA
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-6 rounded-2xl bg-[#0A0A12]/95 border border-white/15 flex flex-col items-center justify-center text-center shadow-md hover:border-[#FF5500]/60 transition-all cursor-pointer"
              >
                <span className="text-3xl sm:text-4xl font-black font-display text-white">
                  8.65
                </span>
                <span className="text-xs sm:text-sm text-zinc-300 font-mono mt-2 font-bold">
                  Overall Cumulative SGPA
                </span>
              </motion.div>
            </div>
          </div>

        </motion.div>

        {/* HIGHLY ANIMATED, STUNNING CORE SPECIALIZATION COURSEWORK (IMAGE 3 FIX) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto glass-panel rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Backlight Overlay */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-[#7F5CFF]/15 to-transparent blur-2xl pointer-events-none" />

          {/* Section Heading with Vibrant Gradient */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#12121C] border border-[#FF5500]/50 flex items-center justify-center text-[#FF5500] shadow-lg shadow-[#FF5500]/20">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">
                CORE SPECIALIZATION COURSEWORK
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono font-semibold mt-0.5">
                Foundational engineering domains & interactive academic competencies
              </p>
            </div>
          </div>

          {/* Animated Interactive Coursework Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
            {courseworkList.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className={`p-4.5 rounded-2xl bg-[#0A0A12]/95 border ${item.border} ${item.bg} ${item.shadow} backdrop-blur-xl transition-all duration-300 cursor-pointer flex items-center gap-3.5 group relative overflow-hidden`}
              >
                <div className={`p-2.5 rounded-xl bg-black/70 border border-white/15 group-hover:scale-110 group-hover:rotate-6 transition-all ${item.color}`}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-base sm:text-lg font-black font-display text-white group-hover:text-[#4CE0FF] transition-colors leading-snug">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
