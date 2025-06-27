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
      <div className="flex flex-col items-center z-10">
        <motion.div
          style={{ y: titleY }}
          className="text-[300px] text-gray-600 w-full text-center mx-auto font-AlumniSansSC"
        >
          ISHAN BAGRA
        </motion.div>

        <div className="flex flex-row gap-15 items-center justify-between px-8 py-12 max-w-8xl mx-auto">
          {/* Left content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-Special">
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
            <p className="text-lg md:text-xl text-gray-600 max-w-xl ">
              Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.
            </p>

            {/* Contact Me button with tooltip */}
            <div className="relative group w-fit">
              <button className="relative px-6 py-3 border-2 border-white text-white rounded-full bg-black overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_#ffffff88]">
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition duration-300 ease-in-out"></span>
                <span className="relative z-10">Contact Me</span>
              </button>

              {/* Tooltip */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 px-5 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white text-sm rounded-xl shadow-[0_4px_30px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none z-20 space-y-1 w-64 text-center">
                <p className="font-semibold tracking-wide">📧 ishanbagra2@gmail.com</p>
                <p className="font-semibold tracking-wide">📞 +91-6377253179</p>
              </div>
            </div>
          </motion.div>

          {/* Middle image or placeholder */}
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full bg-black flex items-center justify-center shadow-lg"></div>

          {/* Right content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="flex-1"
          >
            <p className="text-lg md:text-xl text-gray-700">
              Available for job opportunities worldwide.
            </p>
            <p className="mt-4 text-gray-200 ">
              Driven to craft seamless, user-centric digital experiences that blend functionality with elegance and purpose.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center justify-center gap-2 tracking-wider">
          <FaArrowDown className="text-white w-10 h-10" />
          <p className="text-xs text-gray-600">scroll down</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
