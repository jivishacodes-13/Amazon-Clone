// BestsellersPage.jsx - Best Sellers page
import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import { getBestSellers } from '../data/productsData';

const BestsellersPage = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const products = getBestSellers();
    setBestsellers(products);
  }, []);

  return (
    <div className="bg-amazon-lightGray min-h-screen py-4 px-2 sm:px-4">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 mb-4 p-3 sm:p-4 rounded-sm">
          <h1 className="text-xl sm:text-3xl font-bold text-amazon-text">
            ⭐ Best Sellers
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Most popular and highly-rated products
          </p>
        </div>

        {/* Info Bar */}
        <div className="bg-yellow-50 border border-yellow-200 mb-4 p-3 sm:p-4 rounded-sm">
          <p className="text-xs sm:text-sm text-yellow-800">
            💡 These products are the most bought and loved by customers on Amazon
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {bestsellers.map((product, index) => (
            <div key={product.id} className="relative">
              <ProductItem product={product} />
              {/* Bestseller Badge */}
              {index < 4 && (
                <div className="absolute top-2 right-2 bg-amazon-orange text-amazon-text px-2 py-1 rounded-sm text-xs font-bold">
                  #{index + 1}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestsellersPage;
