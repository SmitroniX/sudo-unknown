export interface TeamMember {
  id: string;
  name: string;
  role: string;
  htbUsername: string;
  htbUrl: string;
  avatar: string;
  github?: string;
  linkedin?: string;
  discord?: string;
  specialties: string[];
  bio: string;
}

export interface StatisticItem {
  id: string;
  label: string;
  value: number;
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
  eventType: 'Jeopardy' | 'Attack-Defense' | 'Global HTB CTF' | 'University CTF' | 'Special Event';
  result: string;
  rankBadge?: string;
  description: string;
  highlights: string[];
}

export interface Writeup {
  id: string;
  title: string;
  category: 'Web' | 'Pwn' | 'Crypto' | 'Forensics' | 'Reverse' | 'OSINT' | 'Misc';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane';
  ctf: string;
  date: string;
  author: string;
  points: number;
  shortDescription: string;
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
  subtitle: "Cybersecurity Capture The Flag Team // Hack The Box Competitive Division",
  htbTeamUrl: "https://ctf.hackthebox.com/team/overview/331386",
  githubUrl: "https://github.com/sudo-unknown",
  discordUrl: "https://discord.gg/sudo-unknown",
  linkedinUrl: "https://www.linkedin.com/company/sudo-unknown-ctf",
  contactEmail: "contact@sudounknown.team",
  foundedYear: 2024,
  currentYear: 2026,
  status: "ACTIVE_OPERATION",
  hqLocation: "Global // Decentralized",
};

/**
 * EDITABLE CENTRAL STATISTICS
 * Update these numbers as the team captures more flags and completes CTF events.
 */
export const STATISTICS: StatisticItem[] = [
  {
    id: "ctfs",
    label: "CTFs Participated",
    value: 24,
    suffix: "+",
    description: "Competed across global university, open, and HTB seasonal events",
    iconName: "Trophy"
  },
  {
    id: "flags",
    label: "Flags Captured",
    value: 412,
    suffix: "",
    description: "Verified jeopardy and attack-defense challenge flags solved",
    iconName: "Flag"
  },
  {
    id: "members",
    label: "Team Members",
    value: 14,
    suffix: "",
    description: "Active core operators, offensive researchers, and analysts",
    iconName: "Users"
  },
  {
    id: "solved",
    label: "Challenges Solved",
    value: 580,
    suffix: "+",
    description: "Hack The Box machines, endgames, fortresses, and CTF modules",
    iconName: "CheckCircle2"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "web",
    name: "WEB",
    shortCode: "0xWEB",
    description: "Exploiting application logic, authentication flaws, SSRF, SQLi, SSTI, Prototype Pollution, and modern API infrastructures.",
    keyTools: ["Burp Suite Pro", "Caido", "ffuf", "SQLMap", "Turbo Intruder"],
    topics: ["OAuth2 / JWT Bypass", "SSRF to Cloud Metadata", "Deserialization Bugs", "GraphQL Injection"],
    iconName: "Globe",
    difficultyFocus: "Advanced"
  },
  {
    id: "pwn",
    name: "PWN",
    shortCode: "0xPWN",
    description: "Binary exploitation, memory corruption, stack overflows, heap metadata corruption, ROP chain construction, and kernel pwn.",
    keyTools: ["pwntools", "GDB + GEF", "ROPgadget", "pwndbg", "libc-database"],
    topics: ["Heap Tcache Poisoning", "Format String Exploitation", "ROP & SROP Chains", "Bypassing ASLR & Canary"],
    iconName: "Cpu",
    difficultyFocus: "Expert"
  },
  {
    id: "crypto",
    name: "CRYPTO",
    shortCode: "0xCRP",
    description: "Breaking weak mathematical primitives, flawed RSA implementations, ECC invalid curve attacks, lattice reductions, and custom block ciphers.",
    keyTools: ["SageMath", "CyberChef", "Python Cryptography", "Z3 SMT Solver"],
    topics: ["Coppersmith Attacks", "Bleichenbacher Padding Oracle", "ECDSA Nonce Reuse", "AES-CBC Bit Flipping"],
    iconName: "KeyRound",
    difficultyFocus: "Advanced"
  },
  {
    id: "forensics",
    name: "FORENSICS",
    shortCode: "0xFOR",
    description: "Digital forensics and incident response, memory extraction, packet capture deep-dives, filesystem timeline reconstruction, and steganography.",
    keyTools: ["Volatility 3", "Wireshark / TShark", "Autopsy", "FTK Imager", "Eric Zimmerman Tools"],
    topics: ["Memory Dump Injections", "TLS Session Decryption", "NTFS / $MFT Forensics", "Malicious EVTX Analysis"],
    iconName: "SearchCode",
    difficultyFocus: "Intermediate"
  },
  {
    id: "reverse",
    name: "REVERSE ENGINEERING",
    shortCode: "0xREV",
    description: "Decompilation, static and dynamic binary analysis, unpacking virtual machine protections, anti-debugging evasion, and firmware analysis.",
    keyTools: ["Ghidra", "IDA Free / Pro", "x64dbg", "Binary Ninja", "dnSpy / ILSpy"],
    topics: ["Custom VM Bytecode", "Packed Executables (UPX / Themida)", "Symbol Resolution", "ARM / MIPS Architectures"],
    iconName: "Binary",
    difficultyFocus: "Expert"
  },
  {
    id: "osint",
    name: "OSINT",
    shortCode: "0xOSI",
    description: "Open source intelligence gathering, geolocation identification, metadata extraction, digital foot-printing, and social engineering forensics.",
    keyTools: ["ExifTool", "Maltego", "Spiderfoot", "Overpass Turbo", "Sherlock"],
    topics: ["Satellite Geolocation", "EXIF Camera Sensor ID", "Corporate Infrastructure Recon", "Archived Artifact Tracking"],
    iconName: "Crosshair",
    difficultyFocus: "Intermediate"
  },
  {
    id: "misc",
    name: "MISC",
    shortCode: "0xMSC",
    description: "Python sandboxes, bash jail escapes, audio steganography, esoteric programming languages, hardware hacking, and prompt injection challenges.",
    keyTools: ["Audacity", "Binwalk", "Docker", "Ghidra", "Custom Python Engines"],
    topics: ["PyJail & Restricted Shells", "Spectrogram Steganography", "Esoteric VM Emulators", "AI Security & LLM Jailbreaks"],
    iconName: "TerminalSquare",
    difficultyFocus: "Advanced"
  }
];

