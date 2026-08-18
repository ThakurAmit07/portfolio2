"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Zap, Send, CheckCircle2, Copy, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const directEmail = "amitsinghthakur0007@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill in all required fields (Full Name, Email, and Message).");
      return;
    }

    setIsSending(true);

    // Launch confetti celebratory particles
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#FF5500", "#7F5CFF", "#4CE0FF", "#ffffff"],
    });

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);

      // Construct Mailto URI with filled details
      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${fullName}`);
      const mailtoBody = encodeURIComponent(
        `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`
      );
      
      // Trigger user's mail client with pre-filled content
      window.location.href = `mailto:${directEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

      setTimeout(() => {
        setIsSent(false);
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }, 4000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A12]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-2xl bg-[#F8F9FE] text-[#0A0A12] rounded-3xl p-6 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.6)] z-10 my-auto border border-white/40"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#0A0A12]/10 hover:bg-[#0A0A12]/20 text-[#0A0A12] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header: LET'S GET IN TOUCH */}
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#0A0A12] uppercase leading-none">
                LET&apos;S GET<br />IN TOUCH
              </h2>
              <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-500 shrink-0">
                <Zap className="w-6 h-6 fill-amber-400 text-amber-500" />
              </div>
            </div>

            {/* Email Pill Badge */}
            <div className="mb-6 inline-flex">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121226] text-white text-xs sm:text-sm font-medium hover:bg-[#1E1E3A] transition-all shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#4CE0FF]" />
                <span>{directEmail}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-400 ml-1 hover:text-white" />
                )}
              </button>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-100 border border-red-300 text-red-700 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name*"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-zinc-200 text-[#0A0A12] placeholder-zinc-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7F5CFF] transition-all shadow-sm"
                  required
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-zinc-200 text-[#0A0A12] placeholder-zinc-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7F5CFF] transition-all shadow-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-zinc-200 text-[#0A0A12] placeholder-zinc-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7F5CFF] transition-all shadow-sm"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={4}
                  placeholder="Message*"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-zinc-200 text-[#0A0A12] placeholder-zinc-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7F5CFF] transition-all shadow-sm resize-none"
                  required
                />
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#1E1035] via-[#7F5CFF] to-[#1E1035] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-98 transition-all cursor-pointer disabled:opacity-75"
                >
                  <span className="text-base">🍩</span>
                  {isSending ? (
                    <span>SENDING... ⌛</span>
                  ) : isSent ? (
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-4 h-4" /> SENT! 🎉
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      SEND <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
