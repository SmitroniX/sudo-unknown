import React, { useState } from 'react';
import { 
  ShieldAlert, 
  SearchCode, 
  Cpu, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight,
  Linkedin,
  Sparkles,
  ShieldCheck,
  FileCode2,
  Workflow
} from 'lucide-react';
import { COMPANY_SOLUTIONS, SITE_CONFIG } from '../data/teamData';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  SearchCode,
  Cpu,
  Terminal,
  FileCode2,
  Workflow
};

export const Solutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string>(COMPANY_SOLUTIONS[0].id);

  return (
    <section id="solutions" className="py-24 relative z-10 border-t border-white/[0.05] bg-[#050709]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span>// COMPANY CAPABILITIES &amp; CYBERSECURITY SERVICES</span>
            </div>
            <h2 className="font-mono text-3xl sm:text-5xl font-black text-white tracking-tight">
              Security Solutions &amp; Offensive Research
            </h2>
            <p className="mt-4 text-base text-gray-300 font-sans leading-relaxed">
              <strong>sudo Unknown</strong> is not just a competitive team — we are a modern cybersecurity company 
              and research collective. We bridge championship CTF problem-solving with rigorous real-world 
              penetration testing, security auditing, and adversarial tradecraft.
            </p>
          </div>

          {/* LinkedIn Company Connect Pill */}
          <div className="flex-shrink-0">
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0077b5]/15 border border-[#0077b5]/40 hover:bg-[#0077b5]/25 hover:border-[#0077b5] text-white font-mono text-xs transition-all shadow-[0_0_20px_rgba(0,119,181,0.2)] hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>
          </div>
        </div>

        {/* 4 Core Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {COMPANY_SOLUTIONS.map((sol, idx) => {
            const Icon = iconMap[sol.iconName] || ShieldCheck;
            const isSelected = selectedSolution === sol.id;

            return (
              <div
                key={sol.id}
                onClick={() => setSelectedSolution(sol.id)}
                className={`group relative rounded-2xl p-6 sm:p-8 bg-[#090c0f] border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isSelected 
                    ? 'border-[#00ff88]/60 shadow-[0_0_35px_rgba(0,255,136,0.15)] bg-gradient-to-b from-[#090d10] to-[#07090b]' 
                    : 'border-white/[0.08] hover:border-white/20 hover:bg-[#0c1015]'
                }`}
              >
                {/* Accent Top Border Glow */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: sol.accentColor }}
                />

                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${sol.accentColor}15`, 
                        borderColor: `${sol.accentColor}40`,
                        color: sol.accentColor
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-gray-400">
                        {sol.badge}
                      </span>
                      <h3 className="font-mono text-lg sm:text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors">
                        {sol.title}
                      </h3>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-gray-600 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Short Description */}
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {sol.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <div className="font-mono text-[11px] text-gray-400 uppercase tracking-wider">
                    Core Capabilities:
                  </div>
                  {sol.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 font-sans text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables Tags */}
                <div className="pt-4 border-t border-white/[0.05] flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-gray-500 uppercase mr-1">
                    Deliverables:
                  </span>
                  {sol.deliverables.map((deliv, dIdx) => (
                    <span 
                      key={dIdx}
                      className="px-2 py-0.5 rounded bg-[#0e141a] border border-white/[0.06] font-mono text-[10px] text-gray-400"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner for Inquiries */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#070b0e] via-[#091217] to-[#070b0e] border border-[#00ff88]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(0,255,136,0.1)]">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ENGAGE OUR SECURITY COLLECTIVE</span>
            </div>
            <h4 className="font-mono text-lg sm:text-2xl font-bold text-white">
              Need a Penetration Test, Vulnerability Audit, or Custom CTF?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-xl">
              From enterprise infrastructure hardening to hosting competitive cyber tournaments, 
              sudo Unknown delivers elite technical execution with zero noise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}?subject=Security%20Assessment%20Inquiry%20-%20sudo%20Unknown`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00ff88] text-black font-mono font-bold text-xs hover:bg-[#22ff99] transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
            >
              <span>INQUIRE VIA EMAIL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0e1318] border border-white/10 hover:border-[#0077b5] text-white font-mono text-xs hover:text-[#00ff88] transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
              <span>Company LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
