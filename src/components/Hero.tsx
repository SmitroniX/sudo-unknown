import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  CornerDownLeft,
  Lock,
  Globe,
  Cpu,
  KeyRound,
  SearchCode,
  Binary,
  Brain,
  ChevronRight,
  Terminal as TerminalIcon
} from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [typedWhoami, setTypedWhoami] = useState('');
  const [showUnknown, setShowUnknown] = useState(false);
  const [typedSudo, setTypedSudo] = useState('');
  const [showGranted, setShowGranted] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  const [activeRightTab, setActiveRightTab] = useState<'terminal' | 'operator'>('operator');

  // Interactive command inside hero
  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string; isSuccess?: boolean }>>([
    { cmd: 'htb status', output: 'sudo Unknown // Team ID #331386 (Verified) // Status: Founding Cohort', isSuccess: true }
  ]);

  const quickCategories = [
    { name: 'WEB', icon: Globe, href: '#skills' },
    { name: 'PWN', icon: Cpu, href: '#skills' },
    { name: 'CRYPTO', icon: KeyRound, href: '#skills' },
    { name: 'FORENSICS', icon: SearchCode, href: '#skills' },
    { name: 'REVERSE', icon: Binary, href: '#skills' },
    { name: 'MISC', icon: Brain, href: '#skills' }
  ];

  useEffect(() => {
    // Step 0: Type 'whoami'
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

    // Step 1: Type 'sudo access'
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
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Official Identity, Artwork Title & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Status & Terminal Prompt */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1117] border border-white/[0.08] text-xs font-mono text-gray-300 shadow-[0_0_15px_rgba(0,255,136,0.1)]">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="text-gray-400">HACK THE BOX // TEAM</span>
                <span className="text-[#00ff88] font-bold">#331386</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-300">FOUNDING COHORT</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#090c0f] border border-white/[0.06] text-xs font-mono text-gray-400">
                <span className="text-[#00ff88] font-bold">$&gt;</span>
                <span>different minds • same mission</span>
              </div>
            </div>

            {/* Stylized Brand Name Artwork Centerpiece */}
            <div className="relative group max-w-lg sm:max-w-xl mx-auto lg:mx-0">
              {/* Backlight Glow */}
              <div className="absolute -inset-4 bg-[#00ff88]/15 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Styled Title Graphic */}
              <div className="relative rounded-2xl border border-white/[0.08] bg-[#07090b]/90 p-2 sm:p-4 shadow-[0_0_40px_rgba(0,255,136,0.2)] hover:border-[#00ff88]/40 transition-all">
                <img
                  src="/title-styled.png"
                  alt="sudo Unknown - Permission Granted. Identity Unknown."
                  className="w-full h-auto object-contain rounded-xl select-none"
                />
              </div>

              {/* Accessible Heading for Screen Readers & SEO */}
              <h1 className="sr-only">
                sudo Unknown — Permission Granted. Identity Unknown.
              </h1>
            </div>

            {/* Authentic Brand Mantras */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 font-mono text-xs text-gray-400">
              <span className="px-2.5 py-1 rounded bg-[#0a0d0f] border border-white/[0.08] text-gray-300 font-semibold tracking-wider">
                NO IDENTITY • NO LIMITS • JUST FLAGS
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0a0d0f] border border-white/[0.08] text-[#00ff88] font-semibold tracking-wider">
                THINK • HACK • LEARN • CONQUER
              </span>
            </div>

            {/* Authentic Description */}
            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
              A competitive cybersecurity Capture The Flag team competing in Hack The Box
              seasonal leagues, collegiate tournaments, and global events. We are actively assembling
              our founding roster.
            </p>

            {/* 6 Category Pills from Reference Artwork */}
            <div className="pt-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 font-mono text-[11px] text-gray-400 mb-2.5">
                <span className="text-[#00ff88] font-bold">&gt;</span>
                <span className="tracking-widest uppercase">CORE CTF DISCIPLINES:</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-w-xl mx-auto lg:mx-0">
                {quickCategories.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.name}
                      href={c.href}
                      className="p-2.5 rounded-xl bg-[#090c0f] border border-white/[0.08] hover:border-[#00ff88] flex flex-col items-center justify-center gap-1.5 group transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,255,136,0.15)]"
                    >
                      <Icon className="w-4 h-4 text-[#00ff88] group-hover:scale-110 transition-transform" />
                      <span className="font-mono text-[10px] font-bold text-gray-300 group-hover:text-[#00ff88] tracking-wider">
                        {c.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              {/* Join Our Team */}
              <a
                href="#team"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#00ff88] text-black font-mono font-bold text-sm hover:bg-[#22ff99] transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(0,255,136,0.35)]"
              >
                <span>JOIN OUR TEAM</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              {/* View on Hack The Box */}
              <a
                href={SITE_CONFIG.htbTeamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0d1117] text-white font-mono font-semibold text-sm border border-white/[0.12] hover:border-[#00ff88] hover:text-[#00ff88] transition-all transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 text-[#00ff88]" />
                <span>View on Hack The Box</span>
              </a>
            </div>
          </div>

          {/* Right Column: Tactical Operator Visual & Interactive Terminal */}
          <div className="lg:col-span-5 space-y-4">
            {/* View Switcher Tabs */}
            <div className="flex items-center justify-between p-1 rounded-xl bg-[#0e1318] border border-white/[0.08] font-mono text-xs">
              <button
                onClick={() => setActiveRightTab('operator')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  activeRightTab === 'operator'
                    ? 'bg-[#00ff88] text-black font-bold shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>TACTICAL OPERATOR</span>
              </button>
              <button
                onClick={() => setActiveRightTab('terminal')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  activeRightTab === 'terminal'
                    ? 'bg-[#00ff88] text-black font-bold shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>INTERACTIVE SHELL</span>
              </button>
            </div>

            {/* Operator Visual Card */}
            {activeRightTab === 'operator' && (
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#090c0f] shadow-2xl group animate-fadeIn">
                <div className="relative aspect-[4/5] max-h-[460px] w-full overflow-hidden bg-[#050505]">
                  <img
                    src="/hacker-hero.png"
                    alt="sudo Unknown Hooded Operator"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090c0f] via-transparent to-transparent" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 border border-[#00ff88]/30 font-mono text-xs text-[#00ff88] backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                    <span>OPERATOR // VERIFIED</span>
                  </div>

                  {/* Graffiti Motto Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md font-mono text-xs space-y-1">
                    <div className="text-gray-400 text-[10px] tracking-wider uppercase">ETHOS:</div>
                    <div className="text-white font-bold tracking-wide">GOOD HACKERS BUILD A BETTER INTERNET</div>
                    <div className="text-[#00ff88] text-[11px]">THINK • HACK • LEARN • CONQUER</div>
                  </div>
                </div>

                {/* Card Footer Quick Prompt */}
                <div className="p-3 bg-[#0e1217] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Lock className="w-3 h-3 text-[#00ff88]" />
                    <span>user@world:~$ sudo</span>
                  </div>
                  <button
                    onClick={() => setActiveRightTab('terminal')}
                    className="text-[#00ff88] hover:underline flex items-center gap-1"
                  >
                    <span>Launch Shell</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {/* Interactive Terminal Window */}
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
                    <span>user@world:~$ sudo</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#00ff88]">
                    HTB-331386
                  </div>
                </div>

                {/* Terminal Screen Content */}
                <div className="p-4 sm:p-5 font-mono text-xs space-y-3 bg-[#050505] min-h-[380px] flex flex-col justify-between">
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
                          <div className="pl-4 border-l-2 border-[#00ff88] text-[#00ff88] font-bold flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                            <span>GRANTED // ACCESS LEVEL: CORE_OPERATOR</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Command History */}
                    {showGranted && (
                      <div className="pt-3 border-t border-white/[0.05] space-y-2">
                        {history.map((h, i) => (
                          <div key={i} className="space-y-0.5 text-[11px]">
                            <div className="text-gray-400"><span className="text-[#00ff88]">&gt;</span> {h.cmd}</div>
                            <div className={`pl-3 ${h.isSuccess ? 'text-[#00ff88]' : 'text-gray-300'}`}>{h.output}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Interactive command input */}
                  {showGranted && (
                    <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 text-xs pt-2 border-t border-white/10">
                      <span className="text-[#00ff88] font-bold">&gt;</span>
                      <input
                        type="text"
                        value={inputCommand}
                        onChange={(e) => setInputCommand(e.target.value)}
                        placeholder="Type 'help', 'htb', 'cat flag.txt'..."
                        className="flex-1 bg-transparent text-gray-200 placeholder-gray-600 focus:outline-none font-mono text-xs"
                      />
                      <button
                        type="submit"
                        className="p-1 rounded bg-[#0d1117] text-gray-400 hover:text-[#00ff88] border border-white/10"
                      >
                        <CornerDownLeft className="w-3 h-3" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
