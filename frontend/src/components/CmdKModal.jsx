import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Sun, Moon, Music, Terminal, FileText, Mail, Github, Linkedin, Code, ExternalLink, Volume2, Sparkles, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { soundFx } from '../utils/soundEffects';

const CmdKModal = ({ isOpen, onClose, onToggleSpotify }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFx.playClick();
        if (isOpen) onClose();
        else onClose(true); // signal open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollToSection = (id) => {
    soundFx.playSuccess();
    onClose();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actions = [
    // Navigation
    { id: 'nav-about', category: 'Navigation', title: 'About Me', subtitle: 'Experience, SIH winner & udChalo intern', icon: Sparkles, perform: () => scrollToSection('about') },
    { id: 'nav-skills', category: 'Navigation', title: 'Skills & Tech Stack', subtitle: 'React, Node, Go, Supabase, Tailwind', icon: Code, perform: () => scrollToSection('skills') },
    { id: 'nav-projects', category: 'Navigation', title: 'Featured Projects', subtitle: 'GeetHub, ZeroWaste, Portfolio.ai', icon: Code, perform: () => scrollToSection('projects') },
    { id: 'nav-experience', category: 'Navigation', title: 'Work Experience', subtitle: 'udChalo SDE Internship', icon: FileText, perform: () => scrollToSection('experience') },
    { id: 'nav-profiles', category: 'Navigation', title: 'Coding Profiles', subtitle: 'GitHub & LeetCode stats', icon: Github, perform: () => scrollToSection('profiles') },
    { id: 'nav-certificates', category: 'Navigation', title: 'Certificates & Awards', subtitle: 'SIH, Innerve 9.0, Hackathons', icon: Sparkles, perform: () => scrollToSection('certificates') },
    { id: 'nav-contact', category: 'Navigation', title: 'Contact Me', subtitle: 'Get in touch for opportunities', icon: Mail, perform: () => scrollToSection('contact') },

    // Features & Apps
    { id: 'app-terminal', category: 'Apps', title: 'Open Interactive Terminal', subtitle: 'CLI mode with custom bash commands', icon: Terminal, perform: () => { soundFx.playSuccess(); onClose(); navigate('/terminal'); } },
    { id: 'app-spotify', category: 'Apps', title: 'Toggle Spotify Player', subtitle: 'Play background coding jams & ambient audio', icon: Music, perform: () => { soundFx.playSuccess(); onClose(); onToggleSpotify(); } },

    // Quick Actions
    { id: 'act-theme', category: 'Quick Actions', title: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode', subtitle: 'Toggle website theme palette', icon: isDark ? Sun : Moon, perform: () => { soundFx.playClick(); toggleTheme(); onClose(); } },
    { id: 'act-resume', category: 'Quick Actions', title: 'Download / View Resume', subtitle: 'Open Ishan Bagra Google Drive Resume', icon: FileText, perform: () => { soundFx.playSuccess(); window.open('https://drive.google.com/file/d/1PjRvjmDntAhiu1-Y_h8uoU8zTx4uZzqV/view?usp=sharing', '_blank'); onClose(); } },
    { id: 'act-email', category: 'Quick Actions', title: 'Copy Email Address', subtitle: 'ishanbagra18@gmail.com', icon: Mail, perform: () => { soundFx.playSuccess(); navigator.clipboard.writeText('ishanbagra18@gmail.com'); alert('Email copied to clipboard!'); onClose(); } },
    { id: 'act-sound', category: 'Quick Actions', title: 'Toggle UI Sound FX', subtitle: 'Web Audio synthesized feedback', icon: Volume2, perform: () => { const isMuted = soundFx.toggleMute(); alert(isMuted ? 'Sound FX Muted' : 'Sound FX Enabled'); onClose(); } },

    // Social Links
    { id: 'soc-github', category: 'Social Links', title: 'GitHub Profile', subtitle: 'github.com/ishanbagra18', icon: Github, perform: () => { window.open('https://github.com/ishanbagra18', '_blank'); onClose(); } },
    { id: 'soc-linkedin', category: 'Social Links', title: 'LinkedIn Profile', subtitle: 'linkedin.com/in/ishan-bagra-52aa95289', icon: Linkedin, perform: () => { window.open('https://www.linkedin.com/in/ishan-bagra-52aa95289/', '_blank'); onClose(); } },
  ];

  const filteredActions = actions.filter(action =>
    action.title.toLowerCase().includes(query.toLowerCase()) ||
    action.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      soundFx.playHover();
      setSelectedIndex(prev => (prev + 1) % (filteredActions.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      soundFx.playHover();
      setSelectedIndex(prev => (prev - 1 + (filteredActions.length || 1)) % (filteredActions.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].perform();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 dark:bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-green-500/30 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] dark:shadow-[0_25px_60px_rgba(34,197,94,0.15)] overflow-hidden flex flex-col font-sans"
        >
          {/* Search Header Input */}
          <div className="relative border-b border-slate-200 dark:border-zinc-800 p-4 flex items-center gap-3">
            <Search className="w-5 h-5 text-green-500 flex-shrink-0 animate-pulse" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
              onKeyDown={handleKeyDown}
              placeholder="Type a command, search section, or action... (e.g. Spotify, Resume, Terminal)"
              className="w-full bg-transparent text-slate-900 dark:text-white placeholder-zinc-400 focus:outline-none text-base font-medium"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-zinc-400 hover:text-white p-1">
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block px-2 py-1 text-[10px] font-mono font-semibold text-zinc-500 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-900 rounded border border-slate-300 dark:border-zinc-800">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
            {filteredActions.length === 0 ? (
              <div className="py-12 text-center text-zinc-400 space-y-2">
                <Command className="w-8 h-8 mx-auto opacity-40 text-green-500" />
                <p className="text-sm">No commands or sections found for "{query}"</p>
                <p className="text-xs text-zinc-500">Try searching for "Spotify", "Terminal", "Resume", or "Projects"</p>
              </div>
            ) : (
              filteredActions.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                const IconComponent = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={item.perform}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-3 rounded-2xl flex items-center justify-between transition-all duration-150 ${
                      isSelected
                        ? 'bg-green-500/10 dark:bg-green-500/15 border border-green-500/30 text-green-600 dark:text-green-400 shadow-sm'
                        : 'hover:bg-slate-100 dark:hover:bg-zinc-900/60 text-slate-700 dark:text-zinc-300 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-green-500 text-black' : 'bg-slate-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <p className="text-sm font-bold truncate text-slate-900 dark:text-white flex items-center gap-2">
                          {item.title}
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 font-normal">
                            {item.category}
                          </span>
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{item.subtitle}</p>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-green-500 flex-shrink-0">
                        <span>Execute</span>
                        <kbd className="px-1.5 py-0.5 bg-green-500/20 rounded border border-green-500/40 text-[9px]">↵</kbd>
                      </div>
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="border-t border-slate-200 dark:border-zinc-800 p-3 bg-slate-50 dark:bg-zinc-900/50 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-zinc-800 rounded">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-zinc-800 rounded">↓</kbd>
                <span>Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-zinc-800 rounded">↵</kbd>
                <span>Select</span>
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-zinc-800 rounded">Ctrl K</kbd>
              <span>Toggle</span>
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CmdKModal;
