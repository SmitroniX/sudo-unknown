import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Metrics', href: '#stats' },
    { name: 'Categories', href: '#skills' },
    { name: 'Team', href: '#team' },
    { name: 'Hack The Box', href: '#htb' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Writeups', href: '#writeups' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Glitch Effect */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#00ff66]/50 rounded-lg p-1"
          aria-label="sudo Unknown CTF Home"
        >
          <div className="relative w-10 h-10 rounded-lg bg-[#0d1117] border border-[#00ff66]/40 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 group-hover:border-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.15)]">
            <span className="font-mono text-sm font-bold text-[#00ff66] tracking-tighter">#&gt;</span>
            <div className="absolute inset-0 bg-[#00ff66]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span
                className="glitch-text font-mono text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#00ff66] transition-colors"
                data-text="sudo Unknown"
              >
                sudo <span className="text-[#00ff66]">Unknown</span>
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/30">
                CTF
              </span>
            </div>
            <span className="font-mono text-[10px] text-gray-400 hidden sm:block tracking-wider">
              HTB TEAM // 331386
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#0a0d0f]/60 backdrop-blur-sm border border-white/5 rounded-full px-4 py-1.5 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-gray-300 hover:text-[#00ff66] rounded-md transition-colors hover:bg-white/5 focus:outline-none focus:text-[#00ff66]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & HTB Status */}
        <div className="hidden md:flex items-center gap-3">
          {/* HTB Status Badge */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0d1117] border border-white/10 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff66]"></span>
            </span>
            <span className="text-gray-300 text-[11px]">HTB VERIFIED</span>
          </div>

          {/* Quick Interactive Terminal Button */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0a0d0f] hover:bg-[#161b22] border border-[#00ff66]/30 text-gray-300 hover:text-[#00ff66] text-xs font-mono transition-all hover:border-[#00ff66]"
              title="Open Interactive Cyber Shell"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00ff66]" />
              <span>[ CLI ]</span>
            </button>
          )}

          {/* Join CTA */}
          <a
            href="#join"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-[#00ff66] text-black font-mono text-xs font-bold hover:bg-[#22ff77] transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,255,102,0.35)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN ROSTER</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-md bg-[#0d1117] border border-[#00ff66]/30 text-[#00ff66]"
              aria-label="Open CLI"
            >
              <Terminal className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-[#0d1117] border border-white/10 text-gray-300 hover:text-[#00ff66] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-white/5 font-mono text-xs text-gray-400">
            <span>STATUS: ACTIVE_OPERATION</span>
            <span className="text-[#00ff66]">TEAM // 331386</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md bg-[#0d1117] border border-white/5 text-gray-300 hover:text-[#00ff66] hover:border-[#00ff66]/30 text-xs font-mono transition-all"
              >
                &gt; {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-2">
            <a
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-md bg-[#00ff66] text-black font-mono text-xs font-bold hover:bg-[#22ff77]"
            >
              JOIN THE UNKNOWN
            </a>
            <a
              href={SITE_CONFIG.htbTeamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 py-2 rounded-md bg-[#0d1117] border border-white/10 text-gray-300 font-mono text-xs hover:text-[#00ff66]"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#00ff66]" />
              <span>View Hack The Box Roster</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
