import React, { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful!');
      navigate('/'); // redirect to homepage or dashboard
    } catch (error) {
      console.error('Login error:', error.message);
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error('Google login error:', error.message);
      alert(error.message);
    }
  };

  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Log in to your Care Crest account</p>

        {/* Email Field */}
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

        {/* Password Field */}
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
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        {/* Forgot Password */}
        <div style={styles.forgotPassword}>
          <Link to="/forgot-password" style={styles.forgotLink}>
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button style={styles.loginBtn} onClick={handleLogin}>
          Log In
        </button>

        {/* OR divider */}
        <div style={styles.divider}>
          <span style={styles.line}></span>
          <span style={styles.or}>or</span>
          <span style={styles.line}></span>
        </div>

        {/* Social Buttons */}
        <button style={styles.socialBtn} onClick={handleGoogleLogin}>
          <FcGoogle size={20} style={{ marginRight: 10 }} />
          Continue with Google
        </button>

        <button style={{ ...styles.socialBtn, backgroundColor: '#000', color: '#fff' }}>
          <FaApple size={20} style={{ marginRight: 10 }} />
          Continue with Apple
        </button>

        {/* Register Prompt */}
        <p style={styles.register}>
          Don’t have an account?{' '}
          <Link to="/register" style={styles.registerLink}>
            Sign Up
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
  forgotPassword: {
    textAlign: 'right',
    marginBottom: '1.5rem',
  },
  forgotLink: {
    fontSize: '0.85rem',
    color: '#cd1643',
    textDecoration: 'none',
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

export default LoginScreen;
