import React, { useState } from 'react';
import { Users, Github, Linkedin, ExternalLink, Search, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember, SITE_CONFIG } from '../data/teamData';

export const Team: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpecialty, setActiveSpecialty] = useState<string>('ALL');

  const specialtiesList = ['ALL', 'Crypto', 'Pwn', 'Web', 'Forensics', 'Reverse', 'OSINT'];

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.htbUsername.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSpecialty =
      activeSpecialty === 'ALL' ||
      member.specialties.some((s) => s.toLowerCase() === activeSpecialty.toLowerCase());

    return matchesSearch && matchesSpecialty;
  });

  return (
    <section id="team" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>// OPERATORS ROSTER</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Core Team Members
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans max-w-2xl">
              Meet the security researchers and offensive practitioners behind sudo Unknown. Easily configurable
              via our central data structure.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search member or skill..."
                className="pl-10 pr-4 py-2 rounded-lg bg-[#0a0d0f] border border-white/10 text-xs font-mono text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#00ff66]/50 w-full sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* Specialty Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
          <span className="text-gray-500 text-[11px] mr-1">FILTER DISCIPLINE:</span>
          {specialtiesList.map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveSpecialty(spec)}
              className={`px-3 py-1 rounded-md transition-all ${
                activeSpecialty === spec
                  ? 'bg-[#00ff66] text-black font-bold shadow-[0_0_12px_rgba(0,255,102,0.3)]'
                  : 'bg-[#0a0d0f] text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member: TeamMember) => (
            <div
              key={member.id}
              className="group relative rounded-xl bg-[#0a0d0f] border border-white/10 hover:border-[#00ff66]/50 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,102,0.12)]"
            >
              {/* Subtle green ambient light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff66]/5 rounded-full blur-3xl group-hover:bg-[#00ff66]/15 transition-all" />

              <div>
                {/* Header: Avatar, Name, Role */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-xl object-cover border-2 border-white/10 group-hover:border-[#00ff66]/50 transition-colors shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0d1117] border border-[#00ff66] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#00ff66]" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono text-lg font-bold text-white group-hover:text-[#00ff66] transition-colors truncate">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-gray-400 truncate mt-0.5">
                      {member.role}
                    </p>
                    {/* HTB Username Pill */}
                    <div className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded bg-[#0d1117] border border-[#00ff66]/30 text-[11px] font-mono text-[#00ff66]">
                      <span className="text-gray-500">HTB:</span>
                      <span className="font-semibold">{member.htbUsername}</span>
                    </div>
                  </div>
                </div>

                {/* Member Bio */}
                <p className="font-sans text-xs text-gray-400 leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Specialties / Skills Tags */}
                <div className="mb-5 space-y-1.5">
                  <span className="text-[10px] font-mono text-gray-500 block uppercase">
                    SKILL VECTORS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0d1117] text-gray-300 border border-white/5 group-hover:border-[#00ff66]/20 transition-colors"
                      >
                        #{spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social / External Links Bar */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={SITE_CONFIG.htbTeamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-[#00ff66] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>HTB Profile</span>
                </a>

                <div className="flex items-center gap-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-[#0d1117] text-gray-400 hover:text-white border border-white/5 hover:border-white/20 transition-all"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-[#0d1117] text-gray-400 hover:text-white border border-white/5 hover:border-white/20 transition-all"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Bottom Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#00ff66] transition-colors" />
            </div>
          ))}

          {/* Join Roster Callout Card */}
          <div className="rounded-xl bg-[#0a0d0f]/60 border-2 border-dashed border-white/10 hover:border-[#00ff66]/40 p-6 flex flex-col justify-between transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0d1117] border border-white/10 flex items-center justify-center text-[#00ff66] mb-4 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-mono text-lg font-bold text-white group-hover:text-[#00ff66] transition-colors">
                [ Slot Reserved ]
              </h3>
              <p className="font-mono text-xs text-[#00ff66] mt-0.5">
                Your Handle // Future Operator
              </p>
              <p className="font-sans text-xs text-gray-400 mt-3 leading-relaxed">
                We are actively recruiting passionate CTF players and ethical hackers across Web, Pwn, Crypto, Forensics, and Reverse Engineering.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#join"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#00ff66]/15 hover:bg-[#00ff66]/25 border border-[#00ff66]/40 text-[#00ff66] font-mono text-xs font-bold transition-all"
              >
                <span>APPLY TO JOIN ROSTER</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
