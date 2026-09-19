import React, { useState } from 'react';
import { Trophy, Calendar, CheckCircle2, Award, Shield } from 'lucide-react';
import { ACHIEVEMENTS, Achievement } from '../data/teamData';

export const Achievements: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filterOptions = ['ALL', 'Milestone', 'University CTF', 'Global HTB CTF', 'Lab Environment'];

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
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>// TOURNAMENT RECORD &amp; TIMELINE</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
              CTF Achievements &amp; Milestones
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans max-w-2xl leading-relaxed">
              Chronological records and tournament milestones for sudo Unknown. Easily editable from our central data configuration.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedFilter === filter
                    ? 'bg-[#00ff88] text-black font-bold shadow-[0_0_15px_rgba(0,255,136,0.25)]'
                    : 'bg-[#090c0f] text-gray-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline / Achievements List */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {filteredAchievements.map((item: Achievement) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#00ff88] flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(0,255,136,0.3)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
              </div>

              {/* Achievement Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#090c0f] border border-white/[0.08] hover:border-[#00ff88]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,136,0.08)]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/[0.05]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      {/* Event type */}
                      <span className="font-mono text-xs font-bold text-[#00ff88] bg-[#00ff88]/10 px-2.5 py-0.5 rounded border border-[#00ff88]/30">
                        {item.eventType}
                      </span>
                      {/* Date */}
                      <div className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* CTF Name */}
                    <h3 className="font-mono text-xl sm:text-2xl font-bold text-white group-hover:text-[#00ff88] transition-colors">
                      {item.ctfName}
                    </h3>
                  </div>

                  {/* Team Result */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e1318] border border-white/10 text-[#00ff88] font-mono text-xs font-bold w-fit">
                    <Award className="w-4 h-4 text-[#00ff88]" />
                    <span>Result: {item.teamResult}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed mt-4">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/[0.05] space-y-2">
                    <span className="font-mono text-[11px] text-gray-500 uppercase tracking-wider block">
                      ENGAGEMENT HIGHLIGHTS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {item.highlights.map((high, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#050505] p-2.5 rounded-lg border border-white/[0.04]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88] flex-shrink-0" />
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
