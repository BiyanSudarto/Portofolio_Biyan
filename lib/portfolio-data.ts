export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const highlights = [
  'Mechanics Design',
  'Progression Design',
  'Gameplay Systems',
  'Game Balancing',
  'MDA Framework',
]

export const skillGroups = [
  {
    title: 'Design',
    skills: [
      { name: 'Game Design', level: 92 },
      { name: 'Gameplay Mechanics', level: 94 },
      { name: 'Progression Design', level: 90 },
      { name: 'Level Design', level: 84 },
      { name: 'System Design', level: 88 },
    ],
  },
  {
    title: 'Systems & Balance',
    skills: [
      { name: 'Game Economy', level: 82 },
      { name: 'Balancing', level: 86 },
      { name: 'Player Experience', level: 91 },
      { name: 'Problem Solving', level: 89 },
    ],
  },
  {
    title: 'Production Tools',
    skills: [
      { name: 'Unity', level: 87 },
      { name: 'Unreal Engine', level: 70 },
      { name: 'C#', level: 83 },
      { name: 'Figma', level: 80 },
      { name: 'Git', level: 78 },
    ],
  },
]

export const projectFilters = [
  'All',
  'Game Design',
  'Mechanics',
  'Progression',
  'Programming',
] as const

export type ProjectFilter = (typeof projectFilters)[number]

export type Project = {
  title: string
  subtitle?: string
  genre: string
  platform: string
  role: string
  image: string
  categories: ProjectFilter[]
  responsibilities: string[]
  result: string
}

export const projects: Project[] = [
  {
    title: 'Project SEA',
    genre: '2D Platformer',
    platform: 'Desktop',
    role: 'Game Designer',
    image: '/images/project-sea.png',
    categories: ['Game Design', 'Mechanics'],
    responsibilities: [
      'Design quiz gameplay loop',
      'Remove Wrong Answer mechanic',
      'Slow Time mechanic',
      'Second Chance mechanic',
      'Question timer tuning',
    ],
    result: 'Interactive educational gameplay with strategic decision making.',
  },
  {
    title: 'Project MaKeLar',
    genre: 'Maze Arcade',
    platform: 'Desktop',
    role: 'Game Designer',
    image: '/images/project-makelar.png',
    categories: ['Game Design', 'Progression'],
    responsibilities: [
      'Map design',
      'Banana collection system',
      'Countdown timer',
      'Player progression',
    ],
    result: 'Simple but addictive arcade gameplay.',
  },
  {
    title: 'ECOSITY',
    genre: 'Simulation Management',
    platform: 'Desktop',
    role: 'Game Designer',
    image: '/images/project-ecosity.png',
    categories: ['Game Design', 'Progression', 'Mechanics'],
    responsibilities: [
      'Quest system',
      'Shop system',
      'Gardening system',
      'Water system',
      'Energy management',
      'Upgrade system',
    ],
    result: 'Complex simulation mechanics with satisfying progression.',
  },
  {
    title: 'Fix The Spaceship',
    subtitle: 'Nilawarsa Studio',
    genre: 'Puzzle Platformer',
    platform: 'Desktop',
    role: 'Game Programmer',
    image: '/images/project-spaceship.png',
    categories: ['Programming', 'Mechanics'],
    responsibilities: [
      'Character controller',
      'Enemy AI & laser trap',
      'Moving platform',
      'Autosave & pause menu',
      'Level lock & puzzle system',
      'UI programming & scene management',
    ],
    result: 'Complete gameplay implementation with modular architecture.',
  },
  {
    title: 'Catering Financial System',
    subtitle: 'Cash Flow & Order Management Web App',
    genre: 'Financial Tech / Web App',
    platform: 'Web (Responsive)',
    role: 'Full Stack Developer',
    image: '/images/pembukuan-katering.png',
    categories: ['Programming', 'Progression'],
    responsibilities: [
      'Automated gross & net profit algorithms based on HPP and operational costs',
      'Real-time tracking for cash flow, business capital, and accounts receivable',
      'Responsive modern financial dashboard UI built with Bootstrap 5 and PHP',
      'Relational database architecture for orders, income, and expense management',
    ],
    result: 'Eliminated manual financial calculation errors and accelerated monthly profit reporting for catering business operations.',
  },
  {
    title: 'Katering.co.id',
    subtitle: 'Catering Management & Menu System',
    genre: 'Web Application',
    platform: 'Web / Responsive',
    role: 'Full-Stack Developer',
    image: '/images/katering-remake.png',
    categories: ['Programming', 'Progression'],
    responsibilities: [
      'Menu CRUD & dynamic inventory management',
      'Real-time stock adjustment system',
      'Database schema design using MySQL',
      'Responsive admin dashboard & client UI with Bootstrap 5',
    ],
    result: 'A responsive and efficient catering platform that automates menu management and stock tracking.',
  },
  {
    title: 'REDLIFE',
    subtitle: 'Survival Strategy Game',
    genre: 'Sci-Fi Survival',
    platform: 'PC / Desktop',
    role: 'Game Designer',
    image: '/images/project-redlife.png',
    categories: ['Game Design', 'Mechanics'],
    responsibilities: [
      'Designed core survival loop and resource depletion systems',
      'Defined player progression through base expansion and exploration',
      'Balanced environmental hazards with reward pacing',
      'Polished UI feedback for health, oxygen, and mission status',
    ],
    result: 'Crafted an immersive survival experience with strategic risk-reward gameplay.',
  },
]

