import { useState } from 'react'

const categories = ['All', 'Mobile', 'Web', 'Product', 'Brand']

const projects = [
  {
    id: 1,
    title: 'MindSpace',
    subtitle: 'Wellness App Redesign',
    category: 'Mobile',
    year: '2024',
    bg: '#c4b5d4',
    role: 'Lead Designer',
    description:
      'A complete redesign of a mental wellness app — reducing friction in onboarding by 60% and improving daily engagement through personalized content flows.',
    tags: ['User Research', 'Prototyping', 'iOS Design'],
  },
  {
    id: 2,
    title: 'ShopFlow',
    subtitle: 'E-commerce Platform',
    category: 'Web',
    year: '2024',
    bg: '#f4a67a',
    role: 'UI/UX Designer',
    description:
      'End-to-end redesign of a Shopify competitor\'s checkout experience, cutting drop-off rate by 34% through progressive disclosure and trust-building design patterns.',
    tags: ['UX Research', 'Design System', 'A/B Testing'],
  },
  {
    id: 3,
    title: 'DataFlow',
    subtitle: 'Analytics Dashboard',
    category: 'Product',
    year: '2023',
    bg: '#7ac4b0',
    role: 'Product Designer',
    description:
      'Designed a complex B2B analytics dashboard for data teams, transforming overwhelming data tables into clear, actionable visualisations used by 500+ companies.',
    tags: ['Data Viz', 'B2B', 'Enterprise UX'],
  },
  {
    id: 4,
    title: 'Wanderlust',
    subtitle: 'Travel Booking App',
    category: 'Mobile',
    year: '2023',
    bg: '#85b8e0',
    role: 'Lead Designer',
    description:
      'A travel app designed around discovery and delight — featuring an AI-powered itinerary builder and a social trip-planning layer loved by 12k beta users.',
    tags: ['Mobile UX', 'AI Features', 'User Testing'],
  },
  {
    id: 5,
    title: 'FoodieFind',
    subtitle: 'Restaurant Discovery',
    category: 'Mobile',
    year: '2023',
    bg: '#f5d76e',
    role: 'UI/UX Designer',
    description:
      'Redesigned a restaurant discovery app to prioritise community reviews and visual browsing, resulting in a 4.8★ App Store rating post-launch.',
    tags: ['Mobile', 'Social UX', 'Visual Design'],
  },
  {
    id: 6,
    title: 'Arco',
    subtitle: 'Brand Identity System',
    category: 'Brand',
    year: '2022',
    bg: '#a8d08d',
    role: 'Visual Designer',
    description:
      'Full brand identity for a sustainable architecture studio — logo, design system, marketing site, and print collateral cohesively telling their story.',
    tags: ['Branding', 'Design System', 'Web Design'],
  },
]

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group border-[3px] border-charcoal cursor-pointer card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / preview area */}
      <div
        className="relative aspect-[3/2] overflow-hidden"
        style={{ backgroundColor: project.bg }}
      >
        {/* Abstract project illustration */}
        <ProjectIllustration id={project.id} bg={project.bg} />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-charcoal flex flex-col justify-end p-6 transition-all duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-body text-cream/80 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-cream/30 text-cream/60 text-xs font-sans font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-5 bg-cream border-t-[3px] border-charcoal flex items-start justify-between gap-4">
        <div>
          <p className="font-sans text-xs font-semibold text-charcoal/40 uppercase tracking-widest mb-1">
            {project.category} · {project.year}
          </p>
          <h3 className="font-sans font-black text-xl text-charcoal" style={{ fontWeight: 900 }}>
            {project.title}
          </h3>
          <p className="font-body text-sm text-charcoal/60 mt-0.5">{project.subtitle}</p>
        </div>
        <div
          className={`shrink-0 w-9 h-9 border-[3px] border-charcoal flex items-center justify-center transition-all duration-200 ${
            hovered ? 'bg-charcoal' : 'bg-cream'
          }`}
        >
          <span
            className={`text-lg leading-none transition-colors duration-200 ${
              hovered ? 'text-cream' : 'text-charcoal'
            }`}
          >
            →
          </span>
        </div>
      </div>
    </div>
  )
}

