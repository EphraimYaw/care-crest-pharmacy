import React, { useState } from 'react';
import { db } from '../firebase'; // adjust if your path is different
import { collection, addDoc } from 'firebase/firestore';

function AddProductScreen() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productsRef = collection(db, 'products');
      await addDoc(productsRef, {
        ...product,
        price: parseFloat(product.price),
        stock: parseInt(product.stock),
        createdAt: new Date(),
      });

      alert('Product added successfully!');
      setProduct({
        name: '',
        price: '',
        category: '',
        stock: '',
        description: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Product</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="price"
          placeholder="Price (GHS)"
          value={product.price}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Pain Relief)"
          value={product.category}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={product.stock}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
          rows={4}
          style={{ ...styles.input, resize: 'vertical' }}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Saving...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 12px 24px rgba(0,0,0,0.05)',
    fontFamily: 'Aeonik, sans-serif',
  },
  heading: {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: '#cd1643',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem 1rem',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    padding: '0.8rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#cd1643',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default AddProductScreen;
