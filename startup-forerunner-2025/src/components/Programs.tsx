import { motion } from 'framer-motion';
import { useState } from 'react';
import TiltCard from './TiltCard';
import './Programs.css';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<'edp' | 'accelerator'>('edp');

  const programs = {
    edp: {
      title: 'EDP (Entrepreneurship Development Program)',
      stage: 'Idea to Initiation',
      price: '₹3,000',
      hours: '30 Hours',
      icon: '💡',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: [
        'Structured mentorship from industry experts',
        'Ideation and validation workshops',
        'MVP development guidance',
        'Pitch deck creation and presentation skills',
        'Market research and competitor analysis',
        'Financial planning basics',
        'Free access to Startup Sangam 2025'
      ],
      ideal: [
        'Students with startup ideas',
        'Innovators seeking structured mentorship',
        'First-time founders',
        'Anyone wanting to validate their business concept'
      ],
      output: 'MVP or Pitch-Ready Idea',
      mentoring: 'Ideation, Basics & Validation'
    },
    accelerator: {
      title: 'Accelerator Program',
      stage: 'Early-Stage to Operational Startups',
      price: '₹3,500',
      hours: '30 Hours',
      icon: '🚀',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=400&fit=crop',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: [
        'Advanced scaling strategies',
        'Investment readiness and fundraising',
        'Revenue optimization techniques',
        'Team building and leadership',
        'Legal and compliance framework',
        'Direct investor connections',
        'Free access to Startup Sangam 2025'
      ],
      ideal: [
        'Registered startups (DPIIT preferred)',
        'Entrepreneurs with revenue traction',
        'Startups looking to raise funds',
        'Businesses ready to scale operations'
      ],
      output: 'Fundable/Scalable Startup Model',
      mentoring: 'Strategy, Scaling & Funding'
    }
  };

  const selectedData = programs[selectedProgram];

  return (
    <section id="programs" className="programs">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Program Tracks</h2>
          <p className="section-subtitle">
            Choose the program that aligns with your startup journey. Limited to 200 participants per track.
          </p>
        </motion.div>

        <motion.div
          className="program-selector"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className={`selector-btn ${selectedProgram === 'edp' ? 'active' : ''}`}
            onClick={() => setSelectedProgram('edp')}
          >
            <span className="btn-icon">💡</span>
            <span>EDP Program</span>
          </button>
          <button
            className={`selector-btn ${selectedProgram === 'accelerator' ? 'active' : ''}`}
            onClick={() => setSelectedProgram('accelerator')}
          >
            <span className="btn-icon">🚀</span>
            <span>Accelerator Program</span>
          </button>
        </motion.div>

        <TiltCard>
          <motion.div
            className="program-detail glass-card"
            key={selectedProgram}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="program-header">
            <div className="program-header-image">
              <img src={selectedData.image} alt={selectedData.title} className="program-bg-img" />
              <div className="program-header-overlay" style={{ background: selectedData.gradient }}></div>
            </div>
            <div className="program-header-content">
              <div className="program-icon">{selectedData.icon}</div>
              <div>
                <h3>{selectedData.title}</h3>
                <p className="program-stage">{selectedData.stage}</p>
              </div>
              <div className="program-price">
                <span className="price-amount">{selectedData.price}</span>
                <span className="price-label">Registration Fee</span>
              </div>
            </div>
          </div>

          <div className="program-content">
            <div className="program-info-grid">
              <div className="info-box">
                <h4>⏱️ Duration</h4>
                <p>{selectedData.hours} Technical Sessions (7 hours/day)</p>
              </div>
              <div className="info-box">
                <h4>🎯 Output</h4>
                <p>{selectedData.output}</p>
              </div>
              <div className="info-box">
                <h4>👨‍🏫 Mentoring Focus</h4>
                <p>{selectedData.mentoring}</p>
              </div>
            </div>

            <div className="program-section">
              <h4>✨ What You'll Learn</h4>
              <ul className="features-list">
                {selectedData.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="check-icon">✓</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="program-section">
              <h4>👥 Ideal For</h4>
              <div className="ideal-grid">
                {selectedData.ideal.map((item, index) => (
                  <motion.div
                    key={index}
                    className="ideal-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="dot"></span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="program-cta">
              <a 
                href="http://www.aif.org.in/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-button primary"
              >
                Register for {selectedProgram === 'edp' ? 'EDP' : 'Accelerator'} Program
              </a>
              <p className="seats-warning">⚠️ Only 200 seats available per track</p>
            </div>
          </div>
        </motion.div>
        </TiltCard>

        <motion.div
          className="comparison-note glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4>📋 Important Note</h4>
          <p>
            Participants can register for <strong>only one program</strong> based on their current stage. 
            Both programs include 30 hours of intensive technical sessions (7 hours per day) and 
            <strong> free access to Startup Sangam 2025</strong> - India's largest business networking event.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
