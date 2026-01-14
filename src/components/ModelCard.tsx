import type { ModelCardInfo, ModelKey } from '../types/model'
import './ModelCard.css'

export function ModelCard({
  card,
  selected,
  onSelect,
}: {
  card: ModelCardInfo
  selected: boolean
  onSelect: (key: ModelKey) => void
}) {
  return (
    <button
      className={`model-card ${selected ? 'model-card--selected' : ''}`}
      onClick={() => onSelect(card.key)}
      type="button"
    >
      <div className="model-card__content">
        <div className="model-card__title">{card.name}</div>
        <div className="model-card__subtitle">{card.description}</div>
      </div>
    </button>
  )
}
