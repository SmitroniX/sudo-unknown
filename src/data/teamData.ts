export interface RosterSlot {
  id: string;
  role: string;
  category: 'Web' | 'Pwn' | 'Crypto' | 'Forensics' | 'Reverse' | 'OSINT' | 'Misc' | 'Leadership';
  status: 'FILLED' | 'OPEN';
  holderName?: string;
  htbUsername?: string;
  htbUrl?: string;
  github?: string;
  linkedin?: string;
  requiredSkills: string[];
  focusDescription: string;
}

export interface StatisticItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
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
  tier: 'Foundational' | 'Advanced' | 'Specialized';
}

export interface RoadmapTarget {
  id: string;
  eventName: string;
  timeline: string;
  category: 'Global HTB CTF' | 'University CTF' | 'HTB Pro Labs' | 'Open Jeopardy';
  objective: string;
  status: 'UPCOMING' | 'PREPARING' | 'SCHEDULED';
  deliverables: string[];
}

export interface TrainingWriteup {
  id: string;
  title: string;
  category: 'Web' | 'Pwn' | 'Crypto' | 'Forensics' | 'Reverse' | 'OSINT' | 'Misc';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane';
  scenario: string;
  summary: string;
  vulnerabilityClass: string;
  methodologySteps: string[];
  samplePoc?: string;
  flagFormat: string;
}

export const SITE_CONFIG = {
  teamName: "sudo Unknown",
  tagline: "Permission Granted. Identity Unknown.",
  mantra1: "NO IDENTITY. NO LIMITS. JUST FLAGS.",
  mantra2: "EXPLOIT • ANALYZE • CAPTURE • REPEAT",
  terminalSequence: [
    { prompt: "user@world:~$", cmd: "sudo" },
    { prompt: "[sudo] password for ?", cmd: "********" },
    { prompt: "Permission granted.", status: "SUCCESS" },
    { prompt: "Welcome to the unknown.", status: "ACCESS_GRANTED" }
  ],
  htbTeamUrl: "https://ctf.hackthebox.com/team/overview/331386",
  htbTeamId: "331386",
  githubUrl: "https://github.com/SmitroniX/sudo-unknown",
  discordUrl: "https://discord.gg/sudo-unknown",
  linkedinUrl: "https://www.linkedin.com/company/sudo-unknown-ctf",
  contactEmail: "contact@sudounknown.team",
  foundedYear: 2026,
  status: "BUILDING FOUNDING ROSTER",
  headquarters: "Decentralized // Global HTB Network",
};

/**
 * HONEST, REALISTIC NEW-TEAM METRICS
 * No fake rankings or fake solved numbers. Clear, verified facts for a rising squad.
 */
