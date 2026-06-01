// CartPage.jsx - Shopping cart page with professional layout
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice > 500 ? 0 : 50;
  const tax = Math.round(totalPrice * 0.1);
  const grandTotal = totalPrice + tax + shippingCost;
  const savings = totalPrice > 1000 ? Math.round(totalPrice * 0.15) : 0;

  if (cartItems.length === 0) {
    return (
      <div className="bg-amazon-lightGray min-h-screen py-8 px-2 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-amazon-text mb-6">Shopping Cart</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 sm:p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
            <p className="text-gray-500 mb-8">Add some products to get started!</p>
            <Link 
              to="/"
              className="inline-block bg-amazon-orange text-amazon-text font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-200 shadow-md"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amazon-lightGray min-h-screen py-6 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-amazon-text mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-4">
            {/* Cart Items */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`flex gap-4 p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 ${
                    index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  {/* Product Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-24 sm:w-28 h-24 sm:h-28 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-auto h-auto max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-200"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561182?w=400&h=400&fit=crop';
                        }}
                      />
                    </div>
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="text-sm sm:text-base font-semibold text-amazon-text hover:text-amazon-orange transition-colors duration-200 line-clamp-2 mb-2">
                          {item.title}
                        </h3>
                      </Link>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-yellow-500">★</span>
                        <span className="text-xs text-gray-600">(128 reviews)</span>
                      </div>

                      <p className="text-sm text-green-600 font-semibold">✓ In stock</p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-sm font-semibold text-gray-700">Qty:</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 transition-colors duration-200 font-semibold text-sm flex items-center justify-center"
                      >
                        −
                      </button>
                      <span className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 transition-colors duration-200 font-semibold text-sm flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price & Actions */}
                  <div className="text-right flex flex-col justify-between">
                    <div>
                      <p className="text-lg sm:text-xl font-bold text-amazon-text">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500 line-through mt-1">
                        ₹{((item.price + 299) * item.quantity).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-blue-600 hover:text-red-600 font-semibold transition-colors duration-200 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Savings Banner */}
            {savings > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <span className="text-2xl">💚</span>
                <div>
                  <p className="font-semibold text-green-800">Great savings!</p>
                  <p className="text-sm text-green-700">You are saving ₹{savings} on this order</p>
                </div>
              </div>
            )}
          </div>

          {/* Price Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-amazon-text mb-4 pb-4 border-b-2 border-gray-200">
                Price Details
              </h3>

              {/* Price Breakdown */}
              <div className="space-y-4 text-sm mb-6 pb-6 border-b-2 border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Price ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</span>
                  <span className="font-semibold text-amazon-text">₹{totalPrice.toLocaleString()}</span>
                </div>
                
                {shippingCost === 0 ? (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Delivery Charges</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Delivery Charges</span>
                    <span className="font-semibold text-amazon-text">₹{shippingCost}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tax</span>
                  <span className="font-semibold text-amazon-text">₹{tax}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-green-600">Discount</span>
                    <span className="font-semibold text-green-600">−₹{savings}</span>
                  </div>
                )}
              </div>

              {/* Grand Total */}
              <div className="mb-6 p-4 bg-amazon-lightGray rounded-lg border-2 border-amazon-orange">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-amazon-text">Total Amount</span>
                  <span className="text-amazon-text">₹{(grandTotal - savings).toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-amazon-orange text-amazon-text font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-200 shadow-md hover:shadow-lg mb-3 active:scale-95">
                Proceed to Checkout
              </button>

              <Link 
                to="/"
                className="block text-center text-amazon-orange font-semibold py-3 border-2 border-amazon-orange rounded-lg hover:bg-amazon-orange hover:text-amazon-text transition-colors duration-200"
              >
                Continue Shopping
              </Link>

              {/* Safe Checkout Info */}
              <div className="mt-6 pt-6 border-t-2 border-gray-200 space-y-3 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-lg flex-shrink-0">🔒</span>
                  <span>Secure transaction. Your data is encrypted and safe.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg flex-shrink-0">✓</span>
                  <span>7-day easy return policy on all items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
