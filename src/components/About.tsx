import React, { useState } from 'react';
import { Terminal, ShieldCheck, Share2, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { FOUNDING_VALUES, SITE_CONFIG } from '../data/teamData';

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  ShieldCheck,
  Share2,
  Sparkles,
};

export const About: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState<'charter' | 'pillars' | 'stack'>('charter');

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
            <span>// TEAM PROFILE</span>
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Who Are We?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-200 font-sans leading-relaxed border-l-2 border-[#00ff88] pl-4 bg-[#0a0d10]/60 py-3 rounded-r-lg">
            &ldquo;sudo Unknown is a cybersecurity Capture The Flag team focused on hands-on learning, problem solving, collaboration, and continuous improvement through Hack The Box and cybersecurity challenges.&rdquo;
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Founding Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FOUNDING_VALUES.map((val, idx) => {
              const Icon = iconMap[val.iconName] || Terminal;
              return (
                <div
                  key={val.title}
                  className="p-5 rounded-xl bg-[#090c0f] border border-white/[0.08] hover:border-[#00ff88]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0e1318] border border-white/[0.06] flex items-center justify-center text-[#00ff88] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-gray-500">0{idx + 1}</span>
                    </div>
                    <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#00ff88] transition-colors mb-2">
                      {val.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] font-mono text-gray-500">
                    <ChevronRight className="w-3 h-3 text-[#00ff88]" />
                    <span>FOUNDING ETHOS</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Code Charter Terminal */}
          <div className="lg:col-span-6 rounded-xl bg-[#090b0e] border border-white/[0.1] overflow-hidden shadow-2xl">
            {/* Window Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1217] border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88]/70" />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 font-mono text-xs">
                <button
                  onClick={() => setActiveDoc('charter')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeDoc === 'charter'
                      ? 'bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  charter.sh
                </button>
                <button
                  onClick={() => setActiveDoc('pillars')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeDoc === 'pillars'
                      ? 'bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  ethos.json
                </button>
                <button
                  onClick={() => setActiveDoc('stack')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeDoc === 'stack'
                      ? 'bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  regimen.yml
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs leading-relaxed bg-[#050505] overflow-x-auto min-h-[300px]">
              {activeDoc === 'charter' && (
                <div className="space-y-3">
                  <div className="text-gray-500">#!/usr/bin/env bash</div>
                  <div className="text-gray-500"># sudo Unknown Official Founding Charter</div>
                  <div>
                    <span className="text-purple-400">export</span>{' '}
                    <span className="text-blue-400">TEAM_HANDLE</span>=
                    <span className="text-[#00ff88]">&quot;sudo Unknown&quot;</span>
                  </div>
                  <div>
                    <span className="text-purple-400">export</span>{' '}
                    <span className="text-blue-400">HTB_TEAM_ID</span>=
                    <span className="text-yellow-400">331386</span>
                  </div>
                  <div>
                    <span className="text-purple-400">export</span>{' '}
                    <span className="text-blue-400">CORE_TAGLINE</span>=
                    <span className="text-[#00ff88]">&quot;Permission Granted. Identity Unknown.&quot;</span>
                  </div>
                  <div className="text-yellow-400 pt-2">
                    function launch_squad() &#123;
                  </div>
                  <div className="pl-4 space-y-1 text-gray-300">
                    <div>echo <span className="text-[#00ff88]">&quot;[1] Assemble hungry founding operators&quot;</span></div>
                    <div>echo <span className="text-[#00ff88]">&quot;[2] Compete in Hack The Box 2026 tournaments&quot;</span></div>
                    <div>echo <span className="text-[#00ff88]">&quot;[3] Publish reproducible exploit writeups&quot;</span></div>
                    <div>echo <span className="text-[#00ff88]">&quot;[4] No ego, no limits, just flags&quot;</span></div>
                  </div>
                  <div className="text-yellow-400">&#125;</div>
                  <div className="pt-2 text-[#00ff88]">
                    $&gt; launch_squad <span className="text-gray-500 text-[10px]"># STATUS: IN_PROGRESS</span>
                  </div>
                </div>
              )}

              {activeDoc === 'pillars' && (
                <div className="space-y-1 text-gray-300">
                  <div className="text-gray-500">&#123;</div>
                  <div className="pl-4"><span className="text-blue-400">&quot;team_status&quot;</span>: <span className="text-[#00ff88]">&quot;Brand New // Founding Cohort&quot;</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">&quot;motto_primary&quot;</span>: <span className="text-[#00ff88]">&quot;No identity. No limits. Just flags.&quot;</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">&quot;motto_secondary&quot;</span>: <span className="text-[#00ff88]">&quot;Exploit. Analyze. Capture. Repeat.&quot;</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">&quot;ethical_bounds&quot;</span>: <span className="text-blue-300">&quot;Strict compliance with competition scopes&quot;</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">&quot;beginner_friendly&quot;</span>: <span className="text-yellow-400">true</span></div>
                  <div className="text-gray-500">&#125;</div>
                </div>
              )}

              {activeDoc === 'stack' && (
                <div className="space-y-1 text-gray-300">
                  <div className="text-gray-500"># Weekly Team Practice Regimen</div>
                  <div><span className="text-purple-400">season</span>: <span className="text-yellow-400">2026</span></div>
                  <div><span className="text-blue-400">weekly_routines</span>:</div>
                  <div className="pl-4"><span className="text-yellow-400">saturday_lab_clears</span>:</div>
                  <div className="pl-8 text-gray-400">- 2x Active HTB Machines (Linux + Windows)</div>
                  <div className="pl-4"><span className="text-yellow-400">midweek_challenge_drill</span>:</div>
                  <div className="pl-8 text-gray-400">- Alternating Pwn / Crypto / Reverse modules</div>
                  <div className="pl-4"><span className="text-yellow-400">tournament_weekends</span>:</div>
                  <div className="pl-8 text-gray-400">- Live Discord voice war rooms &amp; screen shares</div>
                </div>
              )}
            </div>

            {/* Terminal Status Footer */}
            <div className="px-4 py-2.5 bg-[#0e1217] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-[#00ff88]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>OFFICIAL SPECIFICATION // 2026</span>
              </span>
              <span>BRANCH: main</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
