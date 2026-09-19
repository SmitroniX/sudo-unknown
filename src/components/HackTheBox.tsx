import React, { useState } from 'react';
import { ExternalLink, Copy, Check, ShieldCheck, Terminal, Server, Flag, Cpu } from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';

export const HackTheBox: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyTeamId = () => {
    navigator.clipboard.writeText('331386');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const htbTracks = [
    {
      title: "CTF Tournaments",
      desc: "Seasonal global events: HTB Cyber Apocalypse, University CTF, and Business CTF.",
      icon: Flag,
      status: "COMPETITIVE"
    },
    {
      title: "Weekly Machine Clears",
      desc: "Boot-to-root solves across active Linux and Windows boxes ranging from Easy to Insane.",
      icon: Server,
      status: "PRACTICE"
    },
    {
      title: "Pro Labs & Fortresses",
      desc: "Deep enterprise simulation environments testing multi-domain Active Directory pivoting.",
      icon: ShieldCheck,
      status: "ADVANCED"
    },
    {
      title: "Category Challenges",
      desc: "Focused problem solving in PWN, Reverse, Crypto, Forensics, and Web categories.",
      icon: Cpu,
      status: "CURRICULUM"
    }
  ];

  return (
    <section id="htb" className="py-24 relative z-10 border-t border-white/[0.06] bg-[#07090b]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#090c0f] border border-white/[0.1] p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff88]/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1318] border border-[#00ff88]/30 text-xs font-mono text-[#00ff88]">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
                <span>OFFICIAL HACK THE BOX DIVISION</span>
              </div>

              <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Hack The Box // <span className="text-[#00ff88]">sudo Unknown</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                sudo Unknown is an officially registered CTF squad on the Hack The Box competitive platform.
                We coordinate team machine runs, shared lab notes, and live war rooms during official seasons.
              </p>

              {/* Verified Team Box */}
              <div className="p-4 rounded-xl bg-[#050505] border border-white/[0.08] space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-gray-300">
                    <span className="text-gray-500">HTB TEAM IDENTIFIER:</span>
                    <span className="text-[#00ff88] font-bold text-sm">331386</span>
                  </div>
                  <button
                    onClick={copyTeamId}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e1318] hover:bg-[#141920] border border-white/10 text-[11px] font-mono text-gray-300 hover:text-[#00ff88] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-[#00ff88]" />
                        <span className="text-[#00ff88]">Copied ID</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] font-mono text-gray-400 border-t border-white/[0.04] pt-2 leading-relaxed">
                  <strong className="text-gray-300">Platform Transparency:</strong> As a rising new squad, all live statistics, solved machine counts, and official member listings are verified directly on the Hack The Box portal.
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={SITE_CONFIG.htbTeamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00ff88] text-black font-mono font-bold text-sm hover:bg-[#22ff99] transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Team on Hack The Box</span>
                </a>

                <a
                  href="https://ctf.hackthebox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0e1318] text-gray-200 font-mono text-xs font-semibold border border-white/10 hover:border-[#00ff88]/40 hover:text-white transition-all"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#00ff88]" />
                  <span>Open HTB CTF Portal</span>
                </a>
              </div>
            </div>

            {/* Right Column: 4 Track Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {htbTracks.map((tr) => {
                const Icon = tr.icon;
                return (
                  <div
                    key={tr.title}
                    className="p-4 rounded-xl bg-[#050505] border border-white/[0.06] hover:border-[#00ff88]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0e1318] border border-white/[0.05] flex items-center justify-center text-[#00ff88]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[9px] text-[#00ff88] bg-[#00ff88]/10 px-1.5 py-0.5 rounded border border-[#00ff88]/20">
                        {tr.status}
                      </span>
                    </div>
                    <h4 className="font-mono text-xs font-bold text-white mb-1">
                      {tr.title}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                      {tr.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
