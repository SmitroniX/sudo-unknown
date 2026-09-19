import React from 'react';

interface BrandedTitleProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showCrown?: boolean;
  showDivider?: boolean;
  className?: string;
}

export const BrandedTitle: React.FC<BrandedTitleProps> = ({
  size = 'md',
  showCrown = true,
  showDivider = false,
  className = ''
}) => {
  if (size === 'hero') {
    return (
      <div className={`relative inline-block text-left select-none ${className}`}>
        {/* Top Glitched sudo with floating graffiti Crown */}
        <div className="relative inline-flex items-center">
          <span className="font-mono text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">
            sud
            <span className="relative inline-block">
              o
              {showCrown && (
                <span className="absolute -top-6 -right-5 sm:-top-8 sm:-right-7 transform -rotate-12 animate-pulse">
                  <svg
                    className="w-8 h-8 sm:w-11 sm:h-11 text-[#00ff88] drop-shadow-[0_0_12px_rgba(0,255,136,0.9)]"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M4 22L7 27H25L28 22L22 24L16 14L10 24L4 22Z" />
                    <circle cx="7" cy="20" r="1.5" fill="#00ff88" />
                    <circle cx="16" cy="12" r="1.5" fill="#00ff88" />
                    <circle cx="25" cy="20" r="1.5" fill="#00ff88" />
                  </svg>
                </span>
              )}
            </span>
          </span>
        </div>

        {/* Big Aggressive Brush UNKNOWN */}
        <div className="-mt-3 sm:-mt-5">
          <span className="font-brush text-5xl sm:text-7xl lg:text-9xl text-[#00ff88] tracking-wide inline-block transform -rotate-1 drop-shadow-[0_0_25px_rgba(0,255,136,0.6)]">
            UNKNOWN
          </span>
        </div>

        {/* Hack The Box Cyber Line */}
        {showDivider && (
          <div className="flex items-center gap-3 pt-2 text-xs sm:text-sm font-mono tracking-widest text-gray-400">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-white/40" />
            <span className="text-white font-semibold tracking-[0.25em]">HACK THE BOX</span>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-white/40" />
          </div>
        )}
      </div>
    );
  }

  if (size === 'lg') {
    return (
      <div className={`relative inline-flex flex-col select-none ${className}`}>
        <div className="relative inline-flex items-center font-mono text-3xl sm:text-4xl font-black text-white">
          <span>sud</span>
          <span className="relative inline-block">
            o
            {showCrown && (
              <span className="absolute -top-4 -right-3 transform -rotate-12">
                <svg className="w-5 h-5 text-[#00ff88] drop-shadow-[0_0_8px_rgba(0,255,136,0.9)]" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M4 22L7 27H25L28 22L22 24L16 14L10 24L4 22Z" />
                </svg>
              </span>
            )}
          </span>
        </div>
        <span className="font-brush text-3xl sm:text-4xl text-[#00ff88] -mt-2 drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">
          UNKNOWN
        </span>
      </div>
    );
  }

  // Default / 'sm' or 'md' (suitable for navbar, headers, badges)
  return (
    <div className={`relative inline-flex items-baseline gap-1 select-none font-mono ${className}`}>
      <span className="relative font-bold text-white tracking-tight">
        sud
        <span className="relative inline-block">
          o
          {showCrown && (
            <span className="absolute -top-2.5 -right-2 transform -rotate-12">
              <svg className="w-3.5 h-3.5 text-[#00ff88] drop-shadow-[0_0_6px_rgba(0,255,136,0.9)]" viewBox="0 0 32 32" fill="currentColor">
                <path d="M4 22L7 27H25L28 22L22 24L16 14L10 24L4 22Z" />
              </svg>
            </span>
          )}
        </span>
      </span>
      <span className="font-brush text-[#00ff88] text-base sm:text-lg tracking-wider transform -rotate-2 drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">
        UNKNOWN
      </span>
    </div>
  );
};
