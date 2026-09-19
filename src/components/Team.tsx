import React, { useState } from 'react';
import { Users, ExternalLink, Github, Linkedin, Sparkles, UserPlus, CheckCircle2, ArrowRight } from 'lucide-react';
import { ROSTER_SLOTS, RosterSlot, SITE_CONFIG } from '../data/teamData';

interface TeamProps {
  onApplySlot?: (roleName: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onApplySlot }) => {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Leadership', 'Web', 'Pwn', 'Crypto', 'Forensics', 'Reverse', 'OSINT'];

  const filteredSlots = ROSTER_SLOTS.filter((slot) => {
    if (filterCategory === 'ALL') return true;
    return slot.category.toLowerCase() === filterCategory.toLowerCase();
  });

  return (
    <section id="team" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>// FOUNDING SQUAD ASSEMBLY</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Founding Roster
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans max-w-2xl leading-relaxed">
              sudo Unknown is a newly formed team building its competitive lineup for the 2026 CTF season.
              We are actively looking for operators who want to learn, practice, and compete together on Hack The Box.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filterCategory === cat
                    ? 'bg-[#00ff88] text-black font-bold'
                    : 'bg-[#090c0f] text-gray-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Roster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSlots.map((slot: RosterSlot) => {
            const isFilled = slot.status === 'FILLED';

            return (
              <div
                key={slot.id}
                className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 border ${
                  isFilled
                    ? 'bg-[#090c0f] border-white/[0.12] hover:border-[#00ff88]/50 shadow-[0_0_20px_rgba(0,255,136,0.05)]'
                    : 'bg-[#07090b]/80 border-dashed border-white/[0.15] hover:border-[#00ff88]/40'
                }`}
              >
                <div>
                  {/* Status Banner */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${
                        isFilled
                          ? 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30'
                          : 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30'
                      }`}
                    >
                      {isFilled ? '● ACTIVE FOUNDER' : '○ SLOT OPEN FOR APPLICATION'}
                    </span>
                    <span className="font-mono text-xs text-gray-400">
                      #{slot.category}
                    </span>
                  </div>

                  {/* Header / Avatar */}
                  <div className="flex items-start gap-4 mb-4">
                    {isFilled ? (
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-[#00ff88]/40 bg-[#0e1318] flex-shrink-0">
                        <img
                          src="/logo.png"
                          alt="Captain Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl border border-dashed border-white/20 bg-[#0e1318] flex items-center justify-center text-gray-500 flex-shrink-0">
                        <UserPlus className="w-6 h-6 text-[#00ff88]" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h3 className="font-mono text-base font-bold text-white truncate">
                        {isFilled ? slot.holderName : '[ OPEN POSITION ]'}
                      </h3>
                      <p className="font-mono text-xs text-[#00ff88] mt-0.5 truncate">
                        {slot.role}
                      </p>
                      {isFilled && slot.htbUsername && (
                        <div className="text-[11px] font-mono text-gray-400 mt-1">
                          HTB: <span className="text-gray-200">{slot.htbUsername}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Focus Description */}
                  <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                    {slot.focusDescription}
                  </p>

                  {/* Key Skills Needed */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                      CORE VECTORS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {slot.requiredSkills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#050505] text-gray-300 border border-white/[0.06]"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-4 border-t border-white/[0.05]">
                  {isFilled ? (
                    <div className="flex items-center justify-between">
                      <a
                        href={SITE_CONFIG.htbTeamUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-[#00ff88] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#00ff88]" />
                        <span>HTB Team Overview</span>
                      </a>
                      <div className="flex items-center gap-2">
                        {slot.github && (
                          <a
                            href={slot.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded bg-[#0e1318] text-gray-400 hover:text-white border border-white/5"
                            aria-label="GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {slot.linkedin && (
                          <a
                            href={slot.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded bg-[#0e1318] text-gray-400 hover:text-white border border-white/5"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <a
                      href="#join"
                      onClick={() => onApplySlot && onApplySlot(slot.role)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#00ff88]/10 hover:bg-[#00ff88] text-[#00ff88] hover:text-black border border-[#00ff88]/30 font-mono text-xs font-bold transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Claim This Slot // Apply</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
