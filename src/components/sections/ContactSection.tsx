"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Copy, Check, Send, ArrowUpRight, Flame } from "lucide-react";
import confetti from "canvas-confetti";
import { GithubIcon, LinkedInIcon, XIcon } from "../ui/SocialIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "amit.singh_cs.aiml25@gla.ac.in";
  const personalEmail = "amitsinghthakur0007@gmail.com";
  const phone = "+91-9457775243";

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const shootingStarCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Trigger Shooting Star particle effect on scroll in
  useEffect(() => {
    if (!isInView || !shootingStarCanvasRef.current) return;

    const canvas = shootingStarCanvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 400;

    let animId: number;
    let progress = 0;

    const startX = -100;
    const startY = 50;
    const endX = canvas.width + 100;
    const endY = 350;

    const animateStar = () => {
      progress += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (progress <= 1) {
        const curX = startX + (endX - startX) * progress;
        const curY = startY + (endY - startY) * progress;

        const grad = ctx.createLinearGradient(curX - 200, curY - 100, curX, curY);
        grad.addColorStop(0, "rgba(255, 85, 0, 0)");
        grad.addColorStop(0.6, "rgba(127, 92, 255, 0.5)");
        grad.addColorStop(1, "rgba(255, 85, 0, 1)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(curX - 200, curY - 100);
        ctx.lineTo(curX, curY);
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#FF5500";
        ctx.beginPath();
        ctx.arc(curX, curY, 4.5, 0, Math.PI * 2);
        ctx.fill();

        animId = requestAnimationFrame(animateStar);
      }
    };

    animateStar();

    return () => cancelAnimationFrame(animId);
  }, [isInView]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#FF5500", "#7F5CFF", "#4CE0FF", "#ffffff"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 relative overflow-hidden z-10">
      {/* Shooting Star Canvas */}
      <canvas
        ref={shootingStarCanvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#12121C]/90 border border-[#FF5500]/30 backdrop-blur-2xl p-8 sm:p-14 text-center space-y-8 shadow-[0_0_60px_rgba(255,85,0,0.15)] max-w-4xl mx-auto"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A12] border border-[#FF5500]/40">
            <Flame className="w-4 h-4 text-[#FF5500]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5F5FA] font-bold">
              GET IN TOUCH WITH AMIT
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-[#F5F5FA] tracking-tight">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF]">
                Extraordinary
              </span>
            </h2>
            <p className="text-[#9A9AB0] text-sm sm:text-base max-w-xl mx-auto font-body">
              Looking for a dedicated software developer, project collaborator, or engineering role? Reach out to me directly!
            </p>
          </div>

          {/* Glowing CTA Button & Contact Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${personalEmail}`}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5500] to-[#7F5CFF] text-[#F5F5FA] font-extrabold text-base shadow-[0_0_35px_rgba(255,85,0,0.6)] hover:shadow-[0_0_45px_rgba(255,85,0,0.9)] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Send Direct Email</span>
            </a>

            {/* Email Copy Widget */}
            <button
              onClick={() => handleCopy(personalEmail)}
              className="flex items-center gap-2.5 px-6 py-4 rounded-full bg-[#0A0A12] border border-[#7F5CFF]/40 text-[#F5F5FA] text-xs sm:text-sm font-mono hover:border-[#FF5500] hover:bg-[#FF5500]/10 transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#FF5500]" />
              <span>{personalEmail}</span>
              {copied ? (
                <Check className="w-4 h-4 text-[#4CE0FF]" />
              ) : (
                <Copy className="w-4 h-4 text-[#9A9AB0]" />
              )}
            </button>
          </div>

          {/* Direct Phone & Address Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-2 text-xs font-mono text-[#9A9AB0]">
            <div className="p-3.5 rounded-2xl bg-[#0A0A12]/80 border border-[#7F5CFF]/20 flex items-center justify-center gap-2 hover:border-[#FF5500]/40 transition-colors">
              <span className="text-[#FF5500] font-bold">Phone:</span>
              <a href={`tel:${phone}`} className="hover:text-[#F5F5FA] transition-colors">{phone}</a>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0A0A12]/80 border border-[#7F5CFF]/20 flex items-center justify-center gap-2 hover:border-[#4CE0FF]/40 transition-colors">
              <span className="text-[#4CE0FF] font-bold">College Email:</span>
              <a href={`mailto:${email}`} className="hover:text-[#F5F5FA] transition-colors">{email}</a>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="pt-6 border-t border-[#7F5CFF]/15 flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://github.com/ThakurAmit07"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[#9A9AB0] hover:text-[#F5F5FA] transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#7F5CFF]" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-singh-435b46380"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[#F5F5FA] font-medium hover:text-[#4CE0FF] transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-[#4CE0FF]" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#4CE0FF]" />
            </a>
            <a
              href="https://x.com/Thakur_Amit07"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[#9A9AB0] hover:text-[#FF5500] transition-colors"
            >
              <XIcon className="w-4 h-4 text-[#FF5500]" />
              <span>X (Twitter) Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5500]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
