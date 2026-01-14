import { useFormContext } from 'react-hook-form'
import type { FormValues } from '../../lib/constants'
import './LifestyleMarkers.css'

export function LifestyleMarkers() {
  const { watch, register } = useFormContext<FormValues>()
  const diabetes = watch('diabetes')
  const smoking = watch('smoking')
  const obesity = watch('obesity')

  return (
    <div className="lifestyle-markers">
      <div className="lifestyle-markers__checkboxes">
        <label className={`checkbox-option ${diabetes ? 'checkbox-option--checked' : ''}`}>
          <input
            type="checkbox"
            {...register('diabetes')}
            className="checkbox-option__input"
          />
          <span className="checkbox-option__custom"></span>
          <span className="checkbox-option__label">Diabetes</span>
        </label>

        <label className={`checkbox-option ${smoking ? 'checkbox-option--checked' : ''}`}>
          <input
            type="checkbox"
            {...register('smoking')}
            className="checkbox-option__input"
          />
          <span className="checkbox-option__custom"></span>
          <span className="checkbox-option__label">Smoking</span>
        </label>

        <label className={`checkbox-option ${obesity ? 'checkbox-option--checked' : ''}`}>
          <input
            type="checkbox"
            {...register('obesity')}
            className="checkbox-option__input"
          />
          <span className="checkbox-option__custom"></span>
          <span className="checkbox-option__label">Obesity</span>
        </label>
      </div>
    </div>
  )
}
