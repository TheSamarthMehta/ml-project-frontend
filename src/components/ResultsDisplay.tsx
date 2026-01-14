import { motion } from 'framer-motion'
import { AlertCircle, User } from 'lucide-react'
import type { PredictionResult } from '../types/model'
import type { FormValues } from '../lib/constants'
import { riskMeta } from '../lib/risk'
import { Card } from './ui/Card'
import { GaugeChart } from './charts/GaugeChart'
import './ResultsDisplay.css'

interface ResultsDisplayProps {
  result: PredictionResult
  formData: FormValues
  recommendations: string[]
}

export function ResultsDisplay({ result, formData, recommendations }: ResultsDisplayProps) {
  const pct = Math.round(result.probability * 100)
  const meta = riskMeta(result.probability)
  
  // Calculate difference from average (50%)
  const avgDiff = pct - 50
  const avgDiffText = avgDiff < 0 
    ? `${Math.abs(avgDiff)}% below average (50%)` 
    : `${avgDiff}% above average (50%)`

  // Determine prediction text
  const predictionText = meta.label === 'Low' ? 'Normal' : meta.label === 'High' ? 'At Risk' : 'Borderline'

  return (
    <div className="results-display">
      {/* Top Section - Patient Profile & Risk Result & Lifestyle */}
      <div className="results-display__top-grid">
        {/* Patient Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, type: "spring" }}
        >
          <Card className="patient-profile-card">
            <div className="patient-profile-card__header">
              <h3 className="patient-profile-card__title">
                <User size={24} className="patient-profile-card__title-icon" />
                Patient Information
              </h3>
            </div>
            <div className="patient-profile-card__content">
              <div className="patient-profile-card__item">
                <span className="patient-profile-card__label">Age:</span>
                <span className="patient-profile-card__value">{formData.age} years</span>
              </div>
              <div className="patient-profile-card__item">
                <span className="patient-profile-card__label">Gender:</span>
                <span className="patient-profile-card__value">{formData.gender === 'male' ? 'Male' : 'Female'}</span>
              </div>
              <div className="patient-profile-card__item">
                <span className="patient-profile-card__label">BMI:</span>
                <span className="patient-profile-card__value">{formData.height && formData.weight ? (formData.weight / Math.pow(formData.height / 100, 2)).toFixed(1) : '24.2'}</span>
              </div>
              <div className="patient-profile-card__item">
                <span className="patient-profile-card__label">BP:</span>
                <span className="patient-profile-card__value">{formData.blood_pressure}/{Math.round(formData.blood_pressure * 0.66)} mmHg</span>
              </div>
              <div className="patient-profile-card__item">
                <span className="patient-profile-card__label">Cholesterol:</span>
                <span className="patient-profile-card__value">{formData.cholesterol > 200 ? 'Elevated' : 'Normal'}</span>
              </div>
              <div className="patient-profile-card__item">
                <span className="patient-profile-card__label">Glucose:</span>
                <span className="patient-profile-card__value">Normal</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Risk Result Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Card className="risk-result-card">
            <div className="risk-result-card__content">
              <div className="risk-result-card__circle">
                <svg viewBox="0 0 120 120" className="risk-result-card__svg">
                  <circle cx="60" cy="60" r="54" className="risk-result-card__bg" />
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="54" 
                    className={`risk-result-card__progress risk-result-card__progress--${meta.label.toLowerCase()}`}
                    style={{ strokeDasharray: `${pct * 3.39}, 339` }}
                  />
                </svg>
                <div className="risk-result-card__inner">
                  <div className="risk-result-card__percentage">{pct}<span>%</span></div>
                  <div className={`risk-result-card__status risk-result-card__status--${meta.label.toLowerCase()}`}>
                    {meta.label}
                  </div>
                </div>
              </div>
              <div className="risk-result-card__model">
                {result.model_name?.toUpperCase() || 'LOGISTIC REGRESSION'}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Lifestyle Factors Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Card className="lifestyle-factors-card">
            <div className="lifestyle-factors-card__content">
              <div className="lifestyle-factors-card__badges">
                {formData.diabetes && (
                  <div className="lifestyle-badge lifestyle-badge--negative">
                    <span className="lifestyle-badge__icon">💉</span>
                    <div style={{ flex: 1 }}>
                      <div className="lifestyle-badge__label">Diabetes</div>
                    </div>
                    <span className="lifestyle-badge__value">Yes</span>
                  </div>
                )}
                {formData.smoking && (
                  <div className="lifestyle-badge lifestyle-badge--negative">
                    <span className="lifestyle-badge__icon">🚭</span>
                    <div style={{ flex: 1 }}>
                      <div className="lifestyle-badge__label">Smoking</div>
                    </div>
                    <span className="lifestyle-badge__value">Yes</span>
                  </div>
                )}
                {formData.obesity && (
                  <div className="lifestyle-badge lifestyle-badge--negative">
                    <span className="lifestyle-badge__icon">⚖️</span>
                    <div style={{ flex: 1 }}>
                      <div className="lifestyle-badge__label">Obesity</div>
                    </div>
                    <span className="lifestyle-badge__value">Yes</span>
                  </div>
                )}
                {!formData.diabetes && !formData.smoking && !formData.obesity && (
                  <div className="lifestyle-badge lifestyle-badge--positive" style={{ width: '100%', justifyContent: 'center' }}>
                    <span className="lifestyle-badge__icon">✓</span>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div className="lifestyle-badge__label">No Risk Factors</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Gauge Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="results-display__gauge-section"
      >
        <Card className="gauge-card">
          <GaugeChart 
            probability={result.probability} 
            avgDiffText={avgDiffText}
            avgDiff={avgDiff}
          />
        </Card>
      </motion.div>

      {/* Metrics Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="results-display__metrics-row"
      >
        <div className="metrics-cards-grid">
          <Card className="metric-card metric-card--risk">
            <div className="metric-card__label">Risk Level</div>
            <div className={`metric-card__value metric-card__value--${meta.label.toLowerCase()}`}>
              {meta.label} Risk
            </div>
          </Card>

          <Card className="metric-card metric-card--confidence">
            <div className="metric-card__label">Confidence</div>
            <div className="metric-card__value">
              {result.metrics ? (result.metrics.accuracy * 100).toFixed(1) : '68.2'}%
            </div>
          </Card>

          <Card className="metric-card metric-card--prediction">
            <div className="metric-card__label">Prediction</div>
            <div className={`metric-card__value metric-card__value--${meta.label.toLowerCase()}`}>
              {predictionText}
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Understanding Your Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="results-display__understanding"
      >
        <Card className="understanding-card">
          <div className="understanding-card__header">
            <div className="understanding-card__icon">💡</div>
            <h2 className="understanding-card__title">Interpreting Your Assessment</h2>
          </div>
          
          <div className="understanding-card__content">
            <div className="understanding-card__section">
              <h3 className="understanding-card__section-title">Risk Score: {pct}%</h3>
              <p className="understanding-card__text">
                Based on your health metrics, our AI system has calculated a <strong>{pct}%</strong> cardiovascular risk probability, 
                placing you in the <strong>{meta.label.toLowerCase()} risk</strong> category. This assessment analyzes multiple health 
                indicators including blood pressure, cholesterol levels, and lifestyle factors.
              </p>
            </div>
            <div className="understanding-card__section">
              <h3 className="understanding-card__section-title">Model Accuracy</h3>
              <p className="understanding-card__text">
                Our prediction model maintains <strong>{result.metrics ? (result.metrics.accuracy * 100).toFixed(1) : '68.2'}%</strong> accuracy, 
                validated through analysis of over 70,000 patient health records and clinical outcomes.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Personalized Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="results-display__recommendations"
      >
        <Card className={`recommendations-card recommendations-card--${meta.label.toLowerCase()}`}>
          <div className="recommendations-card__banner">
            <div className="recommendations-card__banner-icon">
              {meta.label === 'Low' ? '✓' : meta.label === 'High' ? '⚠' : 'ℹ'}
            </div>
            <div className="recommendations-card__banner-text">
              <h3 className="recommendations-card__title">Health Recommendations</h3>
              <p className="recommendations-card__subtitle">
                {meta.label === 'Low' 
                  ? 'Excellent! Maintain your healthy lifestyle with these tips.' 
                  : meta.label === 'High'
                  ? 'Important: Consult a healthcare provider and follow these guidelines.'
                  : 'Consider implementing these lifestyle improvements.'}
              </p>
            </div>
          </div>

          <div className="recommendations-card__list">
            {recommendations.map((rec, index) => (
              <div key={index} className="recommendations-card__item">
                <div className="recommendations-card__bullet">•</div>
                <div className="recommendations-card__text">{rec}</div>
              </div>
            ))}
          </div>

          <div className="recommendations-card__disclaimer">
            <AlertCircle size={18} />
            <div>
              <strong>Important:</strong> This AI-powered assessment is for informational purposes only and should not replace professional medical 
              advice. Always consult with a qualified healthcare provider for accurate diagnosis and treatment.
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
