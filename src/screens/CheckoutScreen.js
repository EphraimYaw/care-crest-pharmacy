import React from 'react';
import { useCart } from '../context/CartContext';

function CheckoutScreen() {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} x {item.quantity} - GHS {(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: GHS {total.toFixed(2)}</h3>
          <button onClick={() => alert('Proceed to payment (not implemented)')}>
            Confirm Purchase
          </button>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default CheckoutScreen;
