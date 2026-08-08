"use client";

import { motion } from "framer-motion";
import { Milestone, Code2, GraduationCap, Cpu } from "lucide-react";

const milestones = [
  {
    year: "2026",
    period: "March — April 2026",
    title: "EduLeap Educational Platform",
    category: "Full-Stack Project",
    description: "Designed and engineered the EduLeap educational web platform using React.js, Python Flask, PostgreSQL, and SQLAlchemy.",
    icon: Code2,
    accent: "border-[#7F5CFF]/50 bg-[#12121C] text-[#7F5CFF]",
  },
  {
    year: "2026",
    period: "2026",
    title: "AI / ML Bootcamp & Project Work",
    category: "AI & Data Engineering",
    description: "Built the AIML_BOOTCAMP2026 hands-on repository focusing on data pre-processing pipelines, exploratory data analysis, and predictive models.",
    icon: Cpu,
    accent: "border-[#FF5500]/50 bg-[#12121C] text-[#FF5500]",
  },
  {
    year: "2025",
    period: "2025 — Present",
    title: "GLA University B.Tech CSE (AI & ML)",
    category: "Higher Education",
    description: "Commenced B.Tech in Computer Science Engineering specializing in Artificial Intelligence & Machine Learning at GLA University.",
    icon: GraduationCap,
    accent: "border-[#4CE0FF]/50 bg-[#12121C] text-[#4CE0FF]",
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="py-16 relative z-10">
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
            <Milestone className="w-4 h-4 text-[#FF5500]" />
            <span className="uppercase tracking-widest">CHRONOLOGICAL PROGRESS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Journey & Timeline</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg max-w-xl mt-3 leading-relaxed font-body">
            Milestones tracking higher education, full-stack projects, and machine learning engineering.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF5500] via-[#7F5CFF] to-transparent -translate-x-1/2 opacity-40" />

          <div className="space-y-10">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={`${item.title}-${idx}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-2 z-10 flex items-center justify-center">
                    <div className={`w-11 h-11 rounded-full border-2 flex items-center justify-center shadow-lg shadow-black/80 ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className={`ml-16 sm:ml-0 sm:w-1/2 ${isEven ? "sm:pl-12" : "sm:pr-12"}`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/15 hover:border-[#7F5CFF] transition-all duration-300 group hover:shadow-[0_12px_35px_rgba(127,92,255,0.25)] cursor-pointer"
                    >
                      
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs sm:text-sm font-mono font-black text-[#FF5500]">
                          {item.period}
                        </span>
                        <span className="text-xs font-mono font-extrabold uppercase px-2.5 py-1 rounded-md bg-white/10 text-[#4CE0FF] border border-white/15">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-[#7F5CFF] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-zinc-200 leading-relaxed mt-3 font-body font-medium">
                        {item.description}
                      </p>

                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
