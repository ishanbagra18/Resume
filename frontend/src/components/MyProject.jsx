import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaStar } from 'react-icons/fa';

const projects = [
  {
    title: 'GeetHub',
    subtitle: 'Full-Stack Audio & Music Platform',
    category: 'Full Stack',
    accent: 'from-green-400 to-teal-400',
    glow: 'rgba(34,197,94,0.15)',
    borderColor: 'hover:border-green-500/50',
    description:
      'A full-stack music streaming platform engineered with Go/Gin micro-architecture and React. Features JWT authentication, playlist creation, audio uploads, likes, listening history, and a persistent global audio player.',
    features: ['JWT Auth', 'Global Player', 'Cloudinary Audio', 'Go / Gin REST API'],
    techStack: ['React', 'Go', 'Gin', 'MongoDB', 'Tailwind CSS', 'JWT', 'Cloudinary'],
    link: 'https://github.com/ishanbagra18/Geethub-clientside',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200',
  },
  {
    title: 'ZeroWaste Platform',
    subtitle: 'Real-Time Surplus Redistribution',
    category: 'Real-time',
    accent: 'from-teal-400 to-emerald-400',
    glow: 'rgba(20,184,166,0.15)',
    borderColor: 'hover:border-teal-500/50',
    description:
      'A multi-stakeholder platform connecting food vendors, NGOs, and volunteers to eliminate surplus food waste. Implements real-time Socket.IO claim notifications, instant messaging, and role-based access control.',
    features: ['Real-time Socket.IO', 'Role-Based Auth', 'Claim Tracking', 'NGO Network'],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Cloudinary', 'Tailwind CSS'],
    link: 'https://github.com/ishanbagra18/zero_waste',
    image: 'https://i.pinimg.com/736x/3f/8e/45/3f8e452f8a44c901812536b4771ca28d.jpg',
  },
  {
    title: 'Portfolio.ai',
    subtitle: 'AI-Powered Resume Portfolio Generator',
    category: 'AI & Supabase',
    accent: 'from-emerald-400 to-teal-300',
    glow: 'rgba(16,185,129,0.15)',
    borderColor: 'hover:border-emerald-500/50',
    description:
      'An intelligent web application that parses developer resumes and automatically generates customizable, production-ready portfolio websites utilizing Supabase database storage, RAG-based LLM parsing, and Twilio OTP auth.',
    features: ['RAG LLM Parsing', 'Supabase DB', 'Twilio OTP Auth', 'Dynamic Templates'],
    techStack: ['React', 'Node.js', 'Express.js', 'Supabase', 'Tailwind CSS', 'RAG', 'LLMs'],
    link: 'https://github.com/ishanbagra18/portfolio.ai',
    image: 'https://i.pinimg.com/736x/21/0c/22/210c22ae1d578cc50ad1b201fd7c9ef0.jpg',
  },
];

const MyProjects = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen bg-black text-white px-6 py-24 lg:px-20 overflow-hidden flex flex-col justify-center relative border-t border-zinc-900"
    >
      {/* Background Glow */}
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[550px] h-[240px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 mb-16 text-center">
        <motion.h1
          style={{ y: yParallax }}
          className="absolute text-[90px] md:text-[150px] font-extrabold bg-gradient-to-r from-green-500 via-teal-500 to-emerald-400 bg-clip-text text-transparent opacity-5 -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap font-AlumniSansSC"
        >
          FEATURED BUILDS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
            My Portfolio & Engineering Work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            MY <span className="bg-gradient-to-r from-green-400 via-teal-300 to-teal-500 bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          <motion.div
            animate={{ width: ['10%', '20%', '5%'] }}
            initial={{ width: 0 }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="h-1 bg-gradient-to-r from-green-400 to-teal-500 mt-3 mx-auto rounded-full"
          />
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 flex flex-col gap-12 max-w-6xl mx-auto w-full">
        {projects.map((p, index) => {
          const isEven = index % 2 === 1;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-2xl p-7 sm:p-9 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-500 ${p.borderColor}`}
              style={{ boxShadow: `0 10px 40px rgba(0,0,0,0.8), inset 0 0 30px ${p.glow}` }}
            >
              <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                
                {/* Details Column */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`text-[10px] uppercase font-mono px-3 py-1 rounded-full bg-gradient-to-r ${p.accent} text-black font-bold shadow-md`}>
                      {p.category}
                    </span>
                    <span className="text-zinc-400 text-xs font-mono flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-[10px]" /> Featured Build
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-green-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-mono text-teal-400 mt-1 font-semibold">{p.subtitle}</p>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                    {p.description}
                  </p>

                  {/* Highlights Badges */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {p.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-zinc-300 font-mono bg-white/[0.03] border border-zinc-800/90 px-3 py-1.5 rounded-xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] px-3 py-1 rounded-full font-mono hover:border-green-500/40 hover:text-green-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${p.accent} text-black font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-lg`}
                    >
                      <FaGithub size={15} />
                      <span>View Repository on GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Image Preview Column with macOS Mockup Frame */}
                <div
                  onClick={() => setPreviewImage({ title: p.title, image: p.image })}
                  className="flex-1 w-full overflow-hidden rounded-2xl border border-zinc-800/90 shadow-2xl relative group/img cursor-pointer bg-zinc-950 flex flex-col"
                >
                  {/* macOS Window Controls Header */}
                  <div className="bg-zinc-900/90 px-4 py-2.5 border-b border-zinc-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[180px]">
                      {p.title.toLowerCase()}.app
                    </span>
                    <div className="w-8" />
                  </div>

                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-56 sm:h-64 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                      <span className="px-4 py-2 bg-zinc-950/90 backdrop-blur-md rounded-full text-xs font-mono text-white border border-zinc-700 flex items-center gap-2 shadow-2xl">
                        <FaExternalLinkAlt size={11} className="text-green-400" /> Click to Enlarge Preview
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Image Modal Preview */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-4 overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 px-2 border-b border-zinc-800">
                <h4 className="text-sm font-bold text-white font-mono">{previewImage.title} — Full Screenshot</h4>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <FaTimes size={18} />
                </button>
              </div>
              <img
                src={previewImage.image}
                alt={previewImage.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl mt-3"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyProjects;



