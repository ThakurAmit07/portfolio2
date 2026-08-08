"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  featured: boolean;
  skills: string[];
}

const certs: Certification[] = [
  {
    id: "azure-fundamentals",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "May 2026",
    featured: true,
    skills: ["Cloud Architecture", "Azure Core Services", "Security & Governance", "Cloud Pricing"],
  },
  {
    id: "tcs-ai-cyber",
    title: "AI and Cybersecurity Awareness",
    issuer: "TCS iON",
    date: "April 2026",
    featured: false,
    skills: ["AI Security Principles", "Cyber Threat Mitigation", "Data Privacy"],
  },
  {
    id: "tcs-gen-ai",
    title: "Generative AI Essentials",
    issuer: "TCS iON",
    date: "May 2026",
    featured: false,
    skills: ["Prompt Engineering", "Large Language Models", "Generative Architectures"],
  },
  {
    id: "protex-hackathon",
    title: "Protex: Hack-2-Win",
    issuer: "Protege",
    date: "April 2026",
    featured: false,
    skills: ["Hackathon Competitive Coding", "Rapid Prototyping", "Problem Solving"],
  },
];

export default function CertificationsSection() {
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
            <span className="uppercase tracking-widest">VERIFIED CREDENTIALS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Industry & Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">Certifications</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg max-w-xl mt-3 leading-relaxed font-body">
            Official cloud architecture, artificial intelligence, cybersecurity, and competitive hackathon credentials.
          </p>
        </motion.div>

        {/* Balanced Grid: Equal Height Flex Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Microsoft Azure Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel-volcanic rounded-3xl p-8 sm:p-10 border border-[#4CE0FF]/50 relative overflow-hidden flex flex-col justify-between group hover:border-[#4CE0FF] transition-all duration-300 shadow-[0_0_50px_rgba(76,224,255,0.2)] hover:shadow-[0_15px_50px_rgba(76,224,255,0.3)] h-full"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#4CE0FF]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-wider px-4 py-2 rounded-full bg-[#4CE0FF]/20 text-[#4CE0FF] border border-[#4CE0FF]/50 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>FEATURED CERTIFICATION</span>
                </span>
                <span className="text-xs sm:text-sm font-mono text-zinc-200 font-extrabold">
                  {certs[0].date}
                </span>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#0A0A12] border border-[#4CE0FF]/50 flex items-center justify-center text-[#4CE0FF] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                <Award className="w-8 h-8" />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display leading-tight">
                {certs[0].title}
              </h3>

              <p className="text-lg font-black text-[#4CE0FF] mt-3 font-mono">
                Issuer: {certs[0].issuer}
              </p>

              <div className="mt-8 pt-6 border-t border-white/15">
                <span className="text-xs sm:text-sm font-mono text-zinc-300 uppercase tracking-widest block mb-4 font-extrabold">
                  Verified Technical Competencies:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {certs[0].skills.map((s) => (
                    <span key={s} className="text-xs sm:text-sm font-mono px-4 py-2 rounded-xl bg-[#0A0A12] text-[#4CE0FF] border border-[#4CE0FF]/40 font-bold flex items-center gap-2 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#4CE0FF]" />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-mono text-zinc-200 font-bold">Official Credential</span>
              <span className="text-xs sm:text-sm font-mono text-[#4CE0FF] bg-[#4CE0FF]/15 px-3.5 py-1.5 rounded-lg border border-[#4CE0FF]/40 font-black flex items-center gap-1.5">
                <span>Verified Certificate</span>
                <span>●</span>
              </span>
            </div>
          </motion.div>

          {/* Secondary Certifications Column */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            {certs.slice(1).map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/15 hover:border-[#7F5CFF] transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_12px_35px_rgba(127,92,255,0.25)] flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm font-mono text-[#7F5CFF] font-black uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-zinc-200 font-bold">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-[#7F5CFF] transition-colors">
                    {cert.title}
                  </h4>

                  <div className="flex flex-wrap gap-2.5 mt-4">
                    {cert.skills.map((s) => (
                      <span key={s} className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-xl bg-white/10 text-white border border-white/20 font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm font-mono text-zinc-300 font-bold">
                  <span>Credential Status</span>
                  <span className="text-emerald-400 font-black flex items-center gap-1">
                    <span>Verified</span>
                    <span>●</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
