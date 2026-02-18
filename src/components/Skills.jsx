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

const tools = [
  { name: 'Figma', level: 95 },
  { name: 'Adobe XD', level: 85 },
  { name: 'Sketch', level: 80 },
  { name: 'Protopie', level: 75 },
  { name: 'Webflow', level: 70 },
  { name: 'HTML/CSS', level: 65 },
]

const marqueeItems = [
  'UI Design', 'Figma', 'User Research', 'Prototyping',
  'Design Systems', 'Usability Testing', 'Interaction Design',
  'Adobe XD', 'A/B Testing', 'Visual Design', 'Wireframing', 'Webflow',
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 overflow-hidden">
      {/* Scrolling marquee */}
      <div className="border-y-[3px] border-charcoal bg-charcoal py-4 mb-28 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="flex gap-8 animate-marquee shrink-0 pr-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-display text-3xl text-cream flex items-center gap-8">
                {item}
                <span className="text-accent">·</span>
              </span>
            ))}
          </div>
          <div className="flex gap-8 animate-marquee shrink-0 pr-8" aria-hidden="true">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-display text-3xl text-cream flex items-center gap-8">
                {item}
                <span className="text-accent">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-10 h-[3px] bg-charcoal" />
          <span className="font-sans text-sm font-semibold tracking-[0.15em] uppercase text-charcoal/50">
            Skills & Tools
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: skill groups */}
          <div>
            <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.95] text-charcoal mb-10">
              What I bring to the table
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="font-sans font-black text-sm uppercase tracking-widest text-accent mb-4" style={{ fontWeight: 900 }}>
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 font-body text-[15px] text-charcoal/80"
                      >
                        <span className="w-1.5 h-1.5 bg-charcoal rounded-full shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: proficiency bars */}
          <div>
            <div className="border-[3px] border-charcoal p-8">
              <h3 className="font-sans font-black text-base uppercase tracking-widest text-charcoal mb-8" style={{ fontWeight: 900 }}>
                Tool Proficiency
              </h3>
              <div className="space-y-7">
                {tools.map((tool) => (
                  <div key={tool.name}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-sans font-bold text-charcoal" style={{ fontWeight: 700 }}>{tool.name}</span>
                      <span className="font-body text-sm text-charcoal/50">{tool.level}%</span>
                    </div>
                    <div className="h-[6px] bg-charcoal/10 w-full">
                      <div
                        className="h-full bg-charcoal transition-all duration-1000"
                        style={{ width: `${tool.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Process steps */}
              <div className="mt-10 pt-8 border-t-[3px] border-charcoal">
                <h3 className="font-sans font-black text-base uppercase tracking-widest text-charcoal mb-6" style={{ fontWeight: 900 }}>
                  My Process
                </h3>
                <div className="space-y-4">
                  {['Discover', 'Define', 'Design', 'Test', 'Deliver'].map((step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <span className="font-display text-3xl text-accent">0{i + 1}</span>
                      <span className="font-sans font-bold text-charcoal text-lg" style={{ fontWeight: 700 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