export const processSteps = [
  {
    title: 'Research',
    description: 'Study the audience, references, and constraints before a single mechanic exists.',
  },
  {
    title: 'Concept Design',
    description: 'Define the core fantasy, pillars, and the loop the whole game will orbit.',
  },
  {
    title: 'Design',
    description: 'Translate the concept into rules, verbs, and systems with clear feedback.',
  },
  {
    title: 'Prototype',
    description: 'Build the smallest playable slice that proves whether the loop is fun.',
  },
  {
    title: 'testing',
    description: 'Watch real players, collect data, and separate opinions from behaviour.',
  },
  {
    title: 'Iteration',
    description: 'Retune numbers, pacing, and progression until mastery feels rewarding.',
  },
  {
    title: 'Final Design',
    description: 'Document the system so the team can ship it consistently at quality.',
  },
]

export const experiences = [
  {
    period: '2024 — Present',
    role: 'Game Designer · Mechanics & Progression',
    org: 'Team Projects',
    description:
      'Designing gameplay mechanics, economy loops, and progression systems across platformer, arcade, and simulation titles.',
  },
  {
    period: '2024 — 2025',
    role: 'Game Programmer',
    org: 'Nilawarsa Studio',
    description:
      'Implemented character controllers, enemy AI, puzzle systems, and UI flow for Fix The Spaceship using modular architecture.',
  },
  {
    period: '2022 — 2026',
    role: 'Student, Game Technology',
    org: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    description:
      'Studying interactive systems, game production pipelines, and applied design frameworks such as MDA.',
  },
  {
  period: '2026 — Present',
  role: 'Full Stack Developer',
  org: 'Independent Projects',
  description:
    'Building web applications and digital solutions designed to solve everyday real-world problems and streamline daily activities.',
  }
]

export const tools = [
  'Unity',
  'Figma',
  'Visual Studio',
  'Git',
  'Canva',
  'Unreal',
  'Microsoft Excel',
  'Microsoft PowerPoint',
  'microsoft Word',
]

export const stats = [
  { value: 2, suffix: '+', label: 'Years Designing' },
  { value: 1, suffix: '<', label: 'Years Programming' },
  { value: 7, suffix: '', label: 'Shipped Projects' },
  { value: 1, suffix: 'st', label: 'Place KMIPN VI' },
  { value: 20, suffix: '+', label: 'Systems Designed' },
]

export const contactChannels = [
  { label: 'Email', value: 'biyansudarto05@gmail.com', href: 'mailto:biyansudarto05@gmail.com' },
  {
    label: 'LinkedIn',
    value: '/in/biyansudarto',
    href: 'https://linkedin.com/in/biyansudarto',
  },
  {
    label: 'GitHub',
    value: '@BiyanSudarto',
    href: 'https://github.com/BiyanSudarto',
  },
  { label: 'Phone', value: '0898-0636-719', href: 'tel:+628980636719' },
  { label: 'Location', value: 'Tuban / Surabaya, Indonesia', href: null },
]
