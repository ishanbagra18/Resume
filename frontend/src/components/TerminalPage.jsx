import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Terminal, Github, Linkedin, Mail, Phone, Globe,
  ChevronRight, ArrowUpRight, Volume2, VolumeX,
  Copy, ExternalLink, Sparkles, Code2, BriefcaseBusiness,
  CornerDownLeft, X, Minus, ShieldAlert
} from "lucide-react";
import CyberMysteryModal from "./CyberMysteryModal";

const LINKS = [
  {
    label: "Email",
    value: "ishanbagra2@gmail.com",
    href: "mailto:ishanbagra2@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/ishan-bagra-52aa95289/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/ishanbagra18",
    icon: Github,
  },
  {
    label: "Phone",
    value: "+91 63772 53179",
    href: "tel:+916377253179",
    icon: Phone,
  },
];

const QUICK_COMMANDS = [
  { command: "about", label: "About me", icon: Sparkles },
  { command: "skills", label: "Tech stack", icon: Code2 },
  { command: "projects", label: "Projects", icon: Terminal },
  { command: "mystery", label: "Mystery Game", icon: ShieldAlert },
  { command: "contact", label: "Get in touch", icon: Mail },
];

const OUTPUTS = {
  help: [
    { text: "AVAILABLE COMMANDS", type: "heading" },
    { text: "" },
    { text: "about        About me and my achievements" },
    { text: "skills       Explore my technical stack" },
    { text: "projects     Explore my featured projects" },
    { text: "experience   Professional experience" },
    { text: "mystery      Play Case #404: Cyber Forensics Mystery Game", type: "accent" },
    { text: "contact      All contact information" },
    { text: "email        Send me an email" },
    { text: "phone        Call me" },
    { text: "linkedin     Open my LinkedIn profile" },
    { text: "github       Open my GitHub profile" },
    { text: "portfolio    Return to my visual portfolio" },
    { text: "resume       Find my resume" },
    { text: "neofetch     Developer system information" },
    { text: "clear        Clear the terminal" },
    { text: "exit         Return to the visual portfolio" },
    { text: "" },
    { text: "TIP: Use ↑ / ↓ for command history and Tab to autocomplete.", type: "muted" },
  ],

  mystery: [
    { text: "CASE FILE #404: PROTOCOL OMEGA // CRITICAL INTRUSION", type: "heading" },
    { text: "" },
    { text: "At 03:42 AM, an unauthorized breach compromised Ishan's Git server.", type: "error" },
    { text: "The Smart India Hackathon production kernel has been encrypted." },
    { text: "The perpetrator left encrypted evidence across 4 digital crime scenes:" },
    { text: "  [1] Intercepted Network Headers (Base64 origin payload)" },
    { text: "  [2] Malicious Git Commit 7d08b3 (Logic bomb backdoor salt)" },
    { text: "  [3] Encrypted RF Audio Spectrogram (Signal carrier node 404)" },
    { text: "  [4] Prime Suspect Dossiers (PGP signature verification)" },
    { text: "" },
    { text: "Type 'mystery start' or click the prompt button below to launch the Console.", type: "accent" },
  ],

  about: [
    { text: "ABOUT ME", type: "heading" },
    { text: "" },
    { text: "Ishan Bagra — Developer, Designer & Coder." },
    { text: "B.Tech Computer Science & Engineering | IIIT Kota" },
    { text: "Batch: 2023–2027" },
    { text: "" },
    { text: "ACHIEVEMENTS", type: "heading" },
    { text: "• Smart India Hackathon 2025 — National Winner" },
    { text: "• Software Development Intern at udChalo" },
    { text: "• Innerve 9.0 — Top 10 achievement" },
    { text: "" },
    { text: "I build polished interfaces and full-stack applications" },
    { text: "with a focus on usability, performance, and real-world impact." },
  ],

  skills: [
    { text: "TECHNICAL STACK", type: "heading" },
    { text: "" },
    { text: "[ FRONTEND ]", type: "accent" },
    { text: "React, JavaScript, HTML, CSS, Tailwind CSS" },
    { text: "React Native, Framer Motion" },
    { text: "" },
    { text: "[ BACKEND ]", type: "accent" },
    { text: "Node.js, Express.js, Go, Gin, Python" },
    { text: "REST APIs, JWT, Socket.IO" },
    { text: "" },
    { text: "[ DATABASES & TOOLS ]", type: "accent" },
    { text: "MongoDB, Supabase, Cloudinary, Git, Figma" },
  ],

  projects: [
    { text: "FEATURED PROJECTS", type: "heading" },
    { text: "" },
    { text: "01 / GEETHUB", type: "accent" },
    { text: "Full-stack music streaming with playlists and a persistent player." },
    { text: "Stack: React, Go, Gin, MongoDB, Cloudinary" },
    { text: "" },
    { text: "02 / ZEROWASTE", type: "accent" },
    { text: "Connects vendors, NGOs, and volunteers to redistribute surplus food." },
    { text: "Stack: React, Node.js, Express, Socket.IO, MongoDB" },
    { text: "" },
    { text: "03 / PROFOLIO", type: "accent" },
    { text: "Portfolio generator with OTP authentication and AI-powered features." },
    { text: "Stack: React, Node.js, Supabase, LLMs, RAG" },
    { text: "" },
    { text: "Run 'gui' to explore the visual portfolio." },
  ],

  experience: [
    { text: "EXPERIENCE & ACHIEVEMENTS", type: "heading" },
    { text: "" },
    { text: "udChalo / Software Development Intern", type: "accent" },
    { text: "Worked on React Native UI components and application improvements." },
    { text: "" },
    { text: "Smart India Hackathon 2025", type: "accent" },
    { text: "National-level winner; contributed to the Orkestra solution." },
    { text: "" },
    { text: "Innerve 9.0", type: "accent" },
    { text: "Top 10 achievement at AIT Pune." },
  ],

  neofetch: [
    { text: "ISHAN OS 2.0", type: "heading" },
    { text: "" },
    { text: "USER       : ishan@portfolio" },
    { text: "ROLE       : Full-Stack Developer" },
    { text: "EDUCATION  : IIIT Kota" },
    { text: "STACK      : React + Node.js + Go" },
    { text: "STATUS     : Building something awesome" },
  ],
};

