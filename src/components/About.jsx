export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-[760px] mx-auto">

        {/* Title */}
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-charcoal mb-12 md:mb-16">
          Hey! I'm Punch, originally from Thailand and currently based in Tokyo.
        </h1>

        {/* Body */}
        <div className="space-y-8">
          <p className="font-body text-base md:text-lg text-charcoal/65 leading-relaxed">
            I studied in Anthropology &amp; Sociology and developed my interest in UI/UX design during my masters abroad in Heidelberg, Germany. I later took a course in Interaction Design in Tallinn, Estonia to dive deeper into UX.
          </p>
          <p className="font-body text-base md:text-lg text-charcoal/65 leading-relaxed">
            I officially started my UX career in Germany 2019, where I gained experience working in startups as well as mid-size companies. My main expertise lies in e-commerce and B2C business. Recently I moved to Tokyo and have extended my skills to B2B SaaS products, focusing on improving dashboards and AI product experiences.
          </p>
          <p className="font-body text-base md:text-lg text-charcoal/65 leading-relaxed">
            Outside work, I spend most of my time with Pilates, gaming, cats, and more cats. Oh, and snowboarding, my newest winter obsession. Sadly, I don't have cats in Tokyo right now, but let me introduce you to my beloved foster kitties from Germany: Michael, Ronja, and Zorba.
          </p>
          <p className="font-body text-base md:text-lg text-charcoal/65 leading-relaxed">
            Thank you for visiting my portfolio. I hope you enjoy looking at these kitties.
          </p>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 items-end">
            {[
              { src: '/Punch.png', name: 'Punch' },
              { src: '/Michael.png', name: 'Michael' },
              { src: '/Ronja.png', name: 'Ronja' },
              { src: '/Zorba.png', name: 'Zorba' },
            ].map(({ src, name }) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <img
                  src={src}
                  alt={name}
                  className="w-full h-auto"
                />
                <span className="font-sans text-[12px] tracking-[0.12em] uppercase text-charcoal/50" style={{ fontWeight: 600 }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
