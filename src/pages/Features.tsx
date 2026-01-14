import { motion } from 'framer-motion'
import {
  Brain,
  Activity,
  BarChart3,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Lock,
  Smartphone,
  Clock,
  CheckCircle2,
} from 'lucide-react'
import { Hero } from '../components/layout/Hero'
import { Card } from '../components/ui/Card'
import './Features.css'

const mainFeatures = [
  {
    icon: Brain,
    title: 'AI-Powered Predictions',
    description: 'Advanced machine learning models including ANN, Random Forest, and XGBoost for accurate cardiovascular risk assessment.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Model Comparison',
    description: 'Compare multiple AI models side-by-side to understand different perspectives on your heart health risk.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Activity,
    title: 'Real-Time Analysis',
    description: 'Get instant cardiovascular risk assessments with detailed explanations of contributing factors.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: TrendingUp,
    title: 'Personalized Recommendations',
    description: 'Receive tailored lifestyle and medical recommendations based on your unique risk profile.',
    color: 'from-sky-500 to-blue-500',
  },
]

const additionalFeatures = [
  {
    icon: Shield,
    title: 'Medical-Grade Accuracy',
    description: 'Trained on extensive clinical datasets with validation against established medical guidelines.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get results in seconds with our optimized AI infrastructure.',
  },
  {
    icon: Users,
    title: 'User-Friendly Interface',
    description: 'Intuitive design that makes complex medical data easy to understand.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your health data is encrypted and never shared without your permission.',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'Access from any device - desktop, tablet, or mobile.',
  },
  {
    icon: Clock,
    title: 'History Tracking',
    description: 'Monitor your cardiovascular health trends over time.',
  },
]

const models = [
  {
    name: 'Artificial Neural Network',
    accuracy: '94%',
    description: 'Deep learning model that mimics human brain neural networks for complex pattern recognition.',
  },
  {
    name: 'Random Forest',
    accuracy: '92%',
    description: 'Ensemble learning method that uses multiple decision trees for robust predictions.',
  },
  {
    name: 'XGBoost',
    accuracy: '93%',
    description: 'Gradient boosting algorithm optimized for speed and performance.',
  },
  {
    name: 'Logistic Regression',
    accuracy: '88%',
    description: 'Classical statistical model providing interpretable risk assessments.',
  },
  {
    name: 'Support Vector Machine',
    accuracy: '90%',
    description: 'Advanced classification algorithm excellent for high-dimensional data.',
  },
]

const benefits = [
  'Early detection of cardiovascular disease risk',
  'Evidence-based personalized recommendations',
  'Track health improvements over time',
  'Compare multiple AI model perspectives',
  'Understand key risk factors affecting your health',
  'Get actionable insights for lifestyle changes',
  'Share results with healthcare providers',
  'Access comprehensive health analytics',
]

export function Features() {
  return (
    <div className="features-page">
      <Hero
        title="Everything You Need for"
        subtitle="Heart Health Insights"
        description="Cutting-edge AI technology meets clinical expertise to deliver comprehensive cardiovascular risk assessment."
        badges={[
          { icon: Brain, label: 'AI-Powered' },
          { icon: Shield, label: 'Secure' },
          { icon: Zap, label: 'Fast Results' },
        ]}
      />

      {/* Main Features */}
      <section className="main-features-section">
        <div className="features-grid-main">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="main-feature-card">
                  <div className={`main-feature-icon bg-gradient-to-br ${feature.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="main-feature-title">{feature.title}</h3>
                  <p className="main-feature-description">{feature.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="additional-features-section">
        <div className="section-header">
          <h2 className="section-title">More Amazing Features</h2>
          <p className="section-subtitle">
            Comprehensive tools for complete heart health management
          </p>
        </div>

        <div className="additional-features-grid">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="additional-feature-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="additional-feature-icon">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="additional-feature-title">{feature.title}</h4>
                <p className="additional-feature-description">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* AI Models Section */}
      <section className="models-section">
        <div className="section-header">
          <h2 className="section-title">Powered by Multiple AI Models</h2>
          <p className="section-subtitle">
            Choose from 5+ state-of-the-art machine learning algorithms
          </p>
        </div>

        <div className="models-grid">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="model-card">
                <div className="model-header">
                  <h3 className="model-name">{model.name}</h3>
                  <div className="model-accuracy">{model.accuracy}</div>
                </div>
                <p className="model-description">{model.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose CardioScope AI?</h2>
          <p className="section-subtitle">
            Comprehensive benefits for your heart health journey
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <CheckCircle2 className="benefit-icon" />
              <span>{benefit}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta-section">
        <motion.div
          className="features-cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="features-cta-title">Ready to Get Started?</h2>
          <p className="features-cta-text">
            Take control of your heart health with AI-powered insights today.
          </p>
          <div className="features-cta-buttons">
            <motion.a
              href="/dashboard"
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Assessment
            </motion.a>
            <motion.a
              href="/about"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
