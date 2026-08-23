import { portfolio } from "../data/portfolio"

export function Contact() {
  const { contact } = portfolio

  return (
    <section id="contact" className="section-padding border-t border-border">
      <p className="font-mono text-accent text-sm mb-4">// let's build something</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-2xl">{contact.heading}</h2>

      <a
        href={`mailto:${contact.email}`}
        className="text-2xl md:text-3xl text-gradient font-mono hover:opacity-80 transition-opacity block mb-8"
      >
        Initialize Connection
      </a>

      <a
        href="tel:+919767755630"
        className="text-muted font-mono text-sm mb-8 hover:text-accent transition-colors"
      >
        Reach out @ +91 9767755630
      </a>

      <div className="flex flex-wrap gap-3 mb-12">
        <a
          href={`mailto:${contact.email}`}
          className="px-5 py-2.5 bg-accent text-bg font-medium text-sm rounded hover:bg-accent/90 transition-colors"
        >
          Email
        </a>
        <a
          href={contact.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 border border-border text-text font-medium text-sm rounded hover:border-accent/50 transition-colors"
        >
          Résumé
        </a>
      </div>

      <div className="flex flex-wrap gap-6 font-mono text-sm">
        {contact.social.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
