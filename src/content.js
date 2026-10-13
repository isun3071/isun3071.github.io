// All page copy lives here. BRIEF.md sets the word budget for each piece.

export const hero = {
  name: 'Ian Sun',
  line: 'I build security graders and frameworks that catch deception.',
  terms: [
    'row level security: off',
    'prompt injection',
    'no content security policy',
    'tool call poisoning',
    'synthetic identity',
    'banned tactic in helper lemma',
  ],
}

export const filters = [
  { id: 'all', label: 'All' },
  { id: 'security', label: 'Security' },
  { id: 'ai', label: 'AI' },
  { id: 'teaching', label: 'Teaching' },
]

export const projects = [
  {
    name: 'Sloptic',
    tags: ['security'],
    line: 'Grades web apps on function, security, accessibility, and performance, and ranks each against real ones.',
    figure: { value: 1600, suffix: '+', label: 'hackathon apps graded' },
    link: { href: 'https://sloptic.org', text: 'sloptic.org' },
  },
  {
    name: 'Supavulnbase',
    tags: ['security', 'teaching'],
    line: 'A DVWA for backend-as-a-service apps, used to benchmark graders and teach Supabase security.',
    link: { href: 'https://github.com/isun3071/supavulnbase', text: 'GitHub' },
  },
  {
    name: 'Lean autograder for CS131',
    tags: ['teaching'],
    line: 'Credits any correct proof and catches banned steps hidden in helper lemmas.',
    link: { href: 'https://github.com/isun3071/lean-4-teaching', text: 'GitHub' },
    caseStudy: [
      'CS131 students write their proofs in Lean. The autograder credits any proof Lean accepts for the stated theorem, so a correct answer earns its points even when it differs from the reference.',
      'Each problem sets which tactics and theorems are allowed. The grader traces every dependency of a submission, so a banned step inside a helper lemma is caught the same way as one in the main proof.',
      'Grading used to time out after more than an hour. It now finishes in about a minute.',
      'The autograder grades the course for real points.',
    ],
  },
  {
    name: 'RedHacks',
    tags: ['security', 'ai'],
    line: "Boston University's first LLM red team competition, returning in fall 2026.",
    link: { href: 'https://redhacks1.vercel.app/', text: 'April 2026 debrief' },
  },
  {
    name: 'Vibe Mill',
    tags: ['ai'],
    line: 'Mass-produced hackathon apps to show that judging rules reward artifacts. Paused.',
    figure: { value: 0.3, decimals: 2, prefix: '~$', label: 'per app' },
    link: { href: 'https://vibemill.dev', text: 'vibemill.dev' },
  },
]

export const frameworks = [
  {
    id: 'dissonance',
    name: 'The Dissonance Test',
    detail: ['A behavioral hiring control that surfaces deception before a candidate is granted access.'],
    venue: 'SecureWorld Financial Services, 2025',
  },
  {
    id: 'ddf',
    name: 'Deception Disruption Framework',
    detail: ['Detects social engineering during a live interaction without accusing anyone. It uses three probes:'],
    probes: ['Lived Experience', 'Context Change', 'Moral Reflection'],
    venue: 'Layer 8, 2026',
  },
  {
    id: 'bounded',
    name: 'Bounded vs. unbounded deception',
    detail: ['Explains why some candidates clear every hiring gate, through the stake differential.'],
    venue: 'SecureWorld Boston, 2026',
  },
  {
    id: 'labs',
    name: 'When Labs Have Stakes',
    detail: ["Practice with consequences builds judgment that curated labs don't."],
    venue: 'NICE Conference, 2026, with Dr. Faisal Abdullah',
  },
]

export const talks = [
  { date: 'Sep 2026', event: 'NIST NICE webinar', title: "Preparing Today's Students for Tomorrow's Cyber Careers" },
  { date: 'Jun 2026', event: 'NICE Conference', title: 'When Labs Have Stakes' },
  { date: 'Jun 2026', event: 'Layer 8', title: 'Deception Disruption Framework' },
  {
    date: 'Apr 2026',
    event: 'SecureWorld Boston',
    href: 'https://events.secureworld.io/agenda/boston-ma-2026/',
    title: 'Workforce Identity in the Age of Remote Deception',
  },
  { date: 'Mar 2026', event: 'RSA Conference', title: 'Session host' },
  {
    date: 'Sep 2025',
    event: 'SecureWorld Financial Services',
    href: 'https://events.secureworld.io/agenda/financial-services-2-2025/',
    title: 'The Dissonance Test',
  },
]

export const jobs = [
  { title: 'Course Assistant', org: 'Boston University', dates: 'Aug 2025 – present' },
  { title: 'IT Support Specialist', org: 'Boston University', dates: 'Oct 2024 – present' },
  { title: 'Technical Development Lead', org: 'Bright Future Consulting', dates: 'Jul – Aug 2026' },
  { title: 'Peer Reviewer', org: 'CyberWatch Digital Press', dates: 'Jan – May 2026' },
  { title: 'Intern, IT and Network Infrastructure', org: 'U-Combination Technology', dates: 'Sep – Dec 2023' },
]

export const degrees = [
  { title: 'MS Computer Science, Cybersecurity', org: 'Boston University', dates: 'Expected May 2027' },
  { title: 'BA Computer Science', org: 'Boston University', dates: 'May 2026' },
]

export const certifications = ['PNPT', 'CAISP', 'AWS Certified AI Practitioner', 'Security+', 'Network+', 'ISC2 CC']

export const lab = 'A Proxmox Active Directory lab that still runs and now hosts Sloptic.'

export const contact = [
  { label: 'Email', href: 'mailto:iansun20@gmail.com', text: 'iansun20@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/iansun20', text: 'linkedin.com/in/iansun20' },
  { label: 'GitHub', href: 'https://github.com/isun3071', text: 'github.com/isun3071' },
]