export const STATISTICS: StatisticItem[] = [
  {
    id: "htb_id",
    label: "HTB TEAM ID",
    value: "331386",
    subtext: "Official Hack The Box registered CTF squad",
    iconName: "ShieldCheck"
  },
  {
    id: "tracks",
    label: "CORE DISCIPLINES",
    value: "7",
    subtext: "Web, Pwn, Crypto, Forensics, Reverse, OSINT, Misc",
    iconName: "Cpu"
  },
  {
    id: "status",
    label: "ROSTER STATUS",
    value: "FORMING",
    subtext: "Actively recruiting founding competitive operators",
    iconName: "Users"
  },
  {
    id: "season",
    label: "TARGET SEASON",
    value: "2026",
    subtext: "Preparing for HTB seasonal and global open tournaments",
    iconName: "Trophy"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "web",
    name: "WEB",
    shortCode: "0xWEB",
    description: "Modern application vulnerabilities, authentication architecture, API flaws, SSRF, SSTI, and cloud metadata pivoting.",
    keyTools: ["Burp Suite Pro", "Caido", "ffuf", "SQLMap", "Postman"],
    topics: ["OAuth2 / JWT Misconfigurations", "SSRF & Cloud Metadata Access", "Template & Deserialization Injection", "GraphQL & REST Logic Exploitation"],
    iconName: "Globe",
    tier: "Foundational"
  },
  {
    id: "pwn",
    name: "PWN",
    shortCode: "0xPWN",
    description: "Low-level memory corruption, stack/heap exploitation, return-oriented programming (ROP), and defensive mitigation bypasses.",
    keyTools: ["pwntools", "GDB + GEF / pwndbg", "ROPgadget", "one_gadget"],
    topics: ["GLIBC Heap Allocators & Tcache", "Format String Exploitation", "ROP / SROP Chain Construction", "Canary & ASLR Bypasses"],
    iconName: "Cpu",
    tier: "Advanced"
  },
  {
    id: "crypto",
    name: "CRYPTO",
    shortCode: "0xCRP",
    description: "Cryptanalytic attacks on flawed implementations, weak PRNGs, lattice reduction, RSA factorization, and curve weaknesses.",
    keyTools: ["SageMath", "CyberChef", "Z3 SMT Solver", "Python Cryptography"],
    topics: ["Coppersmith / Small Public Exponents", "Padding Oracle Attacks (CBC / OAEP)", "Discrete Logarithms & Pollard Rho", "Lattice Attacks (LLL / BKZ)"],
    iconName: "KeyRound",
    tier: "Advanced"
  },
  {
    id: "forensics",
    name: "FORENSICS",
    shortCode: "0xFOR",
    description: "Artifact extraction, incident triage, memory analysis, PCAP packet reconstruction, and filesystem investigations.",
    keyTools: ["Volatility 3", "Wireshark / TShark", "Autopsy", "Eric Zimmerman Tools"],
    topics: ["Malicious Process Memory Analysis", "Network Protocol Carving", "Windows EVTX & Registry Triage", "NTFS / Ext4 Filesystem Forensics"],
    iconName: "SearchCode",
    tier: "Foundational"
  },
  {
    id: "reverse",
    name: "REVERSE ENGINEERING",
    shortCode: "0xREV",
    description: "Disassembly, decompilation, binary triage, anti-debugging evasion, custom VM bytecodes, and firmware reversing.",
    keyTools: ["Ghidra", "IDA Free / Pro", "Binary Ninja", "x64dbg"],
    topics: ["Anti-Debugging & Packing Detection", "Custom Bytecode Virtual Machines", "Stripped Binary Symbol Reconstruction", "ARM / MIPS Embedded Architectures"],
    iconName: "Binary",
    tier: "Specialized"
  },
  {
    id: "osint",
    name: "OSINT",
    shortCode: "0xOSI",
    description: "Open-source intelligence, satellite and solar geolocation, infrastructure tracking, and digital footprint reconstruction.",
    keyTools: ["ExifTool", "Maltego", "Overpass Turbo", "Sherlock", "SunCalc"],
    topics: ["Shadow & Solar Geolocation", "Metadata Carving & Camera Fingerprints", "Corporate Attack Surface Mapping", "Historical DNS & Archive Recon"],
    iconName: "Crosshair",
    tier: "Foundational"
  },
  {
    id: "misc",
    name: "MISC",
    shortCode: "0xMSC",
    description: "Sandboxed environments, Python/Bash restricted jails, esoteric programming, steganography, and emerging LLM security.",
    keyTools: ["Audacity", "Binwalk", "Docker", "Custom Python Engines"],
    topics: ["PyJail & Restricted Shell Escapes", "Audio & LSB Steganography", "Esoteric Language Emulation", "AI & Prompt Injection Bypasses"],
    iconName: "TerminalSquare",
    tier: "Specialized"
  }
];

/**
 * FOUNDING ROSTER & OPEN SLOTS
 * Clearly illustrates that sudo Unknown is a new team actively recruiting founding members!
 */
