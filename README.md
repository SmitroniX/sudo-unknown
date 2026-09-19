# sudo Unknown // CTF Team Website

> **"Permission Granted. Identity Unknown."**  
> Official Hack The Box CTF Team Profile: [https://ctf.hackthebox.com/team/overview/331386](https://ctf.hackthebox.com/team/overview/331386)

---

## 🛡️ Project Overview

A modern, premium cybersecurity CTF team website for **sudo Unknown**, built with React, TypeScript, and Tailwind CSS. The website features a cinematic dark cybersecurity aesthetic inspired by modern SOC dashboards, terminal interfaces, and CTF platforms.

### ✨ Design System & Aesthetic
- **Primary Background:** Near-black (`#050505`)
- **Accent:** Neon Green (`#00ff66` / `#22ff77`)
- **Secondary:** Dark charcoal / graphite (`#0a0d0f`, `#0d1117`, `#161b22`)
- **Text:** Crisp white and muted graphite gray (`#e6edf3`, `#94a3b8`)
- **Visual Features:** Subtle glassmorphism, CRT scanline overlay, interactive canvas cyber particles, glitch hover effect on team logo, responsive terminal typing animation, and desktop cursor glow (respects `prefers-reduced-motion`).

---

## 🗂️ Central Configuration File

All team data is centralized in a single admin-friendly file:
`src/data/teamData.ts`

You can edit:
- **`STATISTICS`**: CTFs Participated, Flags Captured, Team Members, Challenges Solved.
- **`TEAM_MEMBERS`**: Avatar, Name, Role, HTB username, GitHub, LinkedIn, Skills, and Bio.
- **`SKILL_CATEGORIES`**: WEB, PWN, CRYPTO, FORENSICS, REVERSE ENGINEERING, OSINT, MISC.
- **`ACHIEVEMENTS`**: CTF tournament records, dates, event types, team results, and highlights.
- **`WRITEUPS`**: Challenge writeups with full technical walkthroughs, PoC code, and flags.
- **`SITE_CONFIG`**: Team URL, Discord invite, GitHub repo, and contact email.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended, verified on Node v24)
- npm

### Installation & Local Development
```bash
# Navigate to the project directory
cd /home/ubuntu/sudo-unknown

# Install dependencies (already installed)
npm install

# Start Vite development server
npm run dev

# Or build for production and preview
npm run build
npm run preview -- --host 0.0.0.0 --port 5173
```

---

## 🧩 Architectural Components

| Component | Description |
|---|---|
| [`Navbar`](src/components/Navbar.tsx) | Sticky glassmorphic navbar with glitch logo, HTB active status badge, mobile drawer, and CLI trigger. |
| [`Hero`](src/components/Hero.tsx) | Full-screen hero with typing animation (`whoami` -> `unknown`, `sudo access` -> `GRANTED`), interactive micro-CLI, and primary CTAs. |
| [`Stats`](src/components/Stats.tsx) | 4 statistics cards with animated counters when scrolled into view. |
| [`About`](src/components/About.tsx) | "Who Are We?" team dossier with values grid and interactive terminal document viewer (`manifesto.sh`, `rules_of_eng.json`, `war_room_infra.yml`). |
| [`Skills`](src/components/Skills.tsx) | Interactive 7-category offensive grid (WEB, PWN, CRYPTO, FORENSICS, REVERSE, OSINT, MISC) with tool arsenals and deep dive inspector. |
| [`Team`](src/components/Team.tsx) | Core team member cards with role, HTB handle, GitHub, LinkedIn, and skill search/filter. |
| [`HackTheBox`](src/components/HackTheBox.tsx) | Dedicated HTB section linking to Team #331386 with lab focus tracks (Tournaments, Machines, Pro Labs, Challenges). |
| [`Achievements`](src/components/Achievements.tsx) | CTF timeline milestones with event type filters (Global HTB, University CTF, Jeopardy). |
| [`Writeups`](src/components/Writeups.tsx) | Filterable challenge writeups with full reader modal, weaponized PoC code copy, and flag reveal confetti. |
| [`JoinTeam`](src/components/JoinTeam.tsx) | "JOIN THE UNKNOWN" recruitment section with benefit highlights and interactive application modal. |
| [`Contact`](src/components/Contact.tsx) | Transmission channels (HTB, GitHub, Discord, LinkedIn, Email) with one-click copy. |
| [`Footer`](src/components/Footer.tsx) | Brand copyright, tagline, index links, and live network status telemetry. |
| [`InteractiveTerminal`](src/components/InteractiveTerminal.tsx) | Full-fledged interactive cyber shell with custom commands (`help`, `cat flag.txt`, `whoami`, `sudo su`, `htb`, etc.). |
| [`CyberBackground`](src/components/CyberBackground.tsx) | HTML5 Canvas particle & grid mesh background with GPU-friendly motion and reduced-motion fallback. |
| [`CursorGlow`](src/components/CursorGlow.tsx) | Subtle pointer illumination on desktop. |

---

## 🔒 Policy on Platform Data
In compliance with Hack The Box platform integrity, no fake rankings, fake achievements, fake member counts, or fake Hack The Box statistics are displayed. All live team scores, solver telemetry, and historical event solves are linked directly to the official Hack The Box portal:
`https://ctf.hackthebox.com/team/overview/331386`
