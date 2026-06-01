// SearchPage.jsx - Search results page
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import { searchProducts } from '../data/productsData';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    if (searchQuery.trim()) {
      const products = searchProducts(searchQuery);
      setResults(products);
    }
  }, [searchQuery]);

  return (
    <div className="bg-amazon-lightGray min-h-screen py-4 px-2 sm:px-4">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-lg sm:text-2xl font-bold text-amazon-text">
            Search Results for "{searchQuery}"
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            {results.length} products found
          </p>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {results.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No products found for "{searchQuery}"
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
