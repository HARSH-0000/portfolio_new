const FLOW_PATH = "M 56 132 C 120 62, 170 58, 230 62 C 290 66, 340 132, 404 132"

const nodes = [
  { id: "data", x: 56, y: 132, labelY: 168 },
  { id: "model", x: 230, y: 62, labelY: 100 },
  { id: "deploy", x: 404, y: 132, labelY: 168 },
]

const steps = ["ingest · clean", "train · eval", "serve · monitor"]

function PipelineViz() {
  return (
    <div className="glass rounded-lg p-6 font-mono text-sm w-full max-w-lg relative overflow-hidden">
      {/* soft top glow */}
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-44 w-72 rounded-full"
        style={{ background: "radial-gradient(ellipse at center, rgba(56,189,248,0.14), transparent 65%)" }}
      />

      <div className="relative flex items-center justify-between mb-2">
        <span className="text-muted tracking-widest uppercase">ml_pipeline.yaml</span>
        <span className="flex items-center gap-1.5 text-accent uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
          live
        </span>
      </div>

      <svg viewBox="0 0 460 210" className="relative w-full" aria-hidden="true">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>

        {/* grid ticks */}
        {[100, 140, 180, 280, 320, 360].map((x) => (
          <line
            key={x}
            x1={x}
            y1={150}
            x2={x}
            y2={157}
            stroke="#38bdf8"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
        ))}

        {/* flowing pipeline path */}
        <path
          id="ml-flow"
          d={FLOW_PATH}
          fill="none"
          stroke="url(#flowGrad)"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          className="animate-dash-flow"
          strokeLinecap="round"
        />

        {/* moving pulse — glow halo + core dot */}
        <circle r="10" fill="#38bdf8" opacity="0.35">
          <animateMotion dur="3s" repeatCount="indefinite" calcMode="paced">
            <mpath href="#ml-flow" />
          </animateMotion>
        </circle>
        <circle r="5" fill="#38bdf8">
          <animateMotion dur="3s" repeatCount="indefinite" calcMode="paced">
            <mpath href="#ml-flow" />
          </animateMotion>
        </circle>

        {/* stage nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="19"
              fill="#071e30"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <circle cx={node.x} cy={node.y} r="4.5" fill="#38bdf8" opacity="0.9" />
            <text
              x={node.x}
              y={node.labelY}
              textAnchor="middle"
              fill="#8fb3cc"
              fontSize="13"
              fontFamily="inherit"
            >
              {node.id}
            </text>
          </g>
        ))}
      </svg>

      <div className="relative grid grid-cols-3 gap-2 mt-3">
        {steps.map((step) => (
          <div
            key={step}
            className="text-center py-3 rounded border border-border bg-bg/50 text-muted uppercase tracking-widest text-[11px]"
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PipelineViz
