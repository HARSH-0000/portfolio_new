import { useRef, useState } from "react"
import { portfolio } from "../data/portfolio"
import { askNvidia } from "../lib/nvidia"
import { SectionLabel } from "./SectionLabel"

interface Message {
  role: "user" | "bot"
  text: string
}

export function AskMe() {
  const { askMe } = portfolio
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: askMe.greeting },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const send = async (text: string) => {
    if (!text.trim() || typing) return

    const userMessage = text.trim()
    const updatedMessages: Message[] = [...messages, { role: "user", text: userMessage }]
    setMessages(updatedMessages)
    setInput("")
    setTyping(true)

    try {
      const reply = await askNvidia(updatedMessages)
      setMessages((m) => [...m, { role: "bot", text: reply }])
    } catch (err) {
      const errorText =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      const isUnauthorized = errorText.includes("401") || errorText.includes("403")
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: isUnauthorized
            ? "The NVIDIA API key was rejected. Check the backend proxy configuration."
            : "Sorry, I couldn't reach the AI service right now. Please try again in a moment.",
        },
      ])
    } finally {
      setTyping(false)
      setTimeout(scrollToBottom, 50)
    }
  }

  return (
    <section id="ask" className="section-padding border-t border-border">
      <SectionLabel number="05" label="Ask me anything" />
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Talk to a small AI trained on my resume.</h2>
      <p className="text-muted mb-8">
        <span className="text-green font-mono text-xs">live · streaming</span>
        {"  "}It answers as me — about my work, stack, projects, and availability. Skip the scroll if you're in a hurry.
      </p>

      <div className="glass rounded-lg overflow-hidden max-w-2xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <span className="font-mono text-sm text-accent">{askMe.botName}</span>
          <span className="text-green text-xs font-mono animate-pulse-dot">● online</span>
          <span className="ml-auto text-xs text-muted font-mono">powered by nvidia · llama 3.3</span>
        </div>

        <div className="h-72 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-lg text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-accent/20 text-text"
                    : "bg-bg/80 text-muted border border-border"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="text-muted text-sm font-mono animate-pulse">typing...</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="px-4 py-3 border-t border-border flex flex-wrap gap-2">
          {askMe.suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              disabled={typing}
              className="text-xs font-mono px-3 py-1 border border-border rounded-full text-muted hover:border-accent/50 hover:text-accent transition-colors disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>

        <form
          className="flex gap-2 p-4 border-t border-border"
          onSubmit={(e) => {
            e.preventDefault()
            send(input)
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            disabled={typing}
            className="flex-1 bg-bg/50 border border-border rounded px-4 py-2 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent/50 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={typing || !input.trim()}
            className="px-4 py-2 bg-accent text-bg text-sm font-medium rounded hover:bg-accent/90 transition-colors disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
