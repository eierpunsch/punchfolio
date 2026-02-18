export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-[80px] px-6"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-10 h-[3px] bg-accent" />
          <span className="font-sans text-sm font-semibold tracking-[0.15em] uppercase text-accent">
            Available for work
          </span>
        </div>

        {/* Greeting */}
        <p className="font-sans font-semibold text-xl md:text-2xl text-charcoal/60 mb-2" style={{ fontWeight: 600 }}>
          Hi there, I'm
        </p>

        {/* Name — giant display font */}
        <h1 className="font-display text-[clamp(5rem,15vw,11rem)] leading-[0.9] text-charcoal mb-6 -ml-1">
          Punchfolio
        </h1>

        {/* Role tag */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="inline-flex items-center px-5 py-2 border-[3px] border-charcoal font-sans font-bold text-lg text-charcoal bg-cream">
            UI/UX Designer
          </span>
          <span className="font-display text-3xl text-charcoal/40">&</span>
          <span className="inline-flex items-center px-5 py-2 border-[3px] border-charcoal font-sans font-bold text-lg bg-charcoal text-cream">
            Product Thinker
          </span>
        </div>

        {/* Description */}
        <p className="font-body text-lg md:text-xl text-charcoal/70 max-w-[560px] leading-relaxed mb-12" style={{ fontWeight: 400 }}>
          I design digital experiences that feel intuitive and look beautiful —
          from early research and wireframes to polished, pixel-perfect interfaces.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="px-8 py-4 bg-charcoal text-cream font-sans font-bold text-[15px] hover:bg-accent transition-colors duration-200 border-[3px] border-charcoal hover:border-accent"
            style={{ fontWeight: 700 }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-[3px] border-charcoal text-charcoal font-sans font-bold text-[15px] hover:bg-charcoal hover:text-cream transition-all duration-200"
            style={{ fontWeight: 700 }}
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 hidden md:flex items-center gap-3 text-charcoal/40">
          <div className="flex flex-col gap-1 items-center">
            <div className="w-[2px] h-12 bg-charcoal/20 relative overflow-hidden">
              <div className="absolute top-0 w-full h-4 bg-charcoal/60 animate-bounce" />
            </div>
          </div>
          <span className="font-sans text-xs tracking-[0.2em] uppercase font-semibold rotate-0">
            Scroll to explore
          </span>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 top-[80px] w-[40vw] max-w-[600px] h-[calc(100vh-80px)] pointer-events-none hidden lg:block overflow-hidden">
        <svg
          viewBox="0 0 600 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-[0.07]"
        >
          <circle cx="300" cy="350" r="280" stroke="#333" strokeWidth="3" />
          <circle cx="300" cy="350" r="200" stroke="#333" strokeWidth="3" />
          <circle cx="300" cy="350" r="120" stroke="#333" strokeWidth="3" />
          <line x1="20" y1="350" x2="580" y2="350" stroke="#333" strokeWidth="3" />
          <line x1="300" y1="70" x2="300" y2="630" stroke="#333" strokeWidth="3" />
          <line x1="102" y1="152" x2="498" y2="548" stroke="#333" strokeWidth="3" />
          <line x1="498" y1="152" x2="102" y2="548" stroke="#333" strokeWidth="3" />
        </svg>
      </div>
    </section>
  )
}
