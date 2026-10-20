import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import MyProject from './components/MyProject';
import Experience from './components/Experience';
import CodingProfiles from './components/CodingProfiles';
import MyCertificate from './components/MyCertificate';
import ConnectWithMe from './components/ConnectWithMe';
import Footer from './components/Footer';
import VisitorCounter from './components/VisitorCounter';
import SplashScreen from './components/SplashScreen';
import TerminalPage from './components/TerminalPage';
import SectionDivider from './components/SectionDivider';

// New Features & Parallax Effects
import CmdKModal from './components/CmdKModal';
import DevArcadeModal from './components/DevArcadeModal';
import CyberMysteryModal from './components/CyberMysteryModal';
import FloatingDock from './components/FloatingDock';
import ScrollProgressBar from './components/ScrollProgressBar';
import ParallaxBackground from './components/ParallaxBackground';
import AIAssistant from './components/AIAssistant';
import SpotifyPlayer from './components/SpotifyPlayer';

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [isCmdKOpen, setIsCmdKOpen] = useState(false);
  const [isArcadeOpen, setIsArcadeOpen] = useState(false);
  const [isSpotifyOpen, setIsSpotifyOpen] = useState(false);
  const [isMysteryOpen, setIsMysteryOpen] = useState(false);

  const navigate = useNavigate();

  // Initialize Lenis Smooth Inertial Scrolling
  useEffect(() => {
    if (!splashDone) return;

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Expo out — silky deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
      infinite: false,
      lerp: 0.07, // Lower = more inertia / buttery feel
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, [splashDone]);

  return (
    <ThemeProvider>
      <SplashScreen onComplete={() => setSplashDone(true)} />

      <Routes>
        <Route path="/terminal" element={<TerminalPage />} />
        <Route
          path="/"
          element={
            <div
              className="relative w-full bg-slate-50 dark:bg-black text-slate-900 dark:text-white min-h-screen transition-colors duration-400"
              style={{
                opacity: splashDone ? 1 : 0,
                transition: 'opacity 0.6s ease, background-color 0.4s ease, color 0.4s ease',
                pointerEvents: splashDone ? 'auto' : 'none',
              }}
            >
              {/* Global Scroll Progress Bar */}
              <ScrollProgressBar />

              {/* Floating Ambient Parallax Depth Background */}
              <ParallaxBackground />

              <Navbar
                onOpenCmdK={() => setIsCmdKOpen(true)}
                onOpenMystery={() => setIsMysteryOpen(true)}
              />

              <HomePage />
              <SectionDivider variant="gradient-line" />
              <AboutMe />
              <SectionDivider variant="dots" />
              <TechStack />
              <SectionDivider variant="gradient-line" />
              <MyProject />
              <SectionDivider variant="dots" />
              <Experience />
              <SectionDivider variant="gradient-line" />
              <CodingProfiles />
              <SectionDivider variant="dots" />
              <MyCertificate />
              <SectionDivider variant="gradient-line" />
              <ConnectWithMe />
              <VisitorCounter />
              <Footer />

              {/* Floating Dock & Interactive Modals */}
              {splashDone && (
                <>
                  <FloatingDock
                    onOpenCmdK={() => setIsCmdKOpen(true)}
                    onToggleSpotify={() => setIsSpotifyOpen((open) => !open)}
                    isSpotifyOpen={isSpotifyOpen}
                    onOpenArcade={() => setIsArcadeOpen(true)}
                    onOpenMystery={() => setIsMysteryOpen(true)}
                  />

                  <CmdKModal
                    isOpen={isCmdKOpen}
                    onClose={() => setIsCmdKOpen(false)}
                    onToggleSpotify={() => setIsSpotifyOpen((open) => !open)}
                    onOpenMystery={() => setIsMysteryOpen(true)}
                  />

                  <SpotifyPlayer
                    isOpen={isSpotifyOpen}
                    onClose={() => setIsSpotifyOpen(false)}
                  />

                  <DevArcadeModal
                    isOpen={isArcadeOpen}
                    onClose={() => setIsArcadeOpen(false)}
                  />

                  <CyberMysteryModal
                    isOpen={isMysteryOpen}
                    onClose={() => setIsMysteryOpen(false)}
                  />

                  <AIAssistant />
                </>
              )}
            </div>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;


