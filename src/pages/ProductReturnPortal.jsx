const tags = ['User Research', 'UI/UX Design', 'B2C', 'Consumer UX']

const meta = [
  { label: 'Company', value: 'Emma Sleep GmbH' },
  { label: 'Location', value: 'Frankfurt am Main, Germany' },
  { label: 'Year', value: '2019' },
  { label: 'Platform', value: 'Web' },
]

export default function ProductReturnPortal() {
  return (
    <article className="px-4 md:px-8 py-20 md:py-32">
      <div className="max-w-[960px] mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-charcoal mb-6">
            Product Return Portal
          </h1>
          <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed w-full mb-10">
            Emma Sleep started in Germany and quickly grew into one of Europe's fastest-moving sleep-tech companies. They built their reputation on a simple USPs: a 100-night trial, a 10-year guarantee, and free delivery and returns. During the years I worked at Emma Sleep, the websites attracted an estimated 250,000–400,000 weekly visitors worldwide. In 2019, I created a self-service returns portal that saved customer service time, improved customer experience, and provided product teams with better feedback.
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

        {/* Cover image */}
        <div className="w-full aspect-video rounded-sm mb-20 md:mb-28 overflow-hidden">
          <img src="/return-portal-cover.webp" alt="Product Return Portal" className="w-full h-full object-cover scale-110" />
        </div>

        {/* Sections */}
        <div className="space-y-20 md:space-y-28">

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">The Challenge</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <blockquote className="border-l-2 border-accent pl-6 mb-8">
                  <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed italic">
                    "Emma Sleep offers a 100-nights-free trial for all their products for users, resulted in the soaring amount of return requests for customer service agents."
                  </p>
                </blockquote>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  Emma Sleep's generous policies encouraged many customers to try the products with confidence. This also produced a high number of returns, especially during peak sales periods. The customer service team managed everything manually, which slowed down response times and left many return reasons undocumented. Product teams missed important insights because of incomplete data.
                </p>
              </div>
              <div className="w-full md:w-[220px] shrink-0 overflow-hidden">
                <img src="/return-portal-challenge.webp" alt="Emma Sleep help centre returns flow" className="w-full h-auto" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Goal</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              I set out to design a process that reduced workload, increased speed, and collected reliable data.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              The aim was to relieve the customer service team, provide customers with faster resolution, and give product teams consistent return reasons for analysis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Gathering Insights</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <div className="flex flex-col md:flex-row gap-10 items-start">

              {/* Text content */}
              <div className="flex-1 space-y-10">
                <div>
                  <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
                    I worked directly with the UK customer service team to understand the process.
                  </p>
                  <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                    I joined their daily work and processed return requests myself. I saw long conversations with customers about alternatives before a return was approved. I also observed clear spikes in requests during seasons like Black Friday and summer sales.
                  </p>
                </div>
                <div>
                  <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
                    Less than 70% of returns included a documented reason.
                  </p>
                  <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                    The missing information limited the ability of product teams to improve the product. The most common reasons that were captured included "too soft" or "too firm" mattress.
                  </p>
                </div>
              </div>

              {/* Process infographic */}
              <div className="w-full md:w-[260px] shrink-0">
                <img src="/return-portal-process.svg" alt="Existing Return Process" className="w-full h-auto" />
              </div>

            </div>
          </section>

          {/* Return reasons bubble chart */}
          <div className="rounded-2xl border border-charcoal/8 p-8 md:p-10">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/30 mb-10" style={{ fontWeight: 600 }}>Top Return Reasons</p>
            <div className="flex flex-wrap justify-center items-end gap-3 md:gap-5">
              {[
                { label: 'Too soft', pct: '28%', size: 140, color: '#0099ff', dark: true },
                { label: 'Too firm', pct: '22%', size: 122, color: '#85b8e0', dark: true },
                { label: "Don't need it", pct: '18%', size: 106, color: '#7ac4b0', dark: true },
                { label: 'Wrong size', pct: '13%', size: 90, color: '#c4b5d4', dark: true },
                { label: 'Emit smells', pct: '13%', size: 90, color: '#f4a67a', dark: true },
                { label: 'Others', pct: '6%', size: 62, color: '#e5ddd3', dark: false },
              ].map(({ label, pct, size, color, dark }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center text-center rounded-full shrink-0"
                  style={{ width: size, height: size, backgroundColor: color }}
                >
                  <p
                    className="font-sans px-3 leading-tight"
                    style={{ fontWeight: 700, fontSize: Math.max(9, Math.floor(size / 11)), color: dark ? 'white' : '#777' }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-display"
                    style={{ fontSize: Math.max(14, Math.floor(size / 5)), color: dark ? 'rgba(255,255,255,0.9)' : '#999' }}
                  >
                    {pct}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Design Discovery</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              I mapped the full return journey and created a plan for automation.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              I documented each step of the existing process and designed a self-service portal with stakeholders. The new flow captured reasons consistently and logged interactions automatically.
            </p>
          </section>

          {/* Flow diagram */}
          <div className="w-full rounded-2xl overflow-hidden border border-charcoal/8">
            <img src="/return-portal-flow.webp" alt="Return portal user flow diagram" className="w-full h-auto" />
          </div>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">High-fidelity Design</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
                  Customers could log in with only their order number and email.
                </p>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  Fewer than 20% had created accounts at purchase, so the account-free design reduced friction. The flow also handled small items like pillows and bed covers more smoothly.
                </p>
              </div>
              <div className="w-full md:w-[220px] shrink-0">
                <img src="/return-portal-hifi.gif" alt="High-fidelity return portal design" className="w-full h-auto" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Solutions</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              The portal provided tailored alternatives for common return reasons.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              For example, UK customers who reported a mattress as too firm were offered a free topper to adjust firmness. They also received an extended trial period to allow more time to adapt. Each major return reason was paired with a similar countermeasure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Impact & Performance</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              The portal saved time for agents and reduced return volumes.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed mb-12">
              The easier process did not increase total return rates in the first three months. Customers value the options of trying a solution before sending products back.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">-60%</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>In return rate for the reason "mattress is too firm" in the UK. Many users opted to try out a complimentary comfort layer instead of proceeding with the return process.</p>
              </div>
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">-18%</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>In return rate for other reasons. Due to the counter solution offered for various return reasons, we saw that many users have tried our solution before returning products immediately.</p>
              </div>
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">-20 hrs</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>In weekly operating time for customer service agents.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Retrospective</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              The project delivered strong results despite resource constraints.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              I worked within a two-person UX team that supported eight markets. Budget and time restrictions meant usability testing was done internally with employees instead of external users. For future iterations, I would run structured user interviews and external usability studies to validate the portal across a wider audience.
            </p>
          </section>

        </div>

        {/* Final Screens */}
        <div className="-mx-4 md:-mx-8 px-4 md:px-8 mt-20 md:mt-28">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/30 mb-6" style={{ fontWeight: 600 }}>Final Screens</p>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {[1, 5, 2, 3, 4].map(n => (
              <div key={n} className="overflow-hidden rounded-xl">
                <img
                  src={`/return-portal-screen-${n}.webp`}
                  alt={`Return portal screen ${n}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
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
