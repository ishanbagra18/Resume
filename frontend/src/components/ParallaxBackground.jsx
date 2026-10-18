import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring for fluid parallax movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Layer 1: Ambient deep background orbs (moves slowly)
  const orbY1 = useTransform(smoothProgress, [0, 1], [0, 300]);
  const orbY2 = useTransform(smoothProgress, [0, 1], [0, -350]);
  const orbY3 = useTransform(smoothProgress, [0, 1], [0, 250]);

  // Layer 2: Floating depth particles and code glyphs (moves at varied speeds)
  const layerSlow = useTransform(smoothProgress, [0, 1], [0, -250]);
  const layerMid = useTransform(smoothProgress, [0, 1], [0, -500]);
  const layerFast = useTransform(smoothProgress, [0, 1], [0, -750]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Deep Floating Blurred Glowing Orbs (Parallax Layer 1) */}
      <motion.div
        style={{ y: orbY1 }}
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ y: orbY2 }}
        className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-teal-500/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none"
      />
      <motion.div
        style={{ y: orbY3 }}
        className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-purple-500/8 via-pink-500/5 to-transparent blur-[140px] pointer-events-none"
      />



      {/* Parallax Starbursts / Depth Dots */}
      <motion.div
        style={{ y: layerFast }}
        className="hidden md:block absolute top-[15%] right-[20%] w-2 h-2 rounded-full bg-green-400/40 blur-[1px] shadow-[0_0_8px_#22c55e]"
      />
      <motion.div
        style={{ y: layerMid }}
        className="hidden md:block absolute top-[40%] left-[18%] w-2.5 h-2.5 rounded-full bg-teal-400/40 blur-[1px] shadow-[0_0_8px_#14b8a6]"
      />
      <motion.div
        style={{ y: layerSlow }}
        className="hidden md:block absolute top-[68%] right-[24%] w-2 h-2 rounded-full bg-cyan-400/35 blur-[1px] shadow-[0_0_8px_#06b6d4]"
      />
      <motion.div
        style={{ y: layerFast }}
        className="hidden md:block absolute top-[85%] left-[15%] w-3 h-3 rounded-full bg-emerald-400/30 blur-[1px] shadow-[0_0_8px_#10b981]"
      />
    </div>
  );
};

export default ParallaxBackground;
