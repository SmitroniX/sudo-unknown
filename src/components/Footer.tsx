import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';
import { BrandedTitle } from './BrandedTitle';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#040506] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.05]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#00ff88]/40 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="sudo Unknown Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <BrandedTitle size="lg" showCrown={true} />
            </div>

            <p className="font-mono text-sm text-gray-200">
              &ldquo;Permission Granted. Identity Unknown.&rdquo;
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-gray-500">
              <span>NO IDENTITY</span> • <span>NO LIMITS</span> • <span>JUST FLAGS</span>
            </div>

            <p className="font-sans text-xs text-gray-400 max-w-md leading-relaxed">
              Official Hack The Box competitive CTF team (#331386). Focused on hands-on learning,
              offensive tradecraft, and building a tight-knit community of ethical hackers.
            </p>

            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg bg-[#090c0f] border border-white/[0.06] font-mono text-xs text-gray-400">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
              </span>
              <span>HTB DIVISION ACTIVE</span>
              <span className="text-gray-600">|</span>
              <span className="text-[#00ff88]">EST. 2026</span>
            </div>
          </div>

          {/* Navigation Index */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-white font-bold tracking-wider uppercase text-xs mb-4">
              // DIRECTORY
            </div>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#00ff88] transition-colors">&gt; Team Profile</a></li>
              <li><a href="#stats" className="hover:text-[#00ff88] transition-colors">&gt; Verification &amp; Stats</a></li>
              <li><a href="#skills" className="hover:text-[#00ff88] transition-colors">&gt; Target Categories</a></li>
              <li><a href="#team" className="hover:text-[#00ff88] transition-colors">&gt; Founding Roster</a></li>
              <li><a href="#htb" className="hover:text-[#00ff88] transition-colors">&gt; Hack The Box Hub</a></li>
              <li><a href="#achievements" className="hover:text-[#00ff88] transition-colors">&gt; CTF Achievements</a></li>
              <li><a href="#writeups" className="hover:text-[#00ff88] transition-colors">&gt; Cybersecurity Writeups</a></li>
              <li><a href="#join" className="hover:text-[#00ff88] transition-colors">&gt; Apply for Roster</a></li>
              <li><a href="#contact" className="hover:text-[#00ff88] transition-colors">&gt; Community &amp; Comms</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-white font-bold tracking-wider uppercase text-xs mb-4">
              // NETWORKS
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={SITE_CONFIG.htbTeamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00ff88] transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#00ff88]" />
                  <span>Hack The Box (#331386)</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00ff88] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#00ff88]" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00ff88] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#00ff88]" />
                  <span>Discord Community</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00ff88] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#00ff88]" />
                  <span>LinkedIn Page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="text-gray-500 text-center sm:text-left">
            &copy; 2026 {SITE_CONFIG.teamName}. Permission Granted. Identity Unknown.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#090c0f] hover:bg-[#141920] border border-white/[0.08] hover:border-[#00ff88] text-gray-300 hover:text-[#00ff88] transition-all"
            aria-label="Scroll back to top"
          >
            <span>RETURN_TO_TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
