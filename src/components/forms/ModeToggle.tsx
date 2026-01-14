import { Button } from '../ui/Button'
import './ModeToggle.css'

export interface ModeToggleProps {
  mode: 'single' | 'compare'
  onModeChange: (mode: 'single' | 'compare') => void
}

export function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  return (
    <div className="mode-toggle">
      <Button
        variant={mode === 'single' ? 'primary' : 'secondary'}
        size="sm"
        onClick={() => onModeChange('single')}
        type="button"
      >
        Single model
      </Button>
      <Button
        variant={mode === 'compare' ? 'primary' : 'secondary'}
        size="sm"
        onClick={() => onModeChange('compare')}
        type="button"
      >
        Compare all
      </Button>
    </div>
  )
}
