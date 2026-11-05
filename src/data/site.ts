export const site = {
  name: 'Saloni Dalal',
  role: 'Machine learning engineer & researcher',
  support:
    'Agentic systems, multimodal detection, and applied GenAI — building tools that turn research into working pipelines.',
  url: 'https://salonidalal.com',
  description:
    'Saloni Dalal — machine learning engineer & researcher. Agentic systems, multimodal detection, and applied GenAI.',
};

export type ExperienceItem = {
  org: string;
  years: string;
  scope: string;
  href?: string;
  logo: string;
  logoAlt: string;
};

export const experience: ExperienceItem[] = [
  {
    org: 'General Motors — Cruise Automation',
    years: '2026',
    scope: 'self-improving agentic systems, eval harnesses, production pipelines',
    href: 'https://www.getcruise.com/',
    logo: '/logos/cruise.svg',
    logoAlt: 'Cruise',
  },
  {
    org: 'Cyber-Human-Physical Systems (CHPS) Lab, UC Davis',
    years: '2025/26',
    scope: 'multimodal wildfire detection on UAV hardware (YOLO11)',
    href: 'https://www.ucdavis.edu/',
    logo: '/logos/ucdavis.svg',
    logoAlt: 'UC Davis',
  },
  {
    org: 'Anoki AI',
    years: '2024',
    scope: 'GenAI data pipelines & multimodal prompt systems for ad generation',
    logo: '/logos/anoki.svg',
    logoAlt: 'Anoki AI',
  },
  {
    org: 'Dee Lab, Rice University',
    years: '2023/25',
    scope: 'PaleoIgnition paleoclimate tools; COVID × weather ARIMA modeling',
    href: 'https://www.rice.edu/',
    logo: '/logos/rice.svg',
    logoAlt: 'Rice University',
  },
];

export type EducationItem = {
  school: string;
  years: string;
  line: string;
  href?: string;
  logo: string;
  logoAlt: string;
};

export const education: EducationItem[] = [
  {
    school: 'University of California, Davis',
    years: '2025/27',
    line: 'MS Computer Science (AI/ML)',
    href: 'https://www.ucdavis.edu/',
    logo: '/logos/ucdavis.svg',
    logoAlt: 'UC Davis',
  },
  {
    school: 'Rice University',
    years: '2021/25',
    line: 'BS Computer Science',
    href: 'https://www.rice.edu/',
    logo: '/logos/rice.svg',
    logoAlt: 'Rice University',
  },
];

export type ProjectItem = {
  name: string;
  blurb: string;
  href?: string;
};

export const projects: ProjectItem[] = [
  {
    name: 'AutoJobTracker',
    blurb: 'agentic job-app tracker across Gmail, Handshake, and Calendar',
  },
  {
    name: 'DeepTimeGuessr',
    blurb: 'LLaVA model that guesses year & place from images (~42% over humans)',
  },
  {
    name: 'PaleoIgnition',
    blurb: 'lightning reconstructions across 21,000 years for classroom use',
  },
];

/** Email parts kept separate for markup obfuscation */
export const emailParts = {
  user: 'saloni10.dalal',
  domain: 'gmail.com',
};

export const links = [
  { label: 'email', kind: 'email' as const },
  {
    label: 'linkedin',
    kind: 'external' as const,
    href: 'https://www.linkedin.com/in/salonikdalal',
  },
  {
    label: 'github',
    kind: 'external' as const,
    href: 'https://github.com/sd9616',
  },
];