export const ROSTER_SLOTS: RosterSlot[] = [
  {
    id: "slot-captain",
    role: "Team Captain & Operations Lead",
    category: "Leadership",
    status: "FILLED",
    holderName: "Asmit (SmitroniX)",
    htbUsername: "SmitroniX",
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
    github: "https://github.com/SmitroniX",
    linkedin: "https://linkedin.com",
    requiredSkills: ["Team Leadership", "Strategy", "Infrastructure", "Generalist"],
    focusDescription: "Founding operator coordinating tournament scheduling, team war rooms, Hack The Box roster management, and practice sessions."
  },
  {
    id: "slot-web",
    role: "Web Security Specialist",
    category: "Web",
    status: "OPEN",
    requiredSkills: ["Burp Suite", "Auth Bypass", "SSRF", "Node/Python/PHP"],
    focusDescription: "Focus on application security, modern API logic bugs, request smuggling, and cloud tenant escalation in CTFs."
  },
  {
    id: "slot-pwn",
    role: "Binary Exploitation (PWN) Operator",
    category: "Pwn",
    status: "OPEN",
    requiredSkills: ["pwntools", "GDB/GEF", "Heap Exploitation", "ROP"],
    focusDescription: "Lead memory corruption vectors, analyzing ELF binaries, crafting reliable ROP payloads, and cracking allocator protections."
  },
  {
    id: "slot-crypto",
    role: "Cryptography Analyst",
    category: "Crypto",
    status: "OPEN",
    requiredSkills: ["SageMath", "Python", "RSA/ECC", "Number Theory"],
    focusDescription: "Break broken cryptographic primitives, custom encryption routines, padding oracles, and mathematical challenge puzzles."
  },
  {
    id: "slot-forensics",
    role: "Digital Forensics & Incident Response",
    category: "Forensics",
    status: "OPEN",
    requiredSkills: ["Volatility 3", "Wireshark", "Memory Triage", "PCAP"],
    focusDescription: "Carve covert channels out of network traffic, analyze malicious process memory dumps, and reconstruct forensic timelines."
  },
  {
    id: "slot-reverse",
    role: "Reverse Engineering Analyst",
    category: "Reverse",
    status: "OPEN",
    requiredSkills: ["Ghidra", "IDA", "x86/x64 Assembly", "Decompilation"],
    focusDescription: "Analyze stripped binaries, unpack obfuscated malware challenges, dissect proprietary protocols, and reverse engineer firmware."
  },
  {
    id: "slot-osint",
    role: "OSINT & Intelligence Lead",
    category: "OSINT",
    status: "OPEN",
    requiredSkills: ["Geolocation", "SOCMINT", "Metadata", "Reconnaissance"],
    focusDescription: "Pinpoint precise coordinates from minimal imagery, trace threat actors, and map obscure infrastructure clues."
  }
];

/**
 * 2026 COMPETITIVE ROADMAP & UPCOMING TARGETS
 * Reflects genuine forward-looking tournament goals for the team.
 */
export const ROADMAP_TARGETS: RoadmapTarget[] = [
  {
    id: "target-1",
    eventName: "HTB University CTF 2026",
    timeline: "Target: Upcoming Academic Season",
    category: "University CTF",
    objective: "Field full squad across Web, Pwn, Crypto, and Forensics to establish team ranking on the global leaderboard.",
    status: "PREPARING",
    deliverables: ["Complete core 6-player roster", "Weekly mock CTF scrimmages", "Active Directory lab drills"]
  },
  {
    id: "target-2",
    eventName: "Hack The Box Cyber Apocalypse",
    timeline: "Target: Annual Global Flagship",
    category: "Global HTB CTF",
    objective: "Compete in the largest international jeopardy CTF event with 70+ categories over a continuous 5-day marathon.",
    status: "UPCOMING",
    deliverables: ["Category lead rotation schedule", "24/7 War room rotation", "Post-event technical writeups"]
  },
  {
    id: "target-3",
    eventName: "HTB Pro Labs & Fortresses Division",
    timeline: "Ongoing Weekly Drills",
    category: "HTB Pro Labs",
    objective: "Master enterprise penetration testing simulations, multi-tier pivoting, and domain privilege escalation.",
    status: "SCHEDULED",
    deliverables: ["Dedicated team VPN sessions", "Internal methodology notes", "Shared attack playbooks"]
  },
  {
    id: "target-4",
    eventName: "Major Global Open CTFs",
    timeline: "Bi-Weekly Schedule",
    category: "Open Jeopardy",
    objective: "Participate in weekend CTFTime-rated competitions (NahamCon, DEF CON Quals, Google CTF) for continuous hands-on sharpening.",
    status: "PREPARING",
    deliverables: ["Weekend challenge triage", "Beginner onboarding buddy system", "Public research writeups"]
  }
];

/**
 * TEAM TRAINING MODULES & METHODOLOGY
 * Real, reproducible technical guides establishing the team's standard of practice.
 */
