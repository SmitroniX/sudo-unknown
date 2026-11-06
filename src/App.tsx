import React, { useState, useEffect } from 'react';
import { CyberBackground } from './components/CyberBackground';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WriteupsPage } from './components/WriteupsPage';
import { OperationsSection } from './components/OperationsSection';
import { ArsenalSection } from './components/ArsenalSection';
import { TeamSection } from './components/TeamSection';
import { AchievementsSection } from './components/AchievementsSection';
import { JoinContactSection } from './components/JoinContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedRoleForJoin, setSelectedRoleForJoin] = useState('Web Exploitation Lead');
  const [activeSection, setActiveSection] = useState('overview');

  // Handle smooth navigation between sections & URL hash
  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sync hash on initial load & scroll spy
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }

    const handleScroll = () => {
      const sections = ['overview', 'writeups', 'services', 'arsenal', 'team', 'achievements', 'join'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyRole = (role: string) => {
    setSelectedRoleForJoin(role);
    handleNavigateSection('join');
  };

  // Global hotkey: press `~` or backtick or Ctrl+K / Cmd+K to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
        return;
      }

      if (e.key === '`' || e.key === '~') {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setTerminalOpen((prev) => !prev);
        }
      }

      if (e.key === 'Escape' && terminalOpen) {
        setTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen]);

  return (
    <div className="relative bg-[#05070a] text-[#e6edf3] min-h-screen selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
      {/* 60fps Lightweight Cyber Particle Canvas */}
      <CyberBackground />

      {/* Subtle cursor glow on desktop */}
      <CursorGlow />

      {/* Modern Fixed Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigateSection}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* High-Impact Decluttered Hero */}
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* Dedicated HTB & CTF Writeups Page & Explorer */}
        <WriteupsPage />

        {/* All-in-One Operations & Cybersecurity Services */}
        <OperationsSection />

        {/* Squad Tool Arsenal & Open-Source Repositories */}
        <ArsenalSection />

        {/* Team Syndicate Roster & Founding Slots */}
        <TeamSection onSelectRoleForApplication={handleApplyRole} />

        {/* Competitive Achievements & Tournaments */}
        <AchievementsSection />

        {/* Encrypted Application & Community Channels */}
        <JoinContactSection selectedRole={selectedRoleForJoin} />
      </main>

      {/* Modern Streamlined Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Interactive Cyber CLI Shell Drawer */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
};

export default App;
