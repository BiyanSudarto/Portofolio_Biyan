export const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
]

export const highlights = [
  'Full-Stack Development',
  'Backend Integration',
  'Database Design',
  'Gameplay Mechanics',
  'System Design',
]

export const skillGroups = [
  { title: 'Development', skills: ['Node.js', 'Express.js', 'PHP', 'JavaScript', 'HTML / CSS', 'Laravel', 'Vue.js'] },
  { title: 'Database & Integration', skills: ['MySQL', 'SQLite', 'REST API', 'Midtrans', 'Digiflazz', 'Git / GitHub'] },
  { title: 'Game & Product Design', skills: ['Game Mechanics', 'Progression Design', 'System Balancing', 'MDA Framework', 'Unity', 'Unreal Engine', 'Figma'] },
]

export const projectFilters = ['All', 'Web Development', 'Game Design', 'Programming'] as const
export type ProjectFilter = (typeof projectFilters)[number]

export type Project = {
  title: string
  subtitle?: string
  genre: string
  platform: string
  role: string
  image?: string
  categories: ProjectFilter[]
  responsibilities: string[]
  result: string
}

export const projects: Project[] = [
  {
    title: 'Razzan Store',
    subtitle: 'Game top-up platform',
    genre: 'E-commerce / Backend',
    platform: 'Web',
    role: 'Full Stack Developer',
    categories: ['Web Development', 'Programming'],
    responsibilities: ['Developed the backend using Node.js and Express.js', 'Integrated Midtrans and Digiflazz APIs for QRIS payments and automated product delivery', 'Designed transaction verification and SQLite order-status updates'],
    result: 'A transaction flow connecting payment confirmation with automated digital-product fulfillment.',
  },
  {
    title: 'Project Lune',
    subtitle: 'Portfolio website',
    genre: 'Web Application',
    platform: 'Web',
    role: 'Full Stack Developer',
    categories: ['Web Development', 'Programming'],
    responsibilities: ['Developed a portfolio website using Laravel and Vue.js', 'Used MySQL to manage website data', 'Managed experience and project records for display on the website'],
    result: 'A portfolio platform with structured data for work experience and project presentation.',
  },
  {
    title: 'Catering Ordering System',
    subtitle: 'Online ordering and admin dashboard',
    genre: 'Web Application',
    platform: 'Web',
    role: 'Web Developer',
    image: '/images/katering-remake.png',
    categories: ['Web Development', 'Programming'],
    responsibilities: ['Built an interactive menu catalog and automatic order-price calculation', 'Developed an admin CRUD dashboard for menu, price, and stock management', 'Added stock-aware form validation and WhatsApp API order summaries'],
    result: 'A more structured catering order flow for customers and administrators.',
  },
  {
    title: 'Red Life',
    subtitle: 'Mars survival game',
    genre: 'Survival',
    platform: 'PC',
    role: 'Game Designer / Programmer',
    image: '/images/project-redlife.png',
    categories: ['Game Design', 'Programming'],
    responsibilities: ['Designed 20 gameplay mechanics, character progression, and the survival loop', 'Reviewed design risks before they affected production flow', 'Analyzed playtest data and implemented selected gameplay mechanics'],
    result: 'A survival experience built around resource management, exploration, and crafting.',
  },
  {
    title: 'Project SEA',
    genre: '2D Platformer',
    platform: 'Desktop',
    role: 'Game Designer',
    image: '/images/project-sea.png',
    categories: ['Game Design'],
    responsibilities: ['Designed the quiz gameplay loop', 'Created Remove Wrong Answer, Slow Time, and Second Chance abilities', 'Tuned the question timer to add decision pressure'],
    result: 'Interactive educational gameplay with strategic decision-making.',
  },
  {
    title: 'ECOSITY: Harvest Haven',
    genre: 'Simulation / Management',
    platform: 'PC',
    role: 'Game Designer',
    image: '/images/project-ecosity.png',
    categories: ['Game Design'],
    responsibilities: ['Designed quest, shop, gardening, and water systems', 'Planned renewable-energy management and automation', 'Structured upgrade progression for tools and facilities'],
    result: 'A connected farming-management loop combining production, resources, and upgrades.',
  },
  {
    title: 'Fix The Spaceship',
    subtitle: 'Nilawarsa Studio',
    genre: 'Puzzle Platformer',
    platform: 'Desktop',
    role: 'Programmer',
    image: '/images/project-spaceship.png',
    categories: ['Programming'],
    responsibilities: ['Programmed core gameplay mechanics and UI', 'Built waypoint-based enemy patrol behaviour', 'Implemented static and dynamic hazards with collision detection'],
    result: 'Gameplay systems and enemy behaviours implemented for a puzzle-platforming experience.',
  },
]

export const experiences = [
  {
    period: 'Aug 2026 — Present',
    role: 'Full Stack Developer',
    org: 'Razzan Store · Tuban',
    description: 'Developing a game top-up backend with Node.js and Express.js, integrating Midtrans and Digiflazz for QRIS payments and automated delivery, and managing transaction verification with SQLite.',
  },
  {
    period: 'Jan 2026 — Feb 2026',
    role: 'Full Stack Developer',
    org: 'Gading Catering · Tuban',
    description: 'Developed a catering bookkeeping system, designed the MySQL database schema, and built multi-item purchase forms for transaction and expense recording.',
  },
  {
    period: 'Jan 2025 — Jul 2025',
    role: 'Programmer',
    org: 'Nilawarsa Studio · Pasuruan',
    description: 'Programmed core game systems, mechanics, and UI; created waypoint-based enemy AI; and implemented static and dynamic hazards with collision detection.',
  },
  {
    period: 'Sep 2023 — Sep 2025',
    role: 'Staff Seni & Olahraga',
    org: 'BSO Game Technology · PENS',
    description: 'Coordinated weekly activities, supported game showcase preparation and presentation schedules, and contributed to student organization programs.',
  },
]

export const education = [
  { period: 'Aug 2022 — Jul 2026', school: 'Politeknik Elektronika Negeri Surabaya (PENS)', degree: 'Sarjana Terapan (D4) Teknologi Game', gpa: '3.45 / 4.00' },
]

export const tools = ['Node.js', 'Express.js', 'PHP', 'JavaScript', 'MySQL', 'SQLite', 'Laravel', 'Vue.js', 'Git / GitHub', 'Unity', 'Unreal Engine', 'Figma']

export const contactChannels = [
  { label: 'Email', value: 'biyansudarto05@gmail.com', href: 'mailto:biyansudarto05@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/biyansudarto', href: 'https://linkedin.com/in/biyansudarto' },
  { label: 'GitHub', value: 'github.com/BiyanSudarto', href: 'https://github.com/BiyanSudarto' },
  { label: 'Phone', value: '0898-0636-719', href: 'tel:+628980636719' },
  { label: 'Location', value: 'Tuban, Jawa Timur, Indonesia', href: null },
]
