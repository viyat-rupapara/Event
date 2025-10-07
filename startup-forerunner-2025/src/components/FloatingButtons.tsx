import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Register Now Button */}
      <motion.a
        href="http://www.aif.org.in/events"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-register"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="register-icon">🚀</span>
        <span className="register-text">Register Now</span>
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="floating-back-to-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="back-to-top-icon">↑</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Social Media Buttons */}
      <div className="floating-social">
        {[
          { icon: '𝕏', label: 'Twitter', color: '#1DA1F2' },
          { icon: 'in', label: 'LinkedIn', color: '#0077B5' },
          { icon: '📷', label: 'Instagram', color: '#E4405F' }
        ].map((social, index) => (
          <motion.button
            key={social.label}
            className="social-btn"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.1, x: 10 }}
            style={{ '--hover-color': social.color } as React.CSSProperties}
          >
            <span className="social-icon">{social.icon}</span>
            <span className="social-label">{social.label}</span>
          </motion.button>
        ))}
      </div>
    </>
  );
};

export default FloatingButtons;
