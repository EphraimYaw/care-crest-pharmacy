import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const data = {
  'Pain Relief': [
    { id: 1, name: 'Paracetamol', image: '/assets/products/paracetamol.png', link: '/catalog/paracetamol' },
    { id: 2, name: 'Ibuprofen', image: '/assets/products/ibuprofen.png', link: '/catalog/ibuprofen' },
  ],
  'Skincare': [
    { id: 3, name: 'Face Cream', image: '/assets/products/facecream.png', link: '/catalog/facecream' },
    { id: 4, name: 'Sunscreen', image: '/assets/products/sunscreen.png', link: '/catalog/sunscreen' },
  ],
  'Vitamins': [
    { id: 5, name: 'Vitamin C', image: '/assets/products/vitaminc.png', link: '/catalog/vitaminc' },
    { id: 6, name: 'Multivitamin', image: '/assets/products/multivitamin.png', link: '/catalog/multivitamin' },
  ],
  'Baby Care': [
    { id: 7, name: 'Baby Wipes', image: '/assets/products/wipes.png', link: '/catalog/wipes' },
    { id: 8, name: 'Baby Lotion', image: '/assets/products/lotion.png', link: '/catalog/lotion' },
  ],
  'Mental Focus': [
    { id: 9, name: 'Focus+ Capsules', image: '/assets/products/focus.png', link: '/catalog/focus' },
  ],
  'Digestion': [
    { id: 10, name: 'Probiotic', image: '/assets/products/probiotic.png', link: '/catalog/probiotic' },
  ]
};

const categories = Object.keys(data);

function BrowseByConcern() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>What Are You Looking For Today?</h2>

      <div style={styles.tabsWrapper}>
        <div style={styles.tabsInner}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                ...styles.tab,
                ...(activeCategory === category ? styles.activeTab : {})
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.carouselWrapper}>
        <div style={styles.carousel}>
          {data[activeCategory].map((product) => (
            <Link to={product.link} key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.image} />
              <p style={styles.productName}>{product.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '2.5rem 2rem',
    // backgroundColor: '#f8f8f8',
    fontFamily: 'Aeonik, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    fontWeight: 600,
    color: '#000',
  },
  tabsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
    overflowX: 'auto',
  },
  tabsInner: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1000px',
  },
  tab: {
    backgroundColor: 'transparent',
    fontWeight: 500,
    fontSize: '0.95rem',
    color: '#555',
    cursor: 'pointer',
    padding: '0.4rem 1rem',
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s ease',
  },
  activeTab: {
    color: '#cd1643',
    fontWeight: 600,
    borderBottom: '2px solid #cd1643',
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    gap: '1.2rem',
    paddingBottom: '0.5rem',
    maxWidth: '1000px',
  },
  card: {
    minWidth: '140px',
    maxWidth: '160px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    textDecoration: 'none',
    color: '#000000',
    flex: '0 0 auto',
    transition: 'transform 0.2s',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    marginBottom: '0.5rem',
  },
  productName: {
    fontSize: '0.9rem',
    fontWeight: 500,
  },
};

export default BrowseByConcern;
