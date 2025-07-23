// src/components/ProductActions.js
import React from 'react';

function ProductActions({ quantity, setQuantity, onAddToCart, onBuyNow }) {
  return (
    <div style={styles.actionsContainer}>
      {/* Quantity selector */}
      <div style={styles.quantityContainer}>
        <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} style={styles.qtyBtn}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          style={styles.qtyInput}
        />
        <button onClick={() => setQuantity(prev => prev + 1)} style={styles.qtyBtn}>+</button>
      </div>

      {/* Action buttons */}
      <button onClick={onAddToCart} style={styles.cartBtn}>Add to Cart</button>
      <button onClick={onBuyNow} style={styles.buyNowBtn}>Buy Now</button>
    </div>
  );
}

const styles = {
  actionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: 6,
    overflow: 'hidden',
    height: '40px',
  },
  qtyBtn: {
    padding: '0 12px',
    fontSize: '1.2rem',
    backgroundColor: '#f2f2f2',
    border: 'none',
    cursor: 'pointer',
  },
  qtyInput: {
    width: 50,
    textAlign: 'center',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
  },
  cartBtn: {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#3b5d50',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: '600',
  },
  buyNowBtn: {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#cd1643',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: '600',
  }
};

export default ProductActions;
