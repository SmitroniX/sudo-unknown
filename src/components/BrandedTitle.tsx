import React from 'react';

interface BrandedTitleProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showCrown?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

export const BrandedTitle: React.FC<BrandedTitleProps> = ({
  size = 'md',
  showCrown = true,
  showSubtitle = false,
  className = ''
}) => {
  if (size === 'hero') {
    return (
      <div className={`relative inline-block text-left select-none ${className}`}>
        {/* Top sudo with subtle glowing crown */}
        <div className="relative inline-flex items-center">
          <span className="font-mono text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-[0_2px_15px_rgba(255,255,255,0.15)]">
            sud
            <span className="relative inline-block">
              o
              {showCrown && (
                <span className="absolute -top-5 -right-4 sm:-top-7 sm:-right-6 transform -rotate-12">
                  <svg
                    className="w-7 h-7 sm:w-10 sm:h-10 text-[#00ff88] drop-shadow-[0_0_12px_rgba(0,255,136,0.9)] animate-pulse"
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

        {/* Clean, high-impact UNKNOWN */}
        <div className="-mt-2 sm:-mt-4">
          <span className="font-mono text-5xl sm:text-7xl lg:text-9xl font-black text-[#00ff88] tracking-wider inline-block drop-shadow-[0_0_30px_rgba(0,255,136,0.5)]">
            UNKNOWN
          </span>
        </div>

        {/* Syndicate All-in-One Line */}
        {showSubtitle && (
          <div className="flex items-center gap-3 pt-3 text-xs sm:text-sm font-mono tracking-widest text-gray-400">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#00ff88]/50" />
            <span className="text-gray-200 font-semibold tracking-[0.2em]">CYBERSECURITY SYNDICATE</span>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#00ff88]/50" />
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
              <span className="absolute -top-3.5 -right-3 transform -rotate-12">
                <svg className="w-5 h-5 text-[#00ff88] drop-shadow-[0_0_8px_rgba(0,255,136,0.9)]" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M4 22L7 27H25L28 22L22 24L16 14L10 24L4 22Z" />
                </svg>
              </span>
            )}
          </span>
        </div>
        <span className="font-mono font-black text-3xl sm:text-4xl text-[#00ff88] -mt-1 tracking-wider drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">
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
            <span className="absolute -top-2 -right-1.5 transform -rotate-12">
              <svg className="w-3 h-3 text-[#00ff88] drop-shadow-[0_0_6px_rgba(0,255,136,0.9)]" viewBox="0 0 32 32" fill="currentColor">
                <path d="M4 22L7 27H25L28 22L22 24L16 14L10 24L4 22Z" />
              </svg>
            </span>
          )}
        </span>
      </span>
      <span className="font-bold text-[#00ff88] text-sm sm:text-base tracking-wider drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">
        UNKNOWN
      </span>
    </div>
  );
};
