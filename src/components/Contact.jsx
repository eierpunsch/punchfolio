const socials = [
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'Twitter', href: 'https://twitter.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/30" style={{ fontWeight: 600 }}>04</span>
          <span className="w-8 h-px bg-charcoal/20" />
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/40" style={{ fontWeight: 600 }}>Get in Touch</span>
        </div>

        {/* Big statement */}
        <div className="border-t border-charcoal/15 pt-10 md:pt-16 mb-10 md:mb-14">
          <h2 className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.85] text-charcoal mb-6">
            Let's work<br />together
          </h2>
          <p className="font-body text-base md:text-lg text-charcoal/55 max-w-[440px] leading-relaxed">
            Got a project in mind? Whether it's a quick question or a full
            project brief, my inbox is always open.
          </p>
        </div>

        {/* Email CTA */}
        <div className="mb-14 md:mb-20">
          <a
            href="mailto:punchfolio@example.com"
            className="group inline-flex items-center gap-4 font-display text-[clamp(1.2rem,3vw,2.5rem)] text-charcoal hover:text-accent transition-colors duration-300"
          >
            punchfolio@example.com
            <span className="group-hover:translate-x-2 transition-transform duration-300 text-accent">→</span>
          </a>
        </div>

        {/* Info strip */}
        <div className="border-t border-charcoal/15 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 mb-10">
          <div className="sm:border-r sm:border-charcoal/10 sm:pr-10">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/30 mb-2" style={{ fontWeight: 600 }}>
              Currently
            </p>
            <p className="font-sans text-sm text-charcoal" style={{ fontWeight: 700 }}>Open to freelance</p>
            <p className="font-body text-sm text-charcoal/50">&amp; full-time roles</p>
          </div>
          <div className="sm:border-r sm:border-charcoal/10 sm:px-10">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/30 mb-2" style={{ fontWeight: 600 }}>
              Based in
            </p>
            <p className="font-sans text-sm text-charcoal" style={{ fontWeight: 700 }}>San Francisco, CA</p>
            <p className="font-body text-sm text-charcoal/50">Remote-friendly</p>
          </div>
          <div className="sm:pl-10">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/30 mb-2" style={{ fontWeight: 600 }}>
              Response time
            </p>
            <p className="font-sans text-sm text-charcoal" style={{ fontWeight: 700 }}>Within 24 hours</p>
            <p className="font-body text-sm text-charcoal/50">Usually faster</p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-6 md:gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-charcoal/35 hover:text-charcoal transition-colors underline-draw"
              style={{ fontWeight: 600 }}
            >
              {s.label} ↗
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
