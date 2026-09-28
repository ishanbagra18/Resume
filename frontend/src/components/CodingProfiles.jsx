import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CodingProfiles = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="profiles"
      ref={sectionRef}
      className="min-h-screen bg-slate-100/70 dark:bg-black text-slate-900 dark:text-white px-6 py-24 lg:px-20 flex flex-col items-center justify-center border-t border-slate-200 dark:border-zinc-900 relative transition-colors duration-400 overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* === Heading === */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
          Competitive Programming & Open Source
        </p>

        <div className="relative inline-block max-w-full">
          {/* Parallax Background Text centered directly behind main title */}
          <motion.h1
            style={{ y: yParallax }}
            className="absolute text-[45px] sm:text-[75px] md:text-[105px] lg:text-[130px] leading-none font-black bg-gradient-to-r from-purple-500 via-pink-400 to-amber-500 bg-clip-text text-transparent opacity-20 dark:opacity-[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap tracking-wider font-AlumniSansSC z-0"
          >
            CODING PROFILES
          </motion.h1>

          <h2 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            CODING <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-amber-500 dark:from-purple-400 dark:via-pink-400 dark:to-amber-400 bg-clip-text text-transparent">PROFILES</span>
          </h2>
        </div>

        <motion.div
          animate={{ width: ['10%', '30%', '15%'] }}
          initial={{ width: 0 }}
          transition={{
            duration: 1.8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="relative z-10 h-1 bg-gradient-to-r from-purple-400 to-amber-400 mt-4 mx-auto rounded-full"
        />
      </motion.div>

      {/* === Cards === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl z-10">
        
        {/* === GitHub Card === */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative bg-white/90 dark:bg-[#090d13] p-8 rounded-3xl border border-slate-200 dark:border-zinc-800 hover:border-purple-500/40 shadow-xl dark:shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] transition-all duration-500 min-h-[520px] flex flex-col justify-between"
        >
          {/* Inner purple gradient glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[inherit] pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-800/80 pb-4">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">GitHub</h3>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">@ishanbagra18</span>
              </div>
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                <FaGithub size={28} />
              </div>
            </div>

            <p className="text-slate-600 dark:text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
              Open source contributions, full-stack projects, and continuous commits showcasing active software architecture and software design patterns.
            </p>

            <div className="mt-auto space-y-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-zinc-800/80 bg-slate-50 dark:bg-zinc-950 p-2 shadow-inner">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=ishanbagra18&show_icons=true&theme=github_dark&hide_border=true&border_radius=10"
                  alt="GitHub Stats"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-zinc-800/80 bg-slate-50 dark:bg-zinc-950 p-2 shadow-inner">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=ishanbagra18&theme=github-dark&hide_border=true"
                  alt="GitHub Streak"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://img.shields.io/github/followers/ishanbagra18?label=Followers&style=flat&logo=github&color=purple"
                    alt="GitHub followers"
                    className="rounded"
                  />
                  <img
                    src="https://img.shields.io/github/stars/ishanbagra18?label=Stars&style=flat&color=yellow"
                    alt="GitHub stars"
                    className="rounded"
                  />
                </div>

                <a
                  href="https://github.com/ishanbagra18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-600 dark:text-purple-400 hover:text-purple-500 font-semibold"
                >
                  <span>Open Profile</span>
                  <FaExternalLinkAlt size={11} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === LeetCode Card === */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative bg-white/90 dark:bg-[#121212] p-8 rounded-3xl border border-slate-200 dark:border-zinc-800 hover:border-amber-500/40 shadow-xl dark:shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_rgba(245,158,11,0.25)] transition-all duration-500 min-h-[520px] flex flex-col justify-between"
        >
          {/* Inner amber gradient glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[inherit] pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-800/80 pb-4">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">LeetCode</h3>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">@ishanbagra</span>
              </div>
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <FaCode size={26} />
              </div>
            </div>

            <p className="text-slate-600 dark:text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
              Problem-solving journey focusing on Data Structures, Algorithms, Dynamic Programming, Graph Theory, and optimal time/space complexity solutions.
            </p>

            {/* LeetCode Live Stats Card */}
            <div className="mt-auto space-y-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-zinc-800/80 bg-slate-50 dark:bg-zinc-950 p-2 shadow-inner">
                <img
                  src="https://leetcard.jacoblin.cool/ishanbagra?theme=dark&font=Fira+Code&ext=activity"
                  alt="LeetCode Stats"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-end pt-2">
                <a
                  href="https://leetcode.com/ishanbagra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-600 dark:text-amber-400 hover:text-amber-500 font-semibold"
                >
                  <span>Visit LeetCode Profile</span>
                  <FaExternalLinkAlt size={11} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CodingProfiles;

