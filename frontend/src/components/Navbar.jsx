import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const navSections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

const externalLinks = [
  { label: 'Resume', icon: FaFileAlt, href: 'https://drive.google.com/file/d/1PjRvjmDntAhiu1-Y_h8uoU8zTx4uZzqV/view?usp=sharing' },
  { label: 'GitHub', icon: FaGithub, href: 'https://github.com/ishanbagra18' },
  { label: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/ishan-bagra-52aa95289/' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionElements = navSections.map(sec => document.getElementById(sec.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const sec = sectionElements[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-3 sm:px-6 md:px-8">
      <nav
        className={`max-w-6xl mx-auto backdrop-blur-xl transition-all duration-300 rounded-full border px-4 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center ${
          scrolled
            ? 'bg-black/75 border-green-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(34,197,94,0.1)]'
            : 'bg-zinc-950/40 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        }`}
      >
        {/* Left: Brand Name / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group text-left"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-500 to-teal-400 p-[1px] shadow-[0_0_12px_rgba(34,197,94,0.4)]">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center font-bold text-xs text-white group-hover:bg-transparent transition-all">
              IB
            </div>
          </div>
          <span className="font-bold text-sm tracking-wider text-white hidden xs:inline font-Poppins group-hover:text-green-400 transition-colors">
            ISHAN<span className="text-green-400">.</span>
          </span>
        </button>

        {/* Center: Desktop Section Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/5">
          {navSections.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 font-Poppins ${
                  isActive
                    ? 'text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-full -z-10 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right: External Social & Resume Links */}
        <div className="hidden sm:flex items-center gap-3">
          {externalLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 hover:border-green-500/40 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300"
              title={item.label}
            >
              <item.icon size={13} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-green-400 transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 max-w-6xl mx-auto bg-zinc-950/95 border border-green-500/30 rounded-3xl p-5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col gap-4 text-white"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-3">Sections</span>
              {navSections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-400 border border-green-500/30'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="h-[1px] bg-zinc-800 my-1" />

            <div className="flex flex-wrap gap-2">
              {externalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-green-500/50 hover:text-green-400 transition-all"
                >
                  <item.icon size={14} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

