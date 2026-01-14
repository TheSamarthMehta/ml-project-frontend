import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { riskMeta } from '../lib/risk'
import { Activity, Heart, TrendingUp, AlertCircle } from 'lucide-react'

interface EnhancedRiskMeterProps {
  probability: number
  confidence?: number
  modelName?: string
}

export function EnhancedRiskMeter({ probability, confidence = 0.87, modelName = 'Neural Network' }: EnhancedRiskMeterProps) {
  const pct = Math.round(probability * 100)
  const meta = riskMeta(probability)
  const variant = meta.label === 'High' ? 'danger' : meta.label === 'Medium' ? 'warning' : 'success'

  return (
    <Card variant="elevated" padding="lg" className="relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Risk Assessment</h3>
        <Badge variant="info">AI Analysis</Badge>
      </div>
      
      <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
        {/* Circular Progress */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-48 h-48 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-pulse-soft" />
            <CircularProgressbar
              value={pct}
              text={`${pct}%`}
              styles={buildStyles({
                pathColor: meta.color,
                textColor: 'currentColor',
                trailColor: '#e2e8f0',
                textSize: '20px',
                pathTransitionDuration: 0.8,
              })}
            />
          </div>
          <Badge variant={variant} className="text-base px-4 py-2">
            {meta.icon} {meta.label} Risk
          </Badge>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
            <div className="enhanced-risk-meter__detail-card">
              <div className="enhanced-risk-meter__detail-icon" style={{ background: 'linear-gradient(135deg, #6ba6ff 0%, #4c8dff 100%)' }}>
                <Activity size={20} />
              </div>
              <div className="enhanced-risk-meter__detail-content">
                <div className="enhanced-risk-meter__detail-label">Probability</div>
                <div className="enhanced-risk-meter__detail-value">{pct}%</div>
              </div>
            </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <Activity size={20} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-600 dark:text-slate-400">Probability</div>
              <div className="text-xl font-bold text-slate-900 dark:text-slate-100">{pct}%</div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 text-white">
              <TrendingUp size={20} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-600 dark:text-slate-400">Confidence</div>
              <div className="text-xl font-bold text-slate-900 dark:text-slate-100">{(confidence * 100).toFixed(1)}%</div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
              <Heart size={20} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-600 dark:text-slate-400">Model</div>
              <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{modelName}</div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
              <AlertCircle size={20} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-600 dark:text-slate-400">Status</div>
              <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{meta.label === 'Low' ? 'Stable' : meta.label === 'High' ? 'Monitor' : 'Attention'}</div>
            </div>
          </div>
        </div>

        {/* Risk Scale */}
        <div className="col-span-full mt-6">
          <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 bottom-0 w-1 -ml-0.5 transition-all duration-500 z-10"
              style={{ left: `${pct}%`, background: meta.color }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: meta.color }} />
            </div>
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-green-400 to-green-500" />
            <div className="absolute inset-y-0 left-1/3 w-1/3 bg-gradient-to-r from-yellow-400 to-yellow-500" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-orange-500 to-red-500" />
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-600 dark:text-slate-400">
            <span className="flex flex-col items-start">
              <span className="font-semibold">0%</span>
              <span>Low</span>
            </span>
            <span className="flex flex-col items-center">
              <span className="font-semibold">50%</span>
              <span>Medium</span>
            </span>
            <span className="flex flex-col items-end">
              <span className="font-semibold">100%</span>
              <span>High</span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
