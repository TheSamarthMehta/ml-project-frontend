import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface RiskBreakdownChartProps {
  factors: Array<{ feature: string; importance: number }>
}

export function RiskBreakdownChart({ factors }: RiskBreakdownChartProps) {
  const data = factors.slice(0, 5).map(f => ({
    name: f.feature.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value: Math.round(f.importance * 100)
  }))

  const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981']

  return (
    <div className="risk-breakdown-chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#64748b', fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={100}
          />
          <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ 
              background: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
