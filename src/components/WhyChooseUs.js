import React from 'react';
import { FiTruck, FiShield, FiUserCheck, FiPackage } from 'react-icons/fi';

function WhyChooseUs() {
  const features = [
    {
      icon: <FiTruck size={24} color="#ffffff" />,
      title: 'Same-Day Delivery',
      description: 'Get your medicines delivered within 24 hours — fast, safe, and convenient.',
    },
    {
      icon: <FiUserCheck size={24} color="#ffffff" />,
      title: 'Expert Pharmacy Support',
      description: 'Talk to licensed pharmacists for guidance anytime you need help.',
    },
    {
      icon: <FiPackage size={24} color="#ffffff" />,
      title: 'Certified Medications',
      description: 'We stock only verified, trusted, and regulated pharmaceutical products.',
    },
    {
      icon: <FiShield size={24} color="#ffffff" />,
      title: 'Secure & Easy Ordering',
      description: 'Order in minutes with confidence — your data and health info are protected.',
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconWrapper}>
                {feature.icon}
              </div>
              <div style={styles.textContent}>
                <h3 style={styles.title}>{feature.title}</h3>
                <p style={styles.description}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#ffffff',
    fontFamily: 'Aeonik, sans-serif',
    padding: '2rem 0', // vertical spacing only
  },
  container: {
    padding: '0 2rem', // matches navbar side padding
    maxWidth: '1300px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    backgroundColor: '#fff',
    padding: '1rem 1.2rem',
    // borderRadius: '12px',
    // boxShadow: '0 6px 12px rgba(0,0,0,0.04)',
    transition: 'transform 0.2s ease-in-out',
  },
  iconWrapper: {
    minWidth: '50px',
    minHeight: '50px',
    borderRadius: '50%',
    backgroundColor: '#cd1643',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#000000',
    marginBottom: '-0.2rem',
  },
  description: {
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: 1.2,
  },
};

export default WhyChooseUs;
