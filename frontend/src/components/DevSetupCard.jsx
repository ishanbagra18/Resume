import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Cpu, Terminal, Code2, Layers, Monitor, HardDrive, ShieldCheck, Zap } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

const SETUP_DATA = [
  {
    category: 'Hardware & Workstation',
    icon: Laptop,
    items: [
      { name: 'Laptop', detail: 'Intel Core i7 / 16GB RAM / 1TB NVMe SSD', badge: 'Main Rig' },
      { name: 'Monitors', detail: 'Dual 24" FHD IPS Displays with Adjustable Arm', badge: 'Display' },
      { name: 'Peripheral Gear', detail: 'Mechanical Keyboard (Tactile Switches) & Precision Ergonomic Mouse', badge: 'Peripherals' },
      { name: 'Audio Gear', detail: 'Active Noise Cancelling Headphones (Coding Sessions)', badge: 'Audio' }
    ]
  },
  {
    category: 'Editor & IDE (VS Code)',
    icon: Code2,
    items: [
      { name: 'Theme', detail: 'Tokyo Night / GitHub Dark High Contrast', badge: 'Visual' },
      { name: 'Typography Font', detail: 'Fira Code (with Ligatures Enabled) & JetBrains Mono', badge: 'Font' },
      { name: 'Key Extensions', detail: 'GitLens, Prettier, ESLint, Tailwind CSS IntelliSense, Auto Rename Tag', badge: 'Tooling' },
      { name: 'AI Assistants', detail: 'GitHub Copilot & Antigravity AI Pair Programmer', badge: 'AI' }
    ]
  },
  {
    category: 'Terminal & CLI Shell',
    icon: Terminal,
    items: [
      { name: 'Shell Environment', detail: 'Windows PowerShell & WSL2 (Ubuntu 22.04 LTS)', badge: 'OS/Shell' },
      { name: 'Prompt & Styling', detail: 'Oh My Posh / Starship Prompt with custom Git status segments', badge: 'Theme' },
      { name: 'CLI Utilities', detail: 'ripgrep, gh-cli, docker-compose, nvm, pnpm, htop', badge: 'CLI Tools' }
    ]
  },
  {
    category: 'Core Engineering Workflow',
    icon: Layers,
    items: [
      { name: 'Version Control', detail: 'Git, GitHub Actions CI/CD pipelines, Vercel deployments', badge: 'DevOps' },
      { name: 'Backend & DB Tools', detail: 'Postman, Bruno API Client, MongoDB Compass, Supabase Studio', badge: 'API/DB' },
      { name: 'Design to Code', detail: 'Figma Dev Mode to Pixel-Perfect React / React Native components', badge: 'UI/UX' }
    ]
  }
];

const DevSetupCard = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const currentSetup = SETUP_DATA[activeTabIdx];
  const Icon = currentSetup.icon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative bg-white/90 dark:bg-zinc-950/90 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-slate-900 dark:text-white my-10 overflow-hidden font-sans group hover:border-green-500/30 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-36 h-36 bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-green-500/10 text-green-500 border border-green-500/30">
            <Cpu size={22} className="animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              Developer <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">Setup & Rig</span>
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">My Daily Workstation, Editor & Terminal Specs</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 font-semibold">
            🟢 Optimized for Full-Stack Dev
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SETUP_DATA.map((s, idx) => {
          const TabIcon = s.icon;
          return (
            <button
              key={s.category}
              onClick={() => {
                soundFx.playClick();
                setActiveTabIdx(idx);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                idx === activeTabIdx
                  ? 'bg-gradient-to-r from-green-400 via-teal-400 to-teal-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.4)] scale-105'
                  : 'bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-zinc-800'
              }`}
            >
              <TabIcon size={13} />
              <span>{s.category.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Items List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSetup.category}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {currentSetup.items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 flex flex-col justify-between space-y-2 hover:border-green-500/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  {item.name}
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-mono bg-green-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
                  {item.badge}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 font-light leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default DevSetupCard;
