import React from 'react';
import Footer from '../components/Footer';

function ContactScreen() {
  return (
    <div style={styles.page}>
      {/* Contact Header */}
      <section style={styles.headerSection}>
        <h1 style={styles.title}>Contact Us</h1>
      </section>

      <section style={styles.contactSection}>
        {/* Contact Form */}
        <div style={styles.formContainer}>
          <h3 style={styles.formTitle}>Send us a message</h3>
          <p style={styles.formSubtext}>
            Do you have a question? A complaint? Or need help choosing the right product?
            Feel free to contact us.
          </p>

          <form style={styles.form}>
            <div style={styles.row}>
              <input type="text" placeholder="First Name" style={styles.input} />
              <input type="text" placeholder="Last Name" style={styles.input} />
            </div>
            <div style={styles.row}>
              <input type="email" placeholder="Email" style={styles.input} />
              <input type="tel" placeholder="Contact Number" style={styles.input} />
            </div>
            <textarea placeholder="Enter your message" style={styles.textarea} />
            <button type="submit" style={styles.button}>Send a Message</button>
          </form>
        </div>

        {/* Contact Info Box */}
        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>Hi! We are always here to help you.</h3>
          <div style={styles.infoItem}><strong>Hotline:</strong> +233 50 123 4567</div>
          <div style={styles.infoItem}><strong>WhatsApp:</strong> +233 55 234 6789</div>
          <div style={styles.infoItem}><strong>Email:</strong> support@carecrest.com</div>
          <div style={styles.socials}>
            {/* Replace with icons if you wish */}
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>TikTok</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Aeonik, sans-serif',
    padding: '2rem',
    backgroundColor: '#fff',
    color: '#222',
  },
  headerSection: {
    textAlign: 'center',
    padding: '2rem 0',
  },
  title: {
    fontSize: '2rem',
    color: '#cd1643',
    marginBottom: '0.5rem',
  },
  contactSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '3rem',
  },
  formContainer: {
    flex: '1 1 400px',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    backgroundColor: '#fafafa',
  },
  formTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  formSubtext: {
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
    color: '#555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  row: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  input: {
    flex: 1,
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '0.95rem',
  },
  textarea: {
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '0.95rem',
    minHeight: '120px',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#cd1643',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    fontSize: '0.95rem',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  infoBox: {
    flex: '1 1 300px',
    backgroundColor: '#001f3f',
    color: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  infoTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  infoItem: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    fontSize: '0.9rem',
  },
};

export default ContactScreen;
