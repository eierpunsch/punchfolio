const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '40+', label: 'Projects Delivered' },
  { value: '18', label: 'Happy Clients' },
  { value: '3', label: 'Design Awards' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="inline-block w-10 h-[3px] bg-charcoal" />
          <span className="font-sans text-sm font-semibold tracking-[0.15em] uppercase text-charcoal/50">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] text-charcoal mb-8">
              Designing with purpose &amp; care
            </h2>

            <div className="space-y-5 font-body text-[16px] leading-relaxed text-charcoal/75">
              <p>
                I'm a UI/UX Designer based in San Francisco, with a passion for
                creating products that make people's lives a little easier and a
                lot more enjoyable. I believe great design lives at the
                intersection of empathy, logic, and craft.
              </p>
              <p>
                My process starts with listening — really understanding users and
                business goals before a single pixel is placed. From there, I move
                through research, wireframing, prototyping, and testing until the
                solution feels just right.
              </p>
              <p>
                When I'm not designing, you'll find me hiking trails in Marin,
                exploring typography, or obsessing over a good espresso.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="px-6 py-3 bg-charcoal text-cream font-sans font-bold text-sm border-[3px] border-charcoal hover:bg-accent hover:border-accent transition-all duration-200"
                style={{ fontWeight: 700 }}
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-[3px] border-charcoal text-charcoal font-sans font-bold text-sm hover:bg-charcoal hover:text-cream transition-all duration-200"
                style={{ fontWeight: 700 }}
              >
                Say Hello
              </a>
            </div>
          </div>

          {/* Right: Visual card + stats */}
          <div className="flex flex-col gap-8">
            {/* Portrait placeholder */}
            <div className="relative">
              <div className="border-[3px] border-charcoal w-full aspect-[4/3] bg-[#e8ddd0] overflow-hidden relative">
                {/* Abstract design illustration */}
                <svg
                  viewBox="0 0 480 360"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Background */}
                  <rect width="480" height="360" fill="#e8ddd0" />

                  {/* Desk */}
                  <rect x="60" y="230" width="360" height="12" fill="#c4b09a" />
                  <rect x="100" y="242" width="12" height="80" fill="#c4b09a" />
                  <rect x="368" y="242" width="12" height="80" fill="#c4b09a" />

                  {/* Monitor */}
                  <rect x="140" y="100" width="200" height="130" rx="4" fill="#333" />
                  <rect x="148" y="108" width="184" height="114" fill="#f6eee3" />
                  {/* Screen content */}
                  <rect x="158" y="120" width="80" height="8" rx="2" fill="#0099ff" />
                  <rect x="158" y="136" width="120" height="6" rx="2" fill="#333" opacity="0.3" />
                  <rect x="158" y="148" width="100" height="6" rx="2" fill="#333" opacity="0.3" />
                  <rect x="158" y="160" width="140" height="6" rx="2" fill="#333" opacity="0.3" />
                  {/* Wireframe box on screen */}
                  <rect x="248" y="120" width="70" height="50" rx="2" fill="none" stroke="#333" strokeWidth="2" />
                  <rect x="253" y="125" width="60" height="30" rx="1" fill="#0099ff" opacity="0.3" />
                  {/* Monitor stand */}
                  <rect x="226" y="230" width="28" height="10" fill="#333" />
                  <rect x="210" y="228" width="60" height="6" rx="2" fill="#333" />

                  {/* Laptop */}
                  <rect x="70" y="185" width="110" height="70" rx="3" fill="#555" />
                  <rect x="75" y="190" width="100" height="60" fill="#f6eee3" />
                  <rect x="60" y="252" width="130" height="8" rx="2" fill="#555" />
                  {/* Laptop screen content */}
                  <rect x="82" y="198" width="40" height="4" rx="1" fill="#0099ff" />
                  <rect x="82" y="208" width="60" height="3" rx="1" fill="#333" opacity="0.3" />
                  <rect x="82" y="216" width="50" height="3" rx="1" fill="#333" opacity="0.3" />
                  <rect x="82" y="224" width="55" height="3" rx="1" fill="#333" opacity="0.3" />
                  <rect x="82" y="232" width="45" height="3" rx="1" fill="#333" opacity="0.3" />

                  {/* Plant */}
                  <rect x="390" y="200" width="20" height="32" fill="#c4b09a" />
                  <ellipse cx="400" cy="200" rx="22" ry="28" fill="#7aab6a" />
                  <ellipse cx="385" cy="195" rx="16" ry="22" fill="#5e9050" />
                  <ellipse cx="415" cy="192" rx="14" ry="20" fill="#5e9050" />

                  {/* Coffee mug */}
                  <rect x="340" y="210" width="28" height="24" rx="3" fill="#f6eee3" stroke="#333" strokeWidth="2" />
                  <path d="M368 216 Q378 216 378 222 Q378 228 368 228" fill="none" stroke="#333" strokeWidth="2" />
                  <rect x="344" y="216" width="20" height="6" rx="1" fill="#0099ff" opacity="0.4" />

                  {/* Floating elements */}
                  <circle cx="430" cy="80" r="20" fill="none" stroke="#0099ff" strokeWidth="3" opacity="0.4" />
                  <circle cx="50" cy="150" r="14" fill="none" stroke="#333" strokeWidth="3" opacity="0.15" />
                  <rect x="420" y="130" width="30" height="30" rx="2" fill="none" stroke="#333" strokeWidth="2" opacity="0.15" transform="rotate(15 435 145)" />

                  {/* Pen/stylus */}
                  <rect x="310" y="228" width="4" height="26" rx="2" fill="#333" transform="rotate(-20 312 241)" />
                </svg>
              </div>
              {/* Offset border decoration */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-[3px] border-accent -z-10" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-charcoal border-[3px] border-charcoal">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-cream px-6 py-5">
                  <div className="font-display text-5xl text-charcoal">{stat.value}</div>
                  <div className="font-sans text-xs font-semibold text-charcoal/50 mt-1 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
