import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section id="profiles" className="min-h-screen bg-black text-white px-6 py-24 lg:px-20 flex flex-col items-center justify-center border-t border-zinc-900 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* === Heading === */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
          Competitive Programming & Open Source
        </p>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          CODING <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">PROFILES</span>
        </motion.h2>

        <motion.div
          animate={{ width: ['10%', '30%', '15%'] }}
          initial={{ width: 0 }}
          transition={{
            duration: 1.8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="h-1 bg-gradient-to-r from-purple-400 to-amber-400 mt-4 mx-auto rounded-full"
        />
      </div>

      {/* === Cards === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl z-10">
        
        {/* === GitHub Card === */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative bg-[#090d13] p-8 rounded-3xl border border-zinc-800 hover:border-purple-500/40 shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] transition-all duration-500 min-h-[520px] flex flex-col justify-between"
        >
          {/* Inner purple gradient glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[inherit] pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors">GitHub</h3>
                <span className="text-xs font-mono text-zinc-400">@ishanbagra18</span>
              </div>
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <FaGithub size={28} />
              </div>
            </div>

            <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
              Open source contributions, full-stack projects, and continuous commits showcasing active software architecture and software design patterns.
            </p>

            <div className="mt-auto space-y-4">
              <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 p-2 shadow-inner">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=ishanbagra18&show_icons=true&theme=github_dark&hide_border=true&border_radius=10"
                  alt="GitHub Stats"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 p-2 shadow-inner">
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 font-semibold"
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
          className="group relative bg-[#121212] p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/40 shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_rgba(245,158,11,0.25)] transition-all duration-500 min-h-[520px] flex flex-col justify-between"
        >
          {/* Inner amber gradient glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[inherit] pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">LeetCode</h3>
                <span className="text-xs font-mono text-zinc-400">@ishanbagra</span>
              </div>
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <FaCode size={26} />
              </div>
            </div>

            <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
              Problem-solving journey focusing on Data Structures, Algorithms, Dynamic Programming, Graph Theory, and optimal time/space complexity solutions.
            </p>

            {/* LeetCode Live Stats Card */}
            <div className="mt-auto space-y-4">
              <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 p-2 shadow-inner">
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold"
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

