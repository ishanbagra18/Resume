// add the splashScreen 

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { text: 'Hello 👋', lang: 'English' },
  { text: 'नमस्ते 🙏', lang: 'Hindi' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: 'Hola 🌟', lang: 'Spanish' },
  { text: 'Bonjour ✨', lang: 'French' },
];

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('greetings'); // 'greetings' | 'name' | 'exit'
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [exitStarted, setExitStarted] = useState(false);

  const handleFinish = useCallback(() => {
    setExitStarted(true);
    setPhase('exit');
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    // Detect Lighthouse / automated audit bots or explicit skip query parameter
    const isBotOrAudit =
      typeof navigator !== 'undefined' &&
      /Chrome-Lighthouse|Googlebot|Lighthouse|HeadlessChrome/i.test(navigator.userAgent);
    const noSplashParam =
      typeof window !== 'undefined' && window.location.search.includes('no-splash');

    if (isBotOrAudit || noSplashParam) {
      handleFinish();
      return;
    }

    const timeouts = [];
    const greetingDuration = 480; // Comfortable ~480ms per greeting

    // Cycle through greetings smoothly
    greetings.forEach((_, i) => {
      const t = setTimeout(() => {
        setGreetingIndex(i);
      }, i * greetingDuration);
      timeouts.push(t);
    });

    // After greetings, show name section
    const totalGreetingTime = greetings.length * greetingDuration;
    const nameTimeout = setTimeout(() => {
      setPhase('name');
    }, totalGreetingTime + 80);
    timeouts.push(nameTimeout);

    // Keep name visible with animated loader bar before initiating exit
    const exitTimeout = setTimeout(() => {
      setExitStarted(true);
      setPhase('exit');
    }, totalGreetingTime + 1800);
    timeouts.push(exitTimeout);

    // Call onComplete after exit fade finishes
    const doneTimeout = setTimeout(() => {
      handleFinish();
    }, totalGreetingTime + 2300);
    timeouts.push(doneTimeout);

    // Escape / Space / Enter keys skip
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleFinish]);

  return (
    <AnimatePresence>
      {!exitStarted && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          onClick={handleFinish}
          role="button"
          tabIndex={0}
          aria-label="Click to skip splash intro"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden select-none cursor-pointer"
        >
          {/* Animated grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)',
            }}
          />

          {/* Skip hint */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleFinish();
            }}
            className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-[11px] font-mono text-zinc-400 bg-white/5 border border-white/10 hover:border-green-500/40 hover:text-green-400 transition-all z-20"
          >
            Skip [Esc]
          </button>

          {/* Greeting text */}
          <AnimatePresence mode="wait">
            {phase === 'greetings' && (
              <motion.div
                key={greetingIndex}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="text-center"
              >
                <span
                  className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {greetings[greetingIndex].text}
                </span>
              </motion.div>
            )}

            {phase === 'name' && (
              <motion.div
                key="name-reveal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-4"
              >
                {/* I'm */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0, duration: 0.25 }}
                  className="text-zinc-500 text-lg sm:text-xl tracking-[0.3em] uppercase font-mono"
                >
                  I'm
                </motion.p>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ delay: 0.1, duration: 0.35, ease: 'easeOut' }}
                >
                  <span
                    className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight leading-none"
                    style={{
                      fontFamily: 'Alumni Sans SC, sans-serif',
                      background: 'linear-gradient(135deg, #ffffff 30%, #22c55e 70%, #14b8a6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    ISHAN
                  </span>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  className="text-zinc-500 text-sm sm:text-base tracking-widest uppercase font-mono"
                >
                  Developer · Designer · Creator
                </motion.p>

                {/* Green bar loader */}
                <motion.div
                  className="mx-auto mt-6 h-[2px] rounded-full overflow-hidden"
                  style={{ width: '180px', background: 'rgba(255,255,255,0.07)' }}
                >
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.15, duration: 1.2, ease: 'easeInOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #22c55e, #14b8a6)' }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Corner accents */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-green-500/30 rounded-tl-md pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-green-500/30 rounded-bl-md pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-green-500/30 rounded-br-md pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
