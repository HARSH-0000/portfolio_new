import { useState } from "react"
import { portfolio } from "../data/portfolio"

interface IntroGateProps {
  onEnter: () => void
}

export function IntroGate({ onEnter }: IntroGateProps) {
  const [leaving, setLeaving] = useState(false)
  const [imgError, setImgError] = useState(false)
  const { hero } = portfolio

  const handleEnter = () => {
    setLeaving(true)
    // notify parent immediately so the preloader mounts beneath this fade
    onEnter()
  }

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center text-center px-6 transition-opacity duration-500 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* corner grids */}
      <div className="absolute top-0 left-0 w-[36rem] h-[36rem] bg-grid-tl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[36rem] h-[36rem] bg-grid-br pointer-events-none" />

      {!imgError ? (
        <img
          src="/profile.png"
          alt={hero.name}
          onError={() => setImgError(true)}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-[center_20%] border-2 border-accent/50 shadow-[0_0_60px_-12px_rgba(56,189,248,0.5)] mb-8 animate-fade-up"
        />
      ) : (
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-accent/50 bg-surface flex items-center justify-center shadow-[0_0_60px_-12px_rgba(56,189,248,0.5)] mb-8 animate-fade-up">
          <span className="text-4xl md:text-5xl font-bold text-gradient font-mono">HS</span>
        </div>
      )}

      <h1
        className="text-4xl md:text-6xl font-bold mb-12 animate-fade-up"
        style={{ animationDelay: "0.1s" }}
      >
        <span className="text-gradient">{hero.name}</span>
      </h1>

      <button
        type="button"
        onClick={handleEnter}
        className="px-8 py-3 bg-accent text-surface font-mono text-sm rounded hover:-translate-y-0.5 transition-transform animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        next →
      </button>
    </div>
  )
}
