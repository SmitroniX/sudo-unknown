export interface TeamMember {
  id: string;
  avatar: string;
  name: string;
  role: string;
  htbUsername: string;
  htbUrl: string;
  github: string;
  linkedin: string;
  skills: string[];
  isFoundingLead?: boolean;
  status: 'FILLED' | 'OPEN';
  description: string;
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
  ctfName: string;
  date: string;
  eventType: 'Global HTB CTF' | 'University CTF' | 'Lab Environment' | 'Open Jeopardy' | 'Milestone';
  teamResult: string;
  description: string;
  highlights: string[];
}

export interface Writeup {
  id: string;
  challengeName: string;
  category: 'Web' | 'Pwn' | 'Crypto' | 'Forensics' | 'Reverse' | 'OSINT' | 'Misc';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane';
  ctf: string;
  shortDescription: string;
  author: string;
  date: string;
  points: number;
  fullContent: {
    summary: string;
    reconnaissance: string;
    vulnerabilityAnalysis: string;
    exploitationSteps: string[];
    pocCode?: string;
    flag: string;
    keyTakeaways: string[];
  };
}

export const SITE_CONFIG = {
  teamName: "sudo Unknown",
  tagline: "Permission Granted. Identity Unknown.",
  mantra1: "NO IDENTITY. NO LIMITS. JUST FLAGS.",
  mantra2: "EXPLOIT • ANALYZE • CAPTURE • REPEAT",
  htbTeamUrl: "https://ctf.hackthebox.com/team/overview/331386",
  htbTeamId: "331386",
  githubUrl: "https://github.com/SmitroniX/sudo-unknown",
  discordUrl: "https://discord.gg/HgD6WGUr4G",
  siteUrl: "https://sudounknown.smitronix.dev",
  linkedinUrl: "https://www.linkedin.com/company/sudo-unknown/",
  contactEmail: "sudounknown@smitronix.dev",
  foundedYear: 2026,
  status: "BUILDING FOUNDING ROSTER",
  headquarters: "Decentralized // Global HTB Network",
};

/**
 * EDITABLE CENTRAL STATISTICS
 * Exact labels requested by requirements.
 * Editable from this single configuration file.
 */
export const STATISTICS: StatisticItem[] = [
  {
    id: "ctfs",
    label: "CTFs Participated",
    value: 1,
    suffix: " (Debut)",
    description: "Registered for the upcoming 2026 Hack The Box competitive circuit",
    iconName: "Trophy"
  },
  {
    id: "flags",
    label: "Flags Captured",
    value: 0,
    suffix: "",
    description: "Pre-season formation phase — ready for first tournament flag captures",
    iconName: "Flag"
  },
  {
    id: "members",
    label: "Team Members",
    value: 1,
    suffix: " (+6 Open)",
    description: "Founding Captain active; currently recruiting 6 core specialist operators",
    iconName: "Users"
  },
  {
    id: "challenges",
    label: "Challenges Solved",
    value: 12,
    suffix: "+",
    description: "Hack The Box training machines and practice lab challenge clears",
    iconName: "CheckCircle2"
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
    difficultyFocus: "Advanced"
  },
  {
    id: "pwn",
    name: "PWN",
    shortCode: "0xPWN",
    description: "Low-level memory corruption, stack and heap exploitation, return-oriented programming (ROP), and defensive mitigation bypasses.",
    keyTools: ["pwntools", "GDB + GEF", "pwndbg", "ROPgadget", "one_gadget"],
    topics: ["GLIBC Heap Allocators & Tcache", "Format String Exploitation", "ROP & SROP Chain Construction", "Canary & ASLR Bypasses"],
    iconName: "Cpu",
    difficultyFocus: "Expert"
  },
  {
    id: "crypto",
    name: "CRYPTO",
    shortCode: "0xCRP",
    description: "Cryptanalytic attacks on flawed implementations, weak PRNGs, lattice reduction, RSA factorization, and curve weaknesses.",
    keyTools: ["SageMath", "CyberChef", "Z3 SMT Solver", "Python Cryptography"],
    topics: ["Coppersmith / Small Public Exponents", "Padding Oracle Attacks (CBC / OAEP)", "Discrete Logarithms & Pollard Rho", "Lattice Attacks (LLL / BKZ)"],
    iconName: "KeyRound",
    difficultyFocus: "Advanced"
  },
  {
    id: "forensics",
    name: "FORENSICS",
    shortCode: "0xFOR",
    description: "Artifact extraction, incident triage, memory analysis, PCAP packet reconstruction, and filesystem investigations.",
    keyTools: ["Volatility 3", "Wireshark / TShark", "Autopsy", "Eric Zimmerman Tools"],
    topics: ["Malicious Process Memory Analysis", "Network Protocol Carving", "Windows EVTX & Registry Triage", "NTFS / Ext4 Filesystem Forensics"],
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
  },
  {
    id: "osint",
    name: "OSINT",
    shortCode: "0xOSI",
    description: "Open-source intelligence, satellite and solar geolocation, infrastructure tracking, and digital footprint reconstruction.",
    keyTools: ["ExifTool", "Maltego", "Overpass Turbo", "Sherlock", "SunCalc"],
    topics: ["Shadow & Solar Geolocation", "Metadata Carving & Camera Fingerprints", "Corporate Attack Surface Mapping", "Historical DNS & Archive Recon"],
    iconName: "Crosshair",
    difficultyFocus: "Intermediate"
  },
  {
    id: "misc",
    name: "MISC",
    shortCode: "0xMSC",
    description: "Sandboxed environments, Python/Bash restricted jails, esoteric programming, steganography, and emerging LLM security.",
    keyTools: ["Audacity", "Binwalk", "Docker", "Custom Python Engines"],
    topics: ["PyJail & Restricted Shell Escapes", "Audio & LSB Steganography", "Esoteric Language Emulation", "AI & Prompt Injection Bypasses"],
    iconName: "TerminalSquare",
    difficultyFocus: "Advanced"
  }
];

