import React, { useState } from 'react';

function UploadPrescriptionScreen() {
  const [file, setFile] = useState(null);
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log('File uploaded:', file);
      console.log('Note:', note);
      setSubmitted(true);
    } else {
      alert('Please select a file.');
    }
  };

  return (
    <section style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Upload Your Prescription</h2>
        <p style={styles.subtext}>Accepted formats: JPG, PNG, PDF</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            style={styles.input}
          />

          <textarea
            placeholder="Any additional notes?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Prescription
          </button>
        </form>

        {submitted && (
          <p style={styles.success}>✅ Prescription submitted successfully!</p>
        )}
      </div>
    </section>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    padding: '2rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Aeonik, sans-serif',
  },
  box: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
    width: '100%',
    maxWidth: '480px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.6rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#000',
  },
  subtext: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '0.9rem',
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    minHeight: '100px',
    resize: 'vertical',
    fontSize: '0.9rem',
  },
  button: {
    padding: '0.8rem',
    backgroundColor: '#cd1643',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
  },
  success: {
    marginTop: '1rem',
    color: '#28a745',
    fontWeight: 500,
  },
};

export default UploadPrescriptionScreen;
