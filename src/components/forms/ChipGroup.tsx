import type { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import type { FormValues } from '../../lib/constants'
import './ChipGroup.css'

export interface ChipOption {
  value: string | boolean
  label: ReactNode
}

export interface ChipGroupProps {
  name: keyof FormValues
  options: ChipOption[]
  label?: string
  variant?: 'default' | 'muted'
  type?: 'radio' | 'chip'
}

export function ChipGroup({ name, options, label, type = 'chip' }: ChipGroupProps) {
  const { watch, setValue, register } = useFormContext<FormValues>()
  const currentValue = watch(name)

  if (type === 'radio') {
    return (
      <div className="chip-group-wrapper">
        {label && <div className="chip-group-label">{label}</div>}
        <div className="radio-group">
          {options.map((option, index) => {
            const isSelected = currentValue === option.value
            const id = `${name}-${index}`

            return (
              <label key={index} className={`radio-option ${isSelected ? 'radio-option--selected' : ''}`}>
                <input
                  type="radio"
                  {...register(name)}
                  value={option.value as string}
                  id={id}
                  className="radio-option__input"
                />
                <span className="radio-option__custom"></span>
                <span className="radio-option__label">{option.label}</span>
              </label>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="chip-group-wrapper">
      {label && <div className="chip-group-label">{label}</div>}
      <div className="chip-group">
        {options.map((option, index) => {
          const isSelected =
            typeof option.value === 'boolean'
              ? currentValue === option.value
              : currentValue === option.value

          const handleClick = () => {
            if (typeof option.value === 'boolean') {
              setValue(name, option.value as any, { shouldValidate: true })
            } else {
              setValue(name, option.value as any, { shouldValidate: true })
            }
          }

          return (
            <button
              type="button"
              key={index}
              className={`chip ${isSelected ? 'chip--selected' : ''}`}
              onClick={handleClick}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
