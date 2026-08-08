"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, FastForward } from "lucide-react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18 + 12);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinished(true);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="fixed inset-0 z-[10000] bg-[#0A0A12] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Background Volcanic Glow */}
          <div className="absolute w-[450px] h-[450px] bg-radial from-[#FF5500]/25 via-[#7F5CFF]/15 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse" />

          {/* Core Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Animated Logo / Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-16 h-16 rounded-2xl bg-[#12121C] border border-[#FF5500]/50 flex items-center justify-center shadow-[0_0_35px_rgba(255,85,0,0.5)]"
            >
              <Flame className="w-8 h-8 text-[#FF5500] animate-bounce" />
            </motion.div>

            {/* Name / Title Reveal */}
            <div className="space-y-1">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#F5F5FA]"
              >
                AMIT SINGH
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xs uppercase tracking-[0.35em] text-[#9A9AB0] font-mono"
              >
                INITIALIZING VOLCANIC SPACE SYSTEM...
              </motion.p>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="w-64 max-w-xs space-y-2">
              <div className="w-full h-1.5 bg-[#12121C] border border-[#FF5500]/30 rounded-full overflow-hidden p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF5500] via-[#7F5CFF] to-[#4CE0FF] rounded-full shadow-[0_0_12px_#FF5500]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#9A9AB0] font-mono">
                <span>SYSTEM INIT</span>
                <span className="text-[#FF5500] font-bold">{Math.min(progress, 100)}%</span>
              </div>
            </div>

            {/* Skip Button */}
            <button
              onClick={handleSkip}
              className="group flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#12121C]/80 border border-[#FF5500]/30 text-xs text-[#9A9AB0] hover:text-[#F5F5FA] hover:border-[#FF5500] transition-all duration-200 cursor-pointer"
            >
              <span>SKIP INTRO</span>
              <FastForward className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