/**
 * ADMIN-FRIENDLY TEAM MEMBERS LIST
 * Simply copy an object to add new team members or update roles.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "0xCipher",
    role: "Team Captain & Cryptography Lead",
    htbUsername: "0xCipher",
    htbUrl: "https://app.hackthebox.com/users/0xCipher",
    avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    specialties: ["Crypto", "SageMath", "RSA", "Lattice"],
    bio: "Obsessed with mathematical flaws and breaking public-key implementations. Drives team coordination and competitive training."
  },
  {
    id: "member-2",
    name: "NullPointer",
    role: "Binary Exploitation & PWN Specialist",
    htbUsername: "NullPointer_Pwn",
    htbUrl: "https://app.hackthebox.com/users/NullPointer_Pwn",
    avatar: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    specialties: ["Pwn", "GDB", "Heap Exploits", "Kernel"],
    bio: "Reverse engineers memory allocators and crafts precise ROP chains. Lives in GEF and GEF-powered debugging environments."
  },
  {
    id: "member-3",
    name: "ByteGhost",
    role: "Web Security & Cloud Lead",
    htbUsername: "ByteGhost_HTB",
    htbUrl: "https://app.hackthebox.com/users/ByteGhost_HTB",
    avatar: "https://images.unsplash.com/photo-1510519138171-c7022134ff71?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    specialties: ["Web", "Burp Suite", "SSRF", "Cloud"],
    bio: "Specializes in chain exploits, modern full-stack web vulnerabilities, OAuth2 edge cases, and container breakout vectors."
  },
  {
    id: "member-4",
    name: "ShadowTrace",
    role: "DFIR & Network Forensics",
    htbUsername: "ShadowTrace",
    htbUrl: "https://app.hackthebox.com/users/ShadowTrace",
    avatar: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    specialties: ["Forensics", "Volatility", "Wireshark", "Memory"],
    bio: "Unravels deeply obfuscated network packet captures, recovers carved memory artifacts, and reconstructs compromise timelines."
  },
  {
    id: "member-5",
    name: "HexVortex",
    role: "Reverse Engineering Analyst",
    htbUsername: "HexVortex",
    htbUrl: "https://app.hackthebox.com/users/HexVortex",
    avatar: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    specialties: ["Reverse", "Ghidra", "Unpacking", "Assembly"],
    bio: "Specializes in reversing packed malware samples, custom bytecode virtual machines, and dissecting proprietary protocols."
  },
  {
    id: "member-6",
    name: "SpecterOS",
    role: "OSINT & Recon Lead",
    htbUsername: "SpecterOS",
    htbUrl: "https://app.hackthebox.com/users/SpecterOS",
    avatar: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    specialties: ["OSINT", "GEOINT", "SOCMINT", "Metadata"],
    bio: "Finds the needle in the haystack from satellite imagery, sun shadows, metadata remnants, and public infrastructure leaks."
  }
];

/**
 * ACHIEVEMENTS & CTF TIMELINE
 * Placeholder records that can easily be updated with live tournament results.
 */
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    ctfName: "Hack The Box Cyber Apocalypse 2025",
    date: "March 2025",
    eventType: "Global HTB CTF",
    result: "Top 8% Global Finish",
    rankBadge: "#142 / 4,200 Teams",
    description: "Week-long international jeopardy event with over 70 grueling challenges across Web, Pwn, Crypto, Forensics, and Hardware.",
    highlights: ["First-blood solve on Forensics memory injection", "Cleared all Crypto challenges including lattice crypto", "100% team participation rate"]
  },
  {
    id: "ach-2",
    ctfName: "HTB University CTF: Brains & Bytes",
    date: "December 2024",
    eventType: "University CTF",
    result: "Top 12% Academic Tier",
    rankBadge: "Tier 1 Solver",
    description: "Competitive academic CTF featuring advanced Active Directory chains, web cache poisoning, and custom Linux kernel exploitation.",
    highlights: ["Full clear on Web and Misc categories", "Solved Insane difficulty Pwn challenge with custom heap exploit"]
  },
  {
    id: "ach-3",
    ctfName: "NahamCon CTF 2024",
    date: "May 2024",
    eventType: "Jeopardy",
    result: "Top 50 Global Placement",
    rankBadge: "#48 Overall",
    description: "48-hour continuous CTF featuring creative web challenges, OSINT investigations, mobile application analysis, and scripting.",
    highlights: ["Solved 28 total challenges", "Rapid 30-minute solve on difficult PyJail escape"]
  },
  {
    id: "ach-4",
    ctfName: "Hack The Box Business CTF (Observer Division)",
    date: "July 2024",
    eventType: "Special Event",
    result: "Honorary Mention Solver",
    rankBadge: "2,450 Points",
    description: "Enterprise-focused security scenarios highlighting operational technology, SCADA, cloud posture bypass, and Active Directory persistence.",
    highlights: ["Demonstrated Cloud IAM privilege escalation bypass", "Drafted 3 comprehensive technical team writeups"]
  }
];

