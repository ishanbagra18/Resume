import React, { useEffect, useState } from 'react';
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
  const [showName, setShowName] = useState(false);
  const [exitStarted, setExitStarted] = useState(false);

  useEffect(() => {
    let timeouts = [];

    // Cycle through greetings — 900ms per greeting so each is clearly visible
    greetings.forEach((_, i) => {
      const t = setTimeout(() => {
        setGreetingIndex(i);
      }, i * 900);
      timeouts.push(t);
    });

    // After greetings, show name
    const nameTimeout = setTimeout(() => {
      setPhase('name');
      setShowName(true);
    }, greetings.length * 900 + 300);
    timeouts.push(nameTimeout);

    // Start exit animation — name is visible for 2.2s
    const exitTimeout = setTimeout(() => {
      setExitStarted(true);
      setPhase('exit');
    }, greetings.length * 900 + 2500);
    timeouts.push(exitTimeout);

    // Call onComplete — after exit fade (600ms)
    const doneTimeout = setTimeout(() => {
      onComplete?.();
    }, greetings.length * 900 + 3200);
    timeouts.push(doneTimeout);

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exitStarted && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden select-none"
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)',
            }}
          />

          {/* Greeting text */}
          <AnimatePresence mode="wait">
            {phase === 'greetings' && (
              <motion.div
                key={greetingIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
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
                transition={{ duration: 0.4 }}
                className="text-center space-y-4"
              >
                {/* I'm */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0, duration: 0.4 }}
                  className="text-zinc-500 text-lg sm:text-xl tracking-[0.3em] uppercase font-mono"
                >
                  I'm
                </motion.p>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
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
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-zinc-500 text-sm sm:text-base tracking-widest uppercase font-mono"
                >
                  Developer · Designer · Creator
                </motion.p>

                {/* Green bar loader */}
                <motion.div
                  className="mx-auto mt-6 h-[2px] rounded-full overflow-hidden"
                  style={{ width: '160px', background: 'rgba(255,255,255,0.07)' }}
                >
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.3, duration: 1.6, ease: 'easeInOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #22c55e, #14b8a6)' }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Corner accents */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-green-500/30 rounded-tl-md" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-green-500/30 rounded-tr-md" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-green-500/30 rounded-bl-md" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-green-500/30 rounded-br-md" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
