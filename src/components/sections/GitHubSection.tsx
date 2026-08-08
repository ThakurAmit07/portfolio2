"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

const repos = [
  {
    name: "sales-dashboard07",
    displayName: "Sales Intelligence Dashboard",
    description: "Interactive Supabase-synced business intelligence dashboard with AI assistant and revenue analytics.",
    language: "TypeScript",
    langColor: "bg-blue-500",
    url: "https://github.com/ThakurAmit07",
  },
  {
    name: "AIML_BOOTCAMP2026",
    displayName: "AIML_BOOTCAMP2026",
    description: "AI & Machine Learning project workspace for model training pipelines, data pre-processing, and algorithms.",
    language: "Python",
    langColor: "bg-yellow-500",
    url: "https://github.com/ThakurAmit07",
  },
  {
    name: "EduLeap",
    displayName: "EduLeap Educational Platform",
    description: "Educational platform repository using Flask REST API, PostgreSQL, and React.js.",
    language: "Python / React",
    langColor: "bg-indigo-500",
    url: "https://github.com/ThakurAmit07",
  },
  {
    name: "Project_07",
    displayName: "Project_07",
    description: "Custom web development repository demonstrating modular frontend components.",
    language: "JavaScript",
    langColor: "bg-amber-400",
    url: "https://github.com/ThakurAmit07",
  },
  {
    name: "Project-2-Expense-Tracker",
    displayName: "Project-2-Expense-Tracker",
    description: "Daily personal finance and expense calculator tool.",
    language: "JavaScript",
    langColor: "bg-amber-400",
    url: "https://github.com/ThakurAmit07",
  },
  {
    name: "Project-1-Todo-List",
    displayName: "Project-1-Todo-List",
    description: "Task management web tool with state persistence and priority filtering.",
    language: "JavaScript",
    langColor: "bg-amber-400",
    url: "https://github.com/ThakurAmit07",
  },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Open Source & Code Activity</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Code, Experiments & <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-3">
            Exploration of software engineering repositories on GitHub (@ThakurAmit07).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {repos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <FolderGit2 className="w-4 h-4 text-indigo-400" />
                    <span>Repository</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-300 transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white font-display group-hover:text-indigo-300 transition-colors">
                  {repo.displayName}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mt-2.5 line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-500">
                  <GitBranch className="w-3 h-3" />
                  <span>main</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/ThakurAmit07"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-bold text-white bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 hover:border-indigo-400/50 rounded-full flex items-center gap-2.5 transition-all shadow-xl hover:scale-[1.02]"
          >
            <GithubIcon className="w-4 h-4 text-indigo-400" />
            <span>Explore GitHub Profile (@ThakurAmit07) ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
