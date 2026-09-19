import React, { useState } from 'react';
import { Sparkles, Share2, Radio, Terminal, ExternalLink, CheckCircle2, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';

interface JoinTeamProps {
  initialRole?: string;
}

export const JoinTeam: React.FC<JoinTeamProps> = ({ initialRole = 'General Operator' }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [applicant, setApplicant] = useState({
    handle: '',
    htbProfile: '',
    experience: 'Intermediate Solver',
    discordTag: '',
    notes: ''
  });

  const benefits = [
    {
      title: "Beginners Welcome",
      desc: "Passion and consistency matter most. We guide new members from introductory challenges to advanced box clears.",
      icon: Sparkles
    },
    {
      title: "Knowledge Sharing",
      desc: "Access our shared repository of exploit scripts, cheat sheets, methodology notes, and lab writeups.",
      icon: Share2
    },
    {
      title: "Team Collaboration",
      desc: "Collaborative Discord war rooms during weekend CTFs and shared screen sessions during complex machines.",
      icon: Radio
    },
    {
      title: "CTF Participation",
      desc: "Fielded roster spots in official Hack The Box leagues, university tournaments, and open global events.",
      icon: Terminal
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="join" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#090c0f] border border-white/[0.12] p-8 sm:p-14 overflow-hidden shadow-2xl">
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00ff88]/[0.05] rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1318] border border-white/[0.08] text-xs font-mono text-[#00ff88]">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span>FOUNDING COHORT APPLICATION</span>
            </div>

            {/* Requested Heading */}
            <h2 className="font-mono text-4xl sm:text-6xl font-black text-white tracking-tight">
              JOIN THE <span className="text-[#00ff88]">UNKNOWN</span>
            </h2>

            {/* Requested Text */}
            <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              &ldquo;We&apos;re looking for curious minds who want to learn cybersecurity, solve challenges, and compete together.&rdquo;
            </p>

            {/* 4 Pillars Requested */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-left">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="p-5 rounded-xl bg-[#050505] border border-white/[0.06] hover:border-[#00ff88]/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0e1318] border border-white/[0.06] flex items-center justify-center text-[#00ff88] mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#00ff88] transition-colors mb-1.5">
                      {b.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#00ff88] text-black font-mono font-bold text-sm hover:bg-[#22ff99] transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(0,255,136,0.35)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Join sudo Unknown</span>
              </button>

              <a
                href={SITE_CONFIG.htbTeamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0e1318] text-white font-mono font-semibold text-sm border border-white/[0.12] hover:border-[#00ff88] hover:text-[#00ff88] transition-all transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 text-[#00ff88]" />
                <span>Join via Hack The Box Portal</span>
              </a>
            </div>

            <p className="font-mono text-xs text-gray-500 pt-2">
              Official Team Link: <code className="text-gray-300">ctf.hackthebox.com/team/overview/331386</code>
            </p>
          </div>
        </div>

        {/* Application Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-lg bg-[#090c0f] border border-[#00ff88]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
                  <Terminal className="w-4 h-4 text-[#00ff88]" />
                  <span>FOUNDING ROSTER APPLICATION</span>
                </div>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setFormSubmitted(false);
                  }}
                  className="p-1.5 rounded-lg bg-[#050505] text-gray-400 hover:text-white border border-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#00ff88]/20 border border-[#00ff88] flex items-center justify-center text-[#00ff88] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-mono text-xl font-bold text-white">Application Recorded</h3>
                  <p className="font-sans text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                    Thank you for applying to the founding roster of <strong>sudo Unknown</strong>. We will review your application and reach out via Discord or HTB.
                  </p>
                  <div className="pt-4">
                    <a
                      href={SITE_CONFIG.htbTeamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00ff88] hover:underline"
                    >
                      <span>Also request to join directly on Hack The Box (#331386)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-4 font-mono text-xs">
                  <div>
                    <label className="block text-gray-400 mb-1">Handle / Name *</label>
                    <input
                      type="text"
                      required
                      value={applicant.handle}
                      onChange={(e) => setApplicant({ ...applicant, handle: e.target.value })}
                      placeholder="e.g. 0xPhantom"
                      className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">Hack The Box Username / Profile URL</label>
                    <input
                      type="text"
                      value={applicant.htbProfile}
                      onChange={(e) => setApplicant({ ...applicant, htbProfile: e.target.value })}
                      placeholder="e.g. https://app.hackthebox.com/users/..."
                      className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 mb-1">Target Discipline</label>
                      <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-white focus:outline-none focus:border-[#00ff88]"
                      >
                        <option value="Web Security">Web Security</option>
                        <option value="Binary Exploitation (PWN)">Binary Exploitation (PWN)</option>
                        <option value="Cryptography">Cryptography</option>
                        <option value="Digital Forensics">Digital Forensics</option>
                        <option value="Reverse Engineering">Reverse Engineering</option>
                        <option value="OSINT">OSINT</option>
                        <option value="General Operator">General Operator</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-1">Discord Tag</label>
                      <input
                        type="text"
                        value={applicant.discordTag}
                        onChange={(e) => setApplicant({ ...applicant, discordTag: e.target.value })}
                        placeholder="e.g. handle#1337"
                        className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88]"
                      >
                      </input>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">What challenges or machines are you currently working on?</label>
                    <textarea
                      rows={3}
                      value={applicant.notes}
                      onChange={(e) => setApplicant({ ...applicant, notes: e.target.value })}
                      placeholder="Tell us what you love to solve..."
                      className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-[#00ff88] text-black font-bold font-mono hover:bg-[#22ff99] transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                    >
                      Transmit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
