import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, CheckCircle2, CornerDownLeft, Lock, Terminal, Shield } from 'lucide-react';
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

  // Quick interactive command inside hero
  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string; isSuccess?: boolean }>>([
    { cmd: 'htb status', output: 'sudo Unknown // Team ID #331386 (Verified) // Status: Founding Roster Assembly', isSuccess: true }
  ]);

  useEffect(() => {
    // Step 0: Type 'whoami'
    const cmd1 = 'whoami';
    let idx1 = 0;
    const t1 = setInterval(() => {
      if (idx1 < cmd1.length) {
        setTypedWhoami((prev) => prev + cmd1.charAt(idx1));
        idx1++;
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
        setTypedSudo((prev) => prev + cmd2.charAt(idx2));
        idx2++;
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
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official Identity & Mission */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1117] border border-white/[0.08] text-xs font-mono text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-gray-400">HACK THE BOX // TEAM</span>
              <span className="text-[#00ff88] font-bold">#331386</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300">FOUNDING COHORT</span>
            </div>

            {/* Team Name */}
            <div className="space-y-2">
              <h1 className="font-mono text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white select-none">
                sudo{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#22ff99] to-[#00f0ff]">
                  Unknown
                </span>
              </h1>

              {/* Tagline */}
              <p className="font-mono text-lg sm:text-2xl text-gray-200 tracking-wide font-medium">
                &ldquo;<span className="text-[#00ff88]">Permission Granted.</span> Identity Unknown.&rdquo;
              </p>
            </div>

            {/* Authentic Brand Mantras */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 font-mono text-xs text-gray-400">
              <span className="px-2.5 py-1 rounded bg-[#0a0d0f] border border-white/[0.08] text-gray-300 font-semibold tracking-wider">
                NO IDENTITY • NO LIMITS • JUST FLAGS
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0a0d0f] border border-white/[0.08] text-[#00ff88] font-semibold tracking-wider">
                EXPLOIT • ANALYZE • CAPTURE • REPEAT
              </span>
            </div>

            {/* Clear, Realistic Description */}
            <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
              A newly formed competitive cybersecurity Capture The Flag team competing in Hack The Box
              seasonal leagues and international tournaments. We are actively scouting ambitious operators
              to assemble our founding roster.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Join Our Team */}
              <a
                href="#team"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#00ff88] text-black font-mono font-bold text-sm hover:bg-[#22ff99] transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>[ Join Our Team ]</span>
              </a>

              {/* View on Hack The Box */}
              <a
                href={SITE_CONFIG.htbTeamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0d1117] text-white font-mono font-medium text-sm border border-white/[0.12] hover:border-[#00ff88] hover:text-[#00ff88] transition-all transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 text-[#00ff88]" />
                <span>[ View on Hack The Box ]</span>
              </a>
            </div>
          </div>

          {/* Right Column: Official Emblem & Terminal Window */}
          <div className="lg:col-span-5 space-y-6">
            {/* Center Logo Display with Subtle Precision Rim */}
            <div className="relative mx-auto w-44 h-44 sm:w-56 sm:h-56">
              {/* Ambient backlight */}
              <div className="absolute inset-0 rounded-full bg-[#00ff88]/15 blur-2xl" />
              <div className="relative w-full h-full rounded-full border-2 border-[#00ff88]/40 shadow-[0_0_30px_rgba(0,255,136,0.25)] overflow-hidden bg-[#050505] p-1">
                <img
                  src="/logo.png"
                  alt="sudo Unknown Official Emblem"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Terminal Window Box */}
            <div className="rounded-xl bg-[#090b0e] border border-white/[0.1] shadow-2xl overflow-hidden group hover:border-[#00ff88]/40 transition-colors">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1217] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88]/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                  <Lock className="w-3 h-3 text-[#00ff88]" />
                  <span>user@world:~$ sudo</span>
                </div>
                <div className="text-[10px] font-mono text-gray-500">
                  HTB-331386
                </div>
              </div>

              {/* Terminal Screen Content */}
              <div className="p-4 sm:p-5 font-mono text-xs space-y-3 bg-[#050505]">
                {/* Official Boot Prompt lines */}
                <div className="text-gray-500 text-[11px] border-b border-white/[0.05] pb-2 space-y-0.5">
                  <div>user@world:~$ sudo</div>
                  <div>[sudo] password for ? **********</div>
                  <div className="text-[#00ff88]">Permission granted.</div>
                  <div className="text-gray-300">Welcome to the unknown.</div>
                </div>

                {/* Animated typing sequence */}
                <div className="space-y-1 pt-1">
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
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-[#00ff88] font-bold">&gt;</span>
                      <span>{typedSudo}</span>
                      {bootStep === 1 && <span className="inline-block w-1.5 h-3.5 bg-[#00ff88] animate-pulse" />}
                    </div>
                    {showGranted && (
                      <div className="pl-4 border-l-2 border-[#00ff88] text-[#00ff88] font-bold flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                        <span>GRANTED</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Interactive command input */}
                {showGranted && (
                  <div className="pt-2 border-t border-white/[0.05] space-y-2">
                    {history.map((h, i) => (
                      <div key={i} className="space-y-0.5 text-[11px]">
                        <div className="text-gray-400"><span className="text-[#00ff88]">&gt;</span> {h.cmd}</div>
                        <div className={`pl-3 ${h.isSuccess ? 'text-[#00ff88]' : 'text-gray-300'}`}>{h.output}</div>
                      </div>
                    ))}

                    <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 text-xs pt-1">
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
