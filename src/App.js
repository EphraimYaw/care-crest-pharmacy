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
import CheckoutScreen from './screens/CheckoutScreen';

// ✅ NEW: Import the Product Detail Screen
import ProductDetailScreen from './screens/ProductDetailScreen';

function App() {
  const location = useLocation();

  // Show navbar for all customer routes
  const hideNavbar = false;

  return (
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
        <Route path="/checkout" element={<CheckoutScreen />} />

        {/* ✅ NEW Product Detail Route */}
        <Route path="/product/:id" element={<ProductDetailScreen />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
