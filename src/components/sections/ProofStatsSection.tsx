"use client";

import { motion } from "framer-motion";
import { Award, FolderGit2, GraduationCap } from "lucide-react";

const stats = [
  {
    label: "1st Semester SGPA",
    value: "8.25",
    subtext: "GLA University",
    icon: GraduationCap,
  },
  {
    label: "2nd Semester SGPA",
    value: "9.00",
    subtext: "GLA University",
    icon: GraduationCap,
  },
  {
    label: "Overall SGPA",
    value: "8.65",
    subtext: "Cumulative Grade",
    icon: GraduationCap,
  },
  {
    label: "Certifications",
    value: "4",
    subtext: "Azure & Industry Credentials",
    icon: Award,
  },
  {
    label: "GitHub Repositories",
    value: "9",
    subtext: "Public Open-Source Projects",
    icon: FolderGit2,
  },
];

export default function ProofStatsSection() {
  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Humble, Clean Grid of Key Metrics without flexing banners */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel p-5 rounded-xl border border-white/10 hover:border-violet-500/40 transition-all flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 mb-3">
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <h3 className="text-xs font-semibold text-zinc-300 mt-1">
                    {stat.label}
                  </h3>
                  <p className="text-[11px] text-zinc-500 mt-0.5 font-mono">
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
