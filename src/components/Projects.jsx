import { useEffect, useRef } from 'react'

const projects = [
  {
    id: 1,
    title: 'Meal-kit Upselling',
    subtitle: 'Marley Spoon SE · Berlin, Germany',
    category: 'Mobile',
    year: '2024',
    bg: '#c4b5d4',
    description:
      'Leveraging the food pairing concept in Marley Spoon\'s meal-kit subscription to drive upselling, increasing the market attachment rate by ~2.5%.',
    tags: ['User Research', 'UI/UX Design', 'Usability Testing', 'iOS Design', 'B2C', 'Consumer UX'],
    link: '/work/meal-kit-upselling',
  },
  {
    id: 2,
    title: 'Re-subscription Strategy',
    subtitle: 'Marley Spoon SE · Berlin, Germany',
    category: 'Web',
    year: '2024',
    bg: '#f4a67a',
    description:
      'Translating research and customer insights into a redesigned meal-kit subscription flow, resulting in a ~6% increase in conversion rate.',
    tags: ['User Research', 'UI/UX Design', 'Multivariate Testing', 'B2C', 'Consumer UX'],
    link: '/work/resubscription-strategy',
  },
  {
    id: 3,
    title: 'Payment Retry',
    subtitle: 'Marley Spoon SE · Berlin, Germany',
    category: 'Product',
    year: '2023',
    bg: '#7ac4b0',
    description:
      'Designed a complex B2B analytics dashboard for data teams, transforming overwhelming data tables into clear, actionable visualisations used by 500+ companies.',
    tags: ['Data Viz', 'B2B', 'Enterprise UX', 'B2C', 'Consumer UX'],
    link: '/work/payment-retry',
  },
  {
    id: 4,
    title: 'Product Return Portal',
    subtitle: 'Emma Sleep GmbH · Frankfurt am Main, Germany',
    category: 'Web',
    year: '2019',
    bg: '#85b8e0',
    description:
      'Streamlining return management by automating manual process, reducing customer service team\'s weekly workload by 20 hours.',
    tags: ['User Research', 'UI/UX Design', 'B2C', 'Consumer UX'],
    link: '/work/product-return-portal',
  },
]

function ProjectIllustration({ id, bg }) {
  const illustrations = {
    1: (
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
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="240" fill={bg} />
        <rect x="60" y="40" width="100" height="100" rx="4" fill="white" opacity="0.35" />
        <rect x="200" y="40" width="100" height="100" rx="4" fill="white" opacity="0.35" />
        <rect x="60" y="160" width="100" height="50" rx="4" fill="white" opacity="0.35" />
        <rect x="200" y="160" width="100" height="50" rx="4" fill="white" opacity="0.35" />
        <circle cx="110" cy="90" r="25" fill="white" opacity="0.4" />
        <circle cx="250" cy="90" r="25" fill="white" opacity="0.4" />
        <rect x="90" y="165" width="40" height="5" rx="2" fill="white" opacity="0.5" />
        <rect x="230" y="165" width="40" height="5" rx="2" fill="white" opacity="0.5" />
        <rect x="90" y="173" width="30" height="5" rx="2" fill="white" opacity="0.3" />
        <rect x="230" y="173" width="30" height="5" rx="2" fill="white" opacity="0.3" />
      </svg>
    ),
    3: (
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
      </svg>
    ),
    5: (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="240" fill={bg} />
        <circle cx="180" cy="100" r="65" fill="white" opacity="0.2" stroke="white" strokeWidth="2" />
        <circle cx="180" cy="100" r="45" fill="white" opacity="0.15" />
        <rect x="155" y="65" width="4" height="50" rx="2" fill="white" opacity="0.8" />
        <path d="M149 65 L149 80 Q149 88 155 88" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
        <path d="M161 65 L161 80 Q161 88 155 88" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
        <rect x="199" y="65" width="4" height="50" rx="2" fill="white" opacity="0.8" />
        <path d="M197 65 L197 77 Q197 83 203 83 Q209 83 209 77 L209 65" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
        {[0, 1, 2, 3, 4].map((i) => (
          <text key={i} x={100 + i * 34} y="180" fontSize="20" fill="white" opacity={i < 4 ? 0.8 : 0.3} textAnchor="middle">★</text>
        ))}
      </svg>
    ),
    6: (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="360" height="240" fill={bg} />
        <path d="M180 50 L230 150 L130 150 Z" stroke="white" strokeWidth="3" fill="white" opacity="0.25" />
        <path d="M180 70 L218 150 L142 150 Z" stroke="none" fill={bg} opacity="0.5" />
        <rect x="100" y="170" width="80" height="10" rx="2" fill="white" opacity="0.5" />
        <rect x="120" y="186" width="40" height="6" rx="2" fill="white" opacity="0.3" />
        <circle cx="90" cy="180" r="8" fill="white" opacity="0.7" />
        <circle cx="90" cy="200" r="8" fill="white" opacity="0.4" />
        <circle cx="90" cy="220" r="8" fill="white" opacity="0.2" />
        <line x1="260" y1="50" x2="310" y2="200" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="290" y1="50" x2="240" y2="200" stroke="white" strokeWidth="2" opacity="0.3" />
      </svg>
    ),
  }
  return illustrations[id] || null
}

function ParallaxCard({ project, index }) {
  const clipRef = useRef(null)
  const moveRef = useRef(null)
  const isEven = index % 2 === 1

  useEffect(() => {
    const clip = clipRef.current
    const move = moveRef.current
    if (!clip || !move) return

    const update = () => {
      if (window.innerWidth < 1024) return
      const rect = clip.getBoundingClientRect()
      const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * -0.12
      move.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-charcoal/12">

      {/* Illustration — parallax */}
      <div
        ref={clipRef}
        className={`relative overflow-hidden min-h-[60vw] sm:min-h-[50vw] lg:min-h-[65vh] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
        style={{ backgroundColor: project.bg }}
      >
        <div
          ref={moveRef}
          className="absolute w-full"
          style={{ top: '-15%', height: '130%' }}
        >
          <ProjectIllustration id={project.id} bg={project.bg} />
        </div>
      </div>

      {/* Info */}
      <div className={`flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-20 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <p
          className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/35 mb-6"
          style={{ fontWeight: 600 }}
        >
          {String(index + 1).padStart(2, '0')} · {project.category} · {project.year}
        </p>
        <h3 className="font-display text-[clamp(2.5rem,4.5vw,5rem)] leading-[0.92] text-charcoal mb-4">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-charcoal/45 mb-6" style={{ fontWeight: 600 }}>
          {project.subtitle}
        </p>
        <p className="font-body text-sm md:text-base text-charcoal/60 leading-relaxed mb-8 w-full">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-sans bg-charcoal/5 text-charcoal/50 border border-charcoal/10"
              style={{ fontWeight: 600 }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="group inline-flex items-center gap-2 font-sans text-sm text-charcoal hover:text-accent transition-colors duration-200"
          style={{ fontWeight: 700 }}
        >
          Read More
          <span className="group-hover:translate-x-1 transition-transform duration-200 text-accent">→</span>
        </a>
      </div>

    </div>
  )
}

export default function Projects() {
  const filtered = projects

  return (
    <section id="work" className="pt-20 md:pt-32 pb-20 md:pb-32">

      {/* Header */}
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto mb-12 md:mb-16">
        <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-charcoal text-center">
          Things I've built
        </h2>
      </div>

      {/* Parallax cards */}
      <div className="border-b border-charcoal/12">
        {filtered.map((project, i) => (
          <ParallaxCard key={project.id} project={project} index={i} />
        ))}
      </div>


    </section>
  )
}
