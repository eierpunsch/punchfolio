import { useRef, useState, useEffect } from 'react'

const competitorImages = [
  { src: '/resub-competitor-1.webp', alt: 'Blue Apron reactivation flow' },
  { src: '/resub-competitor-2.webp', alt: 'HelloFresh reactivation flow' },
  { src: '/resub-competitor-3.webp', alt: 'EveryPlate reactivation flow' },
]

function Carousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(i => (i + 1) % competitorImages.length)
    }, 3000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const prev = () => { setCurrent(i => (i - 1 + competitorImages.length) % competitorImages.length); resetTimer() }
  const next = () => { setCurrent(i => (i + 1) % competitorImages.length); resetTimer() }

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {competitorImages.map(({ src, alt }) => (
          <div key={src} className="w-full shrink-0">
            <img src={src} alt={alt} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      {/* Prev / Next buttons */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cream/80 backdrop-blur-sm flex items-center justify-center text-charcoal hover:bg-cream transition-colors shadow-sm">
        ←
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cream/80 backdrop-blur-sm flex items-center justify-center text-charcoal hover:bg-cream transition-colors shadow-sm">
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {competitorImages.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer() }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-charcoal w-4' : 'bg-charcoal/30'}`}
          />
        ))}
      </div>
    </div>
  )
}

function TiltCard({ children, className = '' }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const card = ref.current
    if (!card) return
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    card.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = () => {
    const card = ref.current
    if (!card) return
    card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bg-charcoal/[0.03] border border-charcoal/8 rounded-xl p-6 ${className}`}
      style={{ transition: 'transform 0.15s ease', willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

const tags = ['User Research', 'UI/UX Design', 'Multivariate Testing', 'B2C', 'Consumer UX']

const meta = [
  { label: 'Company', value: 'Marley Spoon SE' },
  { label: 'Location', value: 'Berlin, Germany' },
  { label: 'Year', value: '2024' },
  { label: 'Platform', value: 'Web' },
]

export default function ResubscriptionStrategy() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <article className="px-4 md:px-8 py-20 md:py-32">
      <div className="max-w-[960px] mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
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

        {/* Cover image */}
        <div className="w-full aspect-video rounded-sm mb-20 md:mb-28 overflow-hidden">
          <img src="/resubscription-cover.webp" alt="Re-subscription Strategy" className="w-full h-full object-cover scale-110" />
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
                    "Users who deactivated for more than three weeks landed on an empty page with no upcoming orders shown."
                  </p>
                </blockquote>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  Many meal kit customers switch brands often, only 10% stay loyal to Marley Spoon. After three weeks of inactivity, we disable recipe generation, leaving returning users confused and uninspired to reactivate.
                </p>
              </div>
              <div className="w-full md:w-[220px] shrink-0 rounded-2xl overflow-hidden shadow-md">
                <img src="/resubscription-challenge.gif" alt="Empty state for deactivated users" className="w-full h-auto" />
              </div>
            </div>
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
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed mb-10">
              Many anticipated using a discount temporarily and then canceling again. Some users declined to return due to unclear pricing, missing details, or unappealing menu options.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { stat: '100%', text: 'of the participants subscribed to multiple meal kit brands at the same time. They indicated that upon receiving a more attractive offer, they would unsubscribe from one brand and switch to another.' },
                { stat: '55%', text: 'of the participants deactivated their subscription due to high costs. The rest of them said that they stopped using the service due to unappealing options, life changes, poor ingredients, and delivery issue.' },
                { stat: '36%', text: 'of the participants would return and leave after using the discount. The rest mentioned they wouldn\'t use the service again unless their issues were addressed.' },
                { stat: '45%', text: 'of the participants were certain that by reactivating their subscription, they would have to pay for their upcoming delivery immediately. The rest didn\'t know when they would pay for their upcoming box.' },
                { stat: '90%', text: 'of the participants appreciated the promotion but found it confusing. They were unsure if it was a new discount, particularly if they had already used one when signing up for Marley Spoon.' },
                { stat: '64%', text: 'of the participants expressed an interest in new customizable and discounted recipes. The new offerings sparked their curiosity and could be a factor in their decision to return and use Marley Spoon again.' },
              ].map(({ stat, text }, i) => (
                <TiltCard key={i}>
                  <p className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-accent mb-3">{stat}</p>
                  <p className="font-body text-sm md:text-base text-charcoal/60 leading-relaxed">{text}</p>
                </TiltCard>
              ))}
              <div className="md:col-span-2 md:w-1/2 md:mx-auto">
                <TiltCard>
                  <p className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-accent mb-3">36%</p>
                  <p className="font-body text-sm md:text-base text-charcoal/60 leading-relaxed">of the participants would not reactivate their subscription due to the absence in pricing details. The lack of information on discounts and taxes can prevent them from reactivating their account.</p>
                </TiltCard>
              </div>
            </div>
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

          <Carousel />

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

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 rounded-xl overflow-hidden">
              <img src="/resub-workshop-1.webp" alt="Problem Statement workshop board" className="w-full h-auto" />
            </div>
            <div className="flex-1 rounded-xl overflow-hidden">
              <img src="/resub-workshop-2.webp" alt="Opportunity of Improvement workshop board" className="w-full h-auto" />
            </div>
          </div>

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
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
                  I built a clickable prototype for mobile and desktop to simulate the new flow.
                </p>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  On mobile, I placed a sticky cart at the bottom with price and a clear CTA button. Because 94% of users reactivated through promotional links, the cart always showed the discounted price. Tapping the button revealed a summary of the upcoming order.
                </p>
              </div>
              <div className="w-full md:w-[220px] shrink-0 rounded-2xl overflow-hidden shadow-md">
                <img src="/resub-prototype.gif" alt="Prototype mobile flow" className="w-full h-auto" />
              </div>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/resub-variant-control.webp', label: 'Control' },
              { src: '/resub-variant-a.webp', label: 'Variant A' },
              { src: '/resub-variant-b.webp', label: 'Variant B' },
            ].map(({ src, label }) => (
              <div key={label}>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal/40 text-center mb-3" style={{ fontWeight: 600 }}>{label}</p>
                <div className="rounded-xl overflow-hidden">
                  <img src={src} alt={label} className="w-full h-auto" />
                </div>
              </div>
            ))}
          </div>

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

        {/* Screen showcase */}
        <div className="mt-20 md:mt-28 -mx-4 md:-mx-8 px-4 md:px-8">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal/35 mb-8 max-w-[960px] mx-auto" style={{ fontWeight: 600 }}>Final Screens</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { src: '/resub-screen-1.webp', alt: 'Welcome back screen' },
              { src: '/resub-screen-2.webp', alt: 'Why Choose Marley Spoon' },
              { src: '/resub-screen-3.webp', alt: 'New Preferred Menus' },
              { src: '/resub-screen-4.webp', alt: 'Your next box summary' },
              { src: '/resub-screen-5.webp', alt: 'Delivery date selection' },
            ].map(({ src, alt }) => (
              <div key={src} className="rounded-2xl overflow-hidden">
                <img src={src} alt={alt} className="w-full h-auto" />
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

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-10 h-10 bg-charcoal text-cream flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:bg-accent ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </article>
  )
}
