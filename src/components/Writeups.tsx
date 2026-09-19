import React, { useState } from 'react';
import { FileText, Calendar, User, ArrowRight, X, Copy, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WRITEUPS, Writeup } from '../data/teamData';

export const Writeups: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedWriteup, setSelectedWriteup] = useState<Writeup | null>(null);
  const [copiedFlag, setCopiedFlag] = useState(false);
  const [copiedPoc, setCopiedPoc] = useState(false);

  const categories = ['All', 'Web', 'Pwn', 'Crypto', 'Forensics', 'Reverse', 'OSINT', 'Misc'];

  const filteredWriteups = WRITEUPS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'text-[#00ff66] bg-[#00ff66]/10 border-[#00ff66]/30';
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

  const handleCopyFlag = (flag: string) => {
    navigator.clipboard.writeText(flag);
    setCopiedFlag(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00ff66', '#22ff77', '#ffffff']
    });
    setTimeout(() => setCopiedFlag(false), 2000);
  };

  const handleCopyPoc = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedPoc(true);
    setTimeout(() => setCopiedPoc(false), 2000);
  };

  return (
    <section id="writeups" className="py-24 relative z-10 bg-[#050505]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>// DECLASSIFIED RESEARCH</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Cybersecurity Writeups
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans max-w-2xl">
              In-depth post-mortem analyses, vulnerability disclosures, and reproducible exploit chains
              documented by sudo Unknown operators.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-[#00ff66] text-black font-bold shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                    : 'bg-[#0a0d0f] text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Writeups Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWriteups.map((wup: Writeup) => (
            <div
              key={wup.id}
              className="group relative rounded-xl bg-[#0a0d0f] border border-white/10 hover:border-[#00ff66]/50 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,102,0.12)]"
            >
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#00ff66]/5 rounded-full blur-2xl group-hover:bg-[#00ff66]/15 transition-all" />

              <div>
                {/* Meta info header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-[#00ff66] bg-[#00ff66]/10 px-2 py-0.5 rounded border border-[#00ff66]/30">
                    {wup.category}
                  </span>
                  <span className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded border ${getDifficultyColor(wup.difficulty)}`}>
                    {wup.difficulty}
                  </span>
                </div>

                {/* Challenge Title */}
                <h3 className="font-mono text-lg font-bold text-white group-hover:text-[#00ff66] transition-colors mb-2 line-clamp-2">
                  {wup.title}
                </h3>

                {/* CTF Name & Points */}
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-4 pb-3 border-b border-white/5">
                  <span className="truncate text-gray-300">{wup.ctf}</span>
                  <span className="text-[#00ff66] font-semibold">+{wup.points} pts</span>
                </div>

                {/* Short Description */}
                <p className="font-sans text-xs text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {wup.shortDescription}
                </p>
              </div>

              {/* Card Footer with Author and Read Button */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3 h-3 text-gray-400" />
                    <span>{wup.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span>{wup.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedWriteup(wup)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0d1117] hover:bg-[#00ff66] hover:text-black text-gray-200 border border-white/10 hover:border-[#00ff66] font-mono text-xs font-bold transition-all group-hover:border-[#00ff66]/40"
                >
                  <span>Read Writeup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#00ff66] transition-colors" />
            </div>
          ))}
        </div>

        {/* Full Writeup Modal Reader */}
        {selectedWriteup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0d0f] border border-[#00ff66]/50 rounded-2xl shadow-[0_0_50px_rgba(0,255,102,0.2)] flex flex-col overflow-hidden">
              {/* Header Bar */}
              <div className="p-5 sm:p-6 bg-[#0d1117] border-b border-white/10 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#00ff66] bg-[#00ff66]/15 px-2 py-0.5 rounded border border-[#00ff66]/30">
                      {selectedWriteup.category}
                    </span>
                    <span className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded border ${getDifficultyColor(selectedWriteup.difficulty)}`}>
                      {selectedWriteup.difficulty}
                    </span>
                    <span className="font-mono text-xs text-gray-400 hidden sm:inline">
                      // {selectedWriteup.ctf}
                    </span>
                  </div>
                  <h3 className="font-mono text-xl sm:text-2xl font-bold text-white">
                    {selectedWriteup.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedWriteup(null)}
                  className="p-2 rounded-lg bg-[#050505] text-gray-400 hover:text-white border border-white/10 hover:border-[#00ff66]/50 transition-colors"
                  aria-label="Close writeup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-300 font-sans leading-relaxed">
                {/* Author & Timestamp Bar */}
                <div className="flex items-center gap-4 text-xs font-mono text-gray-400 pb-4 border-b border-white/5">
                  <span>Author: <strong className="text-[#00ff66]">{selectedWriteup.author}</strong></span>
                  <span>•</span>
                  <span>Date: {selectedWriteup.date}</span>
                  <span>•</span>
                  <span>Points: +{selectedWriteup.points}</span>
                </div>

                {/* Executive Summary */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-[#00ff66] uppercase tracking-wider font-bold">
                    01 // Executive Summary
                  </h4>
                  <p className="bg-[#050505] p-4 rounded-lg border border-white/5 font-mono text-xs text-gray-300">
                    {selectedWriteup.fullContent.summary}
                  </p>
                </div>

                {/* Reconnaissance */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-[#00ff66] uppercase tracking-wider font-bold">
                    02 // Reconnaissance &amp; Discovery
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {selectedWriteup.fullContent.reconnaissance}
                  </p>
                </div>

                {/* Vulnerability Analysis */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-[#00ff66] uppercase tracking-wider font-bold">
                    03 // Vulnerability Root Cause Analysis
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {selectedWriteup.fullContent.vulnerabilityAnalysis}
                  </p>
                </div>

                {/* Exploitation Steps */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-[#00ff66] uppercase tracking-wider font-bold">
                    04 // Step-by-Step Exploitation
                  </h4>
                  <div className="space-y-2 font-mono text-xs">
                    {selectedWriteup.fullContent.exploitationSteps.map((step, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#050505] border border-white/5 flex items-start gap-3">
                        <span className="text-[#00ff66] font-bold">[{idx + 1}]</span>
                        <span className="text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PoC Code Snippet */}
                {selectedWriteup.fullContent.pocCode && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono text-xs text-[#00ff66] uppercase tracking-wider font-bold">
                        05 // Weaponized PoC / Exploit Script
                      </h4>
                      <button
                        onClick={() => handleCopyPoc(selectedWriteup.fullContent.pocCode || '')}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0d1117] text-gray-300 hover:text-[#00ff66] text-xs font-mono border border-white/10"
                      >
                        {copiedPoc ? <Check className="w-3.5 h-3.5 text-[#00ff66]" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPoc ? 'Copied' : 'Copy Script'}</span>
                      </button>
                    </div>
                    <pre className="p-4 rounded-xl bg-[#050505] border border-white/10 font-mono text-xs text-[#00ff66] overflow-x-auto">
                      <code>{selectedWriteup.fullContent.pocCode}</code>
                    </pre>
                  </div>
                )}

                {/* Flag Captured Callout */}
                <div className="p-4 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#00ff66] flex-shrink-0" />
                    <div>
                      <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                        FLAG VERIFIED
                      </span>
                      <code className="font-mono text-sm font-bold text-white">
                        {selectedWriteup.fullContent.flag}
                      </code>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopyFlag(selectedWriteup.fullContent.flag)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#00ff66] text-black font-mono text-xs font-bold hover:bg-[#22ff77] transition-all"
                  >
                    {copiedFlag ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFlag ? 'Copied Flag!' : 'Copy Flag'}</span>
                  </button>
                </div>

                {/* Key Takeaways */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-mono text-xs text-[#00ff66] uppercase tracking-wider font-bold">
                    06 // Defensive Key Takeaways
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-400">
                    {selectedWriteup.fullContent.keyTakeaways.map((takeaway, i) => (
                      <li key={i}>{takeaway}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#0d1117] border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedWriteup(null)}
                  className="px-5 py-2 rounded-lg bg-[#161b22] text-gray-200 hover:text-white font-mono text-xs font-semibold border border-white/10"
                >
                  Close Document [ESC]
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
