import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG, STATISTICS, TEAM_MEMBERS, WRITEUPS, TOOL_ARSENAL } from '../data/teamData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose, onNavigateSection }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'sysinfo',
      output: (
        <div className="space-y-1 text-gray-300">
          <div className="text-[#00ff88] font-bold">sudo Unknown Cyber Shell v3.0 [All-in-One Collective]</div>
          <div>Type <span className="text-[#00ff88] font-semibold">&apos;help&apos;</span> to inspect recognized commands.</div>
          <div>Quick shortcuts: <span className="text-yellow-400">&apos;writeups&apos;</span>, <span className="text-cyan-400">&apos;arsenal&apos;</span>, <span className="text-purple-400">&apos;htb&apos;</span>, <span className="text-red-400">&apos;cat flag&apos;</span></div>
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
            <div className="text-[#00ff88] font-bold mb-1">// COMMAND DIRECTORY:</div>
            <div>  <span className="text-yellow-400">writeups</span>        - Display latest HTB &amp; CTF field walkthroughs</div>
            <div>  <span className="text-yellow-400">services</span>        - List enterprise red team &amp; offensive capabilities</div>
            <div>  <span className="text-yellow-400">arsenal</span>         - List open-source exploit tools &amp; recon suites</div>
            <div>  <span className="text-yellow-400">team</span>            - Display syndicate operators &amp; recruitment slots</div>
            <div>  <span className="text-yellow-400">htb</span>             - Show Hack The Box team #331386 overview</div>
            <div>  <span className="text-yellow-400">whoami</span>          - Display current session privileges</div>
            <div>  <span className="text-yellow-400">cat flag</span>        - Inspect root flag proof</div>
            <div>  <span className="text-yellow-400">goto [section]</span> - Jump to section (writeups, services, team, etc.)</div>
            <div>  <span className="text-yellow-400">clear</span>           - Clear shell buffer</div>
            <div>  <span className="text-yellow-400">exit</span>            - Close shell drawer</div>
          </div>
        );
        break;

      case 'writeups':
        outputNode = (
          <div className="space-y-2 text-gray-300">
            <div className="text-[#00ff88] font-bold">// 10 FIELD WRITEUPS INDEXED:</div>
            {WRITEUPS.map((w) => (
              <div key={w.id} className="flex items-center justify-between text-[11px] p-1.5 rounded bg-black/40 border border-white/5">
                <span className="text-white font-semibold">{w.challengeName}</span>
                <span className="text-[#00ff88]">{w.category} ({w.difficulty})</span>
              </div>
            ))}
            {onNavigateSection && (
              <button
                onClick={() => {
                  onNavigateSection('writeups');
                  onClose();
                }}
                className="mt-1 text-xs text-[#00ff88] underline block"
              >
                &rarr; Jump to Full Writeups Hub View
              </button>
            )}
          </div>
        );
        break;

      case 'arsenal':
        outputNode = (
          <div className="space-y-2 text-gray-300">
            <div className="text-cyan-400 font-bold">// SQUAD TOOL ARSENAL:</div>
            {TOOL_ARSENAL.map((t) => (
              <div key={t.id} className="text-[11px] p-1.5 rounded bg-black/40 border border-white/5">
                <span className="text-white font-bold">{t.name}</span>: {t.description}
              </div>
            ))}
          </div>
        );
        break;

      case 'team':
        outputNode = (
          <div className="space-y-1.5 text-gray-300">
            <div className="text-[#00ff88] font-bold">// SYNDICATE ROSTER:</div>
            {TEAM_MEMBERS.map((m) => (
              <div key={m.id} className="text-[11px]">
                &gt; <span className="text-white font-bold">{m.name}</span> - {m.role} [{m.status}]
              </div>
            ))}
          </div>
        );
        break;

      case 'htb':
        outputNode = (
          <div className="space-y-1 text-gray-300">
            <div className="text-[#00ff88] font-bold">// HACK THE BOX COMPETITIVE PROFILE:</div>
            <div>Team Identifier: <span className="text-white font-bold">#331386</span></div>
            <div>URL: <a href={SITE_CONFIG.htbTeamUrl} target="_blank" rel="noreferrer" className="text-[#00ff88] underline">{SITE_CONFIG.htbTeamUrl}</a></div>
            <div>Status: Verified CTF Team // Scheduled University CTF &amp; Apocalypse Contender</div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-gray-300">
            <span className="text-[#00ff88] font-bold">root@sudounknown</span>: uid=0(root) gid=0(root) groups=0(root),4(adm),27(sudo)
            <div className="text-xs text-gray-400 mt-1">Permission Granted. Identity Unknown.</div>
          </div>
        );
        break;

      case 'cat':
        if (parts[1]?.toLowerCase().includes('flag')) {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.5 },
            colors: ['#00ff88', '#22ff99', '#ffffff']
          });
          outputNode = (
            <div className="p-3 rounded bg-[#0d1410] border border-[#00ff88]/40 space-y-1">
              <div className="text-[#00ff88] font-bold">FLAG CAPTURED!</div>
              <code className="text-xs font-mono text-white block">HTB&#123;sud0_unkn0wn_4ll_1n_0n3_mast3ry_2026&#125;</code>
            </div>
          );
        } else {
          outputNode = <div>cat: {parts[1] || ''}: No such file or directory. Try &apos;cat flag&apos;.</div>;
        }
        break;

      case 'goto':
        const target = parts[1]?.toLowerCase();
        if (target && onNavigateSection) {
          onNavigateSection(target);
          onClose();
          return;
        } else {
          outputNode = <div>Usage: goto [writeups|services|arsenal|team|achievements|join]</div>;
        }
        break;

      case 'clear':
        setLogs([]);
        return;

      case 'exit':
        onClose();
        return;

      default:
        outputNode = (
          <div className="text-red-400">
            Command not recognized: &apos;{trimmed}&apos;. Type &apos;help&apos; to view available options.
          </div>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: trimmed,
        output: outputNode
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
        className={`w-full bg-[#070a0e] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-200 ${
          isMaximized ? 'h-[96vh] max-w-6xl' : 'h-[600px] max-w-3xl'
        }`}
      >
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1218] border-b border-white/[0.08] select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[#00ff88]" />
            <span className="font-mono text-xs font-bold text-white">
              sudo Unknown Interactive Shell
            </span>
            <span className="font-mono text-[10px] text-gray-500 hidden sm:inline">
              [x86_64 // root privileged]
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              title={isMaximized ? 'Restore' : 'Maximize'}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Output Terminal */}
        <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-3 bg-[#06080c]">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-[#00ff88] font-bold">operator@sudounknown:~$</span>
                <span className="text-white">{log.command}</span>
              </div>
              <div className="pl-4 border-l border-white/5 py-1 text-gray-300">
                {log.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1218] border-t border-white/[0.08] font-mono text-xs">
          <span className="text-[#00ff88] font-bold shrink-0">operator@sudounknown:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'writeups', 'cat flag', etc..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-gray-600"
          />
          <button
            onClick={() => {
              handleCommand(inputVal);
              setInputVal('');
            }}
            className="px-3 py-1 rounded bg-[#00ff88] text-black font-bold text-[11px] hover:bg-[#22ff99] transition-all"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};
