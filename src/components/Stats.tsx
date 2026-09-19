import React, { useEffect, useState, useRef } from 'react';
import { Trophy, Flag, Users, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { STATISTICS, StatisticItem } from '../data/teamData';

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Flag,
  Users,
  CheckCircle2,
};

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<CounterProps> = ({ end, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 relative z-10 border-y border-white/5 bg-[#050505]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00ff66] uppercase tracking-wider mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>// OPERATIONAL TELEMETRY</span>
            </div>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Verified CTF Metrics
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#0d1117] px-3 py-1.5 rounded border border-white/5 w-fit">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ff66]" />
            <span>Config source: <code className="text-gray-300">src/data/teamData.ts</code></span>
          </div>
        </div>

        {/* 4 Statistics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATISTICS.map((item: StatisticItem, index: number) => {
            const Icon = iconMap[item.iconName] || Trophy;
            const indexFormatted = String(index + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                className="relative group p-6 rounded-xl bg-[#0a0d0f] border border-white/10 hover:border-[#00ff66]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,102,0.12)] overflow-hidden"
              >
                {/* Top Corner Hex Accent */}
                <div className="absolute top-3 right-3 font-mono text-[10px] text-gray-500 group-hover:text-[#00ff66] transition-colors">
                  [{indexFormatted}]
                </div>

                {/* Ambient glow in card background */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#00ff66]/5 rounded-full blur-2xl group-hover:bg-[#00ff66]/15 transition-all duration-300" />

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-[#0d1117] border border-white/10 flex items-center justify-center text-[#00ff66] mb-5 group-hover:border-[#00ff66]/40 group-hover:scale-105 transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Big Metric Number with Animated Count */}
                <div className="font-mono text-4xl sm:text-5xl font-black text-white group-hover:text-[#00ff66] transition-colors tracking-tight">
                  <AnimatedNumber end={item.value} suffix={item.suffix} />
                </div>

                {/* Label */}
                <div className="font-mono text-sm font-semibold text-gray-200 mt-2 tracking-wide uppercase">
                  {item.label}
                </div>

                {/* Detailed Description */}
                <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom Border Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r from-transparent via-[#00ff66] to-transparent transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