export const TRAINING_WRITEUPS: TrainingWriteup[] = [
  {
    id: "train-1",
    title: "Breaking Flawed RSA: Pairwise GCD Factorization",
    category: "Crypto",
    difficulty: "Medium",
    scenario: "Cryptographic Service Key Generation Analysis",
    vulnerabilityClass: "PRNG Seed Entropy Depletion & Prime Factor Sharing",
    summary: "When multiple RSA keypairs share a common prime factor p due to insufficient PRNG entropy, the secret key can be derived instantly without factoring n, using the Euclidean Greatest Common Divisor (GCD).",
    methodologySteps: [
      "Harvest candidate public keys (n, e) from service endpoints",
      "Compute pairwise GCD(n_i, n_j) for all combinations using SageMath or gmpy2",
      "Isolate prime factor p = GCD(n1, n2) where 1 < p < n1",
      "Compute complementary prime q = n1 // p and Euler totient phi = (p-1)*(q-1)",
      "Derive private exponent d = pow(e, -1, phi) to decrypt target payload"
    ],
    samplePoc: `import math
from Crypto.Util.number import long_to_bytes

def solve_shared_prime(n1, n2, e, c):
    p = math.gcd(n1, n2)
    assert p > 1, "No common prime factor found"
    q = n1 // p
    phi = (p - 1) * (q - 1)
    d = pow(e, -1, phi)
    plaintext_int = pow(c, d, n1)
    return long_to_bytes(plaintext_int)
`,
    flagFormat: "HTB{...} / Flag derived upon private key reconstruction"
  },
  {
    id: "train-2",
    title: "Web Cache Deception: Edge Delimiter Inconsistencies",
    category: "Web",
    difficulty: "Hard",
    scenario: "Reverse Proxy & Application Server Discrepancy",
    vulnerabilityClass: "Path Delimiter Confusion & Insecure Cache-Control",
    summary: "Exploiting discrepancies between how an edge CDN parses URL extensions (.css, .png) and how the origin application routes dynamic API requests to leak authenticated user profile tokens.",
    methodologySteps: [
      "Identify reverse proxy caching rules for static resources",
      "Test origin path normalization: /api/v1/user/settings/nonexistent.png",
      "Observe if the edge caches the 200 response with private JSON body",
      "Induce victim interaction via CSRF / open redirect to prime edge cache",
      "Fetch cached response anonymously from public CDN edge to retrieve session bearer"
    ],
    samplePoc: `curl -i -s "https://target-lab.htb/api/user/private/asset.css" \\
  -H "Host: target-lab.htb" \\
  | grep -i -E "(x-cache|cf-cache-status|token|secret)"
`,
    flagFormat: "HTB{c4ch3_d3c3pt10n_3dg3_l34k}"
  },
  {
    id: "train-3",
    title: "GLIBC 2.35+ Tcache Poisoning & Safe Linking Bypass",
    category: "Pwn",
    difficulty: "Insane",
    scenario: "64-Bit ELF Heap Memory Corruption",
    vulnerabilityClass: "Use-After-Free (UAF) & Pointer Mangling Reversal",
    summary: "Modern GLIBC introduces pointer protection for tcache next pointers (L = (P >> 12) ^ Target). By leaking the heap ASLR base, operators unscramble the mask to achieve arbitrary write primitives.",
    methodologySteps: [
      "Trigger Use-After-Free to place dangling chunk in tcache bin",
      "Read freed chunk payload to leak mangled pointer and derive heap base",
      "Calculate unmask: address ^ (address >> 12) to reveal target pointer",
      "Poison tcache forward pointer with desired target memory destination",
      "Perform double malloc allocation to receive arbitrary target chunk"
    ],
    samplePoc: `# GLIBC 2.35+ Safe-Linking helper
def mangle(pos, ptr):
    return (pos >> 12) ^ ptr

def demangle(val):
    mask = 0xfff << 52
    while mask:
        val ^= (val & mask) >> 12
        mask >>= 12
    return val
`,
    flagFormat: "HTB{h34p_tc4ch3_p01s0n_cl34r3d}"
  }
];

export const FOUNDING_VALUES = [
  {
    title: "Pure Technical Focus",
    description: "No corporate fluff or artificial ranks. We care about understanding how systems break, crafting clean exploits, and capturing flags.",
    iconName: "Terminal"
  },
  {
    title: "Transparent & Honest",
    description: "We are a rising team building from day one. We compete with integrity and showcase our real journey on Hack The Box.",
    iconName: "ShieldCheck"
  },
  {
    title: "Knowledge Cross-Pollination",
    description: "Web operators learn memory fundamentals; reverse engineers learn crypto math. We train together so nobody fights alone.",
    iconName: "Share2"
  },
  {
    title: "Open Door for Hungry Minds",
    description: "Curiosity and consistency beat passive credentials. If you spend your nights on HTB or reading writeups, you belong here.",
    iconName: "Sparkles"
  }
];
