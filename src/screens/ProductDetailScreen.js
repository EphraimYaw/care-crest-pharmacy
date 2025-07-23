import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext'; // ✅ Import cart context

const products = [
  { id: 1, name: 'Paracetamol', category: 'Pain Relief', brand: 'CareCrest', price: 15, oldPrice: 18, discountPercent: 10, rating: 4.5, image: '/assets/products/paracetamol.png', description: 'Effective for mild to moderate pain and fever relief.' },
  { id: 2, name: 'Ibuprofen', category: 'Pain Relief', brand: 'MediHealth', price: 18, oldPrice: 22, discountPercent: 18, rating: 4.1, image: '/assets/products/ibuprofen.png', description: 'Anti-inflammatory painkiller for body aches and swelling.' },
  { id: 3, name: 'Aspirin', category: 'Pain Relief', brand: 'PharmaPlus', price: 17, oldPrice: 20, discountPercent: 15, rating: 4.0, image: '/assets/products/aspirin.png', description: 'Reduces fever and treats inflammation or headaches.' },
  { id: 4, name: 'Diclofenac Gel', category: 'Pain Relief', brand: 'WellnessCo', price: 20, oldPrice: 25, discountPercent: 20, rating: 4.3, image: '/assets/products/diclofenac.png', description: 'Topical relief for joint and muscle pain.' },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[...Array(fullStars)].map((_, i) => <FaStar key={i} color="#f5a623" size={14} />)}
      {halfStar && <FaStar color="#f5a623" size={14} />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => <FaStar key={i} color="#ccc" size={14} />)}
    </div>
  );
};

function ProductDetailScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // ✅ Use addToCart

  const product = products.find(p => p.id === parseInt(id));
  const similarProducts = products.filter(p => p.category === product?.category && p.id !== product.id).slice(0, 4);

  const handleQuantity = (type) => {
    setQuantity(prev => type === 'increase' ? prev + 1 : Math.max(prev - 1, 1));
  };

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', fontFamily: 'Poppins' }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate('/catalog')} style={styles.backButton}>Back to Catalog</button>
      </div>
    );
  }

  return (
    <>
      <div style={styles.container}>
        <div style={styles.imageSection}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>

        <div style={styles.detailsSection}>
          <h2 style={styles.name}>{product.name}</h2>
          <p style={styles.category}>{product.category} • {product.brand}</p>
          <StarRating rating={product.rating} />
          <p style={styles.price}>
            GHS {product.price.toFixed(2)}
            <span style={styles.oldPrice}>GHS {product.oldPrice.toFixed(2)}</span>
          </p>
          <p style={styles.description}>{product.description}</p>

          <div style={styles.quantityBox}>
            <button onClick={() => handleQuantity('decrease')} style={styles.qtyBtn}>-</button>
            <span style={styles.qtyText}>{quantity}</span>
            <button onClick={() => handleQuantity('increase')} style={styles.qtyBtn}>+</button>
          </div>

          <div style={styles.btnRow}>
            <button
              style={styles.addToCartBtn}
              onClick={() => {
                addToCart({ ...product, quantity }); // ✅ Add to cart
                alert(`Added ${quantity} ${product.name}(s) to cart`);
              }}
            >
              Add to Cart
            </button>
            <button
              style={styles.buyNowBtn}
              onClick={() => navigate('/checkout')}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <div style={styles.similarContainer}>
          <h3 style={styles.similarTitle}>Explore Similar Products</h3>
          <div style={styles.similarScroll}>
            {similarProducts.map(p => (
              <div
                key={p.id}
                style={styles.similarCard}
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <img src={p.image} alt={p.name} style={styles.similarImage} />
                <h4 style={styles.similarName}>{p.name}</h4>
                <p style={styles.similarPrice}>GHS {p.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

const styles = {
  container: {
    maxWidth: 1100,
    margin: '2rem auto',
    padding: '0 1rem',
    display: 'flex',
    gap: '1.5rem',
    fontFamily: 'Poppins, sans-serif',
    flexWrap: 'wrap',
  },
  imageSection: { flex: 1, textAlign: 'center' },
  image: { width: '100%', maxWidth: 320, objectFit: 'contain' },
  detailsSection: { flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' },
  name: { fontSize: '1.5rem', fontWeight: 600, color: '#3b5d50' },
  category: { fontSize: 13, color: '#777' },
  price: { fontSize: '1.2rem', color: '#cd1643', fontWeight: 600 },
  oldPrice: { textDecoration: 'line-through', fontSize: '0.9rem', color: '#999', marginLeft: 8 },
  description: { color: '#444', fontSize: 14, lineHeight: 1.5 },
  quantityBox: { display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 },
  qtyBtn: { padding: '4px 10px', fontSize: '1rem', border: '1px solid #ccc', backgroundColor: '#fff', borderRadius: 4, cursor: 'pointer' },
  qtyText: { fontWeight: 600, fontSize: '1rem', minWidth: 24, textAlign: 'center' },
  btnRow: { display: 'flex', gap: '1rem', marginTop: 12, flexWrap: 'wrap' },
  addToCartBtn: { padding: '0.6rem 1.4rem', backgroundColor: '#3b5d50', color: '#fff', fontWeight: 600, border: 'none', borderRadius: 8, cursor: 'pointer', flex: 1, minWidth: 130 },
  buyNowBtn: { padding: '0.6rem 1.4rem', backgroundColor: '#cd1643', color: '#fff', fontWeight: 600, border: 'none', borderRadius: 8, cursor: 'pointer', flex: 1, minWidth: 130 },
  backButton: { marginTop: '2rem', background: 'none', border: '1px solid #ccc', padding: '0.5rem 1rem', borderRadius: 6, color: '#3b5d50', cursor: 'pointer' },

  similarContainer: { maxWidth: 1100, margin: '3rem auto', padding: '0 1rem', fontFamily: 'Poppins' },
  similarTitle: { textAlign: 'center', fontSize: '1.3rem', fontWeight: 500, marginBottom: 16, color: '#3b5d50' },
  similarScroll: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 20 },
  similarCard: { width: 160, border: '1px solid #eee', borderRadius: 10, padding: 12, cursor: 'pointer', backgroundColor: '#fff', textAlign: 'center', transition: 'transform 0.2s ease' },
  similarImage: { width: '100%', height: 100, objectFit: 'contain', marginBottom: 6 },
  similarName: { fontSize: 13, color: '#333', marginBottom: 4 },
  similarPrice: { fontSize: 13, color: '#cd1643', fontWeight: 600 },
};

export default ProductDetailScreen;
