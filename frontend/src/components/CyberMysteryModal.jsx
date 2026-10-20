import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert, Terminal, Eye, Lock, Unlock, Cpu, Radio,
  Search, CheckCircle2, AlertTriangle, RefreshCw, X, HelpCircle,
  Award, Sparkles, ChevronRight, Volume2, VolumeX, Key,
  FileCode, Fingerprint, Database, Zap, Share2, ArrowRight
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

// SUSPECT DOSSIERS
const SUSPECTS = [
  {
    id: 'victor',
    name: 'Victor "ByteViper" Vance',
    role: 'Rival SIH 2025 Finalist',
    avatar: '🐍',
    alibi: 'Claims he was in lecture hall B with no phone access all night.',
    contradiction: 'Network logs show active proxy pings from his dorm router at 03:41 AM.',
    pgp: 'PGP-4410-VIPER',
    innocent: true,
    interrogation: '"Look man, I was salty about Ishan winning SIH 2025, but I wouldn\'t nuke his actual repository. That\'s criminal!"'
  },
  {
    id: 'riley',
    name: 'Riley "CipherNull" Chen',
    role: 'Ex-Collaborator & Rogue Dev',
    avatar: '🕵️',
    alibi: 'Claims his laptop was powered down since 10 PM.',
    contradiction: 'The malicious commit 7d08b3 was signed with his private key (PGP-9921-NULL).',
    pgp: 'PGP-9921-NULL',
    innocent: false, // THE GUILTY SUSPECT
    interrogation: '"You think you\'re so clever... Ishan thought he could ship the Orkestra platform without me. The logic bomb was poetic justice!"'
  },
  {
    id: 'autobot',
    name: 'Daemon "SynthAI-01"',
    role: 'Experimental CI/CD Cron Agent',
    avatar: '🤖',
    alibi: 'Automated runner on port 8080.',
    contradiction: 'Runs in read-only sandbox mode; lacked cryptographic write permissions.',
    pgp: 'PGP-0000-DAEMON',
    innocent: true,
    interrogation: '[SYSTEM LOG] "Error 0x00: I do not possess motives, emotions, or write access to the kernel repository."'
  }
];

const GIT_COMMITS = [
  {
    hash: 'a8f10b',
    author: 'ishanbagra',
    time: 'Yesterday 21:30',
    msg: 'refactor: optimize web socket connections for real-time collaboration',
    diff: [
      '  const socket = new WebSocket(WS_ENDPOINT);',
      '+ socket.on("connect", () => console.log("Connected to cluster"));',
      '- socket.on("error", handleSocketRetry);'
    ],
    suspicious: false
  },
  {
    hash: 'c49e21',
    author: 'intern_udchalo',
    time: 'Today 01:15',
    msg: 'docs: update deployment architecture and API endpoints',
    diff: [
      '  ### API Endpoints',
      '+ - GET /api/v1/projects - returns list of projects',
      '+ - POST /api/v1/auth/verify - OTP auth token'
    ],
    suspicious: false
  },
  {
    hash: '7d08b3',
    author: 'ghost-null (PGP-9921-NULL)',
    time: 'Today 03:42 [BREACH TIME]',
    msg: 'fix: patch memory leak in authentication middleware (INTRUSION)',
    diff: [
      '  // CRITICAL SECURITY COMPROMISE',
      '+ const SECRET_BACKDOOR_SALT = "OMEGA";',
      '+ if (req.headers["x-override-key"] === SECRET_BACKDOOR_SALT) {',
      '+   grantRootBypass(); // LOGIC BOMB ARMED',
      '+ }'
    ],
    suspicious: true,
    token: 'OMEGA'
  },
  {
    hash: 'f291a7',
    author: 'dependabot[bot]',
    time: 'Today 04:00',
    msg: 'chore: bump framer-motion from 12.0 to 12.43',
    diff: [
      '-   "framer-motion": "12.0.0"',
      '+   "framer-motion": "^12.43.0"'
    ],
    suspicious: false
  }
];

const CyberMysteryModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('briefing'); // briefing, network, git, signal, vault, solved
  const [tokens, setTokens] = useState({
    token1: null, // 'KOTA'
    token2: null, // 'OMEGA'
    token3: null, // '404'
    suspectFound: null // 'riley'
  });

  // Stage 1 - Network Packet
  const [selectedDecoder, setSelectedDecoder] = useState('raw');
  const [packetDecoded, setPacketDecoded] = useState(false);

  // Stage 2 - Git
  const [selectedCommit, setSelectedCommit] = useState(GIT_COMMITS[0]);
  const [gitTokenFound, setGitTokenFound] = useState(false);

  // Stage 3 - Radio Signal
  const [freq, setFreq] = useState(250);
  const [resonance, setResonance] = useState(30);
  const [signalUnlocked, setSignalUnlocked] = useState(false);

  // Stage 4 - Vault
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [vaultPin, setVaultPin] = useState('');
  const [vaultError, setVaultError] = useState('');
  const [isCracking, setIsCracking] = useState(false);

  // Timer & hints
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [hintMessage, setHintMessage] = useState('');
  const [soundOn, setSoundOn] = useState(true);

  // Timer run when open and not solved
  useEffect(() => {
    let interval;
    if (isOpen && activeTab !== 'solved') {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, activeTab]);

  useEffect(() => {
    if (isOpen) {
      soundFx.playRadar();
    }
  }, [isOpen]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const handleDecoderClick = (type) => {
    setSelectedDecoder(type);
    if (soundOn) soundFx.playClick();

    if (type === 'base64') {
      setTimeout(() => {
        setPacketDecoded(true);
        setTokens((prev) => ({ ...prev, token1: 'KOTA' }));
        if (soundOn) {
          soundFx.playGlitch();
          soundFx.playSuccess();
        }
      }, 400);
    }
  };

  const handleSelectCommit = (commit) => {
    setSelectedCommit(commit);
    if (soundOn) soundFx.playClick();
  };

  const handleExtractGitToken = () => {
    if (selectedCommit.suspicious) {
      setGitTokenFound(true);
      setTokens((prev) => ({ ...prev, token2: 'OMEGA' }));
      if (soundOn) soundFx.playSuccess();
    } else {
      if (soundOn) soundFx.playBuzzer();
    }
  };

  // Signal frequency check
  useEffect(() => {
    // Target: freq ~ 440 (within 430-450) and resonance >= 75
    if (freq >= 430 && freq <= 450 && resonance >= 75 && !signalUnlocked) {
      setSignalUnlocked(true);
      setTokens((prev) => ({ ...prev, token3: '404' }));
      if (soundOn) {
        soundFx.playTada();
      }
    }
  }, [freq, resonance, signalUnlocked, soundOn]);

  const handleSuspectAccuse = (suspect) => {
    setSelectedSuspect(suspect);
    if (soundOn) soundFx.playClick();
  };

  const handleVaultSubmit = () => {
    setVaultError('');
    if (!selectedSuspect) {
      setVaultError('⚠️ You must interrogate and select the prime suspect first!');
      if (soundOn) soundFx.playBuzzer();
      return;
    }

    if (selectedSuspect.id !== 'riley') {
      setVaultError(`❌ Incorrect accusation! ${selectedSuspect.name} has a proven alibi. Check the PGP signature!`);
      if (soundOn) soundFx.playBuzzer();
      return;
    }

    const cleanPin = vaultPin.trim().toUpperCase();
    const validCodes = ['KOTA-OMEGA-404', 'KOTAOMEGA404', 'KOTA OMEGA 404', '9921', 'OMEGA-404', 'KOTA-OMEGA-404-9921'];

    if (!validCodes.some((code) => cleanPin.includes(code)) && cleanPin !== 'KOTA' && cleanPin !== '404') {
      setVaultError('❌ Invalid Decryption Passcode! Hint: Combine Tokens 1, 2, and 3 (KOTA-OMEGA-404)');
      if (soundOn) soundFx.playBuzzer();
      return;
    }

    setIsCracking(true);
    if (soundOn) soundFx.playRadar();

    setTimeout(() => {
      setIsCracking(false);
      setTokens((prev) => ({ ...prev, suspectFound: 'riley' }));
      setActiveTab('solved');
      if (soundOn) soundFx.playTada();
    }, 1200);
  };

  const handleQuickAutofillPin = () => {
    setVaultPin('KOTA-OMEGA-404-9921');
    if (soundOn) soundFx.playClick();
  };

  const handleRequestHint = () => {
    setShowHint(true);
    if (soundOn) soundFx.playClick();

    if (activeTab === 'network') {
      setHintMessage('💡 Network Hint: Notice the HTTP header X-Cryptic-Payload: "S09UQS0yMDI1". Use the Base64 Cyber Decoder tool to extract the origin city token!');
    } else if (activeTab === 'git') {
      setHintMessage('💡 Git Hint: Look at the commit timestamps. One commit happened right at 03:42 AM by a mysterious user with a logic backdoor inserted.');
    } else if (activeTab === 'signal') {
      setHintMessage('💡 Signal Hint: Tune Frequency slider close to 440 Hz (concert pitch) and slide Resonance above 80% to filter out the static interference.');
    } else if (activeTab === 'vault') {
      setHintMessage('💡 Vault Hint: Check who owns the cryptographic key PGP-9921-NULL from the malicious commit. Then combine tokens KOTA-OMEGA-404-9921 into the override console!');
    } else {
      setHintMessage('💡 General Hint: Start with Crime Scene 1 (Network Trace) and collect all 3 Security Tokens to unlock the master decryptor.');
    }
  };

  const resetGame = () => {
    setActiveTab('briefing');
    setTokens({ token1: null, token2: null, token3: null, suspectFound: null });
    setSelectedDecoder('raw');
    setPacketDecoded(false);
    setSelectedCommit(GIT_COMMITS[0]);
    setGitTokenFound(false);
    setFreq(250);
    setResonance(30);
    setSignalUnlocked(false);
    setSelectedSuspect(null);
    setVaultPin('');
    setVaultError('');
    setElapsedSeconds(0);
    setShowHint(false);
    if (soundOn) soundFx.playSuccess();
  };

  const totalTokensCollected = [tokens.token1, tokens.token2, tokens.token3].filter(Boolean).length;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[125] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-4xl bg-zinc-950 border border-emerald-500/30 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.25)] text-zinc-200 font-sans flex flex-col my-auto max-h-[92vh] overflow-hidden relative"
        >
          {/* Top Cyber Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 sm:px-6 py-3.5 bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-950">
            <div className="flex items-center gap-3">
              <div className="relative p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <ShieldAlert className="w-5 h-5 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
                    CASE #404: PROTOCOL OMEGA
                  </h2>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-semibold animate-pulse">
                    CRITICAL BREACH
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-mono hidden sm:block">
                  Investigate the SIH Hackathon Repository Intrusion & Unmask the Rogue Committer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Sound Toggle */}
              <button
                onClick={() => setSoundOn(!soundOn)}
                title={soundOn ? 'Sound FX On' : 'Sound FX Muted'}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors"
              >
                {soundOn ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-zinc-500" />}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Status HUD Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-2 bg-zinc-900/60 border-b border-zinc-800 text-xs font-mono">
            {/* Clues counter */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">Evidence Tokens:</span>
              <div className="flex items-center gap-1.5">
                {[
                  { label: 'KOTA', active: Boolean(tokens.token1) },
                  { label: 'OMEGA', active: Boolean(tokens.token2) },
                  { label: '404', active: Boolean(tokens.token3) }
                ].map((item, i) => (
                  <span
                    key={i}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-all ${
                      item.active
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                        : 'bg-zinc-800/50 border-zinc-700/60 text-zinc-500'
                    }`}
                  >
                    {item.active ? `✓ ${item.label}` : `[Chip 0${i + 1}]`}
                  </span>
                ))}
              </div>
            </div>

            {/* Timer & Hint Button */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Timer:</span>
                <span className="text-emerald-400 font-bold">{formatTime(elapsedSeconds)}</span>
              </div>

              <button
                onClick={handleRequestHint}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-all text-[11px]"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Hint</span>
              </button>
            </div>
          </div>

          {/* Optional Hint Banner */}
          {showHint && (
            <div className="mx-4 sm:mx-6 mt-3 p-3 bg-amber-950/40 border border-amber-500/30 rounded-xl text-xs text-amber-200 flex items-start justify-between gap-2 animate-fadeIn">
              <div className="flex items-start gap-2">
                <span className="text-base">💡</span>
                <p>{hintMessage}</p>
              </div>
              <button
                onClick={() => setShowHint(false)}
                className="text-amber-400 hover:text-amber-200 p-0.5"
              >
                ✕
              </button>
            </div>
          )}

          {/* Navigation Tabs (Crime Scenes) */}
          <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 border-b border-zinc-800/60 overflow-x-auto scrollbar-none bg-zinc-950">
            {[
              { id: 'briefing', label: 'Briefing', icon: Terminal },
              { id: 'network', label: '1. Network Logs', icon: Database, badge: tokens.token1 ? '✓' : '1' },
              { id: 'git', label: '2. Git Commits', icon: FileCode, badge: tokens.token2 ? '✓' : '2' },
              { id: 'signal', label: '3. Radio Wiretap', icon: Radio, badge: tokens.token3 ? '✓' : '3' },
              { id: 'vault', label: '4. Interrogation & Vault', icon: Lock, badge: 'FINAL' }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (soundOn) soundFx.playClick();
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl text-xs font-mono font-medium transition-all whitespace-nowrap border-t border-x ${
                    isActive
                      ? 'bg-zinc-900 border-zinc-700/80 text-emerald-400 shadow-sm'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                        tab.badge === '✓'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 font-mono text-xs">
            {/* TAB: BRIEFING */}
            {activeTab === 'briefing' && (
              <div className="space-y-4 max-w-3xl">
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <Terminal className="w-4 h-4" />
                    <span>INCIDENT REPORT // CLASSIFIED: LEVEL 4</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed font-sans text-sm">
                    At <span className="text-red-400 font-mono font-bold">03:42:19 AM</span>, an intruder bypassed the cloud firewalls of the
                    <span className="text-emerald-400 font-bold"> Smart India Hackathon 2025</span> repository cluster at IIIT Kota.
                    The production algorithm was locked behind cryptographic logic gates.
                  </p>
                  <p className="text-zinc-400 leading-relaxed font-sans text-sm">
                    A taunting message was left on the server terminal:
                    <br />
                    <span className="text-red-300 font-mono italic">
                      &quot;You won the SIH trophy, Ishan. But your precious code won&apos;t survive the sunrise. Find the 3 cipher tokens, identify my signature, or watch the repository format itself.&quot;
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                    <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <Database className="w-4 h-4" />
                      <span>Step 1: Network Trace</span>
                    </div>
                    <p className="text-zinc-400 text-[11px] font-sans">
                      Inspect intercepted packet headers and decode the attacker&apos;s Base64 origin payload.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                    <div className="text-teal-400 font-bold flex items-center gap-1.5">
                      <FileCode className="w-4 h-4" />
                      <span>Step 2: Git Forensics</span>
                    </div>
                    <p className="text-zinc-400 text-[11px] font-sans">
                      Audit recent commits, spot the rogue pull request, and extract the backdoor salt.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                    <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <Radio className="w-4 h-4" />
                      <span>Step 3: Signal Radio</span>
                    </div>
                    <p className="text-zinc-400 text-[11px] font-sans">
                      Filter the transmitter frequency interference to isolate the broadcasted cipher code.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-zinc-500 text-[11px]">
                    Detective Objective: Collect all 3 tokens → Accuse the true culprit → Unlock the Vault.
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab('network');
                      if (soundOn) soundFx.playSuccess();
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-sans transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <span>Begin Investigation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB: CRIME SCENE 1 - NETWORK LOGS */}
            {activeTab === 'network' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>CRIME SCENE 1: Intercepted Gateway Packet</span>
                      {tokens.token1 && <span className="text-emerald-400 font-bold text-xs">[TOKEN UNLOCKED]</span>}
                    </h3>
                    <p className="text-zinc-400 text-[11px]">Analyze the HTTP packet headers captured during the 03:42 intrusion.</p>
                  </div>

                  <div className="flex items-center gap-1">
                    {['raw', 'rot13', 'base64'].map((mode) => (
                      <button
                        key={mode}
                        onClick={() => handleDecoderClick(mode)}
                        className={`px-3 py-1.5 rounded-lg text-[11px] uppercase transition-all ${
                          selectedDecoder === mode
                            ? 'bg-emerald-500 text-black font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                            : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                        }`}
                      >
                        {mode === 'raw' ? 'Raw Stream' : mode === 'rot13' ? 'ROT13' : 'Base64 Decrypt'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Packet Viewer Console */}
                <div className="p-4 rounded-xl bg-black border border-zinc-800 font-mono text-[11px] sm:text-xs leading-relaxed space-y-1 text-zinc-300 shadow-inner overflow-x-auto">
                  <div className="text-zinc-500">// CAPTURED PACKET #88219 - GATEWAY INGRESS</div>
                  <div className="text-cyan-400">POST /api/v1/auth/kernel-sync HTTP/2.0</div>
                  <div>Host: <span className="text-zinc-200">cluster.iiit-kota.ac.in</span></div>
                  <div>User-Agent: <span className="text-zinc-400">Mozilla/5.0 (NullPointer-OS x86_64)</span></div>
                  <div>Content-Type: <span className="text-zinc-400">application/octet-stream</span></div>
                  <div>X-Breach-Timestamp: <span className="text-amber-400">2026-10-20T03:42:19Z</span></div>
                  <div className="py-1">
                    <span className="text-emerald-400 font-bold">X-Cryptic-Payload: </span>
                    {selectedDecoder === 'raw' && (
                      <span className="bg-zinc-900 px-2 py-0.5 rounded text-amber-300 border border-zinc-700">
                        &quot;S09UQS0yMDI1&quot;
                      </span>
                    )}
                    {selectedDecoder === 'rot13' && (
                      <span className="bg-zinc-900 px-2 py-0.5 rounded text-red-400 border border-zinc-700">
                        &quot;F09HDGF0yMDI1&quot; (Invalid Cipher)
                      </span>
                    )}
                    {selectedDecoder === 'base64' && (
                      <span className="bg-emerald-950/80 px-2.5 py-0.5 rounded text-emerald-300 border border-emerald-500 font-bold animate-pulse">
                        &quot;KOTA-2025&quot; → TOKEN: [KOTA]
                      </span>
                    )}
                  </div>
                  <div>Status: <span className="text-red-400">418 Tampered (Intrusion Detected)</span></div>
                </div>

                {/* Clue card outcome */}
                <div className={`p-4 rounded-xl border transition-all ${
                  tokens.token1
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {tokens.token1 ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <Search className="w-5 h-5 text-zinc-500 shrink-0" />
                      )}
                      <div>
                        <div className="font-bold text-white text-xs">
                          {tokens.token1 ? 'Token 1 Found: [KOTA]' : 'Token 1: Encrypted Origin City'}
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          {tokens.token1
                            ? 'The Base64 string decoded to "KOTA-2025". Token 1 is safely locked in your evidence ledger!'
                            : 'Click "Base64 Decrypt" above to convert the cryptic payload into plaintext.'}
                        </div>
                      </div>
                    </div>

                    {tokens.token1 && (
                      <button
                        onClick={() => {
                          setActiveTab('git');
                          if (soundOn) soundFx.playSuccess();
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-sans transition-all"
                      >
                        <span>Next: Git Forensics</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: CRIME SCENE 2 - GIT FORENSICS */}
            {activeTab === 'git' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>CRIME SCENE 2: Version Control Audit (Git Log)</span>
                    {tokens.token2 && <span className="text-emerald-400 font-bold text-xs">[TOKEN UNLOCKED]</span>}
                  </h3>
                  <p className="text-zinc-400 text-[11px]">Inspect recent commits pushed to the repository branch around 03:42 AM.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Left: Commit list */}
                  <div className="space-y-2">
                    <div className="text-zinc-500 text-[11px] font-bold">COMMIT HISTORY (SELECT TO VIEW DIFF):</div>
                    {GIT_COMMITS.map((commit) => {
                      const isSelected = selectedCommit.hash === commit.hash;
                      return (
                        <div
                          key={commit.hash}
                          onClick={() => handleSelectCommit(commit)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-zinc-900 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                              : 'bg-zinc-950 border-zinc-800/80 hover:bg-zinc-900/40'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-mono text-emerald-400 font-bold">commit {commit.hash}</span>
                            <span className={commit.suspicious ? 'text-red-400 font-bold' : 'text-zinc-500'}>
                              {commit.time}
                            </span>
                          </div>
                          <div className="text-xs text-zinc-200 mt-1 truncate">{commit.msg}</div>
                          <div className="text-[10px] text-zinc-500 mt-0.5">Author: {commit.author}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right: Diff Viewer */}
                  <div className="p-3.5 rounded-xl bg-black border border-zinc-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 text-[11px]">
                        <span className="text-zinc-400 font-mono">DIFF: {selectedCommit.hash}</span>
                        {selectedCommit.suspicious && (
                          <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/40 text-[10px] font-bold">
                            ⚠️ SUSPICIOUS DIFF
                          </span>
                        )}
                      </div>

                      <div className="space-y-1 font-mono text-[11px]">
                        {selectedCommit.diff.map((line, idx) => (
                          <div
                            key={idx}
                            className={`${
                              line.startsWith('+')
                                ? 'text-emerald-400 bg-emerald-950/20 px-1 rounded'
                                : line.startsWith('-')
                                ? 'text-red-400 bg-red-950/20 px-1 rounded'
                                : 'text-zinc-500'
                            }`}
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800 mt-3">
                      {selectedCommit.suspicious ? (
                        <div className="space-y-2">
                          <p className="text-[11px] text-red-300">
                            🚨 Backdoor salt discovered in code: <span className="font-bold text-amber-300">&quot;OMEGA&quot;</span>
                          </p>
                          <button
                            onClick={handleExtractGitToken}
                            disabled={gitTokenFound}
                            className={`w-full py-2 rounded-lg font-bold text-xs transition-all ${
                              gitTokenFound
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                            }`}
                          >
                            {gitTokenFound ? '✓ Token 2 Extracted: [OMEGA]' : 'Extract Token [OMEGA] into Ledger'}
                          </button>
                        </div>
                      ) : (
                        <p className="text-zinc-500 text-[11px] italic">
                          This commit looks like regular developer activity. Check the other commits around 03:42 AM.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {tokens.token2 && (
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-between">
                    <span className="text-xs">✓ Token 2 acquired: <strong>OMEGA</strong>. Backdoor vector confirmed.</span>
                    <button
                      onClick={() => {
                        setActiveTab('signal');
                        if (soundOn) soundFx.playSuccess();
                      }}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-sans"
                    >
                      <span>Next: Radio Wiretap</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB: CRIME SCENE 3 - RADIO WIRETAP */}
            {activeTab === 'signal' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>CRIME SCENE 3: Intercepted RF Spectrum & Frequency Tuner</span>
                    {tokens.token3 && <span className="text-emerald-400 font-bold text-xs">[TOKEN UNLOCKED]</span>}
                  </h3>
                  <p className="text-zinc-400 text-[11px]">
                    Tune the frequency dials to filter out the jamming static and decode the culprit&apos;s audio beacon.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Frequency Visualizer Display */}
                  <div className="md:col-span-2 p-4 rounded-xl bg-black border border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-zinc-400 font-mono">SPECTRUM ANALYZER</span>
                      <span className={signalUnlocked ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                        {signalUnlocked ? 'SIGNAL LOCKED: 100%' : 'STATUS: INTERFERENCE NOISE'}
                      </span>
                    </div>

                    {/* Animated audio bars simulation */}
                    <div className="h-28 flex items-end justify-between gap-1 px-2 bg-zinc-950/80 rounded-lg p-2 border border-zinc-900">
                      {Array.from({ length: 28 }).map((_, i) => {
                        // calculate height based on frequency match
                        const dist = Math.abs(freq - 440);
                        const isClose = dist < 40 && resonance > 60;
                        const heightPercent = isClose
                          ? Math.min(100, Math.sin((i / 28) * Math.PI) * 90 + Math.random() * 15)
                          : Math.min(80, Math.random() * 50 + 10);

                        return (
                          <div
                            key={i}
                            className={`w-full rounded-t transition-all duration-150 ${
                              isClose
                                ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]'
                                : 'bg-gradient-to-t from-zinc-800 to-zinc-600'
                            }`}
                            style={{ height: `${heightPercent}%` }}
                          />
                        );
                      })}
                    </div>

                    {/* Decoded Transmitted Signal */}
                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 min-h-[48px] flex items-center justify-center text-center">
                      {signalUnlocked ? (
                        <div className="text-emerald-400 font-bold text-xs sm:text-sm animate-pulse tracking-wide">
                          📻 &quot;BEACON DETECTED ON NODE 404... BROADCASTING CIPHER TOKEN: 404&quot;
                        </div>
                      ) : (
                        <div className="text-zinc-500 italic text-[11px]">
                          [Static hiss... Tune Frequency near 440 Hz and Resonance &gt; 75%]
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tuner Controls */}
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                    <div className="text-zinc-300 font-bold text-xs flex items-center gap-1.5">
                      <Radio className="w-4 h-4 text-emerald-400" />
                      <span>TUNING CONTROLS</span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-zinc-400">
                        <span>Frequency (Hz)</span>
                        <span className="text-emerald-400 font-bold font-mono">{freq} Hz</span>
                      </div>
                      <input
                        type="range"
                        min="100"
                        max="800"
                        value={freq}
                        onChange={(e) => {
                          setFreq(Number(e.target.value));
                          if (soundOn && Math.random() > 0.6) soundFx.playHover();
                        }}
                        className="w-full accent-emerald-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] text-zinc-600">
                        <span>100Hz</span>
                        <span className="text-emerald-400 font-bold">Target ~440Hz</span>
                        <span>800Hz</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-zinc-400">
                        <span>Filter Resonance (Q)</span>
                        <span className="text-emerald-400 font-bold font-mono">{resonance}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={resonance}
                        onChange={(e) => {
                          setResonance(Number(e.target.value));
                          if (soundOn && Math.random() > 0.6) soundFx.playHover();
                        }}
                        className="w-full accent-emerald-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] text-zinc-600">
                        <span>0%</span>
                        <span className="text-emerald-400 font-bold">Target &gt; 75%</span>
                        <span>100%</span>
                      </div>
                    </div>

                    {signalUnlocked && (
                      <div className="pt-2 text-center text-[11px] text-emerald-300 font-bold bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/30">
                        ✓ Token 3 Acquired: [404]
                      </div>
                    )}
                  </div>
                </div>

                {tokens.token3 && (
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-between">
                    <span className="text-xs">All 3 Security Tokens collected! Proceed to Suspect Interrogation and Vault Override.</span>
                    <button
                      onClick={() => {
                        setActiveTab('vault');
                        if (soundOn) soundFx.playSuccess();
                      }}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500 text-black font-bold text-xs font-sans shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    >
                      <span>To Final Vault</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB: SUSPECT LINEUP & MASTER VAULT */}
            {activeTab === 'vault' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>STAGE 4: Suspect Interrogation & Repository Override</span>
                  </h3>
                  <p className="text-zinc-400 text-[11px]">
                    Cross-examine the 3 suspects with your forensic evidence. Match the Git PGP signature and execute the decryption passcode.
                  </p>
                </div>

                {/* Suspect Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SUSPECTS.map((suspect) => {
                    const isSelected = selectedSuspect?.id === suspect.id;
                    return (
                      <div
                        key={suspect.id}
                        onClick={() => handleSuspectAccuse(suspect)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-zinc-900 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                            : 'bg-zinc-950 border-zinc-800 hover:bg-zinc-900/40'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{suspect.avatar}</span>
                            <div>
                              <div className="font-bold text-white text-xs">{suspect.name}</div>
                              <div className="text-[10px] text-zinc-400">{suspect.role}</div>
                            </div>
                          </div>

                          <div className="text-[11px] text-zinc-300">
                            <span className="text-zinc-500">Alibi: </span>
                            {suspect.alibi}
                          </div>

                          <div className="text-[10px] font-mono text-zinc-400 bg-zinc-900 p-1.5 rounded border border-zinc-800">
                            Key: <span className="text-cyan-400 font-bold">{suspect.pgp}</span>
                          </div>

                          <div className="text-[10px] italic text-zinc-500 border-l-2 border-zinc-700 pl-2">
                            {suspect.interrogation}
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-zinc-800">
                          <button
                            type="button"
                            className={`w-full py-1.5 rounded text-[11px] font-bold font-sans transition-all ${
                              isSelected
                                ? 'bg-emerald-500 text-black'
                                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                            }`}
                          >
                            {isSelected ? '✓ PRIME SUSPECT MARKED' : 'Accuse This Suspect'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Vault Terminal Lock Pad */}
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-2">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <span className="text-white font-bold text-xs">MASTER REPOSITORY DECRYPTION TERMINAL</span>
                    </div>

                    <button
                      onClick={handleQuickAutofillPin}
                      className="text-[11px] text-emerald-400 hover:text-emerald-300 underline font-mono"
                    >
                      Autofill Tokens (KOTA-OMEGA-404-9921)
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] text-zinc-400">
                      Enter Decryption Passcode (Combine Tokens 1, 2, 3, or PGP key):
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. KOTA-OMEGA-404-9921"
                        value={vaultPin}
                        onChange={(e) => setVaultPin(e.target.value)}
                        className="flex-1 bg-black border border-zinc-700 rounded-xl px-4 py-2.5 text-emerald-400 font-mono text-sm tracking-wider uppercase focus:outline-none focus:border-emerald-500"
                      />
                      <button
                        onClick={handleVaultSubmit}
                        disabled={isCracking}
                        className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-sans rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:opacity-50"
                      >
                        {isCracking ? 'PURGING...' : 'PURGE INTRUSION'}
                      </button>
                    </div>

                    {vaultError && (
                      <div className="text-red-400 text-[11px] font-sans flex items-center gap-1.5 animate-fadeIn">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>{vaultError}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: VICTORY & SOLVED */}
            {activeTab === 'solved' && (
              <div className="py-6 px-4 text-center space-y-6 max-w-xl mx-auto">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(16,185,129,0.4)]"
                >
                  <Award className="w-10 h-10 animate-bounce" />
                </motion.div>

                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider">
                    CASE SOLVED // S-RANK FORENSIC DETECTIVE
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Repository Restored & Culprit Apprehended!
                  </h3>
                  <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
                    Outstanding deduction, Agent! You caught <span className="text-emerald-400 font-bold">Riley Chen (CipherNull)</span> red-handed
                    via cryptographic key <span className="text-cyan-400 font-mono">PGP-9921-NULL</span>.
                    The Smart India Hackathon kernel has been decrypted and deployed to production safely.
                  </p>
                </div>

                {/* Scorecard */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-center">
                  <div>
                    <div className="text-zinc-500 text-[10px]">TIME TAKEN</div>
                    <div className="text-emerald-400 font-bold text-sm sm:text-base font-mono">{formatTime(elapsedSeconds)}</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[10px]">CLUES RESOLVED</div>
                    <div className="text-emerald-400 font-bold text-sm sm:text-base font-mono">4 / 4</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[10px]">DETECTIVE RANK</div>
                    <div className="text-amber-400 font-bold text-sm sm:text-base font-mono">
                      {elapsedSeconds < 120 ? 'S+ Cyber Sherlock' : 'A+ Forensic Lead'}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-sans">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `🕵️ I just solved CASE #404: PROTOCOL OMEGA on Ishan Bagra's Developer Portfolio in ${formatTime(elapsedSeconds)}! Can you beat my time?`
                      );
                      alert('Detective accomplishment copied to clipboard!');
                      if (soundOn) soundFx.playSuccess();
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-all border border-zinc-700"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Copy Case Trophy</span>
                  </button>

                  <button
                    onClick={resetGame}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-all border border-zinc-700"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Play Again</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    Return to Portfolio
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CyberMysteryModal;
