import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CodingProfiles = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24 lg:px-24 flex flex-col items-center justify-center">
      {/* === Heading === */}
      <div className="text-center mb-24 relative">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Coding <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Profiles</span>
        </motion.h1>

        <motion.div
          animate={{ width: ['0%', '40%', '15%'] }}
          initial={{ width: 0 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="h-1 bg-gradient-to-r from-green-400 to-teal-400 mt-4 mx-auto rounded-full"
        />
      </div>

      {/* === Cards === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* === GitHub Card === */}
        <motion.a
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="https://github.com/ishanbagra18"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.025, rotateX: 3, rotateY: -3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="group relative bg-[#090d13] p-8 rounded-3xl border border-zinc-800 hover:border-purple-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-500 min-h-[520px] flex flex-col justify-between"
        >
          {/* Inner purple gradient glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[inherit] pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors">GitHub</h2>
              <FaGithub size={32} className="text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <p className="text-zinc-400 font-light text-base leading-relaxed">
              My GitHub is where I showcase all my projects, experiments, and contributions.
              It reflects my journey as a developer—clean code, real-world builds, and continuous learning.
              I’m always exploring new tech and improving with every commit.
            </p>

            <div className="mt-auto space-y-5">
              <motion.img
                src="https://github-readme-stats.vercel.app/api?username=ishanbagra18&show_icons=true&theme=github_dark&hide_border=true&border_radius=10"
                alt="GitHub Stats"
                className="w-full rounded-2xl shadow-lg border border-zinc-900"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.2 }}
              />
              <motion.img
                src="https://github-readme-streak-stats.herokuapp.com/?user=ishanbagra18&theme=github-dark&hide_border=true"
                alt="GitHub Streak"
                className="w-full rounded-2xl shadow-lg border border-zinc-900"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.2 }}
              />
              <div className="flex flex-wrap gap-2.5 pt-2">
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
            </div>
          </div>
        </motion.a>

        {/* === LeetCode Card === */}
        <motion.a
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="https://leetcode.com/ishanbagra"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.025, rotateX: 3, rotateY: -3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="group relative bg-[#121212] p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all duration-500 min-h-[520px] flex flex-col justify-between"
        >
          {/* Inner amber gradient glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[inherit] pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">LeetCode</h2>
              <FaCode size={28} className="text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <p className="text-zinc-400 font-light text-base leading-relaxed">
              My LeetCode profile reflects my passion for problem-solving and DSA.
              I consistently challenge myself with new questions, sharpen my logic,
              and improve my coding efficiency. It’s where I grow my skills and stay
              ready for real-world technical challenges.
            </p>

            {/* LeetCode Live Stats Card */}
            <motion.img
              src="https://leetcard.jacoblin.cool/ishanbagra?theme=dark&font=Fira+Code&ext=activity"
              alt="LeetCode Stats"
              className="w-full rounded-2xl shadow-lg border border-zinc-900 mt-auto"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default CodingProfiles;
