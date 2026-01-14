import { riskMeta } from '../lib/risk'
import type { PredictionResult } from '../types/model'
import { Badge } from './ui/Badge'
import { Chip } from './ui/Chip'
import './ComparisonTable.css'

export function ComparisonTable({ rows }: { rows: PredictionResult[] }) {
  if (!rows.length) return null
  return (
    <div className="comparison">
      <div className="comparison-header">Model comparison</div>
      <div className="comparison-table">
        <div className="comparison-row comparison-row--header">
          <div>Model</div>
          <div>Risk</div>
          <div>Probability</div>
          <div>Accuracy</div>
        </div>
        {rows.map((row) => {
          const meta = riskMeta(row.probability)
          const riskVariant = row.risk_level === 'High' ? 'danger' : row.risk_level === 'Medium' ? 'warning' : 'success'
          return (
            <div key={row.model_key} className="comparison-row">
              <div className="comparison-row__model">
                <div className="comparison-row__model-name">{row.model}</div>
                <div className="comparison-row__model-desc">{row.description}</div>
              </div>
              <div>
                <Badge variant={riskVariant}>{row.risk_level}</Badge>
              </div>
              <div>
                <Chip style={{ backgroundColor: meta.color, color: '#fff', borderColor: meta.color }}>
                  {Math.round(row.probability * 100)}%
                </Chip>
              </div>
              <div className="comparison-row__accuracy">{row.metrics.accuracy.toFixed(2)}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
