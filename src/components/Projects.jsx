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
    category: 'Mobile',
    year: '2023',
    bg: '#7ac4b0',
    description:
      'This case study highlights a design process addressing payment failures during automatic weekly billing for a meal kit subscription service. The implemented solution resulted in a 4.4% increase in payment recovery rate.',
    tags: ['User Research', 'UI/UX Design', 'Content Design', 'A/B Testing', 'B2C', 'Consumer UX'],
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

function MealKitIllustration({ bg }) {
  const containerRef = useRef(null)
  const phoneRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect || !phoneRef.current) return
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    phoneRef.current.style.transform = `perspective(700px) rotateY(${x * 18}deg) rotateX(${-y * 14}deg) scale3d(1.04, 1.04, 1.04)`
  }

  const handleMouseLeave = () => {
    if (phoneRef.current) phoneRef.current.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center"
      style={{ backgroundColor: bg }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes mkDrift1 {
          0%, 100% { transform: translate(0px, 0px); }
          33% { transform: translate(22px, -30px); }
          66% { transform: translate(-14px, 18px); }
        }
        @keyframes mkDrift2 {
          0%, 100% { transform: translate(0px, 0px); }
          40% { transform: translate(-25px, 20px); }
          80% { transform: translate(16px, -14px); }
        }
        @keyframes mkDrift3 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(18px, 28px); }
        }
        @keyframes mkDrift4 {
          0%, 100% { transform: translate(0px, 0px); }
          60% { transform: translate(-20px, -18px); }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 280, height: 280, background: 'rgba(255,255,255,0.13)', top: '-80px', left: '-60px', animation: 'mkDrift1 9s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 200, height: 200, background: 'rgba(255,255,255,0.10)', bottom: '-50px', right: '-40px', animation: 'mkDrift2 12s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 130, height: 130, background: 'rgba(255,255,255,0.08)', top: '35%', right: '12%', animation: 'mkDrift3 7s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 80, height: 80, background: 'rgba(255,255,255,0.10)', top: '18%', left: '18%', animation: 'mkDrift4 10s ease-in-out infinite' }} />
      </div>

      {/* Phone screen — 3D tilt follows cursor */}
      <div
        ref={phoneRef}
        className="relative z-10"
        style={{
          width: 220,
          height: 440,
          borderRadius: 29,
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
          transform: 'perspective(700px) rotateY(0deg) rotateX(0deg)',
          transition: 'transform 0.15s ease-out',
          willChange: 'transform',
        }}
      >
        <img src="/meal-kit-phone.webp" alt="Meal kit upselling app screen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  )
}

function ReturnPortalIllustration({ bg }) {
  const containerRef = useRef(null)
  const phoneRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect || !phoneRef.current) return
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    phoneRef.current.style.transform = `perspective(700px) rotateY(${x * 18}deg) rotateX(${-y * 14}deg) scale3d(1.04, 1.04, 1.04)`
  }

  const handleMouseLeave = () => {
    if (phoneRef.current) phoneRef.current.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center"
      style={{ backgroundColor: bg }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes rpDrift1 {
          0%, 100% { transform: translate(0px, 0px); }
          33% { transform: translate(20px, -28px); }
          66% { transform: translate(-16px, 16px); }
        }
        @keyframes rpDrift2 {
          0%, 100% { transform: translate(0px, 0px); }
          40% { transform: translate(-22px, 18px); }
          80% { transform: translate(14px, -20px); }
        }
        @keyframes rpDrift3 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(16px, 22px); }
        }
        @keyframes rpDrift4 {
          0%, 100% { transform: translate(0px, 0px); }
          60% { transform: translate(-18px, -16px); }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 280, height: 280, background: 'rgba(255,255,255,0.13)', top: '-80px', left: '-60px', animation: 'rpDrift1 9s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 200, height: 200, background: 'rgba(255,255,255,0.10)', bottom: '-50px', right: '-40px', animation: 'rpDrift2 12s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 130, height: 130, background: 'rgba(255,255,255,0.08)', top: '35%', right: '12%', animation: 'rpDrift3 7s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 80, height: 80, background: 'rgba(255,255,255,0.10)', top: '18%', left: '18%', animation: 'rpDrift4 10s ease-in-out infinite' }} />
      </div>

      {/* Phone screen — 3D tilt follows cursor */}
      <div
        ref={phoneRef}
        className="relative z-10"
        style={{
          width: 220,
          height: 440,
          borderRadius: 29,
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
          transform: 'perspective(700px) rotateY(0deg) rotateX(0deg)',
          transition: 'transform 0.15s ease-out',
          willChange: 'transform',
        }}
      >
        <img src="/return-portal-screen-1.webp" alt="Product return portal screen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  )
}

