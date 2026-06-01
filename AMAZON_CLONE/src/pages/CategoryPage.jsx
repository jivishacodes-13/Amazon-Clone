// CategoryPage.jsx - Category products page
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import { getProductsByCategory } from '../data/productsData';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryName) {
      const categoryProducts = getProductsByCategory(categoryName);
      setProducts(categoryProducts);
    }
  }, [categoryName]);

  return (
    <div className="bg-amazon-lightGray min-h-screen py-4 px-2 sm:px-4">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 mb-4 p-3 sm:p-4 rounded-sm">
          <h1 className="text-lg sm:text-2xl font-bold text-amazon-text">
            {categoryName}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            {products.length} products available
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="bg-white border-b border-gray-200 mb-4 p-3 sm:p-4 rounded-sm flex flex-wrap gap-2 sm:gap-4">
          <button className="px-3 py-1 bg-amazon-orange text-amazon-text rounded-sm text-xs sm:text-sm font-semibold hover:bg-yellow-400 transition">
            Price: Low to High
          </button>
          <button className="px-3 py-1 border border-gray-300 text-amazon-text rounded-sm text-xs sm:text-sm hover:border-gray-400 transition">
            Price: High to Low
          </button>
          <button className="px-3 py-1 border border-gray-300 text-amazon-text rounded-sm text-xs sm:text-sm hover:border-gray-400 transition">
            Top Rated
          </button>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-sm">
            <p className="text-lg text-gray-600">
              No products in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
