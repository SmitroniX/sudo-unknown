import React from 'react';

interface CyberTitleGraphicProps {
  className?: string;
  size?: 'hero' | 'compact';
}

export const CyberTitleGraphic: React.FC<CyberTitleGraphicProps> = ({
  className = '',
  size = 'hero'
}) => {
  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Top sudo wordmark with floating tilted neon graffiti crown */}
      <div className="relative inline-flex items-center justify-center">
        {/* The 'sudo' letters in futuristic glitch stencil style */}
        <div className="relative font-mono font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tighter uppercase cyber-stencil-sudo flex items-baseline">
          <span>sud</span>
          
          {/* Letter 'o' with the signature tilted green graffiti crown perched on top */}
          <span className="relative inline-block">
            <span>o</span>

            {/* Neon Green Graffiti Crown */}
            <span className="absolute -top-7 -right-6 sm:-top-10 sm:-right-8 md:-top-12 md:-right-10 transform rotate-[14deg] hover:rotate-[8deg] transition-transform duration-300 pointer-events-none">
              <svg
                viewBox="0 0 64 48"
                className="w-10 h-8 sm:w-14 sm:h-11 md:w-18 md:h-14 text-[#00ff88] filter drop-shadow-[0_0_12px_rgba(0,255,136,0.95)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Crown base and 3 peaks */}
                <path
                  d="M6 38 L12 14 L24 26 L32 6 L40 26 L52 14 L58 38 Z"
                  fill="rgba(0, 255, 136, 0.25)"
                  stroke="#00ff88"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* 3 glowing crown tip balls */}
                <circle cx="12" cy="14" r="3.5" fill="#00ff88" className="animate-pulse" />
                <circle cx="32" cy="6" r="4" fill="#00ff88" className="animate-pulse" />
                <circle cx="52" cy="14" r="3.5" fill="#00ff88" className="animate-pulse" />
                {/* Crown bottom curve line */}
                <path
                  d="M10 40 Q32 44 54 40"
                  stroke="#00ff88"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>

          {/* Glitch Cutout Horizontal Slash Accent lines */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#050505] opacity-80 pointer-events-none" />
          <div className="absolute inset-x-0 top-[35%] h-[1px] bg-[#050505] opacity-60 pointer-events-none" />
        </div>
      </div>

      {/* Massive Aggressive Brush Graffiti UNKNOWN */}
      <div className="-mt-3 sm:-mt-5 md:-mt-8 relative z-10">
        <span 
          className="font-brush text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-wide inline-block transform -rotate-[2.5deg] hover:-rotate-[1deg] transition-transform duration-300 cyber-brush-title bg-gradient-to-b from-[#55ffbb] via-[#00ff88] to-[#00bb66] bg-clip-text text-transparent filter drop-shadow-[0_0_35px_rgba(0,255,136,0.7)]"
        >
          UNKNOWN
        </span>

        {/* Dynamic paint drip / spray splatter accents */}
        <div className="absolute -bottom-3 left-1/4 w-1.5 h-4 bg-[#00ff88] rounded-full opacity-80 animate-pulse blur-[0.5px]" />
        <div className="absolute -bottom-5 left-1/3 w-1 h-3 bg-[#00ff88] rounded-full opacity-60 blur-[0.5px]" />
        <div className="absolute -bottom-2 right-1/4 w-2 h-3.5 bg-[#00ff88] rounded-full opacity-70 blur-[0.5px]" />
      </div>

      {/* Tactical Hack The Box Subtitle Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 pt-3 sm:pt-4 w-full max-w-md">
        <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-[#00ff88]/60" />
        <span className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-300 font-bold drop-shadow-[0_0_10px_rgba(0,255,136,0.4)]">
          HACK THE BOX
        </span>
        <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-[#00ff88]/60" />
      </div>

      {/* Sub-mantra text */}
      <div className="pt-2 font-mono text-[10px] sm:text-xs md:text-sm tracking-wider text-gray-400">
        <span>PERMISSION GRANTED. IDENTITY </span>
        <span className="text-[#00ff88] font-bold drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]">
          UNKNOWN.
        </span>
      </div>
    </div>
  );
};
