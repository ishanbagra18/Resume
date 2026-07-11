import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const AboutMe = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-zinc-950 text-gray-200 px-6 py-20 lg:px-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[160px] sm:w-[500px] sm:h-[300px] bg-green-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Parallax Background Text */}
      <motion.h1
        style={{ y: yParallax }}
        className="absolute text-[80px] sm:text-[120px] md:text-[160px] lg:text-[220px] font-black bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent opacity-5 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap tracking-wider"
      >
        ABOUT
      </motion.h1>

      {/* Section Title */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          ABOUT <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">ME</span>
        </h2>
        <motion.div
          animate={{ width: ["10%", "20%", "5%"] }}
          initial={{ width: 0 }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-1 bg-gradient-to-r from-green-400 to-teal-400 mt-4 mx-auto rounded"
        ></motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto w-full">
        
        {/* Bio Text */}
        <motion.div
          className="flex-1 text-zinc-400 text-base md:text-lg leading-relaxed tracking-wide space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2, ease: "easeInOut" }}
          variants={fadeIn}
          custom={0.2}
        >
          <p className="font-light">
            I am a Computer Science and Engineering student at <span className="text-teal-400 font-medium">IIIT Kota (Batch 2023–2027)</span> with a proven track record of excellence in hackathons, software engineering internships, and full-stack development.
          </p>
          <p className="font-light">
            During my <span className="text-green-400 font-semibold">SDE Internship at udChalo</span>, I worked heavily on React Native mobile development. I built polished UI components from Figma design guidelines and optimized performance, which ultimately led to winning a dedicated track challenge by udChalo.
          </p>
          <p className="font-light">
            I have consistently excelled in competitive engineering forums, winning the prestigious national-level <span className="text-green-400 font-semibold">Smart India Hackathon (SIH) 2025</span>. Additionally, I secured a <span className="text-teal-400 font-medium">Top 10 rank out of 10,000+ participants</span> at Innerve 9.0 hackathon hosted by AIT Pune.
          </p>
          <p className="font-light">
            My development portfolio features projects like <span className="text-green-400 font-medium">GeetHub</span> (a full-stack music platform with Go/Gin & React), <span className="text-teal-400 font-medium">ZeroWaste</span> (a real-time surplus redistribution app with Socket.IO), and <span className="text-green-400 font-medium">Portfolio.ai</span> (an AI-powered portfolio generator utilizing Supabase).
          </p>
          <p className="font-light">
            I focus on creating high-quality applications with <span className="text-teal-400 font-medium">improved UI/UX, premium animations (using GSAP & Framer Motion), and responsive designs</span>, maintaining a modern and clean design system.
          </p>
        </motion.div>

        {/* Info Card - Key Highlights */}
        <motion.div
          className="flex-1 backdrop-blur-md bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-start w-full max-w-md hover:border-green-500/30 transition-all duration-300 group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0.4}
        >
          <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">
            Key <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Highlights</span>
          </h3>
          <ul className="space-y-4 text-zinc-300 w-full text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-xs">✓</span>
              <span><strong>udChalo</strong> SDE Internship</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-xs">✓</span>
              <span><strong>SIH 2025</strong> Winner</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-xs">✓</span>
              <span><strong>Innerve 9.0</strong> Top 10 (AIT Pune)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-xs">✓</span>
              <span>Projects: <strong>GeetHub, ZeroWaste, Portfolio.ai</strong></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-xs">✓</span>
              <span>Modern, Responsive UI & Better Animations</span>
            </li>
            
          </ul>

          <a
            href="https://drive.google.com/file/d/1PjRvjmDntAhiu1-Y_h8uoU8zTx4uZzqV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full text-center py-3.5 text-sm sm:text-base text-black font-semibold bg-gradient-to-r from-green-400 to-teal-400 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:scale-102 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300"
          >
            View Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
