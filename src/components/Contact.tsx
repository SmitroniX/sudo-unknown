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

  const communityLinks = [
    {
      id: 'htb',
      name: 'Hack The Box',
      handle: 'Team #331386',
      description: 'Official CTF team profile and competitive roster overview.',
      url: SITE_CONFIG.htbTeamUrl,
      icon: Terminal,
      actionText: 'View HTB Team',
      isExternal: true
    },
    {
      id: 'discord',
      name: 'Discord Community',
      handle: 'discord.gg/sudo-unknown',
      description: 'Active war rooms, challenge discussions, and team study sessions.',
      url: SITE_CONFIG.discordUrl,
      icon: MessageSquare,
      actionText: 'Join Discord',
      isExternal: true,
      canCopy: true,
      copyValue: 'https://discord.gg/sudo-unknown'
    },
    {
      id: 'github',
      name: 'GitHub Organization',
      handle: 'github.com/sudo-unknown',
      description: 'Open-source tools, exploit templates, and public writeup archives.',
      url: SITE_CONFIG.githubUrl,
      icon: Github,
      actionText: 'Explore Repos',
      isExternal: true
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Network',
      handle: 'sudo-unknown-ctf',
      description: 'Professional networking, industry announcements, and achievements.',
      url: SITE_CONFIG.linkedinUrl,
      icon: Linkedin,
      actionText: 'Connect on LinkedIn',
      isExternal: true
    },
    {
      id: 'email',
      name: 'Direct Contact',
      handle: SITE_CONFIG.contactEmail,
      description: 'Sponsorship inquiries, scrimmage challenges, and team collaboration.',
      url: `mailto:${SITE_CONFIG.contactEmail}`,
      icon: Mail,
      actionText: 'Send Email',
      isExternal: false,
      canCopy: true,
      copyValue: SITE_CONFIG.contactEmail
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-[#050505]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
            <span>// TRANSMISSION CHANNELS</span>
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Community &amp; Comms
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
            Connect with sudo Unknown across official channels. Whether you want to scrimmage, collaborate on research,
            or join our competitive division, our comms are open.
          </p>
        </div>

        {/* 5 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityLinks.map((item) => {
            const Icon = item.icon;
            const isEmail = item.id === 'email';
            const isDiscord = item.id === 'discord';

            return (
              <div
                key={item.id}
                className="group relative p-6 rounded-xl bg-[#0a0d0f] border border-white/10 hover:border-[#00ff66]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,102,0.1)] overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00ff66]/5 rounded-full blur-2xl group-hover:bg-[#00ff66]/15 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0d1117] border border-white/10 flex items-center justify-center text-[#00ff66] group-hover:scale-110 group-hover:border-[#00ff66]/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase">ENCRYPTED</span>
                  </div>

                  <h3 className="font-mono text-lg font-bold text-white group-hover:text-[#00ff66] transition-colors">
                    {item.name}
                  </h3>
                  <div className="font-mono text-xs text-[#00ff66] mt-1 font-semibold break-all">
                    {item.handle}
                  </div>
                  <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center gap-2">
                  <a
                    href={item.url}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#0d1117] hover:bg-[#00ff66] hover:text-black text-gray-300 font-mono text-xs font-semibold border border-white/10 hover:border-[#00ff66] transition-all"
                  >
                    <span>{item.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {item.canCopy && (
                    <button
                      onClick={() => copyToClipboard(item.copyValue || '', isEmail ? 'email' : 'discord')}
                      className="p-2 rounded-lg bg-[#0d1117] hover:bg-[#161b22] border border-white/10 text-gray-400 hover:text-[#00ff66] transition-colors"
                      title="Copy link"
                      aria-label="Copy transmission address"
                    >
                      {(isEmail && copiedEmail) || (isDiscord && copiedDiscord) ? (
                        <Check className="w-4 h-4 text-[#00ff66]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#00ff66] transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