function ProjectIllustration({ id, bg }) {
  const illustrations = {
    1: (
      // MindSpace - soft circles / mindfulness
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="240" fill={bg} />
        <circle cx="180" cy="120" r="80" stroke="white" strokeWidth="3" opacity="0.4" />
        <circle cx="180" cy="120" r="55" stroke="white" strokeWidth="3" opacity="0.4" />
        <circle cx="180" cy="120" r="30" fill="white" opacity="0.3" />
        <circle cx="180" cy="120" r="10" fill="white" opacity="0.7" />
        <path d="M120 120 Q150 90 180 120 Q210 150 240 120" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
        <circle cx="80" cy="60" r="15" stroke="white" strokeWidth="2" opacity="0.25" />
        <circle cx="290" cy="190" r="20" stroke="white" strokeWidth="2" opacity="0.25" />
      </svg>
    ),
    2: (
      // ShopFlow - grid / store
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="240" fill={bg} />
        <rect x="60" y="40" width="100" height="100" rx="4" fill="white" opacity="0.35" />
        <rect x="200" y="40" width="100" height="100" rx="4" fill="white" opacity="0.35" />
        <rect x="60" y="160" width="100" height="50" rx="4" fill="white" opacity="0.35" />
        <rect x="200" y="160" width="100" height="50" rx="4" fill="white" opacity="0.35" />
        <rect x="80" y="155" width="60" height="8" rx="2" fill="white" opacity="0.6" />
        <rect x="220" y="155" width="60" height="8" rx="2" fill="white" opacity="0.6" />
        <circle cx="110" cy="90" r="25" fill="white" opacity="0.4" />
        <circle cx="250" cy="90" r="25" fill="white" opacity="0.4" />
        <rect x="90" y="165" width="40" height="5" rx="2" fill="white" opacity="0.5" />
        <rect x="230" y="165" width="40" height="5" rx="2" fill="white" opacity="0.5" />
        <rect x="90" y="173" width="30" height="5" rx="2" fill="white" opacity="0.3" />
        <rect x="230" y="173" width="30" height="5" rx="2" fill="white" opacity="0.3" />
      </svg>
    ),
    3: (
      // DataFlow - charts
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="240" fill={bg} />
        <rect x="50" y="160" width="30" height="50" rx="2" fill="white" opacity="0.5" />
        <rect x="100" y="120" width="30" height="90" rx="2" fill="white" opacity="0.5" />
        <rect x="150" y="80" width="30" height="130" rx="2" fill="white" opacity="0.5" />
        <rect x="200" y="100" width="30" height="110" rx="2" fill="white" opacity="0.5" />
        <rect x="250" y="60" width="30" height="150" rx="2" fill="white" opacity="0.5" />
        <rect x="300" y="90" width="30" height="120" rx="2" fill="white" opacity="0.5" />
        <path d="M50 150 L115 110 L165 70 L215 95 L265 55 L315 80" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
        <circle cx="50" cy="150" r="5" fill="white" opacity="0.9" />
        <circle cx="115" cy="110" r="5" fill="white" opacity="0.9" />
        <circle cx="165" cy="70" r="5" fill="white" opacity="0.9" />
        <circle cx="215" cy="95" r="5" fill="white" opacity="0.9" />
        <circle cx="265" cy="55" r="5" fill="white" opacity="0.9" />
        <circle cx="315" cy="80" r="5" fill="white" opacity="0.9" />
        <line x1="40" y1="215" x2="340" y2="215" stroke="white" strokeWidth="2" opacity="0.4" />
      </svg>
    ),
    4: (
      // Wanderlust - map / travel
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="240" fill={bg} />
        <circle cx="180" cy="100" r="70" stroke="white" strokeWidth="2" opacity="0.3" />
        <path d="M120 100 Q155 60 180 100 Q205 140 240 100" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
        <circle cx="180" cy="100" r="12" fill="white" opacity="0.8" />
        <circle cx="180" cy="100" r="5" fill={bg} />
        <path d="M170 100 L180 80 L190 100 Z" fill="white" opacity="0.8" />
        <circle cx="100" cy="140" r="8" stroke="white" strokeWidth="2" opacity="0.5" />
        <circle cx="270" cy="70" r="8" stroke="white" strokeWidth="2" opacity="0.5" />
        <circle cx="240" cy="160" r="8" stroke="white" strokeWidth="2" opacity="0.5" />
        <path d="M100 140 Q155 120 180 100" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
        <path d="M180 100 Q230 85 270 70" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
        <path d="M180 100 Q220 130 240 160" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
        <rect x="40" y="170" width="80" height="40" rx="4" fill="white" opacity="0.2" />
        <rect x="48" y="178" width="40" height="5" rx="2" fill="white" opacity="0.5" />
        <rect x="48" y="189" width="55" height="5" rx="2" fill="white" opacity="0.3" />
      </svg>
    ),
    5: (
      // FoodieFind - rating / food
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="240" fill={bg} />
        <circle cx="180" cy="100" r="65" fill="white" opacity="0.2" stroke="white" strokeWidth="2" />
        <circle cx="180" cy="100" r="45" fill="white" opacity="0.15" />
        {/* Fork and knife */}
        <rect x="155" y="65" width="4" height="50" rx="2" fill="white" opacity="0.8" />
        <path d="M149 65 L149 80 Q149 88 155 88" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
        <path d="M161 65 L161 80 Q161 88 155 88" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
        <rect x="199" y="65" width="4" height="50" rx="2" fill="white" opacity="0.8" />
        <path d="M197 65 L197 77 Q197 83 203 83 Q209 83 209 77 L209 65" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
        {/* Stars */}
        {[0, 1, 2, 3, 4].map((i) => (
          <text key={i} x={100 + i * 34} y="180" fontSize="20" fill="white" opacity={i < 4 ? 0.8 : 0.3} textAnchor="middle">★</text>
        ))}
      </svg>
    ),
    6: (
      // Arco - brand / geometry
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="240" fill={bg} />
        {/* Logo mark */}
        <path d="M180 50 L230 150 L130 150 Z" stroke="white" strokeWidth="3" fill="white" opacity="0.25" />
        <path d="M180 70 L218 150 L142 150 Z" stroke="none" fill={bg} opacity="0.5" />
        {/* Brand typography mockup */}
        <rect x="100" y="170" width="80" height="10" rx="2" fill="white" opacity="0.5" />
        <rect x="120" y="186" width="40" height="6" rx="2" fill="white" opacity="0.3" />
        {/* Color palette dots */}
        <circle cx="90" cy="180" r="8" fill="white" opacity="0.7" />
        <circle cx="90" cy="200" r="8" fill="white" opacity="0.4" />
        <circle cx="90" cy="220" r="8" fill="white" opacity="0.2" />
        {/* Abstract lines */}
        <line x1="260" y1="50" x2="310" y2="200" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="290" y1="50" x2="240" y2="200" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="260" y1="50" x2="240" y2="200" stroke="none" fill="white" opacity="0.15" />
      </svg>
    ),
  }

  return illustrations[id] || null
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-10 h-[3px] bg-charcoal" />
          <span className="font-sans text-sm font-semibold tracking-[0.15em] uppercase text-charcoal/50">
            Selected Work
          </span>
        </div>

        {/* Header + filter row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] text-charcoal">
            Things I've built
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 border-[3px] border-charcoal font-sans font-bold text-[13px] transition-all duration-200 ${
                  active === cat
                    ? 'bg-charcoal text-cream'
                    : 'bg-cream text-charcoal hover:bg-charcoal/10'
                }`}
                style={{ fontWeight: 700 }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* More work CTA */}
        <div className="mt-16 text-center">
          <a
            href="mailto:alex@example.com"
            className="inline-flex items-center gap-2 font-sans font-bold text-charcoal underline-draw text-lg hover:text-accent transition-colors duration-200"
            style={{ fontWeight: 700 }}
          >
            Want to see more? Let's chat
            <span className="text-accent">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
