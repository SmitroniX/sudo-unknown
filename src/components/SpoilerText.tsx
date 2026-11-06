import React, { useState } from 'react';
import { Eye, EyeOff, Copy, Check, Lock, Unlock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SpoilerTextProps {
  content: string;
  label?: string;
  variant?: 'flag' | 'password' | 'hash' | 'inline';
  className?: string;
}

export const SpoilerText: React.FC<SpoilerTextProps> = ({
  content,
  label = 'FLAG',
  variant = 'flag',
  className = ''
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleToggle = () => {
    if (!isRevealed) {
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.65 },
        colors: ['#00ff88', '#22ff99', '#ffffff']
      });
    }
    setIsRevealed(!isRevealed);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === 'inline') {
    return (
      <span
        onClick={handleToggle}
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded cursor-pointer transition-all select-none font-mono text-xs ${
          isRevealed
            ? 'bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30 font-semibold'
            : 'bg-zinc-800/90 text-zinc-400 hover:text-white hover:bg-zinc-700/80 border border-zinc-700'
        } ${className}`}
        title={isRevealed ? 'Click to hide spoiler' : 'Click to reveal secret'}
      >
        {isRevealed ? (
          <>
            <span>{content}</span>
            <button
              onClick={handleCopy}
              className="hover:text-white p-0.5 ml-1 transition-colors"
              title="Copy"
            >
              {copied ? <Check className="w-3 h-3 text-[#00ff88]" /> : <Copy className="w-3 h-3" />}
            </button>
          </>
        ) : (
          <>
            <Lock className="w-3 h-3 text-yellow-400" />
            <span className="italic">// SPOILER: CLICK TO REVEAL //</span>
          </>
        )}
      </span>
    );
  }

  return (
    <div
      onClick={handleToggle}
      className={`relative p-3.5 rounded-xl border transition-all cursor-pointer select-none group font-mono text-xs ${
        isRevealed
          ? 'bg-[#0c1410] border-[#00ff88]/50 shadow-[0_0_20px_rgba(0,255,136,0.15)]'
          : 'bg-[#0c0f14] border-white/10 hover:border-white/20'
      } ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
              isRevealed
                ? 'bg-[#00ff88]/20 border-[#00ff88] text-[#00ff88]'
                : 'bg-white/5 border-white/10 text-yellow-400'
            }`}
          >
            {isRevealed ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
          </div>

          <div className="min-w-0">
            <span className="text-[10px] text-gray-400 block font-semibold uppercase tracking-wider">
              {label} {isRevealed ? '— [UNMASKED]' : '— [SPOILER SHIELD ACTIVE]'}
            </span>

            {isRevealed ? (
              <code className="text-xs sm:text-sm font-mono font-bold text-[#00ff88] break-all block mt-0.5">
                {content}
              </code>
            ) : (
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-gray-500 blur-sm select-none">
                  {content.length > 30 ? content.slice(0, 30) + '...' : content}
                </span>
                <span className="text-[11px] text-yellow-400 font-semibold group-hover:text-yellow-300">
                  (Click to Reveal Secret)
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1 shrink-0">
          {isRevealed ? (
            <>
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 rounded-lg bg-[#142018] hover:bg-[#1d3023] border border-[#00ff88]/30 text-[#00ff88] text-xs font-mono transition-colors flex items-center gap-1.5"
                title="Copy flag to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00ff88]" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsRevealed(false);
                }}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                title="Hide spoiler"
              >
                <EyeOff className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <div className="px-2.5 py-1 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-[11px] font-semibold flex items-center gap-1 group-hover:bg-yellow-400/20 transition-all">
              <Eye className="w-3 h-3" />
              <span>Reveal</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
