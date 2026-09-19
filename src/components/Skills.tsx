import React, { useState } from 'react';
import { Globe, Cpu, KeyRound, SearchCode, Binary, Crosshair, TerminalSquare, ChevronRight, Terminal, ShieldCheck, Wrench } from 'lucide-react';
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
    <section id="skills" className="py-24 relative z-10 border-t border-white/[0.06] bg-[#07090b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// OFFENSIVE DOMAINS</span>
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Target Categories
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
            Our squad organizes training around the 7 core disciplines of modern CTF competitions.
            Every founding recruit selects a primary specialization and secondary cross-training track.
          </p>
        </div>

        {/* 7 Interactive Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((skill: SkillCategory) => {
            const Icon = iconMap[skill.iconName] || TerminalSquare;
            const isSelected = selectedSkill?.id === skill.id;

            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                className={`group relative p-6 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#0c1015] border-[#00ff88] shadow-[0_0_25px_rgba(0,255,136,0.15)] -translate-y-1'
                    : 'bg-[#090c0f] border-white/[0.08] hover:border-[#00ff88]/40 hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded border border-[#00ff88]/25">
                      {skill.shortCode}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400 bg-[#0e1318] px-2 py-0.5 rounded border border-white/[0.06]">
                      {skill.difficultyFocus}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0e1318] border border-white/[0.06] flex items-center justify-center text-[#00ff88] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-mono text-base font-bold text-white group-hover:text-[#00ff88] transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3 mb-4">
                    {skill.description}
                  </p>
                </div>

                <div>
                  {/* Tool Arsenal */}
                  <div className="pt-3 border-t border-white/[0.05] space-y-1.5">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">PRIMARY TOOLS</span>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.keyTools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#050505] text-gray-300 border border-white/[0.05]"
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

                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-[#00ff88]">
                    <span>{isSelected ? 'COLLAPSE' : 'EXPLORE SYLLABUS'}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-[#00ff88]' : ''}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Category Details Drawer */}
        {selectedSkill && (
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#090c0f] border border-[#00ff88]/40 shadow-[0_0_30px_rgba(0,255,136,0.1)] animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0e1318] border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88]">
                  {React.createElement(iconMap[selectedSkill.iconName] || TerminalSquare, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-[#00ff88] font-bold">{selectedSkill.shortCode}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{selectedSkill.difficultyFocus} Track</span>
                  </div>
                  <h3 className="font-mono text-2xl font-bold text-white">{selectedSkill.name}</h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="px-3 py-1.5 rounded-lg bg-[#0e1318] text-gray-400 hover:text-white border border-white/10 text-xs font-mono w-fit"
              >
                Close Drawer [ESC]
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 font-mono text-xs">
              <div className="space-y-3">
                <h4 className="text-gray-300 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00ff88]" />
                  <span>Curriculum Challenge Topics</span>
                </h4>
                <div className="space-y-2">
                  {selectedSkill.topics.map((t, i) => (
                    <div
                      key={t}
                      className="p-3 rounded-lg bg-[#050505] border border-white/[0.05] flex items-center gap-3 text-gray-300"
                    >
                      <span className="text-[#00ff88] font-bold">0{i + 1}.</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-gray-300 uppercase tracking-wider flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-[#00ff88]" />
                  <span>Tooling &amp; Frameworks</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedSkill.keyTools.map((tool) => (
                    <div
                      key={tool}
                      className="p-3 rounded-lg bg-[#050505] border border-white/[0.05] flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-[#0e1318] border border-white/[0.05] mt-4 text-gray-400 font-sans leading-relaxed">
                  <strong className="text-white font-mono block mb-1">Looking for a lead in this track:</strong>
                  If you have hands-on experience or genuine interest in {selectedSkill.name}, apply for this founding role in our team roster below.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
