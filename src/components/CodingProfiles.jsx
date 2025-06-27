import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CodingProfiles = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24 lg:px-24 flex flex-col items-center">
      {/* === Heading === */}
      <div className="text-center mb-20">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white">My Coding </span>
          <span className="text-green-500">Profiles</span>
        </motion.h1>

        <motion.div
          animate={{ width: ['0%', '60%', '30%'] }}
          initial={{ width: 0 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="h-1 bg-gradient-to-r from-green-400 to-teal-500 mt-4 mx-auto rounded-full"
        />
      </div>

      {/* === Cards === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
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
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          className="group relative bg-[#0d1117] p-6 rounded-3xl border border-purple-700 shadow-[0_0_20px_rgba(128,0,255,0.25)] overflow-hidden min-h-[520px] flex flex-col justify-between"
        >
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-semibold">GitHub</h2>
              <FaGithub size={32} />
            </div>
            <p className="text-gray-400 mb-6">
              My GitHub is where I showcase all my projects, experiments, and contributions.
              It reflects my journey as a developer—clean code, real-world builds, and continuous learning.
              I’m always exploring new tech and improving with every commit.
            </p>

            <div className="mt-auto space-y-4">
              <motion.img
                src="https://github-readme-stats.vercel.app/api?username=ishanbagra18&show_icons=true&theme=github_dark&hide_border=true&border_radius=10"
                alt="GitHub Stats"
                className="w-full rounded-xl shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://github-readme-streak-stats.herokuapp.com/?user=ishanbagra18&theme=github-dark&hide_border=true"
                alt="GitHub Streak"
                className="w-full rounded-xl shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-wrap gap-2">
                <img
                  src="https://img.shields.io/github/followers/ishanbagra18?label=Followers&style=flat&logo=github&color=purple"
                  alt="GitHub followers"
                />
                <img
                  src="https://img.shields.io/github/stars/ishanbagra18?label=Stars&style=flat&color=yellow"
                  alt="GitHub stars"
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
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          className="group relative bg-[#1a1a1a] p-6 rounded-3xl border border-blue-700 shadow-[0_0_20px_rgba(0,128,255,0.25)] overflow-hidden min-h-[520px] flex flex-col justify-between"
        >
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-semibold">LeetCode</h2>
              <FaCode size={28} />
            </div>
            <p className="text-gray-400 mb-6">
              My LeetCode profile reflects my passion for problem-solving and DSA.
              I consistently challenge myself with new questions, sharpen my logic,
              and improve my coding efficiency. It’s where I grow my skills and stay
              ready for real-world technical challenges.
            </p>

            {/* LeetCode Live Stats Card */}
            <motion.img
              src="https://leetcard.jacoblin.cool/ishanbagra?theme=dark&font=Fira+Code&ext=activity"
              alt="LeetCode Stats"
              className="w-full rounded-xl shadow-md mt-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default CodingProfiles;
