import React, { useState } from 'react';
import { BookOpen, Handshake, ShieldCheck, FileText, CheckCircle2, ChevronRight, Shield } from 'lucide-react';
import { TEAM_VALUES } from '../data/teamData';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Handshake,
  ShieldCheck,
  FileText,
};

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'rules' | 'stack'>('mission');

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
            <span>// TEAM DOSSIER</span>
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Who Are We?
          </h2>
          <p className="mt-5 text-lg text-gray-300 font-sans leading-relaxed border-l-2 border-[#00ff66] pl-4 bg-[#0a0d0f]/50 py-3 rounded-r-lg">
            &ldquo;sudo Unknown is a cybersecurity Capture The Flag team focused on hands-on learning, problem solving, collaboration, and continuous improvement through Hack The Box and cybersecurity challenges.&rdquo;
          </p>
        </div>

        {/* Content Split: Values Grid + Interactive Terminal Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Values Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEAM_VALUES.map((val, idx) => {
              const Icon = iconMap[val.iconName] || Shield;
              return (
                <div
                  key={val.title}
                  className="p-5 rounded-xl bg-[#0a0d0f] border border-white/10 hover:border-[#00ff66]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0d1117] border border-white/5 flex items-center justify-center text-[#00ff66] group-hover:scale-105 group-hover:border-[#00ff66]/30 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-gray-500">0{idx + 1}</span>
                    </div>
                    <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#00ff66] transition-colors mb-2">
                      {val.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-gray-500 group-hover:text-gray-300">
                    <ChevronRight className="w-3 h-3 text-[#00ff66]" />
                    <span>VERIFIED PILLAR</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Terminal Protocol Document */}
          <div className="lg:col-span-6 rounded-xl bg-[#0a0d0f] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1117] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeTab === 'mission'
                      ? 'bg-[#00ff66]/15 text-[#00ff66] border border-[#00ff66]/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  manifesto.sh
                </button>
                <button
                  onClick={() => setActiveTab('rules')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeTab === 'rules'
                      ? 'bg-[#00ff66]/15 text-[#00ff66] border border-[#00ff66]/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  rules_of_eng.json
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeTab === 'stack'
                      ? 'bg-[#00ff66]/15 text-[#00ff66] border border-[#00ff66]/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  war_room_infra.yml
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-xs leading-relaxed bg-[#050505]/90 overflow-x-auto min-h-[300px]">
              {activeTab === 'mission' && (
                <div className="space-y-3">
                  <div className="text-gray-500">#!/usr/bin/env bash</div>
                  <div className="text-gray-500"># sudo Unknown Core Manifesto // v2026.1</div>
                  <div>
                    <span className="text-purple-400">declare -r</span>{' '}
                    <span className="text-blue-400">TEAM_IDENTITY</span>=
                    <span className="text-[#00ff66]">&quot;sudo Unknown&quot;</span>
                  </div>
                  <div>
                    <span className="text-purple-400">declare -r</span>{' '}
                    <span className="text-blue-400">TAGLINE</span>=
                    <span className="text-[#00ff66]">&quot;Permission Granted. Identity Unknown.&quot;</span>
                  </div>
                  <div className="text-yellow-400/90 pt-2">
                    function execute_mission() &#123;
                  </div>
                  <div className="pl-4 space-y-1 text-gray-300">
                    <div>echo <span className="text-[#00ff66]">&quot;[+] Continuous offensive security training&quot;</span></div>
                    <div>echo <span className="text-[#00ff66]">&quot;[+] Hack The Box competitive ladder progression&quot;</span></div>
                    <div>echo <span className="text-[#00ff66]">&quot;[+] Publishing peer-reviewed challenge writeups&quot;</span></div>
                    <div>echo <span className="text-[#00ff66]">&quot;[+] Cultivating zero-ego collaborative environment&quot;</span></div>
                  </div>
                  <div className="text-yellow-400/90">&#125;</div>
                  <div className="pt-2 text-[#00ff66] flex items-center gap-2">
                    <span>$&gt; execute_mission</span>
                    <span className="text-gray-500 text-[10px]"># STATUS: EXECUTING</span>
                  </div>
                </div>
              )}

              {activeTab === 'rules' && (
                <div className="space-y-1 text-gray-300">
                  <div className="text-gray-500">&#123;</div>
                  <div className="pl-4"><span className="text-blue-400">&quot;ethics_compliance&quot;</span>: <span className="text-[#00ff66]">&quot;Strict 100% adherence to competition scopes&quot;</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">&quot;credential_sharing&quot;</span>: <span className="text-red-400">false</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">&quot;team_communication&quot;</span>: <span className="text-[#00ff66]">&quot;Encrypted Discord + CTFd War Room&quot;</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">&quot;flag_submission_policy&quot;</span>: <span className="text-[#00ff66]">&quot;Verified reproduce-first validation&quot;</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">&quot;post_ctf_obligation&quot;</span>: <span className="text-[#00ff66]">&quot;Structured post-mortem and writeup release&quot;</span></div>
                  <div className="text-gray-500">&#125;</div>
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="space-y-1 text-gray-300">
                  <div className="text-gray-500"># CTF Operational Infrastructure</div>
                  <div><span className="text-purple-400">version</span>: <span className="text-[#00ff66]">&quot;3.9&quot;</span></div>
                  <div><span className="text-blue-400">services</span>:</div>
                  <div className="pl-4"><span className="text-yellow-400">htb_gateway</span>:</div>
                  <div className="pl-8 text-gray-400">url: <span className="text-[#00ff66]">https://ctf.hackthebox.com/team/overview/331386</span></div>
                  <div className="pl-8 text-gray-400">dedicated_lab_vpn: <span className="text-blue-300">WireGuard / OpenVPN</span></div>
                  <div className="pl-4"><span className="text-yellow-400">collaborative_tools</span>:</div>
                  <div className="pl-8 text-gray-400">- Ghidra Headless Server</div>
                  <div className="pl-8 text-gray-400">- CyberChef Private Mirror</div>
                  <div className="pl-8 text-gray-400">- Internal Pwn Sandbox with GEF</div>
                </div>
              )}
            </div>

            {/* Bottom Status Footer */}
            <div className="px-4 py-2.5 bg-[#0d1117] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span className="flex items-center gap-1 text-[#00ff66]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>INTEGRITY CHECK PASSED</span>
              </span>
              <span>BRANCH: main (HEAD)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
