import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const navigate = useNavigate();

  return (
    <ThemeProvider>
      <SplashScreen onComplete={() => setSplashDone(true)} />

      <Routes>
        <Route path="/terminal" element={<TerminalPage />} />
        <Route
          path="/"
          element={
            <div
              className="scroll-smooth relative w-full bg-slate-50 dark:bg-black text-slate-900 dark:text-white min-h-screen transition-colors duration-400"
              style={{
                opacity: splashDone ? 1 : 0,
                transition: 'opacity 0.6s ease, background-color 0.4s ease, color 0.4s ease',
                pointerEvents: splashDone ? 'auto' : 'none',
              }}
            >
              <Navbar />
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

              {/* Floating Terminal Button */}
              {splashDone && (
                <button
                  onClick={() => navigate('/terminal')}
                  className="fixed bottom-6 right-6 z-[100] bg-white/90 dark:bg-zinc-950/90 border border-green-500/40 text-green-600 dark:text-green-400 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full font-mono text-xs sm:text-sm shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105 hover:bg-green-500/10 hover:border-green-400 backdrop-blur-xl transition-all flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <span>&gt;_ Terminal Mode</span>
                </button>
              )}
            </div>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;


