import React, { useState } from 'react';
import { Trophy, Calendar, CheckCircle2, Award } from 'lucide-react';
import { ACHIEVEMENTS, Achievement } from '../data/teamData';

export const Achievements: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filterOptions = ['ALL', 'Global HTB CTF', 'University CTF', 'Jeopardy', 'Special Event'];

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    if (selectedFilter === 'ALL') return true;
    return item.eventType === selectedFilter;
  });

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>// TOURNAMENT RECORD</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
              CTF Achievements &amp; Timeline
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans max-w-2xl">
              Chronological milestones from competitive CTFs. Centralized placeholder records easily updated
              as tournaments conclude.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#00ff66] text-black font-bold shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                    : 'bg-[#0a0d0f] text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline / Achievements List */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {filteredAchievements.map((item: Achievement) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-[#00ff66] flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(0,255,102,0.4)]">
                <div className="w-2 h-2 rounded-full bg-[#00ff66]" />
              </div>

              {/* Achievement Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#0a0d0f] border border-white/10 hover:border-[#00ff66]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,102,0.12)]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs font-bold text-[#00ff66] bg-[#00ff66]/10 px-2.5 py-0.5 rounded border border-[#00ff66]/30">
                        {item.eventType}
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        <span>{item.date}</span>
                      </div>
                      {item.rankBadge && (
                        <span className="font-mono text-xs text-gray-300 bg-[#0d1117] px-2 py-0.5 rounded border border-white/10">
                          {item.rankBadge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-mono text-xl sm:text-2xl font-bold text-white group-hover:text-[#00ff66] transition-colors">
                      {item.ctfName}
                    </h3>
                  </div>

                  {/* Result Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00ff66]/10 border border-[#00ff66]/40 text-[#00ff66] font-mono text-sm font-bold w-fit">
                    <Award className="w-4 h-4" />
                    <span>{item.result}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed mt-4">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                    <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block">
                      ENGAGEMENT HIGHLIGHTS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.highlights.map((high, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs font-mono text-gray-400"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff66] flex-shrink-0" />
                          <span>{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
