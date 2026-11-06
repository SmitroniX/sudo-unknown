import React, { useState } from 'react';
import { Terminal, Copy, Check, Maximize2, Sparkles } from 'lucide-react';

interface TerminalScreenProps {
  title?: string;
  command: string;
  output?: string;
  prompt?: string;
  lineNotes?: string[];
  className?: string;
}

export const TerminalScreen: React.FC<TerminalScreenProps> = ({
  title = 'bash — 80x24',
  command,
  output,
  prompt = 'operator@sudounknown:~$',
  lineNotes,
  className = ''
}) => {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedOut, setCopiedOut] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const handleCopyOutput = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopiedOut(true);
    setTimeout(() => setCopiedOut(false), 2000);
  };

  return (
    <div className={`rounded-xl border border-white/10 bg-[#06080c] shadow-2xl overflow-hidden font-mono text-xs my-4 ${className}`}>
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#0c1015] border-b border-white/[0.08] select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88]/80 inline-block" />
          </div>
          <span className="text-gray-400 text-[11px] ml-2 truncate">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopyCommand}
            className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#00ff88] text-[10px] transition-colors border border-white/5 flex items-center gap-1"
            title="Copy command string"
          >
            {copiedCmd ? <Check className="w-3 h-3 text-[#00ff88]" /> : <Copy className="w-3 h-3" />}
            <span>{copiedCmd ? 'Command Copied' : 'Copy Cmd'}</span>
          </button>
          {output && (
            <button
              onClick={handleCopyOutput}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 text-[10px] transition-colors border border-white/5 hidden sm:flex items-center gap-1"
              title="Copy terminal output"
            >
              {copiedOut ? <Check className="w-3 h-3 text-cyan-400" /> : <Copy className="w-3 h-3 text-gray-400" />}
              <span>{copiedOut ? 'Output Copied' : 'Copy Out'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div className="p-4 overflow-x-auto space-y-2 bg-[#05070a]">
        {/* Command Line */}
        <div className="flex items-start gap-2 text-white">
          <span className="text-[#00ff88] font-bold shrink-0">{prompt}</span>
          <span className="text-emerald-300 font-semibold break-all">{command}</span>
        </div>

        {/* Output Area */}
        {output && (
          <pre className="text-gray-300 text-[11.5px] leading-relaxed pt-1 whitespace-pre-wrap font-mono border-t border-white/[0.04]">
            {output}
          </pre>
        )}
      </div>

      {/* Line-by-Line Breakdown Annotations */}
      {lineNotes && lineNotes.length > 0 && (
        <div className="px-4 py-2.5 bg-[#0b0e14] border-t border-white/[0.06] text-[11px] font-sans text-gray-400 space-y-1">
          <span className="font-mono text-[10px] text-[#00ff88] font-bold uppercase tracking-wider block">
            // Line-by-Line Technical Analysis:
          </span>
          <ul className="space-y-1">
            {lineNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-300">
                <span className="text-[#00ff88] font-mono text-[10px] mt-0.5">&gt;</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
