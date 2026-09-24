
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from '../../Reactbits/Particles/Particles';
import { FaArrowDown, FaCode, FaTrophy, FaBriefcase, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';
import { SiReact, SiJavascript, SiGo, SiSupabase, SiPython, SiNodedotjs } from 'react-icons/si';
import { useState } from 'react';

const cubeFaces = [
  { icon: SiReact, name: 'React', color: '#61DBFB', transform: 'rotateY(0deg) translateZ(80px)' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F0DB4F', transform: 'rotateY(180deg) translateZ(80px)' },
  { icon: SiGo, name: 'Go', color: '#00ADD8', transform: 'rotateY(90deg) translateZ(80px)' },
  { icon: SiPython, name: 'Python', color: '#3776AB', transform: 'rotateY(-90deg) translateZ(80px)' },
  { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E', transform: 'rotateX(90deg) translateZ(80px)' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#68A063', transform: 'rotateX(-90deg) translateZ(80px)' },
];

const HomePage = () => {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText('ishanbagra2@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-between bg-black text-white px-6 md:px-16 pt-28 pb-12 overflow-hidden bg-grid-pattern"
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={['#22c55e', '#14b8a6', '#ffffff']}
          particleCount={160}
          particleSpread={8}
          speed={0.15}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Ambient background glow */}
      {/* //new design added */}

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-green-500/10 to-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Main content wrapper */}
      <div className="flex flex-col items-center w-full z-10 my-auto">
        {/* Large Parallax Name Title */}
        <motion.div
          style={{ y: titleY }}
          className="text-[44px] sm:text-[90px] md:text-[140px] lg:text-[190px] xl:text-[230px] font-black text-zinc-800/40 text-center font-AlumniSansSC leading-none tracking-tight select-none pointer-events-none transition-colors"
        >
          ISHAN BAGRA
        </motion.div>

        {/* Content layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 px-2 sm:px-4 py-6 max-w-6xl -mt-6 sm:-mt-12 md:-mt-16 z-20">
          
          {/* Left Content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            {/* Status Badge with Live Pulse */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/30 text-green-400 text-xs font-mono font-medium shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Title with Gradient Glow */}
            <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[135px] flex flex-col justify-center">
              <h1 className="text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-Poppins tracking-tight text-white">
                I am a{' '}
                <span className="bg-gradient-to-r from-green-400 via-teal-300 to-teal-500 bg-clip-text text-transparent inline-block min-h-[1.25em] drop-shadow-[0_0_25px_rgba(34,197,94,0.3)]">
                  <Typewriter
                    words={['SIH Winner','Full-Stack Engineer', 'Problem Solver']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1600}
                  />
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Crafting high-performance web applications with intuitive interfaces, robust architectures, and memorable animations.
            </p>

            {/* Quick Achievement Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-950/80 border border-zinc-800/90 shadow-lg hover:border-yellow-500/40 transition-colors">
                <FaTrophy className="text-yellow-400 text-xs" />
                <span>SIH '25 Winner</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-950/80 border border-zinc-800/90 shadow-lg hover:border-teal-500/40 transition-colors">
                <FaBriefcase className="text-teal-400 text-xs" />
                <span>udChalo SDE Intern</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-950/80 border border-zinc-800/90 shadow-lg hover:border-green-500/40 transition-colors">
                <FaCode className="text-green-400 text-xs" />
                <span>IIIT Kota CSE '27</span>
              </div>
            </div>
          </motion.div>

          {/* 3D Glowing Tech Cube */}
          <div className="flex items-center justify-center w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] relative z-20 flex-shrink-0 my-6 lg:my-0" style={{ perspective: '1000px' }}>
            <motion.div
              animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              className="w-28 sm:w-36 h-28 sm:h-36 relative transform-style-preserve-3d"
            >
              {cubeFaces.map(({ icon: Icon, name, color, transform }, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 bg-zinc-950/90 border border-zinc-800/90 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl transition-all"
                  style={{
                    transform,
                    backfaceVisibility: 'visible',
                    boxShadow: `inset 0 0 20px ${color}33, 0 0 20px ${color}25`,
                    borderColor: `${color}55`,
                  }}
                >
                  <Icon size={34} style={{ color }} />
                  <span className="text-[10px] font-mono font-semibold" style={{ color }}>{name}</span>
                </div>
              ))}
            </motion.div>
            <div className="absolute -bottom-6 w-32 sm:w-40 h-6 bg-gradient-to-r from-green-500/20 to-teal-500/20 blur-xl rounded-full animate-pulse" />
          </div>

          {/* Right Content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 40 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-right space-y-5 flex flex-col items-center lg:items-end"
          >
            <div className="inline-block p-5 rounded-3xl bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-xl shadow-2xl text-left max-w-sm mx-auto lg:ml-auto lg:mr-0 hover:border-teal-500/40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">Worldwide Remote / Hybrid</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                Specializing in full-stack architecture, React Native cross-platform apps, and scalable web platforms.
              </p>
            </div>

            {/* Action Buttons placed on Right Side */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 pt-1">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-7 py-3.5 bg-gradient-to-r from-green-400 via-teal-400 to-teal-500 text-black font-bold rounded-full shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-300 text-sm sm:text-base flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>

              {/* Contact Me Tooltip Button */}
              <div className="relative group">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-7 py-3.5 bg-zinc-950/90 border border-zinc-800 text-white font-semibold rounded-full hover:border-green-500/50 hover:bg-zinc-900 transition-all duration-300 text-sm sm:text-base flex items-center gap-2.5 shadow-xl hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                >
                  <FaEnvelope className="text-green-400" />
                  <span>Contact Me</span>
                </button>

                {/* Tooltip Card */}
                <div className="absolute left-1/2 lg:left-auto lg:right-0 transform -translate-x-1/2 lg:translate-x-0 mt-3 px-4 py-3.5 backdrop-blur-2xl bg-zinc-950/95 border border-green-500/40 text-white text-xs rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-30 space-y-2 w-64 text-left">
                  <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase">Direct Email</span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-green-400 hover:text-green-300 flex items-center gap-1 font-mono text-[10px]"
                    >
                      {copied ? <FaCheck /> : <FaCopy />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <p className="font-medium text-zinc-200">ishanbagra2@gmail.com</p>
                  <p className="text-[11px] text-zinc-400">Phone: +91-6377253179</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="flex flex-col items-center justify-center gap-2 text-zinc-500 hover:text-green-400 transition-colors z-20 mx-auto cursor-pointer focus:outline-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <FaArrowDown className="text-green-400 w-5 h-5 hover:scale-110 transition-transform" />
        <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">Scroll Down</p>
      </motion.button>
    </section>
  );
};

export default HomePage;

