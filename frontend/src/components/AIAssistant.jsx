import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaTimes,
  FaPaperPlane,
  FaVolumeUp,
  FaVolumeMute,
  FaRobot,
  FaTrash,
} from "react-icons/fa";
import { Sparkles } from "lucide-react";

// ─── Knowledge Base ───────────────────────────────────────────────────────────

const INFO = {
  name: "Ishan Bagra",
  role: "Full-Stack Developer & SDE Intern",
  education:
    "B.Tech Computer Science & Engineering at IIIT Kota (Batch 2023–2027)",
  location: "India",
  availability:
    "Available for Software Engineering Roles (Remote / Hybrid / On-site)",
  email: "ishanbagra2@gmail.com",
  phone: "+91-6377253179",

  experience: [
    {
      role: "SDE Intern",
      company: "udChalo",
      duration: "May 2025 – Aug 2025",
      highlights: [
        "Worked heavily on React Native cross-platform development",
        "Transformed Figma design guidelines into responsive, production-ready UI components",
        "Optimized runtime performance and reduced bundle size",
        "Won a dedicated internal track challenge at udChalo",
      ],
    },
  ],

  achievements: [
    "National Winner — Smart India Hackathon (SIH) 2025, organized by Ministry of Education, Govt. of India",
    "Top 10 out of 10,000+ participants at Innerve 9.0 Hackathon hosted by AIT Pune",
    "10+ real-world projects built",
    "5+ hackathons participated in",
  ],

  projects: [
    {
      name: "GeetHub",
      description:
        "A full-stack music streaming application with Go/Gin REST API backend and a modern React frontend. Features include audio streaming, playlist management, and a clean music player UI.",
      tech: ["Go", "Gin", "React", "MongoDB"],
    },
    {
      name: "ZeroWaste",
      description:
        "A surplus food redistribution platform connecting donors and recipients in real time using Socket.IO. Aims to reduce food wastage by enabling instant, location-based matching.",
      tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
    },
    {
      name: "Portfolio.ai",
      description:
        "An AI-driven portfolio generation platform built with Supabase for auth and storage, featuring LLM-powered content suggestions and a drag-and-drop portfolio builder.",
      tech: ["React", "Supabase", "LLMs", "GPT APIs"],
    },
  ],

  skills: {
    Frontend: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
    Backend: ["Node.js", "Express.js", "Go", "Gin", "Python"],
    Database: ["MongoDB", "Supabase", "PostgreSQL", "Redis"],
    Tools: ["Docker", "Git", "Postman", "Figma"],
    "AI & Data": ["RAG", "LLMs", "GPT APIs"],
  },
};

// ─── Intent Engine ────────────────────────────────────────────────────────────