/**
 * CYBERSECURITY WRITEUPS
 * Interactive writeup archive with full details, code samples, and flag format.
 */
export const WRITEUPS: Writeup[] = [
  {
    id: "wup-1",
    title: "Quantum Lockout: Breaking Flawed RSA Keys",
    category: "Crypto",
    difficulty: "Medium",
    ctf: "HTB Cyber Apocalypse",
    date: "2025-03-15",
    author: "0xCipher",
    points: 350,
    shortDescription: "Exploiting shared prime factors and small public exponent leakage in a distributed authentication service.",
    fullContent: {
      summary: "In this challenge, the service generated 512-bit RSA keypairs with a flawed pseudo-random generator where multiple instances shared prime 'p'. By computing the greatest common divisor (GCD) against public moduli, we factored 'n' in fractions of a second.",
      reconnaissance: "We inspected the source code provided in app.py. The key generation routine seeded the PRNG with a 16-bit timestamp that had poor entropy. We collected multiple public moduli from the endpoint /public-keys.",
      vulnerabilityAnalysis: "Because GCD(n1, n2) returns common prime factor p when keys share primes, we did not need to run expensive integer factorization algorithms like General Number Field Sieve (GNFS). Simple Euclidean algorithm broke the encryption.",
      exploitationSteps: [
        "Collected 50 public RSA moduli from the challenge server API",
        "Calculated pairwise GCD(n_i, n_j) for all collected keys using SageMath",
        "Extracted prime p = GCD(n1, n2) and computed q = n1 // p",
        "Calculated private exponent d = pow(e, -1, (p-1)*(q-1))",
        "Decrypted ciphertext using standard PKCS#1 v1.5 padding unwrapper"
      ],
      pocCode: `import math
from Crypto.Util.number import long_to_bytes

def solve(n1, n2, e, c1):
    p = math.gcd(n1, n2)
    q = n1 // p
    phi = (p - 1) * (q - 1)
    d = pow(e, -1, phi)
    m = pow(c1, d, n1)
    return long_to_bytes(m)

# Flag returned: HTB{w34k_prng_sh4r3d_pr1m3s_f41l}
`,
      flag: "HTB{w34k_prng_sh4r3d_pr1m3s_f41l}",
      keyTakeaways: [
        "Cryptographically secure PRNGs (CSPRNG) must always be used for key generation",
        "Never allow shared seed state across concurrent microservice instances",
        "Pairwise GCD testing against historical key databases reveals shared factors instantly"
      ]
    }
  },
  {
    id: "wup-2",
    title: "Ghost in the Cache: Web Cache Deception to Account Takeover",
    category: "Web",
    difficulty: "Hard",
    ctf: "NahamCon CTF",
    date: "2024-05-20",
    author: "ByteGhost",
    points: 450,
    shortDescription: "Chaining reverse proxy path delimiter discrepancies with Cloudflare edge caching to leak admin session bearer tokens.",
    fullContent: {
      summary: "An edge reverse proxy cached all requests ending with static extensions (.css, .js, .png) regardless of the downstream application path resolving to an authenticated REST endpoint /api/user/profile.",
      reconnaissance: "Target application ran on Next.js behind an NGINX reverse caching proxy. The proxy configuration lacked strict regex boundary matching on static cache directives.",
      vulnerabilityAnalysis: "By requesting '/api/user/profile/avatar.png', the edge proxy treated the request as a static image and cached the response body for 10 minutes. When the victim admin clicked our crafted link, their private profile JSON (containing their session token and API secret) was stored in the public edge cache.",
      exploitationSteps: [
        "Identified cache hit headers: 'CF-Cache-Status: HIT' and 'Age: X'",
        "Constructed payload URL pointing to sensitive profile endpoint with dummy .png suffix",
        "Triggered simulated bot admin visit via challenge reporting portal",
        "Fetched the cached URL without authorization headers to retrieve cached admin payload",
        "Used stolen admin token to authenticate against /api/admin/flag"
      ],
      pocCode: `curl -s -X GET "https://target-ctf.com/api/user/profile/static.css" \\
  -H "Host: target-ctf.com" \\
  | jq .secret_flag`,
      flag: "HTB{c4ch3_d3c3pt10n_3dg3_l34k_pwn3d}",
      keyTakeaways: [
        "Ensure CDN and reverse proxy cache rules check Content-Type headers rather than relying solely on file extensions",
        "Enforce Cache-Control: no-store, private on all sensitive API endpoints"
      ]
    }
  },
  {
    id: "wup-3",
    title: "Echo Chamber: Modern Heap Tcache Poisoning",
    category: "Pwn",
    difficulty: "Insane",
    ctf: "HTB Brains & Bytes",
    date: "2024-12-14",
    author: "NullPointer",
    points: 500,
    shortDescription: "Exploiting Use-After-Free (UAF) in GLIBC 2.35 tcache safe-linking to overwrite __malloc_hook / exit handlers.",
    fullContent: {
      summary: "A 64-bit ELF binary permitted users to allocate, edit, and delete notes without clearing pointers. We defeated GLIBC 2.35 pointer mangling (safe-linking) and forced malloc to return an arbitrary pointer.",
      reconnaissance: "Checksec revealed Full RELRO, Canary found, NX enabled, PIE enabled. The binary ran on Ubuntu 22.04 with GLIBC 2.35.",
      vulnerabilityAnalysis: "In GLIBC 2.35, tcache next pointers are protected with safe linking: L = (P >> 12) ^ Target. By leaking heap base through a dangling pointer, we unscrambled the safe-linking mask and poisoned tcache entry.",
      exploitationSteps: [
        "Allocated 8 chunks to bypass tcache and populate unsorted bin to leak libc base",
        "Freed a chunk into tcache and read its contents to leak heap ASLR base",
        "Used dangling pointer write to craft mangled pointer pointing to target writable address",
        "Triggered two consecutive malloc calls to hijack execution flow and spawn /bin/sh"
      ],
      pocCode: `from pwn import *
# GLIBC 2.35 Safe Linking Bypass
def protect(target, pos):
    return (pos >> 12) ^ target

# Exploit script sends payload and interacts with spawned shell
log.success("Spawned shell! Flag extracted.")
`,
      flag: "HTB{h34p_tc4ch3_p01s0n_gl1bc_2_35_cl34r3d}",
      keyTakeaways: [
        "Always set freed pointers to NULL immediately after deallocation",
        "Understand GLIBC pointer protection mechanisms to build resilient exploit chains"
      ]
    }
  },
  {
    id: "wup-4",
    title: "Shadow in the Wire: Unraveling Encrypted C2 Exfiltration",
    category: "Forensics",
    difficulty: "Medium",
    ctf: "HTB Cyber Apocalypse",
    date: "2025-03-12",
    author: "ShadowTrace",
    points: 300,
    shortDescription: "Reconstructing Cobalt Strike beacon Malleable C2 communications from a 4GB PCAP capture using custom Lua dissectors.",
    fullContent: {
      summary: "Network capture contained thousands of legitimate HTTPS and DNS packets hiding a covert C2 channel. By analyzing connection beaconing intervals and entropy, we uncovered an RC4-encrypted metadata blob hidden in HTTP cookie headers.",
      reconnaissance: "Imported PCAP into Wireshark and extracted statistical conversations. Filtered for high periodic frequency requests with low jitter.",
      vulnerabilityAnalysis: "Attacker utilized a static RC4 encryption key embedded in the Cobalt Strike malleable C2 profile. Once the key was recovered from an initial drop payload, we decrypted the entire session history.",
      exploitationSteps: [
        "Analyzed inter-arrival packet times to isolate beaconing IP address",
        "Extracted base64-encoded cookie strings from HTTP GET requests",
        "Decrypted payloads using recovered RC4 key 'phantom_protocol_2025'",
        "Carved exfiltrated document containing internal team flag"
      ],
      pocCode: `import base64
from Crypto.Cipher import ARC4

key = b'phantom_protocol_2025'
encrypted_b64 = "U2FsdGVkX1+...=="
cipher = ARC4.new(key)
decrypted = cipher.decrypt(base64.b64decode(encrypted_b64))
print(decrypted)
`,
      flag: "HTB{c2_b34c0n_3xtr4ct3d_fr0m_pws_tr4ff1c}",
      keyTakeaways: [
        "Frequency analysis and jitter calculation reveal automated beaconing despite encryption",
        "Metadata analysis of HTTP headers is critical for identifying covert exfiltration channels"
      ]
    }
  },
  {
    id: "wup-5",
    title: "The Phantom Key: Reversing Stripped Rust Malware",
    category: "Reverse",
    difficulty: "Hard",
    ctf: "HTB Brains & Bytes",
    date: "2024-12-16",
    author: "HexVortex",
    points: 400,
    shortDescription: "Decompiling a stripped Rust ELF binary featuring anti-disassembly tricks, custom string XOR routines, and thread timing checks.",
    fullContent: {
      summary: "A challenge binary compiled with rustc --release with all symbols stripped and inline assembly anti-debugging traps. We restored structure definitions in Ghidra and emulated the decryption routine.",
      reconnaissance: "File command indicated 64-bit LSB pie executable x86-64, dynamically linked, stripped. Strings showed standard Rust runtime panics.",
      vulnerabilityAnalysis: "A custom VM routine processed an encrypted array of 32 bytes using a 4-round substitution-permutation network. By hooking execution in QEMU, we dumped intermediate state.",
      exploitationSteps: [
        "Identified main entry point through Rust start shim (__rust_begin_short_backtrace)",
        "Wrote Ghidra script to demangle compiler-generated labels and string slices",
        "Patched out ptrace PTRACE_TRACEME self-detection check",
        "Extracted key schedule and inverted S-box table to recover flag input"
      ],
      pocCode: `# Ghidra Python Script Extract
key = [0x5f, 0x3d, 0x12, 0x9a, ...]
flag = bytes([b ^ key[i % len(key)] for i, b in enumerate(enc)])
print("Flag:", flag.decode())
`,
      flag: "HTB{r3v_rust_str1pp3d_b1n_d3m4ngl3d}",
      keyTakeaways: [
        "Rust binaries produce dense assembly; isolating string slices (&str) provides immediate anchors",
        "Emulation via QEMU or Unicorn engine speeds up complex S-box reverse engineering"
      ]
    }
  },
  {
    id: "wup-6",
    title: "Flight Path: Pinpointing Covert Safehouse via OSINT",
    category: "OSINT",
    difficulty: "Easy",
    ctf: "NahamCon CTF",
    date: "2024-05-18",
    author: "SpecterOS",
    points: 200,
    shortDescription: "Triangulating an exact rooftop location using flight telemetry contrails, solar shadow angles, and open municipal geospatial data.",
    fullContent: {
      summary: "A single uncaptioned photograph taken from an apartment window showed an aircraft contrail, a distinctive church steeple, and morning shadows.",
      reconnaissance: "Analyzed aircraft heading using FlightRadar24 historical ADS-B replay for the estimated time of day based on SunCalc shadow geometry.",
      vulnerabilityAnalysis: "Combined visible architectural landmark with ADS-B flight waypoint intersections to narrow candidate coordinates to a single city block.",
      exploitationSteps: [
        "Extracted camera focal length and lens specs from stripped EXIF remnants",
        "Calculated sun azimuth (114.2 deg) and elevation using shadow lengths on nearby lampposts",
        "Matched aircraft vector with FlightRadar24 flight LH430 descending at 08:42 UTC",
        "Identified rooftop address via municipal 3D building viewer"
      ],
      pocCode: `# Coordinates: 48.137154, 11.576124
# Format: HTB{lat_lon_landmark}
HTB{48.1371_11.5761_frauenkirche_munich}
`,
      flag: "HTB{48.1371_11.5761_frauenkirche_munich}",
      keyTakeaways: [
        "Solar azimuth analysis narrows time of capture to within 10 minutes",
        "Open ADS-B historical data provides reliable intersection vectors for aerial photography"
      ]
    }
  }
];

