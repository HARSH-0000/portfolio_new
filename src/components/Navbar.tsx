import { useEffect, useState } from "react"
import { portfolio } from "../data/portfolio"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-accent hover:text-green transition-colors">
          {portfolio.nav.brand}
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {portfolio.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs text-muted hover:text-accent transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${portfolio.nav.hireMeEmail}`}
            className="hidden sm:inline-flex px-4 py-1.5 text-xs font-mono border border-accent/40 text-accent rounded hover:bg-accent/10 transition-colors"
          >
            hire me
          </a>
          <button
            type="button"
            className="md:hidden p-2 text-muted hover:text-accent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden glass border-t border-border px-6 py-4">
          <ul className="flex flex-col gap-3">
            {portfolio.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono text-sm text-muted hover:text-accent py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${portfolio.nav.hireMeEmail}`}
                className="block font-mono text-sm text-accent py-1"
              >
                hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
