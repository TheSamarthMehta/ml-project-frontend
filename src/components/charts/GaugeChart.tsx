import { TrendingDown, TrendingUp } from 'lucide-react'
import './GaugeChart.css'

interface GaugeChartProps {
  probability: number
  avgDiffText?: string
  avgDiff: number
}

export function GaugeChart({ probability, avgDiff }: GaugeChartProps) {
  const pct = Math.round(probability * 100)
  
  // Determine color zones
  const getColor = () => {
    if (pct < 33) return { main: '#10b981', light: '#6ee7b7', gradient: 'from-emerald-500 to-teal-500' }
    if (pct < 66) return { main: '#f59e0b', light: '#fbbf24', gradient: 'from-amber-500 to-orange-500' }
    return { main: '#ef4444', light: '#f87171', gradient: 'from-rose-500 to-red-600' }
  }

  const colors = getColor()

  return (
    <div className="gauge-chart">
      <div className="gauge-chart__header">
        <h3 className="gauge-chart__title">Assessment Probability</h3>
        <div className="gauge-chart__subtitle">
          {avgDiff < 0 ? (
            <>
              <TrendingDown size={18} className="gauge-chart__trend-icon gauge-chart__trend-icon--down" />
              <span>Below Average Risk</span>
            </>
          ) : (
            <>
              <TrendingUp size={18} className="gauge-chart__trend-icon gauge-chart__trend-icon--up" />
              <span>Above Average Risk</span>
            </>
          )}
        </div>
      </div>

      <div className="gauge-chart__visualization">
        <svg viewBox="0 0 220 130" className="gauge-chart__svg">
          <defs>
            <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background Arc */}
          <path
            d="M 30,110 A 80,80 0 0,1 190,110"
            fill="none"
            stroke="url(#trackGradient)"
            strokeWidth="24"
            strokeLinecap="round"
          />

          {/* Progress Arc */}
          <path
            d={`M 30,110 A 80,80 0 ${pct > 50 ? '1' : '0'},1 ${30 + (160 * pct / 100)},${110 - 80 * Math.sin((pct / 100) * Math.PI)}`}
            fill="none"
            stroke={colors.main}
            strokeWidth="24"
            strokeLinecap="round"
            className="gauge-chart__progress-arc"
            filter="url(#glow)"
          />

          {/* Indicator Circle */}
          <circle
            cx={30 + (160 * pct / 100)}
            cy={110 - 80 * Math.sin((pct / 100) * Math.PI)}
            r="14"
            fill="#ffffff"
            stroke={colors.main}
            strokeWidth="4"
            className="gauge-chart__indicator"
            filter="url(#glow)"
          />

          {/* Center decoration */}
          <circle cx="110" cy="110" r="6" fill={colors.main} opacity="0.5" />

          {/* Scale markers */}
          <text x="30" y="125" fontSize="11" fill="#94a3b8" textAnchor="start" fontWeight="600">0</text>
          <text x="110" y="35" fontSize="11" fill="#94a3b8" textAnchor="middle" fontWeight="600">50</text>
          <text x="190" y="125" fontSize="11" fill="#94a3b8" textAnchor="end" fontWeight="600">100</text>
        </svg>

        <div className="gauge-chart__center-value">
          <div className="gauge-chart__percentage" style={{ color: colors.main }}>
            {pct}<span className="gauge-chart__percentage-symbol">%</span>
          </div>
          <div className="gauge-chart__diff-badge" style={{ 
            backgroundColor: avgDiff < 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            color: avgDiff < 0 ? '#059669' : '#dc2626'
          }}>
            {avgDiff < 0 ? '↓' : '↑'} {Math.abs(avgDiff).toFixed(1)}%
          </div>
        </div>
      </div>

      <div className="gauge-chart__zones">
        <div className="gauge-chart__zone gauge-chart__zone--low">
          <div className="gauge-chart__zone-dot"></div>
          <span>Low (0-33)</span>
        </div>
        <div className="gauge-chart__zone gauge-chart__zone--medium">
          <div className="gauge-chart__zone-dot"></div>
          <span>Medium (33-66)</span>
        </div>
        <div className="gauge-chart__zone gauge-chart__zone--high">
          <div className="gauge-chart__zone-dot"></div>
          <span>High (66-100)</span>
        </div>
      </div>
    </div>
  )
}
