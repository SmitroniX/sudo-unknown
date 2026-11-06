import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
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
  Flame,
  ExternalLink,
  ChevronRight,
  Share2
} from 'lucide-react';
import { Writeup, WRITEUPS } from '../data/teamData';
import { SpoilerText } from './SpoilerText';
import { TerminalScreen } from './TerminalScreen';

interface WriteupDetailViewProps {
  writeup: Writeup;
  onBack: () => void;
  onSelectWriteup?: (id: string) => void;
}

export const WriteupDetailView: React.FC<WriteupDetailViewProps> = ({
  writeup,
  onBack,
  onSelectWriteup
}) => {
  const [activeTab, setActiveTab] = useState<'walkthrough' | 'poc' | 'defense'>('walkthrough');

  const currentIndex = WRITEUPS.findIndex((w) => w.id === writeup.id);
  const nextWriteup = currentIndex < WRITEUPS.length - 1 ? WRITEUPS[currentIndex + 1] : WRITEUPS[0];

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
    <div className="pt-24 pb-20 relative z-10 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Navigation Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08] text-xs font-mono">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#00ff88] transition-colors border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Writeups Catalog</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-gray-500 text-[11px]">
            <span>sudo Unknown</span>
            <span>/</span>
            <span>Writeups</span>
            <span>/</span>
            <span className="text-[#00ff88] font-semibold truncate max-w-[200px]">
              {writeup.challengeName}
            </span>
          </div>
        </div>

        {/* Hero Header Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0d131a] to-[#080b0f] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-lg bg-[#00ff88]/15 border border-[#00ff88]/30 font-mono text-xs font-bold text-[#00ff88]">
              {writeup.platform}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
              {writeup.category}
            </span>
            <span className={`px-2.5 py-1 rounded-lg border font-mono text-xs font-bold ${getDifficultyBadge(writeup.difficulty)}`}>
              {writeup.difficulty}
            </span>
            {writeup.targetOs && (
              <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 font-mono text-xs text-blue-400">
                OS: {writeup.targetOs}
              </span>
            )}
            {writeup.targetIp && (
              <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 font-mono text-xs text-purple-300">
                IP: {writeup.targetIp}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/30 font-mono text-xs text-yellow-400 ml-auto">
              {writeup.points} PTS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-white tracking-tight leading-tight">
            {writeup.challengeName}
          </h1>

          <p className="mt-4 text-base text-gray-300 font-sans leading-relaxed max-w-3xl">
            {writeup.shortDescription}
          </p>

          {/* Author & Date metadata */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <span>Authored by:</span>
              <span className="text-white font-semibold">{writeup.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-500" />
              <span>Published: {writeup.date}</span>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="mt-8 flex items-center gap-2 border-b border-white/[0.08] pb-1 font-mono text-xs">
          <button
            onClick={() => setActiveTab('walkthrough')}
            className={`pb-3 px-4 font-semibold transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'walkthrough'
                ? 'border-[#00ff88] text-[#00ff88]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Line-by-Line Attack Chain</span>
          </button>
          {writeup.fullContent.pocCode && (
            <button
              onClick={() => setActiveTab('poc')}
              className={`pb-3 px-4 font-semibold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'poc'
                  ? 'border-[#00ff88] text-[#00ff88]'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Exploit PoC Script</span>
            </button>
          )}
          <button
            onClick={() => setActiveTab('defense')}
            className={`pb-3 px-4 font-semibold transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'defense'
                ? 'border-[#00ff88] text-[#00ff88]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Defensive Hardening</span>
          </button>
        </div>

        {/* Main Tab Content */}
        <div className="mt-8 space-y-10">
          {activeTab === 'walkthrough' && (
            <>
              {/* Executive Overview Card */}
              <div className="p-6 rounded-2xl bg-[#090d12] border border-white/[0.08] space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#00ff88] font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
                  <span>// MISSION BRIEFING &amp; HIGH-LEVEL SUMMARY</span>
                </h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-sans">
                  {writeup.fullContent.overview}
                </p>
              </div>

              {/* Target Reconnaissance & Service Intelligence */}
              {writeup.fullContent.targetIntel && (
                <div className="p-6 rounded-2xl bg-[#090d12] border border-white/[0.08] space-y-4">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                    <Server className="w-4 h-4 text-cyan-400" />
                    <span>// ENUMERATED TARGET INTELLIGENCE</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    {writeup.fullContent.targetIntel.os && (
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-gray-400 block text-[10px] mb-1">OPERATING SYSTEM</span>
                        <span className="text-white font-bold">{writeup.fullContent.targetIntel.os}</span>
                      </div>
                    )}
                    {writeup.fullContent.targetIntel.ip && (
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-gray-400 block text-[10px] mb-1">TARGET IP ADDRESS</span>
                        <span className="text-[#00ff88] font-bold">{writeup.fullContent.targetIntel.ip}</span>
                      </div>
                    )}
                  </div>

                  {writeup.fullContent.targetIntel.openPorts && (
                    <div>
                      <span className="font-mono text-[11px] text-gray-400 block mb-2">
                        DISCOVERED OPEN PORTS:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {writeup.fullContent.targetIntel.openPorts.map((port) => (
                          <span
                            key={port}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-200"
                          >
                            {port}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Line-by-Line Attack Stages with Terminal Screenshots & Spoilers */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-xl font-bold text-white flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <span>Line-by-Line Attack Chain Walkthrough</span>
                  </h3>
                  <span className="font-mono text-xs text-gray-400">
                    {writeup.fullContent.attackChain.length} Execution Stages
                  </span>
                </div>

                <div className="space-y-8">
                  {writeup.fullContent.attackChain.map((step, idx) => (
                    <div
                      key={step.title}
                      className="p-6 rounded-2xl bg-[#090d12] border border-white/[0.08] relative group"
                    >
                      {/* Step Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <h4 className="font-mono text-base font-bold text-[#00ff88]">
                          {step.title}
                        </h4>
                        <span className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-gray-400">
                          STAGE 0{idx + 1}
                        </span>
                      </div>

                      {/* Step Explanation */}
                      <p className="text-sm text-gray-300 font-sans leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Realistic Terminal Screenshot Simulation */}
                      {(step.command || step.commandOrSnippet) && (
                        <TerminalScreen
                          title={step.terminalTitle || `${writeup.id}-stage-0${idx + 1} — bash — 80x24`}
                          command={step.command || step.commandOrSnippet!}
                          output={step.terminalOutput}
                          prompt={step.prompt || 'operator@sudounknown:~$'}
                          lineNotes={step.lineNotes}
                        />
                      )}

                      {/* Spoiler Element if this step captures a password, credential, or flag */}
                      {step.spoilerData && (
                        <div className="mt-4">
                          <SpoilerText
                            label={step.spoilerData.label}
                            content={step.spoilerData.value}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Captured Flags Section with Spoiler Shields */}
              <div className="p-6 rounded-2xl bg-[#070b0e] border border-[#00ff88]/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#00ff88] uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
                    <span>// CAPTURED PROOF FLAGS (PROTECTED WITH SPOILER SHIELD)</span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 hidden sm:inline">
                    Click to unmask flag
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {writeup.fullContent.userFlag && (
                    <SpoilerText
                      label="USER FLAG (USER.TXT)"
                      content={writeup.fullContent.userFlag}
                      variant="flag"
                    />
                  )}

                  {(writeup.fullContent.rootFlag || writeup.fullContent.flag) && (
                    <SpoilerText
                      label={writeup.fullContent.rootFlag ? "ROOT FLAG (ROOT.TXT)" : "CHALLENGE FLAG"}
                      content={(writeup.fullContent.rootFlag || writeup.fullContent.flag)!}
                      variant="flag"
                    />
                  )}
                </div>
              </div>
            </>
          )}

          {activeTab === 'poc' && writeup.fullContent.pocCode && (
            <div className="p-6 rounded-2xl bg-[#090d12] border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-base font-bold text-white">
                    Weaponized Proof-of-Concept Exploit Script
                  </h3>
                  <span className="font-mono text-xs text-gray-400">
                    Language: {writeup.fullContent.pocLanguage || 'Python'} // Standalone Reproducible Runner
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-[#05070a] border border-white/10 p-5 font-mono text-xs overflow-x-auto text-emerald-300">
                <pre className="leading-relaxed">{writeup.fullContent.pocCode}</pre>
              </div>
            </div>
          )}

          {activeTab === 'defense' && (
            <div className="p-6 rounded-2xl bg-[#090d12] border border-white/[0.08] space-y-6">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#00ff88] font-bold mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-[#00ff88]" />
                  <span>Defensive Mitigation &amp; Patch Playbook</span>
                </h3>
                <ul className="space-y-3 font-sans text-sm text-gray-300">
                  {writeup.fullContent.defenseRemediation.map((rec, i) => (
                    <li key={i} className="flex items-start gap-3 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-[#00ff88] mt-2 shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <h3 className="font-mono text-sm uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Key Methodological Takeaways</span>
                </h3>
                <ul className="space-y-2 font-sans text-sm text-gray-300">
                  {writeup.fullContent.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-3 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation & Next Walkthrough Jump */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <button
            onClick={onBack}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Writeups</span>
          </button>

          {nextWriteup && onSelectWriteup && (
            <button
              onClick={() => onSelectWriteup(nextWriteup.id)}
              className="px-4 py-2.5 rounded-xl bg-[#00ff88] hover:bg-[#22ff99] text-black font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.3)]"
            >
              <span>Next: {nextWriteup.challengeName}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
