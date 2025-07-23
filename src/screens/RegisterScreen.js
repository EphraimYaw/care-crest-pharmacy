import React, { useState } from 'react';
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleRegister = async () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password || !fullName) {
      alert('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, trimmedEmail, password);
      console.log('User registered successfully!');
      navigate('/'); // redirect after successful signup
    } catch (error) {
      console.error('Registration error:', error.code);
      if (error.code === 'auth/email-already-in-use') {
        alert('This email is already registered.');
      } else {
        alert(error.message);
      }
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Join Care Crest Pharmacy today</p>

        <div style={styles.inputWrapper}>
          <FiUser style={styles.icon} />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputWrapper}>
          <FiMail style={styles.icon} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputWrapper}>
          <FiLock style={styles.icon} />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ ...styles.input, paddingRight: '2.5rem' }}
          />
          <span onClick={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <button style={styles.loginBtn} onClick={handleRegister}>
          Sign Up
        </button>

        <div style={styles.divider}>
          <span style={styles.line}></span>
          <span style={styles.or}>or</span>
          <span style={styles.line}></span>
        </div>

        <button style={styles.socialBtn} onClick={handleGoogleSignUp}>
          <FcGoogle size={20} style={{ marginRight: 10 }} />
          Sign Up with Google
        </button>

        <button style={{ ...styles.socialBtn, backgroundColor: '#000', color: '#fff' }}>
          <FaApple size={20} style={{ marginRight: 10 }} />
          Sign Up with Apple
        </button>

        <p style={styles.register}>
          Already have an account?{' '}
          <Link to="/login" style={styles.registerLink}>
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: 'Aeonik, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '2.5rem',
    boxShadow: '0 12px 24px rgba(0,0,0,0.05)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#000',
  },
  subtitle: {
    color: '#666',
    fontSize: '0.95rem',
    marginBottom: '2rem',
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: '1.2rem',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '12px',
    transform: 'translateY(-50%)',
    color: '#888',
  },
  eyeIcon: {
    position: 'absolute',
    top: '50%',
    right: '12px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: '#888',
    fontSize: '1.1rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 2.2rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box',
  },
  loginBtn: {
    backgroundColor: '#cd1643',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '0.75rem',
    fontSize: '1rem',
    fontWeight: 500,
    width: '100%',
    cursor: 'pointer',
    marginBottom: '1.5rem',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  line: {
    flex: 1,
    height: '1px',
    backgroundColor: '#ddd',
  },
  or: {
    margin: '0 1rem',
    color: '#888',
    fontSize: '0.85rem',
  },
  socialBtn: {
    border: 'none',
    borderRadius: '10px',
    padding: '0.75rem',
    fontSize: '0.95rem',
    width: '100%',
    cursor: 'pointer',
    marginBottom: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    color: '#000',
  },
  register: {
    fontSize: '0.85rem',
    color: '#555',
    marginTop: '2rem',
  },
  registerLink: {
    color: '#cd1643',
    textDecoration: 'none',
    fontWeight: 500,
  },
};

export default RegisterScreen;
