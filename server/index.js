import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const NVIDIA_URL =
  process.env.NVIDIA_API_URL ||
  "https://integrate.api.nvidia.com/v1/chat/completions"
const MODEL = "meta/llama-3.3-70b-instruct"
const API_KEY = process.env.NVIDIA_API_KEY?.trim()

if (!API_KEY) {
  console.warn("Warning: NVIDIA_API_KEY is not set in .env")
}

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body || {}

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request: messages array required" })
    }

    const response = await fetch(NVIDIA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        max_tokens: 512,
        temperature: 0.6,
      }),
    })

    if (!response.ok) {
      const text = await response.text()
      return res.status(response.status).json({
        error: `NVIDIA API error ${response.status}: ${text.slice(0, 240)}`,
      })
    }

    const data = await response.json()
    const reply = data?.choices?.[0]?.message?.content
    if (!reply) {
      return res.status(502).json({ error: "NVIDIA API returned an empty response" })
    }

    res.json({ reply: reply.trim() })
  } catch (err) {
    console.error("Proxy error:", err)
    res.status(500).json({ error: "Unable to reach NVIDIA API" })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`)
})
