export function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* code-grid patches at top-left and bottom-right */}
      <div className="absolute top-0 left-0 w-[42rem] h-[42rem] bg-grid-tl" />
      <div className="absolute bottom-0 right-0 w-[42rem] h-[42rem] bg-grid-br" />

      {/* drifting gradient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* soft vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(2,10,20,0.55) 100%)",
        }}
      />
    </div>
  )
}
