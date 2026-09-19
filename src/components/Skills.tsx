import React, { useState } from 'react';
import { Globe, Cpu, KeyRound, SearchCode, Binary, Crosshair, TerminalSquare, ChevronRight, Terminal, Shield, Wrench, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/teamData';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Cpu,
  KeyRound,
  SearchCode,
  Binary,
  Crosshair,
  TerminalSquare,
};

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null);

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#050505]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// CORE DOMAINS</span>
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Offensive Categories
          </h2>
          <p className="mt-4 text-base text-gray-400 font-sans leading-relaxed">
            Our operations cover all foundational and specialized CTF disciplines. Every team member
            specializes in primary and secondary vectors to ensure end-to-end coverage during competition marathons.
          </p>
        </div>

        {/* 7 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((skill: SkillCategory) => {
            const Icon = iconMap[skill.iconName] || TerminalSquare;
            const isSelected = selectedSkill?.id === skill.id;

            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                className={`group relative p-6 rounded-xl cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden border ${
                  isSelected
                    ? 'bg-[#0e141a] border-[#00ff66] shadow-[0_0_30px_rgba(0,255,102,0.25)] -translate-y-1'
                    : 'bg-[#0a0d0f] border-white/10 hover:border-[#00ff66]/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)]'
                }`}
              >
                {/* Background glow node */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#00ff66]/5 rounded-full blur-2xl group-hover:bg-[#00ff66]/15 transition-all" />

                <div>
                  {/* Top bar with Shortcode and Difficulty */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00ff66] bg-[#00ff66]/10 px-2 py-0.5 rounded border border-[#00ff66]/25">
                      {skill.shortCode}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400 bg-[#0d1117] px-2 py-0.5 rounded border border-white/5">
                      {skill.difficultyFocus}
                    </span>
                  </div>

                  {/* Icon and Category Name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d1117] border border-white/10 flex items-center justify-center text-[#00ff66] group-hover:scale-110 group-hover:border-[#00ff66]/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-mono text-lg font-bold text-white group-hover:text-[#00ff66] transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3 mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Key Tools Pills */}
                <div>
                  <div className="pt-3 border-t border-white/5 space-y-2">
                    <div className="flex items-center gap-1 text-[11px] font-mono text-gray-500">
                      <Wrench className="w-3 h-3 text-[#00ff66]" />
                      <span>PRIMARY TOOLING</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.keyTools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0d1117] text-gray-300 border border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                      {skill.keyTools.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-gray-500">
                          +{skill.keyTools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-[#00ff66]">
                    <span>{isSelected ? 'COLLAPSE SPECS' : 'INSPECT VECTORS'}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-[#00ff66]' : ''}`} />
                  </div>
                </div>

                {/* Bottom Border Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#00ff66] transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Selected Skill Modal / Detailed Inspector */}
        {selectedSkill && (
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0a0d0f] border border-[#00ff66]/50 shadow-[0_0_40px_rgba(0,255,102,0.15)] animate-fadeIn">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0d1117] border border-[#00ff66]/40 flex items-center justify-center text-[#00ff66]">
                  {React.createElement(iconMap[selectedSkill.iconName] || TerminalSquare, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#00ff66] font-bold">{selectedSkill.shortCode}</span>
                    <span className="text-gray-500">•</span>
                    <span className="font-mono text-xs text-gray-400">BENCHMARK: {selectedSkill.difficultyFocus}</span>
                  </div>
                  <h3 className="font-mono text-2xl font-bold text-white">{selectedSkill.name} Deep Dive</h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#writeups"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00ff66]/15 hover:bg-[#00ff66]/25 border border-[#00ff66]/40 text-[#00ff66] font-mono text-xs font-semibold transition-all"
                >
                  <span>View {selectedSkill.name} Writeups</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-3 py-2 rounded-lg bg-[#0d1117] text-gray-400 hover:text-white border border-white/10 text-xs font-mono"
                >
                  Close [ESC]
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Specialized Topics & Attack Chains */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs text-gray-300 uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>Key Attack Chains &amp; Vulnerability Classes</span>
                </h4>
                <div className="space-y-2">
                  {selectedSkill.topics.map((topic, i) => (
                    <div
                      key={topic}
                      className="p-3 rounded-lg bg-[#050505] border border-white/5 flex items-center gap-3 text-xs font-mono text-gray-300 hover:border-[#00ff66]/30 transition-colors"
                    >
                      <span className="text-[#00ff66] font-bold">0{i + 1}.</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Tooling Arsenal */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs text-gray-300 uppercase tracking-wider flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>Standard Team Tooling &amp; Frameworks</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedSkill.keyTools.map((tool) => (
                    <div
                      key={tool}
                      className="p-3 rounded-lg bg-[#050505] border border-white/5 flex items-center gap-2 text-xs font-mono text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-[#0d1117]/80 border border-white/5 mt-4">
                  <div className="font-mono text-xs text-gray-400 leading-relaxed">
                    <span className="text-[#00ff66] font-bold">&gt; sudo-unknown training tip:</span> We maintain internal cheat sheets and automated harness scripts for this category in our team repository.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
