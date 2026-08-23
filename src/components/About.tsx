import { portfolio } from "../data/portfolio"
import { SectionLabel } from "./SectionLabel"

export function About() {
  const { about } = portfolio

  return (
    <section id="about" className="section-padding border-t border-border">
      <SectionLabel number="01" label="About" />

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-muted text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="glass rounded-lg p-6 font-mono text-sm">
          <div className="text-muted text-xs mb-4 uppercase tracking-wider">current_stack</div>
          <ul className="space-y-3">
            {about.stack.map((item) => (
              <li key={item.label} className="flex gap-3">
                <span className="text-accent shrink-0">{item.label}</span>
                <span className="text-text">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
