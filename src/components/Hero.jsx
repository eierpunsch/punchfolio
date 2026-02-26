import { useState, useEffect } from 'react'

const WORD = 'Punch'
const CHAR_DELAY = 200
const START_DELAY = 400

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    const start = setTimeout(() => setTyping(true), START_DELAY)
    return () => clearTimeout(start)
  }, [])

  useEffect(() => {
    if (!typing) return
    if (displayed.length >= WORD.length) return

    const timer = setTimeout(() => {
      setDisplayed(WORD.slice(0, displayed.length + 1))
    }, CHAR_DELAY)

    return () => clearTimeout(timer)
  }, [typing, displayed])

  const done = displayed.length === WORD.length

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col pt-[72px] px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col flex-1 py-10 md:py-14">

        {/* Main intro text — centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center w-full">
          <h1 className="font-display text-[clamp(3.5rem,5.5vw,5.5rem)] leading-[1] text-charcoal w-full">
            Hi, my name is{' '}
            <span className="punch-highlight">{displayed}</span>
            {!done && <span className="typing-cursor text-charcoal" style={{ WebkitTextFillColor: 'initial' }}>|</span>}
            . I'm a product designer based in Tokyo and this is my portfolio.
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex flex-col items-center gap-2 scroll-hint">
          <span
            className="font-sans text-[10px] tracking-[0.25em] uppercase text-charcoal/35"
            style={{ fontWeight: 600 }}
          >
            Scroll to see more
          </span>
          <div className="scroll-chevrons">
            <span />
            <span />
            <span />
          </div>
        </div>

      </div>
    </section>
  )
}
