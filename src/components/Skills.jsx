const skillGroups = [
  {
    category: 'Design',
    skills: [
      'UI Design',
      'UX Design',
      'Interaction Design',
      'Design Systems',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Motion Design',
    ],
  },
  {
    category: 'Research',
    skills: [
      'User Interviews',
      'Usability Testing',
      'A/B Testing',
      'Heuristic Evaluation',
      'Competitive Analysis',
      'Surveys & Synthesis',
      'Jobs-to-be-Done',
      'Accessibility Audits',
    ],
  },
  {
    category: 'Tools',
    skills: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'Principle',
      'ProtoPie',
      'Illustrator',
      'Photoshop',
      'Webflow',
    ],
  },
  {
    category: 'Dev',
    skills: [
      'HTML & CSS',
      'Tailwind CSS',
      'Basic JavaScript',
      'React Basics',
      'Git & GitHub',
      'Storybook',
    ],
  },
]

const marqueeItems = [
  'UI Design', 'Figma', 'User Research', 'Prototyping',
  'Design Systems', 'Usability Testing', 'Interaction Design',
  'Adobe XD', 'A/B Testing', 'Visual Design', 'Wireframing', 'Webflow',
]

const process = ['Discover', 'Define', 'Design', 'Test', 'Deliver']

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 overflow-hidden">

      {/* Marquee */}
      <div className="border-y border-charcoal/12 bg-charcoal py-3 md:py-4 mb-20 md:mb-32 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="flex gap-6 md:gap-8 animate-marquee shrink-0 pr-6 md:pr-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-display text-2xl md:text-3xl text-cream flex items-center gap-6 md:gap-8">
                {item}
                <span className="text-accent">·</span>
              </span>
            ))}
          </div>
          <div className="flex gap-6 md:gap-8 animate-marquee shrink-0 pr-6 md:pr-8" aria-hidden="true">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-display text-2xl md:text-3xl text-cream flex items-center gap-6 md:gap-8">
                {item}
                <span className="text-accent">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/30" style={{ fontWeight: 600 }}>03</span>
          <span className="w-8 h-px bg-charcoal/20" />
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/40" style={{ fontWeight: 600 }}>Skills & Tools</span>
        </div>

        {/* Heading */}
        <div className="border-t border-charcoal/15 pt-10 mb-14">
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.9] text-charcoal">
            What I bring to the table
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-10 mb-20">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3
                className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent mb-5"
                style={{ fontWeight: 700 }}
              >
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-body text-[13px] md:text-sm text-charcoal/65 flex items-start gap-2"
                  >
                    <span className="w-1 h-1 bg-charcoal/20 rounded-full mt-[6px] shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process — horizontal steps */}
        <div className="border-t border-charcoal/15 pt-10">
          <h3
            className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/35 mb-8"
            style={{ fontWeight: 600 }}
          >
            My Process
          </h3>
          <div className="flex flex-col md:flex-row">
            {process.map((step, i) => (
              <div
                key={step}
                className="flex-1 flex items-center gap-4 py-5 border-t border-charcoal/10 md:border-t-0 md:border-l md:border-charcoal/10 md:pl-7 first:border-t-0 md:first:border-l-0 md:first:pl-0"
              >
                <span className="font-display text-3xl md:text-4xl text-accent/40 shrink-0">
                  0{i + 1}
                </span>
                <span
                  className="font-sans text-base md:text-lg text-charcoal"
                  style={{ fontWeight: 700 }}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
