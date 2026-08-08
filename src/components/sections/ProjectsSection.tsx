"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, X, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface Project {
  id: string;
  title: string;
  category: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  date?: string;
  description: string;
  tags: string[];
  features?: string[];
}

const projects: Project[] = [
  {
    id: "sales-dashboard",
    title: "Sales Intelligence Dashboard",
    category: "FEATURED • BUSINESS INTELLIGENCE",
    featured: true,
    liveUrl: "https://sales-dashboard07.vercel.app",
    githubUrl: "https://github.com/ThakurAmit07",
    date: "2026",
    description:
      "An interactive business intelligence dashboard designed to visualize sales performance, customer activity and revenue insights through a live data-driven interface.",
    tags: ["React.js", "Supabase", "TypeScript", "Tailwind CSS", "Recharts", "AI Assistant"],
    features: [
      "Supabase live synchronization",
      "Revenue tracking & today's performance",
      "Average daily revenue & active customer metrics",
      "Daily leaderboard & top destination analytics",
      "Integrated AI Assistant for natural language queries",
      "Recent orders stream & monthly sales revenue distribution",
      "SIM plan share & regional revenue analytics",
    ],
  },
  {
    id: "eduleap",
    title: "EduLeap Educational Platform",
    category: "FULL-STACK WEB APP",
    featured: false,
    date: "March 2026 – April 2026",
    githubUrl: "https://github.com/ThakurAmit07",
    description:
      "Educational platform designed to help students access learning materials, track progress and improve their skills through interactive content.",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Python", "Flask", "PostgreSQL"],
    features: [
      "Interactive learning material distribution",
      "Student progress tracking & quiz modules",
      "Flask RESTful API integration with SQLAlchemy ORM",
      "PostgreSQL database integration",
    ],
  },
  {
    id: "aiml-bootcamp",
    title: "AIML_BOOTCAMP2026",
    category: "ARTIFICIAL INTELLIGENCE & ML",
    featured: false,
    date: "2026",
    githubUrl: "https://github.com/ThakurAmit07",
    description:
      "Comprehensive Machine Learning & AI project repository containing data pipeline implementations, model training workflows, and predictive analytics scripts.",
    tags: ["Python", "Machine Learning", "Data Processing", "NumPy", "Pandas", "Scikit-Learn"],
    features: [
      "Supervised & unsupervised learning models",
      "Exploratory Data Analysis (EDA) pipelines",
      "Model optimization & evaluation metrics",
    ],
  },
  {
    id: "project-07",
    title: "Project_07 — Web Application",
    category: "WEB DEVELOPMENT",
    featured: false,
    githubUrl: "https://github.com/ThakurAmit07",
    description: "Custom web development repository demonstrating modular frontend architecture and modern layout techniques.",
    tags: ["JavaScript", "HTML5", "CSS3", "Git"],
  },
  {
    id: "expense-tracker",
    title: "Project-2 — Expense Tracker",
    category: "UTILITY APPLICATION",
    featured: false,
    githubUrl: "https://github.com/ThakurAmit07",
    description: "Personal finance and daily expense tracking tool with real-time category aggregation and budget summaries.",
    tags: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
  },
  {
    id: "todo-list",
    title: "Project-1 — Todo List",
    category: "UTILITY APPLICATION",
    featured: false,
    githubUrl: "https://github.com/ThakurAmit07",
    description: "Interactive task management app with task prioritization, state persistence, and clean UI filtering.",
    tags: ["JavaScript", "DOM Manipulation", "CSS3"],
  },
  {
    id: "password-generator",
    title: "Project-3 — Password Generator & Security Quiz",
    category: "SECURITY TOOL & QUIZ",
    featured: false,
    githubUrl: "https://github.com/ThakurAmit07",
    description: "Cryptographically customizable password generator and security logic tool with instant clipboard copy and dynamic question review.",
    tags: ["JavaScript", "Security", "CSS3", "DOM Logic"],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProj = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12121C] border border-[#FF5500]/40 text-[#FF5500] text-xs sm:text-sm font-mono mb-3 shadow-[0_0_15px_rgba(255,85,0,0.2)] font-bold">
            <Sparkles className="w-4 h-4 text-[#FF5500]" />
            <span className="uppercase tracking-widest">PORTFOLIO PROJECTS & CODE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Engineered Software & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Live Applications</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg max-w-xl mt-3 leading-relaxed font-body">
            Full-stack web systems, business intelligence platforms, and software repositories built with modern standards.
          </p>
        </motion.div>

        {/* FEATURED PROJECT SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel-volcanic rounded-3xl p-6 sm:p-10 border border-[#FF5500]/50 relative overflow-hidden mb-12 shadow-[0_0_50px_rgba(255,85,0,0.2)] hover:border-[#FF5500] transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Interactive Browser Preview */}
            <div
              className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-[#12121C] via-[#0A0A12] to-black p-2 cursor-pointer shadow-2xl"
              onClick={() => setSelectedProject(featuredProj)}
            >
              <div className="px-4 py-2.5 bg-black/80 border-b border-white/15 rounded-t-xl flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                </div>
                <div className="text-xs font-mono font-bold text-white bg-white/10 px-3.5 py-1 rounded-full border border-white/15 flex items-center gap-1">
                  <span>sales-dashboard07.vercel.app</span>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-300" />
              </div>

              <div className="h-64 sm:h-84 w-full bg-gradient-to-br from-[#1A1028] via-[#0A0A12] to-[#12121C] relative flex flex-col justify-between p-6 overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-mono font-black text-[#FF5500] bg-black/90 border border-[#FF5500]/50 px-3.5 py-1.5 rounded-full">
                    LIVE PRODUCTION DEPLOYMENT
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-emerald-400 font-extrabold flex items-center gap-1.5 bg-black/70 px-3 py-1 rounded-full border border-emerald-500/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    Supabase Synced
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3.5 my-auto">
                  <div className="bg-black/70 border border-[#FF5500]/40 p-4 rounded-xl">
                    <span className="text-xs text-zinc-400 font-mono font-bold block">Today&apos;s Revenue</span>
                    <span className="text-lg sm:text-xl font-black font-display text-white">Live Data</span>
                  </div>
                  <div className="bg-black/70 border border-[#7F5CFF]/40 p-4 rounded-xl">
                    <span className="text-xs text-zinc-400 font-mono font-bold block">Active Customers</span>
                    <span className="text-lg sm:text-xl font-black font-display text-[#7F5CFF]">Syncing</span>
                  </div>
                  <div className="bg-black/70 border border-[#4CE0FF]/40 p-4 rounded-xl">
                    <span className="text-xs text-zinc-400 font-mono font-bold block">AI Assistant</span>
                    <span className="text-lg sm:text-xl font-black font-display text-[#4CE0FF]">Ready</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-[#0A0A12]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <span className="text-base font-extrabold text-white font-display">Open Live Dashboard</span>
                  <ExternalLink className="w-5 h-5 text-[#FF5500]" />
                </div>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full gap-6">
              <div>
                <span className="text-xs font-mono font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/40 inline-block mb-3">
                  {featuredProj.category}
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display leading-tight">
                  {featuredProj.title}
                </h3>

                <p className="text-zinc-200 text-base sm:text-lg leading-relaxed mt-4 font-body">
                  {featuredProj.description}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-mono text-zinc-300 uppercase tracking-widest block font-extrabold">
                  Key Capabilities:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-zinc-100 font-semibold">
                  {featuredProj.features?.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                      <span className="truncate">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/15 pt-5">
                <div className="flex flex-wrap gap-2">
                  {featuredProj.tags.map((t) => (
                    <span key={t} className="text-xs sm:text-sm font-mono font-bold px-3.5 py-1.5 rounded-xl bg-white/10 text-white border border-white/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={featuredProj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-sm font-extrabold text-white bg-gradient-to-r from-[#FF5500] to-[#7F5CFF] hover:from-[#E64D00] hover:to-[#6A47EB] rounded-full flex items-center gap-2 shadow-lg shadow-[#FF5500]/30 transition-all hover:scale-[1.03]"
                  >
                    <span>Live Dashboard ↗</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(featuredProj)}
                    className="px-5 py-3 text-sm font-bold text-zinc-200 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
                  >
                    Overview & Details
                  </button>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* EVEN SECONDARY PROJECTS GRID (3x2 Perfect Alignment with Larger Fonts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/15 hover:border-[#7F5CFF] transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_15px_40px_rgba(127,92,255,0.3)] cursor-pointer h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#4CE0FF] font-black uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.date && (
                    <span className="text-xs font-mono text-zinc-300 font-extrabold">
                      {project.date}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-[#4CE0FF] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed mt-3 line-clamp-3 font-medium font-body">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/15">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((t) => (
                    <span key={t} className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white/10 text-white border border-white/20 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-[#FF5500] group-hover:text-[#FF8844] font-extrabold flex items-center gap-1.5">
                    <span>View Details</span>
                    <span>→</span>
                  </span>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-zinc-300 hover:text-white p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl glass-panel-volcanic rounded-3xl p-6 sm:p-8 border border-[#FF5500]/50 shadow-2xl z-10 overflow-hidden my-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-widest">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-display text-white">
                {selectedProject.title}
              </h3>

              <p className="text-base text-zinc-200 leading-relaxed mt-3">
                {selectedProject.description}
              </p>

              {selectedProject.features && (
                <div className="mt-6 pt-4 border-t border-white/15">
                  <h4 className="text-xs sm:text-sm font-mono uppercase text-zinc-300 mb-3 tracking-wider font-extrabold">
                    Key Technical Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-100">
                    {selectedProject.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/10 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-white/15">
                <h4 className="text-xs sm:text-sm font-mono uppercase text-zinc-300 mb-2 tracking-wider font-extrabold">
                  Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-lg bg-[#12121C] text-[#4CE0FF] border border-[#7F5CFF]/40 font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-xs sm:text-sm font-extrabold text-white bg-[#FF5500] hover:bg-[#E64D00] rounded-full flex items-center gap-2 shadow-lg shadow-[#FF5500]/30"
                    >
                      <span>Open Live Demo ↗</span>
                    </a>
                  )}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-xs sm:text-sm font-extrabold text-zinc-200 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub Repo</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs sm:text-sm font-mono text-zinc-400 hover:text-white font-bold"
                >
                  Close Modal
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
