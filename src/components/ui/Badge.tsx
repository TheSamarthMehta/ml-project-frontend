import type { HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
}

const badgeVariants = {
  default: 'bg-gradient-to-r from-slate-200/80 to-slate-300/80 dark:from-slate-700/80 dark:to-slate-600/80 text-slate-700 dark:text-slate-300 backdrop-blur-lg border border-white/50 dark:border-white/10 shadow-sm',
  success: 'bg-gradient-to-r from-emerald-100 to-green-200 dark:from-emerald-900/40 dark:to-green-900/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/50 shadow-sm shadow-emerald-500/20',
  warning: 'bg-gradient-to-r from-amber-100 to-yellow-200 dark:from-amber-900/40 dark:to-yellow-900/40 text-amber-700 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/50 shadow-sm shadow-amber-500/20',
  danger: 'bg-gradient-to-r from-red-100 to-rose-200 dark:from-red-900/40 dark:to-rose-900/40 text-red-700 dark:text-red-300 border border-red-300/50 dark:border-red-700/50 shadow-sm shadow-red-500/20',
  info: 'bg-gradient-to-r from-blue-100 to-cyan-200 dark:from-blue-900/40 dark:to-cyan-900/40 text-blue-700 dark:text-cyan-300 border border-blue-300/50 dark:border-blue-700/50 shadow-sm shadow-blue-500/20',
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span 
      className={clsx(
        'inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold',
        'transition-all duration-300 hover:scale-110 hover:shadow-lg',
        'uppercase tracking-wide',
        badgeVariants[variant],
        className
      )} 
      {...props}
    >
      {children}
    </span>
  )
}
