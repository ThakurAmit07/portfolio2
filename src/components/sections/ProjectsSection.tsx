"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ExternalLink, X, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projectsData: Project[] = [
  {
    id: "eduleap",
    name: "EduLeap Platform",
    subtitle: "Interactive Student Learning & Management Portal",
    description: "An educational platform designed to help students access learning materials, track progress, and improve their skills through interactive content.",
    longDescription: "EduLeap provides students with a seamless learning experience, enabling progress tracking, interactive study content, and efficient management of educational resources. Powered by React.js frontend, Flask backend API, and PostgreSQL database.",
    tags: ["React.js", "Python", "Flask", "PostgreSQL", "SQLAlchemy", "Heroku", "RESTful API"],
    features: [
      "Interactive student learning portal with real-time progress tracking",
      "Robust RESTful API architecture built with Python Flask & SQLAlchemy",
      "Scalable relational database management powered by PostgreSQL",
      "Automated deployment on Heroku with Git version control"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "azure-ai-cloud",
    name: "Azure AI Workspace",
    subtitle: "Cloud Infrastructure & Generative AI Dashboard",
    description: "A cloud-native management portal demonstrating Microsoft Azure Cloud services and Generative AI integration.",
    longDescription: "Built with React, Python, and Microsoft Azure Cloud SDKs. Integrates Generative AI models and cloud monitoring analytics into an intuitive dark-themed interface.",
    tags: ["Microsoft Azure", "Python", "Generative AI", "React.js", "REST API"],
    features: [
      "Microsoft Azure Fundamentals cloud architecture implementation",
      "Generative AI model orchestration with TCS iON standards",
      "Secure API key management and role-based authentication",
      "Real-time resource health and latency monitoring"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "data-eng-hub",
    name: "Data Engine Studio",
    subtitle: "Database Management & SQL Analytics Console",
    description: "High-efficiency database query optimizer and data engineering telemetry interface.",
    longDescription: "Designed for data engineering workflows, providing SQL schema visualization, automated database backups, and query execution profiling.",
    tags: ["PostgreSQL", "Python", "SQLAlchemy", "Data Engineering", "Git"],
    features: [
      "Interactive SQL schema visualizer and table query builder",
      "Optimized query execution profiling with PostgreSQL indexing",
      "Automated database migrations using SQLAlchemy Alembic",
      "Clean dark UI with live telemetry indicators"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
  },
];

function TiltProjectCard({ 
  project, 
  onSelect 
}: { 
  project: Project; 
  onSelect: (p: Project) => void 
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = (y - centerY) / 15;
    const rotY = (centerX - x) / 15;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="relative rounded-3xl bg-[#12121C]/80 border border-[#7F5CFF]/25 backdrop-blur-xl overflow-hidden p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ease-out hover:border-[#7F5CFF] hover:shadow-[0_15px_40px_rgba(127,92,255,0.25)] group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Specular Glare Highlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(127, 92, 255, 0.15) 0%, transparent 60%)`,
        }}
      />

      <div className="space-y-4 relative z-10" style={{ transform: "translateZ(30px)" }}>
        {/* Top Tag & Links */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#4CE0FF] bg-[#4CE0FF]/10 border border-[#4CE0FF]/30 px-3 py-1 rounded-full">
            {project.subtitle}
          </span>
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#0A0A12] border border-[#7F5CFF]/30 text-[#9A9AB0] hover:text-[#F5F5FA] hover:border-[#7F5CFF] transition-all"
              aria-label="GitHub Repo"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#7F5CFF]/20 border border-[#7F5CFF]/50 text-[#7F5CFF] hover:text-[#F5F5FA] hover:bg-[#7F5CFF] transition-all"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Project Name */}
        <h3 className="text-2xl font-bold font-display text-[#F5F5FA] group-hover:text-[#7F5CFF] transition-colors">
          {project.name}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#9A9AB0] leading-relaxed font-body">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0A0A12]/80 border border-[#7F5CFF]/20 text-[#9A9AB0]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Details Action */}
      <div 
        className="mt-6 pt-4 border-t border-[#7F5CFF]/15 flex items-center justify-between text-xs text-[#7F5CFF] font-medium group-hover:text-[#4CE0FF] transition-colors relative z-10"
        style={{ transform: "translateZ(20px)" }}
      >
        <span>View Case Study & Breakdown</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
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
            <Sparkles className="w-3.5 h-3.5 text-[#7F5CFF]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#9A9AB0]">
              03. FEATURED PROJECTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#F5F5FA]">
            Crafted with Precision
          </h2>
          <p className="text-[#9A9AB0] text-base sm:text-lg">
            Hover over any project card to experience 3D perspective shifts, or click to inspect full technical case studies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
            >
              <TiltProjectCard project={proj} onSelect={setSelectedProject} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-[#0A0A12]/80 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#12121C] border border-[#7F5CFF]/40 p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(127,92,255,0.3)] overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#0A0A12] border border-[#7F5CFF]/30 text-[#9A9AB0] hover:text-[#F5F5FA] hover:border-[#7F5CFF] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#4CE0FF] bg-[#4CE0FF]/10 px-3 py-1 rounded-full border border-[#4CE0FF]/30">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-3xl font-bold font-display text-[#F5F5FA]">
                  {selectedProject.name}
                </h3>
              </div>

              <p className="text-[#9A9AB0] text-base leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Key Architectural Features */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-[#F5F5FA] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#7F5CFF]" />
                  <span>Key Architectural Innovations</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-[#9A9AB0] bg-[#0A0A12]/60 p-3 rounded-xl border border-[#7F5CFF]/15">
                      <CheckCircle2 className="w-4 h-4 text-[#4CE0FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase text-[#9A9AB0]">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-[#7F5CFF]/15 border border-[#7F5CFF]/30 text-[#F5F5FA]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#7F5CFF]/20">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#7F5CFF] text-[#F5F5FA] text-sm font-medium hover:bg-[#6b47ff] shadow-[0_0_20px_rgba(127,92,255,0.5)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A12] border border-[#7F5CFF]/40 text-[#F5F5FA] text-sm font-medium hover:border-[#7F5CFF] transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
