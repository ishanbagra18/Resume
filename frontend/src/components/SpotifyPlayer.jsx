//added sportify player 

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const PLAYLIST_ID = '37i9dQZF1DWZeKCadgRdKQ';

const SpotifyPlayer = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.aside
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.96 }}
        transition={{ duration: 0.18 }}
        aria-label="Spotify music player"
        className="fixed bottom-24 right-6 z-[110] w-[min(352px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-green-500/30 bg-white shadow-2xl dark:bg-zinc-950"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-zinc-800">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Deep Focus</p>
            <p className="text-xs text-slate-500 dark:text-zinc-400">Spotify playlist · press play to listen</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Spotify player"
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
        <iframe
          title="Spotify Deep Focus playlist"
          src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
          width="100%"
          height="352"
          style={{ border: 0, display: 'block' }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </motion.aside>
    )}
  </AnimatePresence>
);

export default SpotifyPlayer;
