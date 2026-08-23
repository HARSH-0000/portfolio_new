import { useCallback, useMemo, useState } from "react"
import { SectionLabel } from "./SectionLabel"

const MODEL_QUESTIONS = [
  {
    clue: "Bidirectional Transformer trained by masking random tokens in a sentence.",
    options: ["GPT-2", "BERT", "ResNet-50"],
    answer: 1,
    hint: "The 'B' is for Bidirectional.",
  },
  {
    clue: "Autoregressive language model that predicts the next token in a sequence.",
    options: ["BERT", "GPT-2", "YOLO"],
    answer: 1,
    hint: "OpenAI's early open-source release.",
  },
  {
    clue: "Convolutional neural network that won ImageNet 2012 and revived deep learning.",
    options: ["AlexNet", "LSTM", "Transformer"],
    answer: 0,
    hint: "Named after its creators.",
  },
  {
    clue: "Framework for building and training neural networks, created at Google.",
    options: ["PyTorch", "TensorFlow", "Keras-only"],
    answer: 1,
    hint: "Flows tensors through computation graphs.",
  },
  {
    clue: "Technique to adapt a pre-trained LLM to a specific task with labeled examples.",
    options: ["Quantization", "Fine-tuning", "Dropout"],
    answer: 1,
    hint: "You tune the weights on your data.",
  },
]

function shuffleIndices(length: number): number[] {
  const indices = Array.from({ length }, (_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return indices
}

export function Playground() {
  const [questionOrder, setQuestionOrder] = useState(() => shuffleIndices(MODEL_QUESTIONS.length))
  const [orderIndex, setOrderIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showHint, setShowHint] = useState(false)

  const [latencyState, setLatencyState] = useState<"idle" | "warm" | "ready" | "done">("idle")
  const [reactionMs, setReactionMs] = useState<number | null>(null)
  const [bestMs, setBestMs] = useState<number | null>(null)
  const [readyTime, setReadyTime] = useState(0)

  const question = useMemo(
    () => MODEL_QUESTIONS[questionOrder[orderIndex]],
    [questionOrder, orderIndex],
  )

  const handleAnswer = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    if (idx === question.answer) setScore((s) => s + 1)
  }

  const nextQuestion = () => {
    const nextIndex = orderIndex + 1

    if (nextIndex >= MODEL_QUESTIONS.length) {
      setQuestionOrder(shuffleIndices(MODEL_QUESTIONS.length))
      setOrderIndex(0)
    } else {
      setOrderIndex(nextIndex)
    }

    setSelected(null)
    setShowHint(false)
  }

  const startLatency = useCallback(() => {
    setLatencyState("warm")
    setReactionMs(null)
    const delay = 1500 + Math.random() * 2500
    setTimeout(() => {
      setReadyTime(performance.now())
      setLatencyState("ready")
    }, delay)
  }, [])

  const handleLatencyClick = () => {
    if (latencyState === "idle" || latencyState === "done") {
      startLatency()
    } else if (latencyState === "ready") {
      const ms = Math.round(performance.now() - readyTime)
      setReactionMs(ms)
      setBestMs((b) => (b === null ? ms : Math.min(b, ms)))
      setLatencyState("done")
    }
  }

  return (
    <section id="playground" className="section-padding border-t border-border">
      <SectionLabel number="04" label="Playground" />
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Two small games. One dev joke.</h2>
      <p className="text-muted mb-12">Because a portfolio should be fun to poke at.</p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass rounded-lg p-6">
          <h3 className="font-mono text-sm text-accent mb-4">guess the model</h3>
          <p className="text-xs text-muted mb-4">
            {orderIndex + 1}/{MODEL_QUESTIONS.length} · score {score}
          </p>
          <p className="text-text mb-6 leading-relaxed">{question.clue}</p>

          <div className="space-y-2 mb-4">
            {question.options.map((opt, i) => {
              let style = "border-border hover:border-accent/50"
              if (selected !== null) {
                if (i === question.answer) style = "border-green bg-green/10 text-green"
                else if (i === selected) style = "border-red-400 bg-red-400/10 text-red-400"
              }
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleAnswer(i)}
                  disabled={selected !== null}
                  className={`w-full text-left px-4 py-3 border rounded font-mono text-sm transition-colors ${style}`}
                >
                  {opt}
                </button>
              )
            })}
          </div>

          {showHint && (
            <p className="text-xs text-muted mb-3 font-mono">hint: {question.hint}</p>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowHint(true)}
              className="text-xs font-mono text-muted hover:text-accent"
            >
              show hint
            </button>
            {selected !== null && (
              <button
                type="button"
                onClick={nextQuestion}
                className="text-xs font-mono text-accent hover:text-green"
              >
                next →
              </button>
            )}
          </div>
        </div>

        <div className="glass rounded-lg p-6">
          <h3 className="font-mono text-sm text-accent mb-4">inference latency</h3>
          <p className="text-xs text-muted mb-6">
            best — {bestMs !== null ? `${bestMs}ms` : "—"}
          </p>

          <button
            type="button"
            onClick={handleLatencyClick}
            className={`w-full h-40 rounded-lg border-2 font-mono text-sm transition-all duration-200 ${
              latencyState === "ready"
                ? "border-accent bg-accent/20 text-accent scale-[1.02]"
                : latencyState === "warm"
                  ? "border-yellow-500/50 bg-yellow-500/5 text-yellow-500"
                  : latencyState === "done"
                    ? "border-green/50 bg-green/5 text-green"
                    : "border-border bg-bg/50 text-muted hover:border-accent/30"
            }`}
          >
            {latencyState === "idle" && "click to warm up\nthen react when it turns cyan"}
            {latencyState === "warm" && "warming up model..."}
            {latencyState === "ready" && "CLICK NOW!"}
            {latencyState === "done" && (
              <>
                {reactionMs}ms
                <span className="block text-xs mt-2 text-muted">click to try again</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
