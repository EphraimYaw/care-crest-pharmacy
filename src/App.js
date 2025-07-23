import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import CartProvider
import { CartProvider } from './context/CartContext';

// Customer-facing components
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CatalogScreen from './screens/CatalogScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import ServicesScreen from './screens/ServicesScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CartScreen from './screens/CartScreen';
import UploadPrescriptionScreen from './screens/UploadPrescriptionScreen';

// Import your Checkout screen
import CheckoutScreen from './screens/CheckoutScreen';

function App() {
  const location = useLocation();

  // Show navbar for all customer routes
  const hideNavbar = false;

  return (
    // Wrap the entire app in CartProvider to provide cart state globally
    <CartProvider>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Customer-facing routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/catalog" element={<CatalogScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/upload-prescription" element={<UploadPrescriptionScreen />} />

        {/* Add Checkout Route */}
        <Route path="/checkout" element={<CheckoutScreen />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
