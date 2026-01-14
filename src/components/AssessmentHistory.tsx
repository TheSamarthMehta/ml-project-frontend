import { useState } from 'react'
import { format } from 'date-fns'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { Calendar, Filter, Download, Search } from 'lucide-react'
import { riskMeta } from '../lib/risk'

interface HistoryItem {
  id: string
  date: Date
  name: string
  age: number
  gender: string
  riskLevel: number
  result: string
}

const mockHistory: HistoryItem[] = [
  { id: '001', date: new Date('2026-01-11'), name: 'John Doe', age: 28, gender: 'Male', riskLevel: 0.442, result: 'Moderate Risk' },
  { id: '002', date: new Date('2026-01-11'), name: 'Jane Smith', age: 28, gender: 'Male', riskLevel: 0.557, result: 'Moderate Risk' },
  { id: '003', date: new Date('2026-01-11'), name: 'Alex Johnson', age: 28, gender: 'Male', riskLevel: 0.383, result: 'Moderate Risk' },
  { id: '004', date: new Date('2026-01-10'), name: 'Sarah Williams', age: 28, gender: 'Male', riskLevel: 0.605, result: 'High Risk' },
  { id: '005', date: new Date('2026-01-10'), name: 'Mike Brown', age: 28, gender: 'Male', riskLevel: 0.842, result: 'High Risk' },
  { id: '006', date: new Date('2026-01-09'), name: 'Emily Davis', age: 28, gender: 'Male', riskLevel: 0.463, result: 'Moderate Risk' },
]

