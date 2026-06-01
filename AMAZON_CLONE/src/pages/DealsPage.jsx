// DealsPage.jsx - Today's Deals page
import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import { getTodaysDeals } from '../data/productsData';

const DealsPage = () => {
  const [deals, setDeals] = useState([]);
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    let products = getTodaysDeals();
    
    // Sort products
    if (sortBy === 'price-low') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      products.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      products.sort((a, b) => b.rating - a.rating);
    }
    
    setDeals(products);
  }, [sortBy]);

  return (
    <div className="bg-amazon-lightGray min-h-screen py-4 px-2 sm:px-4">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 mb-4 p-3 sm:p-4 rounded-sm">
          <h1 className="text-xl sm:text-3xl font-bold text-amazon-text">
            🎉 Today's Deals
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Limited time offers on amazing products
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="bg-white border-b border-gray-200 mb-4 p-3 sm:p-4 rounded-sm flex flex-wrap gap-2 sm:gap-4 items-center">
          <span className="text-sm font-semibold text-amazon-text">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded text-xs sm:text-sm bg-white text-amazon-text focus:outline-none"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {deals.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
