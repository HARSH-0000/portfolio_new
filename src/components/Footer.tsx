import { portfolio } from "../data/portfolio"

export function Footer() {
  const { footer } = portfolio

  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-muted text-sm font-mono">
          © {new Date().getFullYear()} {footer.name}
        </p>
      </div>
    </footer>
  )
}
