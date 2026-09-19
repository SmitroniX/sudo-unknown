import React from 'react';
import { Terminal as TerminalIcon, ShieldCheck } from 'lucide-react';

interface CyberOperatorVisualProps {
  onOpenTerminal?: () => void;
  className?: string;
}

export const CyberOperatorVisual: React.FC<CyberOperatorVisualProps> = ({
  onOpenTerminal,
  className = ''
}) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#07090b] shadow-[0_0_50px_rgba(0,0,0,0.8)] group ${className}`}>
      {/* Background Cyber Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#00ff88]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Operative Silhouette Container */}
      <div className="relative aspect-[4/5] max-h-[480px] w-full overflow-hidden bg-[#050505] flex items-center justify-center">
        {/* Hooded Operative Artwork Base */}
        <img
          src="/hacker-hero.png"
          alt="sudo Unknown Hooded Operative"
          className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
        />

        {/* Dynamic Glowing Terminal Prompt Eyes Overlay (in case the image is dark, this glows right on the face!) */}
        <div className="absolute top-[34%] left-[49%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <div className="flex items-center gap-1 font-mono font-black text-2xl sm:text-3xl text-[#00ff88] drop-shadow-[0_0_15px_#00ff88] tracking-widest animate-cursor-blink">
            <span>&gt;</span>
            <span className="inline-block w-4 h-1.5 bg-[#00ff88] -mb-2" />
          </div>
        </div>

        {/* Ambient Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090b] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/85 border border-[#00ff88]/40 font-mono text-[11px] text-[#00ff88] backdrop-blur-md shadow-[0_0_12px_rgba(0,255,136,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span>OPERATOR // VERIFIED</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/85 border border-white/10 font-mono text-[10px] text-gray-400 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ff88]" />
            <span>HTB #331386</span>
          </div>
        </div>

        {/* Graffiti Wall Ethos Overlays */}
        <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/85 border border-white/10 backdrop-blur-md font-mono space-y-1">
          <div className="text-gray-400 text-[10px] tracking-widest uppercase">ETHOS // DOCTRINE</div>
          <div className="text-white font-bold text-xs tracking-wider">
            GOOD HACKERS BUILD A BETTER INTERNET
          </div>
          <div className="text-[#00ff88] text-[11px] font-semibold tracking-wide">
            THINK • HACK • LEARN • CONQUER
          </div>
        </div>
      </div>

      {/* Interactive Footer Quick-Action */}
      <div className="p-3 bg-[#0c1015] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-gray-400">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="text-[#00ff88]">&gt;</span>
          <span>user@htb:~$ whoami</span>
        </div>
        {onOpenTerminal && (
          <button
            onClick={onOpenTerminal}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00ff88]/10 hover:bg-[#00ff88]/20 border border-[#00ff88]/30 text-[#00ff88] text-[11px] transition-all hover:scale-105"
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Launch Shell</span>
          </button>
        )}
      </div>
    </div>
  );
};
