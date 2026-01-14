import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import './Chip.css'

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  variant?: 'default' | 'muted'
}

export function Chip({ className, selected, variant = 'default', children, ...props }: ChipProps) {
  return (
    <button
      className={clsx('chip', `chip--${variant}`, { 'chip--selected': selected }, className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
