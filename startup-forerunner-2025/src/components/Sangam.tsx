import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import TiltCard from './TiltCard';
import './Sangam.css';

const Sangam = () => {
  const attractions = [
    {
      icon: '🎤',
      title: 'Keynote Address',
      description: 'Hear from industry icons, successful founders, and unicorn founders sharing their entrepreneurial journey',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop'
    },
    {
      icon: '🏪',
      title: 'Startup Exhibition Stalls',
      description: 'Showcase your innovation with dedicated exhibition space and connect with potential customers',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
    },
    {
      icon: '🏆',
      title: 'Pitch Deck Competition & Awards',
      description: 'Present your startup pitch and compete for prestigious awards and recognition',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop'
    },
    {
      icon: '🤝',
      title: 'Founder-Investor Speed Networking',
      description: 'Direct access to Angel Investors, VCs, and funding opportunities through structured networking',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop'
    },
    {
      icon: '💼',
      title: 'B2B Connect Lounge',
      description: 'Exclusive executive lounge for high-value business connections and partnership opportunities',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop'
    },
    {
      icon: '🎭',
      title: 'Cultural Night & Corporate Dinner',
      description: 'Evening entertainment followed by networking dinner with industry leaders',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop'
    },
    {
      icon: '✨',
      title: 'Innovation Showcases',
      description: 'Explore cutting-edge innovations and breakthrough technologies from startups',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    },
    {
      icon: '🎯',
      title: 'Startup Pitch Arena',
      description: 'Live pitching arena where startups present to investors and get real-time feedback',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="sangam" className="sangam">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="sangam-badge">🌟 Grand Finale</div>
          <h2>Startup Sangam 2025</h2>
          <p className="section-subtitle">
            India's Biggest Business Networking Event - A Confluence of Ideas, Innovation & Investment with 3000+ participants from across India and beyond
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Event Showcase Banner */}
        <motion.div
          className="sangam-showcase"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="showcase-image-container">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&h=500&fit=crop" 
              alt="Startup Sangam Event"
              className="showcase-image"
            />
            <div className="showcase-overlay"></div>
          </div>
          <div className="sangam-info-grid">
            <div className="sangam-info-item">
              <div className="info-icon-large">📅</div>
              <h4>Date</h4>
              <p>21st December 2025</p>
            </div>
            <div className="sangam-info-item">
              <div className="info-icon-large">🏛️</div>
              <h4>Venue</h4>
              <p>Gyanganga Convocation Hall<br/>Atmiya University</p>
            </div>
            <div className="sangam-info-item">
              <div className="info-icon-large">👥</div>
              <h4>Participants</h4>
              <p>3000+ from across<br/>India & Beyond</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="attractions-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="subsection-title">Key Attractions</h3>
          <div className="attractions-grid">
            {attractions.map((attraction, index) => (
              <TiltCard key={index}>
                <motion.div
                  className="attraction-card glass-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="attraction-image-container">
                    <img src={attraction.image} alt={attraction.title} className="attraction-img" />
                    <div className="attraction-icon-badge">{attraction.icon}</div>
                  </div>
                  <div className="attraction-content">
                    <h4>{attraction.title}</h4>
                    <p>{attraction.description}</p>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="attendees-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="subsection-title">Who Will Attend?</h3>
          <div className="attendees-grid">
            <div className="attendee-card glass-card">
              <span className="attendee-icon">🏭</span>
              <h5>Industrialists</h5>
            </div>
            <div className="attendee-card glass-card">
              <span className="attendee-icon">💰</span>
              <h5>Angel Investors</h5>
            </div>
            <div className="attendee-card glass-card">
              <span className="attendee-icon">🦄</span>
              <h5>Unicorn Founders</h5>
            </div>
            <div className="attendee-card glass-card">
              <span className="attendee-icon">💼</span>
              <h5>Venture Capitalists</h5>
            </div>
            <div className="attendee-card glass-card">
              <span className="attendee-icon">🏛️</span>
              <h5>Government Delegates</h5>
            </div>
            <div className="attendee-card glass-card">
              <span className="attendee-icon">🌱</span>
              <h5>Ecosystem Builders</h5>
            </div>
            <div className="attendee-card glass-card">
              <span className="attendee-icon">🚀</span>
              <h5>Startup Founders</h5>
            </div>
            <div className="attendee-card glass-card">
              <span className="attendee-icon">🎓</span>
              <h5>Aspiring Entrepreneurs</h5>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="ticketing-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="subsection-title">Access & Ticketing</h3>
          
          <div className="tickets-grid">
            <div className="ticket-card glass-card gold">
              <div className="ticket-badge">GOLD</div>
              <div className="ticket-price">₹600</div>
              <div className="ticket-note">Dinner Included</div>
              <ul className="ticket-benefits">
                <li>✓ Premium Seating</li>
                <li>✓ B2B Connect Lounge Access</li>
                <li>✓ Executive Networking Zones</li>
                <li>✓ Innovation Showcases</li>
                <li>✓ Startup Pitch Arena Access</li>
                <li>✓ Corporate Dinner</li>
              </ul>
            </div>

            <div className="ticket-card glass-card silver">
              <div className="ticket-badge">SILVER</div>
              <div className="ticket-price">₹500</div>
              <div className="ticket-note">Dinner Included</div>
              <ul className="ticket-benefits">
                <li>✓ Standard Seating</li>
                <li>✓ Innovation Showcases</li>
                <li>✓ Startup Pitch Arena Access</li>
                <li>✓ Networking Opportunities</li>
                <li>✓ Corporate Dinner</li>
              </ul>
            </div>

            <div className="ticket-card glass-card free">
              <div className="ticket-badge special">FREE ENTRY</div>
              <div className="ticket-price">₹0</div>
              <div className="ticket-note">For Program Participants</div>
              <ul className="ticket-benefits">
                <li>✓ Complimentary Access</li>
                <li>✓ For EDP & Accelerator Participants</li>
                <li>✓ All Event Access</li>
                <li>✓ Networking Opportunities</li>
                <li>✓ Certificate of Participation</li>
              </ul>
            </div>
          </div>

          <div className="ticketing-cta">
            <a 
              href="http://www.aif.org.in/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button primary"
            >
              Book Your Tickets Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sangam;
