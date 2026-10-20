import React from 'react';
import { motion } from 'framer-motion';
import { FaSpotify, FaTerminal, FaGamepad, FaSearch, FaVolumeMute, FaVolumeUp, FaUserSecret } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { soundFx } from '../utils/soundEffects';

const FloatingDock = ({ onOpenCmdK, onToggleSpotify, onOpenArcade, onOpenMystery, isSpotifyOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-1.5 p-2 rounded-full bg-white/90 dark:bg-zinc-950/90 border border-slate-200 dark:border-green-500/30 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_30px_rgba(34,197,94,0.15)]"
      >
        {/* Spotify Trigger */}
        <button
          onClick={() => {
            soundFx.playClick();
            onToggleSpotify();
          }}
          className={`relative p-3 rounded-full transition-all group ${
            isSpotifyOpen
              ? 'bg-[#1DB954] text-black shadow-[0_0_20px_rgba(29,185,84,0.6)] scale-105'
              : 'hover:bg-green-500/10 text-zinc-700 dark:text-zinc-300 hover:text-[#1DB954]'
          }`}
          title="Toggle Spotify Coding Jams"
        >
          <FaSpotify size={18} className={isSpotifyOpen ? 'animate-spin-slow' : ''} />
          {/* Animated pulse badge */}
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#1DB954] animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#1DB954]" />
        </button>

        {/* Command Palette Trigger */}
        <button
          onClick={() => {
            soundFx.playClick();
            onOpenCmdK();
          }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900 border border-transparent hover:border-slate-300 dark:hover:border-zinc-800 transition-all group"
          title="Open Command Palette (Ctrl+K)"
        >
          <FaSearch size={13} className="text-zinc-500 group-hover:text-green-500 transition-colors" />
          <span className="hidden sm:inline font-semibold">Search</span>
          <kbd className="px-1.5 py-0.5 text-[9px] bg-slate-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 rounded border border-slate-300 dark:border-zinc-800">
            ⌘K
          </kbd>
        </button>

        {/* Cyber Mystery Detective Game */}
        <button
          onClick={() => {
            soundFx.playRadar();
            onOpenMystery && onOpenMystery();
          }}
          className="relative p-3 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-emerald-400 dark:hover:text-emerald-300 hover:bg-emerald-500/10 transition-all group"
          title="🕵️ Cyber Mystery Game: Case #404 (Protocol Omega)"
        >
          <FaUserSecret size={17} className="transition-transform group-hover:scale-110" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500" />
        </button>

        {/* Dev Arcade Mini-Game */}
        <button
          onClick={() => {
            soundFx.playClick();
            onOpenArcade();
          }}
          className="p-3 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-teal-500/10 transition-all"
          title="Dev WPM Speed Arcade Game"
        >
          <FaGamepad size={17} />
        </button>

        <div className="w-[1px] h-6 bg-slate-200 dark:bg-zinc-800 my-auto mx-0.5" />

        {/* Terminal Mode */}
        <button
          onClick={() => {
            soundFx.playSuccess();
            navigate('/terminal');
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30 hover:bg-green-500 hover:text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)]"
          title="Open Terminal Mode"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          <FaTerminal size={12} />
          <span className="hidden xs:inline">&gt;_ Terminal</span>
        </button>
      </motion.div>
    </div>
  );
};

export default FloatingDock;
