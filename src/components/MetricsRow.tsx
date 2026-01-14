import type { PredictionResult } from '../types/model'
import './MetricsRow.css'

interface MetricItem {
  label: string
  value: number
}

export function MetricsRow({ metrics }: { metrics: PredictionResult['metrics'] }) {
  const metricItems: MetricItem[] = [
    { label: 'Accuracy', value: metrics.accuracy },
    { label: 'Precision', value: metrics.precision },
    { label: 'Recall', value: metrics.recall },
    { label: 'F1', value: metrics.f1 },
  ]

  return (
    <div className="metrics-row">
      {metricItems.map((item) => (
        <div key={item.label} className="metric-item">
          <span className="metric-label">{item.label}</span>
          <span className="metric-value">{item.value.toFixed(2)}</span>
        </div>
      ))}
    </div>
  )
}
