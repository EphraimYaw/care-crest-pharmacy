import React, { useState } from 'react';
import { FiPhone } from 'react-icons/fi';

function CheckoutScreen() {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('momo');
  const [saveDetails, setSaveDetails] = useState(false);
  const [momoNumber, setMomoNumber] = useState('');
  const [network, setNetwork] = useState('');

  const goToStep = (step) => setCurrentStep(step);
  const handlePaymentSelect = (method) => setPaymentMethod(method);

  const stepLabels = ['Customer Details', 'Payment Method', 'Confirmation'];

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {/* STEP INDICATORS */}
        <div style={styles.steps}>
          {stepLabels.map((label, i) => {
            const step = i + 1;
            const isActive = step === currentStep;
            const isDone = step < currentStep;

            return (
              <div key={step} style={styles.stepItem(isActive)}>
                <div
                  onClick={() => goToStep(step)}
                  style={isActive ? styles.stepCircleActive : styles.stepCircleDone}
                >
                  {isDone ? '✓' : step}
                </div>
                <span onClick={() => goToStep(step)} style={styles.stepLabel(isActive)}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* STEP 1: CUSTOMER DETAILS */}
        {currentStep === 1 && (
          <>
            <div style={{ marginBottom: 20 }}>
              <input type="text" placeholder="Full Name *" style={styles.input} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <input type="email" placeholder="Email Address *" style={styles.input} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <input type="tel" placeholder="Phone Number *" style={styles.input} />
            </div>
            <button onClick={() => goToStep(2)} style={styles.payBtn}>Continue to Payment</button>
          </>
        )}

        {/* STEP 2: PAYMENT METHOD */}
        {currentStep === 2 && (
          <>
            <div style={styles.paymentGrid}>
              {[
                { id: 'mastercard', label: 'MasterCard', img: 'https://img.icons8.com/color/96/mastercard-logo.png' },
                { id: 'visa', label: 'Visa', img: 'https://img.icons8.com/color/96/visa.png' },
                { id: 'momo', label: 'Mobile Money', icon: <FiPhone size={32} color="#cd1643" /> },
                { id: 'cash', label: 'Cash on Delivery' },
              ].map((option) => (
                <label
                  key={option.id}
                  onClick={() => handlePaymentSelect(option.id)}
                  style={{
                    ...styles.paymentOption,
                    borderColor: paymentMethod === option.id ? '#cd1643' : '#ccc',
                  }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={option.id}
                    checked={paymentMethod === option.id}
                    onChange={() => handlePaymentSelect(option.id)}
                    style={{ display: 'none' }}
                  />
                  {option.img ? (
                    <img src={option.img} alt={option.label} style={{ height: 48 }} />
                  ) : option.icon ? (
                    <>
                      {option.icon}
                      <p style={{ marginTop: 6, fontSize: '0.9rem' }}>{option.label}</p>
                    </>
                  ) : (
                    <span>{option.label}</span>
                  )}
                </label>
              ))}
            </div>

            {/* CARD DETAILS */}
            {paymentMethod !== 'cash' && paymentMethod !== 'momo' && (
              <>
                <div style={styles.inputRow}>
                  <input type="text" placeholder="Card number *" style={styles.input} />
                  <input type="text" placeholder="Cardholder *" style={styles.input} />
                </div>
                <div style={styles.inputRow}>
                  <select style={styles.select}>
                    <option>Month</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i}>{String(i + 1).padStart(2, '0')}</option>
                    ))}
                  </select>
                  <select style={styles.select}>
                    <option>Year</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i}>{2024 + i}</option>
                    ))}
                  </select>
                  <input type="text" placeholder="CVC" style={styles.input} />
                </div>
              </>
            )}

            {/* MOMO DETAILS */}
            {paymentMethod === 'momo' && (
              <>
                <div style={{ marginBottom: 16 }}>
                  <input
                    type="tel"
                    placeholder="Mobile Money Number"
                    style={styles.input}
                    value={momoNumber}
                    onChange={(e) => setMomoNumber(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <select
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    style={styles.select}
                  >
                    <option value="">Select Network</option>
                    <option value="MTN">MTN</option>
                    <option value="Vodafone">Vodafone</option>
                    <option value="AirtelTigo">AirtelTigo</option>
                  </select>
                </div>
              </>
            )}

            <div style={styles.checkboxRow}>
              <input
                type="checkbox"
                checked={saveDetails}
                onChange={() => setSaveDetails(!saveDetails)}
                style={{ marginRight: 8 }}
              />
              <label>Save my details for future purchases</label>
            </div>

            <button onClick={() => goToStep(3)} style={styles.payBtn}>Proceed to Confirmation</button>
          </>
        )}

        {/* STEP 3: CONFIRMATION */}
        {currentStep === 3 && (
          <>
            <div style={styles.summaryBox}>
              <div style={styles.summaryRow}><span>Subtotal (2 items)</span><span>GHS 145.00</span></div>
              <div style={styles.summaryRow}><span>Delivery</span><span>GHS 10.00</span></div>
              <div style={styles.summaryRowBold}><span>TOTAL</span><span>GHS 155.00</span></div>
            </div>
            <button style={styles.payBtn}>CONFIRM PAYMENT</button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: 'Aeonik, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '16px',
    maxWidth: 800,
    width: '100%',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
  },
  steps: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },
  stepItem: (isActive) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: isActive ? '#cd1643' : '#999',
    cursor: 'pointer',
  }),
  stepCircleDone: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    backgroundColor: '#cd1643',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
  },
  stepCircleActive: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    border: '2px solid #cd1643',
    color: '#cd1643',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: 14,
  },
  stepLabel: (isActive) => ({
    fontSize: 13,
    marginTop: 6,
    fontWeight: isActive ? 600 : 400,
  }),
  paymentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  paymentOption: {
    border: '2px solid #ccc',
    borderRadius: 10,
    padding: '1rem',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '#fafafa',
  },
  inputRow: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: 10,
    fontSize: '0.95rem',
    width: '100%',
  },
  select: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: 10,
    fontSize: '0.95rem',
    width: '100%',
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
    color: '#555',
  },
  summaryBox: {
    backgroundColor: '#f8f8f8',
    padding: '1rem',
    borderRadius: '10px',
    marginBottom: '1.5rem',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.95rem',
    marginBottom: 8,
  },
  summaryRowBold: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 700,
    marginTop: 10,
    fontSize: '1rem',
  },
  payBtn: {
    width: '100%',
    backgroundColor: '#cd1643',
    padding: '1rem',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default CheckoutScreen;
