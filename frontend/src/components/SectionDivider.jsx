import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ variant = 'default' }) => {
  if (variant === 'wave') {
    return (
      <div className="relative w-full overflow-hidden h-24 pointer-events-none select-none">
        <svg
          className="absolute bottom-0 w-full h-24 text-slate-100/70 dark:text-zinc-950"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,64 C360,96 720,32 1080,64 C1260,80 1440,48 1440,48 L1440,96 L0,96 Z" />
        </svg>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center gap-3 py-10 select-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0.3 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`rounded-full ${
              i === 2
                ? 'w-3 h-3 bg-gradient-to-r from-green-400 to-teal-400 shadow-[0_0_12px_rgba(34,197,94,0.5)]'
                : 'w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600'
            }`}
          />
        ))}
      </div>
    );
  }

  if (variant === 'gradient-line') {
    return (
      <div className="relative w-full py-8 flex items-center justify-center select-none pointer-events-none">
        <div className="w-full max-w-5xl h-[1px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300 dark:via-zinc-700 to-transparent" />
          <motion.div
            className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-green-400 to-transparent"
            animate={{ x: ['-100%', '500%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
          />
        </div>
      </div>
    );
  }

  // Default: simple animated line
  return (
    <div className="relative w-full flex items-center justify-center py-6 select-none pointer-events-none">
      <div className="w-full max-w-6xl mx-auto px-8">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-zinc-800 to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;
