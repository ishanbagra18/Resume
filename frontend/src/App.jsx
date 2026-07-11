import React, { useState } from 'react';
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



function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <SplashScreen onComplete={() => setSplashDone(true)} />
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
      </div>
    </>
  )
}

export default App
