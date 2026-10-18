import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Play, RefreshCw, Trophy, Zap, X, CheckCircle, AlertCircle } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

const CODE_SNIPPETS = [
  {
    title: 'React Custom Hook (UseSpotifyJams)',
    lang: 'JavaScript',
    code: 'const useSpotifyJams = (trackId) => { const [playing, setPlaying] = useState(false); useEffect(() => { soundFx.playSuccess(); }, [trackId]); return { playing, setPlaying }; };'
  },
  {
    title: 'Go Gin API Handler (SIH Winner)',
    lang: 'Go',
    code: 'func HandleUserLogin(c *gin.Context) { var user UserCredentials; if err := c.ShouldBindJSON(&user); err != nil { c.JSON(400, gin.H{"error": err.Error()}) } }'
  },
  {
    title: 'Full Stack Supabase Query (Portfolio.ai)',
    lang: 'TypeScript',
    code: 'export async function getProjects() { const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false }); return data; }'
  }
];

const DevArcadeModal = ({ isOpen, onClose }) => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isCompleted, setIsCompleted] = useState(false);
  const inputRef = useRef(null);

  const snippet = CODE_SNIPPETS[snippetIndex];

  useEffect(() => {
    if (isOpen) {
      resetGame();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, snippetIndex]);

  const resetGame = () => {
    setUserInput('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setIsCompleted(false);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    if (!startTime) setStartTime(Date.now());

    setUserInput(val);
    soundFx.playHover();

    // Calculate accuracy
    let correct = 0;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === snippet.code[i]) correct++;
    }
    const acc = val.length > 0 ? Math.round((correct / val.length) * 100) : 100;
    setAccuracy(acc);

    // Calculate WPM
    if (startTime) {
      const minutes = (Date.now() - startTime) / 60000;
      const wordsTyped = val.length / 5;
      const currentWpm = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
      setWpm(currentWpm);
    }

    // Check completion
    if (val === snippet.code) {
      setIsCompleted(true);
      soundFx.playSuccess();
    }
  };

  const getRankBadge = (scoreWpm) => {
    if (scoreWpm >= 80) return { title: '10x Senior Staff Engineer', color: 'text-amber-400 bg-amber-500/20 border-amber-500/30' };
    if (scoreWpm >= 50) return { title: 'Full Stack Speed Demon', color: 'text-green-400 bg-green-500/20 border-green-500/30' };
    if (scoreWpm >= 30) return { title: 'Mid-Level Developer', color: 'text-teal-400 bg-teal-500/20 border-teal-500/30' };
    return { title: 'Junior Debugger in Training', color: 'text-purple-400 bg-purple-500/20 border-purple-500/30' };
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-3xl bg-zinc-950 border border-green-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(34,197,94,0.2)] text-white font-sans overflow-hidden relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-green-500/10 text-green-400 border border-green-500/30">
                <Gamepad2 className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  Dev Speed Arcade <span className="text-green-400 text-xs px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 font-mono">WPM Challenge</span>
                </h3>
                <p className="text-xs text-zinc-400 font-mono">Test your coding speed on real production code</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Snippet selector tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CODE_SNIPPETS.map((snip, idx) => (
              <button
                key={snip.title}
                onClick={() => {
                  soundFx.playClick();
                  setSnippetIndex(idx);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  idx === snippetIndex
                    ? 'bg-green-500/20 text-green-400 border border-green-500/40 font-bold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {snip.lang} Snippet {idx + 1}
              </button>
            ))}
          </div>

          {/* Live Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 mb-6 bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800 text-center">
            <div>
              <p className="text-2xl font-black text-green-400 font-mono">{wpm}</p>
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">WPM Speed</p>
            </div>
            <div>
              <p className={`text-2xl font-black font-mono ${accuracy > 90 ? 'text-teal-400' : 'text-amber-400'}`}>{accuracy}%</p>
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Accuracy</p>
            </div>
            <div>
              <p className="text-2xl font-black text-purple-400 font-mono">{userInput.length} / {snippet.code.length}</p>
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Chars Typed</p>
            </div>
          </div>

          {/* Code Typing Area */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>{snippet.title}</span>
              <span>Language: {snippet.lang}</span>
            </div>

            {/* Render Target Code with highlighting */}
            <div className="p-4 rounded-2xl bg-black border border-zinc-800 font-mono text-sm leading-relaxed overflow-x-auto select-none min-h-[100px]">
              {snippet.code.split('').map((char, i) => {
                let colorClass = 'text-zinc-500';
                if (i < userInput.length) {
                  colorClass = userInput[i] === char ? 'text-green-400 bg-green-500/20 font-bold' : 'text-red-400 bg-red-500/20 underline';
                }
                return (
                  <span key={i} className={`${colorClass} transition-colors`}>
                    {char}
                  </span>
                );
              })}
            </div>

            {/* Input Box */}
            <textarea
              ref={inputRef}
              value={userInput}
              onChange={handleInputChange}
              disabled={isCompleted}
              placeholder="Start typing the code snippet above as fast as you can..."
              rows={3}
              className="w-full bg-zinc-900 border border-green-500/40 rounded-2xl p-4 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 resize-none"
            />
          </div>

          {/* Completion overlay */}
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-gradient-to-r from-green-500/20 via-teal-500/20 to-green-500/20 border border-green-500/40 text-center space-y-3 mb-6"
            >
              <div className="flex items-center justify-center gap-2 text-green-400 font-bold text-lg">
                <Trophy className="w-6 h-6 text-amber-400 animate-bounce" />
                <span>Challenge Completed!</span>
              </div>
              <p className="text-sm text-zinc-300">
                You typed at <strong className="text-green-400 font-mono">{wpm} WPM</strong> with <strong className="text-teal-400 font-mono">{accuracy}% accuracy</strong>!
              </p>

              {(() => {
                const rank = getRankBadge(wpm);
                return (
                  <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold border ${rank.color}`}>
                    Rank: {rank.title}
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={resetGame}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Challenge</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setSnippetIndex((snippetIndex + 1) % CODE_SNIPPETS.length);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-black bg-gradient-to-r from-green-400 to-teal-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)]"
            >
              <span>Next Snippet</span>
              <Zap className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DevArcadeModal;
