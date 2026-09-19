import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Github, Linkedin, Mail, MessageSquare, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../data/teamData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'discord') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2000);
    }
  };

  const commChannels = [
    {
      id: 'htb',
      name: 'Hack The Box Roster',
      handle: 'Team #331386',
      description: 'Official CTF team profile and competitive roster overview.',
      url: SITE_CONFIG.htbTeamUrl,
      icon: Terminal,
      actionText: 'View HTB Team',
      isExternal: true
    },
    {
      id: 'github',
      name: 'GitHub Repository',
      handle: 'github.com/SmitroniX/sudo-unknown',
      description: 'Open-source tools, challenge harnesses, and website source code.',
      url: SITE_CONFIG.githubUrl,
      icon: Github,
      actionText: 'View on GitHub',
      isExternal: true
    },
    {
      id: 'discord',
      name: 'Discord Community',
      handle: 'discord.gg/sudo-unknown',
      description: 'Active war rooms, machine practice, and strategy discussion.',
      url: SITE_CONFIG.discordUrl,
      icon: MessageSquare,
      actionText: 'Join Discord',
      isExternal: true,
      canCopy: true,
      copyValue: 'https://discord.gg/sudo-unknown'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Network',
      handle: 'company/sudo-unknown',
      description: 'Professional networking, announcements, and team milestones.',
      url: SITE_CONFIG.linkedinUrl,
      icon: Linkedin,
      actionText: 'Connect on LinkedIn',
      isExternal: true,
      canCopy: true,
      copyValue: SITE_CONFIG.linkedinUrl
    },
    {
      id: 'email',
      name: 'Direct Inquiries',
      handle: SITE_CONFIG.contactEmail,
      description: 'Scrimmage challenges, collaboration requests, and questions.',
      url: `mailto:${SITE_CONFIG.contactEmail}`,
      icon: Mail,
      actionText: 'Send Email',
      isExternal: false,
      canCopy: true,
      copyValue: SITE_CONFIG.contactEmail
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/[0.06] bg-[#07090b]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
            <span>// TRANSMISSION CHANNELS</span>
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Community &amp; Comms
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
            Reach out to sudo Unknown across official channels. Whether you want to scrimmage, join our squad,
            or connect with our operators, our doors are open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commChannels.map((ch) => {
            const Icon = ch.icon;
            const isEmail = ch.id === 'email';
            const isDiscord = ch.id === 'discord';

            return (
              <div
                key={ch.id}
                className="p-6 rounded-2xl bg-[#090c0f] border border-white/[0.08] hover:border-[#00ff88]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0e1318] border border-white/[0.06] flex items-center justify-center text-[#00ff88] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase">OFFICIAL</span>
                  </div>

                  <h3 className="font-mono text-lg font-bold text-white group-hover:text-[#00ff88] transition-colors">
                    {ch.name}
                  </h3>
                  <div className="font-mono text-xs text-[#00ff88] mt-1 font-semibold break-all">
                    {ch.handle}
                  </div>
                  <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
                    {ch.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/[0.05] flex items-center gap-2">
                  <a
                    href={ch.url}
                    target={ch.isExternal ? '_blank' : undefined}
                    rel={ch.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#0e1318] hover:bg-[#00ff88] hover:text-black text-gray-300 font-mono text-xs font-semibold border border-white/[0.08] hover:border-[#00ff88] transition-all"
                  >
                    <span>{ch.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {ch.canCopy && (
                    <button
                      onClick={() => copyToClipboard(ch.copyValue || '', isEmail ? 'email' : 'discord')}
                      className="p-2.5 rounded-lg bg-[#0e1318] hover:bg-[#141920] border border-white/[0.08] text-gray-400 hover:text-[#00ff88] transition-colors"
                      title="Copy link"
                      aria-label="Copy Address"
                    >
                      {(isEmail && copiedEmail) || (isDiscord && copiedDiscord) ? (
                        <Check className="w-4 h-4 text-[#00ff88]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
