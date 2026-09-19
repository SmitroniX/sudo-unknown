import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';
import { BrandedTitle } from './BrandedTitle';

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
    { name: 'Stats', href: '#stats' },
    { name: 'Categories', href: '#skills' },
    { name: 'Team', href: '#team' },
    { name: 'Hack The Box', href: '#htb' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Writeups', href: '#writeups' },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Official Team Badge */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none rounded-lg p-1"
          aria-label="sudo Unknown CTF Home"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#00ff88]/40 group-hover:border-[#00ff88] transition-all group-hover:scale-105 shadow-[0_0_15px_rgba(0,255,136,0.2)]">
            <img
              src="/logo.png"
              alt="sudo Unknown Team Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <BrandedTitle size="sm" showCrown={true} />
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">
                HTB CTF
              </span>
            </div>
            <span className="font-mono text-[10px] text-gray-400 hidden sm:block tracking-wider">
              TEAM #331386 // FOUNDING ROSTER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#0a0d0f]/80 backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-1.5 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-gray-300 hover:text-[#00ff88] rounded-md transition-colors hover:bg-white/[0.04]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Badge & Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* HTB Status Badge */}
          <a
            href={SITE_CONFIG.htbTeamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1117] border border-white/[0.08] hover:border-[#00ff88]/40 text-xs font-mono transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
            </span>
            <span className="text-gray-300 text-[11px]">HTB #331386</span>
          </a>

          {/* Quick Interactive Terminal */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a0d0f] hover:bg-[#141922] border border-white/[0.08] hover:border-[#00ff88]/40 text-gray-300 hover:text-[#00ff88] text-xs font-mono transition-all"
              title="Launch Terminal Shell (Hotkey: `)"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00ff88]" />
              <span>[ CLI ]</span>
            </button>
          )}

          {/* Join Roster CTA */}
          <a
            href="#team"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#00ff88] text-black font-mono text-xs font-bold hover:bg-[#22ff99] transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,255,136,0.3)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN ROSTER</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-[#0d1117] border border-white/10 text-[#00ff88]"
              aria-label="Open CLI"
            >
              <Terminal className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0d1117] border border-white/10 text-gray-300 hover:text-[#00ff88]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/98 border-b border-white/10 px-4 pt-4 pb-6 space-y-3 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/5 font-mono text-xs text-gray-400">
            <span>TEAM: sudo Unknown</span>
            <span className="text-[#00ff88]">HTB #331386</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg bg-[#0d1117] border border-white/5 text-gray-300 hover:text-[#00ff88] text-xs font-mono transition-colors"
              >
                &gt; {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-[#00ff88] text-black font-mono text-xs font-bold hover:bg-[#22ff99]"
            >
              APPLY FOR FOUNDING ROSTER
            </a>
            <a
              href={SITE_CONFIG.htbTeamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#0d1117] border border-white/10 text-gray-300 font-mono text-xs hover:text-[#00ff88]"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#00ff88]" />
              <span>View on Hack The Box</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
