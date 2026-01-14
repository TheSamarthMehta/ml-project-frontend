import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Badge } from '../ui/Badge'
import './Hero.css'

interface HeroProps {
  title: string
  subtitle?: string
  description: string
  badges?: Array<{ icon: LucideIcon; label: string }>
}

export function Hero({ title, subtitle, description, badges }: HeroProps) {
  return (
    <motion.header 
      className="hero-container"
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Animated background orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-white" />
            <p className="eyebrow text-white">CardioScope AI</p>
          </div>
          <h1 className="hero-title">
            {title}<br />
            {subtitle && <span className="hero-title-gradient">{subtitle}</span>}
          </h1>
          <p className="hero-description">
            {description}
          </p>
          {badges && badges.length > 0 && (
            <div className="flex gap-3 mt-6 flex-wrap">
              {badges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <Badge key={index} variant="default">
                    <Icon className="w-3.5 h-3.5 mr-1.5" />
                    {badge.label}
                  </Badge>
                )
              })}
            </div>
          )}
        </motion.div>
      </div>
    </motion.header>
  )
}
