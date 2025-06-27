import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiMongodb, SiExpress, SiFramer, SiGreensock,
  SiTailwindcss, SiFigma, SiGit
} from 'react-icons/si';

const techs = [
  { name: 'HTML5', icon: SiHtml5, color: '#E44D26' },
  { name: 'CSS3', icon: SiCss3, color: '#264de4' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F0DB4F' },
  { name: 'React', icon: SiReact, color: '#61DBFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'GSAP', icon: SiGreensock, color: '#88CE02' },
  { name: 'Framer Motion', icon: SiFramer, color: '#e64aff' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Git', icon: SiGit, color: '#F1502F' },
];

const TechStack = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-black text-white px-6 py-20 lg:px-24 overflow-hidden flex flex-col justify-center"
    >
      {/* === Section Glow Background === */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-green-400 blur-3xl opacity-10 rounded-full pointer-events-none" />

      {/* === Heading Wrapper with Background Text === */}
      <div className="relative z-10 mb-16 text-center">
        {/* Background “SKILLS” — now top-left aligned */}
        <motion.h1
          style={{ y: yParallax }}
          className="absolute text-[100px] md:text-[140px] font-extrabold bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent opacity-10 -top-8 left-0 select-none pointer-events-none whitespace-nowrap"
        >
          SKILLS
        </motion.h1>

        {/* Foreground Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            TECH-<span className="text-green-500">STACK</span>
          </h2>
          <motion.div
            animate={{ width: ['10%', '20%', '0%'] }}
            initial={{ width: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="h-1 bg-gradient-to-r from-green-400 to-teal-500 mt-2 mx-auto rounded"
          />
        </motion.div>
      </div>

      {/* === Tech Cards Grid === */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {techs.map(({ name, icon: Icon, color }, index) => (
          <motion.div
            key={name}
            className="relative group bg-white/5 border border-gray-700 backdrop-blur-md p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-md cursor-pointer transition-all duration-300 ease-in-out"
            whileHover={{
              scale: 1.1,
              rotateX: 5,
              rotateY: 5,
              borderRadius: ['1rem', '2rem', '1rem'],
              boxShadow: `0 0 30px ${color}77`,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ perspective: 1000 }}
          >
            {/* Glow Ring */}
            <div
              className="absolute -inset-1 z-0 rounded-[inherit] blur-xl opacity-60 transition duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at center, ${color}66, transparent 70%)`,
              }}
            />

            {/* Icon and Label */}
            <div className="relative z-10">
              <Icon size={48} style={{ color }} />
              <p className="mt-3 text-white text-sm md:text-base font-medium">{name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
