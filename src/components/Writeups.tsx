import React, { useState } from 'react';
import { FileText, ArrowRight, X, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WRITEUPS, Writeup } from '../data/teamData';

export const Writeups: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedWriteup, setSelectedWriteup] = useState<Writeup | null>(null);
  const [copiedPoc, setCopiedPoc] = useState(false);
  const [copiedFlag, setCopiedFlag] = useState(false);

  const categories = ['All', 'Web', 'Pwn', 'Crypto', 'Forensics', 'Reverse', 'OSINT', 'Misc'];

  const filteredWriteups = WRITEUPS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'text-[#00ff88] bg-[#00ff88]/10 border-[#00ff88]/30';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Hard':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'Insane':
        return 'text-red-400 bg-red-400/10 border-red-400/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const handleCopyPoc = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedPoc(true);
    setTimeout(() => setCopiedPoc(false), 2000);
  };

  const handleCopyFlag = (flag: string) => {
    navigator.clipboard.writeText(flag);
    setCopiedFlag(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#00ff88', '#22ff99', '#ffffff']
    });
    setTimeout(() => setCopiedFlag(false), 2000);
  };

  return (
    <section id="writeups" className="py-24 relative z-10 border-t border-white/[0.06] bg-[#07090b]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>// TECHNICAL DEBRIEFS &amp; METHODOLOGY</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Cybersecurity Writeups
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans max-w-2xl leading-relaxed">
              In-depth challenge walkthroughs and exploit breakdowns documenting our methodology.
              Select any category to inspect reproducible exploit chains.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#00ff88] text-black font-bold shadow-[0_0_12px_rgba(0,255,136,0.3)]'
                    : 'bg-[#090c0f] text-gray-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWriteups.map((wup: Writeup) => (
            <div
              key={wup.id}
              className="p-6 rounded-2xl bg-[#090c0f] border border-white/[0.08] hover:border-[#00ff88]/40 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                {/* Meta info header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded border border-[#00ff88]/30">
                    {wup.category}
                  </span>
                  <span className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded border ${getDifficultyColor(wup.difficulty)}`}>
                    {wup.difficulty}
                  </span>
                </div>

                {/* Challenge Name */}
                <h3 className="font-mono text-base sm:text-lg font-bold text-white group-hover:text-[#00ff88] transition-colors mb-2 line-clamp-2">
                  {wup.challengeName}
                </h3>

                {/* CTF Name & Points */}
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-3 pb-2 border-b border-white/[0.04]">
                  <span className="truncate text-gray-300">
                    <strong className="text-gray-500">CTF:</strong> {wup.ctf}
                  </span>
                  <span className="text-[#00ff88] font-semibold flex-shrink-0">+{wup.points} pts</span>
                </div>

                {/* Short Description */}
                <p className="font-sans text-xs text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {wup.shortDescription}
                </p>
              </div>

              <div>
                {/* Author and Date */}
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 mb-3">
                  <span>{wup.author}</span>
                  <span>{wup.date}</span>
                </div>

                {/* Read Writeup Button */}
                <button
                  onClick={() => setSelectedWriteup(wup)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0e1318] hover:bg-[#00ff88] hover:text-black text-gray-300 border border-white/[0.08] hover:border-[#00ff88] font-mono text-xs font-bold transition-all"
                >
                  <span>Read Writeup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Reader */}
        {selectedWriteup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#090c0f] border border-[#00ff88]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
              {/* Header Bar */}
              <div className="p-5 sm:p-6 bg-[#0e1318] border-b border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#00ff88] bg-[#00ff88]/15 px-2 py-0.5 rounded border border-[#00ff88]/30">
                      {selectedWriteup.category}
                    </span>
                    <span className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded border ${getDifficultyColor(selectedWriteup.difficulty)}`}>
                      {selectedWriteup.difficulty}
                    </span>
                    <span className="font-mono text-xs text-gray-400">
                      // CTF: {selectedWriteup.ctf}
                    </span>
                  </div>
                  <h3 className="font-mono text-xl sm:text-2xl font-bold text-white">
                    {selectedWriteup.challengeName}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedWriteup(null)}
                  className="p-2 rounded-lg bg-[#050505] text-gray-400 hover:text-white border border-white/10"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 pb-3 border-b border-white/[0.05]">
                  <span>CTF: <strong className="text-white">{selectedWriteup.ctf}</strong></span>
                  <span>•</span>
                  <span>Points: <strong className="text-[#00ff88]">+{selectedWriteup.points}</strong></span>
                  <span>•</span>
                  <span>Date: {selectedWriteup.date}</span>
                </div>

                {/* 01 Summary */}
                <div>
                  <h4 className="font-mono text-xs text-[#00ff88] uppercase tracking-wider font-bold mb-2">
                    01 // Executive Summary
                  </h4>
                  <p className="bg-[#050505] p-4 rounded-xl border border-white/[0.06] font-mono text-xs text-gray-300 leading-relaxed">
                    {selectedWriteup.fullContent.summary}
                  </p>
                </div>

                {/* 02 Reconnaissance */}
                <div>
                  <h4 className="font-mono text-xs text-[#00ff88] uppercase tracking-wider font-bold mb-2">
                    02 // Reconnaissance &amp; Discovery
                  </h4>
                  <p className="text-gray-300">
                    {selectedWriteup.fullContent.reconnaissance}
                  </p>
                </div>

                {/* 03 Root Cause */}
                <div>
                  <h4 className="font-mono text-xs text-[#00ff88] uppercase tracking-wider font-bold mb-2">
                    03 // Vulnerability Root Cause Analysis
                  </h4>
                  <p className="text-gray-300">
                    {selectedWriteup.fullContent.vulnerabilityAnalysis}
                  </p>
                </div>

                {/* 04 Exploitation Steps */}
                <div>
                  <h4 className="font-mono text-xs text-[#00ff88] uppercase tracking-wider font-bold mb-2">
                    04 // Step-by-Step Exploitation
                  </h4>
                  <div className="space-y-2 font-mono text-xs">
                    {selectedWriteup.fullContent.exploitationSteps.map((step, i) => (
                      <div key={i} className="p-3 rounded-lg bg-[#050505] border border-white/[0.05] flex items-start gap-3">
                        <span className="text-[#00ff88] font-bold">[{i + 1}]</span>
                        <span className="text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 05 PoC Code */}
                {selectedWriteup.fullContent.pocCode && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-mono text-xs text-[#00ff88] uppercase tracking-wider font-bold">
                        05 // Exploit Script / Proof of Concept
                      </h4>
                      <button
                        onClick={() => handleCopyPoc(selectedWriteup.fullContent.pocCode || '')}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e1318] text-gray-300 hover:text-[#00ff88] text-xs font-mono border border-white/10"
                      >
                        {copiedPoc ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPoc ? 'Copied' : 'Copy Script'}</span>
                      </button>
                    </div>
                    <pre className="p-4 rounded-xl bg-[#050505] border border-white/10 font-mono text-xs text-[#00ff88] overflow-x-auto">
                      <code>{selectedWriteup.fullContent.pocCode}</code>
                    </pre>
                  </div>
                )}

                {/* 06 Flag */}
                <div className="p-4 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                      FLAG VALIDATED
                    </span>
                    <code className="font-mono text-xs sm:text-sm font-bold text-white">
                      {selectedWriteup.fullContent.flag}
                    </code>
                  </div>
                  <button
                    onClick={() => handleCopyFlag(selectedWriteup.fullContent.flag)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#00ff88] text-black font-mono text-xs font-bold hover:bg-[#22ff99]"
                  >
                    {copiedFlag ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFlag ? 'Copied Flag!' : 'Copy Flag'}</span>
                  </button>
                </div>

                {/* 07 Key Takeaways */}
                <div>
                  <h4 className="font-mono text-xs text-[#00ff88] uppercase tracking-wider font-bold mb-2">
                    07 // Key Takeaways &amp; Defensive Mitigations
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-400">
                    {selectedWriteup.fullContent.keyTakeaways.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#0e1318] border-t border-white/[0.08] flex justify-end">
                <button
                  onClick={() => setSelectedWriteup(null)}
                  className="px-5 py-2 rounded-lg bg-[#050505] text-gray-200 hover:text-white font-mono text-xs font-semibold border border-white/10"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
