const tags = ['Data Viz', 'B2B', 'Enterprise UX', 'B2C', 'Consumer UX']

const meta = [
  { label: 'Company', value: 'Marley Spoon SE' },
  { label: 'Location', value: 'Berlin, Germany' },
  { label: 'Year', value: '2023' },
  { label: 'Platform', value: 'Product' },
]

export default function PaymentRetry() {
  return (
    <article className="px-6 md:px-10 py-20 md:py-32">
      <div className="max-w-[860px] mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal/35 mb-6" style={{ fontWeight: 600 }}>
            Case Study
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-charcoal mb-6">
            Payment Retry
          </h1>
          <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed w-full mb-10">
            Designed a complex B2B analytics dashboard for data teams, transforming overwhelming data tables into clear, actionable visualisations used by 500+ companies.
          </p>

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-charcoal/12 py-8 mb-10">
            {meta.map(({ label, value }) => (
              <div key={label}>
                <p className="font-sans text-[10px] uppercase tracking-widest text-charcoal/30 mb-1" style={{ fontWeight: 600 }}>{label}</p>
                <p className="font-sans text-sm text-charcoal/70" style={{ fontWeight: 600 }}>{value}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 text-[11px] font-sans bg-charcoal/5 text-charcoal/50 border border-charcoal/10" style={{ fontWeight: 600 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Cover image placeholder */}
        <div className="w-full aspect-video bg-[#7ac4b0] rounded-sm mb-20 md:mb-28 flex items-center justify-center">
          <p className="font-sans text-[11px] uppercase tracking-widest text-white/60" style={{ fontWeight: 600 }}>Cover Image</p>
        </div>

        {/* Sections */}
        <div className="space-y-20 md:space-y-28">

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">The Challenge</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Placeholder — describe the problem you were solving and the business context.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Research & Discovery</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Placeholder — share your research methods, key findings, and user insights.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Design Process</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Placeholder — walk through your ideation, wireframes, and iterations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Solution</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Placeholder — present the final design and key decisions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Results & Impact</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Placeholder — share measurable outcomes and what you learned.
            </p>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-24 pt-10 border-t border-charcoal/12">
          <a
            href="/"
            className="group inline-flex items-center gap-2 font-sans text-sm text-charcoal/40 hover:text-charcoal transition-colors duration-200"
            style={{ fontWeight: 600 }}
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Back to all work
          </a>
        </div>

      </div>
    </article>
  )
}
