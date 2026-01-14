import { riskMeta } from '../lib/risk'
import { Badge } from './ui/Badge'
import './RiskMeter.css'

export function RiskMeter({ probability }: { probability: number }) {
  const pct = Math.round(probability * 100)
  const meta = riskMeta(probability)
  const variant = meta.label === 'High' ? 'danger' : meta.label === 'Medium' ? 'warning' : 'success'

  // Calculate needle rotation (0-180 degrees)
  const needleRotation = (pct / 100) * 180

  return (
    <div className="risk-meter">
      <div className="risk-meter__header">
        <div className="risk-meter__title">Risk Meter</div>
        <Badge variant={variant}>
          {meta.icon} {meta.label}
        </Badge>
      </div>
      
      {/* Gauge Visualization */}
      <div className="risk-gauge">
        <svg viewBox="0 0 200 110" className="risk-gauge__svg">
          {/* Background Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          
          {/* Green Zone (0-33%) */}
          <path
            d="M 20 100 A 80 80 0 0 1 73.4 37.4"
            fill="none"
            stroke="#10b981"
            strokeWidth="20"
            strokeLinecap="round"
          />
          
          {/* Yellow Zone (33-66%) */}
          <path
            d="M 73.4 37.4 A 80 80 0 0 1 126.6 37.4"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="20"
            strokeLinecap="round"
          />
          
          {/* Red Zone (66-100%) */}
          <path
            d="M 126.6 37.4 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#ef4444"
            strokeWidth="20"
            strokeLinecap="round"
          />
          
          {/* Needle */}
          <g transform={`rotate(${needleRotation - 90} 100 100)`}>
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="30"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="100" cy="100" r="6" fill="#fff" />
          </g>
        </svg>
        
        <div className="risk-gauge__value">
          {pct}%
        </div>
      </div>

      <div className="risk-meter__bar">
        <div
          className="risk-meter__fill"
          style={{ width: `${pct}%`, background: meta.color }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <div className="risk-meter__scale">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
      </div>
    </div>
  )
}
