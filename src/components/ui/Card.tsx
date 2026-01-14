import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const cardVariants = {
  default: 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-2 border-white/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.01]',
  elevated: 'bg-gradient-to-br from-white to-slate-50/90 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:shadow-indigo-500/20 border border-white/40 dark:border-white/10',
  outlined: 'border-2 border-indigo-200 dark:border-indigo-700/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-white/70 dark:hover:bg-slate-800/70',
}

const cardPadding = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({ className, variant = 'default', padding = 'md', children, ...props }: CardProps) {
  return (
    <div 
      className={clsx(
        'rounded-2xl transition-all duration-200',
        cardVariants[variant],
        cardPadding[padding],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  subtitle?: ReactNode
  action?: ReactNode
}

export function CardHeader({ className, title, subtitle, action, children, ...props }: CardHeaderProps) {
  return (
    <div className={clsx('flex justify-between items-center gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700', className)} {...props}>
      {children || (
        <>
          {(title || subtitle) && (
            <div className="flex-1">
              {title && <div className="text-slate-900 dark:text-slate-100">{title}</div>}
              {subtitle && <div className="text-slate-600 dark:text-slate-400 mt-1 text-sm">{subtitle}</div>}
            </div>
          )}
          {action && <div className="flex-shrink-0">{action}</div>}
        </>
      )}
    </div>
  )
}

export type CardContentProps = HTMLAttributes<HTMLDivElement>

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={clsx('', className)} {...props}>
      {children}
    </div>
  )
}

export type CardTitleProps = HTMLAttributes<HTMLHeadingElement>

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3 className={clsx('text-2xl font-bold text-slate-900 dark:text-slate-100', className)} {...props}>
      {children}
    </h3>
  )
}
