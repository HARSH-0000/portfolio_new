import { portfolio } from "../data/portfolio"
import { SectionLabel } from "./SectionLabel"

export function Credentials() {
  const { credentials } = portfolio

  return (
    <section className="section-padding border-t border-border">
      <SectionLabel number="07" label="Credentials" />
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">{credentials.heading}</h2>

      <ul className="space-y-4">
        {credentials.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-muted leading-relaxed">
            <span className="text-accent font-mono shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
