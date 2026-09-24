import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextEffect } from "@/components/core/text-effect";
import { FaGraduationCap, FaTrophy, FaBriefcase, FaCode, FaAward, FaExternalLinkAlt } from "react-icons/fa";

const stats = [
  { label: "Hackathon Winner", value: "SIH '25", icon: FaTrophy, color: "text-yellow-400" },
  { label: "SDE Internship", value: "udChalo", icon: FaBriefcase, color: "text-green-400" },
  { label: "Innerve 9.0 Rank", value: "Top 10", icon: FaAward, color: "text-teal-400" },
  { label: "B.Tech CSE", value: "IIIT Kota", icon: FaGraduationCap, color: "text-purple-400" },
];

const AboutMe = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen relative bg-zinc-950 text-gray-200 px-6 py-24 lg:px-20 flex flex-col justify-center overflow-hidden border-t border-zinc-900"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[260px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[200px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Parallax Background Text */}
      <motion.h1
        style={{ y: yParallax }}
        className="absolute text-[80px] sm:text-[130px] md:text-[180px] lg:text-[230px] font-black bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent opacity-[0.03] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap tracking-wider font-AlumniSansSC"
      >
        ABOUT ME
      </motion.h1>

      {/* Section Title */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
          Get To Know Me
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          ABOUT <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">ME</span>
        </h2>
        <motion.div
          animate={{ width: ["10%", "24%", "12%"] }}
          initial={{ width: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-1 bg-gradient-to-r from-green-400 to-teal-400 mt-4 mx-auto rounded-full"
        />
      </motion.div>

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 max-w-6xl mx-auto w-full">
        
        {/* Left: Bio Text */}
        <div className="flex-1 text-zinc-300 text-base md:text-lg leading-relaxed tracking-wide space-y-6 flex flex-col justify-center">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-zinc-800/80 backdrop-blur-sm shadow-xl space-y-5">
            <TextEffect per="char" preset="fade" className="font-light">
              I am a Computer Science and Engineering student at <span className="text-teal-400 font-semibold">IIIT Kota (Batch 2023–2027)</span> with a passion for software development, problem-solving, and building high-impact digital products.
            </TextEffect>
            
            <TextEffect per="char" preset="fade" className="font-light" delay={0.1}>
              During my <span className="text-green-400 font-semibold">SDE Internship at udChalo (May 2025 – Aug 2025)</span>, I worked heavily on React Native development. I transformed Figma design guidelines into responsive UI components, optimized runtime performance, and won a dedicated track challenge by udChalo.
            </TextEffect>
            
            <TextEffect per="char" preset="fade" className="font-light" delay={0.2}>
              I have competed at the highest national engineering forums, winning the prestigious national-level <span className="text-green-400 font-semibold">Smart India Hackathon (SIH) 2025</span>. I also secured a <span className="text-teal-400 font-semibold">Top 10 rank out of 10,000+ participants</span> at Innerve 9.0 hackathon hosted by AIT Pune.
            </TextEffect>
            
            <TextEffect per="char" preset="fade" className="font-light" delay={0.3}>
              My full-stack portfolio features real-world applications including <span className="text-green-400 font-medium">GeetHub</span> (Go/Gin & React music app), <span className="text-teal-400 font-medium">ZeroWaste</span> (surplus food redistribution with Socket.IO), and <span className="text-green-400 font-medium">Portfolio.ai</span> (AI-driven portfolio platform built with Supabase).
            </TextEffect>
          </div>
        </div>

        {/* Right: Key Stats & Highlights Card */}
        <motion.div
          className="flex-1 backdrop-blur-xl bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between w-full max-w-lg mx-auto lg:mx-0 hover:border-green-500/30 transition-all duration-300 group"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Key <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Highlights</span>
              </h3>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                2023 - 2027
              </span>
            </div>

            {/* Grid of stats badges */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl bg-black/40 border border-zinc-800 flex flex-col gap-1 hover:border-zinc-700 transition-colors"
                >
                  <s.icon className={`${s.color} text-lg mb-1`} />
                  <span className="text-xs text-zinc-400 font-mono">{s.label}</span>
                  <span className="text-base font-bold text-white">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Highlight list */}
            <ul className="space-y-3 text-zinc-300 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-xs">✓</span>
                <span><strong>SIH 2025</strong> National Winner</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-xs">✓</span>
                <span><strong>udChalo</strong> SDE Intern & Track Winner</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-xs">✓</span>
                <span><strong>Innerve 9.0</strong> Top 10 / 10,000+ Engineers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-xs">✓</span>
                <span>Full-Stack Projects: <strong>GeetHub, ZeroWaste, Portfolio.ai</strong></span>
              </li>
            </ul>
          </div>

          <a
            href="https://drive.google.com/file/d/1PjRvjmDntAhiu1-Y_h8uoU8zTx4uZzqV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-4 text-sm sm:text-base text-black font-semibold bg-gradient-to-r from-green-400 to-teal-400 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>View Full Resume</span>
            <FaExternalLinkAlt size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;

