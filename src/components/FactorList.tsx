import './FactorList.css'

export function FactorList({ factors }: { factors: Array<{ feature: string; importance: number }> | string[] }) {
  if (!factors.length) return null
  
  // Handle both array of objects and array of strings
  const factorNames = factors.map(f => typeof f === 'string' ? f : f.feature)
  
  return (
    <div className="factor-list">
      {factorNames.map((factor) => (
        <span key={factor} className="factor-badge">
          {factor}
        </span>
      ))}
    </div>
  )
}
