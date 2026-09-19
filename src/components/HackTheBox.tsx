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

  const htbFocusTracks = [
    {
      title: "CTF Tournaments",
      desc: "Seasonal global tournaments including HTB Cyber Apocalypse, University CTF, and Business CTF.",
      icon: Flag,
      status: "COMPETITIVE"
    },
    {
      title: "Machine Clears",
      desc: "Coordinated boot-to-root solves on Linux and Windows boxes ranging from Easy to Insane.",
      icon: Server,
      status: "WEEKLY DRILLS"
    },
    {
      title: "Pro Labs & Fortresses",
      desc: "Deep enterprise network simulations involving multi-forest Active Directory and pivoting.",
      icon: ShieldCheck,
      status: "ADVANCED"
    },
    {
      title: "Category Challenges",
      desc: "Targeted problem solving in PWN, Reverse, Crypto, Forensics, Hardware, and Web.",
      icon: Cpu,
      status: "TRAINING"
    }
  ];

  return (
    <section id="htb" className="py-24 relative z-10 border-t border-white/5 bg-[#050505]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#0a0f12] to-[#06080a] border border-[#00ff66]/30 p-8 sm:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,255,102,0.1)]">
          {/* Subtle neon glow in top right */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00ff66]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side: Team Information & Direct Portal Link */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1117] border border-[#00ff66]/30 text-xs font-mono text-[#00ff66]">
                <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
                <span>OFFICIAL CTF SQUADRON</span>
              </div>

              {/* Title Requested */}
              <h2 className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Hack The Box // <span className="text-[#00ff66]">sudo Unknown</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                sudo Unknown actively competes on the official Hack The Box CTF platform. Our operators
                collaborate in dedicated war rooms to solve real-world offensive challenges and climb seasonal ladders.
              </p>

              {/* Team ID & Integrity Note */}
              <div className="p-4 rounded-xl bg-[#050505]/90 border border-white/10 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-gray-300">
                    <span className="text-gray-500">HTB TEAM IDENTIFIER:</span>
                    <span className="text-[#00ff66] font-bold text-sm">331386</span>
                  </div>
                  <button
                    onClick={copyTeamId}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0d1117] hover:bg-[#161b22] border border-white/10 text-[11px] font-mono text-gray-300 hover:text-[#00ff66] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-[#00ff66]" />
                        <span className="text-[#00ff66]">Copied ID</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] font-mono text-gray-400 border-t border-white/5 pt-2 leading-relaxed">
                  <span className="text-[#00ff66] font-bold">[*] Integrity Policy:</span> Live telemetry, individual solver breakdowns, and team rankings are maintained transparently and verified directly on the official Hack The Box portal.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={SITE_CONFIG.htbTeamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#00ff66] text-black font-mono font-bold text-sm hover:bg-[#22ff77] transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,255,102,0.35)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Team on Hack The Box</span>
                </a>

                <a
                  href="https://ctf.hackthebox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0d1117] text-gray-200 font-mono text-xs font-semibold border border-white/10 hover:border-[#00ff66]/40 hover:text-white transition-all"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>Visit HTB CTF Portal</span>
                </a>
              </div>
            </div>

            {/* Right Side: HTB Tracks & Focus Areas */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {htbFocusTracks.map((track) => {
                const Icon = track.icon;
                return (
                  <div
                    key={track.title}
                    className="p-4 rounded-xl bg-[#050505]/70 border border-white/10 hover:border-[#00ff66]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0d1117] border border-white/5 flex items-center justify-center text-[#00ff66]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[9px] text-[#00ff66] bg-[#00ff66]/10 px-1.5 py-0.5 rounded border border-[#00ff66]/20">
                        {track.status}
                      </span>
                    </div>
                    <h4 className="font-mono text-xs font-bold text-white mb-1">
                      {track.title}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                      {track.desc}
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
