import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#040506] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0d1117] border border-[#00ff66]/40 flex items-center justify-center text-[#00ff66] font-mono text-sm font-bold shadow-[0_0_10px_rgba(0,255,102,0.2)]">
                #&gt;
              </div>
              <span className="font-mono text-2xl font-bold text-white tracking-tight">
                sudo <span className="text-[#00ff66]">Unknown</span>
              </span>
            </div>

            {/* Tagline requested */}
            <p className="font-mono text-sm text-gray-300">
              &ldquo;Permission Granted. Identity Unknown.&rdquo;
            </p>

            <p className="font-sans text-xs text-gray-400 max-w-md leading-relaxed">
              Competitive cybersecurity Capture The Flag team focused on hands-on learning,
              problem solving, collaboration, and continuous improvement through Hack The Box and cybersecurity challenges.
            </p>

            {/* Live Uptime telemetry */}
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg bg-[#0a0d0f] border border-white/5 font-mono text-xs text-gray-400">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff66]"></span>
              </span>
              <span>NETWORK STATUS: 100% OPERATIONAL</span>
              <span className="text-gray-600">|</span>
              <span className="text-[#00ff66]">LATENCY: ~14ms</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-white font-bold tracking-wider uppercase text-xs mb-4">
              // SITE INDEX
            </div>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#00ff66] transition-colors">&gt; Who Are We?</a></li>
              <li><a href="#stats" className="hover:text-[#00ff66] transition-colors">&gt; Team Metrics</a></li>
              <li><a href="#skills" className="hover:text-[#00ff66] transition-colors">&gt; Categories &amp; Skills</a></li>
              <li><a href="#team" className="hover:text-[#00ff66] transition-colors">&gt; Operators Roster</a></li>
              <li><a href="#htb" className="hover:text-[#00ff66] transition-colors">&gt; Hack The Box Division</a></li>
              <li><a href="#achievements" className="hover:text-[#00ff66] transition-colors">&gt; CTF Timeline</a></li>
              <li><a href="#writeups" className="hover:text-[#00ff66] transition-colors">&gt; Challenge Writeups</a></li>
            </ul>
          </div>

          {/* Col 3: Official Social Channels */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-white font-bold tracking-wider uppercase text-xs mb-4">
              // EXTERNAL COMMS
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={SITE_CONFIG.htbTeamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00ff66] transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>Hack The Box (#331386)</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00ff66] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00ff66] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>Discord</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00ff66] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="text-gray-400 text-center sm:text-left">
            &copy; 2026 {SITE_CONFIG.teamName}. All rights reserved. Built for competitive CTF excellence.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0d0f] hover:bg-[#161b22] border border-white/10 hover:border-[#00ff66] text-gray-300 hover:text-[#00ff66] transition-all"
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
