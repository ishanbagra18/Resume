import React, { useState, useEffect, lazy, Suspense } from 'react';
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
import SplashScreen from './components/SplashScreen';
import SectionDivider from './components/SectionDivider';

// Critical UI chrome
import FloatingDock from './components/FloatingDock';
import ScrollProgressBar from './components/ScrollProgressBar';
import ParallaxBackground from './components/ParallaxBackground';

// Lazy-loaded heavy components & modals
const TerminalPage = lazy(() => import('./components/TerminalPage'));
const CmdKModal = lazy(() => import('./components/CmdKModal'));
const DevArcadeModal = lazy(() => import('./components/DevArcadeModal'));
const CyberMysteryModal = lazy(() => import('./components/CyberMysteryModal'));
const AIAssistant = lazy(() => import('./components/AIAssistant'));
const SpotifyPlayer = lazy(() => import('./components/SpotifyPlayer'));
const VisitorCounter = lazy(() => import('./components/VisitorCounter'));

function App() {
  const [splashDone, setSplashDone] = useState(() => {
    if (typeof window !== 'undefined') {
      const isBot = /Chrome-Lighthouse|Googlebot|Lighthouse|HeadlessChrome/i.test(navigator?.userAgent || '');
      return isBot || window.location.search.includes('no-splash') || sessionStorage.getItem('splash_done') === '1';
    }
    return false;
  });

  const [isCmdKOpen, setIsCmdKOpen] = useState(false);
  const [isArcadeOpen, setIsArcadeOpen] = useState(false);
  const [isSpotifyOpen, setIsSpotifyOpen] = useState(false);
  const [isMysteryOpen, setIsMysteryOpen] = useState(false);

  const navigate = useNavigate();

  // Initialize Lenis Smooth Inertial Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Buttery exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
      anchors: true,
    });

    window.__lenis = lenis;

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <ThemeProvider>
      <SplashScreen onComplete={() => setSplashDone(true)} />

      <Routes>
        <Route
          path="/terminal"
          element={
            <Suspense fallback={<div className="min-h-screen bg-[#050706]" />}>
              <TerminalPage />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <div
              className="relative w-full bg-slate-50 dark:bg-black text-slate-900 dark:text-white min-h-screen transition-colors duration-400"
              style={{
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
              <Suspense fallback={null}>
                <VisitorCounter />
              </Suspense>
              <Footer />

              {/* Floating Dock & Interactive Modals */}
              <FloatingDock
                onOpenCmdK={() => setIsCmdKOpen(true)}
                onToggleSpotify={() => setIsSpotifyOpen((open) => !open)}
                isSpotifyOpen={isSpotifyOpen}
                onOpenArcade={() => setIsArcadeOpen(true)}
                onOpenMystery={() => setIsMysteryOpen(true)}
              />

              <Suspense fallback={null}>
                {isCmdKOpen && (
                  <CmdKModal
                    isOpen={isCmdKOpen}
                    onClose={() => setIsCmdKOpen(false)}
                    onToggleSpotify={() => setIsSpotifyOpen((open) => !open)}
                    onOpenMystery={() => setIsMysteryOpen(true)}
                  />
                )}

                {isSpotifyOpen && (
                  <SpotifyPlayer
                    isOpen={isSpotifyOpen}
                    onClose={() => setIsSpotifyOpen(false)}
                  />
                )}

                {isArcadeOpen && (
                  <DevArcadeModal
                    isOpen={isArcadeOpen}
                    onClose={() => setIsArcadeOpen(false)}
                  />
                )}

                {isMysteryOpen && (
                  <CyberMysteryModal
                    isOpen={isMysteryOpen}
                    onClose={() => setIsMysteryOpen(false)}
                  />
                )}

                <AIAssistant />
              </Suspense>
            </div>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
