import { portfolio } from "../data/portfolio"
import { SectionLabel } from "./SectionLabel"

export function Skills() {
  const { skills } = portfolio

  return (
    <section id="skills" className="section-padding border-t border-border">
      <SectionLabel number="06" label="Skills" />
      <h2 className="text-2xl md:text-3xl font-semibold mb-12">{skills.heading}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.groups.map((group, i) => (
          <div key={group.label}>
            <h3 className="font-mono text-xs text-muted mb-4">
              0{i + 1}/{group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm border border-border rounded font-mono text-text hover:border-accent/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
