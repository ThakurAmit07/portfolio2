"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

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
            <span className="uppercase tracking-widest">HIGHER EDUCATION</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Academic Track Record</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed font-body">
            Computer Science & Engineering specialization in Artificial Intelligence & Machine Learning at GLA University.
          </p>
        </motion.div>

        {/* Realistic, Prominent GLA University Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto glass-panel-volcanic rounded-3xl p-8 sm:p-12 border border-[#7F5CFF]/50 relative overflow-hidden shadow-[0_0_50px_rgba(127,92,255,0.2)] hover:border-[#7F5CFF] hover:shadow-[0_15px_50px_rgba(127,92,255,0.3)] transition-all duration-300"
        >
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7F5CFF]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/15">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#7F5CFF]/20 text-[#4CE0FF] border border-[#7F5CFF]/40">
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

            <div className="w-20 h-20 rounded-2xl bg-[#0A0A12] border border-[#7F5CFF]/40 flex items-center justify-center text-[#4CE0FF] shrink-0 shadow-lg">
              <GraduationCap className="w-10 h-10" />
            </div>
          </div>

          {/* Realistic SGPA Summary Breakdown */}
          <div className="py-8 border-b border-white/15">
            <span className="text-xs sm:text-sm font-mono text-zinc-300 uppercase tracking-widest block mb-5 font-black">
              Semester Performance Breakdown:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0A0A12]/90 border border-white/15 flex flex-col items-center justify-center text-center shadow-md hover:border-[#FF5500]/50 transition-colors">
                <span className="text-3xl sm:text-4xl font-black font-display text-white">
                  8.25
                </span>
                <span className="text-xs sm:text-sm text-zinc-300 font-mono mt-2 font-bold">
                  1st Semester SGPA
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-[#12121C] border border-[#7F5CFF]/60 flex flex-col items-center justify-center text-center shadow-lg ring-1 ring-[#7F5CFF]/40 hover:border-[#4CE0FF] transition-colors">
                <span className="text-3xl sm:text-4xl font-black font-display text-[#4CE0FF] glow-text-cyan">
                  9.00
                </span>
                <span className="text-xs sm:text-sm text-[#4CE0FF] font-mono mt-2 font-black">
                  2nd Semester SGPA
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A0A12]/90 border border-white/15 flex flex-col items-center justify-center text-center shadow-md hover:border-[#FF5500]/50 transition-colors">
                <span className="text-3xl sm:text-4xl font-black font-display text-white">
                  8.65
                </span>
                <span className="text-xs sm:text-sm text-zinc-300 font-mono mt-2 font-bold">
                  Overall Cumulative SGPA
                </span>
              </div>
            </div>
          </div>

          {/* Core Technical Coursework */}
          <div className="pt-8">
            <span className="text-xs sm:text-sm font-mono text-zinc-300 uppercase tracking-widest block mb-4 font-black">
              Core Specialization Coursework:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                <span>Artificial Intelligence</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#7F5CFF]" />
                <span>Machine Learning Models</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#4CE0FF]" />
                <span>Data Structures & Algorithms</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Database Management Systems</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                <span>Object-Oriented Programming</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#7F5CFF]" />
                <span>Software Engineering Principles</span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
