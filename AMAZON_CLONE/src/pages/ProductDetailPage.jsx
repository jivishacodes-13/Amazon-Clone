// ProductDetailPage.jsx - Detailed product view
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/productsData';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const prod = getProductById(parseInt(productId));
    setProduct(prod);
  }, [productId]);

  if (!product) {
    return (
      <div className="bg-amazon-lightGray min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="bg-amazon-lightGray min-h-screen py-4 px-2 sm:px-4">
      <div className="max-w-full mx-auto">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-gray-600 mb-4">
          <Link to="/" className="hover:text-amazon-orange">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category}`} className="hover:text-amazon-orange">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span>{product.title}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Product Image */}
          <div className="bg-white rounded-sm p-4">
            <div className="w-full bg-white rounded-sm flex items-center justify-center mb-4 border border-gray-200" style={{ height: '400px' }}>
              <img
                src={product.image}
                alt={product.title}
                className="w-auto h-auto max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561182?w=400&h=400&fit=crop';
                }}
              />
            </div>
            {/* Product Images Thumbnail */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-sm p-2 cursor-pointer hover:border border-gray-400 border flex items-center justify-center" style={{ height: '80px' }}>
                  <img src={product.image} alt={`view ${i}`} className="w-auto h-auto max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-sm p-4">
            <h1 className="text-lg sm:text-2xl font-bold text-amazon-text mb-2">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <span className="text-sm text-gray-600">{product.reviews} reviews</span>
            </div>

            {/* Price */}
            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-3xl font-bold text-amazon-text">
                ₹{product.price.toLocaleString()}
              </p>
              <p className="text-sm text-green-600 font-semibold mt-1">
                Free delivery
              </p>
            </div>

            {/* Description */}
            <div className="mb-4">
              <h3 className="font-bold text-amazon-text mb-2">About this item</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {product.description}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                <li>High quality product</li>
                <li>Best price guarantee</li>
                <li>Easy returns</li>
                <li>Secure payment</li>
              </ul>
            </div>

            {/* Stock Status */}
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-sm">
              <p className="text-sm font-semibold text-green-700">
                ✓ In Stock - Order now
              </p>
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="bg-white rounded-sm p-4 h-fit sticky top-24">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                Price: <span className="font-bold text-amazon-text text-lg">₹{product.price.toLocaleString()}</span>
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-amazon-text mb-2 block">
                Quantity:
              </label>
              <div className="flex items-center border border-gray-300 rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100 transition"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 text-center border-l border-r border-gray-300 py-1 focus:outline-none"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <button
              onClick={handleAddToCart}
              className={`w-full text-sm font-bold py-3 rounded transition-all duration-200 mb-2 ${
                isAdding
                  ? 'bg-green-500 text-white'
                  : 'bg-amazon-orange text-amazon-text hover:bg-yellow-400'
              }`}
            >
              {isAdding ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
            <button className="w-full text-sm font-bold py-3 rounded bg-amazon-darkNav text-white hover:bg-gray-800 transition">
              Buy Now
            </button>

            {/* Additional Info */}
            <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-600 space-y-2">
              <p>🚚 Free delivery</p>
              <p>🛡️ Secure transaction</p>
              <p>↩️ 7 days return policy</p>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-sm p-4">
          <h3 className="text-lg font-bold text-amazon-text mb-3">Specifications</h3>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-semibold text-gray-700 w-1/3">Category</td>
                <td className="py-2 text-gray-600">{product.category}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-semibold text-gray-700">Price</td>
                <td className="py-2 text-gray-600">₹{product.price.toLocaleString()}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-semibold text-gray-700">Rating</td>
                <td className="py-2 text-gray-600">{product.rating} ★ ({product.reviews} reviews)</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-gray-700">Availability</td>
                <td className="py-2 text-green-600 font-semibold">In Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
