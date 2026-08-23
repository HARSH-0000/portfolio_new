import { buildResumeContext } from "./resumeContext"

const SYSTEM_PROMPT = buildResumeContext()
const PROXY_URL = "https://portfolio-new-7fst.onrender.com/api/chat"

interface ChatMessage {
  role: "user" | "bot"
  text: string
}

export async function askNvidia(history: ChatMessage[]): Promise<string> {
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history.map((msg) => ({
      role: msg.role === "user" ? "user" : "assistant",
      content: msg.text,
    })),
  ]

  const res = await fetch(PROXY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages,
    }),
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: "Unknown error" }))
    const errorMsg = body?.error || `Proxy error ${res.status}`
    if (res.status === 502) throw new Error("NVIDIA API returned an empty response")
    if (res.status === 500) throw new Error("Unable to reach NVIDIA API")
    throw new Error(`NVIDIA API error ${res.status}: ${errorMsg}`)
  }

  const data = await res.json()
  const reply = data?.reply
  if (!reply) throw new Error("NVIDIA API returned an empty response")
  return reply.trim()
}
