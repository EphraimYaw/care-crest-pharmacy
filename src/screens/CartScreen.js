// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Link, useNavigate } from 'react-router-dom';
// import { FiTrash2 } from 'react-icons/fi'; // Import trash icon

// function CartScreen() {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const totalPrice = cartItems.reduce((acc, item) => {
//     const priceNumber = parseFloat(item.price.replace('GHS', '').trim());
//     return acc + priceNumber * item.quantity;
//   }, 0);

//   const discount = 0.1 * totalPrice;
//   const deliveryFee = 50;
//   const finalTotal = totalPrice - discount + deliveryFee;

//   return (
//     <div className="cart-page" style={styles.page}>
//       <h2 style={styles.title}>Shopping Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>
//           Your cart is empty. <Link to="/catalog">Go shopping</Link>
//         </p>
//       ) : (
//         <div style={styles.cartContainer}>
//           {/* Left - Cart Items */}
//           <div style={styles.cartItems}>
//             {cartItems.map((item) => {
//               const priceNumber = parseFloat(item.price.replace('GHS', '').trim());
//               return (
//                 <div key={item.id} style={styles.cartItem}>
//                   <img src={item.image} alt={item.name} style={styles.image} />
//                   <div style={styles.details}>
//                     <div style={styles.productName}>{item.name}</div>
//                     <div style={styles.colorText}>Set: Colour {item.color || 'N/A'}</div>
//                   </div>
//                   <div style={styles.quantity}>
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       style={styles.qtyBtn}
//                     >
//                       -
//                     </button>
//                     <span style={styles.qtyText}>{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       style={styles.qtyBtn}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div style={styles.totalPrice}>
//                     GHS {(priceNumber * item.quantity).toFixed(2)}
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     style={styles.removeBtn}
//                     aria-label={`Remove ${item.name} from cart`}
//                   >
//                     <FiTrash2 size={18} color="#cd1643" />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right - Summary */}
//           <div style={styles.summaryBox}>
//             <h3>Order Summary</h3>
//             <div style={styles.inputRow}>
//               <input type="text" placeholder="Discount voucher" style={styles.discountInput} />
//               <button style={styles.applyBtn}>Apply</button>
//             </div>
//             <div style={styles.summaryLine}>
//               <span>Sub Total</span>
//               <span>GHS {totalPrice.toFixed(2)}</span>
//             </div>
//             <div style={styles.summaryLine}>
//               <span>Discount (10%)</span>
//               <span>-GHS {discount.toFixed(2)}</span>
//             </div>
//             <div style={styles.summaryLine}>
//               <span>Delivery fee</span>
//               <span>GHS {deliveryFee.toFixed(2)}</span>
//             </div>
//             <hr />
//             <div style={{ ...styles.summaryLine, fontWeight: 'bold' }}>
//               <span>Total</span>
//               <span>GHS {finalTotal.toFixed(2)}</span>
//             </div>
//             <p style={styles.note}>🛡️ 90 Day Limited Warranty against manufacturer's defects</p>
//             <button onClick={() => navigate('/checkout')} style={styles.checkoutBtn}>
//               Checkout Now
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   page: {
//     padding: '2rem',
//     fontFamily: 'Aeonik, sans-serif',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: '2rem',
//     marginBottom: '1.5rem',
//   },
//   cartContainer: {
//     display: 'flex',
//     gap: '2rem',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   cartItems: {
//     flex: '1',
//     minWidth: '60%',
//   },
//   cartItem: {
//     display: 'flex',
//     alignItems: 'center',
//     borderBottom: '1px solid #eee',
//     padding: '1rem 0',
//     gap: '1rem',
//   },
//   image: {
//     width: '80px',
//     height: '80px',
//     objectFit: 'cover',
//     borderRadius: '10px',
//   },
//   details: {
//     flex: '1',
//   },
//   productName: {
//     fontWeight: 'bold',
//     fontSize: '1rem',
//   },
//   colorText: {
//     color: '#555',
//     fontSize: '0.9rem',
//   },
//   quantity: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//   },
//   qtyBtn: {
//     padding: '0.4rem 0.8rem',
//     border: '1px solid #ddd',
//     borderRadius: '6px',
//     backgroundColor: '#fff',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//   },
//   qtyText: {
//     minWidth: '20px',
//     textAlign: 'center',
//   },
//   totalPrice: {
//     minWidth: '100px',
//     fontWeight: 'bold',
//   },
//   removeBtn: {
//     backgroundColor: 'transparent',
//     border: 'none',
//     fontSize: '1.2rem',
//     cursor: 'pointer',
//   },
//   summaryBox: {
//     minWidth: '300px',
//     border: '1px solid #eee',
//     borderRadius: '10px',
//     padding: '1.5rem',
//     boxShadow: '0 0 10px rgba(0,0,0,0.03)',
//   },
//   inputRow: {
//     display: 'flex',
//     marginBottom: '1rem',
//     gap: '0.5rem',
//   },
//   discountInput: {
//     flex: 1,
//     padding: '0.5rem',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//   },
//   applyBtn: {
//     padding: '0.5rem 1rem',
//     border: 'none',
//     backgroundColor: '#000',
//     color: '#fff',
//     borderRadius: '6px',
//     cursor: 'pointer',
//   },
//   summaryLine: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '0.5rem 0',
//     fontSize: '0.95rem',
//   },
//   note: {
//     fontSize: '0.85rem',
//     color: '#666',
//     marginTop: '1rem',
//   },
//   checkoutBtn: {
//     marginTop: '1.2rem',
//     width: '100%',
//     padding: '0.9rem',
//     backgroundColor: '#000',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '10px',
//     fontWeight: 'bold',
//     fontSize: '1rem',
//     cursor: 'pointer',
//   },
// };

// export default CartScreen;

import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi'; // Import trash icon
import Footer from '../components/Footer';  // 👈 Import Footer

function CartScreen() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => {
    const priceNumber = parseFloat(item.price.replace('GHS', '').trim());
    return acc + priceNumber * item.quantity;
  }, 0);

  const discount = 0.1 * totalPrice;
  const deliveryFee = 50;
  const finalTotal = totalPrice - discount + deliveryFee;

  return (
    <>
      <div className="cart-page" style={styles.page}>
        <h2 style={styles.title}>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>
            Your cart is empty. <Link to="/catalog">Go shopping</Link>
          </p>
        ) : (
          <div style={styles.cartContainer}>
            {/* Left - Cart Items */}
            <div style={styles.cartItems}>
              {cartItems.map((item) => {
                const priceNumber = parseFloat(item.price.replace('GHS', '').trim());
                return (
                  <div key={item.id} style={styles.cartItem}>
                    <img src={item.image} alt={item.name} style={styles.image} />
                    <div style={styles.details}>
                      <div style={styles.productName}>{item.name}</div>
                      <div style={styles.colorText}>Set: Colour {item.color || 'N/A'}</div>
                    </div>
                    <div style={styles.quantity}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={styles.qtyBtn}
                      >
                        -
                      </button>
                      <span style={styles.qtyText}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={styles.qtyBtn}
                      >
                        +
                      </button>
                    </div>
                    <div style={styles.totalPrice}>
                      GHS {(priceNumber * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={styles.removeBtn}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <FiTrash2 size={18} color="#cd1643" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right - Summary */}
            <div style={styles.summaryBox}>
              <h3>Order Summary</h3>
              <div style={styles.inputRow}>
                <input type="text" placeholder="Discount voucher" style={styles.discountInput} />
                <button style={styles.applyBtn}>Apply</button>
              </div>
              <div style={styles.summaryLine}>
                <span>Sub Total</span>
                <span>GHS {totalPrice.toFixed(2)}</span>
              </div>
              <div style={styles.summaryLine}>
                <span>Discount (10%)</span>
                <span>-GHS {discount.toFixed(2)}</span>
              </div>
              <div style={styles.summaryLine}>
                <span>Delivery fee</span>
                <span>GHS {deliveryFee.toFixed(2)}</span>
              </div>
              <hr />
              <div style={{ ...styles.summaryLine, fontWeight: 'bold' }}>
                <span>Total</span>
                <span>GHS {finalTotal.toFixed(2)}</span>
              </div>
              <p style={styles.note}>🛡️ 90 Day Limited Warranty against manufacturer's defects</p>
              <button onClick={() => navigate('/checkout')} style={styles.checkoutBtn}>
                Checkout Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add Footer here */}
      <Footer />
    </>
  );
}

// Your styles object here (unchanged)...
const styles = {
  page: {
    padding: '2rem',
    fontFamily: 'Aeonik, sans-serif',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  cartContainer: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cartItems: {
    flex: '1',
    minWidth: '60%',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #eee',
    padding: '1rem 0',
    gap: '1rem',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  details: {
    flex: '1',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  colorText: {
    color: '#555',
    fontSize: '0.9rem',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  qtyBtn: {
    padding: '0.4rem 0.8rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  qtyText: {
    minWidth: '20px',
    textAlign: 'center',
  },
  totalPrice: {
    minWidth: '100px',
    fontWeight: 'bold',
  },
  removeBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  summaryBox: {
    minWidth: '300px',
    border: '1px solid #eee',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.03)',
  },
  inputRow: {
    display: 'flex',
    marginBottom: '1rem',
    gap: '0.5rem',
  },
  discountInput: {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  applyBtn: {
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  summaryLine: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.5rem 0',
    fontSize: '0.95rem',
  },
  note: {
    fontSize: '0.85rem',
    color: '#666',
    marginTop: '1rem',
  },
  checkoutBtn: {
    marginTop: '1.2rem',
    width: '100%',
    padding: '0.9rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default CartScreen;
