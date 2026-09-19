import React, { useState, useEffect } from 'react';
import { CyberBackground } from './components/CyberBackground';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Team } from './components/Team';
import { HackTheBox } from './components/HackTheBox';
import { Achievements } from './components/Achievements';
import { Writeups } from './components/Writeups';
import { JoinTeam } from './components/JoinTeam';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global hotkey: press `~` or backtick to toggle cyber CLI
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        // Prevent typing backtick in focused input outside terminal
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setTerminalOpen((prev) => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative bg-[#050505] text-[#e6edf3] min-h-screen selection:bg-[#00ff66]/30 selection:text-[#00ff66]">
      {/* Cinematic Cyber Background Canvas & Glows */}
      <CyberBackground />

      {/* Subtle cursor tracking glow for desktop */}
      <CursorGlow />

      {/* Navigation Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Full-screen Hero Section */}
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Verified Stats Section */}
        <Stats />

        {/* Who Are We? About Section */}
        <About />

        {/* Skills / Categories Section */}
        <Skills />

        {/* Team Members Section */}
        <Team />

        {/* Dedicated Hack The Box Section */}
        <HackTheBox />

        {/* Achievements / CTF Timeline Section */}
        <Achievements />

        {/* Cybersecurity Writeups Section */}
        <Writeups />

        {/* Recruitment & Join Section */}
        <JoinTeam />

        {/* Community & Contact Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cyber CLI Drawer / Easter Egg */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
};

export default App;
