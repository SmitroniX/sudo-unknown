import React, { useState } from 'react';
import {
  Wrench,
  Terminal,
  Copy,
  Check,
  Star,
  ExternalLink,
  Code2,
  Cpu,
  Github,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TOOL_ARSENAL, ToolArsenalItem, SITE_CONFIG } from '../data/teamData';

export const ArsenalSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCommand = (command: string, id: string) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="arsenal" className="py-20 relative z-10 border-t border-white/[0.06] bg-[#05070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>// SQUAD TOOLING &amp; WEAPONIZED REPOSITORIES</span>
            </div>
            <h2 className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Syndicate <span className="text-[#00ff88]">Arsenal</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              Custom open-source attack suites, reconnaissance automation, heap manipulation scripts, and Active Directory DACL calculators developed by sudo Unknown researchers.
            </p>
          </div>

          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-semibold transition-all flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>View All on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOL_ARSENAL.map((tool: ToolArsenalItem) => (
            <div
              key={tool.id}
              className="p-6 rounded-2xl bg-[#090d12] border border-white/[0.08] hover:border-[#00ff88]/40 transition-all duration-200 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] font-bold text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded border border-[#00ff88]/30">
                    {tool.badge}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-gray-400">
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300">
                      {tool.language}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-3 h-3 fill-yellow-400" />
                      {tool.stars}
                    </span>
                  </div>
                </div>

                {/* Tool Name */}
                <h3 className="font-mono text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors">
                  {tool.name}
                </h3>
                <span className="font-mono text-xs text-gray-400 block mt-0.5">
                  Category: {tool.category}
                </span>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {tool.description}
                </p>

                {/* Features List */}
                <ul className="mt-4 space-y-1.5 border-t border-white/[0.04] pt-3 font-sans text-xs text-gray-300">
                  {tool.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Install Command & Action */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                <div className="relative rounded-lg bg-[#05070a] border border-white/[0.06] p-2.5 font-mono text-[11px] text-gray-300 flex items-center justify-between">
                  <code className="truncate pr-2">{tool.installCommand}</code>
                  <button
                    onClick={() => handleCopyCommand(tool.installCommand, tool.id)}
                    className="p-1 rounded text-gray-400 hover:text-[#00ff88] hover:bg-white/5 transition-colors shrink-0"
                    title="Copy command"
                  >
                    {copiedId === tool.id ? (
                      <Check className="w-3.5 h-3.5 text-[#00ff88]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
