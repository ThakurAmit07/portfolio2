"use client";

import { motion } from "framer-motion";
import { Award, FolderGit2, GraduationCap, Cloud, Sparkles, Trophy } from "lucide-react";

const stats = [
  {
    label: "Microsoft Credly Badge",
    value: "Azure Certified",
    subtext: "Cloud Architecture & Fundamentals",
    icon: Cloud,
    highlightColor: "text-[#4CE0FF]",
    borderColor: "hover:border-[#4CE0FF]/60",
  },
  {
    label: "Verified Industry Badges",
    value: "6 Credentials",
    subtext: "Azure, TCS iON, CWH & Protege",
    icon: Award,
    highlightColor: "text-[#FF5500]",
    borderColor: "hover:border-[#FF5500]/60",
  },
  {
    label: "GLA University (CSE AI/ML)",
    value: "9.00 Peak SGPA",
    subtext: "Academic Excellence",
    icon: GraduationCap,
    highlightColor: "text-[#7F5CFF]",
    borderColor: "hover:border-[#7F5CFF]/60",
  },
  {
    label: "GitHub Repos & Systems",
    value: "12+ Repositories",
    subtext: "Open-Source Code & Full-Stack Apps",
    icon: FolderGit2,
    highlightColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/60",
  },
  {
    label: "Hackathon & AI Competitions",
    value: "Protex Winner",
    subtext: "Protege Hack-2-Win Recognition",
    icon: Trophy,
    highlightColor: "text-amber-400",
    borderColor: "hover:border-amber-500/60",
  },
];

export default function ProofStatsSection() {
  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern, Impressive Key Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`glass-panel p-5 rounded-2xl border border-white/10 ${stat.borderColor} transition-all duration-300 flex flex-col justify-between hover:scale-[1.02] hover:-translate-y-1 shadow-lg cursor-pointer group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl bg-[#0A0A12] border border-white/15 flex items-center justify-center ${stat.highlightColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[10px] font-mono font-black text-zinc-300 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md">
                    VERIFIED
                  </span>
                </div>

                <div>
                  <span className={`font-display text-xl sm:text-2xl font-black text-white tracking-tight block group-hover:${stat.highlightColor} transition-colors`}>
                    {stat.value}
                  </span>
                  <h3 className="text-xs font-bold text-zinc-200 mt-1 font-body">
                    {stat.label}
                  </h3>
                  <p className="text-[11px] text-zinc-300 mt-1 font-mono font-medium leading-snug">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
