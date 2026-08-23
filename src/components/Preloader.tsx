import { useEffect, useState } from "react"

interface PreloaderProps {
  onDone: () => void
}

export function Preloader({ onDone }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const started = performance.now()
    const duration = 1600

    const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - started) / duration) * 100))
      setProgress(pct)
      if (pct < 100) {
        requestAnimationFrame(tick)
      } else {
        setLeaving(true)
        setTimeout(onDone, 500)
      }
    }

    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center transition-opacity duration-500 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="text-5xl md:text-6xl font-bold text-gradient font-mono mb-6">H.S</span>
      <div className="w-48 h-px bg-border relative overflow-hidden mb-4">
        <div
          className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="font-mono text-xs text-muted">
        <span className="text-accent">{progress}%</span>
        {" · loading pipeline"}
      </p>
    </div>
  )
}