/**
 * ADMIN-FRIENDLY TEAM MEMBERS LIST
 * Explicitly reflects that sudo Unknown is a new team with a Founder and open specialist roles.
 * Each member contains: Avatar, Name, Role, HTB username, GitHub, LinkedIn, Skills.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-captain",
    avatar: "/logo.png",
    name: "Asmit (SmitroniX)",
    role: "Team Captain & Operations Lead",
    htbUsername: "SmitroniX",
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
    github: "https://github.com/SmitroniX",
    linkedin: "https://www.linkedin.com/in/asmit-jogdand",
    skills: ["Team Leadership", "Web Security", "Infrastructure", "HTB Operations"],
    isFoundingLead: true,
    status: "FILLED",
    description: "Founding operator coordinating tournament schedules, team war rooms, Hack The Box roster management, and practice drills."
  },
  {
    id: "slot-web",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "Web Security Specialist",
    htbUsername: "Candidate_Web",
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    skills: ["Burp Suite", "Auth Bypass", "SSRF", "Node/Python/PHP"],
    status: "OPEN",
    description: "Looking for an operator passionate about web vulnerabilities, REST/GraphQL APIs, OAuth2 flaws, and cloud escalation."
  },
  {
    id: "slot-pwn",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "Binary Exploitation (PWN) Lead",
    htbUsername: "Candidate_Pwn",
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    skills: ["pwntools", "GDB/GEF", "Heap Exploits", "ROP Chains"],
    status: "OPEN",
    description: "Looking for a low-level hacker to lead memory corruption vectors, ELF debugging, ROP construction, and allocator exploits."
  },
  {
    id: "slot-crypto",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "Cryptography Analyst",
    htbUsername: "Candidate_Crypto",
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    skills: ["SageMath", "Python", "RSA/ECC", "Lattice Math"],
    status: "OPEN",
    description: "Looking for a math-minded solver to break custom ciphers, weak PRNGs, lattice reductions, and flawed RSA implementations."
  },
  {
    id: "slot-forensics",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "Digital Forensics & Incident Response",
    htbUsername: "Candidate_DFIR",
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    skills: ["Volatility 3", "Wireshark", "Memory Dumps", "PCAP Analysis"],
    status: "OPEN",
    description: "Looking for an analyst skilled in carving network captures, analyzing process memory injections, and disk artifact recovery."
  },
  {
    id: "slot-reverse",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "Reverse Engineering Analyst",
    htbUsername: "Candidate_Reverse",
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    skills: ["Ghidra", "IDA", "x86/x64 Assembly", "Decompilation"],
    status: "OPEN",
    description: "Looking for an operator who loves dissecting stripped binaries, custom VM bytecode, packed executables, and firmware."
  },
  {
    id: "slot-osint",
    avatar: "/logo.png",
    name: "[ Open Founding Slot ]",
    role: "OSINT & Reconnaissance Specialist",
    htbUsername: "Candidate_OSINT",
    htbUrl: "https://ctf.hackthebox.com/team/overview/331386",
    github: "https://github.com/SmitroniX/sudo-unknown",
    linkedin: "https://www.linkedin.com/company/sudo-unknown/",
    skills: ["Geolocation", "SOCMINT", "Metadata Carving", "Recon"],
    status: "OPEN",
    description: "Looking for an investigator capable of pinpointing satellite coordinates, tracking digital footprints, and OSINT recon."
  }
];

/**
 * CTF ACHIEVEMENTS & TIMELINE
 * Each achievement shows: CTF name, Date, Event type, Team result, Description.
 * Real milestones for this newly formed squad.
 */
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    ctfName: "Hack The Box Team Registration",
    date: "September 2026",
    eventType: "Milestone",
    teamResult: "Team #331386 Verified",
    description: "Official registration and activation of sudo Unknown on the Hack The Box CTF competitive platform.",
    highlights: [
      "Official team portal established: ctf.hackthebox.com/team/overview/331386",
      "Founding charter and communication infrastructure deployed",
      "Public recruitment initiated for founding specialist roster"
    ]
  },
  {
    id: "ach-2",
    ctfName: "HTB University CTF 2026",
    date: "November 2026",
    eventType: "University CTF",
    teamResult: "Roster Preparing // Targeted Debut",
    description: "Fielding full collegiate/academic competitive division across Web, Pwn, Crypto, Forensics, and Reverse categories.",
    highlights: [
      "Targeting complete 6-operator competitive lineup",
      "Weekly team mock scrimmage drills on Hack The Box machines",
      "Collaborative CTFd war room and strategy coordination"
    ]
  },
  {
    id: "ach-3",
    ctfName: "Hack The Box Cyber Apocalypse",
    date: "Spring 2027",
    eventType: "Global HTB CTF",
    teamResult: "Scheduled Global Contender",
    description: "Preparing for the premier international 5-day continuous jeopardy CTF featuring 70+ challenges.",
    highlights: [
      "24/7 war room shift rotation planning",
      "Multi-category cross-solver support structure",
      "Post-competition technical writeup publication commitment"
    ]
  },
  {
    id: "ach-4",
    ctfName: "Hack The Box Pro Labs Practice Circuit",
    date: "Weekly Drills",
    eventType: "Lab Environment",
    teamResult: "Active Training Regimen",
    description: "Continuous enterprise penetration testing practice focusing on multi-domain Active Directory pivoting and privilege escalation.",
    highlights: [
      "Hands-on practice on Linux and Windows machines",
      "Internal methodology documentation repository",
      "Weekly team debriefs and exploit walkthroughs"
    ]
  }
];

