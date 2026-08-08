"use client";

import { motion } from "framer-motion";
import { Sparkles, Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

interface TimelineItem {
  type: "experience" | "education";
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  badgeColor: string;
}

const certificationsData: Certification[] = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "May 2026",
    badgeColor: "#0078D4",
  },
  {
    title: "AI and Cybersecurity Awareness",
    issuer: "TCS iON",
    date: "Apr 2026",
    badgeColor: "#FF5500",
  },
  {
    title: "Generative AI Essentials",
    issuer: "TCS iON",
    date: "May 2026",
    badgeColor: "#7F5CFF",
  },
  {
    title: "Protex: Hack-2-Win",
    issuer: "Protege",
    date: "Apr 2026",
    badgeColor: "#4CE0FF",
  },
];

const timelineData: TimelineItem[] = [
  {
    type: "experience",
    role: "Full-Stack Project Developer",
    organization: "EduLeap Educational Platform",
    period: "Mar 2026 — Apr 2026",
    location: "Auraiya, India",
    description: "Designed & engineered EduLeap, an educational web platform enabling students to access materials, track progress, and practice interactively.",
    highlights: [
      "Built responsive React.js UI backed by Flask RESTful APIs and PostgreSQL database",
      "Utilized SQLAlchemy ORM for efficient relational data modeling & resource management",
      "Deployed application to Heroku with automated Git workflow"
    ],
  },
  {
    type: "education",
    role: "Graduation (CS & AIML)",
    organization: "GLA University",
    period: "Pursuing",
    location: "Mathura / Auraiya, UP, India",
    description: "Pursuing Bachelor's degree in Computer Science with specialization in Artificial Intelligence & Machine Learning.",
    highlights: [
      "Core focus on Python Programming, Data Engineering, C-Language & DB Management",
      "Institutional Email: amit.singh_cs.aiml25@gla.ac.in",
      "Earned Microsoft Azure Fundamentals Certification during coursework"
    ],
  },
  {
    type: "education",
    role: "Intermediate (Class XII)",
    organization: "CBSE Board",
    period: "2025",
    location: "Auraiya, Uttar Pradesh",
    description: "Completed Senior Secondary Education under Central Board of Secondary Education (CBSE).",
    highlights: [
      "Achieved 73.20% aggregate score",
      "Built strong analytical, physical science, and mathematical problem-solving skills"
    ],
  },
  {
    type: "education",
    role: "High School (Class X)",
    organization: "CBSE Board",
    period: "2023",
    location: "Auraiya, Uttar Pradesh",
    description: "Completed Secondary School Examination under CBSE Board with distinction.",
    highlights: [
      "Achieved 84.80% aggregate score",
      "Excellence in Mathematics, Science, and Information Technology"
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
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
              04. EDUCATION & CERTIFICATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#F5F5FA]">
            Academic Journey & Experience
          </h2>
          <p className="text-[#9A9AB0] text-base sm:text-lg">
            A timeline of my education at GLA University, high school achievements, hands-on projects, and industry certifications.
          </p>
        </motion.div>

        {/* Certifications Highlights Row */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-bold font-display text-[#F5F5FA] mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF5500]" />
            <span>Official Industry Certifications</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificationsData.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-4 rounded-2xl bg-[#12121C]/90 border border-[#7F5CFF]/20 hover:border-[#FF5500]/60 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#0A0A12] text-[#4CE0FF] border border-[#4CE0FF]/30">
                    {cert.issuer}
                  </span>
                  <span className="text-[#9A9AB0]">{cert.date}</span>
                </div>
                <h4 className="text-sm font-bold text-[#F5F5FA] group-hover:text-[#FF5500] transition-colors leading-snug">
                  {cert.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
          {/* Central Glowing Vertical Axis Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7F5CFF] via-[#4CE0FF] to-transparent -translate-x-1/2 shadow-[0_0_15px_#7F5CFF]" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-[#0A0A12] border-2 border-[#7F5CFF] flex items-center justify-center shadow-[0_0_20px_#7F5CFF] group">
                    {item.type === "experience" ? (
                      <Briefcase className="w-4 h-4 text-[#7F5CFF]" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-[#4CE0FF]" />
                    )}
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${isEven ? "sm:pr-4" : "sm:pl-4"}`}>
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#12121C]/80 border border-[#7F5CFF]/20 backdrop-blur-xl hover:border-[#7F5CFF]/60 hover:shadow-[0_10px_35px_rgba(127,92,255,0.2)] transition-all duration-300 space-y-4">
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#7F5CFF]/15 pb-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#4CE0FF]">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#9A9AB0]">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <div>
                        <h3 className="text-xl font-bold font-display text-[#F5F5FA]">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-[#7F5CFF] mt-0.5">
                          {item.organization}
                        </p>
                      </div>

                      <p className="text-sm text-[#9A9AB0] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Highlights Bullet points */}
                      <ul className="space-y-2 pt-2 border-t border-[#7F5CFF]/10 text-xs text-[#9A9AB0]">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7F5CFF] shrink-0 mt-1.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
