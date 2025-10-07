import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import './Sponsorship.css';

const Sponsorship = () => {
  const mainSponsors = [
    {
      title: 'Title Sponsor',
      amount: '₹3,00,000',
      benefits: [
        'Prominent logo placement across all media',
        'On-stage mention at all sessions',
        'Dedicated speech slot',
        'Access to all networking events',
        'VIP passes for team',
        'Prime exhibition space'
      ]
    },
    {
      title: 'Associate Sponsor',
      amount: '₹2,00,000',
      benefits: [
        'Co-branding opportunities',
        'Access to all pitch decks',
        'B2B Connect lounge access',
        'Branding across all sessions',
        'Exhibition booth',
        'Media coverage'
      ]
    }
  ];

  const tiers = [
    {
      tier: 'Platinum',
      amount: '₹75,000',
      icon: '💎',
      color: '#e5e4e2',
      benefits: [
        '15 first-compartment seats + 4 front row',
        'Dedicated speech slot',
        'All-day access to exclusive areas',
        'Executive lounge access',
        'Logo on all media materials',
        'Premium networking opportunities'
      ]
    },
    {
      tier: 'Gold',
      amount: '₹50,000',
      icon: '🥇',
      color: '#ffd700',
      benefits: [
        '10 premium seats',
        'B2B connect access',
        'Corporate dinner invitation',
        'Access to pitch decks',
        'Contact diary inclusion',
        'Logo on digital media'
      ]
    },
    {
      tier: 'Silver',
      amount: '₹25,000',
      icon: '🥈',
      color: '#c0c0c0',
      benefits: [
        '3 general seats',
        '2 executive passes',
        'Logo in digital promotions',
        'Networking opportunities',
        'Event materials inclusion'
      ]
    }
  ];

  const partnerCategories = [
    'Media Partner', 'Hospitality Partner', 'F&B Partner', 
    'Communication Partner', 'Travel Partner', 'Venue Partner',
    'Printing Partner', 'Skill Partner', 'Innovation Partner',
    'Incubation Partner', 'Certificate/Award Partner', 'Banking Partner',
    'Mentorship Partner', 'Knowledge Partner', 'Advertisement Partner'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="sponsorship" className="sponsorship">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Sponsorship & Partnership</h2>
          <p className="section-subtitle">
            Partner with India's largest entrepreneurial gathering and connect with 3000+ founders, investors, and industry leaders
          </p>
        </motion.div>

        <motion.div
          className="main-sponsors-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="subsection-title">Main Sponsorship Titles</h3>
          <div className="main-sponsors-grid">
            {mainSponsors.map((sponsor, index) => (
              <TiltCard key={index}>
                <motion.div
                  className="sponsor-card glass-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="sponsor-header">
                    <h4>{sponsor.title}</h4>
                    <div className="sponsor-amount">{sponsor.amount}</div>
                  </div>
                  <ul className="sponsor-benefits">
                    {sponsor.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <span className="benefit-check">✓</span>
                        {benefit}
                      </li>
                  ))}
                </ul>
              </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="tiers-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="subsection-title">Partnership Tiers</h3>
          <div className="tiers-grid">
            {tiers.map((tier, index) => (
              <TiltCard key={index}>
                <motion.div
                  className={`tier-card glass-card tier-${tier.tier.toLowerCase()}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <div className="tier-icon">{tier.icon}</div>
                  <h4>{tier.tier}</h4>
                  <div className="tier-amount">{tier.amount}</div>
                  <div className="tier-divider"></div>
                  <ul className="tier-benefits">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <span className="check-dot"></span>
                        {benefit}
                      </li>
                    ))}
                </ul>
              </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="categories-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="subsection-title">Partner Categories</h3>
          <p className="categories-note">
            These partners may belong to any sponsorship tier (Silver/Gold/Platinum)
          </p>
          <motion.div 
            className="categories-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partnerCategories.map((category, index) => (
              <motion.div
                key={index}
                className="category-badge glass-card"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                {category}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="sponsorship-cta glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Become a Sponsor</h3>
          <p>
            Join us in empowering the next generation of entrepreneurs. Connect with thousands of 
            startups, investors, and industry leaders. Showcase your brand to the most engaged 
            entrepreneurial audience in India.
          </p>
          <div className="cta-actions">
            <a 
              href="mailto:aif@aif.org.in?subject=Sponsorship Inquiry - Startup Forerunner 2025"
              className="glass-button primary"
            >
              Become a Sponsor
            </a>
            <a 
              href="tel:+919099076630"
              className="glass-button"
            >
              Call: +91 90990 76630
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsorship;
