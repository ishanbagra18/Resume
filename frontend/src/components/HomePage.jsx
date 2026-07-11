// HomePage.jsx
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from '../../Reactbits/Particles/Particles';
import { FaArrowDown } from 'react-icons/fa';
import gsap from 'gsap';
import { SiReact, SiJavascript, SiGo, SiSupabase, SiPython, SiNodedotjs } from 'react-icons/si';

const cubeFaces = [
  { icon: SiReact, color: '#61DBFB', transform: 'rotateY(0deg) translateZ(80px)' },
  { icon: SiJavascript, color: '#F0DB4F', transform: 'rotateY(180deg) translateZ(80px)' },
  { icon: SiGo, color: '#00ADD8', transform: 'rotateY(90deg) translateZ(80px)' },
  { icon: SiPython, color: '#3776AB', transform: 'rotateY(-90deg) translateZ(80px)' },
  { icon: SiSupabase, color: '#3ECF8E', transform: 'rotateX(90deg) translateZ(80px)' },
  { icon: SiNodedotjs, color: '#68A063', transform: 'rotateX(-90deg) translateZ(80px)' },
];


const HomePage = () => {
  const cursorRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex bg-black text-white px-6 md:px-16 py-20 lg:py-28 overflow-hidden"
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#22c55e', '#14b8a6', '#ffffff']}
          particleCount={180}
          particleSpread={8}
          speed={0.15}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-green-400 pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      {/* Main content */}
      <div className="flex flex-col items-center w-full z-10 justify-between">
        {/* Name Title */}
        <motion.div
          style={{ y: titleY }}
          className="text-[40px] sm:text-[80px] md:text-[130px] lg:text-[180px] xl:text-[220px] text-gray-600 text-center font-AlumniSansSC leading-none"
        >
          ISHAN BAGRA
        </motion.div>

          {/* Content layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
            {/* Left Content */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="flex-1 space-y-5 text-center lg:text-left"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight font-Poppins tracking-tight text-white">
                I am a
                <br />
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  <Typewriter
                    words={['Developer', 'Designer', 'Coder']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.
              </p>

              {/* Contact Me Button with Tooltip */}
              <div className="relative group w-fit mx-auto lg:mx-0">
                <button className="relative px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-green-400 to-teal-500 text-black font-semibold rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] text-sm sm:text-base">
                  <span className="relative z-10">Contact Me</span>
                </button>

                {/* Tooltip */}
                <div className="absolute left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 mt-4 px-4 py-3 backdrop-blur-xl bg-zinc-950/90 border border-green-500/20 text-white text-xs sm:text-sm rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out pointer-events-none z-20 space-y-2 w-56 sm:w-64 text-center">
                  <p className="font-semibold tracking-wide hover:text-green-400 transition-colors">📧 ishanbagra2@gmail.com</p>
                  <p className="font-semibold tracking-wide hover:text-teal-400 transition-colors">📞 +91-6377253179</p>
                </div>
              </div>
            </motion.div>

            {/* 3D Glowing Tech Cube */}
            <div className="flex items-center justify-center w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] relative z-10 flex-shrink-0" style={{ perspective: '1000px' }}>
              <motion.div
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="w-28 sm:w-36 h-28 sm:h-36 relative transform-style-preserve-3d"
              >
                {cubeFaces.map(({ icon: Icon, color, transform }, idx) => (
                  <div
                    key={idx}
                    className="absolute inset-0 bg-zinc-950/80 border border-zinc-800 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg shadow-black/80"
                    style={{
                      transform,
                      backfaceVisibility: 'visible',
                      boxShadow: `inset 0 0 15px ${color}33, 0 0 10px ${color}11`,
                      borderColor: `${color}44`,
                    }}
                  >
                    <Icon size={32} style={{ color }} />
                  </div>
                ))}
              </motion.div>
              <div className="absolute -bottom-4 w-28 sm:w-36 h-4 bg-green-500/10 blur-xl rounded-full animate-pulse" />
            </div>

            {/* Right Content */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="flex-1 text-center lg:text-right space-y-3"
            >
              <p className="text-base sm:text-lg text-teal-400 font-medium">
                Available for job opportunities worldwide.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto lg:ml-auto lg:mr-0 font-light">
                Driven to craft seamless, user-centric digital experiences that blend functionality with elegance and purpose.
              </p>
            </motion.div>
          </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-2 tracking-widest text-zinc-500 pt-8 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FaArrowDown className="text-green-400 w-6 h-6 hover:text-teal-400 transition-colors" />
          <p className="text-[10px] uppercase font-mono tracking-widest">scroll down</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
