import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  // Buttery-smooth spring physics for progress indicator
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3.5px] bg-transparent pointer-events-none">
      <motion.div
        style={{ scaleX }}
        className="h-full origin-left bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.9),0_0_24px_rgba(20,184,166,0.5)]"
      />
    </div>
  );
};

export default ScrollProgressBar;
