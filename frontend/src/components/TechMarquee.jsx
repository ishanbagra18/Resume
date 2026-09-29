import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiNodedotjs, SiMongodb, SiTailwindcss,
  SiGo, SiPython, SiSupabase, SiGit, SiFramer, SiFigma, SiExpress
} from 'react-icons/si';

const techs = [
  { icon: SiReact, name: 'React', color: '#61DBFB' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F0DB4F' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#68A063' },
  { icon: SiGo, name: 'Go', color: '#00ADD8' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiMongodb, name: 'MongoDB', color: '#4DB33D' },
  { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#38bdf8' },
  { icon: SiFramer, name: 'Framer', color: '#e64aff' },
  { icon: SiExpress, name: 'Express', color: '#ffffff' },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  { icon: SiGit, name: 'Git', color: '#F1502F' },
];

const TechMarquee = () => {
  // Double the items for seamless loop
  const items = [...techs, ...techs];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-slate-100/50 dark:bg-zinc-950/50 border-y border-slate-200/80 dark:border-zinc-800/50 select-none">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-slate-100/90 dark:from-zinc-950/90 to-transparent pointer-events-none" />
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-slate-100/90 dark:from-zinc-950/90 to-transparent pointer-events-none" />

      {/* Marquee track */}
      <motion.div
        className="flex items-center gap-8 sm:gap-12 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 35,
            ease: 'linear',
          },
        }}
      >
        {items.map(({ icon: Icon, name, color }, idx) => (
          <div
            key={`${name}-${idx}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/60 backdrop-blur-sm hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-300 group cursor-default flex-shrink-0"
          >
            <Icon
              size={20}
              style={{ color }}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
