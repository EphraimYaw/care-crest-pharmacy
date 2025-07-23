import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add product or increase quantity if already in cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(item => item.id === product.id);
      if (existingIndex !== -1) {
        // Product exists, increase quantity
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      // New product, set quantity = 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove product by id
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  };

  // Update quantity of product (remove if quantity <= 0)
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) => {
      return prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
