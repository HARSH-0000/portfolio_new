import { portfolio } from "../data/portfolio"

export function Marquee() {
  const items = [...portfolio.marquee, ...portfolio.marquee]

  return (
    <div className="border-y border-border py-4 overflow-hidden bg-surface/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="mx-6 font-mono text-sm text-muted">
            {item} ·
          </span>
        ))}
      </div>
    </div>
  )
}
