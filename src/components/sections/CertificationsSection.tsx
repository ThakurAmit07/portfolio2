"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, ExternalLink, X, Sparkles, Check, FileCheck, Cloud, Cpu } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  featured: boolean;
  verifyUrl: string;
  verifyLabel: string;
  skills: string[];
  description: string;
  verificationPlatform: string;
  theme: {
    border: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
    iconBg: string;
  };
}

const certs: Certification[] = [
  {
    id: "azure-fundamentals",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "May 20, 2026",
    credentialId: "cb71dfdb-8336-4d1d-aab0-a24949e2ea2d",
    featured: true,
    verifyUrl: "https://www.credly.com/badges/cb71dfdb-8336-4d1d-aab0-a24949e2ea2d",
    verifyLabel: "Verify Badge Details Page on Credly ↗",
    verificationPlatform: "Credly Authenticated Badge",
    description: "Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
    skills: ["Cloud Concepts", "Azure Services", "Azure Workloads", "Security & Privacy", "Azure Pricing & Support"],
    theme: {
      border: "border-[#4CE0FF]/70 hover:border-[#4CE0FF]",
      glow: "shadow-[0_0_60px_rgba(76,224,255,0.35)] hover:shadow-[0_20px_65px_rgba(76,224,255,0.5)]",
      badgeBg: "bg-[#4CE0FF]/25 border-[#4CE0FF]/60",
      badgeText: "text-[#4CE0FF]",
      accent: "text-[#4CE0FF]",
      iconBg: "bg-[#0A0A12] border-[#4CE0FF]/60 text-[#4CE0FF]",
    },
  },
  {
    id: "ai-skills-fest",
    title: "AI Skills Fest 2026",
    issuer: "Microsoft",
    date: "June 19, 2026",
    credentialId: "MS-AISKILLS-2026-AS",
    featured: false,
    verifyUrl: "https://www.credly.com/org/microsoft/badges",
    verifyLabel: "Verify on Credly Portal ↗",
    verificationPlatform: "Credly / Microsoft Official Badge",
    description: "Official Microsoft recognition badge for completing hands-on AI Skills Fest workshops, generative AI model deployment, and cloud AI architecture labs.",
    skills: ["Generative AI Labs", "Azure AI Services", "Prompt Engineering", "Cloud AI Pipelines"],
    theme: {
      border: "border-[#7F5CFF]/60 hover:border-[#7F5CFF]",
      glow: "hover:shadow-[0_15px_45px_rgba(127,92,255,0.35)]",
      badgeBg: "bg-[#7F5CFF]/20 border-[#7F5CFF]/40",
      badgeText: "text-[#B09BFF]",
      accent: "text-[#7F5CFF]",
      iconBg: "bg-[#0A0A12] border-[#7F5CFF]/50 text-[#7F5CFF]",
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
    verifyLabel: "Check Out LinkedIn Certification ↗",
    verificationPlatform: "LinkedIn Verified Certification",
    description: "Comprehensive Web Development Masterclass certification covering full-stack frontend engineering, modern JavaScript ES6+, DOM manipulation, and React.js app architecture.",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "DOM Manipulation"],
    theme: {
      border: "border-[#FF5500]/50 hover:border-[#FF5500]",
      glow: "hover:shadow-[0_15px_45px_rgba(255,85,0,0.35)]",
      badgeBg: "bg-[#FF5500]/20 border-[#FF5500]/40",
      badgeText: "text-[#FF8844]",
      accent: "text-[#FF5500]",
      iconBg: "bg-[#0A0A12] border-[#FF5500]/50 text-[#FF5500]",
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
    verifyLabel: "Check Out LinkedIn Certification ↗",
    verificationPlatform: "LinkedIn Verified Certification",
    description: "Advanced Python Programming, Object-Oriented Software Design, Data Science pipelines, and Pandas numerical data processing certification.",
    skills: ["Python 3", "OOPs Concepts", "Data Science", "Pandas", "Matplotlib"],
    theme: {
      border: "border-emerald-500/50 hover:border-emerald-400",
      glow: "hover:shadow-[0_15px_45px_rgba(16,185,129,0.35)]",
      badgeBg: "bg-emerald-500/20 border-emerald-500/40",
      badgeText: "text-emerald-300",
      accent: "text-emerald-400",
      iconBg: "bg-[#0A0A12] border-emerald-500/50 text-emerald-400",
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
    verifyLabel: "Check Out LinkedIn Certification ↗",
    verificationPlatform: "LinkedIn Verified Certification",
    description: "Industry awareness credential on Artificial Intelligence security threats, data privacy compliance, and cybersecurity defense principles.",
    skills: ["AI Security Principles", "Cyber Threat Mitigation", "Data Privacy"],
    theme: {
      border: "border-[#7F5CFF]/50 hover:border-[#7F5CFF]",
      glow: "hover:shadow-[0_15px_45px_rgba(127,92,255,0.35)]",
      badgeBg: "bg-[#7F5CFF]/20 border-[#7F5CFF]/40",
      badgeText: "text-[#B09BFF]",
      accent: "text-[#7F5CFF]",
      iconBg: "bg-[#0A0A12] border-[#7F5CFF]/50 text-[#7F5CFF]",
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
    verifyLabel: "Check Out LinkedIn Certification ↗",
    verificationPlatform: "LinkedIn Verified Certification",
    description: "Foundational training in Generative Artificial Intelligence, Prompt Engineering strategies, and Large Language Model applications.",
    skills: ["Prompt Engineering", "Large Language Models", "Generative Architectures"],
    theme: {
      border: "border-purple-500/50 hover:border-purple-400",
      glow: "hover:shadow-[0_15px_45px_rgba(168,85,247,0.35)]",
      badgeBg: "bg-purple-500/20 border-purple-500/40",
      badgeText: "text-purple-300",
      accent: "text-purple-400",
      iconBg: "bg-[#0A0A12] border-purple-500/50 text-purple-400",
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
    verifyLabel: "Check Out LinkedIn Certification ↗",
    verificationPlatform: "LinkedIn Verified Certification",
    description: "Hackathon achievement recognition for competitive software engineering, rapid web prototyping, and problem-solving under tight time constraints.",
    skills: ["Hackathon Coding", "Rapid Prototyping", "Problem Solving"],
    theme: {
      border: "border-amber-500/50 hover:border-amber-400",
      glow: "hover:shadow-[0_15px_45px_rgba(245,158,11,0.35)]",
      badgeBg: "bg-amber-500/20 border-amber-500/40",
      badgeText: "text-amber-300",
      accent: "text-amber-400",
      iconBg: "bg-[#0A0A12] border-amber-500/50 text-amber-400",
    },
  },
];

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const azureCert = certs[0];
  const otherCerts = certs.slice(1);

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
            <span className="uppercase tracking-widest">CREDLY AUTHENTICATED & VERIFIED BADGES</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Industry & Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Certifications</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg max-w-xl mt-3 leading-relaxed font-body">
            Microsoft Credly badges, CodeWithHarry masterclasses, TCS iON AI credentials, and hackathon achievements.
          </p>
        </motion.div>

        {/* PROMINENT, BOLD, TAGDA MICROSOFT AZURE FEATURED CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.01 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => setActiveCert(azureCert)}
          className="glass-panel-volcanic rounded-3xl p-8 sm:p-12 border border-[#4CE0FF] relative overflow-hidden shadow-[0_0_70px_rgba(76,224,255,0.35)] hover:shadow-[0_20px_80px_rgba(76,224,255,0.5)] transition-all duration-300 mb-12 cursor-pointer group"
        >
          {/* Ambient Glowing Backlight Overlay */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#4CE0FF]/20 to-[#7F5CFF]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/20">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-wider px-4 py-2 rounded-full bg-[#4CE0FF]/25 text-[#4CE0FF] border border-[#4CE0FF]/70 shadow-md flex items-center gap-2">
                  <Cloud className="w-4.5 h-4.5 text-[#4CE0FF] animate-pulse" />
                  <span>★ OFFICIAL MICROSOFT CREDLY BADGE</span>
                </span>
                <span className="text-xs sm:text-sm font-mono text-emerald-400 font-extrabold flex items-center gap-1.5 bg-black/80 px-3.5 py-1.5 rounded-full border border-emerald-500/40">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Credly Verified</span>
                </span>
                <span className="text-xs sm:text-sm font-mono text-zinc-300 font-extrabold">
                  Issued: 5/20/2026
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight">
                {azureCert.title}
              </h3>

              <p className="text-lg sm:text-xl font-extrabold text-[#4CE0FF] mt-3 font-mono">
                Issuing Organization: Microsoft (Credly Authenticated)
              </p>

              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed mt-4 max-w-3xl font-body">
                {azureCert.description}
              </p>
            </div>

            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#0A0A12] border-2 border-[#4CE0FF] flex items-center justify-center text-[#4CE0FF] shrink-0 shadow-[0_0_35px_rgba(76,224,255,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <Cloud className="w-14 h-14" />
            </div>
          </div>

          <div className="pt-8">
            <span className="text-xs sm:text-sm font-mono text-zinc-300 uppercase tracking-widest block mb-4 font-black">
              Verified Azure Competencies:
            </span>
            <div className="flex flex-wrap gap-3">
              {azureCert.skills.map((s) => (
                <span key={s} className="text-xs sm:text-sm font-mono px-4.5 py-2.5 rounded-2xl bg-[#0A0A12]/90 text-[#4CE0FF] border border-[#4CE0FF]/50 font-black flex items-center gap-2 shadow-md hover:border-[#4CE0FF]">
                  <CheckCircle2 className="w-4 h-4 text-[#4CE0FF]" />
                  <span>{s}</span>
                </span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs sm:text-sm font-mono text-zinc-300 font-bold">
                  Credential ID: <span className="text-white font-mono font-black">{azureCert.credentialId}</span>
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  Expiration: This credential does not expire
                </span>
              </div>

              <span className="text-xs sm:text-sm font-mono font-black text-white bg-gradient-to-r from-[#FF5500] to-[#7F5CFF] px-6 py-3 rounded-full shadow-lg shadow-[#FF5500]/30 flex items-center gap-2 group-hover:scale-105 transition-transform">
                <span>See Badge Details Page on Credly ↗</span>
              </span>
            </div>
          </div>

        </motion.div>

        {/* SECONDARY CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {otherCerts.map((cert, idx) => (
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

                <div className="flex flex-wrap gap-2 mt-5">
                  {cert.skills.map((s) => (
                    <span key={s} className="text-xs font-mono px-3 py-1 rounded-xl bg-white/10 text-white border border-white/15 font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 font-bold">ID: {cert.credentialId.substring(0, 10)}...</span>

                <span className={`text-xs font-mono font-black ${cert.theme.accent} flex items-center gap-1.5 group-hover:scale-105 transition-transform bg-black/60 px-3 py-1.5 rounded-xl border border-white/10`}>
                  <span>LinkedIn Verify</span>
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
              className="relative w-full max-w-3xl glass-panel-volcanic rounded-3xl p-6 sm:p-10 border border-[#4CE0FF]/60 shadow-2xl z-10 overflow-hidden my-8"
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-black text-emerald-400 uppercase tracking-widest block">
                    VERIFIED BADGE DETAILS
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    Issuing Organization: {activeCert.issuer} • Issuing Date: {activeCert.date}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-display text-white">
                {activeCert.title}
              </h3>

              <div className="my-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#12121C] via-[#0A0A12] to-black border border-white/20 shadow-inner relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-[#FF5500]" />
                    <div>
                      <h4 className="text-lg font-black text-white font-display">AUTHENTICATED CREDENTIAL BADGE</h4>
                      <p className="text-xs font-mono text-zinc-400">Issued to: <span className="text-[#4CE0FF] font-bold">Amit Singh</span></p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </span>
                </div>

                <p className="text-sm text-zinc-200 leading-relaxed font-body mb-6">
                  {activeCert.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex flex-wrap justify-between items-center text-xs font-mono text-zinc-400 gap-2">
                  <span>Credential ID: <span className="text-white font-mono font-bold">{activeCert.credentialId}</span></span>
                  <span>Platform: <span className="text-[#4CE0FF] font-bold">{activeCert.verificationPlatform}</span></span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-zinc-300 font-extrabold tracking-wider mb-2.5">
                  Verified Technical Competencies:
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

              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#FF5500] to-[#7F5CFF] hover:from-[#E64D00] hover:to-[#6A47EB] rounded-full flex items-center gap-2 shadow-lg shadow-[#FF5500]/30 transition-all hover:scale-105"
                >
                  <span>{activeCert.verifyLabel}</span>
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
