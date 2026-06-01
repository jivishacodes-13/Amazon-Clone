// App.jsx - Main application with React Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import DealsPage from './pages/DealsPage';
import BestsellersPage from './pages/BestsellersPage';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-amazon-lightGray flex flex-col">
          {/* Navbar - Sticky */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/deals" element={<DealsPage />} />
              <Route path="/bestsellers" element={<BestsellersPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