const TerminalPage = () => {
  const navigate = useNavigate();

  const [history, setHistory] = useState([
    { id: 1, text: "ISHAN OS 2.0.0", type: "heading" },
    { id: 2, text: "Interactive developer terminal initialized.", type: "system" },
    { id: 3, text: 'Type "help" to explore commands.', type: "system" },
    { id: 4, text: "", type: "blank" },
  ]);

  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [isMysteryOpen, setIsMysteryOpen] = useState(false);

  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const audioRef = useRef(null);
  const nextId = useRef(5);

  const append = useCallback((items) => {
    setHistory((previous) => [
      ...previous,
      ...items.map((item) => ({
        id: nextId.current++,
        ...(typeof item === "string" ? { text: item } : item),
        type: typeof item === "string" ? "output" : item.type || "output",
      })),
    ]);
  }, []);

  const playSound = useCallback((frequency = 650) => {
    if (!soundEnabled) return;

    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioRef.current) audioRef.current = new AudioContextClass();

      const ctx = audioRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.frequency.value = frequency;
      oscillator.type = "sine";

      gain.gain.setValueAtTime(0.018, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);

      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.045);
    } catch {
      // Audio is optional.
    }
  }, [soundEnabled]);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();

    return () => {
      audioRef.current?.close();
      audioRef.current = null;
    };
  }, []);

  const openLink = (href) => {
    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      window.location.href = href;
      return;
    }

    window.open(href, "_blank", "noopener,noreferrer");
  };

  const showContact = () => {
    append([
      { text: "LET'S CONNECT", type: "heading" },
      "",
      {
        text: "Email       ishanbagra2@gmail.com",
        href: LINKS[0].href,
      },
      {
        text: "LinkedIn    linkedin.com/in/ishan-bagra-52aa95289",
        href: LINKS[1].href,
      },
      {
        text: "GitHub      github.com/ishanbagra18",
        href: LINKS[2].href,
      },
      {
        text: "Phone       +91 63772 53179",
        href: LINKS[3].href,
      },
      "",
      { text: "Select any link to connect with me.", type: "muted" },
    ]);
  };

  const executeCommand = (raw) => {
    const value = raw.trim();
    if (!value) return;

    const [command, ...args] = value.split(/\s+/);
    const cmd = command.toLowerCase();

    playSound(850);

    setHistory((previous) => [
      ...previous,
      {
        id: nextId.current++,
        text: value,
        type: "input",
      },
    ]);

    setCommandHistory((previous) => [...previous, value]);
    setHistoryIndex(-1);
    setInput("");
    setSuggestionsOpen(false);

    if (cmd === "clear" || cmd === "cls") {
      setHistory([]);
      return;
    }

    if (cmd === "help") {
      append(OUTPUTS.help);
      return;
    }

    if (OUTPUTS[cmd]) {
      append(OUTPUTS[cmd]);
      return;
    }

    if (cmd === "contact") {
      showContact();
      return;
    }

    if (cmd === "email") {
      append(["Opening your email application..."]);
      openLink(LINKS[0].href);
      return;
    }

    if (cmd === "phone") {
      append(["Opening your phone application..."]);
      openLink(LINKS[3].href);
      return;
    }

    if (cmd === "linkedin") {
      append(["Opening LinkedIn..."]);
      openLink(LINKS[1].href);
      return;
    }

    if (cmd === "github") {
      append(["Opening GitHub..."]);
      openLink(LINKS[2].href);
      return;
    }

    if (cmd === "portfolio" || cmd === "gui" || cmd === "exit") {
      append(["Returning to the visual portfolio..."]);
      window.setTimeout(() => navigate("/"), 350);
      return;
    }

    if (cmd === "resume") {
      append([
        {
          text: "Open my LinkedIn profile to find my professional background.",
          href: LINKS[1].href,
        },
        {
          text: "A direct resume URL has not been configured yet.",
          type: "muted",
        },
      ]);
      return;
    }

    if (cmd === "whoami") {
      append(["ishan@portfolio", "Developer. Builder. Problem solver."]);
      return;
    }

    if (cmd === "pwd") {
      append(["/home/ishan/portfolio"]);
      return;
    }

    if (cmd === "ls") {
      append(["about/  skills/  projects/  experience/  contact/"]);
      return;
    }

    if (cmd === "date") {
      append([new Date().toLocaleString()]);
      return;
    }

    if (cmd === "echo") {
      append([args.join(" ")]);
      return;
    }

    if (cmd === "mystery" || cmd === "game" || cmd === "investigate" || cmd === "case") {
      if (args[0] === "start" || args[0] === "play") {
        append([{ text: "Launching Cyber Mystery Forensic Console...", type: "system" }]);
        setIsMysteryOpen(true);
        return;
      }
      append([
        ...OUTPUTS.mystery,
        {
          text: "▶ CLICK TO LAUNCH CYBER DETECTIVE CONSOLE",
          type: "action",
          action: () => setIsMysteryOpen(true),
        },
      ]);
      return;
    }

    if (cmd === "sudo") {
      append(["Nice try! You already have root access to your own career."]);
      return;
    }

    append([
      { text: `Command not found: ${cmd}`, type: "error" },
      { text: 'Type "help" to see available commands.', type: "muted" },
    ]);
  };

  const matchingCommands = [
    ...Object.keys(OUTPUTS),
    "contact", "email", "phone", "linkedin", "github",
    "portfolio", "gui", "exit", "resume", "whoami",
    "pwd", "ls", "date", "echo", "clear", "mystery", "game", "investigate",
  ].filter((command) => command.startsWith(input.trim().toLowerCase()));

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      executeCommand(input);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!commandHistory.length) return;

      const index = historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1);

      setHistoryIndex(index);
      setInput(commandHistory[index]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex === -1) return;

      const index = historyIndex + 1;

      if (index >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(index);
        setInput(commandHistory[index]);
      }
    } else if (event.key === "Tab") {
      event.preventDefault();
      if (matchingCommands.length === 1) setInput(matchingCommands[0]);
    }
  };

  const copyOutput = async () => {
    const text = history.map((line) => line.text).join("\n");

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      append([{ text: "Clipboard access unavailable.", type: "error" }]);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050706] px-2 sm:px-4 py-6 font-mono text-zinc-300">

      {/* Same emerald and teal palette as the original portfolio */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex h-[88vh] min-h-[590px] max-h-[920px] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/[0.10] bg-[#090c0a]/95 shadow-[0_30px_100px_rgba(0,0,0,.55),0_0_60px_rgba(16,185,129,.06)] backdrop-blur-2xl"
      >
        {/* Window header */}
        <header className="flex min-h-[62px] items-center justify-between gap-3 border-b border-white/[0.08] bg-white/[0.025] px-4 sm:px-6">
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => navigate("/")}
              title="Return to portfolio"
              aria-label="Close terminal"
              className="h-3 w-3 rounded-full bg-[#ff5f57] transition hover:brightness-125"
            />
            <button
              onClick={() => setHistory([])}
              title="Clear terminal"
              aria-label="Clear terminal"
              className="h-3 w-3 rounded-full bg-[#febc2e] transition hover:brightness-125"
            />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>

          <div className="flex min-w-0 items-center justify-center gap-2 text-xs text-zinc-500 sm:text-sm">
            <Terminal size={15} className="shrink-0 text-emerald-400" />
            <span className="truncate">ishan@portfolio</span>
            <span className="hidden text-zinc-700 sm:inline">— zsh</span>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={() => setSoundEnabled((value) => !value)}
              title="Toggle terminal sounds"
              aria-label="Toggle terminal sounds"
              className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 hover:text-emerald-300"
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            <button
              onClick={copyOutput}
              title="Copy terminal output"
              aria-label="Copy terminal output"
              className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 hover:text-emerald-300"
            >
              <Copy size={15} />
            </button>

            <button
              onClick={() => navigate("/")}
              className="ml-1 hidden items-center gap-1.5 rounded-lg border border-white/[0.08] px-3 py-2 text-xs text-zinc-400 transition hover:border-emerald-400/30 hover:text-emerald-300 sm:flex"
            >
              Exit <ArrowUpRight size={13} />
            </button>
          </div>
        </header>

        {/* Session bar */}
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.055] px-5 py-3 sm:px-7">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-zinc-500 sm:text-[11px]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Session active
            <span className="text-zinc-700">/</span>
            Interactive shell
          </div>
          <span className="text-[10px] text-zinc-600">ISHAN OS 2.0</span>
        </div>

        {/* Scrollable terminal */}
        <div
          ref={terminalRef}
          className="portfolio-terminal-scroll min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8"
          role="log"
          aria-live="polite"
        >
          <div className="mx-auto max-w-4xl">

            {/* Welcome section */}
            <div className="mb-7 flex items-start gap-4">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] sm:flex">
                <Terminal size={23} className="text-emerald-400" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Welcome to my terminal
                    <span className="text-emerald-400">.</span>
                  </h1>
                  <span className="rounded-md border border-emerald-400/20 bg-emerald-400/[0.07] px-2 py-0.5 text-[10px] text-emerald-300">
                    v2.0.0
                  </span>
                </div>

                <p className="mt-2 max-w-xl text-xs leading-6 text-zinc-500 sm:text-sm">
                  Explore my work, technical skills, and experience.
                  Let's build something meaningful.
                </p>
              </div>
            </div>

            {/* Quick command cards */}
            <div className="mb-7 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {QUICK_COMMANDS.map(({ command, label, icon: Icon }) => (
                <button
                  key={command}
                  onClick={() => command === "mystery" ? setIsMysteryOpen(true) : executeCommand(command)}
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/25 hover:bg-emerald-400/[0.045] sm:px-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.045] text-zinc-500 transition group-hover:bg-emerald-400/10 group-hover:text-emerald-300">
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-zinc-300">{label}</div>
                    <div className="mt-1 truncate text-[10px] text-zinc-600">{command}</div>
                  </div>
                  <ChevronRight size={13} className="ml-auto hidden text-zinc-700 group-hover:text-emerald-400 sm:block" />
                </button>
              ))}
            </div>

            {/* Contact cards */}
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                <span>Find me online</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {LINKS.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 transition hover:border-emerald-400/25 hover:bg-emerald-400/[0.045]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/10 bg-emerald-400/[0.06] text-emerald-400 transition group-hover:bg-emerald-400/10">
                      <Icon size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-zinc-200">{label}</p>
                      <p className="mt-1 break-all text-[10px] leading-4 text-zinc-500 group-hover:text-emerald-300/80 sm:text-[11px]">
                        {value}
                      </p>
                    </div>

                    <ExternalLink size={13} className="shrink-0 text-zinc-700 transition group-hover:text-emerald-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Command history */}
            <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-zinc-600">
              <span>Terminal output</span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="space-y-1">
              <AnimatePresence initial={false}>
                {history.map((line) => (
                  <motion.div
                    key={line.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    className={`whitespace-pre-wrap break-words text-[12px] leading-[1.9] sm:text-[13px] ${
                      line.type === "input"
                        ? "mt-3 text-white"
                        : line.type === "heading"
                        ? "font-semibold tracking-wide text-white"
                        : line.type === "system"
                        ? "text-emerald-400/75"
                        : line.type === "accent"
                        ? "font-medium text-emerald-300"
                        : line.type === "error"
                        ? "text-rose-400"
                        : line.type === "muted"
                        ? "text-zinc-600"
                        : "text-zinc-400"
                    }`}
                  >
                    {line.type === "input" ? (
                      <span className="flex gap-2">
                        <ChevronRight size={14} className="mt-1 shrink-0 text-emerald-400" />
                        <span>
                          <span className="text-emerald-300/80">ishan@portfolio</span>
                          <span className="text-zinc-600">:~$ </span>
                          {line.text}
                        </span>
                      </span>
                    ) : line.action ? (
                      <button
                        onClick={line.action}
                        className="inline-flex items-center gap-2 px-3.5 py-2 my-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:scale-[1.02] cursor-pointer"
                      >
                        <ShieldAlert size={15} className="text-emerald-400 animate-pulse" />
                        <span>{line.text}</span>
                      </button>
                    ) : line.href ? (
                      <a
                        href={line.href}
                        target={line.href.startsWith("http") ? "_blank" : undefined}
                        rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-emerald-300 underline decoration-emerald-400/20 underline-offset-4 transition hover:text-emerald-200"
                      >
                        {line.text}
                        <ArrowUpRight size={12} />
                      </a>
                    ) : line.type === "blank" ? (
                      <span>&nbsp;</span>
                    ) : (
                      line.text
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Input prompt */}
            <div className="relative mt-5 flex items-start gap-2 border-t border-white/[0.055] pt-5">
              <span className="flex shrink-0 items-center gap-1.5 pt-1">
                <span className="text-emerald-400">❯</span>
                <span className="hidden text-emerald-300/80 sm:inline">ishan@portfolio</span>
                <span className="hidden text-zinc-600 sm:inline">:~$</span>
              </span>

              <div className="relative min-w-0 flex-1">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => {
                    setInput(event.target.value);
                    setSuggestionsOpen(true);
                  }}
                  onFocus={() => setSuggestionsOpen(true)}
                  onBlur={() => window.setTimeout(() => setSuggestionsOpen(false), 150)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command..."
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  aria-label="Terminal command"
                  className="w-full border-0 bg-transparent pb-1 text-[13px] text-emerald-100 outline-none placeholder:text-zinc-700 focus:ring-0"
                />

                {suggestionsOpen && input.trim() && matchingCommands.length > 0 && (
                  <div className="absolute bottom-full left-0 z-30 mb-3 max-h-44 w-full max-w-sm overflow-y-auto rounded-xl border border-white/10 bg-[#101512] p-2 shadow-2xl">
                    <p className="px-2 py-1.5 text-[10px] uppercase tracking-widest text-zinc-600">
                      Suggestions
                    </p>
                    {matchingCommands.slice(0, 6).map((command) => (
                      <button
                        key={command}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => executeCommand(command)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs text-zinc-300 transition hover:bg-emerald-400/[0.08] hover:text-emerald-300"
                      >
                        {command}
                        <CornerDownLeft size={12} className="text-zinc-600" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => executeCommand(input)}
                disabled={!input.trim()}
                className="flex shrink-0 items-center gap-1.5 rounded-lg border border-emerald-400/15 bg-emerald-400/[0.07] px-2.5 py-1.5 text-[11px] text-emerald-300 transition hover:bg-emerald-400/[0.14] disabled:opacity-30"
              >
                Run <CornerDownLeft size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex min-h-[43px] items-center justify-between gap-3 border-t border-white/[0.07] bg-white/[0.018] px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-2 text-[10px] text-zinc-600 sm:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span>All systems operational</span>
          </div>
          <div className="flex shrink-0 items-center gap-3 text-[10px] text-zinc-600">
            <span className="hidden sm:inline">↑↓ History</span>
            <span>Tab Autocomplete</span>
          </div>
        </footer>
      </motion.section>

      <style>{`
        .portfolio-terminal-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(52, 211, 153, .2) transparent;
        }

        .portfolio-terminal-scroll::-webkit-scrollbar {
          width: 5px;
        }

        .portfolio-terminal-scroll::-webkit-scrollbar-thumb {
          background: rgba(52, 211, 153, .2);
          border-radius: 999px;
        }

        .portfolio-terminal-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(52, 211, 153, .4);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* Cyber Mystery Detective Game Modal */}
      <CyberMysteryModal
        isOpen={isMysteryOpen}
        onClose={() => setIsMysteryOpen(false)}
      />
    </main>
  );
};

export default TerminalPage;