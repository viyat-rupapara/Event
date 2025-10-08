import { motion } from 'framer-motion';
import Counter from './Counter';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-logo-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* <img src="/aif-logo.png" alt="Atmiya Innovations Foundation" className="hero-main-logo" /> */}
          </motion.div>

          <motion.div
            className="event-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            🚀 India's Largest Startup Gathering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Startup Forerunner 2025
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            An Entrepreneurial Odyssey
          </motion.p>

          <motion.div
            className="hero-info glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="info-item">
              <span className="info-icon">📅</span>
              <div>
                <p className="info-label">Event Dates</p>
                <p className="info-value">17th - 21st December 2025</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <p className="info-label">Venue</p>
                <p className="info-value">Atmiya University, Rajkot</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="info-item">
              <span className="info-icon">👥</span>
              <div>
                <p className="info-label">Expected</p>
                <p className="info-value">3000+ Participants</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="http://www.aif.org.in/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button primary animate-glow"
            >
              Register Now
            </a>
            <button 
              onClick={() => scrollToSection('programs')}
              className="glass-button"
            >
              Explore Programs
            </button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="stat">
              <h3><Counter end={2} /></h3>
              <p>Program Tracks</p>
            </div>
            <div className="stat">
              <h3><Counter end={200} /></h3>
              <p>Seats per Track</p>
            </div>
            <div className="stat">
              <h3><Counter end={30} /></h3>
              <p>Hours Training</p>
            </div>
            <div className="stat">
              <h3><Counter end={5} /></h3>
              <p>Days Event</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Event Image Showcase */}
          <div className="hero-image-grid">
            <motion.div 
              className="hero-image-card glass-card large-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop" 
                alt="Startup Ecosystem"
                className="hero-img"
              />
              <div className="image-overlay">
                <h4>🌟 Innovation Hub</h4>
                <p>Connect with industry leaders</p>
              </div>
            </motion.div>

            <motion.div 
              className="hero-image-card glass-card"
              whileHover={{ scale: 1.05 }}
              style={{ animationDelay: '0.5s' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop" 
                alt="Team Collaboration"
                className="hero-img"
              />
              <div className="image-overlay">
                <h4>🤝 Networking</h4>
              </div>
            </motion.div>

            <motion.div 
              className="hero-image-card glass-card"
              whileHover={{ scale: 1.05 }}
              style={{ animationDelay: '1s' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop" 
                alt="Business Meeting"
                className="hero-img"
              />
              <div className="image-overlay">
                <h4>💼 Mentorship</h4>
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="feature-cards-grid">
            <div className="visual-card glass-card animate-float">
              <div className="visual-icon">🎯</div>
              <h3>Innovation</h3>
              <p>Transform Ideas into Reality</p>
            </div>
            <div className="visual-card glass-card animate-float" style={{ animationDelay: '1s' }}>
              <div className="visual-icon">💡</div>
              <h3>Mentorship</h3>
              <p>Learn from Industry Experts</p>
            </div>
            <div className="visual-card glass-card animate-float" style={{ animationDelay: '2s' }}>
              <div className="visual-icon">🚀</div>
              <h3>Growth</h3>
              <p>Scale Your Startup</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
