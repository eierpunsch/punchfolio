const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/12 px-6 md:px-10 py-8">
      <div className="max-w-[1400px] mx-auto flex justify-center">
        <p className="font-body text-xs text-charcoal/30">
          © {year} Punchfolio. Designed &amp; built with kitties.
        </p>

      </div>
    </footer>
  )
}
