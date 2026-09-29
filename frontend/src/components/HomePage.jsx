
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from '../../Reactbits/Particles/Particles';
import { FaArrowDown, FaCode, FaTrophy, FaBriefcase, FaEnvelope, FaCopy, FaCheck, FaMapMarkerAlt } from 'react-icons/fa';
import { SiReact, SiJavascript, SiGo, SiSupabase, SiPython, SiNodedotjs } from 'react-icons/si';

const cubeFaces = [
  { icon: SiReact, name: 'React', color: '#61DBFB', transform: 'rotateY(0deg) translateZ(80px)' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F0DB4F', transform: 'rotateY(180deg) translateZ(80px)' },
  { icon: SiGo, name: 'Go', color: '#00ADD8', transform: 'rotateY(90deg) translateZ(80px)' },
  { icon: SiPython, name: 'Python', color: '#3776AB', transform: 'rotateY(-90deg) translateZ(80px)' },
  { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E', transform: 'rotateX(90deg) translateZ(80px)' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#68A063', transform: 'rotateX(-90deg) translateZ(80px)' },
];

// Orbit ring dots
const orbitDots = [
  { angle: 0, color: '#22c55e', size: 6 },
  { angle: 60, color: '#14b8a6', size: 4 },
  { angle: 120, color: '#0ea5e9', size: 5 },
  { angle: 180, color: '#a855f7', size: 4 },
  { angle: 240, color: '#f59e0b', size: 5 },
  { angle: 300, color: '#ef4444', size: 4 },
];

const HomePage = () => {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  
  // Smooth mouse follower
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      className="relative w-full min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-black text-slate-900 dark:text-white px-6 md:px-16 pt-28 pb-12 overflow-hidden bg-grid-pattern transition-colors duration-400"
    >
      {/* Ambient cursor glow (desktop only) */}
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 hidden lg:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-100">
        <Particles
          particleColors={['#22c55e', '#14b8a6', '#0ea5e9']}
          particleCount={160}
          particleSpread={8}
          speed={0.15}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Multiple ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-green-500/10 to-teal-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[200px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none animate-pulse-slow" />

      {/* Main content wrapper */}
      <div className="flex flex-col items-center w-full z-10 my-auto">
        {/* Large Parallax Name Title */}
        <motion.div
          style={{ y: titleY }}
          className="text-[44px] sm:text-[90px] md:text-[140px] lg:text-[190px] xl:text-[230px] font-black text-slate-200 dark:text-zinc-800/40 text-center font-AlumniSansSC leading-none tracking-tight select-none pointer-events-none transition-colors"
        >
          ISHAN BAGRA
        </motion.div>

        {/* Content layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 px-2 sm:px-4 py-6 max-w-7xl -mt-6 sm:-mt-12 md:-mt-16 z-20">
          
          {/* Left Content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            {/* Status Badge with Live Pulse - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-xs font-mono font-medium shadow-[0_0_20px_rgba(34,197,94,0.15)] backdrop-blur-md animate-glow-pulse"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 dark:bg-green-400"></span>
              </span>
              <span>Available for Software Engineering Roles</span>
            </motion.div>

            {/* Title with Gradient Glow - Enhanced */}
            <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[135px] flex flex-col justify-center">
              <h1 className="text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-Poppins tracking-tight text-slate-900 dark:text-white">
                I am a{' '}
                <span className="bg-gradient-to-r from-green-500 via-teal-400 to-teal-600 dark:from-green-400 dark:via-teal-300 dark:to-teal-500 bg-clip-text text-transparent inline-block min-h-[1.25em] drop-shadow-[0_0_25px_rgba(34,197,94,0.3)] animate-gradient-text" style={{ backgroundSize: '200% auto' }}>
                  <Typewriter
                    words={['SIH Winner', 'Designer', 'Full Stack Dev', 'SDE Intern']}
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

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Crafting high-performance web applications with intuitive interfaces, robust architectures, and memorable animations.
            </p>

            {/* Quick Achievement Pills - Enhanced with staggered animation */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-mono text-slate-700 dark:text-zinc-300"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
              }}
            >
              {[
                { icon: FaTrophy, text: "SIH '25 Winner", color: 'yellow', hoverBorder: 'hover:border-yellow-500/40', iconColor: 'text-amber-500 dark:text-yellow-400' },
                { icon: FaBriefcase, text: 'udChalo SDE Intern', color: 'teal', hoverBorder: 'hover:border-teal-500/40', iconColor: 'text-teal-600 dark:text-teal-400' },
                { icon: FaCode, text: "IIIT Kota CSE '27", color: 'green', hoverBorder: 'hover:border-green-500/40', iconColor: 'text-green-600 dark:text-green-400' },
                { icon: FaMapMarkerAlt, text: 'India', color: 'blue', hoverBorder: 'hover:border-blue-500/40', iconColor: 'text-blue-500 dark:text-blue-400' },
              ].map(({ icon: Icon, text, hoverBorder, iconColor }, idx) => (
                <motion.div
                  key={text}
                  variants={{
                    hidden: { opacity: 0, y: 12, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800/90 shadow-md dark:shadow-lg ${hoverBorder} transition-all duration-300 cursor-default`}
                >
                  <Icon className={`${iconColor} text-xs`} />
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Glowing Tech Cube - Enhanced with orbit rings */}
          <div className="flex items-center justify-center w-[200px] sm:w-[240px] h-[200px] sm:h-[240px] relative z-20 flex-shrink-0 my-6 lg:my-0" style={{ perspective: '1000px' }}>
            
            {/* Outer orbit ring */}
            <div className="absolute inset-0 animate-orbit pointer-events-none">
              {orbitDots.map(({ angle, color, size }, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    backgroundColor: color,
                    boxShadow: `0 0 8px ${color}`,
                    top: `${50 + 48 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 48 * Math.cos((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </div>

            {/* Inner orbit ring */}
            <div className="absolute inset-4 animate-orbit-reverse pointer-events-none opacity-50">
              {[0, 90, 180, 270].map((angle, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-teal-400"
                  style={{
                    top: `${50 + 46 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 46 * Math.cos((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 6px rgba(20,184,166,0.6)',
                  }}
                />
              ))}
            </div>

            {/* Orbit ring border */}
            <div className="absolute inset-2 rounded-full border border-dashed border-green-500/15 dark:border-green-500/10 pointer-events-none" />
            <div className="absolute inset-6 rounded-full border border-dashed border-teal-500/10 dark:border-teal-500/8 pointer-events-none" />

            <motion.div
              animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              className="w-28 sm:w-36 h-28 sm:h-36 relative transform-style-preserve-3d"
            >
              {cubeFaces.map(({ icon: Icon, name, color, transform }, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 bg-white/95 dark:bg-zinc-950/90 border border-slate-200 dark:border-zinc-800/90 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xl transition-all"
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

          {/* Right Content - Enhanced */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 40 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-right space-y-5 flex flex-col items-center lg:items-end"
          >
            <motion.div 
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="inline-block p-5 rounded-3xl bg-white/90 dark:bg-zinc-950/80 border border-slate-200/90 dark:border-zinc-800/90 backdrop-blur-xl shadow-xl dark:shadow-2xl text-left max-w-sm mx-auto lg:ml-auto lg:mr-0 hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500 dark:bg-teal-400"></span>
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold">Worldwide Remote / Hybrid</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-light">
                Specializing in full-stack architecture, React Native cross-platform apps, and scalable web platforms.
              </p>
            </motion.div>

            {/* Action Buttons placed on Right Side - Enhanced */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 pt-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('projects')}
                className="group relative px-7 py-3.5 bg-gradient-to-r from-green-400 via-teal-400 to-teal-500 text-black font-bold rounded-full shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 text-sm sm:text-base flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.button>

              {/* Contact Me Tooltip Button */}
              <div className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-7 py-3.5 bg-slate-900 dark:bg-zinc-950/90 border border-slate-700 dark:border-zinc-800 text-white font-semibold rounded-full hover:border-green-500/50 hover:bg-slate-800 dark:hover:bg-zinc-900 transition-all duration-300 text-sm sm:text-base flex items-center gap-2.5 shadow-xl hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                >
                  <FaEnvelope className="text-green-400" />
                  <span>Contact Me</span>
                </motion.button>

                {/* Tooltip Card */}
                <div className="absolute left-1/2 lg:left-auto lg:right-0 transform -translate-x-1/2 lg:translate-x-0 mt-3 px-4 py-3.5 backdrop-blur-2xl bg-slate-900/95 dark:bg-zinc-950/95 border border-green-500/40 text-white text-xs rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.95)] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-30 space-y-2 w-64 text-left">
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

      {/* Scroll Down Indicator - Enhanced */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="flex flex-col items-center justify-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-green-500 dark:hover:text-green-400 transition-colors z-20 mx-auto cursor-pointer focus:outline-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-zinc-400 dark:border-zinc-600 flex items-start justify-center pt-2 hover:border-green-500 dark:hover:border-green-400 transition-colors">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
        <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 dark:text-zinc-400">Scroll Down</p>
      </motion.button>
    </section>
  );
};

export default HomePage;

