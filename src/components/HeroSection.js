import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/Image_fx.jpg'; // Update if needed

function HeroSection() {
  return (
    <section style={{ ...styles.hero, backgroundImage: `url(${heroBg})` }}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.heading}>The New Standard in Pharmacy Care.</h1>
          <p style={styles.subText}>
            Shop genuine medications and health essentials delivered to your doorstep.
          </p>
          <div style={styles.buttons}>
            <Link to="/catalog" style={styles.primaryBtn}>Shop Now</Link>
            <Link to="/upload-prescription" style={styles.secondaryBtn}>Upload Your Prescription</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    fontFamily: 'Aeonik, sans-serif',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 5%',
  },
  content: {
    color: '#fff',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '1rem',
    lineHeight: '1.2',
  },
  subText: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    lineHeight: '1.7',
    opacity: 0.9,
    maxWidth: '500px',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: '#cd1643',
    color: '#fff',
    padding: '1rem 1.8rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.95rem',
  },
  secondaryBtn: {
    backgroundColor: '#fff',
    color: '#000000ff',
    border: '1.5px solid #fff',
    padding: '1rem 1.8rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.95rem',
  },
};

export default HeroSection;
