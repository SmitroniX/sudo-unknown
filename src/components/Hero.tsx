import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Lock,
  Globe,
  Cpu,
  KeyRound,
  SearchCode,
  Binary,
  Brain,
  ChevronRight,
  Terminal as TerminalIcon,
  MessageSquare,
  Sparkles,
  ShieldAlert,
  Layers
} from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';
import { CyberTitleGraphic } from './CyberTitleGraphic';
import { HTBCyberCube } from './HTBCyberCube';
import { CyberOperatorVisual } from './CyberOperatorVisual';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [typedWhoami, setTypedWhoami] = useState('');
  const [showUnknown, setShowUnknown] = useState(false);
  const [typedSudo, setTypedSudo] = useState('');
  const [showGranted, setShowGranted] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  const [activeRightTab, setActiveRightTab] = useState<'operator' | 'terminal'>('operator');

  // Interactive command inside hero mini terminal
  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string; isSuccess?: boolean }>>([
    { cmd: 'htb status', output: 'sudo Unknown // Team ID #331386 // Status: Recruiting Founding Cohort', isSuccess: true }
  ]);

  // The 6 Core CTF Disciplines from the reference banner
  const disciplines = [
    { name: 'WEB', icon: Globe, desc: 'Web App Security & Injection', href: '#skills' },
    { name: 'PWN', icon: Cpu, desc: 'Binary Exploitation & Memory', href: '#skills' },
    { name: 'CRYPTO', icon: KeyRound, desc: 'Ciphers & Applied Cryptography', href: '#skills' },
    { name: 'FORENSICS', icon: SearchCode, desc: 'PCAP, Memory & Disk Forensics', href: '#skills' },
    { name: 'REVERSE', icon: Binary, desc: 'x86/x64 Reversing & Malware', href: '#skills' },
    { name: 'MISC', icon: Brain, desc: 'Stego, OSINT & Logic Challenges', href: '#skills' }
  ];

  // Animated command line sequence
  useEffect(() => {
    const cmd1 = 'whoami';
    let idx1 = 0;
    const t1 = setInterval(() => {
      if (idx1 < cmd1.length) {
        idx1++;
        setTypedWhoami(cmd1.slice(0, idx1));
      } else {
        clearInterval(t1);
        setTimeout(() => {
          setShowUnknown(true);
          setBootStep(1);
        }, 350);
      }
    }, 90);

    return () => clearInterval(t1);
  }, []);

  useEffect(() => {
    if (bootStep !== 1) return;

    const cmd2 = 'sudo access';
    let idx2 = 0;
    const t2 = setInterval(() => {
      if (idx2 < cmd2.length) {
        idx2++;
        setTypedSudo(cmd2.slice(0, idx2));
      } else {
        clearInterval(t2);
        setTimeout(() => {
          setShowGranted(true);
          setBootStep(2);
        }, 400);
      }
    }, 90);

    return () => clearInterval(t2);
  }, [bootStep]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputCommand.trim().toLowerCase();
    if (!clean) return;

    let out = '';
    let isSuccess = false;

    switch (clean) {
      case 'help':
        out = 'Commands: whoami, sudo access, cat flag.txt, htb, roster, mission, clear';
        break;
      case 'whoami':
        out = 'unknown // Identity protected // Founding candidate';
        isSuccess = true;
        break;
      case 'sudo access':
        out = 'GRANTED // Access level: CORE_OPERATOR';
        isSuccess = true;
        break;
      case 'cat flag.txt':
        out = 'HTB{p3rm1ss10n_gr4nt3d_1d3nt1ty_unkn0wn_2026}';
        isSuccess = true;
        break;
      case 'htb':
        out = 'Opening Hack The Box team #331386...';
        window.open(SITE_CONFIG.htbTeamUrl, '_blank');
        isSuccess = true;
        break;
      case 'roster':
        out = 'Status: Recruiting founding cohort (Web, Pwn, Crypto, Forensics, Reverse, OSINT)';
        break;
      case 'mission':
        out = 'Permission Granted. Identity Unknown. Pure technical focus, no ego, just flags.';
        isSuccess = true;
        break;
      case 'clear':
        setHistory([]);
        setInputCommand('');
        return;
      default:
        out = `command not found: ${clean}. Type 'help' for command list.`;
    }

    setHistory((prev) => [...prev.slice(-2), { cmd: inputCommand, output: out, isSuccess }]);
    setInputCommand('');
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]">
      {/* Cinematic Cyber Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial ambient green light cones */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#00ff88]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00ff88]/8 rounded-full blur-[100px]" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#00cc66]/8 rounded-full blur-[100px]" />
        
        {/* Subtle Cyber Grid & Scanline Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute inset-0 scanlines opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-6">
        {/* ── TOP HUD TELEMETRY BAR (From Reference Banner) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-2 rounded-xl bg-[#090c0f]/80 border border-white/[0.06] backdrop-blur-md font-mono text-[11px] text-gray-400">
          <div className="flex items-center gap-3">
            <span className="text-gray-600">[</span>
            <div className="flex items-center gap-1.5 text-white font-bold tracking-wider">
              {/* HTB Cube Icon */}
              <svg className="w-3.5 h-3.5 text-[#00ff88]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.5 3.75-3.5 1.75L8.5 6 12 4.2zM4 8.5l7 3.5v7l-7-3.5v-7zm16 7l-7 3.5v-7l7-3.5v7z"/>
              </svg>
              <span>HACK THE BOX</span>
            </div>
            <span className="text-gray-600">]</span>
            <span className="text-[#00ff88] hidden md:inline">LEARN / HACK / PLAY / GROW</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-600">[</span>
            <span className="text-gray-300">PEOPLE</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-300">KNOWLEDGE</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-300">MACHINES</span>
            <span className="text-gray-600">/</span>
            <span className="text-[#00ff88] font-semibold">PROGRESS</span>
            <span className="text-gray-600">]</span>
          </div>
        </div>

        {/* ── MAIN CINEMATIC 3-COLUMN ARENA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ◄◄ LEFT WING: Cyber HUD Telemetry & 3D Holographic Cube (Col 1-3) */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* HUD Status List from Reference */}
            <div className="hidden lg:block space-y-2 font-mono text-[11px] text-gray-400 border-l border-white/[0.08] pl-4">
              <div className="hover:text-[#00ff88] cursor-default transition-colors tracking-widest">[ MACHINES ]</div>
              <div className="hover:text-[#00ff88] cursor-default transition-colors tracking-widest">[ CHALLENGES ]</div>
              <div className="hover:text-[#00ff88] cursor-default transition-colors tracking-widest">[ SKILLS ]</div>
              <div className="hover:text-[#00ff88] cursor-default transition-colors tracking-widest">[ COMMUNITY ]</div>
              <div className="hover:text-[#00ff88] cursor-default transition-colors tracking-widest text-[#00ff88] font-bold">[ BEYOND LIMITS ]</div>
            </div>

            {/* Terminal Quote from Reference */}
            <div className="p-3.5 rounded-xl bg-[#090c0f]/90 border border-white/[0.08] font-mono text-xs text-left shadow-lg">
              <div className="text-[#00ff88] font-bold pb-1 flex items-center gap-1.5">
                <span>$&gt;</span>
                <span>different minds</span>
              </div>
              <div className="text-gray-300 pl-4">same mission</div>
              <div className="text-[#00ff88] font-semibold pl-4 pt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
                <span>sudo Unknown</span>
              </div>
            </div>

            {/* 3D Holographic Hack The Box Cube Component */}
            <div className="flex flex-col items-center lg:items-start pt-2">
              <HTBCyberCube />
            </div>

            {/* Team Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d1217] border border-[#00ff88]/30 font-mono text-xs text-gray-300 shadow-[0_0_15px_rgba(0,255,136,0.1)]">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span>TEAM ID:</span>
              <a 
                href={SITE_CONFIG.htbTeamUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00ff88] font-bold hover:underline flex items-center gap-1"
              >
                <span>#331386</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* ▲▲ CENTERPIECE: Native Vector Crown, Glitch Title & 6 Disciplines (Col 4-9) */}
          <div className="lg:col-span-6 flex flex-col items-center text-center space-y-6 order-1 lg:order-2">
            
            {/* Live Native Vector / CSS Title Centerpiece with Glowing Crown & Brush UNKNOWN */}
            <div className="py-2 transform hover:scale-[1.02] transition-transform duration-500">
              <CyberTitleGraphic />
            </div>

            {/* Brand Core Mantras */}
            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] text-gray-400">
              <span className="px-3 py-1 rounded bg-[#090c0f] border border-white/[0.08] text-gray-300 font-semibold tracking-wider shadow-sm">
                NO IDENTITY • NO LIMITS • JUST FLAGS
              </span>
              <span className="px-3 py-1 rounded bg-[#090c0f] border border-[#00ff88]/30 text-[#00ff88] font-semibold tracking-wider shadow-[0_0_10px_rgba(0,255,136,0.15)]">
                THINK • HACK • LEARN • CONQUER
              </span>
            </div>

            {/* Brief Description */}
            <p className="text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed font-sans">
              Competitive Hack The Box &amp; international CTF squad. Pure technical execution,
              cooperative problem-solving, and continuous mastery across all disciplines.
            </p>

            {/* ── THE 6 CORE CTF DISCIPLINES (Icons from reference banner) ── */}
            <div className="w-full pt-1">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400 mb-2.5">
                &gt; CORE CTF SPECIALIZATIONS &lt;
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 w-full max-w-xl mx-auto">
                {disciplines.map((d) => {
                  const Icon = d.icon;
                  return (
                    <a
                      key={d.name}
                      href={d.href}
                      className="group p-2.5 sm:p-3 rounded-xl bg-[#090c0f] border border-white/[0.08] hover:border-[#00ff88] flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,136,0.25)] relative"
                      title={d.desc}
                    >
                      {/* Outer circular badge container */}
                      <div className="w-8 h-8 rounded-full bg-[#050709] border border-white/10 group-hover:border-[#00ff88] flex items-center justify-center transition-colors">
                        <Icon className="w-4 h-4 text-[#00ff88] group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-gray-300 group-hover:text-[#00ff88] tracking-wider">
                        {d.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ── ACTION BUTTONS (Matching Reference) ── */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full pt-2">
              {/* Primary Glowing Action: JOIN OUR TEAM */}
              <a
                href="#team"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#00dd77] text-black font-mono font-black text-sm tracking-wider hover:from-[#22ff99] hover:to-[#00ff88] transition-all transform hover:-translate-y-0.5 shadow-[0_0_30px_rgba(0,255,136,0.5)] active:scale-95"
              >
                <span>JOIN OUR TEAM</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </a>

              {/* Secondary Action: Launch Interactive Shell */}
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0b0f14] text-[#00ff88] font-mono font-bold text-sm border border-[#00ff88]/40 hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,255,136,0.15)]"
                >
                  <TerminalIcon className="w-4 h-4" />
                  <span>LAUNCH SHELL</span>
                </button>
              )}

              {/* Discord War Room Link */}
              <a
                href={SITE_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#5865F2]/15 text-white font-mono font-semibold text-sm border border-[#5865F2]/40 hover:bg-[#5865F2]/30 hover:border-[#5865F2] transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(88,101,242,0.2)]"
              >
                <MessageSquare className="w-4 h-4 text-[#5865F2]" />
                <span>WAR ROOM</span>
              </a>
            </div>
          </div>

          {/* ►► RIGHT WING: Hooded Operative Visual & Interactive Terminal (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4 order-3">
            {/* View Switcher Tabs */}
            <div className="flex items-center justify-between p-1 rounded-xl bg-[#090c0f] border border-white/[0.08] font-mono text-xs">
              <button
                onClick={() => setActiveRightTab('operator')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeRightTab === 'operator'
                    ? 'bg-[#00ff88] text-black font-bold shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>OPERATIVE</span>
              </button>
              <button
                onClick={() => setActiveRightTab('terminal')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  activeRightTab === 'terminal'
                    ? 'bg-[#00ff88] text-black font-bold shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>SHELL</span>
              </button>
            </div>

            {/* Operative Visual */}
            {activeRightTab === 'operator' && (
              <CyberOperatorVisual onOpenTerminal={() => setActiveRightTab('terminal')} />
            )}

            {/* Interactive Shell Terminal */}
            {activeRightTab === 'terminal' && (
              <div className="rounded-2xl bg-[#090b0e] border border-[#00ff88]/30 shadow-2xl overflow-hidden group animate-fadeIn">
                {/* Window Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0e1217] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88]/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-300">
                    <Lock className="w-3 h-3 text-[#00ff88]" />
                    <span>user@htb:~$ sudo</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#00ff88]">
                    #331386
                  </div>
                </div>

                {/* Terminal Screen Content */}
                <div className="p-4 font-mono text-xs space-y-3 bg-[#050505] min-h-[380px] flex flex-col justify-between">
                  <div>
                    {/* Official Boot Prompt lines */}
                    <div className="text-gray-500 text-[11px] border-b border-white/[0.05] pb-2 space-y-0.5">
                      <div>user@world:~$ sudo</div>
                      <div>[sudo] password for ? **********</div>
                      <div className="text-[#00ff88]">Permission granted.</div>
                      <div className="text-gray-300">Welcome to the unknown.</div>
                    </div>

                    {/* Animated typing sequence */}
                    <div className="space-y-1 pt-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-[#00ff88] font-bold">&gt;</span>
                        <span>{typedWhoami}</span>
                        {bootStep === 0 && <span className="inline-block w-1.5 h-3.5 bg-[#00ff88] animate-pulse" />}
                      </div>
                      {showUnknown && (
                        <div className="text-gray-400 pl-4 border-l border-[#00ff88]/30">
                          unknown
                        </div>
                      )}
                    </div>

                    {bootStep >= 1 && (
                      <div className="space-y-1 pt-1">
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-[#00ff88] font-bold">&gt;</span>
                          <span>{typedSudo}</span>
                          {bootStep === 1 && <span className="inline-block w-1.5 h-3.5 bg-[#00ff88] animate-pulse" />}
                        </div>
                        {showGranted && (
                          <div className="text-[#00ff88] pl-4 border-l border-[#00ff88]/30 font-bold">
                            Permission granted.
                          </div>
                        )}
                      </div>
                    )}

                    {/* History output */}
                    <div className="space-y-2 pt-3">
                      {history.map((h, i) => (
                        <div key={i} className="text-[11px] space-y-0.5">
                          <div className="text-gray-400">$&gt; {h.cmd}</div>
                          <div className={h.isSuccess ? 'text-[#00ff88]' : 'text-gray-300'}>{h.output}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive command input */}
                  <form onSubmit={handleCommandSubmit} className="pt-2 border-t border-white/[0.05]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00ff88] font-bold">&gt;</span>
                      <input
                        type="text"
                        value={inputCommand}
                        onChange={(e) => setInputCommand(e.target.value)}
                        placeholder="Type 'help'..."
                        className="flex-1 bg-transparent border-none text-white text-xs font-mono focus:outline-none placeholder-gray-600"
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── BOTTOM HUD FOOTER BRACKETS ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2 rounded-xl bg-[#090c0f]/60 border border-white/[0.04] font-mono text-[10px] text-gray-500">
          <div>[ HACK THE BOX // CTF // COMMUNITY ]</div>
          <div className="text-[#00ff88]/80 font-semibold tracking-widest hidden sm:inline">
            PERMISSION GRANTED // IDENTITY UNKNOWN
          </div>
          <div>[ sudo Unknown // TEAM #331386 ]</div>
        </div>
      </div>
    </section>
  );
};
