import { portfolio } from "../data/portfolio"
import { SectionLabel } from "./SectionLabel"

export function Projects() {
  const { projects } = portfolio

  return (
    <section id="projects" className="section-padding border-t border-border">
      <SectionLabel number="03" label="Featured Projects" />
      <h2 className="text-2xl md:text-3xl font-semibold mb-12">{projects.heading}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.items.map((project, i) => (
          <a
            key={i}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-lg p-6 group hover:border-accent/40 transition-all hover:-translate-y-1 block"
          >
            <span className="font-mono text-xs text-accent">{project.category}</span>
            <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono border border-border rounded text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
