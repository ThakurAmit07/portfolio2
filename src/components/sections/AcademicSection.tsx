"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";

const academics = [
  {
    institution: "GLA University",
    degree: "Bachelor of Technology — Computer Science & Engineering (AI & ML)",
    status: "Pursuing Degree",
    timeline: "2025 — Present",
    location: "Mathura, UP, India",
    metrics: [
      { label: "1st Semester SGPA", value: "8.25" },
      { label: "2nd Semester SGPA", value: "9.00" },
      { label: "Cumulative Overall SGPA", value: "8.65" },
    ],
    coursework: [
      "Artificial Intelligence",
      "Machine Learning Models",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Software Engineering Principles",
    ],
  },
  {
    institution: "Central Board of Secondary Education (CBSE)",
    degree: "Class XII — Senior Secondary (Intermediate)",
    status: "Completed",
    timeline: "2025",
    location: "India",
    score: "73.20%",
  },
  {
    institution: "Central Board of Secondary Education (CBSE)",
    degree: "Class X — High School Examination",
    status: "Completed",
    timeline: "2023",
    location: "India",
    score: "84.80%",
  },
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
            <span className="uppercase tracking-widest">HIGHER EDUCATION & QUALIFICATIONS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Academic History</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed font-body">
            Higher education at GLA University along with CBSE senior secondary and high school records.
          </p>
        </motion.div>

        {/* Main Grid: GLA University Featured Card + Class XII / X Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* GLA University Primary Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel-volcanic rounded-3xl p-8 sm:p-10 border border-[#7F5CFF]/50 relative overflow-hidden shadow-[0_0_50px_rgba(127,92,255,0.2)] hover:border-[#7F5CFF] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7F5CFF]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#7F5CFF]/20 text-[#4CE0FF] border border-[#7F5CFF]/40">
                  {academics[0].status}
                </span>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-200 font-mono font-bold">
                  <Calendar className="w-4 h-4 text-[#FF5500]" />
                  <span>{academics[0].timeline}</span>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                {academics[0].institution}
              </h3>
              <p className="text-lg sm:text-xl font-extrabold text-[#7F5CFF] mt-2 font-display">
                {academics[0].degree}
              </p>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 mt-3 font-mono font-bold">
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span>{academics[0].location}</span>
              </div>

              {/* SGPA Summary Grid */}
              <div className="mt-8 pt-6 border-t border-white/15">
                <span className="text-xs sm:text-sm font-mono text-zinc-300 uppercase tracking-widest block mb-4 font-black">
                  Semester Performance Breakdown:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {academics[0].metrics?.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-2xl bg-[#0A0A12]/90 border border-white/15 flex flex-col items-center justify-center text-center shadow-md hover:border-[#FF5500]/50 transition-colors"
                    >
                      <span className="text-2xl sm:text-3xl font-black font-display text-white">
                        {m.value}
                      </span>
                      <span className="text-xs text-zinc-300 font-mono mt-1 font-bold">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Coursework Highlights */}
            <div className="mt-8 pt-6 border-t border-white/15">
              <span className="text-xs sm:text-sm font-mono text-zinc-300 uppercase tracking-widest block mb-3 font-black">
                Core Specialization Coursework:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {academics[0].coursework?.map((cw) => (
                  <div key={cw} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-200 bg-white/5 p-2 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{cw}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Secondary Column: Class XII & Class X Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {academics.slice(1).map((school, idx) => (
              <motion.div
                key={school.degree}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 * idx }}
                className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/15 hover:border-[#4CE0FF] transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_12px_35px_rgba(76,224,255,0.2)] flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#FF5500] font-black uppercase tracking-wider">
                      {school.timeline}
                    </span>
                    <span className="text-xs font-mono text-[#4CE0FF] bg-[#4CE0FF]/15 px-3 py-1 rounded-full border border-[#4CE0FF]/30 font-bold">
                      {school.status}
                    </span>
                  </div>

                  <h4 className="text-2xl font-extrabold text-white font-display">
                    {school.institution}
                  </h4>
                  <p className="text-base font-bold text-zinc-200 mt-2 font-display">
                    {school.degree}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                  <span className="text-sm font-mono text-zinc-300 font-bold">Examination Percentage:</span>
                  <span className="text-2xl font-black font-display text-emerald-400 glow-text-cyan">
                    {school.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
