import React from 'react';
import Footer from '../components/Footer';

import heroImg from '../assets/images/about-us-hero.jpg';
import img1 from '../assets/images/pharmacist-helping.jpg';
import img2 from '../assets/images/pharmacy-interior.jpg';
import img3 from '../assets/images/community-care.jpg';

function About() {
  return (
    <div style={styles.page}>
      {/* Hero Section with Background Image */}
      <section style={{ ...styles.heroSection, backgroundImage: `url(${heroImg})` }}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.title}>About Us</h1>
          <p style={styles.subtitle}>
            We’re not just a pharmacy. We’re your partner in health, healing, and hope.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={styles.content}>
        {/* Block 1 */}
        <div style={styles.block}>
          <div style={styles.text}>
            <p>
              At Care Crest Pharmacy, we believe health should never feel confusing, cold, or complicated.
              That’s why we exist — to make your wellness journey personal, affordable, and deeply human.
            </p>
            <p>
              Born out of a passion to bridge the gap between everyday people and quality healthcare,
              Care Crest is more than just a place to pick up prescriptions. We’re a trusted neighborhood
              health ally — a modern pharmacy where technology meets compassion.
            </p>
          </div>
          <div style={styles.imagePlaceholder}>
            <img src={img1} alt="Friendly pharmacist helping customer" style={styles.image} />
          </div>
        </div>

        {/* Block 2 */}
        <div style={styles.blockReverse}>
          <div style={styles.imagePlaceholder}>
            <img src={img2} alt="Pharmacy interior" style={styles.image} />
          </div>
          <div style={styles.text}>
            <p>
              Whether you’re managing a long-term condition, searching for affordable medication, or
              stocking up on the basics, we’re here to guide you with expert care and clarity — every step of the way.
            </p>
            <ul>
              <li><strong>Real Pharmacists, Real Help:</strong> Face-to-face support, real-time care.</li>
              <li><strong>Fair Prices, Transparent Choices:</strong> Insurance-friendly, no hidden costs.</li>
              <li><strong>Smart Digital Experience:</strong> Designed to feel like your favorite app.</li>
              <li><strong>Community at the Core:</strong> We’re your neighborhood wellness partner.</li>
            </ul>
          </div>
        </div>

        {/* Block 3 */}
        <div style={styles.block}>
          <div style={styles.text}>
            <h2 style={styles.heading}>Our Mission</h2>
            <p>
              To make professional, affordable, and compassionate healthcare accessible to every home —
              one prescription, one consultation, and one caring interaction at a time.
            </p>

            <h2 style={styles.heading}>Our Vision</h2>
            <p>
              A world where no one feels alone in their health journey — because they have a pharmacy that truly cares.
            </p>
          </div>
          <div style={styles.imagePlaceholder}>
            <img src={img3} alt="Community healthcare moment" style={styles.image} />
          </div>
        </div>

        {/* Final CTA */}
        <div style={styles.cta}>
          <p>Come for the meds. Stay for the care.</p>
          <strong>Let’s take care of you — together.</strong>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Aeonik, sans-serif',
    backgroundColor: '#fff',
    color: '#222',
  },
  heroSection: {
    height: '320px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#f8f8f8',
    position: 'relative',
  },
  heroOverlay: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.4rem',
    color: '#cd1643',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    maxWidth: '700px',
    color: '#555',
  },
  content: {
    padding: '3rem 1.5rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  block: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '3rem',
    alignItems: 'center',
  },
  blockReverse: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
    gap: '2rem',
    marginBottom: '3rem',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    minWidth: '280px',
    fontSize: '1rem',
    lineHeight: '1.7',
  },
  heading: {
    color: '#cd1643',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
  },
  imagePlaceholder: {
    flex: 1,
    minWidth: '280px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    objectFit: 'cover',
  },
  cta: {
    textAlign: 'center',
    fontSize: '1.1rem',
    marginTop: '3rem',
    color: '#333',
  },
};

export default About;
