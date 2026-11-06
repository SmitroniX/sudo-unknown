import React from 'react';
import {
  Users,
  Shield,
  Terminal,
  ExternalLink,
  Github,
  Linkedin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { TEAM_MEMBERS, TeamMember, SITE_CONFIG } from '../data/teamData';

interface TeamSectionProps {
  onSelectRoleForApplication: (role: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectRoleForApplication }) => {
  return (
    <section id="team" className="py-20 relative z-10 border-t border-white/[0.06] bg-[#070a0e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>// SYNDICATE OPERATORS &amp; SPECIALIST ROSTER</span>
          </div>
          <h2 className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Team <span className="text-[#00ff88]">Syndicate</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            sudo Unknown operates as a lean, elite syndicate of offensive specialists. Founded and led by Asmit (SmitroniX), we are currently onboarding founding specialist operators across Web, Pwn, Active Directory, Crypto, Forensics, and Reverse Engineering.
          </p>
        </div>

        {/* Founding Captain Card Spotlight */}
        {TEAM_MEMBERS.filter((m) => m.isFoundingLead).map((leader) => (
          <div
            key={leader.id}
            className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d141d] via-[#090d12] to-[#07090d] border border-[#00ff88]/40 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00ff88]/[0.05] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.3)] shrink-0 bg-black">
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#00ff88] text-black font-mono text-xs font-extrabold tracking-wide">
                    FOUNDING CAPTAIN
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-gray-400">
                    STATUS: ACTIVE
                  </span>
                </div>

                <h3 className="font-mono text-2xl sm:text-3xl font-bold text-white">
                  {leader.name}
                </h3>
                <p className="text-sm font-mono text-[#00ff88]">
                  {leader.role} • {leader.specialty}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 font-sans max-w-2xl leading-relaxed">
                  {leader.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {leader.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-[#00ff88]/10 border border-[#00ff88]/20 font-mono text-[11px] text-[#00ff88]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Leader External Links */}
              <div className="flex md:flex-col items-center gap-2 pt-2 md:pt-0 shrink-0 font-mono text-xs">
                {leader.github && (
                  <a
                    href={leader.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 w-full justify-center"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/40 text-blue-300 hover:text-white transition-colors flex items-center gap-1.5 w-full justify-center"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {leader.htbUrl && (
                  <a
                    href={leader.htbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#00ff88]/15 hover:bg-[#00ff88]/25 border border-[#00ff88]/30 text-[#00ff88] transition-colors flex items-center gap-1.5 w-full justify-center"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>HTB Profile</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Open Specialist Slots Section Header */}
        <div className="flex items-center justify-between mb-6 pt-4">
          <div>
            <h3 className="font-mono text-xl sm:text-2xl font-bold text-white">
              Open Founding Specialist Slots
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans mt-0.5">
              We are actively scouting 6 core category leads to complete our tournament and research roster.
            </p>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-mono text-xs font-semibold">
            6 SLOTS RECRUITING
          </span>
        </div>

        {/* 6 Open Slots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.filter((m) => !m.isFoundingLead).map((slot) => (
            <div
              key={slot.id}
              className="p-6 rounded-2xl bg-[#090d12] border border-white/[0.08] hover:border-[#00ff88]/40 transition-all duration-200 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-mono text-[10px] font-bold tracking-wider">
                    RECRUITING NOW
                  </span>
                  <span className="font-mono text-[11px] text-gray-500">
                    FOUNDING TIER
                  </span>
                </div>

                <h4 className="font-mono text-base font-bold text-white group-hover:text-[#00ff88] transition-colors">
                  {slot.role}
                </h4>
                <p className="font-mono text-xs text-gray-400 mt-0.5">
                  Focus: <span className="text-gray-300">{slot.specialty}</span>
                </p>

                <p className="mt-3 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {slot.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/[0.04]">
                  {slot.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 font-mono text-[11px] text-gray-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apply Action Button */}
              <div className="mt-5 pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => onSelectRoleForApplication(slot.role)}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#00ff88] hover:text-black border border-white/10 hover:border-[#00ff88] text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-[0_0_12px_rgba(0,255,136,0.2)]"
                >
                  <span>Apply for this Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
