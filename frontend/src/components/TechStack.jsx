import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiMongodb, SiExpress, SiFramer, SiGreensock,
  SiTailwindcss, SiFigma, SiGit, SiSupabase, SiGo, SiGin, SiPython
} from 'react-icons/si';
import { FaSearch, FaBrain, FaRobot } from 'react-icons/fa';

const techs = [
  { name: 'HTML5', category: 'Frontend', icon: SiHtml5, color: '#E44D26' },
  { name: 'CSS3', category: 'Frontend', icon: SiCss3, color: '#264de4' },
  { name: 'JavaScript', category: 'Frontend', icon: SiJavascript, color: '#F0DB4F' },
  { name: 'React', category: 'Frontend', icon: SiReact, color: '#61DBFB' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'GSAP', category: 'Animation', icon: SiGreensock, color: '#88CE02' },
  { name: 'Framer Motion', category: 'Animation', icon: SiFramer, color: '#e64aff' },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#68A063' },
  { name: 'Express.js', category: 'Backend', icon: SiExpress, color: '#ffffff' },
  { name: 'Go', category: 'Backend', icon: SiGo, color: '#00ADD8' },
  { name: 'Gin', category: 'Backend', icon: SiGin, color: '#00ADD8' },
  { name: 'Python', category: 'Backend', icon: SiPython, color: '#3776AB' },
  { name: 'MongoDB', category: 'Database', icon: SiMongodb, color: '#4DB33D' },
  { name: 'Supabase', category: 'Database', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'RAG', category: 'AI & Data', icon: FaBrain, color: '#a855f7' },
  { name: 'LLMs', category: 'AI & Data', icon: FaRobot, color: '#38bdf8' },
  { name: 'Figma', category: 'Tools', icon: SiFigma, color: '#F24E1E' },
  { name: 'Git', category: 'Tools', icon: SiGit, color: '#F1502F' },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'AI & Data', 'Animation', 'Tools'];


const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const filteredTechs = techs.filter((t) => {
    const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen relative bg-black text-white px-6 py-24 lg:px-20 overflow-hidden flex flex-col justify-center border-t border-zinc-900"
    >
      {/* Background Glow */}
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-green-400/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Heading Wrapper */}
      <div className="relative z-10 mb-12 text-center">
        <motion.h1
          style={{ y: yParallax }}
          className="absolute text-[90px] md:text-[150px] font-extrabold bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent opacity-5 -top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap font-AlumniSansSC"
        >
          SKILLS & TECH
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
            My Toolbox
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            TECH-<span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">STACK</span>
          </h2>
          <motion.div
            animate={{ width: ['10%', '20%', '5%'] }}
            initial={{ width: 0 }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="h-1 bg-gradient-to-r from-green-400 to-teal-500 mt-3 mx-auto rounded-full"
          />
        </motion.div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="relative z-10 max-w-4xl mx-auto w-full mb-10 space-y-5">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-mono transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-green-400 via-teal-400 to-teal-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)] scale-105'
                  : 'bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Search & Count */}
        <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-xs" />
            <input
              type="text"
              placeholder="Search technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-zinc-950/90 border border-zinc-800/90 rounded-full text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30 transition-all shadow-inner"
            />
          </div>
          <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-800/90 px-3 py-2 rounded-full flex-shrink-0">
            {filteredTechs.length} Techs
          </span>
        </div>
      </div>

      {/* Tech Cards Grid */}
      <motion.div layout className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 max-w-6xl mx-auto w-full">
        <AnimatePresence>
          {filteredTechs.map(({ name, category, icon: Icon, color }) => (
            <motion.div
              layout
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: 1.06,
                rotateX: 4,
                rotateY: 4,
                boxShadow: `0 12px 30px ${color}40`,
              }}
              className="relative group bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-xl p-5 rounded-3xl flex flex-col items-center justify-center text-center shadow-lg cursor-pointer transition-all duration-300 hover:border-zinc-700 overflow-hidden"
              style={{ perspective: 1000 }}
            >
              {/* Radial glow background */}
              <div
                className="absolute -inset-1 z-0 rounded-[inherit] blur-xl opacity-0 transition duration-500 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${color}44, transparent 70%)`,
                }}
              />

              {/* Accent top light line on hover */}
              <div
                className="absolute top-0 left-1/4 right-1/4 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{ background: color }}
              />

              <div className="relative z-10 flex flex-col items-center">
                <Icon size={40} style={{ color }} className="transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
                <p className="mt-3 text-zinc-200 text-xs md:text-sm font-semibold tracking-wide transition-colors group-hover:text-white">
                  {name}
                </p>
                <span className="mt-1 text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400">
                  {category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredTechs.length === 0 && (
        <div className="text-center py-12 text-zinc-500 text-sm font-mono">
          No matching technologies found for "{searchQuery}".
        </div>
      )}
    </section>
  );
};

export default TechStack;

