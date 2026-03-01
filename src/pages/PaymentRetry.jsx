import { useRef, useState, useEffect } from 'react'

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
    if (ref.current) ref.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
  }
  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      className={`bg-charcoal/[0.03] border border-charcoal/8 rounded-xl p-6 ${className}`}
      style={{ transition: 'transform 0.15s ease', willChange: 'transform' }}>
      {children}
    </div>
  )
}

const tags = ['User Research', 'UI/UX Design', 'Content Design', 'A/B Testing', 'B2C', 'Consumer UX']

const meta = [
  { label: 'Company', value: 'Marley Spoon SE' },
  { label: 'Location', value: 'Berlin, Germany' },
  { label: 'Year', value: '2023' },
  { label: 'Platform', value: 'Mobile iOS' },
]

export default function PaymentRetry() {
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
            Payment Retry
          </h1>
          <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed w-full mb-10">
            Marley Spoon, a meal kit subscription service, faced issues with failed payments during automatic weekly billing. I designed a payment re-attempt solution that led to a 4.4% increase in payment recovery rate.
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
          <img src="/payment-retry-cover.webp" alt="Payment Retry" className="w-full h-full object-cover scale-125" />
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
                    "If a payment fails, users are currently only informed via email and SMS. There is no communication directly within their subscription account."
                  </p>
                </blockquote>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  For a meal kit subscription, the order processing period typically spans 4-5 days, with the first day being the payment date. When a payment fails, users have a short window of 8-48 hours to resolve the issue before the order reaches the packing stage. However, due to a lack of clear guidance, many users were unaware that there was a payment issue with their order.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Research & Discovery</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <div className="space-y-10">
              <div>
                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
                  The majority of users expressed frustration and confusion due to the unclear communication regarding payment re-attempts and the order status.
                </p>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  Together with the customer service team, we reviewed complaint logs and found that after receiving the notification via email or SMS, users would check their order status on website and mobile app and see that their order status remained in "in process" stage in their account. Seeing no information about payment failure, they assumed that the payment issue was resolved or it was a false alarm from the service.
                </p>
              </div>
              <div>
                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
                  Approximately 90% of payment failures were due to insufficient funds in the user's payment method.
                </p>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  According to the complaints, we discovered that many users acknowledged they didn't have enough funds on their credit card or bank account when the order was being charged. They also expressed a desire to resolve their payment failure issues and clear their debt sooner, without having to wait for the automatic charge.
                </p>
              </div>
            </div>

            {/* User quotes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              {[
                { quote: "I'm very upset that my orders say it is 'in progress' instead of 'failed/cancelled' after the payment failed. I was still expecting the box to be deliveryed because the wording on the order status isn't clear.", author: 'Marley Spoon customer in Australia' },
                { quote: "My payment failed and I updated my payment details within the specified time frame ... I went on the app and it said my order was 'processing' so i thought the payment worked and it was still coming.", author: 'Marley Spoon customer in the US' },
                { quote: "Last week my payment failed ... but it said if you're a long time customer we may still send it. Well, the box wasn't sent. I am disappointed that the communication wasn't clear", author: 'Marley Spoon customer in Australia' },
                { quote: "After a failed payment there is too little time to change the method. ... And on the website the status of this delivery still says in process. This is very confusing because you think the box is still coming.", author: 'Marley Spoon customer in Germany' },
                { quote: "There is no ability to re-attempt payment withdrawal within 24 hours as most other food services offer. There is zero information available through the app, or online, about completing a manual payment when payment issues arise.", author: 'Marley Spoon customer in the US' },
                { quote: "When billing fails, why can't you send the link to pay for the failed order manually on like HelloFresh? ... If you had sent me a link to pay for this order along with the payment failure email, I shouldn't have missed my box for this week.", author: 'Marley Spoon customer in the US' },
              ].map(({ quote, author }) => (
                <TiltCard key={author + quote.slice(0, 20)}>
                  <p className="font-body text-sm md:text-base text-charcoal/70 leading-relaxed mb-6 italic">"{quote}"</p>
                  <p className="font-sans text-[11px] text-charcoal/40 uppercase tracking-widest" style={{ fontWeight: 600 }}>— {author}</p>
                </TiltCard>
              ))}
            </div>
          </section>

<section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Conceptualization</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              By providing a "one-click" payment retry in customer accounts, users can easily resolve their payment issues.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              This feature allows users to re-attempt their payment at any time without changing their payment method. This idea originated from user complaints about not having alternative payment methods to switch to when a payment failure occurs.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[1, 2, 3].map(n => (
                <div key={n} className="overflow-hidden rounded-xl border border-charcoal/8 w-[220px] shrink-0">
                  <img src={`/payment-retry-sketch-${n}.webp`} alt={`Conceptualization sketch ${n}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Content Design</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              Beyond payment failures, we enhanced all payment-related content to improve user understanding and guide them in recognizing potential issues.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              In collaboration with a copywriter, we discovered that users who had paused their subscriptions for an extended period often experienced payment failures when they returned to the service. To address this, we decided to implement an automatic payment authorization for these users when they reactivate their accounts. If there's a risk that their payment might fail for an upcoming order, they will be notified to update their payment information.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[1, 2, 3].map(n => (
                <div key={n} className="overflow-hidden rounded-xl w-[220px] shrink-0">
                  <img src={`/payment-retry-content-${n}.webp`} alt={`Content design screen ${n}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Solution</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
                  From the order status, users can now re-attempt their payment immediately without updating a new payment method.
                </p>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  Prior to this design, implementing a new order status was considered out of scope. However, I demonstrated to the team that clear order statuses are crucial for our users, providing them with accurate updates about their orders. This not only helps users resolve payment issues more quickly but also increases transparency regarding their orders.
                </p>
              </div>

              <div className="shrink-0 flex justify-center">
                <img
                  src="/payment-retry-prototype.gif"
                  alt="Payment retry prototype"
                  className="w-[240px] h-auto rounded-xl"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">A/B Test</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              To ensure we selected the right solution, we decided to conduct an A/B test, using the payment recovery rate as the primary KPI.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Through the A/B test, we can determine whether users actively re-attempt their payments on their own by monitoring the success rate of the re-attempt feature. Additionally, we will compare the results between the re-attempt feature and automatic billing. To gain deeper insights into user behavior, we will segment the data by factors such as long-term versus new customers, active versus reactivating customers, order frequency, device type, and payment history.
            </p>

            <div className="flex flex-col md:flex-row gap-8 mt-10 justify-center">
              {[
                { src: '/payment-retry-ab-control.webp', label: 'Control Version' },
                { src: '/payment-retry-ab-version-a.webp', label: 'Version A' },
              ].map(({ src, label }) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest" style={{ fontWeight: 600 }}>{label}</p>
                  <img src={src} alt={label} className="w-[240px] h-auto" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Results & Impact</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              According to the A/B test, the feature was highly successful. In the first month alone, 1,500 users actively resolved their payment issues within 24 hours.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed mb-12">
              In addition to increasing revenue, we have observed a significant decrease in customer complaints, as reported by the customer service team.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">+4.4%</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>In payment recovery rate</p>
              </div>
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">+62%</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>Of users clicked 'try again' button to see more information about their payment failure</p>
              </div>
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">+76%</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>Of users updated their payment method successfully</p>
              </div>
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">+17k</p>
                <p className="font-sans text-sm text-charcoal/70 leading-snug" style={{ fontWeight: 600 }}>In net revenue in the US within first 3 months, driven by improved payment recovery</p>
              </div>
            </div>
          </section>

        </div>

        {/* Screen showcase */}
        <div className="mt-20 md:mt-28 -mx-4 md:-mx-8 px-4 md:px-8">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal/35 mb-8 max-w-[960px] mx-auto" style={{ fontWeight: 600 }}>Final Screens</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { src: '/payment-retry-screen-1.webp', alt: 'Order pending - payment failed state' },
              { src: '/payment-retry-screen-2.webp', alt: 'In progress - payment issue with delivery note' },
              { src: '/payment-retry-screen-3.webp', alt: 'Payment retry screen' },
              { src: '/payment-retry-screen-4.webp', alt: 'Payment retry - failed attempt state' },
              { src: '/payment-retry-screen-5.webp', alt: 'Multiple outstanding payments screen' },
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
