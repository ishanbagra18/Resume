import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TextEffect } from "@/components/core/text-effect";
import { FaGraduationCap, FaTrophy, FaBriefcase, FaCode, FaAward, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { Sparkles } from "lucide-react";

const stats = [
  { label: "Hackathon Winner", value: "SIH '25", icon: FaTrophy, color: "text-yellow-400", bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/20", hoverBorder: "hover:border-yellow-500/40" },
  { label: "SDE Internship", value: "udChalo", icon: FaBriefcase, color: "text-green-400", bgColor: "bg-green-500/10", borderColor: "border-green-500/20", hoverBorder: "hover:border-green-500/40" },
  { label: "Innerve 9.0 Rank", value: "Top 10", icon: FaAward, color: "text-teal-400", bgColor: "bg-teal-500/10", borderColor: "border-teal-500/20", hoverBorder: "hover:border-teal-500/40" },
  { label: "B.Tech CSE", value: "IIIT Kota", icon: FaGraduationCap, color: "text-purple-400", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/20", hoverBorder: "hover:border-purple-500/40" },
];

// Animated counter hook
const useCounter = (end, duration = 2000, startOnView = false) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (startOnView && !isInView) return;
    
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
};

const AboutMe = () => {
  const sectionRef = useRef(null);
  const { count: projectCount, ref: projectRef } = useCounter(10, 1500, true);
  const { count: hackaCount, ref: hackaRef } = useCounter(5, 1500, true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen relative bg-slate-100/70 dark:bg-zinc-950 text-slate-800 dark:text-gray-200 px-4 sm:px-8 py-24 lg:px-12 flex flex-col justify-center overflow-hidden border-t border-slate-200 dark:border-zinc-900 transition-colors duration-400"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[260px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[200px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-10 w-[200px] h-[200px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Section Title Header with Background Text */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3 text-green-500" />
          Get To Know Me
        </p>

        <div className="relative inline-block max-w-full">
          {/* Parallax Background Text centered directly behind main title */}
          <motion.h1
            style={{ y: yParallax }}
            className="absolute text-[50px] sm:text-[90px] md:text-[130px] lg:text-[160px] leading-none font-black bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent opacity-20 dark:opacity-[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap tracking-wider font-AlumniSansSC z-0"
          >
            ABOUT ME
          </motion.h1>

          <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ABOUT <span className="bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">ME</span>
          </h2>
        </div>

        <motion.div
          animate={{ width: ["10%", "24%", "12%"] }}
          initial={{ width: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative z-10 h-1 bg-gradient-to-r from-green-400 to-teal-400 mt-4 mx-auto rounded-full"
        />
      </motion.div>

      {/* Quick Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-14 max-w-4xl mx-auto"
      >
        <div ref={projectRef} className="text-center">
          <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">{projectCount}+</p>
          <p className="text-[11px] font-mono text-zinc-500 mt-1">Projects Built</p>
        </div>
        <div className="w-[1px] h-8 bg-slate-300 dark:bg-zinc-800 hidden sm:block" />
        <div ref={hackaRef} className="text-center">
          <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">{hackaCount}+</p>
          <p className="text-[11px] font-mono text-zinc-500 mt-1">Hackathons</p>
        </div>
        <div className="w-[1px] h-8 bg-slate-300 dark:bg-zinc-800 hidden sm:block" />
        <div className="text-center">
          <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">3+</p>
          <p className="text-[11px] font-mono text-zinc-500 mt-1">Years Coding</p>
        </div>
      </motion.div>

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 max-w-7xl mx-auto w-full">
        
        {/* Left: Bio Text */}
        <div className="flex-1 text-slate-700 dark:text-zinc-300 text-base md:text-lg leading-relaxed tracking-wide space-y-6 flex flex-col justify-center">
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-3xl bg-white/90 dark:bg-white/[0.02] border border-slate-200 dark:border-zinc-800/80 backdrop-blur-sm shadow-xl space-y-5 hover:border-green-500/30 dark:hover:border-green-500/20 transition-all duration-300"
          >
            <TextEffect per="char" preset="fade" className="font-light">
              I am a Computer Science and Engineering student at <span className="text-teal-600 dark:text-teal-400 font-semibold">IIIT Kota (Batch 2023–2027)</span> with a passion for software development, problem-solving, and building high-impact digital products.
            </TextEffect>
            
            <TextEffect per="char" preset="fade" className="font-light" delay={0.1}>
              During my <span className="text-green-600 dark:text-green-400 font-semibold">SDE Internship at udChalo (May 2025 – Aug 2025)</span>, I worked heavily on React Native development. I transformed Figma design guidelines into responsive UI components, optimized runtime performance, and won a dedicated track challenge by udChalo.
            </TextEffect>
            
            <TextEffect per="char" preset="fade" className="font-light" delay={0.2}>
              I have competed at the highest national engineering forums, winning the prestigious national-level <span className="text-green-600 dark:text-green-400 font-semibold">Smart India Hackathon (SIH) 2025</span>. I also secured a <span className="text-teal-600 dark:text-teal-400 font-semibold">Top 10 rank out of 10,000+ participants</span> at Innerve 9.0 hackathon hosted by AIT Pune.
            </TextEffect>
            
            <TextEffect per="char" preset="fade" className="font-light" delay={0.3}>
              My full-stack portfolio features real-world applications including <span className="text-green-600 dark:text-green-400 font-medium">GeetHub</span> (Go/Gin & React music app), <span className="text-teal-600 dark:text-teal-400 font-medium">ZeroWaste</span> (surplus food redistribution with Socket.IO), and <span className="text-green-600 dark:text-green-400 font-medium">Portfolio.ai</span> (AI-driven portfolio platform built with Supabase).
            </TextEffect>
          </motion.div>
        </div>

        {/* Right: Key Stats & Highlights Card */}
        <motion.div
          className="flex-1 backdrop-blur-xl bg-white/90 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-8 rounded-3xl shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between w-full max-w-lg mx-auto lg:mx-0 hover:border-green-500/30 transition-all duration-300 group relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
        >
          {/* Top gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-400 via-teal-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Key <span className="bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">Highlights</span>
              </h3>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                2023 - 2027
              </span>
            </div>

            {/* Grid of stats badges - Enhanced */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((s, idx) => (
                <motion.div
                  key={s.label}
                  whileHover={{ scale: 1.04, y: -2 }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className={`p-4 rounded-2xl bg-slate-50 dark:bg-black/40 border ${s.borderColor} flex flex-col gap-1 ${s.hoverBorder} transition-all duration-300 cursor-default`}
                >
                  <div className={`w-8 h-8 rounded-xl ${s.bgColor} flex items-center justify-center mb-1`}>
                    <s.icon className={`${s.color} text-sm`} />
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">{s.label}</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white">{s.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlight list */}
            <ul className="space-y-3 text-slate-700 dark:text-zinc-300 text-sm">
              {[
                { text: <><strong>SIH 2025</strong> National Winner</>, color: 'text-green-600 dark:text-green-400' },
                { text: <><strong>udChalo</strong> SDE Intern & Track Winner</>, color: 'text-green-600 dark:text-green-400' },
                { text: <><strong>Innerve 9.0</strong> Top 10 / 10,000+ Engineers</>, color: 'text-green-600 dark:text-green-400' },
                { text: <>Full-Stack Projects: <strong>GeetHub, ZeroWaste, Portfolio.ai</strong></>, color: 'text-green-600 dark:text-green-400' },
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center ${item.color} font-bold text-xs`}>✓</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://drive.google.com/file/d/1PjRvjmDntAhiu1-Y_h8uoU8zTx4uZzqV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-4 text-sm sm:text-base text-black font-semibold bg-gradient-to-r from-green-400 to-teal-400 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/btn"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaDownload size={13} />
              <span>View Full Resume</span>
              <FaExternalLinkAlt size={11} />
            </span>
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
