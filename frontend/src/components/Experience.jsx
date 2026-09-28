import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Trophy, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "achievement",
    role: "National Winner — Smart India Hackathon (SIH)",
    organization: "Ministry of Education, Govt. of India",
    period: "Dec 2025",
    icon: Trophy,
    color: "from-yellow-400 to-amber-600",
    glowColor: "rgba(245,158,11,0.3)",
    points: [
      "Secured 1st rank nationwide at SIH 2025, building a high-impact technical solution under strict time limits.",
      "Designed and delivered full-stack web architectures under real-world problem statements."
    ],
    tags: ["SIH 2025 Winner", "Full Stack", "Problem Solving"]
  },
  {
    type: "work",
    role: "SDE Intern",
    organization: "udChalo",
    period: "May 2025 – Aug 2025",
    icon: Briefcase,
    color: "from-green-500 to-teal-500",
    glowColor: "rgba(34,197,94,0.3)",
    points: [
      "Engineered cross-platform UI components using React Native directly from Figma design specifications.",
      "Optimized rendering performance, reduced memory footprint, and enhanced component responsiveness.",
      "Won the dedicated udChalo internal track challenge for outstanding feature execution."
    ],
    tags: ["React Native", "Figma", "UI/UX", "Frontend Dev"]
  },
  {
    type: "education",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Indian Institute of Information Technology (IIIT) Kota",
    period: "2023 – 2027",
    icon: GraduationCap,
    color: "from-teal-400 to-cyan-500",
    glowColor: "rgba(20,184,166,0.3)",
    points: [
      "Pursuing CSE with strong foundation in Data Structures, Algorithms, Software Engineering, and Database Management.",
      "Top 10 rank finalist out of 10,000+ competitors at Innerve 9.0 Hackathon (AIT Pune)."
    ],
    tags: ["Data Structures", "Algorithms", "IIIT Kota"]
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-slate-50 dark:bg-black text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-zinc-900 transition-colors duration-400"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Section Header with Background Text */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
          Career Journey & Achievements
        </p>

        <div className="relative inline-block">
          {/* Parallax Background Text centered directly behind main title */}
          <motion.h1
            style={{ y: yParallax }}
            className="absolute text-[75px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-none font-black bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent opacity-20 dark:opacity-[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap tracking-wider font-AlumniSansSC z-0"
          >
            EXPERIENCE
          </motion.h1>

          <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            WORK & <span className="bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">EXPERIENCE</span>
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

    <div className="relative flex flex-col items-center w-full max-w-3xl z-10 space-y-12">
      {/* Vertical Glowing Line */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 h-[calc(100%-2rem)] w-[2px] bg-gradient-to-b from-green-500 via-teal-400 to-slate-300 dark:to-zinc-800 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.5)]" />
      
      {experiences.map((exp, index) => {
        const Icon = exp.icon;
        const isEven = index % 2 === 0;
        return (
          <div key={exp.role} className="relative flex flex-col md:flex-row items-center w-full">
            
            {/* Center Timeline Icon */}
            <span
              className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20"
              aria-hidden="true"
            >
              <span
                className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${exp.color} rounded-full border-4 border-slate-50 dark:border-black text-black shadow-xl transition-transform hover:scale-110`}
                style={{ boxShadow: `0 0 25px ${exp.glowColor}` }}
              >
                <Icon className="w-5 h-5 text-black" />
              </span>
            </span>

            {/* Timeline Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0 ${
                isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
              }`}
            >
              <div className="bg-white/90 dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300 group">
                <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  <span className="text-xs font-mono font-semibold tracking-wider text-green-600 dark:text-green-400 bg-green-500/10 border border-green-500/30 px-3.5 py-1 rounded-full shadow-sm">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{exp.role}</h3>
                <div className="text-teal-600 dark:text-teal-400 text-sm font-semibold mb-4">{exp.organization}</div>

                <ul className="space-y-2 text-slate-600 dark:text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-5 text-left">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-green-600 dark:text-green-400 font-bold text-sm">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/40 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        );
      })}
    </div>
  </section>
);

export default Experience;

