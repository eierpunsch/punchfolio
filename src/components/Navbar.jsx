import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream border-b-[3px] border-charcoal' : 'bg-transparent'
      }`}
      style={{ height: '80px' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-3xl text-charcoal hover:text-accent transition-colors duration-200"
        >
          alex.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans font-600 text-[14px] tracking-wide text-charcoal underline-draw hover:text-accent transition-colors duration-200"
              style={{ fontWeight: 600 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="ml-2 px-5 py-2 border-[3px] border-charcoal text-charcoal font-sans font-bold text-[13px] hover:bg-charcoal hover:text-cream transition-all duration-200"
            style={{ fontWeight: 700 }}
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[3px] bg-charcoal transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-[3px] bg-charcoal transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[3px] bg-charcoal transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t-[3px] border-charcoal px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans font-bold text-lg text-charcoal hover:text-accent transition-colors"
              style={{ fontWeight: 700 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="mt-2 inline-block px-5 py-2 border-[3px] border-charcoal font-bold text-sm text-charcoal hover:bg-charcoal hover:text-cream transition-all w-fit"
            style={{ fontWeight: 700 }}
          >
            Resume ↗
          </a>
        </div>
      )}
    </header>
  )
}
