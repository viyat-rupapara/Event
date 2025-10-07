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
            India's premier entrepreneurial gathering bringing together innovators, investors, and industry leaders
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
            Startup Forerunner 2025 is a transformative 5-day event designed to nurture entrepreneurial talent, 
            validate startup ideas, and accelerate business growth. From ideation to funding, participants will 
            receive comprehensive mentorship, technical training, and direct access to investors and industry experts.
          </p>
          
          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-icon">🎯</span>
              <h4>Mission</h4>
              <p>Empower aspiring entrepreneurs with skills, mentorship, and resources to build successful startups</p>
            </div>
            <div className="highlight">
              <span className="highlight-icon">🌟</span>
              <h4>Vision</h4>
              <p>Create India's most impactful startup ecosystem gathering and networking platform</p>
            </div>
            <div className="highlight">
              <span className="highlight-icon">💎</span>
              <h4>Value</h4>
              <p>Comprehensive training, investor connections, and peer networking worth thousands</p>
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
