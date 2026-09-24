import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <SplashScreen onComplete={() => setSplashDone(true)} />

      <Routes>
        <Route path="/terminal" element={<TerminalPage />} />
        <Route
          path="/"
          element={
            <div
              className="scroll-smooth relative w-full bg-black min-h-screen"
              style={{
                opacity: splashDone ? 1 : 0,
                transition: 'opacity 0.6s ease',
                pointerEvents: splashDone ? 'auto' : 'none',
              }}
            >
              <Navbar />
              <HomePage />
              <AboutMe />
              <TechStack />
              <MyProject />
              <Experience />
              <CodingProfiles />
              <MyCertificate />
              <ConnectWithMe />
              <VisitorCounter />
              <Footer />

              {/* Floating Terminal Button */}
              {splashDone && (
                <button
                  onClick={() => navigate('/terminal')}
                  className="fixed bottom-6 right-6 z-[100] bg-zinc-950/90 border border-green-500/40 text-green-400 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full font-mono text-xs sm:text-sm shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105 hover:bg-green-500/10 hover:border-green-400 backdrop-blur-xl transition-all flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <span>&gt;_ Terminal Mode</span>
                </button>
              )}
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;


