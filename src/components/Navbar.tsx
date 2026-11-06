import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Menu,
  X,
  ExternalLink,
  Shield,
  FileCode,
  Users,
  Wrench,
  Trophy,
  MessageSquare,
  Linkedin,
  Github
} from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';
import { BrandedTitle } from './BrandedTitle';

interface NavbarProps {
  onOpenTerminal?: () => void;
  currentPage: 'home' | 'writeups' | 'writeup-detail';
  activeSection?: string;
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'writeups') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  currentPage,
  activeSection = 'overview',
  onNavigateSection,
  onNavigatePage
}) => {
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
    { name: 'Overview', id: 'overview', type: 'section' },
    { name: 'HTB Writeups Hub', id: 'writeups', type: 'page', isSpecial: true },
    { name: 'Services & Ops', id: 'services', type: 'section' },
    { name: 'Tool Arsenal', id: 'arsenal', type: 'section' },
    { name: 'Team Syndicate', id: 'team', type: 'section' },
    { name: 'Achievements', id: 'achievements', type: 'section' },
    { name: 'Join Us', id: 'join', type: 'section' },
  ];

  const handleLinkClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.type === 'page' && link.id === 'writeups') {
      onNavigatePage('writeups');
    } else {
      if (currentPage !== 'home') {
        onNavigatePage('home');
        setTimeout(() => onNavigateSection(link.id), 50);
      } else {
        onNavigateSection(link.id);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Syndicate Identity */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigatePage('home');
            onNavigateSection('overview');
          }}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="sudo Unknown Home"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-[#00ff88]/40 group-hover:border-[#00ff88] transition-all group-hover:scale-105 shadow-[0_0_15px_rgba(0,255,136,0.2)] bg-[#0c1015]">
            <img
              src="/logo.png"
              alt="sudo Unknown Team Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <BrandedTitle size="sm" showCrown={true} />
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">
                ALL-IN-ONE
              </span>
            </div>
            <span className="font-mono text-[9px] text-gray-400 tracking-wider uppercase hidden md:block">
              Cybersecurity Collective &amp; CTF
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0b0e14]/85 backdrop-blur-md border border-white/[0.08] rounded-full px-3 py-1.5 text-xs font-mono shadow-inner">
          {navLinks.map((link) => {
            const isWriteupsPageActive = (currentPage === 'writeups' || currentPage === 'writeup-detail') && link.id === 'writeups';
            const isSectionActive = currentPage === 'home' && activeSection === link.id;
            const isActive = isWriteupsPageActive || isSectionActive;

            return (
              <a
                key={link.name}
                href={link.type === 'page' ? '#writeups' : `#${link.id}`}
                onClick={(e) => handleLinkClick(link, e)}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#00ff88] text-black font-bold shadow-[0_0_12px_rgba(0,255,136,0.35)]'
                    : link.isSpecial
                    ? 'text-[#00ff88] hover:text-white hover:bg-white/5 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.isSpecial && !isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* CLI Terminal Launcher */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e141c] hover:bg-[#151d28] border border-white/10 hover:border-[#00ff88]/50 text-xs font-mono text-gray-300 hover:text-[#00ff88] transition-all shadow-sm"
              title="Toggle Interactive Cyber CLI (hotkey: ` or Ctrl+K)"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00ff88]" />
              <span>Terminal</span>
              <kbd className="hidden xl:inline px-1.5 py-0.5 rounded bg-black/50 border border-white/10 text-[9px] text-gray-400">
                ~
              </kbd>
            </button>
          )}

          {/* Discord War Room Quick Link */}
          <a
            href={SITE_CONFIG.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#5865F2]/15 border border-[#5865F2]/40 hover:border-[#5865F2] text-xs font-mono text-gray-200 hover:text-white transition-all shadow-[0_0_12px_rgba(88,101,242,0.15)]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#5865F2]" />
            <span className="font-semibold">Discord</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#0d1218] border border-white/10 text-gray-300 hover:text-white hover:border-[#00ff88]/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090d]/95 backdrop-blur-xl border-b border-white/10 px-5 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-2 font-mono text-sm">
            {navLinks.map((link) => {
              const isWriteupsPageActive = (currentPage === 'writeups' || currentPage === 'writeup-detail') && link.id === 'writeups';
              const isSectionActive = currentPage === 'home' && activeSection === link.id;
              const isActive = isWriteupsPageActive || isSectionActive;

              return (
                <a
                  key={link.name}
                  href={link.type === 'page' ? '#writeups' : `#${link.id}`}
                  onClick={(e) => handleLinkClick(link, e)}
                  className={`px-4 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#00ff88] text-black font-bold'
                      : link.isSpecial
                      ? 'bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.isSpecial && <span className="text-[10px] uppercase font-bold text-[#00ff88]">Dedicated Page</span>}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2.5">
            {onOpenTerminal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full py-2.5 rounded-xl bg-[#0e141c] border border-white/10 text-xs font-mono text-gray-300 hover:text-[#00ff88] flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4 text-[#00ff88]" />
                <span>Launch Interactive Shell</span>
              </button>
            )}

            <div className="grid grid-cols-2 gap-2 w-full pt-2 font-mono text-xs">
              <a
                href={SITE_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/40 text-center text-white"
              >
                Discord War Room
              </a>
              <a
                href={SITE_CONFIG.htbTeamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-xl bg-[#00ff88]/20 border border-[#00ff88]/40 text-center text-[#00ff88]"
              >
                HTB Squad #331386
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
