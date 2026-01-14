import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Line } from 'recharts'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'

const COLORS = ['#6ba6ff', '#15c47e', '#f5a524', '#ef4444', '#8cc4ff', '#2adf98']

export function AnalyticsDashboard() {
  // Mock data for visualizations
  const modelPerformanceData = [
    { name: 'ANN', accuracy: 73.6, precision: 74.2, recall: 73.1, f1Score: 73.6 },
    { name: 'Random Forest', accuracy: 71.8, precision: 72.5, recall: 71.2, f1Score: 71.8 },
    { name: 'XGBoost', accuracy: 72.3, precision: 73.0, recall: 71.8, f1Score: 72.4 },
    { name: 'SVM', accuracy: 69.5, precision: 70.1, recall: 68.9, f1Score: 69.5 },
    { name: 'Decision Tree', accuracy: 68.2, precision: 69.0, recall: 67.5, f1Score: 68.2 },
  ]

  const riskDistributionData = [
    { name: 'Low Risk', value: 45, count: 30750 },
    { name: 'Medium Risk', value: 35, count: 23940 },
    { name: 'High Risk', value: 20, count: 13680 },
  ]

  const monthlyPredictionsData = [
    { month: 'Jul', predictions: 2400, accuracy: 72 },
    { month: 'Aug', predictions: 2800, accuracy: 73 },
    { month: 'Sep', predictions: 3200, accuracy: 73.5 },
    { month: 'Oct', predictions: 2950, accuracy: 73.8 },
    { month: 'Nov', predictions: 3400, accuracy: 74.2 },
    { month: 'Dec', predictions: 3800, accuracy: 73.6 },
    { month: 'Jan', predictions: 4200, accuracy: 74.0 },
  ]

  const featureImportanceData = [
    { feature: 'Age', importance: 0.18, subject: 'Age', fullMark: 1 },
    { feature: 'Blood Pressure', importance: 0.16, subject: 'BP', fullMark: 1 },
    { feature: 'Cholesterol', importance: 0.14, subject: 'Chol', fullMark: 1 },
    { feature: 'Heart Rate', importance: 0.12, subject: 'HR', fullMark: 1 },
    { feature: 'Exercise', importance: 0.10, subject: 'Ex', fullMark: 1 },
    { feature: 'Glucose', importance: 0.09, subject: 'Gluc', fullMark: 1 },
    { feature: 'BMI', importance: 0.08, subject: 'BMI', fullMark: 1 },
    { feature: 'Smoking', importance: 0.07, subject: 'Smoke', fullMark: 1 },
    { feature: 'Alcohol', importance: 0.06, subject: 'Alc', fullMark: 1 },
  ]

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {typeof entry.value === 'number' ? entry.value.toFixed(1) : entry.value}
              {entry.unit || ''}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 mt-8">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card variant="outlined" padding="md" className="hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="text-4xl bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent">📊</div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">68.6k+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Patient Records</div>
            </div>
          </div>
        </Card>
        <Card variant="outlined" padding="md" className="hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🔍</div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">13</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Clinical Features</div>
            </div>
          </div>
        </Card>
        <Card variant="outlined" padding="md" className="hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="text-4xl">⚡</div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">0.73</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Macro F1-Score</div>
            </div>
          </div>
        </Card>
        <Card variant="outlined" padding="md" className="hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🤖</div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">10</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Models Evaluated</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Model Performance Comparison */}
        <Card variant="outlined" padding="lg">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Model Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
              <BarChart data={modelPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" stroke="var(--text-2)" fontSize={12} />
                <YAxis stroke="var(--text-2)" fontSize={12} domain={[60, 80]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="accuracy" fill="#6ba6ff" radius={[8, 8, 0, 0]} />
                <Bar dataKey="f1Score" fill="#15c47e" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
        </Card>

        {/* Risk Distribution */}
        <Card variant="outlined" padding="lg">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Risk Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskDistributionData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
        </Card>

        {/* Monthly Predictions Trend */}
        <Card variant="outlined" padding="lg" className="lg:col-span-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Monthly Predictions & Accuracy Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyPredictionsData}>
                <defs>
                  <linearGradient id="colorPredictions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6ba6ff" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6ba6ff" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#15c47e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#15c47e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--text-2)" fontSize={12} />
                <YAxis yAxisId="left" stroke="var(--text-2)" fontSize={12} />
                <YAxis yAxisId="right" orientation="right" stroke="var(--text-2)" fontSize={12} domain={[70, 76]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="predictions"
                  stroke="#6ba6ff"
                  fillOpacity={1}
                  fill="url(#colorPredictions)"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#15c47e"
                  strokeWidth={2}
                  dot={{ fill: '#15c47e', r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
        </Card>

        {/* Feature Importance Radar */}
        <Card variant="outlined" padding="lg">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Feature Importance Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={featureImportanceData}>
              <PolarGrid stroke="#cbd5e1" />
              <PolarAngleAxis dataKey="subject" stroke="#64748b" fontSize={11} />
              <PolarRadiusAxis angle={90} domain={[0, 1]} stroke="#94a3b8" fontSize={10} />
              <Radar
                name="Importance"
                dataKey="importance"
                stroke="#6ba6ff"
                fill="#6ba6ff"
                fillOpacity={0.5}
                strokeWidth={2}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Model Details Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">ML Models Evaluated</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card variant="outlined" padding="md" className="hover:shadow-lg transition-shadow">
            <Badge variant="info" className="mb-3">Ensemble</Badge>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Neural Network</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Advanced deep learning architecture with multiple hidden layers</p>
            <div className="flex gap-3 text-xs font-semibold">
              <span className="text-accent">Accuracy: 73.6%</span>
              <span className="text-success">F1: 0.736</span>
            </div>
          </Card>
          <Card variant="outlined" padding="md" className="hover:shadow-lg transition-shadow">
            <Badge variant="success" className="mb-3">Ensemble</Badge>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Random Forest</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Ensemble of decision trees with bagging technique</p>
            <div className="flex gap-3 text-xs font-semibold">
              <span className="text-accent">Accuracy: 71.8%</span>
              <span className="text-success">F1: 0.718</span>
            </div>
          </Card>
          <Card variant="outlined" padding="md" className="hover:shadow-lg transition-shadow">
            <Badge variant="success" className="mb-3">Boosting</Badge>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">XGBoost</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Gradient boosting framework with regularization</p>
            <div className="flex gap-3 text-xs font-semibold">
              <span className="text-accent">Accuracy: 72.3%</span>
              <span className="text-success">F1: 0.724</span>
            </div>
          </Card>
          <Card variant="outlined" padding="md" className="hover:shadow-lg transition-shadow">
            <Badge variant="warning" className="mb-3">Linear</Badge>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">SVM</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Support Vector Machine with RBF kernel</p>
            <div className="flex gap-3 text-xs font-semibold">
              <span className="text-accent">Accuracy: 69.5%</span>
              <span className="text-success">F1: 0.695</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