function ResubIllustration({ bg }) {
  const containerRef = useRef(null)
  const browserRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect || !browserRef.current) return
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    browserRef.current.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale3d(1.04, 1.04, 1.04)`
  }

  const handleMouseLeave = () => {
    if (browserRef.current) browserRef.current.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center"
      style={{ backgroundColor: bg }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes rsDrift1 {
          0%, 100% { transform: translate(0px, 0px); }
          33% { transform: translate(-20px, 26px); }
          66% { transform: translate(16px, -18px); }
        }
        @keyframes rsDrift2 {
          0%, 100% { transform: translate(0px, 0px); }
          40% { transform: translate(24px, -20px); }
          80% { transform: translate(-12px, 16px); }
        }
        @keyframes rsDrift3 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-18px, -24px); }
        }
        @keyframes rsDrift4 {
          0%, 100% { transform: translate(0px, 0px); }
          60% { transform: translate(22px, 18px); }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 300, height: 300, background: 'rgba(255,255,255,0.13)', top: '-90px', right: '-70px', animation: 'rsDrift1 10s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 200, height: 200, background: 'rgba(255,255,255,0.10)', bottom: '-60px', left: '-40px', animation: 'rsDrift2 13s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 130, height: 130, background: 'rgba(255,255,255,0.08)', top: '30%', left: '10%', animation: 'rsDrift3 8s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 75, height: 75, background: 'rgba(255,255,255,0.10)', bottom: '20%', right: '15%', animation: 'rsDrift4 11s ease-in-out infinite' }} />
      </div>

      {/* Browser frame */}
      <div
        ref={browserRef}
        className="relative z-10"
        style={{
          width: 420,
          borderRadius: 10,
          overflow: 'hidden',
          boxShadow: '0 25px 70px rgba(0,0,0,0.25)',
          background: 'white',
          transform: 'perspective(900px) rotateY(0deg) rotateX(0deg)',
          transition: 'transform 0.15s ease-out',
          willChange: 'transform',
        }}
      >
        {/* Safari chrome */}
        <div style={{ background: '#e8e8e8', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #d0d0d0' }}>
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c940' }} />
          </div>
          <div style={{ flex: 1, background: 'white', borderRadius: 5, padding: '3px 8px', fontSize: 10, color: '#888', fontFamily: 'sans-serif', textAlign: 'center' }}>
            marleyspoon.com/account
          </div>
        </div>
        {/* Screenshot */}
        <div style={{ height: 300, overflow: 'hidden' }}>
          <img src="/resub-browser.webp" alt="Resubscription strategy" style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
      </div>
    </div>
  )
}

function PaymentRetryIllustration({ bg }) {
  const containerRef = useRef(null)
  const phoneRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect || !phoneRef.current) return
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    phoneRef.current.style.transform = `perspective(700px) rotateY(${x * 18}deg) rotateX(${-y * 14}deg) scale3d(1.04, 1.04, 1.04)`
  }

  const handleMouseLeave = () => {
    if (phoneRef.current) phoneRef.current.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center"
      style={{ backgroundColor: bg }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes prDrift1 {
          0%, 100% { transform: translate(0px, 0px); }
          33% { transform: translate(22px, -30px); }
          66% { transform: translate(-14px, 18px); }
        }
        @keyframes prDrift2 {
          0%, 100% { transform: translate(0px, 0px); }
          40% { transform: translate(-25px, 20px); }
          80% { transform: translate(16px, -14px); }
        }
        @keyframes prDrift3 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(18px, 28px); }
        }
        @keyframes prDrift4 {
          0%, 100% { transform: translate(0px, 0px); }
          60% { transform: translate(-20px, -18px); }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 280, height: 280, background: 'rgba(255,255,255,0.13)', top: '-80px', left: '-60px', animation: 'prDrift1 9s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 200, height: 200, background: 'rgba(255,255,255,0.10)', bottom: '-50px', right: '-40px', animation: 'prDrift2 12s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 130, height: 130, background: 'rgba(255,255,255,0.08)', top: '35%', right: '12%', animation: 'prDrift3 7s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 80, height: 80, background: 'rgba(255,255,255,0.10)', top: '18%', left: '18%', animation: 'prDrift4 10s ease-in-out infinite' }} />
      </div>

      {/* Phone screen — 3D tilt follows cursor */}
      <div
        ref={phoneRef}
        className="relative z-10"
        style={{
          width: 220,
          height: 440,
          borderRadius: 29,
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
          transform: 'perspective(700px) rotateY(0deg) rotateX(0deg)',
          transition: 'transform 0.15s ease-out',
          willChange: 'transform',
        }}
      >
        <img src="/payment-retry-screen-1.webp" alt="Payment retry app screen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  )
}

function ProjectIllustration({ id, bg }) {
  const illustrations = {
    1: <MealKitIllustration bg={bg} />,
    2: <ResubIllustration bg={bg} />,
    3: <PaymentRetryIllustration bg={bg} />,
    4: <ReturnPortalIllustration bg={bg} />,
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
    <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-charcoal/12 group">

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
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-charcoal text-center">
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
