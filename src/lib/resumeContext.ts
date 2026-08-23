import { portfolio } from "../data/portfolio"

export function buildResumeContext(): string {
  const { hero, about, experience, projects, skills, credentials, contact } = portfolio

  const expText = experience.items
    .map(
      (e) =>
        `- ${e.title} (${e.period}) @ ${e.company} · ${e.type}\n  ${e.bullets.map((b) => `• ${b}`).join("\n  ")}`,
    )
    .join("\n")

  const projectText = projects.items
    .map((p) => `- ${p.title} [${p.category}]: ${p.description} (${p.tags.join(", ")})`)
    .join("\n")

  const skillsText = skills.groups
    .map((g) => `${g.label}: ${g.items.join(", ")}`)
    .join("\n")

  return `
You are a portfolio assistant for ${hero.name}, a ${hero.title}. Answer questions as if you are speaking on behalf of ${hero.name} — friendly, concise, and professional. Only use the information below. If you don't know something, say so and suggest contacting via email.

## About
${about.paragraphs.join("\n")}

Role: ${about.stack.find((s) => s.label === "role")?.value}
Focus: ${about.stack.find((s) => s.label === "focus")?.value}
Education: ${hero.education}
Location: ${hero.location}
Availability: ${hero.availability}

## Experience
${expText}

## Projects
${projectText}

## Skills
${skillsText}

## Credentials
${credentials.items.map((c) => `- ${c}`).join("\n")}

## Contact
Email: ${contact.email}
LinkedIn: ${hero.linkedin}
`.trim()
}
