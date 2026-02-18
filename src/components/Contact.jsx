const socials = [
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'Twitter', href: 'https://twitter.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-10 h-[3px] bg-charcoal" />
          <span className="font-sans text-sm font-semibold tracking-[0.15em] uppercase text-charcoal/50">
            Get in Touch
          </span>
        </div>

        {/* Big heading */}
        <div className="border-[3px] border-charcoal p-10 md:p-16 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
          <div className="flex-1">
            <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] text-charcoal mb-6">
              Let's work together
            </h2>
            <p className="font-body text-lg text-charcoal/70 max-w-[480px] leading-relaxed">
              Got a project in mind? I'd love to hear about it. Whether it's a
              quick question or a full project brief, my inbox is always open.
            </p>
          </div>

          {/* CTA card */}
          <div className="flex flex-col gap-4 shrink-0">
            <a
              href="mailto:alex@example.com"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-charcoal text-cream font-sans font-bold text-lg border-[3px] border-charcoal hover:bg-accent hover:border-accent transition-all duration-200"
              style={{ fontWeight: 700 }}
            >
              Say Hello
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <p className="font-body text-sm text-charcoal/50 text-center">
              alex@example.com
            </p>
          </div>
        </div>

        {/* Currently section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal border-[3px] border-charcoal">
          <div className="bg-cream px-8 py-7">
            <p className="font-sans text-xs font-semibold text-charcoal/40 uppercase tracking-widest mb-2">
              Currently
            </p>
            <p className="font-sans font-bold text-charcoal" style={{ fontWeight: 700 }}>
              Open to freelance
            </p>
            <p className="font-body text-sm text-charcoal/60 mt-1">& full-time roles</p>
          </div>
          <div className="bg-cream px-8 py-7">
            <p className="font-sans text-xs font-semibold text-charcoal/40 uppercase tracking-widest mb-2">
              Based in
            </p>
            <p className="font-sans font-bold text-charcoal" style={{ fontWeight: 700 }}>
              San Francisco, CA
            </p>
            <p className="font-body text-sm text-charcoal/60 mt-1">Remote-friendly</p>
          </div>
          <div className="bg-cream px-8 py-7">
            <p className="font-sans text-xs font-semibold text-charcoal/40 uppercase tracking-widest mb-2">
              Response time
            </p>
            <p className="font-sans font-bold text-charcoal" style={{ fontWeight: 700 }}>
              Within 24 hours
            </p>
            <p className="font-body text-sm text-charcoal/60 mt-1">Usually faster</p>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-10 flex flex-wrap gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border-[3px] border-charcoal font-sans font-bold text-sm text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-200 underline-draw"
              style={{ fontWeight: 700 }}
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
