import React from 'react';
import { ShieldCheck, Cpu, Users, Trophy } from 'lucide-react';
import { STATISTICS, StatisticItem, SITE_CONFIG } from '../data/teamData';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Cpu,
  Users,
  Trophy,
};

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-16 relative z-10 border-y border-white/[0.06] bg-[#07090b]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-1">
              <span>// OPERATIONAL SPECIFICATIONS</span>
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Squad Verification &amp; Profile
            </h2>
          </div>

          <a
            href={SITE_CONFIG.htbTeamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00ff88] bg-[#0d1117] px-3.5 py-1.5 rounded-lg border border-white/[0.08] transition-colors w-fit"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ff88]" />
            <span>Hack The Box Team #331386</span>
          </a>
        </div>

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATISTICS.map((item: StatisticItem, idx: number) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-[#090c0f] border border-white/[0.08] hover:border-[#00ff88]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0e1318] border border-white/[0.06] flex items-center justify-center text-[#00ff88] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-gray-600">0{idx + 1}</span>
                </div>

                <div className="font-mono text-2xl sm:text-3xl font-black text-white group-hover:text-[#00ff88] transition-colors">
                  {item.value}
                </div>

                <div className="font-mono text-xs font-semibold text-gray-300 mt-1 uppercase tracking-wider">
                  {item.label}
                </div>

                <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
