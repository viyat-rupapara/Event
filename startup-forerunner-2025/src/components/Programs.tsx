import { motion } from 'framer-motion';
import { useState } from 'react';
import TiltCard from './TiltCard';
import './Programs.css';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<'edp' | 'accelerator'>('edp');

  const programs = {
    edp: {
      title: 'EDP (Entrepreneurship Development Program)',
      stage: 'For Idea-to-Initiation Stage',
      price: '₹3,000',
      hours: '30 Hours',
      icon: '💡',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      registration: 'Not Mandatory (DPIIT or Registered)',
      features: [
        'Entrepreneurial Mindset & Idea Generation',
        'Networking Skills & Personal Fit Analysis',
        'Business Validation & Market Testing',
        'Strategy, Resources & Execution Planning',
        'Pitching, Scaling & Entrepreneurial Well-being',
        'Design Thinking & Mind Mapping',
        'Free access to Startup Sangam 2025'
      ],
      schedule: [
        { day: 'Day 1', title: 'Foundation & Ideation', desc: 'Entrepreneurial Mindset, Idea Generation, Design Thinking & Mind Mapping' },
        { day: 'Day 2', title: 'Networking & Analysis', desc: 'Networking Skills, Personal Fit Analysis & Market Testing - Aligning strengths with ideas' },
        { day: 'Day 3', title: 'Validation & Testing', desc: 'Business Validation & Market Fit - Customer discovery, prototyping, assumption testing' },
        { day: 'Day 4', title: 'Strategy & Planning', desc: 'Resources & Execution - Business models, financial feasibility, operational planning' },
        { day: 'Day 5', title: 'Pitching & Growth', desc: 'Investor pitch preparation, growth strategy, meditation & yoga sessions' }
      ],
      ideal: [
        'Budding entrepreneurs with an idea or concept',
        'Students with startup ideas seeking structured mentorship',
        'First-time founders looking to validate their concept',
        'Innovators wanting to start their entrepreneurial journey'
      ],
      output: 'MVP or Pitch-Ready Idea',
      mentoring: 'Ideation, Basics & Validation'
    },
    accelerator: {
      title: 'Accelerator Program',
      stage: 'For Operational Startups Seeking Growth',
      price: '₹3,500',
      hours: '30 Hours',
      icon: '🚀',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=400&fit=crop',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      registration: 'Preferably DPIIT or Registered',
      features: [
        'Scaling Strategies & Team Building',
        'Customer Acquisition & Growth Hacking',
        'Financial Modeling & Revenue Planning',
        'Legal Compliance & Intellectual Property',
        'Pitch Design & Valuation Methods',
        'Live Investor Interaction Sessions',
        'Free access to Startup Sangam 2025'
      ],
      schedule: [
        { day: 'Day 1', title: 'Scaling Foundations', desc: 'Scaling Strategies & Team Building for Operational Growth' },
        { day: 'Day 2', title: 'Growth Tactics', desc: 'Customer Acquisition Tactics & Growth Hacking Tools' },
        { day: 'Day 3', title: 'Financial Readiness', desc: 'Financial Modeling, Revenue Planning & Investment Readiness' },
        { day: 'Day 4', title: 'Legal & Funding', desc: 'Legal Compliance, Intellectual Property & Fundraising Strategy' },
        { day: 'Day 5', title: 'Investor Connect', desc: 'Pitch Design, Valuation Methods & Live Investor Interaction' }
      ],
      ideal: [
        'Existing startups in early growth or MVP stage',
        'Registered startups with revenue traction',
        'Entrepreneurs looking to raise funds or scale operations',
        'Startups aiming to become fundable/scalable'
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
                <p>{selectedData.hours} (7 hours/day)</p>
              </div>
              <div className="info-box">
                <h4>🎯 Output</h4>
                <p>{selectedData.output}</p>
              </div>
              <div className="info-box">
                <h4>� Registration</h4>
                <p>{selectedData.registration}</p>
              </div>
              <div className="info-box">
                <h4>�👨‍🏫 Mentoring Focus</h4>
                <p>{selectedData.mentoring}</p>
              </div>
            </div>

            <div className="program-section">
              <h4>📅 5-Day Program Schedule</h4>
              <div className="schedule-grid">
                {selectedData.schedule.map((day, index) => (
                  <motion.div
                    key={index}
                    className="schedule-card glass-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="schedule-day">{day.day}</div>
                    <h5>{day.title}</h5>
                    <p>{day.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="program-section">
              <h4>✨ Key Learning Areas</h4>
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
              <h4>👥 Who Should Join?</h4>
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
