// Navbar Component - Enhanced with routing and search
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const categories = ['All', 'Electronics', 'Fashion', 'Home & Kitchen', 'Mobiles', 'Beauty'];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput)}`);
      setSearchInput('');
    }
  };

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      navigate('/');
    } else {
      navigate(`/category/${category}`);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-amazon-darkNav text-white shadow-lg">
      {/* Main Navbar */}
      <div className="px-2 sm:px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4 flex-wrap justify-between sm:justify-start">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0.5 hover:opacity-80 transition duration-200 flex-shrink-0">
            <div className="text-2xl sm:text-3xl font-bold text-amazon-orange">amazon</div>
            <span className="text-xs sm:text-sm font-light mt-1">.in</span>
          </Link>

          {/* Delivery Location - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-2 hover:opacity-80 cursor-pointer px-3 py-2 rounded hover:bg-amazon-darkGray transition duration-200">
            <span className="text-xl">📍</span>
            <div className="text-xs">
              <div className="text-gray-300">Delivering to</div>
              <div className="font-semibold">Select location</div>
            </div>
          </div>

          {/* Search Bar - Responsive and improved */}
          <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-sm lg:max-w-2xl items-stretch mx-1 lg:mx-3 rounded-md overflow-hidden">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-amazon-lightGray text-amazon-text px-3 py-2 text-xs sm:text-sm focus:outline-none font-semibold"
            >
              {categories.map(cat => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search Amazon.in"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 px-4 py-2 text-xs sm:text-sm text-amazon-text focus:outline-none"
            />
            <button 
              type="submit"
              className="bg-amazon-orange text-amazon-text px-4 py-2 hover:bg-yellow-400 transition duration-200 font-semibold text-sm flex items-center gap-2"
            >
              <span>🔍</span>
            </button>
          </form>

          {/* Right Navigation - Improved spacing */}
          <div className="flex items-center gap-1 sm:gap-3 lg:gap-4 text-xs sm:text-sm whitespace-nowrap">
            
            {/* Language - Hidden on small screens */}
            <div className="hidden md:flex items-center gap-1 cursor-pointer hover:opacity-80 transition duration-200 px-2 py-2 rounded hover:bg-amazon-darkGray">
              <span>🌐</span>
              <span className="hidden lg:inline">EN</span>
            </div>

            {/* Account & Lists */}
            <div className="flex flex-col cursor-pointer hover:opacity-80 transition duration-200 px-2 py-2 rounded hover:bg-amazon-darkGray">
              <span className="text-gray-300 text-xs hidden sm:inline">Hello,</span>
              <span className="font-semibold text-xs sm:text-sm">Account</span>
            </div>

            {/* Returns & Orders - Hidden on small screens */}
            <div className="hidden md:flex flex-col cursor-pointer hover:opacity-80 transition duration-200 px-2 py-2 rounded hover:bg-amazon-darkGray">
              <span className="text-gray-300 text-xs">Returns</span>
              <span className="font-semibold text-xs sm:text-sm">& Orders</span>
            </div>

            {/* Cart - With badge */}
            <Link 
              to="/cart" 
              className="flex items-center cursor-pointer hover:opacity-80 transition duration-200 relative px-2 py-2 rounded hover:bg-amazon-darkGray gap-1"
            >
              <span className="text-2xl">🛒</span>
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 bg-amazon-orange text-amazon-text text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <form onSubmit={handleSearch} className="sm:hidden bg-amazon-secNav px-2 py-2 flex gap-2">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-1 px-3 py-2 text-sm rounded text-amazon-text focus:outline-none"
        />
        <button type="submit" className="bg-amazon-orange px-3 py-2 rounded text-xs font-semibold hover:bg-yellow-400 transition duration-200">🔍</button>
      </form>

      {/* Secondary Navbar - Category Menu */}
      <div className="bg-amazon-secNav text-white text-xs sm:text-sm px-2 sm:px-4 py-2 border-t border-amazon-darkGray">
        <div className="max-w-7xl mx-auto flex gap-2 sm:gap-4 items-center overflow-x-auto whitespace-nowrap scrollbar-hide">
          {/* Menu Toggle - Mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex items-center gap-1 cursor-pointer hover:bg-amazon-darkGray px-2 py-1 transition duration-200 rounded flex-shrink-0"
          >
            ☰ Menu
          </button>

          {/* Categories with hover effect */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className="hidden sm:flex cursor-pointer hover:bg-amazon-darkGray px-3 py-2 transition duration-200 text-xs sm:text-sm font-light rounded flex-shrink-0"
            >
              {cat}
            </button>
          ))}

          {/* Additional links */}
          <Link to="/deals" className="hidden lg:flex cursor-pointer hover:bg-amazon-darkGray px-3 py-2 transition duration-200 text-sm font-light rounded flex-shrink-0">
            ⚡ Today's Deals
          </Link>
          <Link to="/bestsellers" className="hidden lg:flex cursor-pointer hover:bg-amazon-darkGray px-3 py-2 transition duration-200 text-sm font-light rounded flex-shrink-0">
            ⭐ Best Sellers
          </Link>
        </div>

        {/* Mobile Menu - Dropdown */}
        {menuOpen && (
          <div className="sm:hidden mt-2 bg-amazon-darkGray rounded p-2 space-y-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className="w-full text-left px-3 py-2 hover:bg-gray-600 transition rounded text-sm"
              >
                {cat}
              </button>
            ))}
            <Link to="/deals" className="block px-3 py-2 hover:bg-gray-600 transition rounded text-sm">
              Today's Deals
            </Link>
            <Link to="/bestsellers" className="block px-3 py-2 hover:bg-gray-600 transition rounded text-sm">
              Best Sellers
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