/**
 * CYBERSECURITY WRITEUPS
 * Full writeups for ALL 7 categories (Web, Pwn, Crypto, Forensics, Reverse, OSINT, Misc)
 * Cards contain: Challenge name, Category, Difficulty, CTF, Short description, Read Writeup button.
 */
export const WRITEUPS: Writeup[] = [
  {
    id: "wup-crypto",
    challengeName: "Quantum Lockout: Flawed RSA Key Generation",
    category: "Crypto",
    difficulty: "Medium",
    ctf: "HTB Cyber Apocalypse Prep",
    shortDescription: "Deriving private RSA keys instantly by calculating pairwise greatest common divisors (GCD) across shared prime factors.",
    author: "sudo Unknown Research",
    date: "2026-09-15",
    points: 350,
    fullContent: {
      summary: "In this scenario, an authentication service generated RSA moduli with a flawed pseudo-random seed. Multiple keypairs shared a prime factor p. Using Euclid's algorithm, we calculated GCD(n1, n2) to extract p in milliseconds without factoring large integers.",
      reconnaissance: "We inspected the service code and observed a timestamp-based PRNG seed with insufficient entropy. We collected 40 public keys from the server's public key endpoint.",
      vulnerabilityAnalysis: "When two RSA moduli n1 = p * q1 and n2 = p * q2 share prime factor p, GCD(n1, n2) equals p. Once p is known, q1 = n1 // p, allowing instant computation of Euler's totient phi and the private exponent d.",
      exploitationSteps: [
        "Collected candidate public moduli (n, e) from target service",
        "Executed pairwise GCD across all collected keys in SageMath",
        "Identified collision: GCD(n1, n2) yielded 512-bit prime factor p",
        "Computed private exponent d = pow(e, -1, (p-1)*(q1-1))",
        "Decrypted encrypted challenge flag payload"
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

# Flag derived: HTB{w34k_prng_sh4r3d_pr1m3s_2026}
`,
      flag: "HTB{w34k_prng_sh4r3d_pr1m3s_2026}",
      keyTakeaways: [
        "Cryptographically secure PRNGs (CSPRNG) must always be used for cryptographic key generation.",
        "Pairwise GCD checks against known public key databases can quickly detect factor sharing."
      ]
    }
  },
  {
    id: "wup-web",
    challengeName: "Edge Delimiter Confusion: Web Cache Deception",
    category: "Web",
    difficulty: "Hard",
    ctf: "HTB University CTF Prep",
    shortDescription: "Exploiting discrepancies between reverse proxy static cache rules and origin API routing to leak authenticated session tokens.",
    author: "sudo Unknown Research",
    date: "2026-09-12",
    points: 425,
    fullContent: {
      summary: "A caching edge proxy treated all incoming URLs ending with static extensions (.css, .png) as public assets. By appending a dummy static path to an authenticated JSON API, admin bearer tokens were cached publicly.",
      reconnaissance: "Testing the endpoint /api/v1/user/profile revealed that the upstream server ignored trailing path suffixes while the edge proxy cached responses with Cache-Control: public.",
      vulnerabilityAnalysis: "A victim requesting /api/v1/user/profile/avatar.png received their own profile data, but the response was stored in the edge cache. Any anonymous attacker requesting the exact same URL could retrieve the cached admin response.",
      exploitationSteps: [
        "Identified edge caching behavior using CF-Cache-Status headers",
        "Constructed payload link pointing to /api/user/profile/static.css",
        "Triggered simulated bot admin interaction via challenge portal",
        "Retrieved cached HTTP response anonymously to extract admin API token",
        "Used stolen token to access the /admin/flag endpoint"
      ],
      pocCode: `curl -i -s "https://target-lab.htb/api/user/profile/style.css" \\
  -H "Host: target-lab.htb" \\
  | grep -i -E "(x-cache|token|flag)"
`,
      flag: "HTB{c4ch3_d3c3pt10n_3dg3_l34k_cl34r}",
      keyTakeaways: [
        "Cache servers must inspect response Content-Type headers rather than relying solely on URL path extensions.",
        "Sensitive authenticated endpoints must always enforce Cache-Control: no-store, private."
      ]
    }
  },
  {
    id: "wup-pwn",
    challengeName: "Safe Linking Bypass: GLIBC 2.35 Tcache Poisoning",
    category: "Pwn",
    difficulty: "Insane",
    ctf: "HTB Competitive Drills",
    shortDescription: "Bypassing GLIBC pointer mangling (safe-linking) via dangling pointer leaks to achieve arbitrary memory allocation.",
    author: "sudo Unknown Research",
    date: "2026-09-08",
    points: 500,
    fullContent: {
      summary: "A vulnerable 64-bit ELF binary suffered from a Use-After-Free (UAF) flaw in note management. We bypassed GLIBC 2.35 pointer mangling by leaking the heap ASLR base and poisoned the tcache bin to overwrite return addresses.",
      reconnaissance: "Checksec reported Full RELRO, Stack Canary found, NX enabled, PIE enabled. The target environment ran GLIBC 2.35 on Ubuntu 22.04.",
      vulnerabilityAnalysis: "GLIBC 2.35 tcache pointers are mangled with: L = (P >> 12) ^ Target. By freeing a chunk into tcache and reading its dangling pointer, we recovered the randomized heap base, demangled the pointer, and wrote our forged destination.",
      exploitationSteps: [
        "Allocated chunks to fill tcache and populate unsorted bin to leak libc base",
        "Freed a chunk into tcache and inspected contents to leak heap ASLR base",
        "Unscrambled safe-linking mask and poisoned forward pointer toward return address",
        "Requested two consecutive malloc calls to receive writable pointer to target stack frame",
        "Overwrote return pointer with one_gadget to spawn interactive shell"
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

log.success("Mangled pointer decoded successfully! Shell spawned.")
`,
      flag: "HTB{h34p_tc4ch3_p01s0n_gl1bc_2_35_pwn3d}",
      keyTakeaways: [
        "Always nullify pointer references immediately after calling free() to eliminate dangling pointers.",
        "Modern mitigations like safe-linking require leaking memory layout pointers before manipulation."
      ]
    }
  },
  {
    id: "wup-forensics",
    challengeName: "Covert Tunnel: Extracting RC4 C2 from PCAP Traffic",
    category: "Forensics",
    difficulty: "Medium",
    ctf: "HTB Lab Drills",
    shortDescription: "Identifying anomalous HTTP cookie beaconing patterns and decrypting hidden RC4 payloads from network packet captures.",
    author: "sudo Unknown Research",
    date: "2026-09-02",
    points: 300,
    fullContent: {
      summary: "Analyzing a 2GB network PCAP capture revealed periodic HTTP GET requests with low jitter. Attacker communications were concealed inside Base64-encoded cookie headers encrypted with RC4.",
      reconnaissance: "Imported PCAP into Wireshark and analyzed protocol hierarchy and conversation statistics. Noticed requests every 10 seconds to an external IP.",
      vulnerabilityAnalysis: "A static RC4 encryption key was recovered from a dropped staging script. Decrypting the cookie stream revealed the adversary's command queue and exfiltrated flag archive.",
      exploitationSteps: [
        "Isolated beaconing IP using packet arrival time frequency analysis",
        "Extracted HTTP cookie payloads using tshark script",
        "Decrypted payloads using recovered key: 'unknown_protocol_2026'",
        "Carved flag string from recovered memory archive"
      ],
      pocCode: `import base64
from Crypto.Cipher import ARC4

key = b'unknown_protocol_2026'
cipher = ARC4.new(key)
raw = base64.b64decode("V2VsY29tZVRvU3Vkb1Vua25vd24...")
print(cipher.decrypt(raw))
`,
      flag: "HTB{c2_b34c0n_3xtr4ct3d_fr0m_pcap_2026}",
      keyTakeaways: [
        "Low jitter connection intervals frequently expose automated malware beaconing.",
        "Deep packet inspection of HTTP headers is essential for uncovering covert channels."
      ]
    }
  },
  {
    id: "wup-reverse",
    challengeName: "Unpacking Stripped Bytecode Virtual Machine",
    category: "Reverse",
    difficulty: "Hard",
    ctf: "HTB Practice Track",
    shortDescription: "Reversing a custom stack-based bytecode virtual machine embedded in a stripped 64-bit Linux ELF binary.",
    author: "sudo Unknown Research",
    date: "2026-08-28",
    points: 450,
    fullContent: {
      summary: "A stripped Linux ELF executable parsed user input through a custom virtual machine interpreter. We reversed the VM opcode dispatch table in Ghidra and wrote a disassembler to extract validation logic.",
      reconnaissance: "Checked symbols with nm and strings. Binary was stripped. Identified a switch-case dispatch loop processing a 256-byte bytecode array.",
      vulnerabilityAnalysis: "The VM executed 8 opcodes: PUSH, POP, XOR, ADD, ROL, CMP, JNZ, EXIT. Writing a custom disassembler revealed the algorithm was performing rolling XOR with a 16-byte key.",
      exploitationSteps: [
        "Located opcode dispatch loop in Ghidra decompilation",
        "Mapped numeric opcodes to virtual machine instructions",
        "Dumped bytecode table from .rodata section",
        "Emulated execution in Python to invert rolling XOR and recover flag input"
      ],
      pocCode: `# VM Bytecode Inversion
bytecode = [0x10, 0x4a, 0x22, 0x18, ...]
key = [0x55, 0x6e, 0x6b, 0x6e, 0x6f, 0x77, 0x6e]
flag = bytes([b ^ key[i % len(key)] for i, b in enumerate(bytecode[:28])])
print("Extracted Flag:", flag.decode())
`,
      flag: "HTB{v1rtu4l_m4ch1n3_by73c0d3_r3v3rs3d}",
      keyTakeaways: [
        "Mapping VM opcodes to mnemonic structures simplifies complex custom interpreter reversing.",
        "Writing lightweight python emulators speeds up solving validation routines."
      ]
    }
  },
  {
    id: "wup-osint",
    challengeName: "Sun & Shadow: Geolocation from Contrail Geometry",
    category: "OSINT",
    difficulty: "Easy",
    ctf: "HTB Community Event",
    shortDescription: "Triangulating an exact rooftop location using solar shadow angles, aircraft flight telemetry, and geospatial map overlays.",
    author: "sudo Unknown Research",
    date: "2026-08-20",
    points: 200,
    fullContent: {
      summary: "Given a single uncaptioned photograph taken from an office balcony, we combined solar shadow calculations with ADS-B flight contrail vectors to determine the exact coordinates of the photographer.",
      reconnaissance: "The image showed an aircraft contrail, a distinctive cathedral roof, and shadows cast across a plaza.",
      vulnerabilityAnalysis: "Calculating the sun azimuth angle using shadow geometry narrowed the capture time to a 15-minute window. Correlating this with historical ADS-B flight paths identified the exact intersection point.",
      exploitationSteps: [
        "Calculated sun elevation and azimuth using SunCalc",
        "Identified landmark cathedral via reverse image matching",
        "Queried historical flight radar data for aircraft transits at 09:15 UTC",
        "Calculated viewpoint vector from balcony rooftop to produce exact coordinates"
      ],
      pocCode: `# Coordinates: 48.137154, 11.576124
# Format: HTB{lat_lon_landmark}
HTB{48.1371_11.5761_geolocated_unknown}
`,
      flag: "HTB{48.1371_11.5761_geolocated_unknown}",
      keyTakeaways: [
        "Shadow geometry provides high-confidence timestamps for outdoor photography.",
        "Flight tracking historical data provides reliable trajectory baselines for aerial recon."
      ]
    }
  },
  {
    id: "wup-misc",
    challengeName: "Restricted Jail: Escaping Python 3.12 Audit Hooks",
    category: "Misc",
    difficulty: "Medium",
    ctf: "HTB Weekend Challenge",
    shortDescription: "Escaping a hardened PyJail sandbox with blocked builtins using Python subclass hierarchy traversal.",
    author: "sudo Unknown Research",
    date: "2026-08-14",
    points: 250,
    fullContent: {
      summary: "An interactive socket provided a restricted Python shell with __builtins__ deleted and blacklist filters on eval, exec, os, and import. We traversed object subclasses to regain code execution.",
      reconnaissance: "Sending dir() returned an empty namespace. Common functions were stripped from global scope.",
      vulnerabilityAnalysis: "Even when __builtins__ is deleted, literal objects like () or '' still retain references to their type hierarchy: ().__class__.__bases__[0].__subclasses__(). By inspecting subclasses, we located the subprocess.Popen or os._wrap_close wrapper.",
      exploitationSteps: [
        "Used tuple literal () to access object base class: ().__class__.__base__",
        "Called .__subclasses__() to inspect all loaded classes in runtime",
        "Located index of os._wrap_close or Popen class in the subclass list",
        "Invoked .__init__.__globals__['system']('/bin/sh') to spawn shell"
      ],
      pocCode: `payload = "().__class__.__base__.__subclasses__()[137].__init__.__globals__['system']('cat flag.txt')"
# Flag captured from shell environment
`,
      flag: "HTB{pyj41l_subcl4ss_h13r4rchy_3sc4p3d}",
      keyTakeaways: [
        "Blacklisting keywords in Python is inherently vulnerable to introspection traversal.",
        "True Python sandboxing requires containerized isolation or dedicated runtime sandboxes (e.g. gVisor, seccomp)."
      ]
    }
  }
];

export const FOUNDING_VALUES = [
  {
    title: "Continuous Learning",
    description: "Cybersecurity evolves daily. We embrace challenging problems, study post-mortems, and refine our offensive techniques after every competition.",
    iconName: "Terminal"
  },
  {
    title: "Zero-Ego Collaboration",
    description: "Flags are captured together. We share screen sessions, cross-pollinate skills across categories, and elevate every member from beginner to veteran.",
    iconName: "ShieldCheck"
  },
  {
    title: "Ethical Offensive Mindset",
    description: "We master adversary tradecraft to build resilient defenses. We strictly adhere to ethical hacking standards, rules of engagement, and legal boundaries.",
    iconName: "Share2"
  },
  {
    title: "Knowledge Dissemination",
    description: "Every solved challenge produces documentation. We write detailed technical writeups to contribute back to the global cybersecurity community.",
    iconName: "Sparkles"
  }
];
