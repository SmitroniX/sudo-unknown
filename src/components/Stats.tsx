import React from 'react';
import { Trophy, Flag, Users, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { STATISTICS, StatisticItem, SITE_CONFIG } from '../data/teamData';

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Flag,
  Users,
  CheckCircle2,
};

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 relative z-10 border-y border-white/[0.06] bg-[#07090b]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>// SQUAD TELEMETRY &amp; METRICS</span>
            </div>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Verified Team Statistics
            </h2>
          </div>

          <a
            href={SITE_CONFIG.htbTeamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00ff88] bg-[#0d1117] px-3.5 py-1.5 rounded-lg border border-white/[0.08] transition-colors w-fit"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ff88]" />
            <span>HTB Team #331386 Verified</span>
          </a>
        </div>

        {/* 4 Statistics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATISTICS.map((item: StatisticItem, index: number) => {
            const Icon = iconMap[item.iconName] || Trophy;
            const indexFormatted = String(index + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                className="relative group p-6 rounded-2xl bg-[#090c0f] border border-white/[0.08] hover:border-[#00ff88]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,136,0.1)] overflow-hidden"
              >
                {/* Index tag */}
                <div className="absolute top-4 right-4 font-mono text-[10px] text-gray-500 group-hover:text-[#00ff88] transition-colors">
                  [{indexFormatted}]
                </div>

                {/* Ambient glow */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#00ff88]/5 rounded-full blur-2xl group-hover:bg-[#00ff88]/15 transition-all" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0e1318] border border-white/[0.06] flex items-center justify-center text-[#00ff88] mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Value */}
                <div className="font-mono text-3xl sm:text-4xl font-black text-white group-hover:text-[#00ff88] transition-colors tracking-tight">
                  {item.value}
                  {item.suffix && <span className="text-sm font-normal text-gray-400 ml-1">{item.suffix}</span>}
                </div>

                {/* Label */}
                <div className="font-mono text-sm font-semibold text-gray-200 mt-2 tracking-wide uppercase">
                  {item.label}
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom Border Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#00ff88] transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
