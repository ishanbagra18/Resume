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

  // Set up scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // track when section enters and exits viewport
  });

  // Map scroll progress to vertical movement
  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={sectionRef}
      className="h-screen relative bg-black text-white px-6 py-10 lg:px-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Optional Glow Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-green-400 blur-3xl opacity-10 rounded-full pointer-events-none" />

      {/* Background Gradient Text with Scroll Parallax */}
      <motion.h1
        style={{ y: yParallax }}
        className="absolute text-[160px] md:text-[200px] font-extrabold bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap"
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
        <h2 className="text-4xl md:text-5xl font-bold">ABOUT ME</h2>
        <motion.div
          animate={{ width: ["10%", "20%", "0%"] }}
          initial={{ width: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-1 bg-gradient-to-r from-green-400 to-teal-500 mt-2 mx-auto rounded"
        ></motion.div>
      </motion.div>

      {/* Flex Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Text */}
        <motion.div
          className="flex-1 text-gray-300 text-base md:text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1, ease: "easeInOut" }}
          variants={fadeIn}
          custom={0.2}
        >
          <p className="font-thin">
            Hi, I’m Ishan Bagra, a Computer Science and Engineering student at
            IIIT Kota (Batch 2023–2027). I’m deeply passionate about building
            impactful tech solutions and love exploring the full stack—from
            clean UI with React and Tailwind CSS to backend logic with Node.js,
            Express, and MongoDB. I’ve worked on projects like Skylink, an
            AI-powered in-flight communication system, and ChitChat, a real-time
            chat app using Socket.IO. I also built a Portfolio Generator with
            OTP-based login to help users easily create professional portfolios.
            I actively participate in hackathons and coding contests—securing a
            Top 10 rank out of 10,000+ at Innerve 9.0 by AIT Pune and winning a
            sponsored track by udChalo. I’ve earned the 100 Days LeetCode badge,
            maintain a 2-star CodeChef rating (Max 1490), and rank in the top
            38% on LeetCode (Max rating: 1525). With a solid grip on data
            structures, algorithms, and system design principles, I enjoy
            problem-solving and always aim to bring innovation, teamwork, and
            quick learning into everything I build.
          </p>
        </motion.div>

        {/* Right Info Card */}
        <motion.div
          className="flex-1 backdrop-blur-md bg-white/5 border border-gray-700 p-8 rounded-2xl shadow-xl flex flex-col items-start w-full max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0.4}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">
            I am a <span className="text-green-400">Web Developer</span>
          </h3>
          <ul className="space-y-3 text-gray-200 w-full text-base">
            <li>
              <span className="text-green-400">•</span>{" "}
              <strong>First Name</strong>: Ishan
            </li>
            <li>
              <span className="text-green-400">•</span>{" "}
              <strong>Last Name</strong>: Bagra
            </li>
            <li>
              <span className="text-green-400">•</span> <strong>Age</strong>: 20
              years
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
              <span className="text-green-400">•</span> <strong>Address</strong>
              : Jaipur, Rajasthan
            </li>
          </ul>

          <a
            href="/ishanresume.pdf"
            download
            className="mt-8 self-center px-6 py-3 text-white font-medium bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
