import { forwardRef } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: ReactNode
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, helperText, id, type = 'text', ...props }, ref) => {
    return (
      <div className={clsx('w-full', className)}>
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          className={clsx(
            'w-full px-5 py-3.5 rounded-2xl border-2 transition-all duration-300',
            'bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl',
            'text-slate-900 dark:text-slate-100 font-medium',
            'placeholder:text-slate-400 dark:placeholder:text-slate-500',
            'focus:outline-none focus:ring-4 focus:ring-offset-0',
            'hover:border-indigo-300 dark:hover:border-indigo-600',
            'shadow-sm hover:shadow-md',
            error
              ? 'border-red-400 focus:ring-red-400/30 focus:border-red-500'
              : 'border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-indigo-400/30'
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...props}
        />
        {error && (
          <span id={`${id}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={`${id}-helper`} className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            {helperText}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
