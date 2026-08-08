"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Cpu, Cloud, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    accentColor: "text-[#FF5500]",
    borderColor: "border-[#FF5500]/40 hover:border-[#FF5500]",
    glowColor: "shadow-[0_0_25px_rgba(255,85,0,0.15)]",
    bgBadge: "bg-[#FF5500]/10 text-[#FF8844] border-[#FF5500]/30",
    skills: ["C", "Python", "JavaScript"],
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    accentColor: "text-[#4CE0FF]",
    borderColor: "border-[#4CE0FF]/40 hover:border-[#4CE0FF]",
    glowColor: "shadow-[0_0_25px_rgba(76,224,255,0.15)]",
    bgBadge: "bg-[#4CE0FF]/10 text-[#4CE0FF] border-[#4CE0FF]/30",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    accentColor: "text-[#7F5CFF]",
    borderColor: "border-[#7F5CFF]/40 hover:border-[#7F5CFF]",
    glowColor: "shadow-[0_0_25px_rgba(127,92,255,0.15)]",
    bgBadge: "bg-[#7F5CFF]/10 text-[#B09BFF] border-[#7F5CFF]/30",
    skills: ["Python", "Flask", "REST APIs"],
  },
  {
    title: "Database Management",
    icon: Database,
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/40 hover:border-emerald-400",
    glowColor: "shadow-[0_0_25px_rgba(16,185,129,0.15)]",
    bgBadge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    skills: ["PostgreSQL", "SQL", "SQLAlchemy", "Database Management"],
  },
  {
    title: "Artificial Intelligence & ML",
    icon: Cpu,
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/40 hover:border-purple-400",
    glowColor: "shadow-[0_0_25px_rgba(168,85,247,0.15)]",
    bgBadge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    skills: ["Introduction to AI", "Generative AI"],
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    accentColor: "text-sky-400",
    borderColor: "border-sky-500/40 hover:border-sky-400",
    glowColor: "shadow-[0_0_25px_rgba(56,189,248,0.15)]",
    bgBadge: "bg-sky-500/10 text-sky-300 border-sky-500/30",
    skills: ["Microsoft Azure Fundamentals"],
  },
  {
    title: "Tools & Version Control",
    icon: Wrench,
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/40 hover:border-amber-400",
    glowColor: "shadow-[0_0_25px_rgba(245,158,11,0.15)]",
    bgBadge: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    skills: ["Git", "GitHub"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
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
            <Sparkles className="w-4 h-4 text-[#FF5500]" />
            <span className="uppercase tracking-widest font-bold">TECHNICAL DOMAINS & SKILLS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5FA]">
            Core Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Capabilities</span>
          </h2>
          <p className="text-[#9A9AB0] text-base sm:text-lg max-w-2xl mt-4 leading-relaxed font-body">
            Structured skill domains covering software engineering, cloud architecture, AI models, and database management.
          </p>
        </motion.div>

        {/* Larger, Visually Stunning Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-panel rounded-3xl p-8 border ${cat.borderColor} ${cat.glowColor} transition-all duration-400 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden`}
              >
                {/* Background Subtle Gradient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-[#0A0A12] border border-white/15 flex items-center justify-center ${cat.accentColor} group-hover:scale-110 transition-transform shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-[#F5F5FA] group-hover:text-white transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Badges (Bigger & Prominent) */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className={`px-4 py-2.5 rounded-xl border text-sm font-mono font-semibold flex items-center gap-2 ${cat.bgBadge} backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-[1.04]`}
                      >
                        <CheckCircle2 className="w-4 h-4 opacity-80" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-[#9A9AB0] flex items-center justify-between">
                  <span>Production Ready</span>
                  <span className={`${cat.accentColor} font-bold`}>●</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
