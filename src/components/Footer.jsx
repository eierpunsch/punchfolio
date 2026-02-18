const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-charcoal px-6 py-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-2xl text-charcoal hover:text-accent transition-colors">
          alex.
        </a>

        <p className="font-body text-sm text-charcoal/40 text-center">
          © {year} Punchfolio. Designed &amp; built with care.
        </p>

        <div className="flex gap-6">
          <a href="#work" className="font-sans font-semibold text-sm text-charcoal/50 hover:text-charcoal transition-colors underline-draw">
            Work
          </a>
          <a href="#about" className="font-sans font-semibold text-sm text-charcoal/50 hover:text-charcoal transition-colors underline-draw">
            About
          </a>
          <a href="mailto:alex@example.com" className="font-sans font-semibold text-sm text-charcoal/50 hover:text-accent transition-colors underline-draw">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
