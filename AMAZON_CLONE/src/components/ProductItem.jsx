// ProductItem.jsx - Reusable product card component with enhanced styling
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group">
      {/* Product Image Container - Fixed height 220px with contained images */}
      <Link to={`/product/${product.id}`} className="block flex-shrink-0">
        <div className="w-full h-56 bg-white flex items-center justify-center overflow-hidden relative border-b border-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-auto h-auto max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561182?w=400&h=400&fit=crop';
            }}
          />
          {/* Discount badge */}
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            Save ₹100
          </div>
        </div>
      </Link>

      {/* Product Details */}
      <div className="px-3 py-2 flex-grow flex flex-col">
        {/* Title - Fixed lines */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs sm:text-sm font-semibold text-amazon-text line-clamp-2 hover:text-amazon-orange transition duration-200 mb-1 leading-tight">
            {product.title}
          </h3>
        </Link>

        {/* Rating Section - Compact */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            <span className="text-yellow-500 text-xs">★</span>
            <span className="font-bold text-amazon-text text-xs ml-0.5">{product.rating}</span>
          </div>
          <span className="text-gray-600 text-xs">({(product.reviews / 1000 > 1 ? (product.reviews / 1000).toFixed(1) + 'k' : product.reviews).toString()})</span>
        </div>

        {/* Price Section - Clean layout */}
        <div className="mb-2 flex items-baseline gap-1.5">
          <p className="text-base sm:text-lg font-bold text-amazon-text">
            ₹{product.price.toLocaleString()}
          </p>
          <span className="text-xs text-gray-500 line-through">
            ₹{(product.price + 299).toLocaleString()}
          </span>
        </div>

        {/* Free Delivery Badge */}
        <div className="text-xs text-green-700 font-semibold mb-2 flex items-center gap-1">
          <span>✓</span>
          <span>Free Delivery</span>
        </div>

        {/* Add to Cart Button - Improved */}
        <button
          onClick={handleAddToCart}
          className={`w-full font-semibold py-1.5 rounded-md transition-all duration-200 text-xs sm:text-sm mt-auto flex items-center justify-center gap-1 border-0 ${
            isAdding
              ? 'bg-green-500 text-white'
              : 'bg-amazon-orange text-amazon-text hover:bg-yellow-400 active:scale-95'
          }`}
        >
          {isAdding ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
