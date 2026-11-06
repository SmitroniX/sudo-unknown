import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Terminal,
  ShieldAlert,
  Server,
  Cpu,
  Globe,
  Binary,
  KeyRound,
  SearchCode,
  Network,
  Cloud,
  CheckCircle2,
  FileCode,
  Download,
  Flame,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Writeup } from '../data/teamData';

interface WriteupModalProps {
  writeup: Writeup | null;
  onClose: () => void;
}

export const WriteupModal: React.FC<WriteupModalProps> = ({ writeup, onClose }) => {
  const [copiedPoc, setCopiedPoc] = useState(false);
  const [copiedFlag, setCopiedFlag] = useState<'user' | 'root' | 'general' | null>(null);
  const [copiedStepIndex, setCopiedStepIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'walkthrough' | 'poc' | 'defense'>('walkthrough');

  if (!writeup) return null;

  const handleCopyPoc = () => {
    if (!writeup.fullContent.pocCode) return;
    navigator.clipboard.writeText(writeup.fullContent.pocCode);
    setCopiedPoc(true);
    setTimeout(() => setCopiedPoc(false), 2000);
  };

  const handleCopyFlag = (flagText: string, type: 'user' | 'root' | 'general') => {
    navigator.clipboard.writeText(flagText);
    setCopiedFlag(type);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00ff88', '#00e5ff', '#ffffff']
    });
    setTimeout(() => setCopiedFlag(null), 2000);
  };

  const handleCopyStepSnippet = (snippet: string, idx: number) => {
    navigator.clipboard.writeText(snippet);
    setCopiedStepIndex(idx);
    setTimeout(() => setCopiedStepIndex(null), 2000);
  };

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Medium':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'Hard':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      case 'Insane':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#090d12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 bg-[#0d1218] border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse" />
            <div className="flex items-center gap-2 font-mono text-xs text-gray-300">
              <span className="text-[#00ff88] font-semibold">{writeup.platform}</span>
              <span className="text-gray-600">//</span>
              <span>{writeup.category}</span>
              <span className="text-gray-600">//</span>
              <span className={`px-2 py-0.5 rounded text-[11px] border font-bold ${getDifficultyBadge(writeup.difficulty)}`}>
                {writeup.difficulty}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Challenge Header / Title Banner */}
        <div className="p-5 sm:p-7 bg-gradient-to-b from-[#0e141c] to-[#090d12] border-b border-white/[0.06]">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {writeup.targetOs && (
              <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
                {writeup.targetOs}
              </span>
            )}
            {writeup.targetIp && (
              <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
                IP: {writeup.targetIp}
              </span>
            )}
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 text-xs font-mono">
              {writeup.points} PTS
            </span>
            <span className="text-gray-500 text-xs font-mono ml-auto">
              Date: {writeup.date}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
            {writeup.challengeName}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            {writeup.shortDescription}
          </p>

          {/* CVEs & Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {writeup.cves?.map((cve) => (
              <span key={cve} className="px-2 py-0.5 rounded bg-red-500/15 border border-red-500/30 text-red-400 font-mono text-[11px] font-semibold">
                {cve}
              </span>
            ))}
            {writeup.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-gray-400 font-mono text-[11px]">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 px-5 sm:px-7 pt-4 border-b border-white/[0.06] bg-[#090d12]">
          <button
            onClick={() => setActiveTab('walkthrough')}
            className={`pb-2.5 px-3 font-mono text-xs font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'walkthrough'
                ? 'border-[#00ff88] text-[#00ff88]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Attack Chain &amp; Walkthrough
          </button>
          {writeup.fullContent.pocCode && (
            <button
              onClick={() => setActiveTab('poc')}
              className={`pb-2.5 px-3 font-mono text-xs font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
                activeTab === 'poc'
                  ? 'border-[#00ff88] text-[#00ff88]'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              Exploit PoC Code
            </button>
          )}
          <button
            onClick={() => setActiveTab('defense')}
            className={`pb-2.5 px-3 font-mono text-xs font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'defense'
                ? 'border-[#00ff88] text-[#00ff88]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Hardening &amp; Remediation
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-sm font-sans">
          {activeTab === 'walkthrough' && (
            <div className="space-y-6">
              {/* Executive Overview */}
              <div className="p-4 rounded-xl bg-[#0d1218] border border-white/[0.08]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#00ff88] font-bold mb-2">
                  // Mission Overview &amp; Objective
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {writeup.fullContent.overview}
                </p>
              </div>

              {/* Target Recon & Intelligence */}
              {writeup.fullContent.targetIntel && (
                <div className="p-4 rounded-xl bg-[#0d1218] border border-white/[0.08]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold mb-3">
                    // Target Intelligence &amp; Open Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    {writeup.fullContent.targetIntel.os && (
                      <div className="p-2.5 rounded bg-black/40 border border-white/5">
                        <span className="text-gray-400 block mb-1">OPERATING SYSTEM</span>
                        <span className="text-white font-semibold">{writeup.fullContent.targetIntel.os}</span>
                      </div>
                    )}
                    {writeup.fullContent.targetIntel.ip && (
                      <div className="p-2.5 rounded bg-black/40 border border-white/5">
                        <span className="text-gray-400 block mb-1">TARGET IP ADDRESS</span>
                        <span className="text-white font-semibold">{writeup.fullContent.targetIntel.ip}</span>
                      </div>
                    )}
                  </div>
                  {writeup.fullContent.targetIntel.openPorts && (
                    <div className="mt-3">
                      <span className="text-gray-400 text-xs font-mono block mb-1.5">OPEN PORTS ENUMERATED:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {writeup.fullContent.targetIntel.openPorts.map((p) => (
                          <span key={p} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 font-mono text-[11px]">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Reconnaissance & Discovery */}
              <div>
                <h3 className="font-mono text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <SearchCode className="w-4 h-4 text-[#00ff88]" />
                  Reconnaissance &amp; Initial Probing
                </h3>
                <p className="text-gray-300 leading-relaxed bg-[#0c1015] p-4 rounded-xl border border-white/[0.06]">
                  {writeup.fullContent.reconnaissance}
                </p>
              </div>

              {/* Vulnerability Root Cause */}
              <div>
                <h3 className="font-mono text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-yellow-400" />
                  Vulnerability Root-Cause Analysis
                </h3>
                <p className="text-gray-300 leading-relaxed bg-[#0c1015] p-4 rounded-xl border border-white/[0.06]">
                  {writeup.fullContent.vulnerabilityAnalysis}
                </p>
              </div>

              {/* Step-by-Step Attack Chain */}
              <div>
                <h3 className="font-mono text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-400" />
                  Step-by-Step Attack Chain Execution
                </h3>
                <div className="space-y-4">
                  {writeup.fullContent.attackChain.map((step, idx) => (
                    <div
                      key={step.title}
                      className="p-4 rounded-xl bg-[#0c1016] border border-white/[0.08] relative group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-mono text-xs sm:text-sm font-bold text-[#00ff88]">
                          {step.title}
                        </h4>
                        <span className="font-mono text-[10px] text-gray-500">
                          STAGE 0{idx + 1}
                        </span>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>

                      {step.commandOrSnippet && (
                        <div className="relative rounded-lg bg-[#05070a] border border-white/[0.06] p-3 font-mono text-xs overflow-x-auto text-gray-200">
                          <button
                            onClick={() => handleCopyStepSnippet(step.commandOrSnippet!, idx)}
                            className="absolute top-2 right-2 px-2 py-1 rounded bg-[#131921] hover:bg-[#1b232e] text-[10px] font-mono text-gray-400 hover:text-[#00ff88] transition-colors border border-white/5 flex items-center gap-1"
                          >
                            {copiedStepIndex === idx ? (
                              <>
                                <Check className="w-3 h-3 text-[#00ff88]" />
                                <span className="text-[#00ff88]">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                          <pre className="pr-16 leading-relaxed whitespace-pre-wrap">{step.commandOrSnippet}</pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Captured Flags Showcase */}
              <div className="p-4 rounded-xl bg-[#0d1410] border border-[#00ff88]/30 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#00ff88] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
                  <span>// Captured Flags &amp; Proof of Execution</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {writeup.fullContent.userFlag && (
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-gray-400 block">USER FLAG (USER.TXT)</span>
                        <code className="text-xs font-mono text-white truncate block">
                          {writeup.fullContent.userFlag}
                        </code>
                      </div>
                      <button
                        onClick={() => handleCopyFlag(writeup.fullContent.userFlag!, 'user')}
                        className="px-2.5 py-1 rounded bg-[#121921] hover:bg-[#1b2533] border border-white/10 text-xs font-mono text-gray-300 hover:text-[#00ff88] transition-colors shrink-0 flex items-center gap-1"
                      >
                        {copiedFlag === 'user' ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>Copy</span>
                      </button>
                    </div>
                  )}

                  {(writeup.fullContent.rootFlag || writeup.fullContent.flag) && (
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-[#00ff88] block">
                          {writeup.fullContent.rootFlag ? 'ROOT FLAG (ROOT.TXT)' : 'CHALLENGE FLAG'}
                        </span>
                        <code className="text-xs font-mono text-[#00ff88] truncate block">
                          {writeup.fullContent.rootFlag || writeup.fullContent.flag}
                        </code>
                      </div>
                      <button
                        onClick={() =>
                          handleCopyFlag(
                            (writeup.fullContent.rootFlag || writeup.fullContent.flag)!,
                            'root'
                          )
                        }
                        className="px-2.5 py-1 rounded bg-[#121921] hover:bg-[#1b2533] border border-white/10 text-xs font-mono text-gray-300 hover:text-[#00ff88] transition-colors shrink-0 flex items-center gap-1"
                      >
                        {copiedFlag === 'root' ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>Copy</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'poc' && writeup.fullContent.pocCode && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-sm font-bold text-white">
                    Weaponized PoC Exploit Script
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">
                    Language: {writeup.fullContent.pocLanguage || 'Python'} // Standalone Reproducible Proof of Concept
                  </p>
                </div>
                <button
                  onClick={handleCopyPoc}
                  className="px-3 py-1.5 rounded-lg bg-[#00ff88] text-black font-mono text-xs font-bold hover:bg-[#22ff99] transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,255,136,0.3)]"
                >
                  {copiedPoc ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied PoC</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Script</span>
                    </>
                  )}
                </button>
              </div>

              <div className="rounded-xl bg-[#05070a] border border-white/10 p-4 font-mono text-xs overflow-x-auto text-emerald-300">
                <pre className="leading-relaxed">{writeup.fullContent.pocCode}</pre>
              </div>
            </div>
          )}

          {activeTab === 'defense' && (
            <div className="space-y-6">
              {/* Defense Remediation Points */}
              <div className="p-4 rounded-xl bg-[#0d1218] border border-white/[0.08]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#00ff88] font-bold mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-[#00ff88]" />
                  Defensive Remediation &amp; Mitigation Guidance
                </h3>
                <ul className="space-y-2.5">
                  {writeup.fullContent.defenseRemediation.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-2 shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Takeaways */}
              <div className="p-4 rounded-xl bg-[#0d1218] border border-white/[0.08]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Key Takeaways for Practitioners
                </h3>
                <ul className="space-y-2">
                  {writeup.fullContent.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3 bg-[#0d1218] border-t border-white/[0.08] text-xs font-mono">
          <div className="text-gray-400">
            Author: <span className="text-[#00ff88] font-semibold">{writeup.author}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
          >
            Close Walkthrough
          </button>
        </div>
      </div>
    </div>
  );
};
