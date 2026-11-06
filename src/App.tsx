import React, { useState, useEffect } from 'react';
import { CyberBackground } from './components/CyberBackground';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WriteupsPage } from './components/WriteupsPage';
import { WriteupDetailView } from './components/WriteupDetailView';
import { OperationsSection } from './components/OperationsSection';
import { ArsenalSection } from './components/ArsenalSection';
import { TeamSection } from './components/TeamSection';
import { AchievementsSection } from './components/AchievementsSection';
import { JoinContactSection } from './components/JoinContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { WRITEUPS } from './data/teamData';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'writeups' | 'writeup-detail'>('home');
  const [selectedWriteupId, setSelectedWriteupId] = useState<string | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedRoleForJoin, setSelectedRoleForJoin] = useState('Web Exploitation Lead');
  const [activeSection, setActiveSection] = useState('overview');

  // Handle URL hash changes for page and section routing
  const parseHash = () => {
    const rawHash = window.location.hash.replace('#', '');
    if (!rawHash) {
      setCurrentPage('home');
      return;
    }

    if (rawHash === 'writeups') {
      setCurrentPage('writeups');
      setSelectedWriteupId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (rawHash.startsWith('writeup/')) {
      const id = rawHash.replace('writeup/', '');
      const found = WRITEUPS.find((w) => w.id === id);
      if (found) {
        setSelectedWriteupId(id);
        setCurrentPage('writeup-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('writeups');
      }
    } else {
      // Home page sections: overview, services, arsenal, team, achievements, join
      setCurrentPage('home');
      setSelectedWriteupId(null);
      setActiveSection(rawHash);
      const el = document.getElementById(rawHash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    }
  };

  useEffect(() => {
    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigatePage = (page: 'home' | 'writeups') => {
    setCurrentPage(page);
    if (page === 'writeups') {
      window.location.hash = 'writeups';
    } else {
      window.location.hash = 'home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectWriteup = (id: string) => {
    setSelectedWriteupId(id);
    setCurrentPage('writeup-detail');
    window.location.hash = `writeup/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = sectionId;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      setActiveSection(sectionId);
      window.location.hash = sectionId;
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleApplyRole = (role: string) => {
    setSelectedRoleForJoin(role);
    handleNavigateSection('join');
  };

  // Global hotkeys: Ctrl+K or ` or ~ for terminal
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

  const activeWriteup = WRITEUPS.find((w) => w.id === selectedWriteupId) || WRITEUPS[0];

  return (
    <div className="relative bg-[#05070a] text-[#e6edf3] min-h-screen selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
      {/* Lightweight 60fps Cyber Particle Background */}
      <CyberBackground />

      {/* Subtle cursor glow */}
      <CursorGlow />

      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
        onNavigatePage={handleNavigatePage}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Routed Page Views */}
      <main className="relative z-10">
        {/* VIEW 1: HOME PAGE (Clean All-in-One Syndicate - NO writeup list on homepage!) */}
        {currentPage === 'home' && (
          <div className="animate-fadeIn">
            {/* High-Impact Hero with CTA to Writeups Hub */}
            <Hero
              onOpenTerminal={() => setTerminalOpen(true)}
              onNavigateSection={handleNavigateSection}
              onOpenWriteupsPage={() => handleNavigatePage('writeups')}
            />

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
          </div>
        )}

        {/* VIEW 2: DEDICATED WRITEUPS CATALOG PAGE (Separate Page!) */}
        {currentPage === 'writeups' && (
          <div className="animate-fadeIn">
            <WriteupsPage
              onSelectWriteup={handleSelectWriteup}
              onBackToHome={() => handleNavigatePage('home')}
            />
          </div>
        )}

        {/* VIEW 3: DEDICATED WRITEUP DETAIL WALKTHROUGH READER */}
        {currentPage === 'writeup-detail' && activeWriteup && (
          <div className="animate-fadeIn">
            <WriteupDetailView
              writeup={activeWriteup}
              onBack={() => handleNavigatePage('writeups')}
              onSelectWriteup={handleSelectWriteup}
            />
          </div>
        )}
      </main>

      {/* Streamlined Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Universal Interactive Cyber CLI Shell */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onNavigateSection={(sec) => {
          if (sec === 'writeups') {
            handleNavigatePage('writeups');
          } else {
            handleNavigateSection(sec);
          }
        }}
      />
    </div>
  );
};

export default App;
