import './ErrorMessage.css'

export interface ErrorMessageProps {
  message: string
  className?: string
}

export function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <div className={`error-message ${className || ''}`} role="alert">
      <span className="error-message__icon">⚠️</span>
      <span className="error-message__text">{message}</span>
    </div>
  )
}
