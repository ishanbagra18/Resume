import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import CodingProfiles from './components/CodingProfiles';
import MyProject from './components/MyProject';
import MyCertificate from './components/MyCertificate';
import ConnectWithMe from './components/ConnectWithMe';
import Footer from './components/Footer';
import Experience from './components/Experience';
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
        <Route path="/terminal" element={
          <TerminalPage />
        } />
        <Route path="/" element={
          <div
            className='scroll-smooth relative w-full bg-black min-h-screen'
            style={{
              opacity: splashDone ? 1 : 0,
              transition: 'opacity 0.5s ease',
              pointerEvents: splashDone ? 'auto' : 'none',
            }}
          >
        <Navbar />
        <HomePage />
        <AboutMe/>
        <TechStack />
        <CodingProfiles />
        <MyProject />
        <Experience/>
        <MyCertificate />
        <ConnectWithMe />
        <VisitorCounter/>
        <Footer />
        
        {/* Floating Terminal Button */}
        {splashDone && (
          <button 
            onClick={() => navigate('/terminal')}
            className="fixed bottom-6 right-6 z-[100] bg-zinc-900 border border-green-500/50 text-green-400 px-4 py-2 sm:px-5 sm:py-3 rounded-full font-mono text-xs sm:text-sm shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-105 hover:bg-green-500/10 transition-all flex items-center gap-2"
          >
            <span>>_</span> Terminal Mode
          </button>
        )}
      </div>
        } />
      </Routes>
    </>
  )
}

export default App
