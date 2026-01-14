import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Heart,
  Activity,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Users,
  TrendingUp,
  Zap,
  LineChart,
} from 'lucide-react'
import { Hero } from '../components/layout/Hero'
import { Card } from '../components/ui/Card'
import './Home.css'

const features = [
  {
    icon: Activity,
    title: 'AI-Powered Analysis',
    description: 'Get instant cardiovascular risk predictions using advanced machine learning models.',
  },
  {
    icon: BarChart3,
    title: 'Model Comparison',
    description: 'Compare multiple AI models to understand your risk from different perspectives.',
  },
  {
    icon: Shield,
    title: 'Clinically Validated',
    description: 'Our models are trained on extensive medical datasets with high accuracy rates.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Insights',
    description: 'Receive tailored recommendations based on your unique health profile.',
  },
]

const stats = [
  { icon: Users, value: '50K+', label: 'Users Trust Us' },
  { icon: Heart, value: '95%', label: 'Accuracy Rate' },
  { icon: TrendingUp, value: '5+', label: 'AI Models' },
  { icon: Zap, value: '<5sec', label: 'Response Time' },
]

const benefits = [
  'Early detection of cardiovascular disease risk',
  'Comprehensive health factor analysis',
  'Evidence-based medical recommendations',
  'Track your heart health over time',
  'Secure and private data handling',
  'Easy to understand visualizations',
]

const howItWorks = [
  {
    step: '1',
    title: 'Enter Your Data',
    description: 'Input your health metrics like age, blood pressure, cholesterol, and lifestyle factors.',
  },
  {
    step: '2',
    title: 'AI Analysis',
    description: 'Our advanced AI models process your data and calculate your cardiovascular risk.',
  },
  {
    step: '3',
    title: 'Get Insights',
    description: 'Receive detailed risk assessment, key factors, and personalized recommendations.',
  },
]

export function Home() {
  return (
    <div className="home-page">
      <Hero
        title="Personalized Heart Risk,"
        subtitle="Explained Simply"
        description="A calm, clinical-quality assistant that translates your numbers into clear heart health guidance with AI-powered insights."
        badges={[
          { icon: Activity, label: 'Predict Risk' },
          { icon: LineChart, label: 'Compare Models' },
          { icon: Heart, label: 'Explainable AI' },
        ]}
      />

      {/* Quick Action Buttons */}
      <section className="quick-actions">
        <div className="quick-actions-container">
          <motion.div
            className="action-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/dashboard" className="action-button primary">
              <Activity className="w-5 h-5" />
              Start Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/features" className="action-button secondary">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section-home">
        <div className="stats-container">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-icon-wrapper">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section-home">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title-home">
              Why Choose <span className="text-gradient">CardioScope AI</span>?
            </h2>
            <p className="section-subtitle-home">
              Advanced technology meets clinical expertise for comprehensive heart health assessment
            </p>
          </motion.div>

          <div className="features-grid-home">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="feature-card-home">
                    <div className="feature-icon-home">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="feature-title-home">{feature.title}</h3>
                    <p className="feature-description-home">{feature.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title-home">How It Works</h2>
            <p className="section-subtitle-home">
              Simple, fast, and accurate cardiovascular risk assessment in 3 easy steps
            </p>
          </motion.div>

          <div className="steps-grid">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                className="step-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="step-number">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-home">
        <div className="section-container">
          <motion.div
            className="benefits-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="benefits-text">
              <h2 className="benefits-title">
                Take Control of Your <span className="text-gradient">Heart Health</span>
              </h2>
              <p className="benefits-subtitle">
                CardioScope AI provides you with the tools and insights you need to make
                informed decisions about your cardiovascular health.
              </p>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item-home"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="benefit-check" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="benefits-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="visual-card">
                <Heart className="visual-icon" />
                <div className="visual-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-home">
        <div className="section-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title-home">Ready to Assess Your Heart Health?</h2>
            <p className="cta-subtitle-home">
              Get personalized cardiovascular risk insights in less than 5 minutes
            </p>
            <Link to="/dashboard" className="cta-button-home">
              Start Your Assessment Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="cta-disclaimer">
              Free to use • No registration required • Privacy guaranteed
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
