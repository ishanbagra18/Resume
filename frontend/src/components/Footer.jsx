import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white px-6 py-12 lg:px-20 border-t border-zinc-900 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left: Copyright & Name */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-bold text-base font-Poppins text-white">
            Ishan Bagra<span className="text-green-400">.</span>
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            © {new Date().getFullYear()} Ishan Bagra. Built with React, Tailwind & Framer Motion.
          </p>
        </div>

        {/* Center: Social Icons with hover glow */}
        <div className="flex items-center gap-4 text-lg">
          <a
            href="https://github.com/ishanbagra18"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ishan-bagra-52aa95289/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/ishanbagra18/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
            title="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="mailto:ishanbagra2@gmail.com"
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
            title="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-green-400 hover:border-green-500/40 transition-all duration-300 group"
        >
          <span>Back to top</span>
          <FaArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;

