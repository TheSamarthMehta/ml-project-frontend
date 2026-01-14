import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react'
import { Hero } from '../components/layout/Hero'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import './Contact.css'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@cardioscope.ai',
      link: 'mailto:support@cardioscope.ai',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Health St, Medical City, MC 12345',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ]

  return (
    <div className="contact-page">
      <Hero
        title="We'd Love to"
        subtitle="Hear From You"
        description="Have questions about CardioScope AI? Our team is here to help you understand your heart health better."
        badges={[
          { icon: MessageSquare, label: 'Quick Response' },
          { icon: Mail, label: '24/7 Support' },
          { icon: Phone, label: 'Expert Help' },
        ]}
      />

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={index}
                href={info.link}
                className="contact-info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-info-icon">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                <p className="contact-info-content">{info.content}</p>
              </motion.a>
            )
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="contact-form-card">
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="submit-button">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="contact-side-info"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="faq-card">
              <h3 className="faq-title">Frequently Asked Questions</h3>
              <div className="faq-list">
                <div className="faq-item">
                  <h4>How accurate are the predictions?</h4>
                  <p>Our AI models achieve 90-95% accuracy, validated against clinical datasets.</p>
                </div>
                <div className="faq-item">
                  <h4>Is my data secure?</h4>
                  <p>Yes, we use bank-level encryption and never share your data without permission.</p>
                </div>
                <div className="faq-item">
                  <h4>Can I share results with my doctor?</h4>
                  <p>Absolutely! You can download or share your assessment results easily.</p>
                </div>
                <div className="faq-item">
                  <h4>How often should I assess?</h4>
                  <p>We recommend quarterly assessments or when lifestyle changes occur.</p>
                </div>
              </div>
            </Card>

            <Card className="support-card">
              <h3 className="support-title">Need Immediate Help?</h3>
              <p className="support-text">
                If you're experiencing a medical emergency, please call 911 or visit
                your nearest emergency room immediately.
              </p>
              <Button variant="outline" className="support-button">
                Emergency Resources
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
