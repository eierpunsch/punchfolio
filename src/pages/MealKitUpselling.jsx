import { useState, useEffect } from 'react'

const tags = ['User Research', 'UI/UX Design', 'Usability Testing', 'iOS Design', 'B2C', 'Consumer UX']

const meta = [
  { label: 'Company', value: 'Marley Spoon SE' },
  { label: 'Location', value: 'Berlin, Germany' },
  { label: 'Year', value: '2024' },
  { label: 'Platform', value: 'Mobile / iOS' },
]

export default function MealKitUpselling() {
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
            Meal-kit Upselling
          </h1>
          <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed w-full mb-10">
            Marley Spoon sends weekly meal kits, customers select recipes, and the company delivers fresh, seasonal ingredients to cook at home. Marley Spoon had around 300,000 active subscribers worldwide. In addition to the meal-kit subscription, Marley Spoon offers Market, a marketplace featuring ingredients and pantry goods. I have contributed to enhancing the upselling strategy for Market products, increasing attachment rates by ~2.5% and boosting the average order value by 0.5% to net revenue.
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
          <img src="/meal-kit-cover.webp" alt="Meal-kit Upselling" className="w-full h-full object-cover scale-110" />
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
                    "Marley Spoon & Dinnerly launched their marketplace in 2022. The global attachment rate of the marketplace has plateaued at 8% since its launch."
                  </p>
                </blockquote>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  The marketplace lacks sufficient visibility. While email marketing can highlight products, customers cannot access them directly from emails, they must manually navigate the marketplace during recipe selection. Limited promotional space exists on mobile and web platforms.
                </p>
              </div>
              <div className="w-full md:w-[220px] shrink-0 rounded-2xl overflow-hidden shadow-md">
                <img src="/meal-kit-challenge.gif" alt="Marketplace browsing experience" className="w-full h-auto" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Collecting Data</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <div className="space-y-12">
              <div>
                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
                  Enabling users to modify proteins or sides using a customizable feature has effectively boosted the average order value.
                </p>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  Customizable recipes were initially introduced in early 2023. This feature allows customers to modify or upgrade the protein or side in each recipe. Additionally, it enables vegetarian users to remove animal protein or substitute it with plant-based protein. The customizable recipes have proven to be highly successful, resulting in an uplift in conversion rates of around 4%.
                </p>
              </div>
              <div>
                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
                  Utilizing a customizable feature allowing customers to include appetizers or desserts with their recipe created an additional 2.5%–5% of the marketplace attachment rate.
                </p>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  Using the same feature, the culinary team experimented with allowing customers to add marketplace products instead of changing proteins, such as an appetizer like garlic bread, to their orders. Incorporating these items with the recipe resulted in up to an additional revenue increase in the featured product. However, due to the limitation of allowing customers to change only one aspect of the recipe at a time, we observed a trade-off: while marketplace revenue increased, there was a decline in the number of customers changing proteins or sides.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-12 justify-center">
              <div className="w-full md:w-[280px] shrink-0 rounded-2xl overflow-hidden shadow-md">
                <img src="/meal-kit-data-1.gif" alt="Customizable recipe selection" className="w-full h-auto" />
              </div>
              <div className="w-full md:w-[280px] shrink-0 rounded-2xl overflow-hidden shadow-md">
                <img src="/meal-kit-data-2.gif" alt="Marketplace pairing feature" className="w-full h-auto" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Landscape Analysis</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              Many meal-kit subscriptions have introduced a food pairing concept into their offerings by incorporating market products and bundling them as part of a full-course meal experience.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              It has become a common trend in the meal-kit industry that after establishing their subscription services, many companies such as HelloFresh, Blue Apron, and Sunbasket have expanded their offerings to include grocery shopping experiences. To drive growth in these product categories, they also implement various cross-selling and upselling strategies within their subscription plans.
            </p>
          </section>

          <div className="w-full rounded-2xl overflow-hidden">
            <img src="/meal-kit-landscape.webp" alt="Landscape analysis of meal-kit competitors" className="w-full h-auto" />
          </div>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Identifying Opportunities</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              Together with the merchandising team, we have decided to introduce a pairing feature to customers in addition to customizing the recipe.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              With the pairing feature, customers can not only tailor their recipe according to their needs, but also personalize their meal by including a market product such as an appetizer, dessert, or drink to elevate their experience. Besides the new pairing feature, we also prioritize a new promotional strategy improving the market products' visibility throughout the user journey.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Conceptualization</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Building upon the existing UX pattern of recipe customization, the design explored how to introduce the pairing feature in a way that felt native to the existing flow, reducing friction while surfacing market products at the most relevant moment in the customer journey.
            </p>
          </section>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 overflow-hidden">
              <img src="/meal-kit-sketch-1.webp" alt="Bottom sheet modal sketch for normal recipe" className="w-full h-auto" />
            </div>
            <div className="flex-1 overflow-hidden">
              <img src="/meal-kit-sketch-2.webp" alt="Bottom sheet modal sketch for customizable recipe" className="w-full h-auto" />
            </div>
          </div>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">High-fidelity Design</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              Including images of raw ingredients for customizable recipes could be disturbing for many users.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              I believe that displaying customizable ingredients could help users understand what they would receive in their recipe when they customize it. However, many ingredients for customizable recipes include raw meat. There was a hypothesis that images of raw meat could be unappealing to vegan and vegetarian users, potentially lowering the conversion rate. To ensure the solution uses the right visuals, I decided to conduct a quick usability test.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Unmoderated Usability Test</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
              I conducted a comparative usability test with 42 customers, half of whom are vegetarian or vegan.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed mb-6">
              Comparative usability testing is a method in which multiple versions of a functional product are shown to users, and their feedback is measured against one another for each task. I designed a test comprising two versions of the customizing experience. In the test, users were asked to complete several tasks, such as customizing their recipe, adding a pairing item, and answering follow-up questions.
            </p>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              The test utilized a prototype based on the mobile app. Participants were divided into two groups. The first group viewed the feature with the raw meat image first, followed by the feature with icons. Conversely, the second group saw the icons first, followed by the raw meat image.
            </p>
          </section>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="w-full md:w-[280px] shrink-0 overflow-hidden">
              <img src="/meal-kit-usability-1.webp" alt="Usability test prototype - icons version" className="w-full h-auto" />
            </div>
            <div className="w-full md:w-[280px] shrink-0 overflow-hidden">
              <img src="/meal-kit-usability-2.webp" alt="Usability test prototype - raw meat image version" className="w-full h-auto" />
            </div>
          </div>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Test Result</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4" style={{ fontWeight: 600 }}>
                  Out of the 42 participants, only 8 mentioned that they did not want to see raw meat images.
                </p>
                <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
                  From those 8 people, 6 of them are either vegetarian or vegan. Due to the limitations of the unmoderated test, no in-depth reasons were provided on why raw meat ingredients weren't disturbing for them. However, several feedbacks mentioned that the ingredient images helped them visualize the choices they would get. Overall, the participants understood how to customize the recipe along with adding a market product.
                </p>
              </div>
              <div className="w-full md:w-[220px] shrink-0 rounded-2xl overflow-hidden shadow-md">
                <img src="/meal-kit-result.gif" alt="Final customization flow" className="w-full h-auto" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-charcoal mb-6">Results & Impact</h2>
            <div className="w-12 h-px bg-charcoal/20 mb-8" />
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">~2.5%</p>
                <p className="font-sans text-sm text-charcoal/50" style={{ fontWeight: 600 }}>Higher marketplace attachment rate</p>
              </div>
              <div>
                <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-accent mb-2">0.5%</p>
                <p className="font-sans text-sm text-charcoal/50" style={{ fontWeight: 600 }}>Increased average order value impact</p>
              </div>
            </div>
            <p className="font-body text-base md:text-lg text-charcoal/60 leading-relaxed">
              Leveraging the food pairing concept in Marley Spoon's meal-kit subscription drove meaningful upselling results, increasing the marketplace attachment rate by approximately 2.5% and boosting the average order value by 0.5% to net revenue.
            </p>
          </section>

        </div>

        {/* Screen showcase */}
        <div className="mt-20 md:mt-28 -mx-4 md:-mx-8 px-4 md:px-8">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal/35 mb-8 max-w-[960px] mx-auto" style={{ fontWeight: 600 }}>Final Screens</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { src: '/meal-kit-screen-1.webp', alt: 'Recipe detail with market pairing' },
              { src: '/meal-kit-screen-2.webp', alt: 'Bottom sheet with pairing suggestion' },
              { src: '/meal-kit-screen-3.webp', alt: 'Customizable recipe screen' },
              { src: '/meal-kit-screen-4.webp', alt: 'Market product detail' },
              { src: '/meal-kit-screen-5.webp', alt: 'Bottom sheet with customization and pairing' },
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
