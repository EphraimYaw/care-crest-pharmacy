import React from 'react';
import { FiTruck, FiPhoneCall, FiShield } from 'react-icons/fi';

function ServicesScreen() {
  const services = [
    {
      icon: <FiTruck size={24} color="#cd1643" />,
      title: 'Home Delivery',
      description: 'Fast, same-day delivery for all prescriptions and health essentials.',
    },
    {
      icon: <FiPhoneCall size={24} color="#cd1643" />,
      title: 'Pharmacist Consultation',
      description: 'Speak with licensed pharmacists for help with prescriptions and advice.',
    },
    {
      icon: <FiShield size={24} color="#cd1643" />,
      title: 'Data Privacy',
      description: 'Your health information and orders are handled with complete confidentiality.',
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.hero}>
        <h1 style={styles.heroHeading}>Our Services</h1>
        <p style={styles.heroText}>
          Trusted care beyond just selling medications — here's how we support your wellness.
        </p>
      </div>

      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.iconWrapper}>{service.icon}</div>
            <h3 style={styles.title}>{service.title}</h3>
            <p style={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem',
    fontFamily: 'Aeonik, sans-serif',
    backgroundColor: '#fff',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  heroHeading: {
    fontSize: '2.2rem',
    fontWeight: 700,
    color: '#000',
    marginBottom: '0.5rem',
  },
  heroText: {
    fontSize: '1rem',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
    textAlign: 'center',
  },
  iconWrapper: {
    backgroundColor: '#ffe4ea',
    width: '48px',
    height: '48px',
    margin: '0 auto 1rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#000',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: 1.5,
  },
};

export default ServicesScreen;
