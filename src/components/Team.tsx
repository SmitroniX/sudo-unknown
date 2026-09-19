import React, { useState } from 'react';
import { Users, ExternalLink, Github, Linkedin, Sparkles, Search } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/teamData';

interface TeamProps {
  onSelectRoleForApplication?: (role: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onSelectRoleForApplication }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpecialty, setActiveSpecialty] = useState<string>('ALL');

  const specialtiesList = ['ALL', 'Leadership', 'Web', 'Pwn', 'Crypto', 'Forensics', 'Reverse', 'OSINT'];

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.htbUsername.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSpecialty =
      activeSpecialty === 'ALL' ||
      member.role.toLowerCase().includes(activeSpecialty.toLowerCase()) ||
      member.skills.some((s) => s.toLowerCase().includes(activeSpecialty.toLowerCase()));

    return matchesSearch && matchesSpecialty;
  });

  const handleApplyClick = (role: string) => {
    if (onSelectRoleForApplication) {
      onSelectRoleForApplication(role);
    }
    const joinEl = document.getElementById('join');
    if (joinEl) {
      joinEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>// OPERATORS &amp; FOUNDING ROSTER</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Team Members &amp; Roster
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans max-w-2xl leading-relaxed">
              sudo Unknown is an authentic new team actively forming its competitive lineup for Season 2026.
              Each card displays the role, skill vectors, and official links.
            </p>
          </div>

          {/* Search Input */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search member, role, or skill..."
                className="pl-10 pr-4 py-2 rounded-xl bg-[#090c0f] border border-white/[0.08] text-xs font-mono text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] w-full sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-1.5 mb-10 font-mono text-xs">
          <span className="text-gray-500 text-[11px] mr-1">DISCIPLINE:</span>
          {specialtiesList.map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveSpecialty(spec)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeSpecialty === spec
                  ? 'bg-[#00ff88] text-black font-bold shadow-[0_0_12px_rgba(0,255,136,0.25)]'
                  : 'bg-[#090c0f] text-gray-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member: TeamMember) => {
            const isFilled = member.status === 'FILLED';

            return (
              <div
                key={member.id}
                className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 border ${
                  isFilled
                    ? 'bg-[#090c0f] border-white/[0.12] hover:border-[#00ff88]/50 shadow-[0_0_20px_rgba(0,255,136,0.05)]'
                    : 'bg-[#07090b]/90 border-white/[0.08] hover:border-[#00ff88]/40'
                }`}
              >
                <div>
                  {/* Top Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${
                        isFilled
                          ? 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30'
                          : 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30'
                      }`}
                    >
                      {isFilled ? '● ACTIVE FOUNDING LEAD' : '○ SLOT OPEN FOR APPLICANT'}
                    </span>
                    <span className="font-mono text-xs text-gray-500">
                      ID: {member.id.replace('member-', '').replace('slot-', '')}
                    </span>
                  </div>

                  {/* Header: Avatar, Name, Role */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/[0.1] bg-[#0e1318] flex-shrink-0 group-hover:border-[#00ff88]/40 transition-colors">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {isFilled && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#090c0f] border border-[#00ff88] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Name */}
                      <h3 className="font-mono text-base font-bold text-white truncate group-hover:text-[#00ff88] transition-colors">
                        {member.name}
                      </h3>
                      {/* Role */}
                      <p className="font-mono text-xs text-[#00ff88] mt-0.5 truncate">
                        {member.role}
                      </p>
                      {/* HTB Username */}
                      <div className="inline-flex items-center gap-1.5 mt-1.5 px-2 py-0.5 rounded bg-[#0e1318] border border-white/[0.06] text-[11px] font-mono text-gray-300">
                        <span className="text-gray-500">HTB:</span>
                        <span className="font-semibold text-[#00ff88]">{member.htbUsername}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Skills array */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                      CORE SKILLS &amp; VECTORS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#050505] text-gray-300 border border-white/[0.05]"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action / External Links */}
                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* HTB Link */}
                    <a
                      href={member.htbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-[#00ff88] transition-colors"
                      title={`View ${member.name} on Hack The Box`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#00ff88]" />
                      <span>HTB</span>
                    </a>

                    {/* GitHub */}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#0e1318] text-gray-400 hover:text-white border border-white/[0.06] hover:border-white/20 transition-all"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {/* LinkedIn */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#0e1318] text-gray-400 hover:text-white border border-white/[0.06] hover:border-white/20 transition-all"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {!isFilled ? (
                    <button
                      onClick={() => handleApplyClick(member.role)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00ff88]/15 hover:bg-[#00ff88] text-[#00ff88] hover:text-black font-mono text-xs font-bold transition-all border border-[#00ff88]/30"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Apply for Slot</span>
                    </button>
                  ) : (
                    <span className="font-mono text-[10px] text-gray-500">
                      FOUNDER
                    </span>
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
