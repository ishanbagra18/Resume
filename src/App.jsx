import React from 'react';
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




function App() {

  return (
    <div className='scroll-smooth'>
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
  )
}

export default App
