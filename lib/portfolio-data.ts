export const highlights = [
  'Full-Stack Development',
  'Backend Systems',
  'Database Design',
  'Gameplay Mechanics',
  'Project Leadership',
]

export const projectFilters = ['All', 'Web Development', 'Game Design', 'Programming'] as const
export type ProjectFilter = (typeof projectFilters)[number]

export type Project = {
  title: string
  subtitle?: string
  genre: string
  platform: string
  role: string
  period?: string
  galleryFolder?: string
  categories: ProjectFilter[]
  responsibilities: string[]
  result: string
}

export const projects: Project[] = [
  {
    title: 'Project Lune',
    subtitle: 'Portfolio website',
    genre: 'Web Application',
    platform: 'Web',
    role: 'Full Stack Developer',
    period: '2026',
    galleryFolder: 'projects/project-lune',
    categories: ['Web Development', 'Programming'],
    responsibilities: ['Developed a portfolio website using Laravel and Vue.js', 'Used MySQL to manage website data', 'Managed experience and project records for display on the website'],
    result: 'A portfolio website with structured data for work experience and project presentation.',
  },
  {
    title: 'Catering Ordering System',
    subtitle: 'Online ordering and admin dashboard',
    genre: 'Web Application',
    platform: 'Web',
    role: 'Web Developer',
    period: 'May 2026 — Jun 2026',
    galleryFolder: 'projects/catering-ordering',
    categories: ['Web Development', 'Programming'],
    responsibilities: ['Built an interactive menu catalog and automatic order-price calculation', 'Developed an admin CRUD dashboard for menu, price, and stock management', 'Applied automatic form validation when ingredients were out of stock', 'Integrated WhatsApp API to send structured order details'],
    result: 'A more structured catering order flow for customers and administrators.',
  },
  {
    title: 'Catering Financial Accounting',
    subtitle: 'Gading Catering',
    genre: 'Financial Management System',
    platform: 'Web',
    role: 'Full Stack Developer',
    period: 'Jan 2026 — Feb 2026',
    galleryFolder: 'projects/gading-catering',
    categories: ['Web Development', 'Programming'],
    responsibilities: ['Simplified catering bookkeeping through automated cash-flow records', 'Designed the MySQL database schema', 'Built a multi-item purchase input form'],
    result: 'A catering financial accounting system for more structured cash-flow and purchase recording.',
  },
  {
    title: 'Red Life',
    subtitle: 'Mars survival game',
    genre: 'Survival',
    platform: 'PC',
    role: 'Game Designer / Programmer',
    period: 'Jun 2025 — Jul 2026',
    galleryFolder: 'projects/red-life',
    categories: ['Game Design', 'Programming'],
    responsibilities: ['Designed 20 gameplay mechanics, character progression, and the survival loop', 'Resolved more than 40% of design issues before they affected production', 'Analyzed playtest data to improve player interest by 80%', 'Programmed mechanics independently, improving programmer workflow efficiency by 30%'],
    result: 'A survival experience built around resource management, exploration, and crafting.',
  },
  {
    title: 'ECOSITY: Harvest Haven',
    genre: 'Simulation / Management',
    platform: 'PC',
    role: 'Game Designer',
    period: 'May 2026 — Jun 2026',
    galleryFolder: 'projects/ecosity',
    categories: ['Game Design'],
    responsibilities: ['Designed quest, shop, gardening, and water systems', 'Planned renewable-energy management and automation', 'Structured upgrade progression for tools and facilities'],
    result: 'A connected farming-management loop combining production, resources, and upgrades.',
  },
  {
    title: 'Project SEA',
    genre: '2D Platformer',
    platform: 'Desktop',
    role: 'Game Designer',
    period: 'May 2026 — Jun 2026',
    galleryFolder: 'projects/project-sea',
    categories: ['Game Design'],
    responsibilities: ['Designed the quiz gameplay loop', 'Created Remove Wrong Answer, Slow Time, and Second Chance abilities', 'Tuned the question timer to add decision pressure'],
    result: 'Interactive educational gameplay with strategic decision-making.',
  },
]

export const workExperiences: Project[] = [
  {
    title: 'Razzan Store',
    subtitle: 'Tuban',
    genre: 'Game Top-up Backend System',
    platform: 'Web',
    role: 'Full Stack Developer',
    period: 'Aug 2026 — Present',
    galleryFolder: 'work/razzan-store',
    categories: ['Programming'],
    responsibilities: ['Developed a game top-up backend using Node.js and Express.js', 'Integrated APIs for payment processing and product delivery', 'Designed transaction verification and a database for automatic order-status updates'],
    result: 'A backend transaction flow supporting payment verification and automated product fulfillment.',
  },
  {
    title: 'Fix The Spaceship',
    subtitle: 'Nilawarsa Studio',
    genre: 'Puzzle Platformer',
    platform: 'Desktop',
    role: 'Programmer',
    period: 'May 2026 — Jun 2026',
    galleryFolder: 'work/nilawarsa-studio',
    categories: ['Programming'],
    responsibilities: ['Programmed core game systems, mechanics, and UI to improve the gameplay experience', 'Wrote automated enemy AI scripts using waypoint-based patrol logic', 'Implemented static and dynamic hazards with precise collision detection'],
    result: 'Gameplay systems, enemy patrol behaviour, and hazards implemented for a puzzle-platforming game.',
  },
]

export const experiences = [
  {
    period: 'Sep 2024 — Sep 2025',
    role: 'Expert Staff — Art & Sport',
    org: 'BSO Game Technology · PENS',
    description: 'Coordinated weekly activities and led the game showcase, including technical preparation and presentation schedules.',
  },
  {
    period: 'Sep 2023 — Sep 2024',
    role: 'Junior Staff — Art & Sport',
    org: 'BSO Game Technology · PENS',
    description: 'Contributed to organizational program planning and coordinated student participation in regular sports activities.',
  },
]

export const education = [
  { period: 'Aug 2022 — Jul 2026', school: 'Politeknik Elektronika Negeri Surabaya (PENS)', degree: 'Applied Bachelor (D4) in Game Technology', gpa: '3.45 / 4.00' },
]

export const tools = ['Node.js', 'Express.js', 'PHP', 'JavaScript', 'MySQL', 'SQLite', 'HTML / CSS', 'Git / GitHub', 'Visual Studio', 'WordPress', 'Microsoft Excel']

export const certifications = ['Junior Graphic Design — BNSP', 'TOEFL']

export const training = [
  { title: 'Spec-Driven Development with Kiro', provider: 'Dicoding', period: 'Oct 2026 — Nov 2026' },
  { title: 'Introduction to Python Programming', provider: 'Dicoding', period: 'Oct 2026 — Nov 2026' },
  { title: 'Learn Basic Web Programming', provider: 'Dicoding', period: 'Sep 2026 — Nov 2026' },
  { title: 'Belajar Dasar Cloud dan Gen AI di AWS', provider: 'Dicoding', period: 'Sep 2026 — Nov 2026' },
]

