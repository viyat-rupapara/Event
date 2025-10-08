import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import './About.css';

const About = () => {
  const organizers = [
    {
      name: 'Atmiya Innovations Foundation',
      role: 'Main Organizer',
      description: 'Leading innovation and entrepreneurship development',
      icon: '🏢',
      image: ''
    },
    {
      name: 'Atmiya University',
      role: 'Collaboration Partner',
      description: 'NAAC A++ Accredited with CGPA 3.65',
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
    },
    {
      name: 'Sarvoday Kelavani Samaj',
      role: 'Event Management',
      description: 'Managing the complete event operations',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    }
  ];

  const collaborators = [
    {
      name: 'Shri Manibhai Virani & Smt. Navalben Virani Science College',
      type: 'Academic Partner',
      icon: '🔬'
    },
    {
      name: 'Centre for Business and Entrepreneurial Initiative (CBEI)',
      type: 'Business Partner',
      icon: '💼'
    },
    {
      name: 'SSIP',
      type: 'Innovation Partner',
      icon: '💡'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About the Event</h2>
          <p className="section-subtitle">
            A dynamic startup week organized by Atmiya Innovations Foundation for aspiring founders, early-stage entrepreneurs, and scaling startups
          </p>
        </motion.div>

        <motion.div
          className="about-content glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="about-description">
            <strong>Startup Forerunner 2025</strong> is a dynamic startup week designed to nurture entrepreneurial talent 
            through intensive 5-day programs (EDP & Accelerator). The event provides comprehensive mentorship, technical 
            training, and hands-on learning covering everything from ideation to funding. The week <strong>culminates in 
            Startup Sangam 2025</strong> - India's largest business gathering with 3000+ participants including industrialists, 
            investors, unicorn founders, and ecosystem builders.
          </p>
          
          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-icon">🎯</span>
              <h4>Mission</h4>
              <p>Empower aspiring entrepreneurs with structured mentorship, technical skills, and direct access to investors and industry leaders</p>
            </div>
            <div className="highlight">
              <span className="highlight-icon">🌟</span>
              <h4>Vision</h4>
              <p>Build India's most comprehensive startup acceleration ecosystem that transforms ideas into fundable businesses</p>
            </div>
            <div className="highlight">
              <span className="highlight-icon">💎</span>
              <h4>Value</h4>
              <p>Complete entrepreneurial journey - From idea validation to MVP development to direct investor connections</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="organizers-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="subsection-title">IN ASSOCIATE WITH </h3>
          <div className="organizers-grid">
            {organizers.map((org, index) => (
              <TiltCard key={index}>
                <motion.div
                  className="organizer-card glass-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="org-image-container">
                    <img src={org.image} alt={org.name} className="org-image" />
                    <div className="org-icon-badge">{org.icon}</div>
                  </div>
                  <h4>{org.name}</h4>
                  <span className="org-role">{org.role}</span>
                  <p>{org.description}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="accreditation-banner glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="accreditation-icon">🏆</div>
          <div className="accreditation-content">
            <h4>NAAC Accredited Institution</h4>
            <p>
              NAAC Assessment & Accreditation Cycle-III: <strong>'A++' grade with CGPA 3.65</strong> on 4 point scale
            </p>
          </div>
        </motion.div>

        <motion.div
          className="collaborators-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="subsection-title">Collaborators & Partners</h3>
          <div className="collaborators-grid">
            {collaborators.map((collab, index) => (
              <TiltCard key={index}>
                <motion.div
                  className="collaborator-card glass-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="collab-icon">{collab.icon}</div>
                  <h5>{collab.name}</h5>
                  <span className="collab-type">{collab.type}</span>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
