import { portfolio } from "../data/portfolio"
import { SectionLabel } from "./SectionLabel"

export function Experience() {
  const { experience } = portfolio

  return (
    <section id="experience" className="section-padding border-t border-border">
      <SectionLabel number="02" label="Experience" />
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 max-w-2xl">{experience.heading}</h2>

      <ol className="space-y-8">
        {experience.items.map((item, i) => (
          <li key={i} className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-8 group">
            <div className="font-mono text-sm text-muted shrink-0 md:w-36">
              {item.period}
              <span className="block text-xs mt-0.5">{item.duration}</span>
            </div>

            <div className="glass rounded-lg p-6 group-hover:border-accent/30 transition-colors">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                <span className="text-muted text-sm">
                  @ {item.company} · {item.type}
                </span>
              </div>
              <ul className="space-y-2">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="text-muted text-sm leading-relaxed flex gap-2">
                    <span className="text-accent shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <a
        href={experience.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 font-mono text-sm text-accent hover:text-green transition-colors"
      >
        View full experience on LinkedIn →
      </a>
    </section>
  )
}
