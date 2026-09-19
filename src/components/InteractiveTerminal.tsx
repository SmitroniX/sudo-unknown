import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG, STATISTICS, ROSTER_SLOTS, SKILL_CATEGORIES } from '../data/teamData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  isRoot?: boolean;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [isRoot, setIsRoot] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'sysinfo',
      output: (
        <div className="space-y-1 text-gray-300">
          <div>sudo Unknown CTF Shell v2.4.0 (x86_64-pc-cyber-linux)</div>
          <div>Type <span className="text-[#00ff66] font-bold">&apos;help&apos;</span> to inspect recognized operational commands.</div>
          <div>Try: <span className="text-yellow-400">&apos;cat flag.txt&apos;</span> or <span className="text-[#00ff66]">&apos;sudo su&apos;</span></div>
        </div>
      )
    }
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();

    let outputNode: React.ReactNode = null;

    switch (mainCmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-gray-300">
            <div className="text-[#00ff66] font-bold mb-1">// AVAILABLE COMMANDS:</div>
            <div>  <span className="text-yellow-400">whoami</span>          - Display current user identity</div>
            <div>  <span className="text-yellow-400">sudo su</span>         - Escalate privileges to root</div>
            <div>  <span className="text-yellow-400">cat flag.txt</span>    - Attempt flag capture</div>
            <div>  <span className="text-yellow-400">htb</span>             - Open official Hack The Box team portal</div>
            <div>  <span className="text-yellow-400">stats</span>           - Print CTF statistics and solved metrics</div>
            <div>  <span className="text-yellow-400">roster</span>          - List active team operators</div>
            <div>  <span className="text-yellow-400">categories</span>      - List core CTF disciplines</div>
            <div>  <span className="text-yellow-400">contact</span>         - Show transmission channels</div>
            <div>  <span className="text-yellow-400">clear</span>           - Clear shell window</div>
            <div>  <span className="text-yellow-400">exit</span>            - Terminate terminal session</div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-gray-300">
            {isRoot ? (
              <span className="text-[#00ff66] font-bold">root (UID=0, GID=0 // PRIVILEGED OPERATOR)</span>
            ) : (
              <span>unknown (UID=1001, GID=1001 // GUEST VISITOR) - run &apos;sudo su&apos; to escalate</span>
            )}
          </div>
        );
        break;

      case 'sudo':
        if (parts[1] === 'su' || parts[1] === 'access') {
          setIsRoot(true);
          outputNode = (
            <div className="text-[#00ff66] font-bold flex items-center gap-2">
              <span>[AUTHENTICATED] Welcome root. Prompt upgraded to #.</span>
            </div>
          );
        } else {
          outputNode = <div className="text-gray-400">Usage: sudo su OR sudo access</div>;
        }
        break;

      case 'cat':
        if (parts[1] === 'flag.txt' || parts[1] === 'flag') {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#00ff66', '#22ff77', '#ffffff']
          });
          outputNode = (
            <div className="p-3 rounded bg-[#00ff66]/15 border border-[#00ff66] text-[#00ff66] space-y-1">
              <div className="flex items-center gap-2 font-bold text-white">
                <Sparkles className="w-4 h-4 text-[#00ff66]" />
                <span>CHALLENGE SOLVED! 100 POINTS AWARDED</span>
              </div>
              <div className="font-bold text-base select-all">
                HTB&#123;p3rm1ss10n_gr4nt3d_1d3nt1ty_unkn0wn_2026&#125;
              </div>
              <div className="text-xs text-gray-300">
                You discovered the secret easter egg. Welcome to sudo Unknown!
              </div>
            </div>
          );
        } else if (parts[1] === 'manifesto.sh') {
          outputNode = <div className="text-gray-300">&quot;Permission Granted. Identity Unknown.&quot;</div>;
        } else {
          outputNode = <div className="text-red-400">cat: {parts[1] || 'file'}: No such file or directory. Try &apos;cat flag.txt&apos;.</div>;
        }
        break;

      case 'htb':
        window.open(SITE_CONFIG.htbTeamUrl, '_blank');
        outputNode = (
          <div className="text-[#00ff66]">
            Launching official Hack The Box portal: {SITE_CONFIG.htbTeamUrl}
          </div>
        );
        break;

      case 'stats':
        outputNode = (
          <div className="space-y-1 text-gray-300">
            {STATISTICS.map((s) => (
              <div key={s.id} className="flex justify-between max-w-sm">
                <span className="text-gray-400">{s.label}:</span>
                <span className="text-[#00ff88] font-bold">{s.value}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'roster':
        outputNode = (
          <div className="space-y-1 text-gray-300 max-w-md">
            <div className="text-[#00ff88] font-bold mb-1">// FOUNDING ROSTER SLOTS:</div>
            {ROSTER_SLOTS.map((slot) => (
              <div key={slot.id} className="text-xs flex justify-between">
                <span className={slot.status === 'FILLED' ? 'text-white' : 'text-gray-400'}>
                  {slot.role}
                </span>
                <span className={slot.status === 'FILLED' ? 'text-[#00ff88]' : 'text-yellow-400'}>
                  [{slot.status}]
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'categories':
        outputNode = (
          <div className="flex flex-wrap gap-2 text-xs">
            {SKILL_CATEGORIES.map((c) => (
              <span key={c.id} className="px-2 py-0.5 rounded bg-[#0d1117] text-[#00ff66] border border-[#00ff66]/30">
                {c.shortCode} // {c.name}
              </span>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs text-gray-300">
            <div>Email: {SITE_CONFIG.contactEmail}</div>
            <div>Discord: {SITE_CONFIG.discordUrl}</div>
            <div>HTB Team ID: 331386</div>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        outputNode = (
          <div className="text-red-400">
            zsh: command not found: {trimmed}. Type &apos;help&apos; for available commands.
          </div>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output: outputNode,
        isRoot
      }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx < history.length) {
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full bg-[#050505] border border-[#00ff66]/50 rounded-xl shadow-[0_0_50px_rgba(0,255,102,0.25)] flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'h-[96vh] max-w-[98vw]' : 'h-[550px] max-w-3xl'
        }`}
      >
        {/* Window Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1117] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-80" aria-label="Close" />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-yellow-500/80 hover:opacity-80"
              aria-label="Toggle size"
            />
            <button className="w-3 h-3 rounded-full bg-green-500/80 hover:opacity-80" aria-label="Minimize" />
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
            <TerminalIcon className="w-3.5 h-3.5 text-[#00ff66]" />
            <span>sudo-unknown@htb-shell:~</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-gray-400 hover:text-white"
              title="Toggle Fullscreen"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button onClick={onClose} className="p-1 rounded text-gray-400 hover:text-white" title="Close CLI">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-3 cursor-text selection:bg-[#00ff66]/30 selection:text-[#00ff66]"
        >
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-gray-400">
                <span className={log.isRoot ? 'text-red-400 font-bold' : 'text-[#00ff66] font-bold'}>
                  {log.isRoot ? 'root@sudo-unknown:#' : 'visitor@sudo-unknown:$'}
                </span>
                <span className="text-white font-medium">{log.command}</span>
              </div>
              <div className="pl-3">{log.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-gray-400 pt-1">
            <span className={isRoot ? 'text-red-400 font-bold' : 'text-[#00ff66] font-bold'}>
              {isRoot ? 'root@sudo-unknown:#' : 'visitor@sudo-unknown:$'}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white focus:outline-none font-mono"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Quick Command Suggestions at Bottom */}
        <div className="px-4 py-2 bg-[#0a0d0f] border-t border-white/5 flex items-center gap-2 overflow-x-auto text-[11px] font-mono text-gray-500">
          <span className="text-gray-400 whitespace-nowrap">Shortcuts:</span>
          {['cat flag.txt', 'whoami', 'sudo su', 'htb', 'stats', 'roster', 'help', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                handleCommand(cmd);
                inputRef.current?.focus();
              }}
              className="px-2 py-0.5 rounded bg-[#0d1117] hover:bg-[#161b22] text-gray-300 hover:text-[#00ff66] border border-white/5 whitespace-nowrap transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
