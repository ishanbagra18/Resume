//teminal page added

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TerminalPage = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([
    { type: 'output', text: "Welcome to Ishan Bagra's interactive shell v2.0.0." },
    { type: 'output', text: 'Type "help" to see a list of available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: [
      "AVAILABLE COMMANDS:",
      "  about    - Detailed information about my background and achievements",
      "  skills   - My complete technical stack categorized",
      "  projects - In-depth breakdown of my key projects and their tech stacks",
      "  contact  - All ways to reach me",
      "  clear    - Clears the terminal screen",
      "  gui      - Return to the visual GUI portfolio"
    ],
    about: [
      "ABOUT ME:",
      "I am Ishan Bagra, a Developer, Designer, and Coder passionate about building digital experiences.",
      "Currently pursuing Computer Science and Engineering at IIIT Kota (Batch 2023-2027).",
      "",
      "KEY ACHIEVEMENTS:",
      "• udChalo SDE Internship: Built polished UI components in React Native and optimized performance.",
      "• Smart India Hackathon (SIH) 2025: National Level Winner.",
      "• Innerve 9.0 Hackathon (AIT Pune): Secured Top 10 rank out of 10,000+ participants.",
      "",
      "My focus is on creating high-quality applications with premium animations and responsive designs."
    ],
    skills: [
      "TECHNICAL SKILLS:",
      "",
      "[ FRONTEND ]",
      "React, HTML5, CSS3, JavaScript, Tailwind CSS, Framer Motion, GSAP",
      "",
      "[ BACKEND ]",
      "Node.js, Express.js, Go, Gin, Python",
      "",
      "[ DATABASES ]",
      "MongoDB, Supabase",
      "",
      "[ TOOLS & VERSION CONTROL ]",
      "Git, Figma"
    ],
    projects: [
      "PROJECT HIGHLIGHTS:",
      "",
      "1. GeetHub",
      "   Description: A full-stack music streaming platform featuring JWT auth, playlists, likes, ",
      "                and a persistent global music player.",
      "   Tech Stack: React, Go, Gin, MongoDB, Cloudinary, Tailwind CSS",
      "",
      "2. ZeroWaste Platform",
      "   Description: Platform connecting vendors, NGOs, and volunteers to redistribute surplus ",
      "                food with secure real-time notifications.",
      "   Tech Stack: React, Node.js, Socket.IO, Express.js, MongoDB, Cloudinary",
      "",
      "3. Portfolio.ai",
      "   Description: An AI-powered generator that creates customizable developer portfolios ",
      "                using Twilio OTP and resume-based data RAG.",
      "   Tech Stack: React, Node.js, Supabase, LLMs, RAG, Tailwind CSS"
    ],
    contact: [
      "CONTACT INFORMATION:",
      "",
      "Email:    ishanbagra2@gmail.com",
      "Phone:    +91-6377253179",
      "GitHub:   https://github.com/ishanbagra18",
      "LinkedIn: https://www.linkedin.com/in/ishan-bagra-52aa95289/"
    ]
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    const newHistory = [...history, { type: 'input', text: `ishan@portfolio:~$ ${trimmedCmd}` }];

    if (trimmedCmd === 'clear') {
      setHistory([]);
    } else if (trimmedCmd === 'gui' || trimmedCmd === 'exit') {
      setHistory([...newHistory, { type: 'output', text: 'Closing terminal session... returning to GUI.' }]);
      setTimeout(() => navigate('/'), 600);
    } else if (commands[trimmedCmd]) {
      const outputLines = commands[trimmedCmd].map(text => ({ type: 'output', text }));
      setHistory([...newHistory, ...outputLines]);
    } else {
      setHistory([...newHistory, { type: 'error', text: `Command not found: ${trimmedCmd}. Type 'help' for a list of commands.` }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(input);
      setInput('');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section className="min-h-screen w-full bg-black relative flex items-center justify-center p-4 md:p-12 overflow-hidden font-mono">
      
      {/* Background Animated Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-green-500/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/15 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Terminal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl h-[80vh] flex flex-col bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(34,197,94,0.1)] overflow-hidden"
        onClick={focusInput}
      >
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10 select-none">
          {/* Mac-style Window Controls */}
          <div className="flex space-x-2.5 w-24">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer" onClick={() => navigate('/')} title="Close" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 cursor-pointer" />
          </div>
          
          {/* Centered Title */}
          <div className="flex-1 text-center text-xs md:text-sm text-zinc-400 font-semibold tracking-wide">
            guest@ishan-os <span className="text-zinc-600 px-1">—</span> bash <span className="text-zinc-600 px-1">—</span> 80x24
          </div>
          
          {/* Right side spacer for flex balance */}
          <div className="w-24 text-right">
            <button 
              onClick={() => navigate('/')}
              className="text-xs text-zinc-500 hover:text-white transition-colors"
            >
              Exit ✕
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar text-sm md:text-base leading-relaxed space-y-2">
          {history.map((line, index) => (
            <div 
              key={index} 
              className={
                line.type === 'error' ? 'text-red-400 font-medium' : 
                line.type === 'input' ? 'text-zinc-100 font-medium' : 'text-teal-300/90 font-light'
              }
            >
              {line.text}
            </div>
          ))}
          
          {/* Active Input Line */}
          <div className="flex items-center text-zinc-100 mt-4">
            <span className="mr-3 font-semibold text-green-400">ishan@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-zinc-100 caret-zinc-100 w-full focus:ring-0"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
          {/* Invisible div to scroll into view */}
          <div ref={bottomRef} className="h-6" />
        </div>
      </motion.div>

    </section>
  );
};

export default TerminalPage;
