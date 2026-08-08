"use client";

import { motion } from "framer-motion";
import { Sparkles, Layout, Server, Boxes, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  accent: string;
  description: string;
  skills: { name: string; level: number; tag: string }[];
}

export default function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: "Front-End Development",
      icon: <Layout className="w-5 h-5 text-[#7F5CFF]" />,
      accent: "#7F5CFF",
      description: "Building responsive, modern & user-friendly interfaces",
      skills: [
        { name: "React.js / Next.js", level: 90, tag: "Advanced" },
        { name: "JavaScript (ES6+) & HTML5/CSS3", level: 95, tag: "Expert" },
        { name: "Tailwind CSS / Responsive Layouts", level: 92, tag: "Advanced" },
        { name: "Design Thinking & UI/UX", level: 88, tag: "Proficient" },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Server className="w-5 h-5 text-[#4CE0FF]" />,
      accent: "#4CE0FF",
      description: "Developing RESTful APIs, Flask services & database systems",
      skills: [
        { name: "Python Programming", level: 92, tag: "Advanced" },
        { name: "Flask & RESTful API Architecture", level: 88, tag: "Advanced" },
        { name: "PostgreSQL & SQLAlchemy", level: 85, tag: "Proficient" },
        { name: "C-Programming Fundamentals", level: 82, tag: "Proficient" },
      ],
    },
    {
      title: "Cloud & AI Engineering",
      icon: <Boxes className="w-5 h-5 text-[#7F5CFF]" />,
      accent: "#7F5CFF",
      description: "Cloud fundamentals & artificial intelligence essentials",
      skills: [
        { name: "Azure Fundamentals (Cloud)", level: 88, tag: "Certified" },
        { name: "Generative AI Essentials", level: 85, tag: "TCS iON" },
        { name: "Introduction to AI & ML", level: 82, tag: "Proficient" },
        { name: "Cybersecurity Awareness", level: 85, tag: "TCS iON" },
      ],
    },
    {
      title: "Data Engineering & Tools",
      icon: <Wrench className="w-5 h-5 text-[#4CE0FF]" />,
      accent: "#4CE0FF",
      description: "Data management, version control & cloud deployment",
      skills: [
        { name: "Database Management & SQL", level: 88, tag: "Advanced" },
        { name: "Git & GitHub Version Control", level: 92, tag: "Advanced" },
        { name: "Data Engineering Concepts", level: 84, tag: "Proficient" },
        { name: "Heroku & Cloud Deployment", level: 85, tag: "Proficient" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12121C] border border-[#7F5CFF]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#4CE0FF]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#9A9AB0]">
              02. SKILLS & TECHNICAL STACK
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#F5F5FA]">
            Capabilities & Mastery
          </h2>
          <p className="text-[#9A9AB0] text-base sm:text-lg">
            A comprehensive overview of my core technical domain expertise across the modern development stack.
          </p>
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIdx * 0.15, duration: 0.7 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#12121C]/70 border border-[#7F5CFF]/20 backdrop-blur-xl hover:border-[#7F5CFF]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group"
            >
              {/* Category Title Header */}
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0A0A12] border border-[#7F5CFF]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-[#F5F5FA]">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#9A9AB0]">{cat.description}</p>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4 pt-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-[#F5F5FA] font-sans">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#0A0A12] text-[#4CE0FF] border border-[#4CE0FF]/30">
                          {skill.tag}
                        </span>
                        <span className="text-xs font-mono text-[#9A9AB0]">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    {/* Animated Meter Bar */}
                    <div className="h-2 w-full bg-[#0A0A12] rounded-full overflow-hidden p-0.5 border border-[#7F5CFF]/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${cat.accent} 0%, #4CE0FF 100%)`,
                          boxShadow: `0 0 10px ${cat.accent}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
