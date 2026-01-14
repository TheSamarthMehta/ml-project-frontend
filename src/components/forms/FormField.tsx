import type { InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react'
import { Input } from '../ui/Input'
import { useFormContext } from 'react-hook-form'
import type { FormValues } from '../../lib/constants'

export interface FormFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: keyof FormValues
  label?: string
  helperText?: string
  renderLabel?: (value: unknown) => ReactNode
  type?: 'text' | 'number' | 'range' | 'select'
  options?: Array<{ value: string | number; label: string }>
}

export function FormField({ name, label, helperText, renderLabel, type = 'text', options, ...props }: FormFieldProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormValues>()

  const value = watch(name)
  const error = errors[name]?.message as string | undefined
  const displayLabel = renderLabel ? renderLabel(value) : label

  if (type === 'select' && options) {
    return (
      <div className="w-full">
        {displayLabel && (
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            {displayLabel}
          </label>
        )}
        <div className="relative">
          <select
            {...register(name)}
            className={`w-full px-5 py-3.5 rounded-2xl border-2 transition-all duration-300 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl text-slate-900 dark:text-slate-100 font-medium focus:outline-none focus:ring-4 focus:ring-offset-0 hover:border-indigo-300 dark:hover:border-indigo-600 shadow-sm hover:shadow-md appearance-none cursor-pointer ${
              error
                ? 'border-red-400 focus:ring-red-400/30 focus:border-red-500'
                : 'border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-indigo-400/30'
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.25rem',
              paddingRight: '3rem',
              colorScheme: 'dark'
            }}
          >
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value} 
                disabled={option.value === ''}
                className="bg-slate-800 text-slate-100 py-2"
                style={{
                  backgroundColor: '#1e293b',
                  color: option.value === '' ? '#94a3b8' : '#f1f5f9',
                  padding: '0.5rem'
                }}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {error && (
          <span className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
            {error}
          </span>
        )}
        {helperText && !error && (
          <span className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            {helperText}
          </span>
        )}
      </div>
    )
  }

  return (
    <Input
      {...register(name, { valueAsNumber: type === 'number' || type === 'range' })}
      label={displayLabel}
      error={error}
      helperText={helperText}
      type={type}
      {...props}
    />
  )
}
