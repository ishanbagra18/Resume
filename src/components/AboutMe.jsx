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
      className="min-h-screen relative bg-zinc-950 text-gray-200 px-6 py-16 md:py-20 lg:px-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[160px] sm:w-[450px] sm:h-[240px] bg-green-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Parallax Background Text */}
      <motion.h1
        style={{ y: yParallax }}
        className="absolute text-[80px] sm:text-[120px] md:text-[160px] lg:text-[220px] font-extrabold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap"
      >
        ABOUT
      </motion.h1>

      {/* Section Title */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide">
          ABOUT ME
        </h2>
        <motion.div
          animate={{ width: ["15%", "25%", "10%"] }}
          initial={{ width: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-1 bg-gradient-to-r from-green-400 to-teal-500 mt-3 mx-auto rounded"
        ></motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Bio Text */}
        <motion.div
          className="flex-1 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4, ease: "easeInOut" }}
          variants={fadeIn}
          custom={0.2}
        >
          <p className="font-light">
            Hi, I’m <span className="text-green-400 font-semibold">Ishan Bagra</span>, a 
            Computer Science and Engineering student at{" "}
            <span className="text-teal-400">IIIT Kota (Batch 2023–2027)</span>. 
            I’m passionate about building impactful tech solutions and love exploring 
            the full stack — from clean UI with React & TailwindCSS to backend logic 
            with Node.js, Express, and MongoDB.
          </p>
          <p className="mt-4 font-light">
            I’ve worked on projects like{" "}
            <span className="text-green-400">Skylink</span> (an AI-powered in-flight communication system) 
            and <span className="text-teal-400">ChitChat</span> (a real-time chat app). 
            I actively participate in hackathons and coding contests — securing{" "}
            <span className="text-green-400">Top 10</span> rank out of 10,000+ at Innerve 9.0 by AIT Pune 
            and winning a track by udChalo.
          </p>
          <p className="mt-4 font-light">
            With solid knowledge in data structures, algorithms, and system design, 
            I love problem-solving and always bring{" "}
            <span className="text-teal-400">innovation, teamwork, and speed</span> into what I build.
          </p>
        </motion.div>

        {/* Info Card */}
        <motion.div
          className="flex-1 backdrop-blur-lg bg-zinc-900/70 border border-zinc-700 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-start w-full max-w-md hover:border-green-500/50 transition-colors duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0.4}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
            I am a <span className="text-green-400">Web Developer</span>
          </h3>
          <ul className="space-y-3 text-gray-300 w-full text-sm sm:text-base">
            <li>
              <span className="text-green-400">•</span>{" "}
              <strong>First Name</strong>: Ishan
            </li>
            <li>
              <span className="text-green-400">•</span>{" "}
              <strong>Last Name</strong>: Bagra
            </li>
            <li>
              <span className="text-green-400">•</span>{" "}
              <strong>Age</strong>: 20 years
            </li>
            <li>
              <span className="text-green-400">•</span>{" "}
              <strong>Nationality</strong>: Indian
            </li>
            <li>
              <span className="text-green-400">•</span>{" "}
              <strong>Language</strong>: English, Hindi
            </li>
            <li>
              <span className="text-green-400">•</span>{" "}
              <strong>Address</strong>: Jaipur, Rajasthan
            </li>
          </ul>

          <a
            href="/ishanresume.pdf"
            download
            className="mt-8 self-center px-6 py-3 text-sm sm:text-base text-white font-medium bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
