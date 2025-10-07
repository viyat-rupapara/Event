import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            Have questions? We're here to help! Reach out to us for any inquiries about the event.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard>
              <div className="contact-card glass-card">
                <div className="contact-icon">📧</div>
                <h4>Email Us</h4>
                <a href="mailto:aif@aif.org.in">aif@aif.org.in</a>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="contact-card glass-card">
                <div className="contact-icon">📞</div>
                <h4>Call Us</h4>
                <a href="tel:+919099076630">+91 90990 76630</a>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="contact-card glass-card">
                <div className="contact-icon">📍</div>
                <h4>Visit Us</h4>
                <p>
                  Atmiya University<br />
                  Rajkot, Gujarat<br />
                  India
                </p>
              </div>
            </TiltCard>

            <div className="contact-card glass-card">
              <div className="contact-icon">🌐</div>
              <h4>Website</h4>
              <a href="http://www.aif.org.in/events" target="_blank" rel="noopener noreferrer">
                www.aif.org.in/events
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-cta glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-image-container">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop" 
                alt="Join Event"
                className="cta-image"
              />
              <div className="cta-image-overlay"></div>
            </div>
            <div className="cta-content">
              <h3>Ready to Begin Your Entrepreneurial Journey?</h3>
              <p>
                Join 200+ aspiring founders and early-stage entrepreneurs at India's largest 
                startup gathering. Register now and get free access to Startup Sangam 2025!
              </p>

              <div className="cta-stats">
                <div className="stat-item">
                  <h4>5</h4>
                  <p>Days Event</p>
                </div>
                <div className="stat-item">
                  <h4>30</h4>
                  <p>Hours Training</p>
                </div>
                <div className="stat-item">
                  <h4>3000+</h4>
                  <p>Attendees</p>
                </div>
              </div>

              <a 
                href="http://www.aif.org.in/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-button primary large"
              >
                Register Now
              </a>

              <p className="registration-note">
                📅 Event Dates: 17th - 21st December 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
