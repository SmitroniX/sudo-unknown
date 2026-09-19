import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, CheckCircle2, CornerDownLeft, Lock, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  // Terminal typing simulation
  const [typedCommand1, setTypedCommand1] = useState('');
  const [output1, setOutput1] = useState(false);
  const [typedCommand2, setTypedCommand2] = useState('');
  const [output2, setOutput2] = useState(false);
  const [step, setStep] = useState(0);

  // Interactive mini command line inside Hero
  const [userCmd, setUserCmd] = useState('');
  const [customOutputs, setCustomOutputs] = useState<Array<{ cmd: string; res: string; isError?: boolean }>>([
    { cmd: 'cat status.txt', res: 'All systems operational // 14 operators active // HTB team ID: 331386' }
  ]);

  useEffect(() => {
    // Step 0: Type 'whoami'
    const cmd1 = 'whoami';
    let i = 0;
    const interval1 = setInterval(() => {
      if (i < cmd1.length) {
        setTypedCommand1((prev) => prev + cmd1.charAt(i));
        i++;
      } else {
        clearInterval(interval1);
        setTimeout(() => {
          setOutput1(true);
          setStep(1);
        }, 400);
      }
    }, 110);

    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    if (step !== 1) return;

    // Step 1: Type 'sudo access'
    const cmd2 = 'sudo access';
    let j = 0;
    const interval2 = setInterval(() => {
      if (j < cmd2.length) {
        setTypedCommand2((prev) => prev + cmd2.charAt(j));
        j++;
      } else {
        clearInterval(interval2);
        setTimeout(() => {
          setOutput2(true);
          setStep(2);
        }, 500);
      }
    }, 110);

    return () => clearInterval(interval2);
  }, [step]);

  const handleCustomCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = userCmd.trim().toLowerCase();
    if (!clean) return;

    let res = '';
    let isError = false;

    switch (clean) {
      case 'help':
        res = 'Available commands: whoami, sudo access, cat flag.txt, htb, clear, roster, mission';
        break;
      case 'whoami':
        res = 'unknown (guest session privileges)';
        break;
      case 'sudo access':
        res = 'GRANTED // Access level: ROOT_GUEST';
        break;
      case 'cat flag.txt':
        res = 'HTB{p3rm1ss10n_gr4nt3d_1d3nt1ty_unkn0wn_2026}';
        break;
      case 'htb':
        res = 'Navigating to Hack The Box team portal: ctf.hackthebox.com/team/overview/331386';
        window.open(SITE_CONFIG.htbTeamUrl, '_blank');
        break;
      case 'roster':
        res = 'Core handles: 0xCipher, NullPointer, ByteGhost, ShadowTrace, HexVortex, SpecterOS';
        break;
      case 'mission':
        res = 'Focused on hands-on learning, problem solving, collaboration, and continuous improvement.';
        break;
      case 'clear':
        setCustomOutputs([]);
        setUserCmd('');
        return;
      default:
        res = `command not found: ${clean}. Type 'help' for command list.`;
        isError = true;
    }

    setCustomOutputs((prev) => [...prev.slice(-3), { cmd: userCmd, res, isError }]);
    setUserCmd('');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background cyber lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#00ff66]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center space-y-6">
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1117]/90 border border-[#00ff66]/30 text-xs font-mono text-gray-300 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,102,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
            <span className="text-gray-400">HACK THE BOX // TEAM ID:</span>
            <span className="text-[#00ff66] font-bold">331386</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">EST. 2024</span>
          </div>

          {/* Primary Team Name */}
          <div className="space-y-2">
            <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white select-none">
              sudo{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] via-[#22ff77] to-[#00f0ff] filter drop-shadow-[0_0_25px_rgba(0,255,102,0.35)]">
                Unknown
              </span>
            </h1>

            {/* Tagline */}
            <p className="font-mono text-lg sm:text-2xl md:text-3xl text-gray-200 tracking-wide font-medium">
              &ldquo;<span className="text-[#00ff66]">Permission Granted.</span> Identity Unknown.&rdquo;
            </p>
          </div>

          {/* Subtitle description */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
            A competitive cybersecurity Capture The Flag team engineered for rigorous technical mastery,
            decentralized research, and collaborative problem solving across Hack The Box and premier global arenas.
          </p>

          {/* Core Terminal Animation Box */}
          <div className="max-w-2xl mx-auto text-left rounded-xl bg-[#0a0d0f]/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-[#00ff66]/40 transition-all duration-300">
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1117] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
                <div className="w-3 h-3 rounded-full bg-[#00ff66]/80" />
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400">
                <Lock className="w-3 h-3 text-[#00ff66]" />
                <span>tty1 // session_init.sh</span>
              </div>
              <div className="text-[10px] font-mono text-gray-500">
                UTF-8
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-3 bg-[#050505]/95">
              {/* Command 1: whoami */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-[#00ff66] font-bold">&gt;</span>
                  <span>{typedCommand1}</span>
                  {step === 0 && <span className="inline-block w-2 h-4 bg-[#00ff66] animate-pulse" />}
                </div>
                {output1 && (
                  <div className="text-gray-400 pl-4 border-l-2 border-[#00ff66]/20 font-medium">
                    unknown
                  </div>
                )}
              </div>

              {/* Command 2: sudo access */}
              {step >= 1 && (
                <div className="space-y-1 pt-1">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-[#00ff66] font-bold">&gt;</span>
                    <span>{typedCommand2}</span>
                    {step === 1 && <span className="inline-block w-2 h-4 bg-[#00ff66] animate-pulse" />}
                  </div>
                  {output2 && (
                    <div className="pl-4 border-l-2 border-[#00ff66] text-[#00ff66] font-bold flex items-center gap-2 py-0.5 animate-fadeIn">
                      <CheckCircle2 className="w-4 h-4 text-[#00ff66]" />
                      <span className="tracking-wider">GRANTED</span>
                      <span className="text-gray-400 font-normal text-xs ml-2">[SESSION TOKEN 0x7FFF942E VALIDATED]</span>
                    </div>
                  )}
                </div>
              )}

              {/* Interactive Micro CLI Input */}
              {output2 && (
                <div className="pt-2 mt-2 border-t border-white/5 space-y-2">
                  {customOutputs.map((item, idx) => (
                    <div key={idx} className="space-y-0.5 text-xs">
                      <div className="text-gray-400">
                        <span className="text-[#00ff66]">&gt;</span> {item.cmd}
                      </div>
                      <div className={`pl-3 font-mono ${item.isError ? 'text-red-400' : 'text-gray-300'}`}>
                        {item.res}
                      </div>
                    </div>
                  ))}

                  <form onSubmit={handleCustomCommandSubmit} className="flex items-center gap-2 text-xs pt-1">
                    <span className="text-[#00ff66] font-bold">&gt;</span>
                    <input
                      type="text"
                      value={userCmd}
                      onChange={(e) => setUserCmd(e.target.value)}
                      placeholder="Type 'help', 'cat flag.txt', 'roster', or 'htb'..."
                      className="flex-1 bg-transparent text-gray-200 placeholder-gray-600 focus:outline-none font-mono"
                    />
                    <button
                      type="submit"
                      className="px-2 py-0.5 text-[11px] rounded bg-[#0d1117] text-gray-400 hover:text-[#00ff66] border border-white/10"
                    >
                      <CornerDownLeft className="w-3 h-3" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* Join Our Team */}
            <a
              href="#join"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#00ff66] text-black font-mono font-bold text-sm hover:bg-[#22ff77] transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(0,255,102,0.4)] focus:outline-none focus:ring-2 focus:ring-[#00ff66]"
            >
              <Sparkles className="w-4 h-4" />
              <span>[ Join Our Team ]</span>
            </a>

            {/* View on Hack The Box */}
            <a
              href={SITE_CONFIG.htbTeamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#0d1117] text-white font-mono font-medium text-sm border border-white/15 hover:border-[#00ff66] hover:text-[#00ff66] transition-all transform hover:-translate-y-0.5 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#00ff66]/50"
            >
              <ExternalLink className="w-4 h-4 text-[#00ff66]" />
              <span>[ View on Hack The Box ]</span>
            </a>

            {/* Launch Interactive Terminal */}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#0a0d0f] text-gray-300 font-mono font-medium text-sm border border-white/10 hover:border-[#00ff66] hover:text-[#00ff66] transition-all transform hover:-translate-y-0.5"
                title="Launch full interactive cyber shell (Hotkey: `)"
              >
                <Terminal className="w-4 h-4 text-[#00ff66]" />
                <span>Launch Shell</span>
              </button>
            )}
          </div>

          {/* Quick Category Anchors */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-gray-400">
            <span className="text-gray-500">OPERATIONAL DOMAINS:</span>
            {['WEB', 'PWN', 'CRYPTO', 'FORENSICS', 'REVERSE', 'OSINT', 'MISC'].map((tag) => (
              <a
                key={tag}
                href="#skills"
                className="px-2 py-0.5 rounded bg-[#0d1117]/60 border border-white/5 hover:border-[#00ff66]/40 hover:text-[#00ff66] transition-colors"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
