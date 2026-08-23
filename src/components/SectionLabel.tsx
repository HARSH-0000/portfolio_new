interface SectionLabelProps {
  number: string
  label: string
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-accent text-sm">{number}</span>
      <span className="font-mono text-muted text-xs uppercase tracking-widest">{label}</span>
    </div>
  )
}
