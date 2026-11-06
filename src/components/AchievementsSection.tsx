import React from 'react';
import { Trophy, Calendar, ExternalLink, Flag, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS, SITE_CONFIG } from '../data/teamData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative z-10 border-t border-white/[0.06] bg-[#05070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>// COMPETITIVE MILESTONES &amp; TOURNAMENTS</span>
            </div>
            <h2 className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              CTF &amp; Research <span className="text-[#00ff88]">Achievements</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              Track our tournament presence, Hack The Box squad rankings, university challenges, and open-source milestones as sudo Unknown expands its competitive footprint.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.htbTeamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-semibold transition-all flex items-center gap-2"
            >
              <span>HTB Squad #331386</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="p-6 rounded-2xl bg-[#090d12] border border-white/[0.08] hover:border-[#00ff88]/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] font-bold text-[#00ff88] bg-[#00ff88]/10 px-2.5 py-0.5 rounded border border-[#00ff88]/30">
                    {ach.platform}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    <span>{ach.date}</span>
                  </div>
                </div>

                <h3 className="font-mono text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors">
                  {ach.title}
                </h3>
                <span className="font-mono text-xs text-yellow-400 block mt-1">
                  Result: {ach.teamResult}
                </span>

                <p className="mt-3 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {ach.description}
                </p>

                <ul className="mt-4 pt-3 border-t border-white/[0.04] space-y-1.5 font-sans text-xs text-gray-300">
                  {ach.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88] mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
