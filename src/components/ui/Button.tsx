import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-purple-500/50 border border-white/20',
  secondary: 'bg-white/80 dark:bg-slate-700/80 backdrop-blur-xl hover:bg-white dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 shadow-md hover:shadow-lg border-2 border-slate-200/50 dark:border-slate-600/50',
  ghost: 'bg-white/30 dark:bg-slate-800/30 backdrop-blur-md hover:bg-white/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-2 border-transparent hover:border-indigo-300 dark:hover:border-indigo-600',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'font-semibold rounded-xl transition-all duration-200',
          'hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-100',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : null}
        <span className={clsx({ 'opacity-0': isLoading })}>{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'
