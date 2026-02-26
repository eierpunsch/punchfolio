const tags = ['User Research', 'UI/UX Design', 'Multivariate Testing', 'B2C', 'Consumer UX']

const meta = [
  { label: 'Company', value: 'Marley Spoon SE' },
  { label: 'Location', value: 'Berlin, Germany' },
  { label: 'Year', value: '2024' },
  { label: 'Platform', value: 'Web' },
]

export default function ResubscriptionStrategy() {
  return (
    <article className="px-6 md:px-10 py-20 md:py-32">
      <div className="max-w-[860px] mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal/35 mb-6" style={{ fontWeight: 600 }}>
            Case Study
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-charcoal mb-6">
            Re-subscription Strategy
          </h1>
          <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed w-full mb-10">
            Marley Spoon sends weekly meal kits, customer select recipes, and the company delivers fresh, seasonal ingredients to cook at home. Marley Spoon had around 300,000 active subscribers worldwide. During my time there, I led the design of a subscription reactivation flow for Marley Spoon and its sibling brand Dinnerly, improving conversion from 4.5% to 5.6% in key markets (the U.S. and Australia) between 2022 and 2024.
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
        <div className="w-full aspect-video bg-[#f4a67a] rounded-sm mb-20 md:mb-28 flex items-center justify-center">
          <p className="font-sans text-[11px] uppercase tracking-widest text-white/60" style={{ fontWeight: 600 }}>Cover Image</p>
        </div>

        {/* Sections */}
        <div className="space-y-20 md:space-y-28">

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">The Challenge</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <blockquote className="border-l-2 border-accent pl-6 mb-8">
              <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed italic">
                "Users who deactivated for more than three weeks landed on an empty page with no upcoming orders shown."
              </p>
            </blockquote>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Many meal kit customers switch brands often, only 10% stay loyal to Marley Spoon. After three weeks of inactivity, we disable recipe generation, leaving returning users confused and uninspired to reactivate.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">User Research</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              I interviewed 11 former subscribers who has unsubscribed in the past six months.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Each session lasted about 45 minutes and included hands-on reactivation tasks. I asked questions about their reasons for leaving. Then participants navigated the reactivation flow and reviewed Marley Spoon's reactivation marketing email.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Insights</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              Most users found the reactivation steps easy to understand, but few wanted to return.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Many anticipated using a discount temporarily and then canceling again. Some users declined to return due to unclear pricing, missing details, or unappealing menu options.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Competitor Analysis</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              I reviewed how competitors handle reactivation flows.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Every competitor I looked at directs users into "Select Meals" with a single click. Meals options were shown to users to attract them during the reactivation process. Users reactivate first, then customize the plan, skip the cart, or change delivery schedule afterward.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Stakeholder Workshop</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              I brought product, CRM, marketing, data, and customer service together to identify opportunities.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              We mapped pain points and ideas from each team's perspective. The workshop helped us agree on which features would solve the most urgent problems and deliver measurable improvements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Conceptualization</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              I designed a landing page that showed weekly menus, pricing, and subscription details before reactivation.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              85% of returning users came back after more than four weeks. By that time, most had forgotten their previous subscription details. The new preview reminded them what they could expect and gave them enough context to make a confident decision.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Prototype</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              I built a clickable prototype for mobile and desktop to simulate the new flow.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              On mobile, I placed a sticky cart at the bottom with price and a clear CTA button. Because 94% of users reactivated through promotional links, the cart always showed the discounted price. Tapping the button revealed a summary of the upcoming order.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Multivariate Test</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              I tested three versions of the flow to see which design produced the best results.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Variant A was the control. Variant B focused on weekly menus. Variant C emphasized subscription details and pricing. We tracked conversion, engagement, and reactivation-to-delivery rates to compare performance across versions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Impact & Performance</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              Displaying the weekly menu did not result in a higher reactivation rate.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed mb-12">
              28% of users exposed to variant B, featuring weekly menus, experienced lower reactivation and reactivation-to-delivery rates. Our assumption was that although users may initially be excited by the menu, upon viewing it, they may choose not to reactivate their subscription if the week's recipes are not suitable for them. Ultimately, we chose variant C due to its superior overall performance.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-10">
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">+4.5%</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>In conversion rate* in the US over the period of 3 months</p>
              </div>
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">+2.7%</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>In reactivation-to-delivery rate** in the US over the period of 3 months</p>
              </div>
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">+5.6%</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>In conversion rate* in Australia over the period of 3 months</p>
              </div>
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">+2.1%</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>In reactivation-to-delivery rate** in Australia over the period of 3 months</p>
              </div>
            </div>

            <div className="border-t border-charcoal/10 pt-6 space-y-2">
              <p className="font-body text-xs text-charcoal/40 leading-relaxed">*Conversion rate measures the percentage of users who click on a CTA to reactivate their accounts.</p>
              <p className="font-body text-xs text-charcoal/40 leading-relaxed">**Reactivation-to-delivery rate measures the percentage of users who receive a delivery after reactivating their accounts.</p>
            </div>
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
