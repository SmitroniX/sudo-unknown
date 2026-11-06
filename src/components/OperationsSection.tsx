import React, { useState } from 'react';
import {
  ShieldAlert,
  SearchCode,
  Binary,
  Terminal,
  Cpu,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Flame,
  ArrowRight
} from 'lucide-react';
import { COMPANY_SOLUTIONS, SITE_CONFIG } from '../data/teamData';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  SearchCode,
  Binary,
  Terminal,
  Cpu
};

export const OperationsSection: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string>(COMPANY_SOLUTIONS[0].id);

  const activeSolution = COMPANY_SOLUTIONS.find((s) => s.id === selectedSolution) || COMPANY_SOLUTIONS[0];

  const methodologySteps = [
    {
      step: "01",
      title: "Recon & Surface Mapping",
      desc: "Passive OSINT, ASN enumeration, active DNS probing, and technology fingerprinting to define the perimeter."
    },
    {
      step: "02",
      title: "Threat Modeling & Vectors",
      desc: "Identifying trust boundaries, authentication flows, API endpoints, and potential adversary attack paths."
    },
    {
      step: "03",
      title: "Weaponization & Execution",
      desc: "Custom exploit development, memory manipulation, Kerberos ticket forgery, and controlled objective compromise."
    },
    {
      step: "04",
      title: "Remediation & Defense Debrief",
      desc: "Delivering executive CVSS scorecards, reproducible technical steps, defensive SIEM/EDR detections, and retesting."
    }
  ];

  return (
    <section id="services" className="py-20 relative z-10 border-t border-white/[0.06] bg-[#070a0e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
            <span>// ADVERSARY SIMULATION &amp; CYBERSECURITY SERVICES</span>
          </div>
          <h2 className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Offensive Operations &amp; <span className="text-[#00ff88]">Capabilities</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Beyond tournament CTFs, sudo Unknown provides full-spectrum offensive security assessments, enterprise red teaming, low-level vulnerability research, and custom cyber warfare range architecture for organizations worldwide.
          </p>
        </div>

        {/* 2-Column Interactive Solutions Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Solution Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {COMPANY_SOLUTIONS.map((sol) => {
              const Icon = iconMap[sol.iconName] || ShieldAlert;
              const isSelected = selectedSolution === sol.id;
              return (
                <div
                  key={sol.id}
                  onClick={() => setSelectedSolution(sol.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0d131a] border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.15)] -translate-x-1'
                      : 'bg-[#090d12] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-[#00ff88]/20 border-[#00ff88] text-[#00ff88]'
                          : 'bg-white/5 border-white/10 text-gray-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] font-semibold text-[#00ff88] tracking-wider uppercase">
                          {sol.badge}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                        )}
                      </div>
                      <h3 className="font-mono text-sm sm:text-base font-bold text-white mt-1">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-sans mt-1 line-clamp-2 leading-relaxed">
                        {sol.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Solution Deep-Dive Inspector */}
          <div className="lg:col-span-7 rounded-2xl bg-[#090d12] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              {/* Badge & Title */}
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/30 font-mono text-xs font-bold text-[#00ff88] mb-2 uppercase">
                  {activeSolution.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white">
                  {activeSolution.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 font-sans mt-2 leading-relaxed">
                  {activeSolution.shortDesc}
                </p>
              </div>

              {/* Core Assessment Vectors */}
              <div className="p-4 rounded-xl bg-[#0d1218] border border-white/[0.08]">
                <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-cyan-400" />
                  Key Technical Capabilities &amp; Vectors
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSolution.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard Deliverables */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                  Standard Engagement Deliverables:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeSolution.deliverables.map((deliv, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-200"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono text-xs">
                <span className="text-gray-400">
                  Ready to scope an assessment?
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Assessment Inquiry: ${activeSolution.title}`}
                  className="px-4 py-2.5 rounded-xl bg-[#00ff88] hover:bg-[#22ff99] text-black font-bold text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Request Scoping &amp; RoE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Standard Engagement Lifecycle */}
        <div className="mt-20 pt-10 border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-8">
            <span className="font-mono text-xs text-[#00ff88] uppercase tracking-wider block">
              // METHODOLOGY
            </span>
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white">
              End-to-End Adversary Simulation Lifecycle
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodologySteps.map((m) => (
              <div
                key={m.step}
                className="p-5 rounded-2xl bg-[#090d12] border border-white/[0.08] hover:border-[#00ff88]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-2xl font-black text-[#00ff88] mb-2">
                    {m.step}
                  </div>
                  <h4 className="font-mono text-sm font-bold text-white mb-1.5">
                    {m.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
