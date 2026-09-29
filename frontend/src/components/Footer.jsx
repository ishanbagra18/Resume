import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp, FaHeart, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiFramer, SiTailwindcss } from 'react-icons/si';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/ishanbagra18', label: 'GitHub', hoverColor: 'hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-500 dark:hover:text-purple-400', hoverGlow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ishan-bagra-52aa95289/', label: 'LinkedIn', hoverColor: 'hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 dark:hover:text-blue-400', hoverGlow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]' },
  { icon: FaInstagram, href: 'https://www.instagram.com/ishanbagra18/?next=%2F', label: 'Instagram', hoverColor: 'hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-500 dark:hover:text-pink-400', hoverGlow: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]' },
  { icon: FaEnvelope, href: 'mailto:ishanbagra2@gmail.com', label: 'Email', hoverColor: 'hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-500 dark:hover:text-green-400', hoverGlow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]' },
];

const techStack = [
  { icon: FaReact, name: 'React', color: 'text-cyan-400' },
  { icon: SiTailwindcss, name: 'Tailwind', color: 'text-sky-400' },
  { icon: SiFramer, name: 'Framer', color: 'text-purple-400' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-black text-slate-900 dark:text-white px-6 py-16 lg:px-20 border-t border-slate-200 dark:border-zinc-900 transition-colors duration-400 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Top row: Brand + Back to top */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-500 to-teal-400 p-[1.5px] shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <div className="w-full h-full bg-slate-100 dark:bg-black rounded-full flex items-center justify-center font-bold text-sm text-slate-900 dark:text-white">
                IB
              </div>
            </div>
            <div>
              <p className="font-bold text-base font-Poppins text-slate-900 dark:text-white">
                Ishan Bagra<span className="text-green-500 dark:text-green-400">.</span>
              </p>
              <p className="text-[11px] text-zinc-500 font-mono">Full Stack Developer</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/40 transition-all duration-300 group shadow-sm hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]"
          >
            <span>Back to top</span>
            <FaArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-zinc-800 to-transparent mb-8" />

        {/* Middle row: Social links + Built with */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <motion.a
                key={item.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 transition-all duration-300 shadow-sm ${item.hoverColor} ${item.hoverGlow}`}
                title={item.label}
              >
                <item.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Built with */}
          <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500">
            <span>Built with</span>
            <div className="flex items-center gap-2">
              {techStack.map(({ icon: Icon, name, color }) => (
                <div key={name} className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800">
                  <Icon className={`${color} text-xs`} />
                  <span className="text-slate-600 dark:text-zinc-400">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-zinc-800 to-transparent mb-6" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-zinc-500 font-mono flex items-center gap-1.5">
            © {new Date().getFullYear()} Ishan Bagra. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="text-red-500 text-[10px]" />
            </motion.span>
            in India
          </p>
          <p className="text-[11px] text-zinc-500/70 font-mono">
            Designed & Developed by Ishan Bagra
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
