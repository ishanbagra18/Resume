import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Trophy, GraduationCap, Sparkles } from "lucide-react";

const experiences = [
  {
    type: "achievement",
    role: "National Winner — Smart India Hackathon (SIH)",
    organization: "Ministry of Education, Govt. of India",
    period: "Dec 2025",
    icon: Trophy,
    color: "from-yellow-400 to-amber-600",
    accentColor: "#f59e0b",
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
    accentColor: "#22c55e",
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
    accentColor: "#14b8a6",
    glowColor: "rgba(20,184,166,0.3)",
    points: [
      "Pursuing CSE with strong foundation in Data Structures, Algorithms, Software Engineering, and Database Management.",
      "Top 10 rank finalist out of 10,000+ competitors at Innerve 9.0 Hackathon (AIT Pune)."
    ],
    tags: ["Data Structures", "Algorithms", "IIIT Kota"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-24 lg:px-12 bg-slate-50 dark:bg-black text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-zinc-900 transition-colors duration-400"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-[300px] h-[200px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header with Background Text */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3 text-green-500" />
          Career Journey & Achievements
        </p>

        <div className="relative inline-block max-w-full">
          <motion.h1
            style={{ y: yParallax }}
            className="absolute text-[40px] sm:text-[70px] md:text-[95px] lg:text-[125px] leading-none font-black bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent opacity-20 dark:opacity-[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap tracking-wider font-AlumniSansSC z-0"
          >
            WORK & EXPERIENCE
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

    <div className="relative flex flex-col items-center w-full max-w-4xl z-10 space-y-16">
      {/* Vertical Glowing Line — now scroll-animated */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 h-[calc(100%-2rem)] w-[2px]">
        <div className="absolute inset-0 bg-slate-200 dark:bg-zinc-800/50 rounded-full" />
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-green-500 via-teal-400 to-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.5)]"
          style={{ height: lineHeight }}
        />
      </div>
      
      {experiences.map((exp, index) => {
        const Icon = exp.icon;
        const isEven = index % 2 === 0;
        return (
          <div key={exp.role} className="relative flex flex-col md:flex-row items-center w-full">
            
            {/* Center Timeline Icon - Enhanced with glow ring */}
            <span
              className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20"
              aria-hidden="true"
            >
              <motion.span
                whileHover={{ scale: 1.15 }}
                className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${exp.color} rounded-full border-4 border-slate-50 dark:border-black text-black shadow-xl transition-transform relative`}
                style={{ boxShadow: `0 0 25px ${exp.glowColor}, 0 0 50px ${exp.glowColor}` }}
              >
                <Icon className="w-5 h-5 text-black" />
                {/* Animated pulse ring */}
                <span 
                  className="absolute inset-0 rounded-full animate-ping opacity-20"
                  style={{ backgroundColor: exp.accentColor }}
                />
              </motion.span>
            </span>

            {/* Timeline Content Card - Enhanced */}
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0 ${
                isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
              }`}
            >
              <motion.div 
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative bg-white/90 dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300 group overflow-hidden"
              >
                {/* Top gradient accent line */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Subtle background radial glow on hover */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-3xl"
                  style={{ backgroundColor: `${exp.accentColor}15` }}
                />

                <div className={`relative z-10 flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  <span className="text-xs font-mono font-semibold tracking-wider text-green-600 dark:text-green-400 bg-green-500/10 border border-green-500/30 px-3.5 py-1 rounded-full shadow-sm">
                    {exp.period}
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    exp.type === 'achievement' 
                      ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400' 
                      : exp.type === 'work' 
                      ? 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400'
                      : 'bg-teal-500/10 border-teal-500/20 text-teal-600 dark:text-teal-400'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                <h3 className="relative z-10 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{exp.role}</h3>
                <div className="relative z-10 text-teal-600 dark:text-teal-400 text-sm font-semibold mb-4">{exp.organization}</div>

                <ul className="relative z-10 space-y-2.5 text-slate-600 dark:text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-5 text-left">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span 
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-[10px] font-bold"
                        style={{ 
                          backgroundColor: `${exp.accentColor}15`,
                          color: exp.accentColor,
                          border: `1px solid ${exp.accentColor}30`
                        }}
                      >
                        ✓
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className={`relative z-10 flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  {exp.tags.map((tag) => (
                    <motion.span
                      whileHover={{ scale: 1.08, y: -1 }}
                      key={tag}
                      className="text-[10px] font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/40 hover:text-teal-600 dark:hover:text-teal-300 transition-colors cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>
        );
      })}
    </div>
  </section>
);
};

export default Experience;
