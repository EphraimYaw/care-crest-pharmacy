import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const categories = ['All', 'Pain Relief', 'Vitamins', 'Supplements', 'Personal Care', 'Skincare'];
const brands = ['CareCrest', 'PharmaPlus', 'MediHealth', 'WellnessCo'];

const products = [
  { id: 1, name: 'Paracetamol', category: 'Pain Relief', brand: 'CareCrest', price: 15, oldPrice: 18, discountPercent: 10, rating: 4.5, image: '/assets/products/paracetamol.png' },
  { id: 2, name: 'Vitamin C', category: 'Vitamins', brand: 'PharmaPlus', price: 25, oldPrice: 30, discountPercent: 15, rating: 4, image: '/assets/products/vitaminc.png' },
  { id: 3, name: 'Multivitamin', category: 'Vitamins', brand: 'CareCrest', price: 30, oldPrice: 35, discountPercent: 14, rating: 4.2, image: '/assets/products/multivitamin.png' },
  { id: 4, name: 'Face Cream', category: 'Skincare', brand: 'WellnessCo', price: 35, oldPrice: 40, discountPercent: 12, rating: 4.8, image: '/assets/products/facecream.png' },
  { id: 5, name: 'Ibuprofen', category: 'Pain Relief', brand: 'MediHealth', price: 18, oldPrice: 22, discountPercent: 18, rating: 4.1, image: '/assets/products/ibuprofen.png' },
  { id: 6, name: 'Baby Wipes', category: 'Personal Care', brand: 'PharmaPlus', price: 12, oldPrice: 15, discountPercent: 20, rating: 4.6, image: '/assets/products/wipes.png' },
  { id: 7, name: 'Omega 3 Supplement', category: 'Supplements', brand: 'CareCrest', price: 28, oldPrice: 33, discountPercent: 15, rating: 4.3, image: '/assets/products/omega3.png' },
  // Add more if needed...
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

function CatalogScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const onCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter(p => {
    const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    return catMatch && brandMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div style={{ maxWidth: 1200, margin: '2rem auto', padding: '0 1rem', fontFamily: 'Segoe UI' }}>
        {/* Category Tabs */}
        <nav style={styles.categoryNav}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onCategoryClick(cat)}
              style={{
                ...styles.categoryTab,
                ...(cat === selectedCategory ? styles.activeCategoryTab : {})
              }}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          {/* Sidebar Filters */}
          <aside style={styles.sidebar}>
            <h3 style={styles.sidebarTitle}>Brands</h3>
            {brands.map(brand => (
              <label key={brand} style={styles.brandLabel}>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  style={{ marginRight: 8 }}
                />
                {brand}
              </label>
            ))}
          </aside>

          {/* Product Grid */}
          <main style={styles.productGrid}>
            {paginatedProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              paginatedProducts.map(product => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={styles.productCard}>
                    {product.discountPercent > 0 && (
                      <span style={styles.discountTag}>
                        {product.discountPercent}% off
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      style={styles.productImage}
                    />
                    <h4 style={styles.productName}>{product.name}</h4>
                    <p style={styles.productCategory}>{product.category}</p>
                    <StarRating rating={product.rating} />
                    <div style={styles.priceSection}>
                      <span style={styles.price}>GHS {product.price.toFixed(2)}</span>
                      <span style={styles.oldPrice}>GHS {product.oldPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </main>
        </div>

        {/* Pagination */}
        <div style={styles.pagination}>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ ...styles.pageBtn, opacity: currentPage === 1 ? 0.5 : 1 }}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => goToPage(idx + 1)}
              style={{
                ...styles.pageBtn,
                ...(currentPage === idx + 1 ? styles.activePageBtn : {})
              }}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ ...styles.pageBtn, opacity: currentPage === totalPages ? 0.5 : 1 }}
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

const styles = {
  categoryNav: {
    display: 'flex',
    justifyContent: 'center',
    gap: 30,
  },
  categoryTab: {
    background: 'none',
    border: 'none',
    padding: '0.3rem 0',
    fontSize: '1rem',
    color: '#555',
    cursor: 'pointer',
    borderBottom: 'none',
    transition: 'border-color 0.3s ease, color 0.3s ease',
  },
  activeCategoryTab: {
    color: '#cd1643',
    borderBottom: '3px solid #cd1643',
    fontWeight: '700',
  },
  sidebar: {
    flex: '0 0 220px',
    borderRight: '1px solid #eee',
    paddingRight: 20,
  },
  sidebarTitle: {
    fontWeight: 600,
    fontSize: '1.2rem',
    marginBottom: 15,
    color: '#3b5d50',
  },
  brandLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 14,
    color: '#333',
    cursor: 'pointer',
  },
  productGrid: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
  },
  productCard: {
    border: '1px solid #eee',
    borderRadius: 8,
    padding: '1rem',
    position: 'relative',
    backgroundColor: '#fff',
  },
  discountTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#3b5d50',
    color: '#fff',
    fontSize: 12,
    padding: '2px 6px',
    borderRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 150,
    objectFit: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: '1rem',
    margin: '0 0 5px',
    color: '#222',
  },
  productCategory: {
    fontSize: 12,
    color: '#777',
    marginBottom: 5,
  },
  priceSection: {
    marginTop: 8,
  },
  price: {
    fontWeight: 600,
    color: '#3b5d50',
    marginRight: 8,
  },
  oldPrice: {
    textDecoration: 'line-through',
    fontSize: 12,
    color: '#999',
  },
  pagination: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  },
  pageBtn: {
    background: 'none',
    border: '1px solid #ccc',
    padding: '0.4rem 0.8rem',
    borderRadius: 6,
    cursor: 'pointer',
    color: '#3b5d50',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
  activePageBtn: {
    backgroundColor: '#cd1643',
    color: '#fff',
    borderColor: '#cd1643',
  },
};

export default CatalogScreen;
