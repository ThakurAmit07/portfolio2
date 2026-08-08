"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Cpu, Cloud, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    accentColor: "text-[#FF5500]",
    borderColor: "border-[#FF5500]/50 hover:border-[#FF5500]",
    glowColor: "hover:shadow-[0_15px_40px_rgba(255,85,0,0.3)]",
    bgBadge: "bg-[#FF5500]/15 text-white border-[#FF5500]/40 font-bold",
    skills: ["C", "Python", "JavaScript"],
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    accentColor: "text-[#4CE0FF]",
    borderColor: "border-[#4CE0FF]/50 hover:border-[#4CE0FF]",
    glowColor: "hover:shadow-[0_15px_40px_rgba(76,224,255,0.3)]",
    bgBadge: "bg-[#4CE0FF]/15 text-white border-[#4CE0FF]/40 font-bold",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    accentColor: "text-[#7F5CFF]",
    borderColor: "border-[#7F5CFF]/50 hover:border-[#7F5CFF]",
    glowColor: "hover:shadow-[0_15px_40px_rgba(127,92,255,0.3)]",
    bgBadge: "bg-[#7F5CFF]/15 text-white border-[#7F5CFF]/40 font-bold",
    skills: ["Python", "Flask", "REST APIs"],
  },
  {
    title: "Database Management",
    icon: Database,
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/50 hover:border-emerald-400",
    glowColor: "hover:shadow-[0_15px_40px_rgba(16,185,129,0.3)]",
    bgBadge: "bg-emerald-500/15 text-white border-emerald-500/40 font-bold",
    skills: ["PostgreSQL", "SQL", "SQLAlchemy", "Database Architecture"],
  },
  {
    title: "Artificial Intelligence & ML",
    icon: Cpu,
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/50 hover:border-purple-400",
    glowColor: "hover:shadow-[0_15px_40px_rgba(168,85,247,0.3)]",
    bgBadge: "bg-purple-500/15 text-white border-purple-500/40 font-bold",
    skills: ["Introduction to AI", "Generative AI"],
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    accentColor: "text-sky-400",
    borderColor: "border-sky-500/50 hover:border-sky-400",
    glowColor: "hover:shadow-[0_15px_40px_rgba(56,189,248,0.3)]",
    bgBadge: "bg-sky-500/15 text-white border-sky-500/40 font-bold",
    skills: ["Microsoft Azure Fundamentals"],
  },
  {
    title: "Tools & Version Control",
    icon: Wrench,
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/50 hover:border-amber-400",
    glowColor: "hover:shadow-[0_15px_40px_rgba(245,158,11,0.3)]",
    bgBadge: "bg-amber-500/15 text-white border-amber-500/40 font-bold",
    skills: ["Git", "GitHub"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 relative z-10">
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
            <Sparkles className="w-4 h-4 text-[#FF5500]" />
            <span className="uppercase tracking-widest">TECHNICAL DOMAINS & SKILLS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F5FA]">
            Core Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Capabilities</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg max-w-xl mt-3 leading-relaxed font-body">
            Structured skill domains covering software engineering, cloud architecture, AI models, and database management.
          </p>
        </motion.div>

        {/* Dynamic Animated Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`glass-panel rounded-3xl p-7 sm:p-8 border ${cat.borderColor} ${cat.glowColor} transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer h-full`}
              >
                {/* Background Subtle Ambient Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-[#0A0A12] border border-white/20 flex items-center justify-center ${cat.accentColor} group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-md`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-extrabold font-display text-[#F5F5FA] group-hover:text-white transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2.5 mt-5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className={`px-4 py-2.5 rounded-xl border text-sm sm:text-base font-mono font-extrabold flex items-center gap-2 ${cat.bgBadge} backdrop-blur-md shadow-md transition-all duration-200 hover:scale-[1.05]`}
                      >
                        <CheckCircle2 className="w-4 h-4 opacity-90" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="mt-8 pt-4 border-t border-white/15 text-xs sm:text-sm font-mono text-zinc-300 flex items-center justify-between font-black">
                  <span>Production Ready</span>
                  <span className={`${cat.accentColor}`}>●</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
