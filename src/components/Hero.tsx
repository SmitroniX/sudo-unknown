import React, { useState } from 'react';
import {
  ExternalLink,
  ChevronRight,
  Terminal as TerminalIcon,
  MessageSquare,
  ShieldAlert,
  Server,
  Cpu,
  Globe,
  Binary,
  KeyRound,
  SearchCode,
  Network,
  FileCode,
  Flame,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG, STATISTICS } from '../data/teamData';
import { BrandedTitle } from './BrandedTitle';

interface HeroProps {
  onOpenTerminal?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onNavigateSection }) => {
  const [activeHudTab, setActiveHudTab] = useState<'status' | 'htb' | 'tools'>('status');

  const disciplines = [
    { name: 'ACTIVE DIRECTORY', icon: Network, desc: 'Enterprise Kerberos, DACL & Domain Takeover' },
    { name: 'WEB EXPLOITATION', icon: Globe, desc: 'SSRF, SSTI, Deserialization & Auth Bypass' },
    { name: 'BINARY PWN', icon: Cpu, desc: 'GLIBC Heap Tcache, Safe-Linking & ROP Chains' },
    { name: 'CRYPTOGRAPHY', icon: KeyRound, desc: 'Flawed PRNGs, GCD Collisions & Lattice Attacks' },
    { name: 'DIGITAL FORENSICS', icon: SearchCode, desc: 'Memory Triage, Process Hollowing & PCAP Carving' },
    { name: 'REVERSE ENGINEERING', icon: Binary, desc: 'Stripped Binaries, Custom VMs & Firmware' },
  ];

  const handleNavigate = (id: string, e: React.MouseEvent) => {
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(id);
    }
  };

  return (
    <section id="overview" className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Subtle radial ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00ff88]/[0.035] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/[0.025] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Badges / Ticker */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0f14] border border-[#00ff88]/30 font-mono text-xs text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
            <span>SYNDICATE STATUS: ACTIVE // ALL-IN-ONE CYBERSECURITY COLLECTIVE</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
            <span>OFFICIAL HTB SQUAD #{SITE_CONFIG.htbTeamId}</span>
          </div>
        </div>

        {/* 2-Column Hero Grid: Left Content / Right HUD Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Core Brand & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <BrandedTitle size="hero" showCrown={true} showSubtitle={true} />
            </div>

            <p className="text-base sm:text-lg text-gray-200 font-sans leading-relaxed max-w-2xl font-light">
              <strong className="text-white font-semibold">sudo Unknown</strong> is an elite, all-in-one multidisciplinary cybersecurity collective, offensive security research syndicate, and competitive CTF squad. We bridge deep enterprise red teaming, vulnerability research, and custom exploit engineering with tournament domination across Hack The Box, TryHackMe, and global arenas.
            </p>

            {/* Core Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs sm:text-sm">
              <a
                href="#writeups"
                onClick={(e) => handleNavigate('writeups', e)}
                className="px-5 py-3 rounded-xl bg-[#00ff88] hover:bg-[#22ff99] text-black font-bold transition-all shadow-[0_0_20px_rgba(0,255,136,0.35)] flex items-center gap-2"
              >
                <FileCode className="w-4 h-4" />
                <span>Explore HTB Writeups</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                onClick={(e) => handleNavigate('services', e)}
                className="px-5 py-3 rounded-xl bg-[#0e141c] hover:bg-[#161f2b] border border-white/10 hover:border-white/20 text-white font-semibold transition-all flex items-center gap-2"
              >
                <ShieldAlert className="w-4 h-4 text-[#00ff88]" />
                <span>Services &amp; Red Team</span>
              </a>

              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all flex items-center gap-2"
                  title="Open cyber CLI shell"
                >
                  <TerminalIcon className="w-4 h-4 text-yellow-400" />
                  <span>Launch CLI (~)</span>
                </button>
              )}
            </div>

            {/* Verified Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.08]">
              {STATISTICS.map((stat) => (
                <div key={stat.id} className="p-3 rounded-xl bg-[#080c10] border border-white/[0.06]">
                  <div className="font-mono text-xl sm:text-2xl font-black text-white">
                    {stat.value}
                    {stat.suffix && <span className="text-xs text-[#00ff88] font-normal ml-0.5">{stat.suffix}</span>}
                  </div>
                  <div className="font-mono text-[10px] text-gray-400 uppercase mt-0.5 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Syndicate Operations HUD */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#090d12] border border-white/10 shadow-2xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1218] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88]/80" />
                  <span className="font-mono text-xs text-gray-400 ml-2">
                    syndicate-core // v2.6.0
                  </span>
                </div>

                {/* HUD Tabs */}
                <div className="flex items-center gap-1 font-mono text-[11px]">
                  <button
                    onClick={() => setActiveHudTab('status')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeHudTab === 'status'
                        ? 'bg-[#00ff88]/15 text-[#00ff88] font-bold border border-[#00ff88]/30'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Ops
                  </button>
                  <button
                    onClick={() => setActiveHudTab('htb')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeHudTab === 'htb'
                        ? 'bg-[#00ff88]/15 text-[#00ff88] font-bold border border-[#00ff88]/30'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    HTB Clears
                  </button>
                  <button
                    onClick={() => setActiveHudTab('tools')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeHudTab === 'tools'
                        ? 'bg-[#00ff88]/15 text-[#00ff88] font-bold border border-[#00ff88]/30'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Arsenal
                  </button>
                </div>
              </div>

              {/* Terminal View Body */}
              <div className="p-5 font-mono text-xs text-gray-300 space-y-4 min-h-[340px] bg-[#070a0e]">
                {activeHudTab === 'status' && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="text-gray-400 flex items-center gap-2">
                      <span className="text-[#00ff88]">operator@sudounknown:~$</span>
                      <span>./syndicate-overview</span>
                    </div>

                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1.5 leading-relaxed">
                      <div className="text-[#00ff88] font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>SYNDICATE MISSION PROFILE</span>
                      </div>
                      <div className="text-gray-300">
                        &gt; Scope: Multidisciplinary Offensive Security Syndicate
                      </div>
                      <div className="text-gray-300">
                        &gt; HTB Team ID: <span className="text-[#00ff88] font-semibold">#331386</span>
                      </div>
                      <div className="text-gray-300">
                        &gt; CTF Platforms: Hack The Box, TryHackMe, CTFtime
                      </div>
                      <div className="text-gray-300">
                        &gt; Core Squad Status: Founding Captain active + 6 open roles
                      </div>
                    </div>

                    <div className="space-y-1 text-gray-400 text-[11px]">
                      <div>[OK] Kerberos Ticket Parsing Engine initialized</div>
                      <div>[OK] Safe-Linking demangler loaded for GLIBC 2.35</div>
                      <div>[OK] 10 Field Writeups synchronized to public portal</div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-white/[0.06] text-[11px]">
                      <span className="text-gray-400">War Room Channels:</span>
                      <a
                        href={SITE_CONFIG.discordUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00ff88] hover:underline flex items-center gap-1"
                      >
                        <span>Join Live Discord</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {activeHudTab === 'htb' && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="text-gray-400 flex items-center gap-2">
                      <span className="text-[#00ff88]">operator@sudounknown:~$</span>
                      <span>htb --latest-machines</span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-black/50 border border-[#00ff88]/30">
                        <div className="flex items-center justify-between">
                          <span className="text-[#00ff88] font-bold">DutyBound (Windows AD)</span>
                          <span className="text-yellow-400 text-[10px]">MEDIUM</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">
                          Kerberoasting -&gt; GenericWrite DACL -&gt; DCSync Domain Takeover
                        </p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-black/50 border border-white/5">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold">Takeoff (Linux)</span>
                          <span className="text-yellow-400 text-[10px]">MEDIUM</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">
                          Flask Jinja2 SSTI -&gt; Tar Wildcard Command Injection
                        </p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-black/50 border border-white/5">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold">Frosted (Exchange Server)</span>
                          <span className="text-orange-400 text-[10px]">HARD</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">
                          ProxyLogon SSRF -&gt; Shadow Copy NTDS.dit Extraction
                        </p>
                      </div>
                    </div>

                    <a
                      href="#writeups"
                      onClick={(e) => handleNavigate('writeups', e)}
                      className="block text-center py-2 rounded-lg bg-[#00ff88]/10 hover:bg-[#00ff88]/20 text-[#00ff88] text-xs font-bold border border-[#00ff88]/30 transition-colors"
                    >
                      View All 10 Walkthroughs &rarr;
                    </a>
                  </div>
                )}

                {activeHudTab === 'tools' && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="text-gray-400 flex items-center gap-2">
                      <span className="text-[#00ff88]">operator@sudounknown:~$</span>
                      <span>ls -la ./tools-arsenal/</span>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                        <span className="text-white font-semibold">sudo-recon</span>
                        <span className="text-gray-400">Concurrent Asset Enumerator</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                        <span className="text-[#00ff88] font-semibold">ad-acl-pivoter</span>
                        <span className="text-gray-400">BloodHound Shortest Path</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                        <span className="text-cyan-400 font-semibold">jwt-tamper-cli</span>
                        <span className="text-gray-400">Signature Alg Confusion</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                        <span className="text-purple-400 font-semibold">tcache-forger</span>
                        <span className="text-gray-400">GLIBC 2.35 Safe-Linking</span>
                      </div>
                    </div>

                    <a
                      href="#arsenal"
                      onClick={(e) => handleNavigate('arsenal', e)}
                      className="block text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition-colors"
                    >
                      Explore Arsenal &amp; Install Commands &rarr;
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Disciplines Horizontal Carousel Strip */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-6">
            <span className="font-mono text-xs text-[#00ff88] uppercase tracking-wider block">
              // CORE TECHNICAL DISCIPLINES
            </span>
            <h3 className="text-lg font-mono font-bold text-white">
              End-to-End Adversary &amp; Defensive Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.name}
                  className="p-3.5 rounded-xl bg-[#080c10] border border-white/[0.06] hover:border-[#00ff88]/40 transition-all group"
                >
                  <Icon className="w-5 h-5 text-[#00ff88] mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-bold group-hover:text-[#00ff88] transition-colors">
                    {d.name}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1 font-sans leading-tight">
                    {d.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
