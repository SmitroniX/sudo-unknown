import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Mail,
  Linkedin,
  Github,
  Terminal,
  Sparkles,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG } from '../data/teamData';

interface JoinContactSectionProps {
  selectedRole?: string;
  modalOpen?: boolean;
  onModalChange?: (open: boolean) => void;
}

export const JoinContactSection: React.FC<JoinContactSectionProps> = ({
  selectedRole = 'Web Exploitation Lead',
  modalOpen = false,
  onModalChange
}) => {
  const [currentRole, setCurrentRole] = useState(selectedRole);
  const [handle, setHandle] = useState('');
  const [platformProfile, setPlatformProfile] = useState('');
  const [experience, setExperience] = useState('Intermediate Solver (Rank: Pro Hacker / Specialist)');
  const [discordTag, setDiscordTag] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  useEffect(() => {
    if (selectedRole) {
      setCurrentRole(selectedRole);
    }
  }, [selectedRole]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00ff88', '#22ff77', '#ffffff']
    });
  };

  const copyToClipboard = (text: string, type: 'email' | 'discord') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2000);
    }
  };

  const channels = [
    {
      name: 'Hack The Box Squad',
      handle: 'Team #331386',
      desc: 'Official competitive roster and verified solved machine history.',
      url: SITE_CONFIG.htbTeamUrl,
      icon: Terminal,
      color: 'text-[#00ff88]'
    },
    {
      name: 'Discord War Room',
      handle: 'discord.gg/HgD6WGUr4G',
      desc: 'Active CTF channels, machine solves, and screen share sessions.',
      url: SITE_CONFIG.discordUrl,
      icon: MessageSquare,
      color: 'text-[#5865F2]',
      canCopy: true,
      copyVal: SITE_CONFIG.discordUrl
    },
    {
      name: 'GitHub Organization',
      handle: 'github.com/SmitroniX/sudo-unknown',
      desc: 'Open-source tools, challenge scripts, and exploit repositories.',
      url: SITE_CONFIG.githubUrl,
      icon: Github,
      color: 'text-white'
    },
    {
      name: 'Corporate LinkedIn',
      handle: 'company/sudo-unknown',
      desc: 'Security advisories, company milestones, and enterprise solutions.',
      url: SITE_CONFIG.linkedinUrl,
      icon: Linkedin,
      color: 'text-[#0077b5]'
    },
    {
      name: 'Direct Inquiries',
      handle: SITE_CONFIG.contactEmail,
      desc: 'Security assessments, red team scoping, and partnerships.',
      url: `mailto:${SITE_CONFIG.contactEmail}`,
      icon: Mail,
      color: 'text-yellow-400',
      canCopy: true,
      copyVal: SITE_CONFIG.contactEmail
    }
  ];

  return (
    <section id="join" className="py-20 relative z-10 border-t border-white/[0.06] bg-[#070a0e]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>// RECRUITMENT &amp; COMMUNICATIONS</span>
          </div>
          <h2 className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Join the <span className="text-[#00ff88]">Syndicate</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Apply to join our founding competitive CTF squad or reach out for enterprise security consulting, penetration testing, and private cyber range deployments.
          </p>
        </div>

        {/* 2-Column Layout: Form & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Operator Application Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#090d12] border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="font-mono text-lg font-bold text-white">
                  Operator Application Form
                </h3>
                <p className="text-xs text-gray-400 font-sans mt-0.5">
                  Direct submission to Asmit (SmitroniX) &amp; sudo Unknown operations.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] font-mono text-xs font-bold">
                ENCRYPTED TRANSIT
              </span>
            </div>

            {submitted ? (
              <div className="p-8 text-center rounded-xl bg-[#0d1410] border border-[#00ff88]/40 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#00ff88] mx-auto animate-bounce" />
                <h4 className="font-mono text-xl font-bold text-white">
                  Application Transmitted!
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 font-sans max-w-md mx-auto leading-relaxed">
                  Thank you for applying for <span className="text-[#00ff88] font-mono font-semibold">{currentRole}</span>. Our lead operator will review your profile and reach out via Discord or email.
                </p>
                <div className="pt-2">
                  <a
                    href={SITE_CONFIG.discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-mono text-xs font-bold transition-all shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enter Discord Lobby Directly</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                {/* Desired Role */}
                <div>
                  <label className="text-gray-300 block mb-1 font-semibold">
                    TARGET SQUAD ROLE:
                  </label>
                  <select
                    value={currentRole}
                    onChange={(e) => setCurrentRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1218] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-[#00ff88] transition-colors cursor-pointer"
                  >
                    <option value="Web Exploitation Lead">Web Exploitation Lead</option>
                    <option value="Binary Exploitation (PWN) Lead">Binary Exploitation (PWN) Lead</option>
                    <option value="Active Directory & Enterprise Lead">Active Directory &amp; Enterprise Lead</option>
                    <option value="Applied Cryptography Analyst">Applied Cryptography Analyst</option>
                    <option value="DFIR & Network Forensics Lead">DFIR &amp; Network Forensics Lead</option>
                    <option value="Reverse Engineering Analyst">Reverse Engineering Analyst</option>
                    <option value="General Operator / Practice Trainee">General Operator / Practice Trainee</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Handle */}
                  <div>
                    <label className="text-gray-300 block mb-1 font-semibold">
                      OPERATOR HANDLE / NAME:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 0xShadow or Alex"
                      value={handle}
                      onChange={(e) => setHandle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1218] border border-white/10 text-white placeholder-gray-500 font-mono text-xs focus:outline-none focus:border-[#00ff88] transition-colors"
                    />
                  </div>

                  {/* Discord Tag */}
                  <div>
                    <label className="text-gray-300 block mb-1 font-semibold">
                      DISCORD USERNAME:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. operator#0001 or handle"
                      value={discordTag}
                      onChange={(e) => setDiscordTag(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1218] border border-white/10 text-white placeholder-gray-500 font-mono text-xs focus:outline-none focus:border-[#00ff88] transition-colors"
                    />
                  </div>
                </div>

                {/* Profile Links */}
                <div>
                  <label className="text-gray-300 block mb-1 font-semibold">
                    HTB / THM / GITHUB / LINKEDIN URL:
                  </label>
                  <input
                    type="url"
                    placeholder="https://app.hackthebox.com/profile/... or github.com/..."
                    value={platformProfile}
                    onChange={(e) => setPlatformProfile(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1218] border border-white/10 text-white placeholder-gray-500 font-mono text-xs focus:outline-none focus:border-[#00ff88] transition-colors"
                  />
                </div>

                {/* Experience Level */}
                <div>
                  <label className="text-gray-300 block mb-1 font-semibold">
                    EXPERIENCE &amp; PROFICIENCY LEVEL:
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1218] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-[#00ff88] transition-colors cursor-pointer"
                  >
                    <option value="Pro Hacker / Advanced Solver (Multiple Hard/Insane clears)">Pro Hacker / Advanced Solver (Multiple Hard/Insane clears)</option>
                    <option value="Intermediate Solver (Rank: Hacker / Script Kiddie with regular solves)">Intermediate Solver (Regular Medium box solves)</option>
                    <option value="Enthusiastic Learner (Beginning CTF journey, passionate to grind)">Enthusiastic Learner (Beginning CTF journey, eager to learn)</option>
                    <option value="Industry Professional (Security Researcher / Pentester)">Industry Professional (Security Researcher / Pentester)</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-gray-300 block mb-1 font-semibold">
                    PRIMARY STRENGTHS &amp; TOOLS:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the challenges you enjoy, your favorite tools (Ghidra, pwntools, BloodHound, Burp), or competitions you've played in..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1218] border border-white/10 text-white placeholder-gray-500 font-mono text-xs focus:outline-none focus:border-[#00ff88] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#00ff88] hover:bg-[#22ff99] text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)] flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Application to sudo Unknown</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Communication Channels & Direct Verification */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#090d12] border border-white/10 space-y-4">
              <h3 className="font-mono text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00ff88]" />
                Official Communication Channels
              </h3>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Connect with our operators on public channels or verify team credentials on competitive platforms.
              </p>

              <div className="space-y-3 pt-2">
                {channels.map((chan) => {
                  const Icon = chan.icon;
                  return (
                    <div
                      key={chan.name}
                      className="p-3.5 rounded-xl bg-[#0d1218] border border-white/[0.06] hover:border-white/20 transition-all flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className={`w-4 h-4 ${chan.color}`} />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-mono text-xs font-bold text-white truncate">
                            {chan.name}
                          </h4>
                          <span className="font-mono text-[11px] text-gray-400 block truncate">
                            {chan.handle}
                          </span>
                          <p className="text-[10px] text-gray-500 font-sans mt-0.5">
                            {chan.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0 pt-1">
                        {chan.canCopy && (
                          <button
                            onClick={() => copyToClipboard(chan.copyVal!, chan.name.includes('Email') ? 'email' : 'discord')}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            title="Copy to clipboard"
                          >
                            {(chan.name.includes('Email') && copiedEmail) || (chan.name.includes('Discord') && copiedDiscord) ? (
                              <Check className="w-3.5 h-3.5 text-[#00ff88]" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}
                        <a
                          href={chan.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                          title="Open link"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Verification Disclaimer */}
            <div className="p-4 rounded-xl bg-[#080b0f] border border-white/[0.06] font-mono text-[11px] text-gray-400 space-y-1">
              <span className="text-gray-300 font-bold block">// ETHICAL DISCLOSURE &amp; COMPLIANCE</span>
              <p className="leading-relaxed">
                sudo Unknown operates strictly within authorized scopes, lab environments, and authorized penetration test engagements with signed Rules of Engagement (RoE).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
