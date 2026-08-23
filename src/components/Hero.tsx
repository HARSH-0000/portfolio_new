import { portfolio } from "../data/portfolio"
import PipelineViz from "./PipelineViz"

export function Hero() {
  const { hero } = portfolio

  return (
    <section id="top" className="min-h-screen flex items-center section-padding pt-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green/30 bg-green/5 text-green text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
            {hero.availability}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient">{hero.name}.</span>
            <br />
            <span className="text-text">{hero.title} </span>
            <span className="text-muted font-normal">{hero.tagline}</span>
          </h1>

          <p className="text-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            {hero.education}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={hero.cta.projects}
              className="px-5 py-2.5 bg-accent text-bg font-medium text-sm rounded hover:bg-accent/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href={hero.cta.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-border text-text font-medium text-sm rounded hover:border-accent/50 transition-colors"
            >
              Résumé
            </a>
            <a
              href={`mailto:${hero.cta.contact}`}
              className="px-5 py-2.5 border border-border text-text font-medium text-sm rounded hover:border-accent/50 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted font-mono">
            <span>{hero.location}</span>
            <a href={`tel:${hero.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
              {hero.phone}
            </a>
            <a href={hero.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <PipelineViz />
        </div>
      </div>
    </section>
  )
}
