import React, { useState } from 'react';
import { Sparkles, Share2, Radio, Terminal, ExternalLink, CheckCircle2, X } from 'lucide-react';
import { RECRUITMENT_BENEFITS, SITE_CONFIG } from '../data/teamData';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Share2,
  Radio,
  Terminal,
};

export const JoinTeam: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applicant, setApplicant] = useState({
    handle: '',
    htbProfile: '',
    primaryDomain: 'Web',
    experience: 'Beginner / Self-learner',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // In production, sends to team webhook or email
    }, 1000);
  };

  return (
    <section id="join" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruitment Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0a0f12] via-[#070a0c] to-[#040506] border border-[#00ff66]/40 p-8 sm:p-14 overflow-hidden shadow-[0_0_60px_rgba(0,255,102,0.15)]">
          {/* Neon Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00ff66]/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            {/* Top Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1117] border border-[#00ff66]/40 text-xs font-mono text-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
              <span>RECRUITMENT PROTOCOL // 2026</span>
            </div>

            {/* Heading requested */}
            <h2 className="font-mono text-4xl sm:text-6xl font-black text-white tracking-tight">
              JOIN THE <span className="text-[#00ff66]">UNKNOWN</span>
            </h2>

            {/* Text requested */}
            <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              &ldquo;We&apos;re looking for curious minds who want to learn cybersecurity, solve challenges, and compete together.&rdquo;
            </p>

            {/* 4 Required Showcase Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-left">
              {RECRUITMENT_BENEFITS.map((item) => {
                const Icon = iconMap[item.iconName] || Sparkles;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-[#050505]/90 border border-white/10 hover:border-[#00ff66]/40 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0d1117] border border-white/5 flex items-center justify-center text-[#00ff66] mb-3 group-hover:scale-105 group-hover:border-[#00ff66]/40 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#00ff66] transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#00ff66] text-black font-mono font-black text-sm hover:bg-[#22ff77] transition-all transform hover:-translate-y-0.5 shadow-[0_0_30px_rgba(0,255,102,0.45)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Join sudo Unknown</span>
              </button>

              <a
                href={SITE_CONFIG.htbTeamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0d1117] text-white font-mono font-semibold text-sm border border-white/15 hover:border-[#00ff66] hover:text-[#00ff66] transition-all transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 text-[#00ff66]" />
                <span>Join via Hack The Box Portal</span>
              </a>
            </div>

            {/* Discreet note */}
            <p className="font-mono text-xs text-gray-500 pt-2">
              No prior CTF rank required // Discord community onboarding provided
            </p>
          </div>
        </div>

        {/* Application Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-lg bg-[#0a0d0f] border border-[#00ff66]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,255,102,0.2)]">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
                  <Terminal className="w-4 h-4 text-[#00ff66]" />
                  <span>APPLY TO JOIN // sudo Unknown</span>
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
                  <div className="w-12 h-12 rounded-full bg-[#00ff66]/20 border border-[#00ff66] flex items-center justify-center text-[#00ff66] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-mono text-xl font-bold text-white">Application Received</h3>
                  <p className="font-sans text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                    Access request granted. Check your Discord or email for onboarding credentials and the private team room link.
                  </p>
                  <div className="pt-4">
                    <a
                      href={SITE_CONFIG.htbTeamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00ff66] hover:underline"
                    >
                      <span>Meanwhile, request to join on Hack The Box Team #331386</span>
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
                      placeholder="e.g. 0xShadow"
                      className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff66]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">Hack The Box Username / Profile URL</label>
                    <input
                      type="text"
                      value={applicant.htbProfile}
                      onChange={(e) => setApplicant({ ...applicant, htbProfile: e.target.value })}
                      placeholder="e.g. https://app.hackthebox.com/users/..."
                      className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff66]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 mb-1">Primary Interest</label>
                      <select
                        value={applicant.primaryDomain}
                        onChange={(e) => setApplicant({ ...applicant, primaryDomain: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-white focus:outline-none focus:border-[#00ff66]"
                      >
                        <option value="Web">Web Security</option>
                        <option value="Pwn">Pwn / Binary Exp</option>
                        <option value="Crypto">Cryptography</option>
                        <option value="Forensics">Forensics / DFIR</option>
                        <option value="Reverse">Reverse Engineering</option>
                        <option value="OSINT">OSINT</option>
                        <option value="Misc">General / Misc</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-1">Experience Level</label>
                      <select
                        value={applicant.experience}
                        onChange={(e) => setApplicant({ ...applicant, experience: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-white focus:outline-none focus:border-[#00ff66]"
                      >
                        <option value="Beginner">Beginner / Exploring</option>
                        <option value="Intermediate">Intermediate Solver</option>
                        <option value="Advanced">Advanced CTF Player</option>
                        <option value="Pro">Industry Professional</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">What challenges excite you? (Optional)</label>
                    <textarea
                      rows={3}
                      value={applicant.notes}
                      onChange={(e) => setApplicant({ ...applicant, notes: e.target.value })}
                      placeholder="Tell us what you want to learn or solve..."
                      className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff66]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-[#00ff66] text-black font-bold font-mono hover:bg-[#22ff77] transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)]"
                    >
                      Transmit Access Request
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
