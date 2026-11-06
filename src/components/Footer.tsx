import React from 'react';
import { Terminal, Github, Linkedin, MessageSquare, ArrowUp, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';
import { BrandedTitle } from './BrandedTitle';

interface FooterProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Overview', id: 'overview' },
    { name: 'HTB Writeups', id: 'writeups' },
    { name: 'Services & Ops', id: 'services' },
    { name: 'Tool Arsenal', id: 'arsenal' },
    { name: 'Team Syndicate', id: 'team' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Recruitment', id: 'join' }
  ];

  const handleNav = (id: string, e: React.MouseEvent) => {
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(id);
    }
  };

  return (
    <footer className="relative z-10 bg-[#040608] border-t border-white/[0.08] text-gray-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-3">
            <BrandedTitle size="md" showCrown={true} />
            <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed">
              All-in-One Cybersecurity Collective &amp; Research Syndicate. Dedicated to offensive security mastery, adversary simulation, competitive CTFs, and open-source tooling.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#00ff88]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
              <span>Permission Granted. Identity Unknown.</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-white font-bold tracking-wider text-[11px] block uppercase">
              // Navigation Directory
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNav(link.id, e)}
                  className="hover:text-[#00ff88] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Channels & Status */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-white font-bold tracking-wider text-[11px] block uppercase">
              // Squad Channels
            </span>
            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#5865F2] hover:text-white border border-white/10 flex items-center justify-center transition-all text-gray-300"
                title="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white hover:text-black border border-white/10 flex items-center justify-center transition-all text-gray-300"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0077b5] hover:text-white border border-white/10 flex items-center justify-center transition-all text-gray-300"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.htbTeamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#00ff88] hover:text-black border border-white/10 flex items-center justify-center transition-all text-gray-300"
                title="Hack The Box Squad #331386"
              >
                <Terminal className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[11px] text-gray-500 pt-1">
              HTB Official Squad: <span className="text-gray-300 font-bold">#331386</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; {SITE_CONFIG.foundedYear} {SITE_CONFIG.companyName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-500">Decentralized Global Syndicate</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#00ff88] transition-colors flex items-center gap-1"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
