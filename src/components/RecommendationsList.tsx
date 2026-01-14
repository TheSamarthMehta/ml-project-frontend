import type { Recommendations } from '../types/model'
import { Card } from './ui/Card'
import './RecommendationsList.css'

export function RecommendationsList({ recs }: { recs: Recommendations }) {
  const blocks = [
    { title: 'Diet', items: recs.diet, icon: '🥗' },
    { title: 'Exercise', items: recs.exercise, icon: '🏃' },
    { title: 'Lifestyle', items: recs.lifestyle, icon: '💚' },
  ]
  return (
    <div className="recommendations-list">
      {blocks.map((block) => (
        <Card key={block.title} variant="outlined" padding="md" className="recommendation-card">
          <div className="recommendation-card__header">
            <span className="recommendation-card__icon">{block.icon}</span>
            <div className="recommendation-card__title">{block.title}</div>
          </div>
          <ul className="recommendation-card__list">
            {block.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}
