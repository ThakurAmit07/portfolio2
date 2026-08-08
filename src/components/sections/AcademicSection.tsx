"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from "lucide-react";

export default function AcademicSection() {
  return (
    <section id="academics" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12121C] border border-[#7F5CFF]/40 text-[#4CE0FF] text-xs font-mono mb-4 shadow-[0_0_15px_rgba(127,92,255,0.2)]">
            <GraduationCap className="w-4 h-4 text-[#FF5500]" />
            <span className="uppercase tracking-widest font-bold">HIGHER EDUCATION</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Academic Track Record</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed font-body">
            Computer Science & Engineering specialization in Artificial Intelligence & Machine Learning at GLA University.
          </p>
        </motion.div>

        {/* Realistic, Prominent GLA University Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto glass-panel-volcanic rounded-3xl p-8 sm:p-12 border border-[#7F5CFF]/40 relative overflow-hidden shadow-[0_0_60px_rgba(127,92,255,0.2)]"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7F5CFF]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#7F5CFF]/20 text-[#4CE0FF] border border-[#7F5CFF]/40">
                  Pursuing Degree
                </span>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Calendar className="w-4 h-4 text-[#FF5500]" />
                  <span>2025 — Present</span>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                GLA University
              </h3>
              <p className="text-lg sm:text-xl font-bold text-[#7F5CFF] mt-2 font-display">
                Bachelor of Technology — Computer Science & Engineering (AI & ML)
              </p>

              <div className="flex items-center gap-2 text-xs text-zinc-400 mt-3 font-mono">
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span>Mathura, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="w-20 h-20 rounded-2xl bg-[#0A0A12] border border-[#7F5CFF]/30 flex items-center justify-center text-[#4CE0FF] shrink-0 shadow-lg">
              <GraduationCap className="w-10 h-10" />
            </div>
          </div>

          {/* Realistic SGPA / Marks Summary Breakdown */}
          <div className="py-8 border-b border-white/10">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-5 font-bold">
              Semester SGPA Summary:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0A0A12]/80 border border-white/10 flex flex-col items-center justify-center text-center shadow-md">
                <span className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                  8.25
                </span>
                <span className="text-xs text-zinc-400 font-mono mt-2 font-semibold">
                  1st Semester SGPA
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-[#12121C] border border-[#7F5CFF]/50 flex flex-col items-center justify-center text-center shadow-lg ring-1 ring-[#7F5CFF]/30">
                <span className="text-3xl sm:text-4xl font-extrabold font-display text-[#4CE0FF] glow-text-cyan">
                  9.00
                </span>
                <span className="text-xs text-[#4CE0FF] font-mono mt-2 font-bold">
                  2nd Semester SGPA
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A0A12]/80 border border-white/10 flex flex-col items-center justify-center text-center shadow-md">
                <span className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                  8.65
                </span>
                <span className="text-xs text-zinc-400 font-mono mt-2 font-semibold">
                  Overall Cumulative SGPA
                </span>
              </div>
            </div>
          </div>

          {/* Core Technical Coursework */}
          <div className="pt-8">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-4 font-bold">
              Core Technical Coursework:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-medium text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                <span>Artificial Intelligence</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-medium text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#7F5CFF]" />
                <span>Machine Learning Models</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-medium text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#4CE0FF]" />
                <span>Data Structures & Algorithms</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-medium text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Database Management Systems</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-medium text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                <span>Object-Oriented Programming (C/Python)</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-medium text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#7F5CFF]" />
                <span>Software Engineering & REST APIs</span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
