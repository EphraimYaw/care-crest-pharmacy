import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useCart } from '../context/CartContext'; // ✅ import cart hook

const products = [
  { id: 1, name: 'Vitamin C Boost', image: '/assets/products/vitaminc.png', description: 'Immune support for your daily health.', price: 'GHS 25.00', badge: 'Best Seller' },
  { id: 2, name: 'Pain Relief Gel', image: '/assets/products/painrelief.png', description: 'Fast-acting relief for pain.', price: 'GHS 18.00', badge: 'Trending' },
  { id: 3, name: 'Multivitamin Daily', image: '/assets/products/multivitamin.png', description: 'Daily nutritional boost.', price: 'GHS 30.00' },
  { id: 4, name: 'Baby Lotion', image: '/assets/products/babylotion.png', description: 'Gentle care for baby skin.', price: 'GHS 22.00' },
  { id: 5, name: 'Probiotic Care', image: '/assets/products/probiotic.png', description: 'Supports digestion & gut health.', price: 'GHS 27.00', badge: 'Customer Favorite' },
  { id: 6, name: 'Focus+ Capsules', image: '/assets/products/focus.png', description: 'Improves mental clarity.', price: 'GHS 35.00' },
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

function FeaturedProducts() {
  const itemsPerPage = 3;
  const [pageIndex, setPageIndex] = useState(0);
  const chunks = chunkArray(products, itemsPerPage);
  const totalPages = chunks.length;

  const { addToCart } = useCart(); // ✅ access addToCart from context

  useEffect(() => {
    const interval = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const goToPage = (index) => setPageIndex(index);

  const handleScroll = (dir) => {
    if (dir === 'left') {
      setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
    } else {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }
  };

  const handleBuyNow = (product) => {
    addToCart(product); // ✅ this updates the cart icon
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Popular Picks</h2>
      <p style={styles.subtitle}>Trusted by thousands for everyday health needs.</p>

      <div style={styles.carouselContainer}>
        <button onClick={() => handleScroll('left')} style={styles.arrowButton} aria-label="Previous products">
          <FiChevronLeft size={20} color="#333" />
        </button>

        <div style={styles.scrollWrapper}>
          {chunks[pageIndex].map((product) => (
            <div key={product.id} style={styles.card}>
              {product.badge && <div style={styles.badge}>{product.badge}</div>}
              <img src={product.image} alt={product.name} style={styles.image} />
              <h3 style={styles.name}>{product.name}</h3>
              <p style={styles.description}>{product.description}</p>
              <p style={styles.price}>{product.price}</p>
              <button style={styles.button} onClick={() => handleBuyNow(product)}>Buy Now</button>
            </div>
          ))}
        </div>

        <button onClick={() => handleScroll('right')} style={styles.arrowButton} aria-label="Next products">
          <FiChevronRight size={20} color="#333" />
        </button>
      </div>

      <div style={styles.dots}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            onClick={() => goToPage(i)}
            style={{
              ...styles.dot,
              ...(i === pageIndex ? styles.activeDot : {}),
            }}
            role="button"
            tabIndex={0}
            aria-label={`Go to page ${i + 1}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') goToPage(i);
            }}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem 2rem 3rem',
    backgroundColor: '#fff',
    fontFamily: 'Aeonik, sans-serif',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '0.2rem',
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: '1.5rem',
    fontSize: '0.95rem',
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    gap: '1rem',
  },
  arrowButton: {
    backgroundColor: '#f1f1f1',
    border: 'none',
    padding: '0.5rem',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  scrollWrapper: {
    display: 'flex',
    gap: '1.2rem',
    overflow: 'hidden',
  },
  card: {
    minWidth: '180px',
    maxWidth: '200px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
    position: 'relative',
    transition: 'transform 0.2s ease',
  },
  badge: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#cd1643',
    color: '#fff',
    fontSize: '0.7rem',
    padding: '0.2rem 0.5rem',
    borderRadius: '16px',
  },
  image: {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
    marginBottom: '0.8rem',
  },
  name: {
    fontSize: '0.95rem',
    fontWeight: 600,
    marginBottom: '0.3rem',
    color: '#000',
  },
  description: {
    fontSize: '0.8rem',
    color: '#555',
    marginBottom: '0.5rem',
  },
  price: {
    fontWeight: 600,
    fontSize: '0.9rem',
    color: '#cd1643',
    marginBottom: '0.6rem',
  },
  button: {
    backgroundColor: '#cd1643',
    color: '#fff',
    border: 'none',
    padding: '0.4rem 0.8rem',
    borderRadius: '8px',
    fontSize: '0.8rem',
    cursor: 'pointer',
  },
  dots: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#ddd',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  activeDot: {
    backgroundColor: '#cd1643',
  },
};

export default FeaturedProducts;