export function AssessmentHistory() {
  const [filter, setFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredHistory = mockHistory.filter((item) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'low' && item.riskLevel < 0.3) ||
      (filter === 'medium' && item.riskLevel >= 0.3 && item.riskLevel < 0.7) ||
      (filter === 'high' && item.riskLevel >= 0.7)

    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  const stats = {
    total: mockHistory.length,
    low: mockHistory.filter((i) => i.riskLevel < 0.3).length,
    medium: mockHistory.filter((i) => i.riskLevel >= 0.3 && i.riskLevel < 0.7).length,
    high: mockHistory.filter((i) => i.riskLevel >= 0.7).length,
  }

  return (
    <Card variant="outlined" padding="lg" className="mt-8">
      <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Assessment History</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            View your past cardiovascular risk predictions and track your health journey
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-3 bg-accent hover:bg-accent-strong text-white rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-md">
          <Download size={16} />
          Export
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600 hover:-translate-y-1 hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">
              📊
            </div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">{stats.total}</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Total Assessments</div>
              <div className="text-xs text-slate-500 dark:text-slate-500">All time</div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600 hover:-translate-y-1 hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-2xl shadow-lg">
              😊
            </div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">{stats.low}</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Low Risk</div>
              <div className="text-xs text-slate-500 dark:text-slate-500">{((stats.low / stats.total) * 100).toFixed(0)}% of total</div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600 hover:-translate-y-1 hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
              😐
            </div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">{stats.medium}</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Moderate Risk</div>
              <div className="text-xs text-slate-500 dark:text-slate-500">{((stats.medium / stats.total) * 100).toFixed(0)}% of total</div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600 hover:-translate-y-1 hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-2xl shadow-lg">
              😟
            </div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">{stats.high}</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">High Risk</div>
              <div className="text-xs text-slate-500 dark:text-slate-500">{((stats.high / stats.total) * 100).toFixed(0)}% of total</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col gap-4 mb-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600">
        <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border-none bg-transparent outline-none text-sm text-slate-900 dark:text-slate-100"
          />
        </div>
        <div className="flex items-center gap-3 flex-wrap text-sm text-slate-600 dark:text-slate-400">
          <Filter size={16} />
          <span>Filter by date:</span>
          <select className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 text-sm cursor-pointer hover:border-accent transition-colors">
            <option>All Time</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
          <div className="flex gap-2 ml-auto">
            <button
              className={`px-4 py-2 bg-white dark:bg-slate-800 border rounded-full text-sm font-medium transition-all ${
                filter === 'all' ? 'bg-accent text-white border-accent' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-accent hover:text-accent'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 bg-white dark:bg-slate-800 border rounded-full text-sm font-medium transition-all ${
                filter === 'low' ? 'bg-accent text-white border-accent' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-accent hover:text-accent'
              }`}
              onClick={() => setFilter('low')}
            >
              Low Risk
            </button>
            <button
              className={`px-4 py-2 bg-white dark:bg-slate-800 border rounded-full text-sm font-medium transition-all ${
                filter === 'medium' ? 'bg-accent text-white border-accent' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-accent hover:text-accent'
              }`}
              onClick={() => setFilter('medium')}
            >
              Moderate
            </button>
            <button
              className={`px-4 py-2 bg-white dark:bg-slate-800 border rounded-full text-sm font-medium transition-all ${
                filter === 'high' ? 'bg-accent text-white border-accent' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-accent hover:text-accent'
              }`}
              onClick={() => setFilter('high')}
            >
              High Risk
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-slate-50 dark:bg-slate-700/50 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-4 text-left font-semibold text-slate-600 dark:text-slate-400 uppercase text-xs tracking-wide border-b-2 border-slate-200 dark:border-slate-600">Name</th>
              <th className="px-4 py-4 text-left font-semibold text-slate-600 dark:text-slate-400 uppercase text-xs tracking-wide border-b-2 border-slate-200 dark:border-slate-600">Date & Time</th>
              <th className="px-4 py-4 text-left font-semibold text-slate-600 dark:text-slate-400 uppercase text-xs tracking-wide border-b-2 border-slate-200 dark:border-slate-600">Age</th>
              <th className="px-4 py-4 text-left font-semibold text-slate-600 dark:text-slate-400 uppercase text-xs tracking-wide border-b-2 border-slate-200 dark:border-slate-600">Gender</th>
              <th className="px-4 py-4 text-left font-semibold text-slate-600 dark:text-slate-400 uppercase text-xs tracking-wide border-b-2 border-slate-200 dark:border-slate-600">Risk %</th>
              <th className="px-4 py-4 text-left font-semibold text-slate-600 dark:text-slate-400 uppercase text-xs tracking-wide border-b-2 border-slate-200 dark:border-slate-600">Result</th>
              <th className="px-4 py-4 text-left font-semibold text-slate-600 dark:text-slate-400 uppercase text-xs tracking-wide border-b-2 border-slate-200 dark:border-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.map((item) => {
              const meta = riskMeta(item.riskLevel)
              const variant = meta.label === 'High' ? 'danger' : meta.label === 'Medium' ? 'warning' : 'success'
              const pct = Math.round(item.riskLevel * 100)

              return (
                <tr key={item.id} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3 font-medium text-slate-900 dark:text-slate-100">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-strong text-white flex items-center justify-center font-semibold text-sm">
                        {item.name.charAt(0)}
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Calendar size={14} />
                      {format(item.date, 'MMM dd, yyyy')}
                      <span className="text-slate-400 dark:text-slate-500 ml-2 text-xs">{format(item.date, 'hh:mm a')}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-900 dark:text-slate-100">{item.age}</td>
                  <td className="px-4 py-4 text-slate-900 dark:text-slate-100">{item.gender}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%`, background: meta.color }}
                        />
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100 min-w-[40px]">{pct}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <Badge variant={variant}>{item.result}</Badge>
                  </td>
                  <td className="px-4 py-4">
                    <button className="px-4 py-2 bg-transparent text-accent border border-accent rounded-xl text-xs font-semibold hover:bg-accent hover:text-white transition-all hover:-translate-y-0.5">
                      View Details
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {filteredHistory.length === 0 && (
        <div className="text-center py-8 text-slate-500 dark:text-slate-400">
          <p>No assessments found matching your criteria.</p>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-between items-center px-4 py-4 border-t border-slate-200 dark:border-slate-700">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Showing {filteredHistory.length} of {stats.total} assessments
        </span>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-sm font-medium text-slate-500 dark:text-slate-400 cursor-not-allowed opacity-50" disabled>
            Previous
          </button>
          <button className="px-4 py-2 bg-accent text-white border border-accent rounded-xl text-sm font-medium">
            1
          </button>
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white hover:border-accent transition-all">
            2
          </button>
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white hover:border-accent transition-all">
            3
          </button>
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white hover:border-accent transition-all">
            Next
          </button>
        </div>
      </div>
    </Card>
  )
}
