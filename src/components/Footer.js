import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logoImg from '../assets/images/carecrestlogo.png'; // Check your path

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Column 1: Logo + Tagline */}
        <div style={styles.col}>
          <img src={logoImg} alt="Care Crest Logo" style={styles.logo} />
          <p style={styles.tagline}>
            Your trusted digital pharmacy. Fast delivery, genuine medications, expert care.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div style={styles.col}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/catalog" style={styles.link}>Shop</Link></li>
            <li><Link to="/about" style={styles.link}>About Us</Link></li>
            <li><Link to="/services" style={styles.link}>Services</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div style={styles.col}>
          <h4 style={styles.heading}>Customer Service</h4>
          <ul style={styles.list}>
            <li><Link to="/faq" style={styles.link}>FAQs</Link></li>
            <li><Link to="/shipping" style={styles.link}>Shipping</Link></li>
            <li><Link to="/returns" style={styles.link}>Returns</Link></li>
            <li><Link to="/privacy" style={styles.link}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info + Socials */}
        <div style={styles.col}>
          <h4 style={styles.heading}>Contact</h4>
          <p style={styles.contact}>📍 Accra, Ghana</p>
          <p style={styles.contact}>📞 +233 20 123 4567</p>
          <p style={styles.contact}>📧 support@carecrestpharmacy.com</p>

          {/* Social Icons */}
          <div style={styles.socials}>
            <a href="https://wa.me/233201234567" target="_blank" rel="noreferrer" style={styles.socialIcon}><FaWhatsapp size={18} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.socialIcon}><FiFacebook size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialIcon}><FiInstagram size={18} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.socialIcon}><FiTwitter size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p style={styles.copy}>&copy; {new Date().getFullYear()} Care Crest Pharmacy. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#cd1643',
    color: '#ffffff',
    fontFamily: 'Aeonik, sans-serif',
    paddingTop: '3rem',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '2rem',
    padding: '0 2rem 2.5rem',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    width: '110px',
    marginBottom: '1rem',
  },
  tagline: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    opacity: 0.9,
  },
  heading: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.95rem',
    opacity: 0.9,
  },
  contact: {
    fontSize: '0.95rem',
    marginBottom: '0.5rem',
    opacity: 0.9,
  },
  socials: {
    display: 'flex',
    gap: '0.6rem',
    marginTop: '1rem',
  },
  socialIcon: {
    backgroundColor: '#ffffff',
    color: '#000000ff',
    borderRadius: '50%',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255,255,255,0.2)',
    textAlign: 'center',
    padding: '1rem 2rem',
    marginTop: '1rem',
  },
  copy: {
    fontSize: '0.85rem',
    opacity: 0.8,
  },
};

export default Footer;
