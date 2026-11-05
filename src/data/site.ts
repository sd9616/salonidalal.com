export const site = {
  name: 'Saloni Dalal',
  role: 'Machine learning engineer & researcher.',
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
  logoClass?: string;
};

/** Short org labels — Jack-style rows need names that fit on one line */
export const experience: ExperienceItem[] = [
  {
    org: 'Cruise [GM]',
    years: '2026',
    scope: 'self-improving agentic systems, eval harnesses',
    href: 'https://www.gm.com/',
    logo: '/logos/cruise.png',
    logoAlt: 'Cruise logo',
  },
  {
    org: 'CHPS Lab',
    years: '2025/26',
    scope: 'multimodal wildfire detection on UAV hardware',
    href: 'https://www.cphslab.com/',
    logo: '/logos/ucdavis.png',
    logoAlt: 'UC Davis logo',
  },
  {
    org: 'Anoki AI',
    years: '2024',
    scope: 'GenAI data pipelines & multimodal prompt systems',
    logo: '/logos/anoki.png',
    logoAlt: 'Anoki AI logo',
  },
  {
    org: 'Dee Lab',
    years: '2023/25',
    scope: 'PaleoIgnition tools; COVID × weather modeling',
    href: 'https://www.rice.edu/',
logo: '/logos/rice.png',
    logoAlt: 'Rice University logo',
    logoClass: 'scale-[0.8]',
  },
];

export type EducationItem = {
  school: string;
  years: string;
  line: string;
  href?: string;
  logo: string;
  logoAlt: string;
  logoClass?: string;
};

export const education: EducationItem[] = [
  {
    school: 'UC Davis',
    years: '2025/27',
    line: 'MS Computer Science (AI/ML)',
    href: 'https://www.ucdavis.edu/',
    logo: '/logos/ucdavis.png',
    logoAlt: 'UC Davis logo',
  },
  {
    school: 'Rice University',
    years: '2021/25',
    line: 'BS Computer Science',
    href: 'https://www.rice.edu/',
logo: '/logos/rice.png',
    logoAlt: 'Rice University logo',
    logoClass: 'scale-[0.8]',
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
    blurb: 'LLaVA model that guesses year & place from images',
  },
  {
    name: 'PaleoIgnition',
    blurb: 'lightning reconstructions across 21,000 years',
  },
];

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