export const TEAM_VALUES = [
  {
    title: "Continuous Learning",
    description: "Cybersecurity evolves daily. We embrace challenging problems, study post-mortems, and refine our exploitation techniques after every competition.",
    iconName: "BookOpen"
  },
  {
    title: "Zero-Ego Collaboration",
    description: "Flags are captured together. We share screen sessions, cross-pollinate skills across categories, and elevate every member from beginner to veteran.",
    iconName: "Handshake"
  },
  {
    title: "Ethical Offensive Mindset",
    description: "We master adversary tradecraft to build resilient defenses. We strictly adhere to ethical hacking standards, rules of engagement, and legal boundaries.",
    iconName: "ShieldCheck"
  },
  {
    title: "Knowledge Dissemination",
    description: "Every solved challenge produces documentation. We write detailed technical writeups to contribute back to the global cybersecurity community.",
    iconName: "FileText"
  }
];

export const RECRUITMENT_BENEFITS = [
  {
    title: "Beginners Welcome",
    description: "You don't need to be a seasoned hacker to join. Passion, curiosity, and willingness to learn matter more than existing accolades.",
    iconName: "Sparkles"
  },
  {
    title: "Knowledge Sharing",
    description: "Access our internal repository of exploit templates, custom tooling, cheat sheets, and recorded practice sessions.",
    iconName: "Share2"
  },
  {
    title: "Team Collaboration",
    description: "Live Discord war rooms during competitions, collaborative CTFd tracking, and paired challenge solving.",
    iconName: "Radio"
  },
  {
    title: "Hack The Box Labs",
    description: "Coordinated machine clears, fortress engagements, and Pro Labs sessions on our dedicated team roster.",
    iconName: "Terminal"
  }
];
