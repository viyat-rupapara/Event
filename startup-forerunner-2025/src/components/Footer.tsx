import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <motion.div
              className="footer-section footer-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.img 
                src="/aif-logo.png" 
                alt="Atmiya Innovations Foundation" 
                className="footer-logo"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <h3>Startup Forerunner 2025</h3>
              <p>An Entrepreneurial Odyssey</p>
              <p className="footer-description">
                India's premier entrepreneurial gathering bringing together innovators, 
                investors, and industry leaders for a transformative 5-day experience.
              </p>
              <div className="footer-dates">
                📅 17th - 21st December 2025<br />
                📍 Atmiya University, Rajkot
              </div>
              
              {/* Social Media Links */}
              <div className="footer-social">
                <motion.a 
                  href="#" 
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span>𝕏</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span>in</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span>📷</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span>▶</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
                <li><a onClick={() => scrollToSection('about')}>About Event</a></li>
                <li><a onClick={() => scrollToSection('programs')}>Programs</a></li>
                <li><a onClick={() => scrollToSection('sangam')}>Grand Finale</a></li>
                <li><a onClick={() => scrollToSection('sponsorship')}>Sponsorship</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4>Programs</h4>
              <ul className="footer-links">
                <li>EDP Program - ₹3,000</li>
                <li>Accelerator Program - ₹3,500</li>
                <li>30 Hours Training</li>
                <li>200 Seats per Track</li>
                <li>Free Sangam Access</li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4>Contact Info</h4>
              <ul className="footer-contact">
                <li>
                  <span className="contact-label">Email:</span>
                  <a href="mailto:aif@aif.org.in">aif@aif.org.in</a>
                </li>
                <li>
                  <span className="contact-label">Phone:</span>
                  <a href="tel:+919099076630">+91 90990 76630</a>
                </li>
                <li>
                  <span className="contact-label">Website:</span>
                  <a href="http://www.aif.org.in/events" target="_blank" rel="noopener noreferrer">
                    www.aif.org.in/events
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="footer-organizers"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="organizers-row">
              <div className="organizer-item">
                <span className="org-label">Organized by:</span>
                <span className="org-name">Atmiya Innovations Foundation (AIF)</span>
              </div>
              <div className="organizer-item">
                <span className="org-label">In Collaboration with:</span>
                <span className="org-name">Atmiya University</span>
              </div>
              <div className="organizer-item">
                <span className="org-label">Managed by:</span>
                <span className="org-name">Sarvoday Kelavani Samaj</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="footer-accreditation">
              🏆 NAAC Accredited - A++ Grade with CGPA 3.65
            </div>
            <div className="footer-copyright">
              <p>© 2025 Startup Forerunner. All rights reserved.</p>
              <p>An initiative by Atmiya Innovations Foundation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
