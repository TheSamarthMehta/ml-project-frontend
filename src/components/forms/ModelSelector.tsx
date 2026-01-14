import type { ModelCardInfo, ModelKey } from '../../types/model'
import { ModelCard } from '../ModelCard'
import './ModelSelector.css'

export interface ModelSelectorProps {
  models: ModelCardInfo[]
  selectedModel: ModelKey
  onSelect: (key: ModelKey) => void
}

export function ModelSelector({ models, selectedModel, onSelect }: ModelSelectorProps) {
  return (
    <div className="model-selector" aria-label="Model choices">
      {models.map((card) => (
        <ModelCard key={card.key} card={card} selected={selectedModel === card.key} onSelect={onSelect} />
      ))}
    </div>
  )
}
