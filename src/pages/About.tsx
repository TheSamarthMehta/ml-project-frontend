import { motion } from 'framer-motion'
import { Heart, Target, Users, Shield, Award, TrendingUp } from 'lucide-react'
import { Hero } from '../components/layout/Hero'
import { Card } from '../components/ui/Card'
import './About.css'

const features = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'We prioritize your health and well-being with personalized cardiovascular risk assessments.',
  },
  {
    icon: Shield,
    title: 'Evidence-Based',
    description: 'Our predictions are based on validated medical research and clinical guidelines.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'We constantly improve our models with the latest advancements in AI and cardiology.',
  },
  {
    icon: Award,
    title: 'Clinical Accuracy',
    description: 'High precision models trained on extensive cardiovascular disease datasets.',
  },
]

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Medical Officer',
    image: '👩‍⚕️',
    description: 'Cardiologist with 15+ years of experience',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Lead Data Scientist',
    image: '👨‍💻',
    description: 'AI/ML expert specializing in healthcare',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Research Director',
    image: '👩‍🔬',
    description: 'PhD in Biomedical Engineering',
  },
  {
    name: 'James Wilson',
    role: 'Product Lead',
    image: '👨‍💼',
    description: 'Healthcare technology veteran',
  },
]

const stats = [
  { value: '50K+', label: 'Assessments Completed' },
  { value: '95%', label: 'User Satisfaction' },
  { value: '5+', label: 'AI Models' },
  { value: '24/7', label: 'Support Available' },
]

export function About() {
  return (
    <div className="about-page">
      <Hero
        title="Transforming Heart Health Through"
        subtitle="AI Innovation"
        description="We're on a mission to make cardiovascular risk assessment accessible, accurate, and actionable for everyone."
        badges={[
          { icon: Target, label: 'Mission-Driven' },
          { icon: Users, label: 'Patient-Centered' },
          { icon: Award, label: 'Clinically Validated' },
        ]}
      />

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="mission-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="mission-card">
              <div className="mission-icon">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-text">
                To democratize access to advanced cardiovascular risk assessment
                technology, empowering individuals and healthcare providers with
                AI-driven insights that enable early intervention and better health
                outcomes.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="mission-card">
              <div className="mission-icon">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="mission-title">Our Vision</h2>
              <p className="mission-text">
                A world where cardiovascular disease is detected early and managed
                effectively through the seamless integration of artificial intelligence
                and clinical expertise, reducing the global burden of heart disease.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2 className="section-title">What Drives Us</h2>
          <p className="section-subtitle">
            Our core values guide everything we do
          </p>
        </div>

        <div className="features-grid">
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
                <Card className="feature-card">
                  <div className="feature-icon">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Expert clinicians, data scientists, and engineers working together
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="team-avatar">{member.image}</div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title">Ready to assess your heart health?</h2>
          <p className="cta-text">
            Get started with our AI-powered cardiovascular risk assessment today.
          </p>
          <motion.a
            href="/dashboard"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Assessment
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}
