"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Briefcase } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handleDownload = () => {
    const resumeText = `
AMIT SINGH
Software Developer | AI & ML Specialist | Full-Stack Engineer
Email: amit.singh_cs.aiml25@gla.ac.in
LinkedIn: https://www.linkedin.com/in/amit-singh-435b46380
GitHub: https://github.com/ThakurAmit07

============================================================
EDUCATION
============================================================
1. GLA University, Mathura, UP, India
   B.Tech — Computer Science & Engineering (AI & ML) | 2025 — Present
   - 1st Semester SGPA: 8.25
   - 2nd Semester SGPA: 9.00
   - Cumulative Overall SGPA: 8.65

2. Central Board of Secondary Education (CBSE)
   Class XII — Senior Secondary (Intermediate) | 2025
   - Score: 73.20%

3. Central Board of Secondary Education (CBSE)
   Class X — High School Examination | 2023
   - Score: 84.80%

============================================================
FEATURED PROJECTS
============================================================
1. Sales Intelligence Dashboard (Live: https://sales-dashboard07.vercel.app)
   - Interactive business intelligence dashboard with Supabase live synchronization, revenue analytics, customer metrics, and integrated AI assistant.
   - Built with React.js, TypeScript, Tailwind CSS, Recharts, and Supabase.

2. EduLeap Educational Platform (Mar 2026 – Apr 2026)
   - Educational web platform helping students access learning materials and track progress.
   - Built with React.js, Python, Flask, RESTful API, PostgreSQL, SQLAlchemy, Heroku.

3. AIML_BOOTCAMP2026
   - Machine Learning repository featuring model training pipelines and exploratory data analysis.

============================================================
TECHNICAL SKILLS
============================================================
- Languages: C, Python, JavaScript
- Frontend: HTML5, CSS3, JavaScript, React.js
- Backend: Python, Flask, REST APIs
- Databases: PostgreSQL, SQL, SQLAlchemy
- AI/ML: Introduction to AI, Generative AI
- Cloud & Tools: Microsoft Azure Fundamentals, Git, GitHub

============================================================
CERTIFICATIONS
============================================================
- Microsoft Certified: Azure Fundamentals (May 2026)
- AI and Cybersecurity Awareness (TCS iON, April 2026)
- Generative AI Essentials (TCS iON, May 2026)
- Protex: Hack-2-Win (Protege, April 2026)
`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Amit_Singh_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl glass-panel-featured rounded-3xl p-6 sm:p-8 border border-[#7F5CFF]/40 shadow-2xl z-10 overflow-hidden my-8 max-h-[85vh] flex flex-col"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7F5CFF]/20 border border-[#7F5CFF]/30 flex items-center justify-center text-[#7F5CFF]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Amit Singh — Curriculum Vitae
                  </h3>
                  <p className="text-xs text-[#4CE0FF] font-mono">
                    Software Developer • AI & ML
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#FF5500] to-[#7F5CFF] hover:from-[#E64D00] hover:to-[#6A47EB] rounded-full flex items-center gap-1.5 shadow-lg transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto pt-6 space-y-6 pr-2 text-xs text-zinc-300">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <h4 className="text-sm font-bold text-white font-display mb-1">
                  Professional Summary
                </h4>
                <p className="leading-relaxed text-zinc-300">
                  Software Developer and AI / ML Specialist pursuing B.Tech in CSE (AI & ML) at GLA University. Demonstrates strong foundational expertise in full-stack web engineering, Python backend microservices, data analytics, and cloud fundamentals.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#7F5CFF] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Qualifications</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-white text-sm">GLA University, Mathura</h5>
                      <p className="text-zinc-400 text-xs mt-0.5">B.Tech — CSE (AI & ML) | 2025 – Present</p>
                    </div>
                    <div className="text-right font-mono">
                      <span className="text-emerald-400 font-bold text-sm">8.65 Overall SGPA</span>
                      <span className="block text-[10px] text-zinc-500">1st: 8.25 | 2nd: 9.00</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                    <div>
                      <h5 className="font-bold text-white">CBSE Class XII (Intermediate)</h5>
                      <p className="text-zinc-400 text-xs">2025</p>
                    </div>
                    <span className="font-mono text-zinc-200 font-bold">73.20%</span>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                    <div>
                      <h5 className="font-bold text-white">CBSE Class X (High School)</h5>
                      <p className="text-zinc-400 text-xs">2023</p>
                    </div>
                    <span className="font-mono text-zinc-200 font-bold">84.80%</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#7F5CFF] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <Briefcase className="w-4 h-4" />
                  <span>Featured Projects</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <h5 className="font-bold text-white text-sm">Sales Intelligence Dashboard</h5>
                      <span className="text-[10px] font-mono text-[#FF5500] bg-[#FF5500]/10 px-2 py-0.5 rounded border border-[#FF5500]/30">Live Production</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Built interactive dashboard with Supabase synchronization, revenue tracking, customer metrics, and AI assistant.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <h5 className="font-bold text-white text-sm">EduLeap Educational Platform</h5>
                      <span className="text-[10px] font-mono text-zinc-400">Mar 2026 – Apr 2026</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Educational platform using React.js, Python Flask, PostgreSQL, and SQLAlchemy.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#7F5CFF] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <Award className="w-4 h-4" />
                  <span>Certifications & Achievements</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <li className="flex items-center gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7F5CFF]" />
                    <span>Microsoft Certified: Azure Fundamentals (May 2026)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7F5CFF]" />
                    <span>TCS iON Generative AI Essentials (May 2026)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7F5CFF]" />
                    <span>TCS iON AI & Cybersecurity Awareness (Apr 2026)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7F5CFF]" />
                    <span>Protex: Hack-2-Win (Apr 2026)</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between shrink-0">
              <span className="text-[11px] font-mono text-zinc-500">
                Official Document — Amit Singh
              </span>

              <button
                onClick={handleDownload}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#7F5CFF] hover:bg-[#6A47EB] rounded-full flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save to Disk</span>
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
