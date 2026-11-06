import React, { useState, useMemo } from 'react';
import {
  FileCode,
  Search,
  Filter,
  Terminal,
  ExternalLink,
  Flame,
  ShieldCheck,
  Server,
  Cpu,
  Globe,
  Binary,
  KeyRound,
  SearchCode,
  Network,
  Cloud,
  ChevronRight,
  Copy,
  Check,
  Sparkles,
  Trophy,
  ArrowUpDown
} from 'lucide-react';
import { WRITEUPS, Writeup, WriteupPlatform, ChallengeCategory, DifficultyLevel, SITE_CONFIG } from '../data/teamData';
import { WriteupModal } from './WriteupModal';

export const WriteupsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'date' | 'difficulty' | 'points'>('date');
  const [selectedWriteup, setSelectedWriteup] = useState<Writeup | null>(null);
  const [quickCopiedId, setQuickCopiedId] = useState<string | null>(null);

  const platforms = ['All', 'Hack The Box', 'TryHackMe', 'CTFtime', 'Research Lab'];
  const categories = ['All', 'Active Directory', 'Web', 'Pwn', 'Crypto', 'Forensics', 'Reverse', 'Cloud', 'Misc'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard', 'Insane'];

  // Filtered and sorted writeups
  const filteredWriteups = useMemo(() => {
    return WRITEUPS.filter((item) => {
      // Platform filter
      if (selectedPlatform !== 'All' && item.platform !== selectedPlatform) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'All' && item.difficulty !== selectedDifficulty) {
        return false;
      }
      // Search query filter (matches name, cves, tags, shortDescription, author)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.challengeName.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription.toLowerCase().includes(query);
        const matchesAuthor = item.author.toLowerCase().includes(query);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(query));
        const matchesCves = item.cves?.some((c) => c.toLowerCase().includes(query));
        const matchesTargetOs = item.targetOs?.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesAuthor || matchesTags || matchesCves || matchesTargetOs;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'points') {
        return b.points - a.points;
      }
      if (sortBy === 'difficulty') {
        const order: Record<DifficultyLevel, number> = { Easy: 1, Medium: 2, Hard: 3, Insane: 4 };
        return order[b.difficulty] - order[a.difficulty];
      }
      // Default: date descending
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [searchQuery, selectedPlatform, selectedCategory, selectedDifficulty, sortBy]);

  const handleQuickCopyFlag = (w: Writeup, e: React.MouseEvent) => {
    e.stopPropagation();
    const flagVal = w.fullContent.rootFlag || w.fullContent.flag || w.fullContent.userFlag;
    if (flagVal) {
      navigator.clipboard.writeText(flagVal);
      setQuickCopiedId(w.id);
      setTimeout(() => setQuickCopiedId(null), 2000);
    }
  };

  const getDifficultyBadge = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Medium':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'Hard':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      case 'Insane':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
    }
  };

  const getCategoryIcon = (cat: ChallengeCategory) => {
    switch (cat) {
      case 'Active Directory':
        return Network;
      case 'Web':
        return Globe;
      case 'Pwn':
        return Cpu;
      case 'Crypto':
        return KeyRound;
      case 'Forensics':
        return SearchCode;
      case 'Reverse':
        return Binary;
      case 'Cloud':
        return Cloud;
      default:
        return Terminal;
    }
  };

  const totalPoints = WRITEUPS.reduce((acc, curr) => acc + curr.points, 0);

  return (
    <section id="writeups" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e141a] border border-[#00ff88]/30 font-mono text-xs text-[#00ff88] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span>OFFICIAL HTB &amp; CTF FIELD WRITEUPS REPOSITORY</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-mono font-extrabold text-white tracking-tight">
              Cybersecurity <span className="text-[#00ff88]">Writeups</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              Step-by-step technical walkthroughs, exploit chains, weaponized PoCs, and defensive remediation guides authored by sudo Unknown operators across Hack The Box, TryHackMe, and premier global CTFs.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
            <div className="p-3 rounded-xl bg-[#0b0f14] border border-white/[0.08] text-center">
              <span className="text-gray-400 block text-[10px] uppercase">Total Writeups</span>
              <span className="text-lg font-bold text-white">{WRITEUPS.length}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f14] border border-white/[0.08] text-center">
              <span className="text-gray-400 block text-[10px] uppercase">Platforms</span>
              <span className="text-lg font-bold text-[#00ff88]">4</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f14] border border-white/[0.08] text-center">
              <span className="text-gray-400 block text-[10px] uppercase">Categories</span>
              <span className="text-lg font-bold text-cyan-400">8</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f14] border border-white/[0.08] text-center">
              <span className="text-gray-400 block text-[10px] uppercase">Points Available</span>
              <span className="text-lg font-bold text-purple-400">{totalPoints}+</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-8 space-y-4">
          {/* Search bar + Sort */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search writeups by machine name, CVE, tool, technique (e.g. ProxyLogon, SSTI, Kerberoasting)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#090d12] border border-white/10 text-white placeholder-gray-500 font-mono text-xs sm:text-sm focus:outline-none focus:border-[#00ff88] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white font-mono text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 bg-[#090d12] border border-white/10 rounded-xl px-3 py-2 font-mono text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-white font-mono text-xs focus:outline-none cursor-pointer"
              >
                <option value="date" className="bg-[#090d12] text-white">Latest First</option>
                <option value="difficulty" className="bg-[#090d12] text-white">Difficulty (Hardest)</option>
                <option value="points" className="bg-[#090d12] text-white">Points (Highest)</option>
              </select>
            </div>
          </div>

          {/* Filter Rows: Platform & Category */}
          <div className="space-y-2.5 pt-2">
            {/* Platform filter pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-mono text-xs text-gray-500 mr-1.5 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#00ff88]" /> Platform:
              </span>
              {platforms.map((plat) => (
                <button
                  key={plat}
                  onClick={() => setSelectedPlatform(plat)}
                  className={`px-3 py-1 rounded-lg font-mono text-xs transition-all ${
                    selectedPlatform === plat
                      ? 'bg-[#00ff88] text-black font-bold shadow-[0_0_12px_rgba(0,255,136,0.3)]'
                      : 'bg-[#090d12] text-gray-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>

            {/* Category filter pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-mono text-xs text-gray-500 mr-1.5">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg font-mono text-xs transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-400 text-black font-bold shadow-[0_0_10px_rgba(0,229,255,0.3)]'
                      : 'bg-[#090d12] text-gray-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              ))}

              {/* Difficulty Quick Pills */}
              <div className="hidden md:flex items-center gap-1 ml-auto">
                <span className="font-mono text-xs text-gray-500 mr-1">Diff:</span>
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-2 py-0.5 rounded font-mono text-[11px] transition-all ${
                      selectedDifficulty === diff
                        ? 'bg-white text-black font-bold'
                        : 'bg-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter & Active Filters Display */}
        <div className="mt-6 flex items-center justify-between text-xs font-mono text-gray-400">
          <div>
            Showing <span className="text-[#00ff88] font-bold">{filteredWriteups.length}</span> of {WRITEUPS.length} operational reports
          </div>
          {(selectedPlatform !== 'All' || selectedCategory !== 'All' || selectedDifficulty !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedPlatform('All');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
              className="text-[#00ff88] hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Writeups Cards Grid */}
        {filteredWriteups.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWriteups.map((wup) => {
              const CategoryIcon = getCategoryIcon(wup.category);
              return (
                <div
                  key={wup.id}
                  onClick={() => setSelectedWriteup(wup)}
                  className="p-6 rounded-2xl bg-[#090d12] border border-white/[0.08] hover:border-[#00ff88]/50 transition-all duration-200 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 shadow-xl hover:shadow-[#00ff88]/5"
                >
                  <div>
                    {/* Top Meta Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded border border-[#00ff88]/30 flex items-center gap-1">
                          <CategoryIcon className="w-3 h-3" />
                          {wup.category}
                        </span>
                        {wup.targetOs && (
                          <span className="font-mono text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                            {wup.targetOs}
                          </span>
                        )}
                      </div>

                      <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded border ${getDifficultyBadge(wup.difficulty)}`}>
                        {wup.difficulty}
                      </span>
                    </div>

                    {/* Challenge Title */}
                    <h3 className="font-mono text-lg font-bold text-white group-hover:text-[#00ff88] transition-colors leading-snug">
                      {wup.challengeName}
                    </h3>

                    {/* Target IP & Platform info */}
                    <div className="flex items-center gap-2 mt-1.5 font-mono text-[11px] text-gray-400">
                      <span className="text-gray-300 font-semibold">{wup.platform}</span>
                      {wup.targetIp && (
                        <>
                          <span>•</span>
                          <span className="text-purple-300">{wup.targetIp}</span>
                        </>
                      )}
                      <span>•</span>
                      <span className="text-yellow-400">{wup.points} PTS</span>
                    </div>

                    {/* Short Description */}
                    <p className="mt-3 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed line-clamp-3">
                      {wup.shortDescription}
                    </p>

                    {/* CVE Tags */}
                    {wup.cves && wup.cves.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {wup.cves.map((cve) => (
                          <span key={cve} className="px-1.5 py-0.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-[10px] font-bold">
                            {cve}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom / Action Bar */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <button
                      onClick={(e) => handleQuickCopyFlag(wup, e)}
                      title="Copy flag to clipboard"
                      className="inline-flex items-center gap-1 text-gray-400 hover:text-[#00ff88] transition-colors p-1 rounded"
                    >
                      {quickCopiedId === wup.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#00ff88]" />
                          <span className="text-[#00ff88]">Flag Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Flag</span>
                        </>
                      )}
                    </button>

                    <span className="inline-flex items-center gap-1 text-[#00ff88] font-bold group-hover:translate-x-0.5 transition-transform">
                      <span>Full Walkthrough</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 p-12 text-center rounded-2xl bg-[#090d12] border border-white/10 max-w-xl mx-auto font-mono">
            <Terminal className="w-10 h-10 text-gray-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No Matching Writeups Found</h3>
            <p className="text-xs text-gray-400 mt-2">
              No field debriefs matched your search query or filter criteria. Try adjusting or clearing your filters.
            </p>
            <button
              onClick={() => {
                setSelectedPlatform('All');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#00ff88] text-black font-bold text-xs hover:bg-[#22ff99] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Community & HTB Team Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#0d141e] via-[#0b1016] to-[#090d12] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88]">
              <Trophy className="w-4 h-4 text-[#00ff88]" />
              <span>OFFICIAL HTB SQUAD #331386</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white">
              Want to see a specific machine or challenge cracked?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
              Request a walkthrough from the sudo Unknown research squad or join our active Discord war room to solve machines together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.htbTeamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#00ff88] hover:bg-[#22ff99] text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)] flex items-center gap-2"
            >
              <span>View HTB Team Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE_CONFIG.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-all flex items-center gap-2"
            >
              <span>Join Discord War Room</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Writeup Modal */}
      <WriteupModal
        writeup={selectedWriteup}
        onClose={() => setSelectedWriteup(null)}
      />
    </section>
  );
};
