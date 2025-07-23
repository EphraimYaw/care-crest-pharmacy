import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiUser } from 'react-icons/fi';
import logoImg from '../assets/images/carecrestlogo.png';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useCart } from '../context/CartContext';

function Navbar() {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { user } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/catalog?query=${encodeURIComponent(query)}`);
      setQuery('');
      if (isMobile) setMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  const renderCartIcon = () => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return (
      <Link to="/cart" style={{ ...styles.link, ...styles.cartLink, position: 'relative' }}>
        <FiShoppingCart size={22} />
        {totalItems > 0 && (
          <span style={styles.cartCount}>{totalItems}</span>
        )}
      </Link>
    );
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logoArea}>
        <Link to="/" style={styles.logoLink}>
          <img src={logoImg} alt="Care Crest Logo" style={styles.logoIcon} />
        </Link>
      </div>

      {isMobile && (
        <div style={styles.mobileIconRow}>
          <div
            style={styles.menuIcon}
            onClick={() => setMenuOpen(!menuOpen)}
            role="button"
            tabIndex={0}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>

          {renderCartIcon()}

          {user ? (
            <>
              <span style={styles.userNameMobile}>{user.email?.split('@')[0]}</span>
              <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
            </>
          ) : (
            <Link to="/login" style={{ ...styles.link, ...styles.cartLink }}>
              <FiUser size={22} />
            </Link>
          )}
        </div>
      )}

      <div style={isMobile ? styles.searchWrapperMobile : styles.searchWrapper}>
        <form onSubmit={handleSearch} style={styles.searchForm}>
          <input
            type="text"
            placeholder="Search drugs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.searchInput}
          />
          <FiSearch style={styles.searchIcon} />
        </form>
      </div>

      <ul
        style={{
          ...styles.navGroup,
          ...(isMobile
            ? menuOpen
              ? styles.navGroupMobileOpen
              : styles.navGroupMobileClosed
            : {}),
        }}
      >
        {[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Shop', path: '/catalog' },
          { label: 'Services', path: '/services' },
          { label: 'Contact', path: '/contact' },
        ].map(({ label, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.activeLink } : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {!isMobile && (
        <ul style={styles.authLinks}>
          <li>{renderCartIcon()}</li>
          {user ? (
            <>
              <li style={styles.userName}>{user.email?.split('@')[0]}</li>
              <li><button onClick={handleLogout} style={styles.logoutBtn}>Logout</button></li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                style={({ isActive }) =>
                  isActive ? { ...styles.link, ...styles.activeLink } : styles.link
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    fontFamily: 'Aeonik, sans-serif',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid #eee',
  },
  logoArea: { flex: '0 0 auto' },
  logoLink: { display: 'flex', alignItems: 'center', textDecoration: 'none' },
  logoIcon: { height: 60, width: 'auto', objectFit: 'contain' },
  mobileIconRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginLeft: 'auto',
  },
  menuIcon: { cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0.3rem' },
  searchWrapper: { flex: '0 0 300px', marginLeft: '0.5rem', minWidth: 200 },
  searchWrapperMobile: { flex: '1 1 100%', marginTop: '0.5rem', marginBottom: '0.5rem' },
  searchForm: { position: 'relative', width: '100%' },
  searchInput: { width: '100%', padding: '0.5rem', borderRadius: 25, border: '1px solid #ccc', fontSize: '0.9rem', outline: 'none' },
  searchIcon: { position: 'absolute', top: '50%', right: 15, transform: 'translateY(-50%)', color: '#888', pointerEvents: 'none' },
  navGroup: { display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0, alignItems: 'center' },
  navGroupMobileOpen: { flexDirection: 'column', position: 'absolute', top: '140px', left: 0, right: 0, backgroundColor: '#fff', padding: '1rem 2rem', borderTop: '1px solid #eee', zIndex: 999 },
  navGroupMobileClosed: { display: 'none' },
  authLinks: { display: 'flex', alignItems: 'center', listStyle: 'none', gap: '1rem', margin: 0, padding: 0 },
  cartLink: { display: 'flex', alignItems: 'center' },
  cartCount: {
    position: 'absolute',
    top: '-6px',
    right: '-6px',
    backgroundColor: '#cd1643',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  link: { color: '#000000', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s ease' },
  activeLink: { color: '#cd1643', fontWeight: 'bold', borderBottom: '2px solid #cd1643', paddingBottom: 2 },
  userNameMobile: { fontWeight: 'bold', fontSize: '0.95rem', color: '#444', display: 'flex', alignItems: 'center' },
  userName: { fontWeight: 'bold', fontSize: '0.95rem', color: '#444' },
  logoutBtn: { background: 'transparent', border: 'none', color: '#cd1643', cursor: 'pointer', fontWeight: 500, fontSize: '0.95rem', marginLeft: '0.5rem' },
};

export default Navbar;