function getResponse(query) {
  const q = query.toLowerCase().trim();

  if (!q) {
    return "Go ahead, ask me anything about Ishan! 😊";
  }

  if (/^(hi|hello|hey|sup|yo|what'?s up|howdy)/i.test(q)) {
    return `Hey there! 👋 I'm Ishan's personal AI assistant. I can tell you everything about Ishan Bagra — his projects, skills, experience, achievements, and more. What would you like to know?`;
  }

  if (
    /who (is|are)|about (him|ishan)|tell me|introduce|overview|summary/i.test(
      q
    )
  ) {
    return `Ishan Bagra is a passionate Computer Science & Engineering student at IIIT Kota (Batch 2023–2027). He's a full-stack developer who specializes in building high-performance web and mobile applications.

🏆 He's the National Winner of SIH 2025 and a former SDE Intern at udChalo.

📍 Based in India, he's currently available for Software Engineering roles (Remote/Hybrid). What specifically would you like to know more about?`;
  }

  if (
    /educat|college|university|iiit|kota|degree|study|studying|b\.?tech|cse/i.test(
      q
    )
  ) {
    return `📚 Ishan is pursuing a B.Tech in Computer Science & Engineering at IIIT Kota (Indian Institute of Information Technology, Kota).

He's part of the Batch of 2023–2027 and has consistently combined academics with real-world development and hackathon achievements.`;
  }

  if (/experience|intern|job|work(ed)?|udchalo|employ/i.test(q)) {
    const exp = INFO.experience[0];

    return `💼 Ishan worked as an ${exp.role} at ${exp.company} (${exp.duration}).

Key highlights:
• ${exp.highlights.join("\n• ")}

This internship gave him hands-on experience in production-level React Native development and cross-platform mobile engineering.`;
  }

  if (
    /sih|smart india|hackathon|achievement|award|win|winner|innerve|trophy|national/i.test(
      q
    )
  ) {
    return `🏆 Ishan's hackathon achievements:

1. National Winner of Smart India Hackathon (SIH) 2025 — organized by the Ministry of Education, Government of India.

2. Top 10 / 10,000+ participants at Innerve 9.0, hosted by AIT Pune.

He's competed in engineering hackathons and delivered solutions under pressure.`;
  }

  if (
    /project|built|build|app|geethub|geet|zerowaste|zero waste|portfolio\.?ai/i.test(
      q
    )
  ) {
    if (/geethub|geet/i.test(q)) {
      const p = INFO.projects[0];
      return `🎵 ${p.name}: ${p.description}\n\nTech: ${p.tech.join(", ")}`;
    }

    if (/zerowaste|zero waste|food/i.test(q)) {
      const p = INFO.projects[1];
      return `♻️ ${p.name}: ${p.description}\n\nTech: ${p.tech.join(", ")}`;
    }

    if (/portfolio\.?ai/i.test(q)) {
      const p = INFO.projects[2];
      return `🤖 ${p.name}: ${p.description}\n\nTech: ${p.tech.join(", ")}`;
    }

    return `Ishan has built 10+ real-world projects. Here are some notable ones:

🎵 GeetHub — Full-stack music streaming app (Go + React)
♻️ ZeroWaste — Real-time food redistribution platform (Socket.IO)
🤖 Portfolio.ai — AI-driven portfolio builder (Supabase + LLMs)

Ask me about any specific project for more details!`;
  }

  if (
    /skill|tech|stack|know|language|framework|tool|use|redis|docker|react|go|python|node|mongo|postgres|sql|figma|git|postman/i.test(
      q
    )
  ) {
    const all = Object.entries(INFO.skills)
      .map(([category, items]) => `${category}: ${items.join(", ")}`)
      .join("\n");

    return `⚡ Ishan's tech stack spans the entire development spectrum:

${all}

He's particularly focused on React, Go, and full-stack JavaScript.`;
  }

  if (/contact|reach|email|phone|hire|connect|message|touch/i.test(q)) {
    return `📬 You can reach Ishan at:

• Email: ${INFO.email}
• Phone: ${INFO.phone}
• Location: ${INFO.location}

He's ${INFO.availability}. Feel free to use the contact section on his portfolio!`;
  }

  if (/availab|looking|open|hire|opportunit|role|position/i.test(q)) {
    return `✅ Ishan is currently ${INFO.availability}.

He's open to full-stack, backend, or mobile engineering roles. You can contact him at ${INFO.email}.`;
  }

  if (/where|location|live|based|city|country/i.test(q)) {
    return `📍 Ishan is based in India and is open to Remote, Hybrid, and On-site opportunities.`;
  }

  if (/hobby|hobbies|interest|personal|free time|outside|music|gaming/i.test(q)) {
    return `🎮 Outside coding, Ishan enjoys building side projects, participating in hackathons, exploring technologies, and listening to music while coding.`;
  }

  if (/react native|mobile|android|ios/i.test(q)) {
    return `📱 During his internship at udChalo, Ishan worked extensively with React Native, building cross-platform mobile UIs from Figma designs and optimizing application performance.`;
  }

  if (/ai|llm|rag|gpt|artificial intelligence|machine learning|ml/i.test(q)) {
    return `🧠 Ishan has experience with AI integration, including RAG, LLMs, and GPT APIs. His Portfolio.ai project combines AI capabilities with a practical developer tool.`;
  }

  if (/thank|thanks|bye|goodbye|that'?s all|great|awesome|cool/i.test(q)) {
    return `You're welcome! 😊 If you have any more questions or want to connect with Ishan, reach out at ${INFO.email}. Have a great day! 🚀`;
  }

  return `I'm not sure about that specific detail, but I can tell you about:

• 🎓 Education at IIIT Kota
• 💼 Experience at udChalo
• 🏆 SIH 2025 and hackathon achievements
• 🚀 Projects: GeetHub, ZeroWaste, and Portfolio.ai
• ⚡ Skills and tech stack
• 📬 Contact information

What would you like to know?`;
}

// ─── Initial Message & Suggestions ────────────────────────────────────────────

const INITIAL_MESSAGE = {
  id: 0,
  role: "assistant",
  text: "Hi! I'm Ishan's portfolio assistant. Ask me about his experience, projects, skills, achievements, or how to get in touch.",
};

const QUICK_PROMPTS = [
  { label: "About Ishan", prompt: "Who is Ishan?" },
  { label: "Projects", prompt: "Tell me about his projects" },
  { label: "Tech stack", prompt: "What is his tech stack?" },
  { label: "Contact", prompt: "How can I contact Ishan?" },
];

// ─── Main Component ───────────────────────────────────────────────────────────

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);
  const sendMessageRef = useRef(null);
  const timerRef = useRef(null);
  const msgIdRef = useRef(1);
  const mountedRef = useRef(true);

  // ─── Stop Speech ────────────────────────────────────────────────────────────

  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    setIsSpeaking(false);
  }, []);

  // ─── Text-to-Speech ─────────────────────────────────────────────────────────

  const speak = useCallback(
    (text) => {
      if (
        !voiceEnabled ||
        typeof window === "undefined" ||
        !window.speechSynthesis
      ) {
        return;
      }

      window.speechSynthesis.cancel();

      const cleanText = text
        .replace(/[🎤🎵♻️🤖🏆📚💼📬✅📍🎮🧠😊🚀👋⚡•]/gu, " ")
        .replace(/\n+/g, ". ");

      const utterance = new SpeechSynthesisUtterance(cleanText);

      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 0.9;

      const voices = window.speechSynthesis.getVoices();

      const preferredVoice =
        voices.find(
          (voice) =>
            voice.lang === "en-US" &&
            /Google|Natural|Microsoft/i.test(voice.name)
        ) || voices.find((voice) => voice.lang.startsWith("en"));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [voiceEnabled]
  );

  // ─── Send Message ───────────────────────────────────────────────────────────

  const sendMessage = useCallback(
    (value) => {
      const text = (typeof value === "string" ? value : input).trim();

      if (!text || isTyping) {
        return;
      }

      const userMessage = {
        id: msgIdRef.current++,
        role: "user",
        text,
      };

      setMessages((previous) => [...previous, userMessage]);
      setInput("");
      setIsTyping(true);

      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      timerRef.current = window.setTimeout(() => {
        const answer = getResponse(text);

        const assistantMessage = {
          id: msgIdRef.current++,
          role: "assistant",
          text: answer,
        };

        if (!mountedRef.current) {
          return;
        }

        setMessages((previous) => [...previous, assistantMessage]);
        setIsTyping(false);
        speak(answer);
      }, 450);
    },
    [input, isTyping, speak]
  );

  useEffect(() => {
    sendMessageRef.current = sendMessage;
  }, [sendMessage]);

  // ─── Speech Recognition & Cleanup ───────────────────────────────────────────

  useEffect(() => {
    mountedRef.current = true;

    const SpeechRecognition =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (SpeechRecognition) {
      setSpeechSupported(true);

      const recognition = new SpeechRecognition();

      recognition.lang = "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const transcript = event.results?.[0]?.[0]?.transcript?.trim();

        setIsListening(false);

        if (transcript) {
          setInput(transcript);
          sendMessageRef.current?.(transcript);
        }
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
    }

    return () => {
      mountedRef.current = false;

      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      recognitionRef.current?.abort?.();

      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // ─── Auto Scroll ────────────────────────────────────────────────────────────

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isTyping]);

  // ─── Focus Input ────────────────────────────────────────────────────────────

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 180);

    return () => window.clearTimeout(focusTimer);
  }, [isOpen]);

  // ─── Voice Input ────────────────────────────────────────────────────────────

  const toggleVoiceInput = () => {
    const recognition = recognitionRef.current;

    if (!recognition) {
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
      return;
    }

    stopSpeaking();

    try {
      recognition.start();
      setIsListening(true);
    } catch {
      setIsListening(false);
    }
  };

  // ─── Clear Conversation ─────────────────────────────────────────────────────

  const clearChat = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    stopSpeaking();
    setIsTyping(false);
    setMessages([INITIAL_MESSAGE]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  // ─── UI ─────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Floating launcher */}

      <motion.button
        type="button"
        aria-label={
          isOpen ? "Close Ishan's assistant" : "Open Ishan's assistant"
        }
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        initial={{ opacity: 0, scale: 0.8, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 240,
          damping: 20,
        }}
        whileHover={{ y: -3, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="group fixed bottom-5 left-5 sm:bottom-7 sm:left-7 z-[200] flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/30 bg-gradient-to-br from-cyan-300 via-teal-400 to-emerald-400 text-slate-950 shadow-[0_12px_38px_rgba(20,184,166,0.32)] transition-shadow hover:shadow-[0_16px_48px_rgba(20,184,166,0.46)] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40"
      >
        <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />

        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -70, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 70, opacity: 0 }}
            >
              <FaTimes size={19} />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 70, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -70, opacity: 0 }}
            >
              <FaRobot size={21} />
            </motion.span>
          )}
        </AnimatePresence>

        {!isOpen && (
          <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-[3px] border-slate-950 bg-emerald-300" />
        )}
      </motion.button>

      {/* Chat panel */}

      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="assistant-panel"
            role="dialog"
            aria-label="Ishan's portfolio assistant"
            aria-modal="false"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 28,
            }}
            className="fixed bottom-[5.5rem] left-3 right-3 sm:bottom-24 sm:left-7 sm:right-auto z-[199] flex max-h-[min(720px,calc(100dvh-7.5rem))] w-auto sm:w-[410px] flex-col overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#080d16]/95 text-slate-100 shadow-[0_28px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
          >
            {/* Header */}

            <header className="relative overflow-hidden border-b border-white/[0.08] bg-gradient-to-br from-cyan-400/[0.12] via-teal-400/[0.06] to-transparent px-4 py-4 sm:px-5">
              <div className="pointer-events-none absolute -right-12 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-cyan-300 to-emerald-400 text-slate-950 shadow-lg shadow-teal-950/30">
                    <FaRobot size={19} />

                    <span
                      className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#0a101a] ${
                        isListening ? "bg-rose-400" : "bg-emerald-400"
                      }`}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-semibold tracking-tight text-white">
                      Ishan's AI Assistant
                    </h2>

                    <p className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-400">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isListening
                            ? "bg-rose-400"
                            : isTyping
                            ? "bg-amber-300"
                            : "bg-emerald-400"
                        }`}
                      />

                      {isListening
                        ? "Listening to you"
                        : isTyping
                        ? "Preparing a response"
                        : "Portfolio guide"}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    onClick={() =>
                      setVoiceEnabled((enabled) => {
                        if (enabled) stopSpeaking();
                        return !enabled;
                      })
                    }
                    aria-label={
                      voiceEnabled
                        ? "Disable voice responses"
                        : "Enable voice responses"
                    }
                    title={
                      voiceEnabled
                        ? "Voice responses on"
                        : "Voice responses off"
                    }
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                      voiceEnabled
                        ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
                        : "border-white/[0.07] text-slate-400 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {voiceEnabled ? (
                      <FaVolumeUp size={14} />
                    ) : (
                      <FaVolumeMute size={14} />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={clearChat}
                    aria-label="Clear conversation"
                    title="Clear conversation"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] text-slate-400 transition-colors hover:border-rose-400/20 hover:bg-rose-400/10 hover:text-rose-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <FaTrash size={12} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close assistant"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
              </div>
            </header>

            {/* Quick prompts */}

            <div className="border-b border-white/[0.06] px-4 py-3 sm:px-5">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Quick questions
              </p>

              <div className="flex gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {QUICK_PROMPTS.map(({ label, prompt }) => (
                  <button
                    key={label}
                    type="button"
                    disabled={isTyping}
                    onClick={() => sendMessage(prompt)}
                    className="shrink-0 rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-2 text-[11px] font-medium text-slate-300 transition-all hover:border-cyan-300/30 hover:bg-cyan-300/[0.09] hover:text-cyan-100 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Conversation */}

            <div
              className="min-h-[220px] flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
              aria-live="polite"
              aria-relevant="additions text"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-end gap-2.5 ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-emerald-400 text-slate-950">
                      <FaRobot size={12} />
                    </div>
                  )}

                  <div
                    className={`max-w-[86%] whitespace-pre-line break-words rounded-2xl px-3.5 py-3 text-[13px] leading-[1.7] shadow-sm sm:text-sm ${
                      message.role === "user"
                        ? "rounded-br-md bg-gradient-to-br from-cyan-300 to-emerald-300 font-medium text-slate-950"
                        : "rounded-bl-md border border-white/[0.07] bg-white/[0.045] text-slate-200"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end gap-2.5"
                    aria-label="Assistant is typing"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-emerald-400 text-slate-950">
                      <FaRobot size={12} />
                    </div>

                    <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-white/[0.07] bg-white/[0.045] px-4 py-3.5">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          animate={{
                            y: [0, -4, 0],
                            opacity: [0.45, 1, 0.45],
                          }}
                          transition={{
                            duration: 0.7,
                            repeat: Infinity,
                            delay: dot * 0.13,
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-cyan-300"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Voice activity */}

            <AnimatePresence>
              {(isSpeaking || isListening) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center justify-between border-t border-cyan-300/10 bg-cyan-300/[0.05] px-5 py-2"
                >
                  <p className="flex items-center gap-2 text-[11px] text-cyan-100">
                    <Sparkles size={13} />

                    {isListening
                      ? "Listening — speak now"
                      : "Reading response aloud"}
                  </p>

                  {isSpeaking && (
                    <button
                      type="button"
                      onClick={stopSpeaking}
                      className="text-[11px] font-medium text-slate-400 transition-colors hover:text-rose-300"
                    >
                      Stop audio
                    </button>
                  )}

                  {isListening && (
                    <button
                      type="button"
                      onClick={toggleVoiceInput}
                      className="text-[11px] font-medium text-slate-400 transition-colors hover:text-rose-300"
                    >
                      Cancel
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input composer */}

            <form
              onSubmit={handleSubmit}
              className="border-t border-white/[0.08] bg-black/20 p-3 sm:p-4"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-white/[0.09] bg-white/[0.045] p-1.5 transition-colors focus-within:border-cyan-300/35 focus-within:bg-white/[0.06]">
                <button
                  type="button"
                  onClick={toggleVoiceInput}
                  disabled={!speechSupported || isTyping}
                  aria-label={
                    isListening ? "Stop voice input" : "Start voice input"
                  }
                  title={
                    !speechSupported
                      ? "Voice input is not supported in this browser"
                      : isListening
                      ? "Stop listening"
                      : "Use voice input"
                  }
                  className={`mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:cursor-not-allowed disabled:opacity-30 ${
                    isListening
                      ? "bg-rose-400 text-white shadow-lg shadow-rose-950/30"
                      : "text-slate-400 hover:bg-white/[0.08] hover:text-cyan-100"
                  }`}
                >
                  {isListening ? (
                    <FaMicrophoneSlash size={14} />
                  ) : (
                    <FaMicrophone size={14} />
                  )}
                </button>

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={isListening ? "Listening…" : "Ask about Ishan…"}
                  aria-label="Message Ishan's assistant"
                  autoComplete="off"
                  maxLength={500}
                  className="min-w-0 flex-1 bg-transparent px-1 py-2 text-[13px] text-white outline-none placeholder:text-slate-500 sm:text-sm"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                  className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-emerald-300 text-slate-950 shadow-md shadow-teal-950/20 transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-35 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080d16]"
                >
                  <FaPaperPlane size={13} />
                </button>
              </div>

              <p className="mt-2 text-center text-[10px] text-slate-600">
                Portfolio assistant <span className="px-1.5">·</span> Enter to
                send
              </p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;