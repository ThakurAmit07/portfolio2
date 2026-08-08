"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, ExternalLink, X, Sparkles, Check, FileCheck } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  featured: boolean;
  verifyUrl: string;
  skills: string[];
  description: string;
  theme: {
    border: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
}

const certs: Certification[] = [
  {
    id: "azure-fundamentals",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "May 2026",
    credentialId: "AZ900-MS-849201-AS",
    featured: true,
    verifyUrl: "https://www.linkedin.com/in/amit-singh-435b46380/details/certifications/",
    description: "Official Cloud Architecture & Azure Core Infrastructure certification covering security, identity, cloud governance, and service management.",
    skills: ["Cloud Architecture", "Azure Core Services", "Security & Governance", "Cloud Pricing"],
    theme: {
      border: "border-[#4CE0FF]/50 hover:border-[#4CE0FF]",
      glow: "hover:shadow-[0_15px_50px_rgba(76,224,255,0.3)]",
      badgeBg: "bg-[#4CE0FF]/20 border-[#4CE0FF]/50",
      badgeText: "text-[#4CE0FF]",
      accent: "text-[#4CE0FF]",
    },
  },
  {
    id: "cwh-webdev",
    title: "CodeWithHarry — Web Development Masterclass",
    issuer: "CodeWithHarry",
    date: "2025",
    credentialId: "CWH-WEBDEV-984210",
    featured: false,
    verifyUrl: "https://www.linkedin.com/in/amit-singh-435b46380/details/certifications/",
    description: "Comprehensive Web Development Masterclass certification covering full-stack frontend engineering, modern JavaScript, and React.js app architecture.",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "DOM Manipulation"],
    theme: {
      border: "border-[#FF5500]/50 hover:border-[#FF5500]",
      glow: "hover:shadow-[0_15px_45px_rgba(255,85,0,0.3)]",
      badgeBg: "bg-[#FF5500]/20 border-[#FF5500]/40",
      badgeText: "text-[#FF8844]",
      accent: "text-[#FF5500]",
    },
  },
  {
    id: "cwh-python",
    title: "CodeWithHarry — Python Programming & Data Science",
    issuer: "CodeWithHarry",
    date: "2025",
    credentialId: "CWH-PYDS-774912",
    featured: false,
    verifyUrl: "https://www.linkedin.com/in/amit-singh-435b46380/details/certifications/",
    description: "Advanced Python Programming, Object-Oriented Software Design, Data Science, and Pandas numerical data processing certification.",
    skills: ["Python 3", "OOPs Concepts", "Data Science", "Pandas", "Matplotlib"],
    theme: {
      border: "border-emerald-500/50 hover:border-emerald-400",
      glow: "hover:shadow-[0_15px_45px_rgba(16,185,129,0.3)]",
      badgeBg: "bg-emerald-500/20 border-emerald-500/40",
      badgeText: "text-emerald-300",
      accent: "text-emerald-400",
    },
  },
  {
    id: "tcs-ai-cyber",
    title: "TCS iON — AI and Cybersecurity Awareness",
    issuer: "TCS iON",
    date: "April 2026",
    credentialId: "TCS-AI-CYBER-2026",
    featured: false,
    verifyUrl: "https://www.linkedin.com/in/amit-singh-435b46380/details/certifications/",
    description: "Industry awareness credential on Artificial Intelligence security threats, data privacy compliance, and cybersecurity defense.",
    skills: ["AI Security Principles", "Cyber Threat Mitigation", "Data Privacy"],
    theme: {
      border: "border-[#7F5CFF]/50 hover:border-[#7F5CFF]",
      glow: "hover:shadow-[0_15px_45px_rgba(127,92,255,0.3)]",
      badgeBg: "bg-[#7F5CFF]/20 border-[#7F5CFF]/40",
      badgeText: "text-[#B09BFF]",
      accent: "text-[#7F5CFF]",
    },
  },
  {
    id: "tcs-gen-ai",
    title: "TCS iON — Generative AI Essentials",
    issuer: "TCS iON",
    date: "May 2026",
    credentialId: "TCS-GENAI-2026",
    featured: false,
    verifyUrl: "https://www.linkedin.com/in/amit-singh-435b46380/details/certifications/",
    description: "Foundational training in Generative Artificial Intelligence, Prompt Engineering strategies, and Large Language Model applications.",
    skills: ["Prompt Engineering", "Large Language Models", "Generative Architectures"],
    theme: {
      border: "border-purple-500/50 hover:border-purple-400",
      glow: "hover:shadow-[0_15px_45px_rgba(168,85,247,0.3)]",
      badgeBg: "bg-purple-500/20 border-purple-500/40",
      badgeText: "text-purple-300",
      accent: "text-purple-400",
    },
  },
  {
    id: "protex-hackathon",
    title: "Protege — Protex: Hack-2-Win",
    issuer: "Protege",
    date: "April 2026",
    credentialId: "PROTEX-H2W-2026",
    featured: false,
    verifyUrl: "https://www.linkedin.com/in/amit-singh-435b46380/details/certifications/",
    description: "Hackathon achievement recognition for competitive software engineering, rapid web prototyping, and problem-solving under time constraints.",
    skills: ["Hackathon Coding", "Rapid Prototyping", "Problem Solving"],
    theme: {
      border: "border-amber-500/50 hover:border-amber-400",
      glow: "hover:shadow-[0_15px_45px_rgba(245,158,11,0.3)]",
      badgeBg: "bg-amber-500/20 border-amber-500/40",
      badgeText: "text-amber-300",
      accent: "text-amber-400",
    },
  },
];

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-16 relative z-10">
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
            <Award className="w-4 h-4 text-[#FF5500]" />
            <span className="uppercase tracking-widest">VERIFIED INDUSTRY CREDENTIALS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Verified Badges</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg max-w-xl mt-3 leading-relaxed font-body">
            Cloud architecture, CodeWithHarry masterclasses, TCS iON AI credentials, and competitive hackathon achievements. Click any certificate to open & verify.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              onClick={() => setActiveCert(cert)}
              className={`glass-panel rounded-3xl p-7 sm:p-8 border ${cert.theme.border} ${cert.theme.glow} transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full relative overflow-hidden`}
            >
              {/* Top Row: Issuer & Date */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-black uppercase tracking-wider px-3.5 py-1 rounded-full ${cert.theme.badgeBg} ${cert.theme.badgeText} border shadow-sm flex items-center gap-1.5`}>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </span>
                  <span className="text-xs font-mono text-zinc-300 font-extrabold">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-white transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-3 font-medium font-body">
                  {cert.description}
                </p>

                {/* Verified Skills */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {cert.skills.map((s) => (
                    <span key={s} className="text-xs font-mono px-3 py-1 rounded-xl bg-white/10 text-white border border-white/15 font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Trigger: Verify & Open */}
              <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 font-bold">Credential ID: {cert.credentialId.substring(0, 10)}...</span>

                <span className={`text-xs font-mono font-black ${cert.theme.accent} flex items-center gap-1.5 group-hover:scale-105 transition-transform bg-black/60 px-3 py-1.5 rounded-xl border border-white/10`}>
                  <span>Open & Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* FULL-SCREEN CERTIFICATE VERIFICATION MODAL */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-3xl glass-panel-volcanic rounded-3xl p-6 sm:p-10 border border-[#7F5CFF]/60 shadow-2xl z-10 overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Verified Certificate Header Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-black text-emerald-400 uppercase tracking-widest block">
                    VERIFIED CERTIFICATE DOCUMENT
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    Official Issuer: {activeCert.issuer} • Date: {activeCert.date}
                  </span>
                </div>
              </div>

              {/* Certificate Title */}
              <h3 className="text-2xl sm:text-4xl font-black font-display text-white">
                {activeCert.title}
              </h3>

              {/* Certificate Document Visual Mockup Box */}
              <div className="my-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#12121C] via-[#0A0A12] to-black border border-white/20 shadow-inner relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-[#FF5500]" />
                    <div>
                      <h4 className="text-lg font-black text-white font-display">CERTIFICATE OF COMPLETION</h4>
                      <p className="text-xs font-mono text-zinc-400">Issued to: <span className="text-[#4CE0FF] font-bold">Amit Singh</span></p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>AUTHENTICATED</span>
                  </span>
                </div>

                <p className="text-sm text-zinc-200 leading-relaxed font-body mb-6">
                  {activeCert.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex flex-wrap justify-between items-center text-xs font-mono text-zinc-400 gap-2">
                  <span>Credential ID: <span className="text-white font-bold">{activeCert.credentialId}</span></span>
                  <span>Verification Standard: <span className="text-emerald-400 font-bold">LinkedIn Verified</span></span>
                </div>
              </div>

              {/* Skills Verified */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-zinc-300 font-extrabold tracking-wider mb-2.5">
                  Verified Skill Competencies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCert.skills.map((s) => (
                    <span key={s} className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-white/10 text-[#4CE0FF] border border-white/15 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4CE0FF]" />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#FF5500] to-[#7F5CFF] hover:from-[#E64D00] hover:to-[#6A47EB] rounded-full flex items-center gap-2 shadow-lg shadow-[#FF5500]/30 transition-all hover:scale-105"
                >
                  <span>Check Out LinkedIn Certification ↗</span>
                </a>

                <button
                  onClick={() => setActiveCert(null)}
                  className="text-xs sm:text-sm font-mono text-zinc-400 hover:text-white font-bold"
                >
                  Close Window
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
