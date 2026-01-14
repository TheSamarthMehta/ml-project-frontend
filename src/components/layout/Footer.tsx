import { Link } from 'react-router-dom'
import { Heart, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'
import './Footer.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Heart className="w-5 h-5" />
              </div>
              <span className="footer-logo-text">
                Cardio<span className="text-accent">Scope</span>
              </span>
            </div>
            <p className="footer-description">
              Empowering individuals with AI-driven cardiovascular risk assessment
              to make informed decisions about their heart health.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Documentation</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>API Reference</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <Mail className="w-4 h-4" />
                <span>support@cardioscope.ai</span>
              </li>
              <li>
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <MapPin className="w-4 h-4" />
                <span>123 Health St, Medical City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} CardioScope AI. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            Medical Disclaimer: This tool is for educational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
