// HomePage.jsx
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from '../../Reactbits/Particles/Particles';
import { FaArrowDown } from 'react-icons/fa';
import gsap from 'gsap';

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
      className="relative w-full min-h-screen flex bg-black text-white px-6 md:px-16 py-10 overflow-hidden"
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#cccccc']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      {/* Main content */}
      <div className="flex flex-col items-center w-full z-10">
        {/* Name Title */}
        <motion.div
          style={{ y: titleY }}
          className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px] xl:text-[250px] text-gray-600 text-center font-AlumniSansSC leading-none"
        >
          ISHAN BAGRA
        </motion.div>

        {/* Content layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 px-4 py-10">
          {/* Left Content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-Special">
              I am a{' '}
              <span className="text-green-600">
                <Typewriter
                  words={['Developer', 'Designer', 'Freelancer']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
              Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.
            </p>

            {/* Contact Me Button with Tooltip */}
            <div className="relative group w-fit mx-auto lg:mx-0">
              <button className="relative px-6 py-3 border-2 border-white text-white rounded-full bg-black overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_#ffffff88]">
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition duration-300 ease-in-out"></span>
                <span className="relative z-10">Contact Me</span>
              </button>

              {/* Tooltip */}
              <div className="absolute left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 mt-4 px-5 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white text-sm rounded-xl shadow-[0_4px_30px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none z-20 space-y-1 w-64 text-center">
                <p className="font-semibold tracking-wide">📧 ishanbagra2@gmail.com</p>
                <p className="font-semibold tracking-wide">📞 +91-6377253179</p>
              </div>
            </div>
          </motion.div>

          {/* Center Circle or Image Placeholder */}
          <div className="w-[150px] sm:w-[200px] md:w-[250px] h-[150px] sm:h-[200px] md:h-[250px] rounded-full bg-black  shadow-xl"></div>

          {/* Right Content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="flex-1 text-center lg:text-right space-y-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              Available for job opportunities worldwide.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Driven to craft seamless, user-centric digital experiences that blend functionality with elegance and purpose.
            </p>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex flex-col items-center justify-center gap-2 tracking-wider">
          <FaArrowDown className="text-white w-8 h-8 sm:w-10 sm:h-10" />
          <p className="text-xs text-gray-600">scroll down</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
