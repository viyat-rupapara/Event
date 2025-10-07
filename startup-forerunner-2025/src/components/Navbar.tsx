import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-content">
        <motion.div 
          className="navbar-brand"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/aif-logo.png" alt="Atmiya Innovations Foundation" className="navbar-logo" />
        
        </motion.div>

        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('hero')} className="nav-link">Home</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a onClick={() => scrollToSection('programs')} className="nav-link">Programs</a>
          <a onClick={() => scrollToSection('sangam')} className="nav-link">Grand Finale</a>
          <a onClick={() => scrollToSection('sponsorship')} className="nav-link">Sponsorship</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>

        <div className="navbar-actions">
          <a 
            href="http://www.aif.org.in/events" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-button primary"
          >
            Register Now
          </a>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
